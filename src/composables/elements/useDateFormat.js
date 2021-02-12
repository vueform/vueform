import { computed, toRefs } from 'composition-api'

const base = function(props, context, dependencies)
{
  const {
    displayFormat,
    valueFormat,
    loadFormat,
    date,
    time,
    seconds,
    hour24
  } = toRefs(props)

  // ============ DEPENDENCIES =============

  const form$ = dependencies.form$

  // =============== PRIVATE ===============

  /**
   * 
   * 
   * @private
   */
  const defaultFormat = computed(() => {
    let format

    if (date.value && time.value && seconds.value && hour24.value) {
      format = 'datetimeSeconds24'
    } else if (date.value && time.value && seconds.value && !hour24.value) {
      format = 'datetimeSeconds12'
    } else if (date.value && time.value && !seconds.value && hour24.value) {
      format = 'datetime24'
    } else if (date.value && time.value && !seconds.value && !hour24.value) {
      format = 'datetime12'
    } else if (!date.value && time.value && seconds.value && hour24.value) {
      format = 'timeSeconds24'
    } else if (!date.value && time.value && seconds.value && !hour24.value) {
      format = 'timeSeconds12'
    } else if (!date.value && time.value && !seconds.value && hour24.value) {
      format = 'time24'
    } else if (!date.value && time.value && !seconds.value && !hour24.value) {
      format = 'time12'
    } else {
      format = 'date'
    }

    return form$.value.__(`laraform.dateFormats.${format}`)
  })

  // ============== COMPUTED ===============

  /**
   * 
   * 
   * @private
   */
  const displayDateFormat = computed(() => {
    return displayFormat.value !== null ? displayFormat.value : defaultFormat.value
  })

  /**
   * 
   * 
   * @private
   */
  const valueDateFormat = computed(() => {
    return valueFormat.value !== null ? valueFormat.value : defaultFormat.value
  })

  /**
   * 
   * 
   * @private
   */
  const loadDateFormat = computed(() => {
    return loadFormat.value !== null ? loadFormat.value : defaultFormat.value
  })

  return {
    displayDateFormat,
    valueDateFormat,
    loadDateFormat,
  }
}

export default base