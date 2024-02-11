import { Damped } from '@packages/animation'
import { Attribute } from '@packages/attribute'
import {
  WheelControls,
  KeyboardControls,
  ControlsValue,
} from '@packages/controls'
import { define, CustomElement } from '@packages/custom-element'
import { TICK_ORDER, RESIZE_ORDER } from '@packages/order'
import { windowResizer } from '@packages/window-resizer'
import { scrollEntries } from '@packages/scroll-entries'
import { Derived, Store, StorePassport } from '@packages/store'
import {
  getCumulativeOffsetTop,
  getCumulativeOffsetLeft,
  Axes2D,
  isBrowser,
  clamp,
} from '@packages/utils'
import {
  createStylesheet,
  div,
  element,
  slot,
} from '@packages/element-constructor'

export type ScrollBehaviour = 'smooth' | 'instant'

class Section {
  #element: HTMLElement
  #scrollElement: ScrollElement

  #size = 0
  #position = 0

  constructor(element: HTMLElement, scrollElement: ScrollElement) {
    this.#element = element
    this.#scrollElement = scrollElement

    scrollEntries.register(this.#element)
  }

  public get size() {
    return this.#size
  }

  public get position() {
    return this.#position
  }

  public destroy() {
    scrollEntries.unregister(this.#element)
    this.#element.style.transform = ''
  }

  public resize() {
    this.#size = this.#scrollElement.vertical
      ? this.#element.offsetHeight
      : this.#element.offsetWidth

    if (this.#scrollElement.axisAttibute.current === 'x') {
      this.#size += parseFloat(getComputedStyle(this.#element).marginRight)
    } else if (this.#scrollElement.axisAttibute.current === 'y') {
      this.#size += parseFloat(getComputedStyle(this.#element).marginBottom)
    }

    this.#position = this.#scrollElement.vertical
      ? getCumulativeOffsetTop(this.#element, this.#scrollElement)
      : getCumulativeOffsetLeft(this.#element, this.#scrollElement)

    this.#position -= this.#scrollElement.contentPosition
  }

  public transform() {
    let offset = 0

    if (
      this.#scrollElement.infiniteAttribute.current &&
      this.#scrollElement.overscroll &&
      this.#position + this.#size < this.#scrollElement.currentScrollValue
    ) {
      offset = this.#scrollElement.distance * -1
    }

    scrollEntries.update(
      this.#element,
      this.#scrollElement.axisAttibute.current,
      offset
    )

    const value = clamp(
      this.#scrollElement.currentScrollValue + offset,
      this.#position -
        this.#scrollElement.contentViewportSize -
        this.#scrollElement.viewportsDiff,
      this.#position + this.#size + this.#scrollElement.viewportsDiff
    )

    if (this.#scrollElement.vertical) {
      this.#element.style.transform = `translate3d(0px, ${value * -1}px, 0px)`
    } else {
      this.#element.style.transform = `translate3d(${value * -1}px, 0px, 0px)`
    }
  }
}

const stylesheet = createStylesheet({
  ':host': {
    position: 'relative',

    width: '100%',
    height: '100%',

    display: 'block',
    outline: 'none',
  },

  ':host([hibernated="true"])': {
    display: 'contents',
  },

  '.static': {
    position: 'absolute',
    top: '0',
    left: '0',

    zIndex: '1',

    width: '100%',
    height: '100%',
  },

  '.content': {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },

  ':host([hibernated="true"]) .content': {
    display: 'contents',
  },

  '::slotted(*)': {
    flexShrink: '0',
  },
})

@define('e-scroll')
export class ScrollElement extends CustomElement {
  #damped: Damped = null!

  #axisAttribute = new Attribute<Axes2D>(this, 'axis', 'y')
  #pagesAttribute = new Attribute<number>(this, 'pages', 0, {
    validate: (v) => Math.max(0, v - 1),
  })
  #splitAttribute = new Attribute<boolean>(this, 'split', false)
  #sectionalAttribute = new Attribute<boolean>(this, 'sectional', false)
  #wheelMaxDeltaAttribute = new Attribute<boolean>(
    this,
    'wheel-max-delta',
    false
  )
  #infiniteAttribute = new Attribute<boolean>(this, 'infinite', false)
  #dampingAttribute = new Attribute<number>(this, 'damping', 0.03)
  #disabledAttribute = new Attribute<boolean>(this, 'disabled', false)
  #hibernatedAttribute = new Attribute<boolean>(this, 'hibernated', false)

  #contentElement: HTMLElement = null!
  #slotElement: HTMLSlotElement = null!
  #sections: Array<Section> = []

  #position = 0
  #contentPosition = 0
  #scrollViewportSize = 0
  #contentViewportSize = 0
  #scrollSize = 0

  #wheelControls: WheelControls = null!
  #keyboardControls: KeyboardControls = null!

  #counter = new Store(0)

  #overscroll = 0
  #distance = 0

  constructor(name?: string) {
    super()

    if (isBrowser) {
      let passport: StorePassport<'number'> | undefined

      let passportName = name || this.getAttribute('name')

      if (passportName) {
        passport = {
          name: passportName,
        }
      }

      this.#damped = new Damped({
        damping: 0.01,
        min: 0,
        order: TICK_ORDER.SCROLL,
        passport,
      })

      this.openShadow(stylesheet)

      this.tabIndex = 0

      element(this, {
        attributes: {
          tabIndex: 0,
        },
        shadowChildren: [
          div({
            class: 'static',
            children: [slot({ attributes: { name: 'static' } })],
          }),
          div({
            class: 'content',
            children: [slot({ created: (e) => (this.#slotElement = e) })],
            style: {
              flexDirection: new Derived(this.#axisAttribute, (e) =>
                e === 'x' ? 'row' : 'column'
              ),
            },
            created: (e) => (this.#contentElement = e),
          }),
        ],
      })

      this.#wheelControls = new WheelControls({ element: this })
      this.#wheelControls.changeEvent.subscribe(this.#controlsListener)

      this.#keyboardControls = new KeyboardControls({ element: this })
      this.#keyboardControls.changeEvent.subscribe(this.#controlsListener)

      this.#axisAttribute.subscribe(({ current }) => {
        this.#wheelControls.axis = this.#wheelMaxDeltaAttribute.current
          ? 'max'
          : current

        if (this.isConnected) {
          this.#resizeListener()
        }
      })

      this.#wheelMaxDeltaAttribute.subscribe((e) => {
        this.#wheelControls.axis = e.current
          ? 'max'
          : this.#axisAttribute.current
      })

      this.#pagesAttribute.subscribe(() => {
        if (this.isConnected) {
          this.#resizeListener()
        }
      })

