import { computed, toRefs } from 'vue'

const base = function(props, context, dependencies)
{
  const {
    displayFormat,
    valueFormat,
    loadFormat,
    date,
    time,
    seconds,
    hour24,
  } = toRefs(props)
  
  // ============ DEPENDENCIES =============
  
  const form$ = dependencies.form$
  
  // =============== PRIVATE ===============
  
  /**
   * The default date format type.
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
    
    return format
  })
  
  /**
   * The default date format for display.
   *
   * @type {string}
   * @private
   */
  const defaultDisplayFormat = computed(() => {
    return form$.value.translations.vueform.dateFormats[defaultFormat.value]
  })
  
  /**
   * The default date format for value & load.
   *
   * @type {string}
   * @private
   */
  const defaultDataFormat = computed(() => {
    const dataDateFormats = {
      datetimeSeconds24: 'YYYY-MM-DD HH:mm:ss',
      datetimeSeconds12: 'YYYY-MM-DD hh:mm:ss a',
      datetime24: 'YYYY-MM-DD HH:mm',
      datetime12: 'YYYY-MM-DD hh:mm a',
      timeSeconds24: 'HH:mm:ss',
      timeSeconds12: 'hh:mm:ss a',
      time24: 'HH:mm',
      time12: 'hh:mm a',
      date: 'YYYY-MM-DD',
    }
    
    return dataDateFormats[defaultFormat.value]
  })
  
  // ============== COMPUTED ===============
  
  /**
   * The display date format.
   *
   * @type {string}
   * @private
   */
  const displayDateFormat = computed(() => {
    return displayFormat.value !== null ? displayFormat.value : defaultDisplayFormat.value
  })
  
  /**
   * The format of date value.
   *
   * @type {string}
   * @private
   */
  const valueDateFormat = computed(() => {
    return valueFormat.value !== null || valueFormat.value === false ? valueFormat.value : defaultDataFormat.value
  })
  
  /**
   * The date format of the data the element being loaded with.
   *
   * @type {string}
   * @private
   */
  const loadDateFormat = computed(() => {
    return loadFormat.value !== null ? loadFormat.value : defaultDataFormat.value
  })
  
  return {
    displayDateFormat,
    valueDateFormat,
    loadDateFormat,
  }
}

const dates = function(props, context, dependencies) {
  const {
    displayFormat,
    valueFormat,
    loadFormat,
  } = toRefs(props)
  
  // ============ DEPENDENCIES =============
  
  const form$ = dependencies.form$
  
  // =============== PRIVATE ===============
  
  const defaultFormat = computed(() => {
    return form$.value.translations.vueform.dateFormats.date
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