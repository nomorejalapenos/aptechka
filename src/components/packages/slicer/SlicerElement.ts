import { Word } from './Word.js'
import { Letter } from './Letter.js'
import { Media } from '@packages/media'

export class SlicerElement extends HTMLElement {
  #originalText = ''
  #words: Array<Word> = []
  #letters: Array<Letter> = []

  #media: Media | null = null

  public get wordsArray() {
    return this.#words
  }

  public get lettersArray() {
    return this.#letters
  }

  public get originalText() {
    return this.#originalText
  }

  protected connectedCallback() {
    this.#originalText = this.textContent?.trim() || ''

    if (this.hasAttribute('media')) {
      this.#media = new Media(this.getAttribute('media')!)

      this.#media.subscribe((e) => {
        if (e.current) {
          this.#split()
        } else if (!e.current && e.previous) {
          this.#unsplit()
        }
      })
    } else {
      this.#split()
    }
  }

  protected disconnectedCallback() {
    this.#unsplit()

    this.#media?.close()
  }

  #split() {
    this.innerHTML = ''

    let lettersAcc = 0

    this.#words = this.#originalText
      .replace(/  +/g, ' ')
      .split(' ')
      .map((text, index) => {
        const word = new Word({
          index,
          text,
          letters: this.hasAttribute('letters'),
          lettersAcc,
          clone: this.hasAttribute('clone'),
        })

        lettersAcc += word.letters.length
        this.#letters.push(...word.letters)

        return word
      })

    if (this.hasAttribute('index')) {
      this.#words.forEach((word) => {
        word.element.style.setProperty('--word-index', word.index.toString())
      })

      this.#letters.forEach((letter) => {
        letter.element.style.setProperty(
          '--letter-index',
          letter.index.toString()
        )
      })
    }

    this.#words.forEach((word, wi) => {
      this.appendChild(word.element)

      if (!word.hasNewLine && wi !== this.#words.length - 1) {
        word.element.insertAdjacentHTML('beforeend', '&nbsp;')
      }
    })

    this.style.setProperty('--words-length', this.#words.length.toString())
    this.style.setProperty('--letters-length', this.#letters.length.toString())
  }

  #unsplit() {
    this.#words = []
    this.textContent = this.#originalText
    this.style.removeProperty('--words-length')
    this.style.removeProperty('--letters-length')
  }
}

if (!customElements.get('e-slicer')) {
  customElements.define('e-slicer', SlicerElement)
}

declare global {
  interface HTMLElementTagNameMap {
    'e-slicer': SlicerElement
  }
}
