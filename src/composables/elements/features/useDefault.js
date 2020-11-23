import { computed, toRefs } from 'composition-api'
import computedOption from './../../../utils/computedOption'
import checkDateFormat from './../../../utils/checkDateFormat'

const base = function(props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES =============

  const nullValue = dependencies.nullValue

  // ============== COMPUTED ===============

  /**
  * The default value of the element.
  * 
  * @type {boolean}
  */
  const default_ = computedOption('default', schema, _.clone(nullValue.value))

  return {
    // Computed
    default: default_,
  }
}

const date = function(props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES =============

  const form$ = dependencies.form$
  const nullValue = dependencies.nullValue
  const valueFormat = dependencies.valueFormat

  // ============== COMPUTED ===============

  /**
  * The default value of the element.
  * 
  * @type {boolean}
  */
  const default_ = computed({
    get() {
      let val = schema.value.default || nullValue.value

      if (_.isEqual(val, nullValue.value)) {
        return val
      }

      checkDateFormat(valueFormat.value, val)

      return val instanceof Date ? val : moment(val, valueFormat.value, true).toDate()
    },
    set(val) {
      form$.value.$set(schema.value, 'default', val)
    }
  })

  return {
    // Computed
    default: default_,
  }
}

const dates = function(props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES =============

  const form$ = dependencies.form$
  const nullValue = dependencies.nullValue
  const valueFormat = dependencies.valueFormat

  // ============== COMPUTED ===============

  /**
  * The default value of the element.
  * 
  * @type {boolean}
  */
  const default_ = computed({
    get() {
      let val = schema.value.default || nullValue.value

      if (_.isEqual(val, nullValue.value)) {
        return val
      }

      return _.map(val, (v) => {
        checkDateFormat(valueFormat.value, v)

        return v instanceof Date ? v : moment(v, valueFormat.value, true).toDate()
      })
    },
    set(val) {
      form$.value.$set(schema.value, 'default', val)
    }
  })

  return {
    // Computed
    default: default_,
  }
}

const multilingual = function(props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES =============

  const form$ = dependencies.form$
  const nullValue = dependencies.nullValue

  // ============== COMPUTED ===============

  /**
  * The default value of the element.
  * 
  * @type {boolean}
  */
  const default_ = computed({
    get() {
      if (schema.value.default === undefined) {
        return _.clone(nullValue.value)
      }
      
      let def = _.clone(schema.value.default)

      if (!_.isPlainObject(def)) {
        let tempDefault = {}

        _.each(nullValue.value, (v, language) => {
          tempDefault[language] = def
        })

        def = tempDefault
      }

      return Object.assign({}, _.clone(nullValue.value), def)
    },
    set(val) {
      form$.value.$set(schema.value, 'default', val)
    }
  })

  return {
    // Computed
    default: default_,
  }
}

export {
  date,
  dates,
  multilingual,
}

export default base