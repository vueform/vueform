const Validator = class {

  constructor(rule, props) {
    this.rule = rule
    this.attributes = rule.attributes || {}
    this.condition = rule.condition || null
    this.dependent = rule.dependent || null

    this.element$ = props.element$
    this.form$ = props.element$.form$
    this.numeric = props.numeric || false

    this.invalid = false
    this.pending = false

    this.debouncer = null
    this.lastValue = null
    this.watchers = []
    
    if (this.condition && this.dependent) {
      this.form$.$watch('data.' + this.dependent, () => {
        if (this.element$.validated) {

          // we need to revalidate the whole element
          if (this.name === 'nullable') {
            this.element$.validate()
          }
          
          // we need to revalidate only current validator
          else {
            this.validate()
          }
        }
      })
    }

    this.init()
  }

  get name() {
    return this.rule.name
  }

  get failing() {
    return this.invalid
  }

  get defaultMessage() {
    return this.form$.__('laraform.defaultMessage')
  }

  get message() {
    let message = ''

    if (this.element$.messages[this.name]) {
      message = this.element$.messages[this.name]
    }
    else if (this.form$.messages[this.name]) {
      message = this.form$.messages[this.name]
    }
    else if (this.name) {
      message = this.form$.__(`laraform.validation.${this.name}`)

      if (_.isPlainObject(message)) {
        message = message[this.messageType]
      }
    } else {
      message = this.defaultMessage
    }

    // replace :params
    _.each(_.map(message.match(/:\w+/g),p=>p.replace(':','')), (param) => {
      message = message.replace(`:${param}`, this.messageParams[param])
    })

    // replace {params}
    _.each(_.map(message.match(/{[^}]+/g),p=>p.replace('{','')), (param) => {
      message = message.replace(`{${param}}`, this.messageParams[param])
    })

    return message
  }

  get messageType() {
    if (this.isNumeric) {
      return 'numeric'
    }
    else if (this.isFile) {
      return 'file'
    }
    else if (this.isArray) {
      return 'array'
    }

    return 'string'
  }

  get messageParams() {
    return {
      attribute: this.attributeName,
    }
  }

  get attributeName() {
    return this.element$.genericName
  }

  get type() {
    if (this.isNumeric) {
      return 'numeric'
    }
    else if (this.isFile) {
      return 'file'
    }
    else if (this.isArray) {
      return 'array'
    }
    
    return 'string'
  }

  get isNumeric() {
    return _.some(this.element$.Validators, { name: 'numeric' })
        || _.some(this.element$.Validators, { name: 'integer' })
  }

  get isNullable() {
    let nullable = false

    _.each(this.element$.Validators, (Validator) => {
      if (Validator.name !== 'nullable') {
        return
      }

      if(Validator.condition === null) {
        nullable = true
        return
      }
      
      nullable = Validator.condition(this.form$, this)
    })

    return nullable
  }

  get isFile() {
    return this.element$.isFileType
  }

  get isArray() {
    return this.element$.isArrayType
  }

  get isAsync() {
    return false
  }

  get debounce() {
    if (this.attributes.debounce) {
      return this.attributes.debounce
    }

    if (this.element$.debounce) {
      return this.element$.debounce
    }

    return false
  }

  get debouncing() {
    return this.debouncer !== null
  }

  init() {}

  async validate(value = this.element$.value) {
    if (!this.form$.validation) {
      return
    }

    if (this.isNullable && !this.filled(value)) {
      this.invalid = false
      return
    }

    if (this.condition !== null) {
      if (!this.condition(this.form$, this)) {
        this.invalid = false
        return
      }
    }

    if (this.debounce) {
      await this._validateWithDebounce(value)
    } else {
      await this._validate(value)
    }
  }

  reset() {
    this.invalid = false
  }

  watch(variable, callback) {
    var exists = false

    _.each(this.watchers, (watcher) => {
      if (watcher.callback == callback.toString()
        && watcher.variable == variable
      ) {
        exists = true
      }
    })

    if (exists) {
      return
    }

    this.watchers.push({
      variable: variable,
      callback: callback.toString(),
      unwatch: this.form$.$watch(variable, callback)
    })
  }

  watchOther() {
    this.form$.$nextTick(() => {
      if (!this.other$) {
        throw new Error(this.otherPath + ' element does not exist')
      }

      this.form$.$watch(() => { return this.other$.value }, () => {
        if (this.element$.validated) {
          this.element$.validate()
        }
      })
    })
  }

  size(value) {
    if (this.isNumeric) {
      return value
    }
    else if (this.isFile) {
      return value.size / 1000
    }
    else if (this.isArray) {
      return value.length
    } else if (value === null) {
      return 0
    } else if (value === undefined) {
      return 0
    } else if (value === '') {
      return 0
    }

    return String(value).length
  }

  filled(value) {
    if (value === null) {
      return false;
    }
    else if (value === undefined) {
      return false;
    }
    else if (_.isString(value) && _.trim(value) === '') {
      return false;
    }
    else if (_.isArray(value) && value.length < 1) {
      return false;
    }
    else if (value instanceof File && value.name === '') {
      return false;
    }

    return true
  }

  async _validate(value) {
    if (this.isAsync) {
      await this._validateAsync(value)
    } else {
      this._validateSync(value)
    }
  }

  async _validateAsync(value) {
    this.lastValue = value

    this.pending = true

    let valid = await this.check(value)

    if (_.isEqual(this.lastValue, value)) {
      this.invalid = !valid
      this.pending = false
    }
  }

  _validateSync(value) {
    this.invalid = !this.check(value)
  }

  async _validateWithDebounce(value) {
    return new Promise((resolve, reject) => {
      if (this.debouncer) {
        resolve()
        clearTimeout(this.debouncer)
      }

      this.debouncer = setTimeout(() => {
        this._validate(value)
        this.debouncer = null
        resolve()
      }, this.debounce)
    })
  }
}

export default Validator