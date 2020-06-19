export default class {
  constructor(component$) {
    this.component$ = component$
    this.prepends = []
    this.appends = []
  }

  get errors() {
    return _.concat(
      this.prepends,
      this.component$.errors,
      this.appends
    )
  }

  /**
   * The first error
   * 
   * @type {string}
   */
  get error() {
    return _.head(this.errors)
  }

  prepend(error) {
    this.prepends.unshift(error)
  }

  append(error) {
    this.appends.push(error)
  }

  clear() {
    this.prepends = []
    this.appends = []
  }

  clearBefore() {
    this.prepends = []
  }

  clearAfter() {
    this.appends = []
  }
}