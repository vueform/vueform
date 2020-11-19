import { computed, toRefs } from 'composition-api'
import checkDateFormat from './../../../utils/checkDateFormat'

export default function(props, context, dependencies)
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