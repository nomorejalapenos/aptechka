import { Damped } from '@packages/animation'
import { Attribute } from '@packages/attribute'
import { WheelControls, KeyboardControls, ControlsValue } from '@packages/controls'
import { define, CustomElement } from '@packages/custom-element'
import { TICK_ORDER, RESIZE_ORDER } from '@packages/order'
import { resizer } from '@packages/resizer'
import { scrollEnties } from '@packages/scroll-entries'
import { Store } from '@packages/store'
import {
  getCumulativeOffsetTop,
  getCumulativeOffsetLeft,
  Axes2D,
  isBrowser,
  clamp,
} from '@packages/utils'

export type ScrollBehaviour = 'smooth' | 'instant'

class Section {
  #element: HTMLElement
  #scrollElement: ScrollElement

  #size = 0
  #position = 0

  constructor(element: HTMLElement, scrollElement: ScrollElement) {
    this.#element = element
    this.#scrollElement = scrollElement

    scrollEnties.register(this.#element)
  }

  public get size() {
    return this.#size
  }

  public get position() {
    return this.#position
  }

  public destroy() {
    scrollEnties.unregister(this.#element)
    this.#element.style.transform = ''
  }

  public resize() {
    this.#size = this.#scrollElement.vertical
      ? this.#element.offsetHeight
      : this.#element.offsetWidth

    this.#position = this.#scrollElement.vertical
      ? getCumulativeOffsetTop(this.#element)
      : getCumulativeOffsetLeft(this.#element)

    this.#position -= this.#scrollElement.position
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

    scrollEnties.update(this.#element, this.#scrollElement.axisAttibute.current, offset)

    const value = clamp(
      this.#scrollElement.currentScrollValue + offset,
      this.#position - this.#scrollElement.viewportSize,
      this.#position + this.#size
    )

    if (this.#scrollElement.vertical) {
      this.#element.style.transform = `translate3d(0px, ${value * -1}px, 0px)`
    } else {
      this.#element.style.transform = `translate3d(${value * -1}px, 0px, 0px)`
    }
  }
}

@define('e-scroll')
export class ScrollElement extends CustomElement {
  #damped: Damped = null!

  #axisAttribute = new Attribute<Axes2D>(this, 'axis', 'y')
  #pagesAttribute = new Attribute<number>(this, 'pages', 0, {
    validate: (v) => Math.max(0, v - 1),
  })
  #sectionalAttribute = new Attribute<boolean>(this, 'sectional', false)
  #infiniteAttribute = new Attribute<boolean>(this, 'infinite', false)
  #splitAttribute = new Attribute<boolean>(this, 'split', false)
  #dampingAttribute = new Attribute<number>(this, 'damping', 0.03)
  #disabledAttribute = new Attribute<boolean>(this, 'disabled', false)
  #hibernatedAttribute = new Attribute<boolean>(this, 'hibernated', false)

  #contentElement: HTMLElement = null!
  #sections: Array<Section> = []

  #position = 0
  #viewportSize = 0
  #scrollSize = 0

  #wheelControls: WheelControls = null!
  #keyboardControls: KeyboardControls = null!

  #counter = new Store(0)

  #overscroll = 0
  #distance = 0

  constructor() {
    super()

    if (isBrowser) {
      this.#damped = new Damped({ damping: 0.01, min: 0, order: TICK_ORDER.SCROLL })

      const shadowRoot = this.attachShadow({ mode: 'open' })

      const styleElement = document.createElement('style')
      styleElement.textContent = `
        :host {
          position: relative;

          width: 100%;
          height: 100%;

          display: block;
          outline: none;
        }

        :host([hibernated="true"]) {
          display: contents;
        }

        .static {
          position: absolute;
          top: 0;
          left: 0;

          z-index: 1;

          width: 100%;
          height: 100%;

        }
  
        .content {
          display: flex;
        }

        :host([hibernated="true"]) .content {
          display: contents;
        }
  
        ::slotted(*) {
          flex-shrink: 0;
        }
      `
      shadowRoot.appendChild(styleElement)

      this.tabIndex = 0

      const staticElement = document.createElement('div')
      staticElement.classList.add('static')
      shadowRoot.appendChild(staticElement)

      const staticSlotElement = document.createElement('slot')
      staticSlotElement.setAttribute('name', 'static')
      staticElement.appendChild(staticSlotElement)

      this.#contentElement = document.createElement('div')
      this.#contentElement.classList.add('content')
      shadowRoot.appendChild(this.#contentElement)

      const defaultSlotElement = document.createElement('slot')
      this.#contentElement.appendChild(defaultSlotElement)

      this.#wheelControls = new WheelControls({ element: this })
      this.#wheelControls.changeEvent.subscribe(this.#controlsListener)

      this.#keyboardControls = new KeyboardControls({ element: this })
      this.#keyboardControls.changeEvent.subscribe(this.#controlsListener)

      this.#axisAttribute.subscribe(({ current }) => {
        this.#contentElement.style.flexDirection = current === 'x' ? 'row' : 'column'
        this.#wheelControls.axis = current

        if (this.isConnected) {
          this.#resizeListener()
        }
      })

      this.#pagesAttribute.subscribe(() => {
        if (this.isConnected) {
          this.#resizeListener()
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
          this.#damped.max = this.#scrollSize
          this.#damped.min = 0
        } else {
          if (this.isConnected) {
            if (!this.#sections.length) {
              this.#splitAttribute.current = true
            }
          }

          if (this.#sections.length) {
            this.#damped.max = Infinity
            this.#damped.min = -Infinity
          }
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

  public get sectionalAttibute() {
    return this.#sectionalAttribute
  }

  public get infiniteAttribute() {
    return this.#infiniteAttribute
  }

  public get splitAttibute() {
    return this.#splitAttribute
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

  public get viewportSize() {
    return this.#viewportSize
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

  // TODO: Поправить значение когда скролл не секционный ??
  public scrollToSection(sectionIndex: number, behaviour: ScrollBehaviour = 'smooth') {
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

      if (this.#counter.current === 0 && previousCounter === limit) {
        shiftValue = this.#scrollSize + this.#viewportSize - previousSection.position
      } else if (this.#counter.current === limit && previousCounter === 0) {
        shiftValue = currentSection.position - (this.#scrollSize + this.#viewportSize)
      } else {
        shiftValue = currentSection.position - previousSection.position
      }

      this.#damped.shift(shiftValue, behaviour === 'instant')
    }
  }

  public shiftSections(direction: number, behaviour: ScrollBehaviour = 'smooth') {
    if (!this.#sections.length) {
      return
    }

    this.scrollToSection(this.#counter.current + direction, behaviour)
  }

  protected connectedCallback() {
    this.#awake()

    this.#axisAttribute.observe()
    this.#pagesAttribute.observe()
    this.#sectionalAttribute.observe()
    this.#infiniteAttribute.observe()
    this.#splitAttribute.observe()
    this.#dampingAttribute.observe()
    this.#disabledAttribute.observe()
    this.#hibernatedAttribute.observe()
  }

  protected disconnectedCallback() {
    this.#hibernate()

    this.#axisAttribute.unobserve()
    this.#pagesAttribute.unobserve()
    this.#sectionalAttribute.unobserve()
    this.#infiniteAttribute.unobserve()
    this.#splitAttribute.unobserve()
    this.#dampingAttribute.unobserve()
    this.#disabledAttribute.unobserve()
    this.#hibernatedAttribute.unobserve()
  }

  #split() {
    this.#unsplit()

    const slot = this.#contentElement!.querySelector('slot') as HTMLSlotElement

    slot.assignedElements().forEach((element) => {
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
    resizer.unsubscribe(this.#resizeListener)

    this.#damped.reset()

    this.#disable()

    this.#contentElement.style.transform = ''

    if (this.#splitAttribute.current) {
      this.#unsplit()
    }

    scrollEnties.unregister(this)
  }

  #awake() {
    if (this.#splitAttribute.current) {
      this.#split()
    }

    scrollEnties.register(this)

    resizer.subscribe(this.#resizeListener, RESIZE_ORDER.SCROLL)

    this.#enable()
  }

  #resizeListener = () => {
    const prevProgress = this.currentScrollValue / this.#scrollSize

    this.#position = this.vertical ? getCumulativeOffsetTop(this) : getCumulativeOffsetLeft(this)
    this.#viewportSize = this.vertical ? this.offsetHeight : this.offsetWidth

    if (this.#pagesAttribute.current) {
      this.#scrollSize = this.#viewportSize * this.#pagesAttribute.current
      const contentSize = this.#scrollSize + this.#viewportSize

      if (this.vertical) {
        this.#contentElement.style.width = contentSize + 'px'
        this.#contentElement.style.height = '100%'
      } else {
        this.#contentElement.style.height = contentSize + 'px'
        this.#contentElement.style.width = '100%'
      }
    } else {
      if (this.vertical) {
        this.#contentElement.style.width = '100%'
        this.#contentElement.style.height = 'max-content'
        this.#scrollSize = this.#contentElement.offsetHeight - this.#viewportSize
      } else {
        this.#contentElement.style.width = 'max-content'
        this.#contentElement.style.height = '100%'
        this.#scrollSize = this.#contentElement.offsetWidth - this.#viewportSize
      }
    }

    if (!this.#infiniteAttribute) {
      this.#damped.max = this.#scrollSize
    }

    this.#sections.forEach((section) => {
      section.resize()
      section.transform()
    })

    if (this.#infiniteAttribute.current && this.#sections.length) {
      const lastSection = this.#sections[this.#sections.length - 1]
      const lastSectionMax = lastSection.position + lastSection.size - this.#viewportSize
      const lastSectionMargin = this.#scrollSize - lastSectionMax
      this.#distance = lastSection.position + lastSection.size + lastSectionMargin
    } else {
      this.#distance = this.#scrollSize
    }

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

    scrollEnties.update(this, this.#axisAttribute.current, this.currentScrollValue)
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
          this.#damped.shift(direction * this.#viewportSize)
        }
      } else {
        this.#damped.shift(value)
      }
    } else if (value === 'min') {
      this.#damped.set(this.#damped.min)
    } else if (value === 'max') {
      this.#damped.set(this.#damped.delta)
    }
  }

  #getScrollValue(type: 'target' | 'current' = 'current') {
    if (this.#infiniteAttribute.current && this.#sections.length) {
      const mod = this.#damped[type] % (this.#scrollSize + this.#viewportSize)
      const value = mod < 0 ? this.#scrollSize + mod + this.#viewportSize : mod

      this.#overscroll = Math.max(0, value - this.#scrollSize)

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