import { computed, ref, watch, toRefs, onMounted } from 'composition-api'
import checkDateFormat from '../../utils/checkDateFormat'
import normalize from './../../utils/normalize'

const base = function(props, context, dependencies)
{
  // ============ DEPENDENCIES =============

  const defaultValue = dependencies.defaultValue
  const nullValue = dependencies.nullValue
  const path = dependencies.path
  const form$ = dependencies.form$
  const fire = dependencies.fire

  // ============== COMPUTED ===============

  const value = computed({
    get() {
      return _.get(form$.value.valueClone, path.value)
    },
    set(val) {
      form$.value.updateModel(path.value, val)
    }
  })

  if (value.value === undefined) {
    value.value = defaultValue.value
  }

  onMounted(() => {
    watch(value, (n, o) => {
      fire('change', n, o)
    }, { immediate: false })
  })

  return {
    value,
  }
}

const checkbox = function(props, context, dependencies)
{
  const {
    falseValue,
    trueValue
  } = toRefs(props)

  const {
    previousValue, currentValue
  } = base(props, context, dependencies)

  // ============== COMPUTED ==============

  /**
   * The value of the element.
   * 
   * @type {any}
   */
  const value = computed({
    get() {
      return model.value ? trueValue.value : falseValue.value
    },
    set(val) {
      model.value = val == trueValue.value
    }
  })

  /**
   * Helper property used for tracking the field's value.
   * 
   * @type {any}
   * @ignore
   */
  const model = computed({
    get() {
      return currentValue.value == trueValue.value
    },
    set(val) {
      previousValue.value = _.clone(currentValue.value)

      currentValue.value = val ? trueValue.value : falseValue.value
    }
  })

  return {
    value,
    model,
    previousValue,
    currentValue,
  }
}

const checkboxgroup = function(props, context, dependencies)
{
  // ============ DEPENDENCIES =============

  const {
    previousValue, currentValue, model
  } = base(props, context, dependencies)

  // ============== PRIVATE ================

  /**
   * 
   * 
   * @private
   */
  const toStringArray = (val) => {
    return _.map(val, v => String(v))
  }

  // ============== COMPUTED ===============

  /**
   * The value of the element.
   * 
   * @type {any}
   */
  const value = computed({
    get() {
      return toStringArray(currentValue.value)
    },
    set(val) {
      previousValue.value = toStringArray(currentValue.value)
      currentValue.value = toStringArray(val)
    }
  })

  return {
    value,
    model,
    previousValue,
    currentValue,
  }
}

const date = function(props, context, dependencies)
{
  const {
    currentValue, previousValue
  } = base(props, context, dependencies)

  // ============ DEPENDENCIES =============

  const nullValue = dependencies.nullValue
  const valueDateFormat = dependencies.valueDateFormat

  // ============== COMPUTED ===============

  /**
   * 
   * 
   * @private
   */
  const model = computed({
    get() {
      return currentValue.value
    },
    set(val) {
      if (!_.isEmpty(val) && !(val instanceof Date)) {
        throw new Error('Date model must be an instance of `Date`')
      }
      
      previousValue.value = _.clone(currentValue.value)
      currentValue.value = val
    }
  })

  /**
   * 
   * 
   * @private
   */
  const value = computed({
    get() {
      // If model is empty or no need to convert return Date instance
      if (!model.value || valueDateFormat.value === false) {
        return model.value
      }

      return moment(model.value).format(valueDateFormat.value)
    },
    set(val) {
      if (_.isEmpty(val) && !(val instanceof Date)) {
        model.value = nullValue.value
        return
      }

      checkDateFormat(valueDateFormat.value, val)

      model.value = val instanceof Date ? val : moment(val, valueDateFormat.value, true).toDate()
    }
  })

  return {
    value,
    model,
    previousValue,
    currentValue,
  }
}

const dates = function(props, context, dependencies)
{
  const {
    currentValue,
    previousValue
  } = date(props, context, dependencies)

  // ============ DEPENDENCIES =============

  const valueDateFormat = dependencies.valueDateFormat

  // ============== COMPUTED ===============

  // Is always a Date instance
  /**
   * 
   * 
   * @private
   */
  const model = computed({
    get() {
      return currentValue.value
    },
    set(val) {
      if (!_.isArray(val)) {
        throw new Error('Dates model must an array')
      }

      _.each(val, (v) => {
        if (!_.isEmpty(v) && !(v instanceof Date)) {
          throw new Error('Date model must be an array of `Date` instances')
        }
      })
      
      previousValue.value = _.clone(currentValue.value)
      currentValue.value = val
    }
  })

  /**
   * 
   * 
   * @private
   */
  const value = computed({
    get() {
      if (valueDateFormat.value === false) {
        return model.value
      }

      return _.map(model.value, (val) => {
        return moment(val).format(valueDateFormat.value)
      })
    },
    set(val) {
      if (!_.isArray(val)) {
        throw new Error('Dates value must an array')
      }

      model.value = _.map(val, (v) => {
        checkDateFormat(valueDateFormat.value, v)

        return v instanceof Date ? v : moment(v, valueDateFormat.value, true).toDate()
      })
    }
  })

  return {
    value,
    model,
    previousValue,
    currentValue,
  }
}

const list = function(props, context, dependencies)
{
  const {
    previousValue, currentValue
  } = base(props, context, dependencies)

  // ============ DEPENDENCIES ============

  const children$Array = dependencies.children$Array

  // ============== COMPUTED ===============

  /**
   * The value of the element.
   * 
   * @type {any}
   */
  const value = computed({
    get() {
      let value = []

      _.each(children$Array.value, (element$) => {
        value.push(element$.value)
      })

      return value
    },
    set(val) {
      throw new Error('A list element\'s value cannot be set directly. Use .update() or .load() method.')
    }
  })

  watch(value, (newValue, oldValue) => {
    currentValue.value = newValue
    previousValue.value = oldValue
  }, { flush: 'post' })

  return {
    value,
    previousValue,
    currentValue,
  }
}

