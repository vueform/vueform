const Validator = class {

  constructor(rule, props, form$) {
    this.form$ = form$

    this.rule = rule.rule
    this.attributes = rule.attributes || {}
    this.condition = rule.condition || null
    this.conditional = rule.conditional || null

    this.element$ = props.element$
    this.nullable = props.nullable || false
    this.numeric = props.numeric || false

    this.invalid = false
    this.pending = false
    this.disabled = false
    this.debouncer = null
    this.lastValue = null

    this.debounce = this._getDebounce()
    this.watchers = []

    var rules = window.laraform.rules

    if (typeof this.rule == 'string') {
      if (!rules[this.rule]) {
        throw Error('Validator rule does not exist: ' + this.rule)
      }

      this.Rule = new rules[this.rule](this, this.form$)
    }
    else {
      var ruleClass = this.rule

      this.Rule = new ruleClass(this, this.form$)
    }

    this.form$.$nextTick(() => {
      // if there's a fix conditional field watch it
      // if it's a custom condition, user have to
      // take care of setting up watchers
      if (this.condition && this.conditional) {
        // Removed because "data" based element path is required
        // on the backend for implicit rules
        // this.watch('data.' + this.form$.el$(this.conditional).dataPath, () => {
        this.watch('data.' + this.conditional, () => {
          if (this.element$.validated) {
            this.validate()
          }
        })
      }

      if (this.nullable && this.nullable.conditional) {
        // this.watch('data.' + this.form$.el$(this.nullable.conditional).dataPath, () => {
        this.watch('data.' + this.nullable.conditional, () => {
          if (this.element$.validated) {
            this.validate()
          }
        })
      }
    })
  }

  get debouncing() {
    return this.debouncer !== null
  }

  get message() {
    return this.Rule.getMessage()
  }

  get failing() {
    return this.invalid && !this.disabled
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

  isNullable() {
    return this.nullable
      && (
        !this.nullable.condition
        || (
          this.nullable.condition
          && this.nullable.condition(this, this.form$)
        )
      )
  }

  isNumeric() {
    return this.numeric
  }

  isFile() {
    return this.element$.hasFile()
  }

  isImage() {
    return this.element$.hasImage()
  }

  // because of toggle eg. we need value
  validate(value = this.element$.value) {
    if (!this.form$.validation) {
      return
    }

    if (this.isNullable() && !value) {
      this._setInvalid(false)
      return
    }

    if (this.condition !== null) {
      if (!this.condition.call(this.form$, this)) {
        this._setInvalid(false)
        return
      }
    }

    if (this.hasDebounce()) {
      this._validateWithDebounce(value)
    } else {
      this._validate(value)
    }
  }

  reset() {
    this._setInvalid(false)
  }

  hasDebounce() {
    return this.debounce ? true : false
  }

  isDisabled() {
    return this.disabled
  }

  isFailing() {
    return this.invalid && !this.disabled
  }

  _validateWithDebounce(value) {
    if (this.debouncer) {
      this.debouncer.cancel()
    }

    this.debouncer = _.debounce(() => {
      this._validate(value)
      this._unsetDebouncer()
    }, this.debounce)

    this.debouncer()
  }

  _unsetDebouncer() {
    this.debouncer = null
  }

  _validate(value) {
    if (this._isAsync()) {
      return this._validateAsync(value)
    } else {
      this._validateSync(value)
    }
  }

  _isAsync() {
    return this.Rule.async
  }

  async _validateAsync(value) {
    this.lastValue = value

    this._setPending(true)

    var isValid = await this._isValid(value)

    if (this.lastValue == value) {
      this._setInvalid(!isValid)
      this._setPending(false)
    }
  }

  _validateSync(value) {
    this._setInvalid(!this._isValid(value))
  }

  _isValid(value) {
    return this.Rule.validate(value)
  }

  _getDebounce() {
    if (!this._isDebounce()) {
      return false
    }

    if (this.attributes.debounce) {
      return this.attributes.debounce
    }

    if (this.element$.debounce) {
      return this.element$.debounce
    }

    return this.form$.debounce
  }

  _isDebounce() {
    return (this.attributes && this.attributes.debounce)
      || this.element$.debounce
      || this.form$.debounce
      ? true
      : false
  }

  _setInvalid(value) {
    if (this.invalid == value) {
      return null
    }

    this.invalid = value
  }

  _setPending(value) {
    if (this.pending == value) {
      return null
    }

    this.pending = value
  }
}

export default Validator