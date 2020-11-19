import computedOption from './../../../utils/computedOption'
import checkDateFormat from './../../../utils/checkDateFormat'
import { computed, toRefs } from 'composition-api'

export default function(props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$
  const disabled = dependencies.disabled
  const readonly = dependencies.readonly

  // ============== COMPUTED ==============

  /**
   * Defines how date should be formatted in the input field.
   * 
  * @type {string|false} 
  * @default 'from locale'
    */
  const displayFormat = computedOption('displayFormat', schema, form$.value.__('laraform.elements.date.displayFormat'))

  /**
   * Defines how date should be formatted in `value`. If `false` Date object will be used.
   * 
  * @type {string|false} 
  * @default 'YYYY-MM-DD'
    */
  const valueFormat = computedOption('valueFormat', schema, 'YYYY-MM-DD')

  /**
   * Defines how date is formatted when using `load` or `update` method or by directly setting `value`.
   * 
  * @type {string} 
  * @default 'YYYY-MM-DD'
    */
  const loadFormat = computedOption('loadFormat', schema, 'YYYY-MM-DD')

  /**
   * List of dates to be disabled.
   * 
   * @type {array} 
   * @default []
   */
  const disables = computedOption('disables', schema, [])

  /**
   * Earliest selectable date. Can be a string in `[loadFormat](#prop-loadFormat)` or a Date object.
   * 
   * @type {string|Date} 
   * @default null
   */
  const min = computed({
    get() {
      if (schema.value.min === undefined) {
        return null
      }

      checkDateFormat(valueFormat.value, schema.value.min)

      return schema.value.min instanceof Date ? schema.value.min : moment(schema.value.min, valueFormat.value, true).toDate()
    },
    set(value) {
      form$.value.$set(schema.value, 'min', value)
    }
  })

  /**
   * Latest selectable date. Can be a string in `[loadFormat](#prop-loadFormat)` or a Date object.
   * 
   * @type {string|Date} 
   * @default null
   */
  const max = computed({
    get() {
      if (schema.value.max === undefined) {
        return null
      }

      checkDateFormat(valueFormat.value, schema.value.max)

      return schema.value.max instanceof Date ? schema.value.max : moment(schema.value.max, valueFormat.value, true).toDate()
    },
    set(value) {
      form$.value.$set(schema.value, 'max', value)
    }
  })

  /**
  * Default options for flatpickr.
  * 
  * @type {object} 
  * @default {}
  * @ignore
  */
  const defaultOptions = computed(() => {
    return {
      dateFormat: displayFormat.value,
      minDate: min.value,
      maxDate: max.value,
      disable: disables.value,
      clickOpens: !disabled.value && !readonly.value,
    }
  })

  /**
  * Additional [options](https://flatpickr.js.org/options/) for flatpickr.
  * 
  * @type {object} 
  * @default {}
  */
  const options = computed({
    get() {
      return Object.assign({}, defaultOptions.value, schema.value.options || {})
    },
    set(val) {
      form$.value.$set(schema.value, 'options', val)
    }
  })

  /**
   * Helper property used to determine the element has date.
   * 
   * @type {boolean}
   * @ignore
   */
  const hasDate = computed(() => {
    return true
  })

  /**
   * Helper property used to determine the element has time.
   * 
   * @type {boolean}
   * @ignore
   */
  const hasTime = computed(() => {
    return false
  })

  return {
    displayFormat,
    valueFormat,
    loadFormat,
    min,
    max,
    disables,
    options,
    hasDate,
    hasTime,
  }
}