const multilingual = function(props, context, dependencies)
{
  // ============ DEPENDENCIES =============

  const defaultValue = dependencies.defaultValue
  const nullValue = dependencies.nullValue
  const language = dependencies.language

  // ============== COMPUTED ===============

  /**
   * Helper property used to store the element value.
   * 
   * @type {object}
   * @default null
   */
  const currentValue = ref(defaultValue !== undefined ? _.clone(defaultValue.value) : {})

  /**
   * Helper property used to store the element previous value.
   * 
   * @type {object}
   * @default null
   */
  const previousValue = ref(nullValue !== undefined ? _.clone(nullValue.value) : {})

  /**
   * The value of the element.
   * 
   * @type {any}
   */
  const value = computed({
    get() {
      return currentValue.value
    },
    set(val) {
      previousValue.value = _.clone(currentValue.value)
      currentValue.value = val
    }
  })

  /**
   * Helper property used for tracking the field's value.
   * 
   * @type {any}
   */
  const model = computed({
    get() {
      return value.value[language.value]
    },
    set(val) {
      value.value = Object.assign({}, value.value, {
        [language.value]: val,
      })
    }
  })

  return {
    value,
    model,
    previousValue,
    currentValue,
  }
}

const select = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const {
    previousValue, currentValue, value 
  } = base(props, context, dependencies)

  // ============== COMPUTED ==============
  
  /**
   * 
   * 
   * @private
   */
  const model = computed({
    get() {
      return value.value
    },
    set(val) {
      value.value = normalize(val)
    }
  })

  return {
    value,
    model,
    previousValue,
    currentValue,
  }
}

const multiselect = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const { previousValue, currentValue, value } = select(props, context, dependencies)

  // ============== COMPUTED ==============
  
  /**
   * Helper property used for tracking the field's value.
   * 
   * @type {any}
   * @ignore
   */
  const model = computed({
    get() {
      return value.value
    },
    set(val) {
      if (!Array.isArray(val)) {
        value.value = val
        return
      }

      value.value = val.map(v => normalize(v))
    }
  })

  return {
    value,
    model,
    previousValue,
    currentValue,
  }
}

const object = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const {
    previousValue, currentValue
  } = base(props, context, dependencies)

  const children$ = dependencies.children$

  // ============== COMPUTED ===============

  /**
   * The value of the element.
   * 
   * @type {any}
   */
  const value = computed({
    get() {
      var value = {}

      _.each(children$.value, (element$) => {
        value = Object.assign({}, value, element$.data)
      })

      return value
    },
    set(val) {
      throw new Error('A nested element\'s value cannot be set directly. Use .update() or .load() method.')
    }
  })

  watch(value, (newValue, oldValue) => {
    currentValue.value = newValue
    previousValue.value = oldValue
  }, { flush: 'sync' })

  return {
    value,
    previousValue,
    currentValue,
  }
}

const radio = function(props, context, dependencies)
{
  const {
    radioValue
  } = toRefs(props)

  const {
    previousValue, currentValue 
  } = base(props, context, dependencies)

  // ============ DEPENDENCIES ============

  const nullValue = dependencies.nullValue

  // ============== COMPUTED ==============

  /**
   * The value of the element.
   * 
   * @type {any}
   */
  const value = computed({
    get() {
      return model.value ? radioValue.value : nullValue.value
    },
    set(val) {
      model.value = val == radioValue.value
    }
  })

  /**
   * Helper property used for tracking the field's value.
   * 
   * @type {any}
   * @ignore
   */
  const model = computed({
    get() {
      return currentValue.value == radioValue.value
    },
    set(val) {
      previousValue.value = _.clone(currentValue.value)

      currentValue.value = val ? radioValue.value : nullValue.value
    }
  })

  return {
    value,
    model,
    previousValue,
    currentValue,
  }
}

const file = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const { previousValue, currentValue, model } = base(props, context, dependencies)

  // ============== COMPUTED ==============
  
  /**
   * 
   * 
   * @private
   */
  const value = computed({
    get() {
      return currentValue.value
    },
    set(value) {
      previousValue.value = currentValue.value && currentValue.value instanceof File
        ? new File([currentValue.value], currentValue.value.name)
        : _.clone(currentValue.value)

      currentValue.value = value
    }
  })

  return {
    value,
    model,
    previousValue,
    currentValue,
  }
}

const location = function(props, context, dependencies)
{
  const {
    displayKey,
  } = toRefs(props)

  // ============ DEPENDENCIES ============

  const input = dependencies.input
  const { previousValue, currentValue, model } = base(props, context, dependencies)

  // ============== COMPUTED ==============
  
  /**
   * 
   * 
   * @private
   */
  const value = computed({
    get() {
      return currentValue.value
    },
    set(val) {
      previousValue.value = _.clone(currentValue.value)
      currentValue.value = val

      input.value.value = input.value && val && val[displayKey.value] !== undefined ? val[displayKey.value] : ''
    }
  })

  return {
    value,
    model,
    previousValue,
    currentValue,
  }
}

const group = object
const toggle = checkbox
const tags = multiselect

export {
  checkbox,
  checkboxgroup,
  date,
  dates,
  group,
  multilingual,
  multiselect,
  list,
  object,
  radio,
  select,
  tags,
  toggle,
  file,
  location,
}


export default base