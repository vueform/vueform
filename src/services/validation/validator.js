const Validator = class {

  constructor(rule, props) {
    this.rule = rule
    this.attributes = rule.attributes
    this.element$ = props.element$
    this.form$ = props.element$.form$
    this.numeric = props.numeric || false

    this.invalid = false
  }

  get name() {
    return this.rule.name
  }

  get failing() {
    return this.invalid
  }

  get message() {
    let message = this.form$.$laraform.locales[this.form$.selectedLocale].validation[this.name]

    if (_.isPlainObject(message)) {
      message = message[this.messageType]
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
    if (this.element$.label) {
      return this.element$.label
    } else if (this.element$.placeholder) {
      return this.element$.placeholder
    } else {
      return _.upperFirst(this.element$.name)
    }
  }

  get isNumeric() {
    return _.some(this.element$.Validators, { name: 'numeric' })
  }

  get isFile() {
    return this.element$.isFile
  }

  get isArray() {
    return this.element$.isArray
  }

  validate(value = this.element$.value) {
    if (!this.form$.validation) {
      return
    }

    this.invalid = !this.check(value)
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
    }

    return String(value).length
  }

}

export default Validator