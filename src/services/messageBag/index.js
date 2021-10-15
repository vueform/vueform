import _ from 'lodash'

export default class messageBag {
  constructor(baseErrors) {
    this.baseErrors = baseErrors
    
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
      this.baseErrors,
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
      type = 'error'
    }

    this.prepends[type == 'error' ? 'errors' : 'messages'].unshift(msg)
  }

  append(msg, type) {
    if (type === undefined) {
      type = 'error'
    }

    this.appends[type == 'error' ? 'errors' : 'messages'].push(msg)
  }

  remove(msg, type) {
    if (type === undefined) {
      type = 'any'
    }

    if (['any', 'error'].indexOf(type) !== -1) {
      _.each(this.prepends.errors, (error, index) => {
        if (error == msg) {
          this.rm('prepends', 'errors', index)
        }
      })
      _.each(this.appends.errors, (error, index) => {
        if (error == msg) {
          this.rm('appends', 'errors', index)
        }
      })
    }

    if (['any', 'message'].indexOf(type) !== -1) {
      _.each(this.prepends.messages, (error, index) => {
        if (error == msg) {
          this.rm('prepends', 'messages', index)
        }
      })
      _.each(this.appends.messages, (error, index) => {
        if (error == msg) {
          this.rm('appends', 'messages', index)
        }
      })
    }
  }

  rm(group, type, index) {
    this[group][type].splice(index, 1)
  }

  clear(type) {
    if (type === undefined) {
      type = 'all'
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

  clearPrepended(type) {
    if (type === undefined) {
      type = 'all'
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

  clearAppended(type) {
    if (type === undefined) {
      type = 'all'
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