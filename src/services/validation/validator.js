import _ from 'lodash'
import { watch, computed } from 'composition-api'
import dataEquals from './../../utils/dataEquals'

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
    this.watchers = {}
    
    if (this.condition && this.dependent) {
      watch(computed(() => _.get(this.form$.data, this.dependent)), () => {
        if (this.element$.validated) {

          // we need to revalidate the whole element
          if (this.name === 'nullable') {
            this.element$.validate()
          }
          
          // we need to revalidate only current validator
          else {
            // We need to do this instead of this.validate()
            // because Vue3 does not recognize `invalid` as
            // as a reactive property if used that way.
            this.revalidate()
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
    else if (this.form$.options.messages[this.name]) {
      message = this.form$.options.messages[this.name]
    }
    else if (this.name !== '_class' && this.form$.__(`validation`)[this.name] !== undefined) {
      message = this.form$.__(`validation.${this.name}`)

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

    if (this.debounce && this.filled(value)) {
      await this._validateWithDebounce(value)
    } else {
      if (this.debounce && this.debouncer) {
        clearTimeout(this.debouncer)
      }
      
      await this._validate(value)
    }
  }

  reset() {
    this.invalid = false
  }

  watch(variables) {
    if (!Array.isArray(variables)) {
      variables = [variables] 
    }

    variables.forEach((variable) => {
      this.addWatcher(variable)
    })
  }

  addWatcher(variable) {
    if (this.watchers[variable]) {
      return
    }

    this.watchers[variable] = watch(computed(() => _.get(this.form$.data, variable)), () => {
      this.revalidate()
    })
  }

  revalidate() {
    this.element$.Validators.forEach((Validator) => {
      if (Validator.rule.name === this.rule.name) {
        Validator.validate()
      }
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
      return value ? value.size / 1000 : 0
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
    if (value === undefined || (value === null && value !== this.element$.trueValue) || value === this.element$.falseValue) {
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

    if (dataEquals(this.lastValue, value)) {
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

      this.debouncer = setTimeout(async () => {
        await this._validate(value)
        this.debouncer = null
        resolve()
      }, this.debounce)
    })
  }
}

export default Validator