      this.#splitAttribute.subscribe(({ current }) => {
        if (this.isConnected) {
          if (current) {
            this.#split()
          } else {
            this.#unsplit()
          }
        }
      })

      this.#sectionalAttribute.subscribe((e) => {
        this.#counter.current = 0
        this.#wheelControls.debounce = e.current
        this.#damped.reset()

        if (this.isConnected) {
          if (e.current && !e.previous) {
            this.#split()
          } else if (!e.current && e.previous) {
            this.#unsplit()
          }
        }
      })

      this.#infiniteAttribute.subscribe((e) => {
        if (!e.current) {
          this.#overscroll = 0
          this.#damped.max.current = this.#scrollSize
          this.#damped.min.current = 0
        } else {
          if (this.isConnected) {
            if (!this.#sections.length) {
              this.#splitAttribute.current = true
            }
          }

          if (this.#sections.length) {
            this.#damped.max.current = Infinity
            this.#damped.min.current = -Infinity
          }
        }
      })

      this.#dampingAttribute.subscribe((e) => {
        this.#damped.damping = e.current
      })

      this.#disabledAttribute.subscribe((e) => {
        if (e.current && !e.previous) {
          this.#disable()
        } else if (!e.current && e.previous) {
          this.#enable()
        }
      })

      this.#hibernatedAttribute.subscribe((e) => {
        if (e.current && !e.previous) {
          this.#hibernate()
        } else if (!e.current && e.previous) {
          this.#awake()
        }
      })
    }
  }

  public get currentScrollValue() {
    return this.#getScrollValue('current')
  }

  public get targetScrollValue() {
    return this.#getScrollValue('target')
  }

  public get damped() {
    return this.#damped
  }

  public get dampedAttibute() {
    return this.#damped
  }

  public get axisAttibute() {
    return this.#axisAttribute
  }

  public get pagesAttibute() {
    return this.#pagesAttribute
  }

  public get splitAttibute() {
    return this.#splitAttribute
  }

  public get sectionalAttibute() {
    return this.#sectionalAttribute
  }

  public get infiniteAttribute() {
    return this.#infiniteAttribute
  }

  public get dampingAttibute() {
    return this.#dampingAttribute
  }

  public get disabledAttibute() {
    return this.#disabledAttribute
  }

  public get hibernatedAttibute() {
    return this.#hibernatedAttribute
  }

  public get position() {
    return this.#position
  }

  public get contentPosition() {
    return this.#contentPosition
  }

  public get scrollViewportSize() {
    return this.#scrollViewportSize
  }

  public get contentViewportSize() {
    return this.#contentViewportSize
  }

  public get scrollSize() {
    return this.#scrollSize
  }

  public get counter() {
    return this.#counter
  }

  public get distance() {
    return this.#distance
  }

  public get overscroll() {
    return this.#overscroll
  }

  public get vertical() {
    return this.#axisAttribute.current === 'y'
  }

  public get currentProgress() {
    return this.currentScrollValue / this.#distance
  }

  public get targetProgress() {
    return this.targetScrollValue / this.#distance
  }

  public get viewportsDiff() {
    return this.#scrollViewportSize - this.#contentViewportSize
  }

  // TODO: Поправить значение когда скролл не секционный ??
  public scrollToSection(
    sectionIndex: number,
    behaviour: ScrollBehaviour = 'smooth'
  ) {
    if (!this.#sections.length) {
      return
    }

    const previousCounter = this.#counter.current

    this.#setCounter(sectionIndex)

    const previousSection = this.#sections[previousCounter]
    const currentSection = this.#sections[this.#counter.current]

    if (previousSection && currentSection) {
      let shiftValue = 0

      const limit = this.#sections.length - 1

      if (this.#infiniteAttribute.current) {
        if (this.#counter.current === 0 && previousCounter === limit) {
          shiftValue =
            this.#scrollSize +
            this.#contentViewportSize -
            previousSection.position
        } else if (this.#counter.current === limit && previousCounter === 0) {
          shiftValue =
            currentSection.position -
            (this.#scrollSize + this.#contentViewportSize)
        } else {
          shiftValue = currentSection.position - previousSection.position
        }
      } else {
        shiftValue = currentSection.position - previousSection.position
      }

      this.#damped.shift(shiftValue, behaviour === 'instant')
    }
  }

  public shiftSections(
    direction: number,
    behaviour: ScrollBehaviour = 'smooth'
  ) {
    if (!this.#sections.length) {
      return
    }

    this.scrollToSection(this.#counter.current + direction, behaviour)
  }

  protected connectedCallback() {
    this.#awake()
  }

  protected disconnectedCallback() {
    this.#hibernate()
  }

  #split() {
    this.#unsplit()

    this.#slotElement.assignedElements().forEach((element) => {
      if (element instanceof HTMLElement) {
        this.#sections.push(new Section(element, this))
      }
    })

    this.#contentElement.style.transform = ''

    this.#resizeListener()
  }

  #unsplit() {
    this.#sections.forEach((section) => {
      section.destroy()
    })

    this.#sections = []
  }

  #disable() {
    this.#damped.unsubscribe(this.#animatedChangeListener)
    this.#damped.unlistenAnimationFrame()

    this.#wheelControls.disconnect()
    this.#keyboardControls.disconnect()
  }

  #enable() {
    this.#damped.subscribe(this.#animatedChangeListener)

    this.#wheelControls.connect()
    this.#keyboardControls.connect()
  }

  #hibernate() {
    windowResizer.unsubscribe(this.#resizeListener)

    this.#damped.reset()

    this.#disable()

    this.#contentElement.style.transform = ''

    if (this.#splitAttribute.current) {
      this.#unsplit()
    }

    scrollEntries.unregister(this)
  }

  #awake() {
    if (this.#splitAttribute.current) {
      this.#split()
    }

    scrollEntries.register(this)

    windowResizer.subscribe(this.#resizeListener, RESIZE_ORDER.SCROLL)

    this.#enable()
  }

  #resizeListener = () => {
    const prevProgress = this.targetScrollValue / this.#scrollSize

    this.#position = this.vertical
      ? getCumulativeOffsetTop(this)
      : getCumulativeOffsetLeft(this)

    this.#contentPosition = this.vertical
      ? getCumulativeOffsetTop(this.#contentElement, this)
      : getCumulativeOffsetLeft(this.#contentElement, this)

    this.#scrollViewportSize = this.vertical
      ? this.offsetHeight
      : this.offsetWidth

    this.#contentViewportSize = this.vertical
      ? this.#contentElement.offsetHeight
      : this.#contentElement.offsetWidth

    if (this.#pagesAttribute.current) {
      this.#scrollSize =
        this.#contentViewportSize * this.#pagesAttribute.current
      const contentViewportSize = this.#scrollSize + this.#contentViewportSize

      if (this.vertical) {
        this.#contentElement.style.width = contentViewportSize + 'px'
        this.#contentElement.style.height = '100%'
      } else {
        this.#contentElement.style.height = contentViewportSize + 'px'
        this.#contentElement.style.width = '100%'
      }
    } else {
      this.#contentElement.style.height = '100%'
      this.#contentElement.style.width = '100%'

      const children =
        this.#slotElement.assignedElements() as Array<HTMLElement>
      const lastChild = children[children.length - 1]

      if (lastChild) {
        if (this.vertical) {
          this.#distance =
            getCumulativeOffsetTop(lastChild, this) +
            lastChild.offsetHeight +
            parseFloat(getComputedStyle(lastChild).marginBottom)
        } else {
          this.#distance =
            getCumulativeOffsetLeft(lastChild, this) +
            lastChild.offsetWidth +
            parseFloat(getComputedStyle(lastChild).marginRight)
        }
      } else {
        this.#scrollSize = 0
      }
    }

    this.#scrollSize =
      this.#distance - this.#contentViewportSize - this.#contentPosition

    if (this.#infiniteAttribute.current) {
      this.#distance -= this.#contentPosition
    }

    if (!this.#infiniteAttribute.current) {
      this.#damped.max.current = this.#scrollSize
    }

    this.#sections.forEach((section) => {
      section.resize()
      section.transform()
    })

    if (this.#sectionalAttribute.current && this.#sections.length) {
      const section = this.#sections[this.#counter.current]
      this.#damped.set(section.position, true)
    } else {
      this.#damped.set(prevProgress * this.#scrollSize, true)
    }
  }

  #animatedChangeListener = () => {
    if (this.#sections.length) {
      let counter = 0

      for (let index = 0; index < this.#sections.length; index++) {
        const section = this.#sections[index]

        section.transform()

        if (this.targetScrollValue >= section.position) {
          counter = index
        }
      }

      this.#counter.current = counter
    } else {
      if (this.vertical) {
        this.#contentElement.style.transform = `translate3d(0px, ${
          this.currentScrollValue * -1
        }px, 0px)`
      } else {
        this.#contentElement.style.transform = `translate3d(${
          this.currentScrollValue * -1
        }px, 0px, 0px)`
      }
    }

    scrollEntries.update(
      this,
      this.#axisAttribute.current,
      this.currentScrollValue
    )
  }

  #setCounter(value: number) {
    if (this.#infiniteAttribute.current) {
      this.#counter.current = value % this.#sections.length
      this.#counter.current =
        this.#counter.current < 0
          ? this.#sections.length + this.#counter.current
          : this.#counter.current
    } else {
      this.#counter.current = clamp(value, 0, this.#sections.length - 1)
    }
  }

  #controlsListener = (value: ControlsValue) => {
    if (typeof value === 'number') {
      if (this.#sectionalAttribute.current) {
        const direction = Math.sign(value)

        if (this.#sections.length) {
          this.shiftSections(direction)
        } else {
          this.#damped.shift(direction * this.#contentViewportSize)
        }
      } else {
        this.#damped.shift(value)
      }
    } else if (value === 'min') {
      this.#damped.set(this.#damped.min.current)
    } else if (value === 'max') {
      this.#damped.set(this.#damped.delta)
    }
  }

  #getScrollValue(type: 'target' | 'current' = 'current') {
    if (this.#infiniteAttribute.current && this.#sections.length) {
      const mod = this.#damped[type] % this.#distance

      const value =
        mod < 0
          ? this.#scrollSize + mod + this.#contentViewportSize
          : mod - 0.001

      this.#overscroll = Math.max(0, value - this.#scrollSize)

      console.log(this.#overscroll)

      return value
    } else {
      return this.#damped[type]
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'e-scroll': ScrollElement
  }
}