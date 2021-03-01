import { computed, ref, watch, toRefs, onMounted } from 'composition-api'
import checkDateFormat from '../../utils/checkDateFormat'
import normalize from './../../utils/normalize'

const base = function(props, context, dependencies, options = {})
{
  // ============ DEPENDENCIES =============

  const defaultValue = dependencies.defaultValue
  const path = dependencies.path
  const form$ = dependencies.form$
  const fire = dependencies.fire
  const dirt = dependencies.dirt
  const validate = dependencies.validate

  // ============== COMPUTED ===============

  const initialValue = ref(_.get(form$.value.model, path.value))
  const formDefaultValue = ref(_.get(form$.value.options.default, path.value))

  const value = computed(options.value || {
    get() {
      let value = _.get(form$.value.model, path.value)

      // If value is undefined first try to return form default value
      if (value === undefined && formDefaultValue.value !== undefined) {
        value = _.cloneDeep(formDefaultValue.value)
      }

      // If value is still undefined return element default value
      if (value === undefined) {
        value = _.cloneDeep(defaultValue.value)
      }

      return value
    },
    set(val) {
      form$.value.updateModel(path.value, val)
    }
  })

  // If element's value was undefined initially (not found in v-model/data) then we need to set it's value
  if (initialValue.value === undefined) {
    // First we try to set from form defaults
    if (formDefaultValue.value !== undefined) {
      value.value = _.cloneDeep(formDefaultValue.value)

    // If not found set from element default
    } else {
      value.value = _.cloneDeep(defaultValue.value)
    }
  }

  onMounted(() => {
    watch(value, (n, o) => {
      if (_.isEqual(n,o)) {
        return
      }

      fire('change', n, o)

      if (dirt) {
        dirt()
      }

      if (validate) {
        validate()
      }
    }, { immediate: false, deep: true })
  })

  return {
    value,
  }
}

const date = function(props, context, dependencies)
{
  // ============ DEPENDENCIES =============

  const valueDateFormat = dependencies.valueDateFormat
  const path = dependencies.path
  const form$ = dependencies.form$

  // ================ DATA =================

  const {
    value
  } = base(props, context, dependencies, {
    value: {
      get() {
        return _.get(form$.value.model, path.value)
      },
      set(val) {
        form$.value.updateModel(path.value, val && val instanceof Date ? moment(val).format(valueDateFormat.value) : val)
      }
    }
  })

  return {
    value,
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

const tags = multiselect

export {
  date,
  dates,
  multilingual,
  multiselect,
  radio,
  select,
  tags,
  file,
  location,
}


export default base