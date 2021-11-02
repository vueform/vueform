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
   * The default date format for display, value & load.
   * 
   * @type {string}
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

    return form$.value.__(`vueform.dateFormats.${format}`)
  })

  // ============== COMPUTED ===============

  /**
   * The display date format.
   * 
   * @type {string}
   * @private
   */
  const displayDateFormat = computed(() => {
    return displayFormat.value !== null ? displayFormat.value : defaultFormat.value
  })

  /**
   * The format of date value.
   * 
   * @type {string}
   * @private
   */
  const valueDateFormat = computed(() => {
    return valueFormat.value !== null || valueFormat.value === false ? valueFormat.value : defaultFormat.value
  })

  /**
   * The date format of the data the element being loaded with.
   * 
   * @type {string}
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

const dates = function(props, context, dependencies)
{
  const {
    displayFormat,
    valueFormat,
    loadFormat,
  } = toRefs(props)

  // ============ DEPENDENCIES =============

  const form$ = dependencies.form$

  // =============== PRIVATE ===============

  const defaultFormat = computed(() => {
    return form$.value.__(`vueform.dateFormats.date`)
  })

  // ============== COMPUTED ===============

  const displayDateFormat = computed(() => {
    return displayFormat.value !== null ? displayFormat.value : defaultFormat.value
  })

  const valueDateFormat = computed(() => {
    return valueFormat.value !== null || valueFormat.value === false ? valueFormat.value : defaultFormat.value
  })

  const loadDateFormat = computed(() => {
    return loadFormat.value !== null ? loadFormat.value : defaultFormat.value
  })

  return {
    displayDateFormat,
    valueDateFormat,
    loadDateFormat,
  }
}

export {
  dates,
}

export default base