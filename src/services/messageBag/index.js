export default class {
  constructor(component$) {
    this.component$ = component$
    this.prepends = {
      errors: [],
      messages: [],
    }
    this.appends = {
      errors: [],
      messages: [],
    }
  }

  get errors() {
    return _.concat(
      this.prepends.errors,
      this.component$.errors,
      this.appends.errors,
    )
  }

  get messages() {
    return _.concat(
      this.prepends.messages,
      this.appends.messages,
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

  /**
   * The first message
   * 
   * @type {string}
   */
  get message() {
    return _.head(this.messages)
  }

  prepend(msg, type) {
    if (type === undefined) {
      var type = 'error'
    }

    this.prepends[type == 'error' ? 'errors' : 'messages'].unshift(msg)
  }

  append(msg, type) {
    if (type === undefined) {
      var type = 'error'
    }

    this.appends[type == 'error' ? 'errors' : 'messages'].push(msg)
  }

  clear(type) {
    if (type === undefined) {
      var type = 'all'
    }

    if (type == 'all') {
      this.prepends = {
        errors: [],
        messages: [],
      }
      this.appends = {
        errors: [],
        messages: [],
      }
    } else {
      this.prepends[type] = []
      this.appends[type] = []
    }
  }

  clearBefore(type) {
    if (type === undefined) {
      var type = 'all'
    }

    if (type == 'all') {
      this.prepends = {
        errors: [],
        messages: [],
      }
    } else {
      this.prepends[type] = []
    }
  }

  clearAfter(type) {
    if (type === undefined) {
      var type = 'all'
    }

    if (type == 'all') {
      this.appends = {
        errors: [],
        messages: [],
      }
    } else {
      this.appends[type] = []
    }
  }
}