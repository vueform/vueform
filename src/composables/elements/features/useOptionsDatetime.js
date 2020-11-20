import computedOption from './../../../utils/computedOption'
import { computed, toRefs } from 'composition-api'
import useOptionsDate from './useOptionsDate'

export default function(props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$
  const disabled = dependencies.disabled
  const readonly = dependencies.readonly

  const { disables, min, max } = useOptionsDate(props, context, dependencies)

  // ============== COMPUTED ==============

  const seconds = computedOption('seconds', schema, false)

  /**
  * Determines if the time should use 24 hours format.
  * 
  * @type {boolean} 
  * @default false
  * @ignore
  */
  const hour24 = computedOption('hour24', schema, true)

  /**
   * Defines how date should be formatted in the input field.
   * 
  * @type {string|false} 
  * @default 'from locale'
    */
  const displayFormat = computedOption('displayFormat', schema, seconds.value
    ? form$.value.__('laraform.elements.datetime.secondsDisplayFormat')
    : form$.value.__('laraform.elements.datetime.displayFormat')
  )

  /**
   * Defines how date should be formatted in `value`. If `false` Date object will be used.
   * 
  * @type {string|false} 
  * @default 'YYYY-MM-DD'
    */
  const valueFormat = computedOption('valueFormat', schema, seconds.value
    ? 'YYYY-MM-DD HH:mm:ss'
    : 'YYYY-MM-DD HH:mm'
  )

  /**
   * Defines how date is formatted when using `load` or `update` method or by directly setting `value`.
   * 
  * @type {string} 
  * @default 'YYYY-MM-DD'
    */
  const loadFormat = computedOption('loadFormat', schema, seconds.value
    ? 'YYYY-MM-DD HH:mm:ss'
    : 'YYYY-MM-DD HH:mm'
  )

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
      time_24hr: hour24.value,
      enableTime: true,
      enableSeconds: seconds.value,
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
    return true
  })

  return {
    displayFormat,
    valueFormat,
    loadFormat,
    seconds,
    hour24,
    min,
    max,
    disables,
    options,
    hasDate,
    hasTime,
  }
}