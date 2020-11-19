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
  const { displayFormat, valueFormat, loadFormat, min, max, disables } = useOptionsDate(props, context, dependencies)

  // ============== COMPUTED ==============

  /**
  * Flatpickr's mode option. Possible values: `multiple` or `range`.
  * 
  * @type {string} 
  * @default 'single'
  */
  const mode = computedOption('mode', schema, 'multiple')

  /**
  * Default options for flatpickr.
  * 
  * @type {object} 
  * @default {}
  * @ignore
  */
  const defaultOptions = computed(() => {
    return {
      mode: mode.value,
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
    mode,
    min,
    max,
    disables,
    options,
    hasDate,
    hasTime,
  }
}