export class Source {
  #url: string
  #name: string
  #density: number
  #query: string
  #queryValue: number
  #queryType: 'max' | 'min' | 'max-ratio' | 'min-ratio'
  #extension: string

  constructor(url: string) {
    this.#url = url

    const firstQuestionIndex = url.indexOf('?')

    if (firstQuestionIndex >= 0) {
      url = url.slice(0, firstQuestionIndex)
    }

    const splitted = url.split('.')

    this.#name = splitted[0]

    const xpattern = /\d+x/g
    const xmatch = splitted.find((s) => s.match(xpattern))
    this.#density = xmatch ? parseInt(xmatch) : 1

    const maxpattern = /\d+max/g
    const minpattern = /\d+min/g
    const maxAspectPattern = /\d+mar/g
    const minAspectPattern = /\d+mir/g

    const maxmatch = splitted.find((s) => s.match(maxpattern))
    const minmatch = splitted.find((s) => s.match(minpattern))
    const maxRatioMatch = splitted.find((s) => s.match(maxAspectPattern))
    const minRatioMatch = splitted.find((s) => s.match(minAspectPattern))

    if (maxRatioMatch) {
      this.#queryValue = parseInt(maxRatioMatch)
      this.#queryType = 'max'
      this.#query = `(max-aspect-ratio: ${this.#queryValue})`
    } else if (minRatioMatch) {
      this.#queryValue = parseInt(minRatioMatch)
      this.#queryType = 'max'
      this.#query = `(min-aspect-ratio: ${this.#queryValue})`
    } else if (maxmatch) {
      this.#queryValue = parseInt(maxmatch)
      this.#queryType = 'max'
      this.#query = `(max-width: ${this.#queryValue}px)`
    } else if (minmatch) {
      this.#queryValue = parseInt(minmatch)
      this.#query = `(min-width: ${this.#queryValue}px)`
      this.#queryType = 'min'
    } else {
      this.#queryValue = 0
      this.#query = `(min-width: ${this.#queryValue}px)`
      this.#queryType = 'min'
    }

    this.#extension = '.' + splitted[splitted.length - 1]
  }

  public get url() {
    return this.#url
  }

  public get name() {
    return this.#name
  }

  public get density() {
    return this.#density
  }

  public get query() {
    return this.#query
  }

  public get extension() {
    return this.#extension
  }

  public get queryType() {
    return this.#queryType
  }

  public get queryValue() {
    return this.#queryValue
  }
}
