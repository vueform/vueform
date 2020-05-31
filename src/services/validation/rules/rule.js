import replaceWildcards from './../../../utils/replaceWildcards'

const Rule = class {

  constructor(Validator, form$) {
    this.form$ = form$

    this.element$ = Validator.element$
    this.Validator = Validator
    this.name = Validator.rule
    this.attributes = Validator.attributes

    this.messages = {
      required: 'Please fill in'
    }

    this.init()
  }

  get async() {
    return false
  }

  get params() {
    return
  }

  getMessage() {
    var message = this.selectMessage(this.getBaseMessage())

    return this.replaceMessageVars(message)
  }

  getBaseMessage() {
    if (this.element$.messages && this.element$.messages[this.name]) {
      return this.element$.messages[this.name]
    }

    if (this.form$.messages && this.form$.messages[this.name]) {
      return this.form$.messages[this.name]
    }

    if (this.message) {
      return this.message
    }

    return this.messages[this.name]
  }
  
  selectMessage(message) {
    return message
  }

  get valuesParam() {
    return this.attributes
      ? Object.values(this.attributes).join(', ')
      : null
  }

  init() {
    // unimplemented by default
  }

  isNumeric() {
    return this.Validator.isNumeric()
  }

  isFile() {
    return this.element$.isFileType()
  }

  isImage() {
    return this.element$.isImageType()
  }

  isArray() {
    return this.element$.isArrayType()
  }

  isNullable() {
    return this.Validator.isNullable()
  }

  watchOther(otherAttribute) {
    this.form$.$nextTick(() => {
      if (!this.form$.el$(otherAttribute)) {
        throw new Error(otherAttribute + ' element does not exist')
      }

      this.other = this.form$.el$(replaceWildcards(otherAttribute, this.element$.path))

      this.form$.$watch('data.' + this.other.path, () => {
        if (this.element$.validated) {
          this.Validator.element$.validate()
        }
      })
    })
  }

  replaceMessageVars(message, additionalVars = {}) {
    var vars = Object.assign({}, additionalVars, this.attributes, {
      attribute: this.element$.attribute,
      values: this.valuesParam
    })

    _.each(vars, (value, name) => {
      var variable = name

      if (this.params && /^\d+$/.test(name)) {
        variable = this.params[name]
      }

      if (variable == 'other') {
        var wildcards = value.match(/.*(?=\.\*)/)

        if (wildcards !== null) {
          value = this.form$.el$(wildcards[0]).attribute
        }
        else {
          value = this.form$.el$(value).attribute
        }

      }

      message = message
                  .replace(new RegExp(':' + variable + '\\b', 'g'), value)
                  .replace('{'+variable+'}', value)
    })

    return message
  }

}

export default Rule