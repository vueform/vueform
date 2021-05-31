import { computed, ref, toRefs, onUpdated } from 'composition-api'
import checkDateFormat from '../../utils/checkDateFormat'

const base = function(props, context, dependencies, options = {})
{
  const { name } = toRefs(props)

  // ============ DEPENDENCIES =============

  const parent = dependencies.parent
  const defaultValue = dependencies.defaultValue
  const dataPath = dependencies.dataPath
  const form$ = dependencies.form$

  // ================ DATA =================

  const initialValue = ref(undefined)

  if (form$.value.isSync) {
    initialValue.value = _.get(form$.value.model, dataPath.value)
  } else if (parent.value && ['object', 'list'].indexOf(parent.value.type) !== -1) {
    initialValue.value = parent.value.value[name.value]
  }

  // ============== COMPUTED ===============

  const internalValue = ref(_.cloneDeep(defaultValue.value))

  const value = computed(options.value || {
    get() {
      let value

      if (form$.value.isSync) {
        value = _.get(form$.value.model, dataPath.value)
      } else if (parent.value && ['object', 'list'].indexOf(parent.value.type) !== -1) {
        value = parent.value.value[name.value]
      } else {
        value = internalValue.value
      }

      return value !== undefined ? value : defaultValue.value
    },
    set(val) {
      if (form$.value.isSync) {
        form$.value.updateModel(dataPath.value, val)
      } else if (parent.value && ['list'].indexOf(parent.value.type) !== -1) {
        parent.value.update(parent.value.value.map((v,k) => k == name.value ? val : v))
      } else if (parent.value && ['object'].indexOf(parent.value.type) !== -1) {
        parent.value.value = Object.assign({}, parent.value.value, {
          [name.value]: val
        })
      } else {
        internalValue.value = val
      }
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
    initialValue,
    internalValue,
    value,
    model,
  }
}

const object = function(props, context, dependencies, options = {})
{
  const {
    initialValue,
    internalValue,
    value,
  } = base(props, context, dependencies, {
   init: false,
  })

  // ============ DEPENDENCIES =============

  const defaultValue = dependencies.defaultValue

  // ================ HOOKS ================

  if (options.init === undefined || options.init !== false) {
    if (initialValue.value === undefined) {
      value.value = defaultValue.value
    } else {
      value.value = Object.assign({}, defaultValue.value, value.value)
    }
  }

  return {
    internalValue,
    value,
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