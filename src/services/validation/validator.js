// import 'regenerator-runtime/runtime'
import get from 'lodash-es/get'
import isEqual from 'lodash-es/isEqual'
import isPlainObject from 'lodash-es/isPlainObject'
import each from 'lodash-es/each'
import map from 'lodash-es/map'
import some from 'lodash-es/some'
import isString from 'lodash-es/isString'
import isArray from 'lodash-es/isArray'
import trim from 'lodash-es/trim'
import { watch, computed } from 'vue'
import dataEquals from './../../utils/dataEquals'

const Validator = class {

  constructor(rule, props) {
    this.rule = rule
    this.attributes = rule.attributes || {}
    this.conditions = rule.conditions || []
    this.dependents = rule.dependents || []

    this.element$ = props.element$
    this.form$ = props.element$?.form$ || {}
    this.numeric = props.numeric || false

    this.elementMessages = props.element$.messages

    this.invalid = false
    this.pending = false

    this.debouncer = null
    this.lastValue = null
    this.watchers = {}
    
    this.dependents.forEach((dependent) => {
      watch(computed(() => get(this.form$.data, dependent)), () => {
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
    })

    watch(computed(() => props.element$.messages), (n, o) => {
      if (isEqual(n, o)) {
        return
      }

      this.elementMessages = props.element$.messages
    }, { deep: true })

    this.init()
  }

  get name() {
    return this.rule.name
  }

  get failing() {
    return this.invalid
  }

  get defaultMessage() {
    return this.form$.translations.vueform.defaultMessage
  }

  get message() {
    let message = ''

    if (this.elementMessages[this.name]) {
      message = this.elementMessages[this.name]
    }
    else if (this.form$.options.messages[this.name]) {
      message = this.form$.options.messages[this.name]
    }
    else if (this.name !== '_class' && this.form$.translations.validation?.[this.name] !== undefined) {
      message = this.form$.translations.validation[this.name]

      if (isPlainObject(message)) {
        message = message[this.messageType]
      }
    } else {
      message = this.defaultMessage
    }

    // replace :params
    each(map(message.match(/:\w+/g),p=>p.replace(':','')), (param) => {
      message = message.replace(`:${param}`, this.messageParams[param])
    })

    // replace {params}
    each(map(message.match(/{[^}]+/g),p=>p.replace('{','')), (param) => {
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
    return some(this.element$.Validators, { name: 'numeric' })
        || some(this.element$.Validators, { name: 'integer' })
  }

  get isNullable() {
    let nullable = false

    each(this.element$.Validators, (Validator) => {
      if (Validator.name !== 'nullable') {
        return
      }

      if(!Validator.conditions.length) {
        nullable = true
        return
      }
      
      nullable = Validator.conditions(this.form$, this, this.element$)
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

  async validate(value) {
    if (value === undefined) {
      value = this.element$?.value
    }

    if (!this.form$.validation) {
      return
    }

    if (this.isNullable && !this.filled(value)) {
      this.invalid = false
      return
    }

    if (this.conditions.length) {
      if (!this.conditions(this.form$, this, this.element$)) {
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

    this.watchers[variable] = watch(computed(() => get(this.form$.data, variable)), () => {
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
        return
      }
      
      this.form$.$watch(() => { return this.other$?.value }, () => {
        if (this.element$.validated) {
          this.element$.validate()
        }
      })
    })
  }

  size(value) {
    if (this.isNumeric) {
      if (!isNaN(value)) {
        let num = parseFloat(value)
        
        if (Number.isInteger(num)) {
            return parseInt(value)
        }

        return num
      }
      
      return null
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
    else if (this.isNumeric && value === 0) {
      return false;
    }
    else if (isString(value) && trim(value) === '') {
      return false;
    }
    else if (isArray(value) && value.length < 1) {
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