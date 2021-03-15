import { computed, ref, toRefs, onUpdated } from 'composition-api'
import checkDateFormat from '../../utils/checkDateFormat'

const base = function(props, context, dependencies, options = {})
{
  // ============ DEPENDENCIES =============

  const defaultValue = dependencies.defaultValue
  const dataPath = dependencies.dataPath
  const form$ = dependencies.form$

  // ================ DATA =================

  const initialValue = ref(_.get(form$.value.model, dataPath.value))

  // ============== COMPUTED ===============

  const value = computed(options.value || {
    get() {
      let value = _.get(form$.value.model, dataPath.value)

      return value !== undefined ? value : defaultValue.value
    },
    set(val) {
      form$.value.updateModel(dataPath.value, val)
    }
  })

  const model = computed({
    get() {
      return value.value
    },
    set(val) {
      value.value = val
    }
  })

  if (options.init === undefined || options.init !== false) {
    // If element's value was undefined initially (not found in v-model/data) then we need to set it's value
    if (initialValue.value === undefined) {
      value.value = defaultValue.value
    }
  }

  return {
    value,
    model,
  }
}

const group = function(props, context, dependencies, options = {})
{
  // ============ DEPENDENCIES =============

  const dataPath = dependencies.dataPath
  const children$Array = dependencies.children$Array
  const form$ = dependencies.form$

  // ============== COMPUTED ===============

  const value = computed(options.value || {
    get() {
      let value = {}

      _.each(children$Array.value, (child$) => {
        if (child$.flat) {
          value = Object.assign({}, value, child$.value)
        } else {
          value[child$.name] = child$.value
        }
      })

      return value
    },
    set(val) {
      form$.value.updateModel(dataPath.value, val)
    }
  })

  return {
    value,
  }
}

const object = function(props, context, dependencies, options = {})
{
  // ============ DEPENDENCIES =============

  const defaultValue = dependencies.defaultValue
  const dataPath = dependencies.dataPath
  const form$ = dependencies.form$

  // ================ DATA =================

  const initialValue = ref(_.get(form$.value.model, dataPath.value))

  // ============== COMPUTED ===============

  const value = computed(options.value || {
    get() {
      let value = _.get(form$.value.model, dataPath.value)

      return value !== undefined ? value : defaultValue.value
    },
    set(val) {
      form$.value.updateModel(dataPath.value, val)
    }
  })

  if (options.init === undefined || options.init !== false) {
    if (initialValue.value === undefined) {
      value.value = defaultValue.value
    } else {
      value.value = Object.assign({}, defaultValue.value, value.value)
    }
  }

  return {
    value,
  }
}

const multilingual = function(props, context, dependencies)
{
  const {
    value,
  } = base(props, context, dependencies)
  
  // ============ DEPENDENCIES =============

  const language = dependencies.language

  // ============== COMPUTED ===============

  const model = computed({
    get() {
      return value.value[language.value]
    },
    set(val) {
      value.value = Object.assign({}, value.value, {
        [language.value]: val
      })
    }
  })

  return {
    value,
    model,
  }
}

const date = function(props, context, dependencies)
{
  // ============ DEPENDENCIES =============

  const valueDateFormat = dependencies.valueDateFormat
  const dataPath = dependencies.dataPath
  const form$ = dependencies.form$

  // ================ DATA =================

  const {
    value,
  } = base(props, context, dependencies, {
    value: {
      get() {
        return _.get(form$.value.model, dataPath.value)
      },
      set(val) {
        // If the value is not a Date object check if it is matching the value format
        if (!_.isEmpty(val) && !(val instanceof Date) && valueDateFormat.value !== false) {
          checkDateFormat(valueDateFormat.value, val)
        }

        form$.value.updateModel(dataPath.value, val && val instanceof Date && valueDateFormat.value !== false
          ? moment(val).format(valueDateFormat.value)
          : val
        )
      }
    }
  })

  // ============== COMPUTED ===============

  const model = computed(() => {
    return value.value instanceof Date || !value.value ? value.value : moment(value.value, valueDateFormat.value).toDate()
  })

  return {
    value,
    model,
  }
}

const dates = function(props, context, dependencies)
{
  // ============ DEPENDENCIES =============

  const valueDateFormat = dependencies.valueDateFormat
  const dataPath = dependencies.dataPath
  const form$ = dependencies.form$

  // ================ DATA =================

  const {
    value,
  } = base(props, context, dependencies, {
    value: {
      get() {
        return _.get(form$.value.model, dataPath.value)
      },
      set(val) {
        if (!Array.isArray(val)) {
          val = [val]
        }

        form$.value.updateModel(dataPath.value, val.map((v) => {
          if (!_.isEmpty(v) && !(v instanceof Date) && valueDateFormat.value !== false) {
            checkDateFormat(valueDateFormat.value, v)
          }

          return v && v instanceof Date && valueDateFormat.value !== false
            ? moment(v).format(valueDateFormat.value)
            : v
        }))
      }
    }
  })

  // ============== COMPUTED ===============

  const model = computed(() => {
    return value.value.map((v) => {
      return v instanceof Date || !v ? v : moment(v, valueDateFormat.value).toDate()
    })
  })

  return {
    value,
    model,
  }
}

export {
  date,
  dates,
  multilingual,
  object,
  group,
}


export default base