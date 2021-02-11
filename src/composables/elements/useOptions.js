import checkDateFormat from './../../utils/checkDateFormat'
import { computed, toRefs } from 'composition-api'

const date = function(props, context, dependencies)
{
  const { 
    displayFormat,
    valueFormat,
    disables,
    min,
    max,
    options,
    readonly,
   } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$
  const isDisabled = dependencies.isDisabled

  // ============== COMPUTED ==============

  /**
   * List of dates to be disabled.
   * 
   * @type {array} 
   * @default []
   * @option
   */
  const disabledDates = computed(() => {
    if (disables.value === undefined) {
      return []
    }

    return _.map(disables.value, (disabledDate) => {
      checkDateFormat(valueFormat.value, disabledDate)

      return disabledDate instanceof Date ? disabledDate : moment(disabledDate, valueFormat.value, true).toDate()
    })
  })

  /**
   * Earliest selectable date. Can be a string in `[loadFormat](#prop-loadFormat)` or a Date object.
   * 
   * @type {string|Date} 
   * @default null
   * @option
   */
  const minDate = computed(() => {
    if (min.value === undefined) {
      return null
    }

    checkDateFormat(valueFormat.value, min.value)

    return min.value instanceof Date ? min.value : moment(min.value, valueFormat.value, true).toDate()
  })

  /**
   * Latest selectable date. Can be a string in `[loadFormat](#prop-loadFormat)` or a Date object.
   * 
   * @type {string|Date} 
   * @default null
   * @option
   */
  const maxDate = computed(() => {
    if (max.value === undefined) {
      return null
    }

    checkDateFormat(valueFormat.value, max.value)

    return max.value instanceof Date ? max.value : moment(max.value, valueFormat.value, true).toDate()
  })

  /**
  * Default options for flatpickr.
  * 
  * @type {object} 
  * @default {}
  */
  const defaultOptions = computed(() => {
    return {
      dateFormat: displayFormat.value || form$.value.__('laraform.elements.date.displayFormat'),
      minDate: min.value,
      maxDate: max.value,
      disable: disables.value,
      clickOpens: !isDisabled.value && !readonly.value,
    }
  })

  /**
  * Additional [options](https://flatpickr.js.org/options/) for flatpickr.
  * 
  * @type {object} 
  * @default {}
  * @option
  */
  const fieldOptions = computed(() => {
    return Object.assign({}, defaultOptions.value, options.value || {})
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
    minDate,
    maxDate,
    disabledDates,
    fieldOptions,
    hasDate,
    hasTime,
  }
}

const dates = function(props, context, dependencies)
{
  const { 
    mode,
    displayFormat,
    options,
    readonly,
  } = toRefs(props)
  
  const {
    minDate,
    maxDate,
    disabledDates,
  } = date(props, context, dependencies)

  // ============ DEPENDENCIES ============

  const isDisabled = dependencies.isDisabled

  // ============== COMPUTED ==============

  /**
  * Default options for flatpickr.
  * 
  * @type {object} 
  * @default {}
  */
  const defaultOptions = computed(() => {
    return {
      mode: mode.value,
      dateFormat: displayFormat.value,
      minDate: minDate.value,
      maxDate: maxDate.value,
      disable: disabledDates.value,
      clickOpens: !isDisabled.value && !readonly.value,
    }
  })

  /**
  * Additional [options](https://flatpickr.js.org/options/) for flatpickr.
  * 
  * @type {object} 
  * @default {}
  * @option
  */
  const fieldOptions = computed(() => {
    return Object.assign({}, defaultOptions.value, options.value || {})
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
    minDate,
    maxDate,
    disabledDates,
    fieldOptions,
    hasDate,
    hasTime,
  }
}

const datetime = function(props, context, dependencies)
{
  const {
    seconds,
    hour24,
    options,
    readonly,
  } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$
  const isDisabled = dependencies.isDisabled

  const {
    disabledDates,
    minDate,
    maxDate
  } = date(props, context, dependencies)

  // ============== COMPUTED ==============

  /**
  * Default options for flatpickr.
  * 
  * @type {object} 
  * @default {}
  */
  const defaultOptions = computed(() => {
    let displayFormat

    return {
      dateFormat: displayFormat.value || (seconds.value
        ? form$.value.__('laraform.elements.datetime.secondsDisplayFormat')
        : form$.value.__('laraform.elements.datetime.displayFormat')
      ),
      minDate: minDate.value,
      maxDate: maxDate.value,
      disable: disabledDates.value,
      clickOpens: !isDisabled.value && !readonly.value,
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
  * @option
  */
  const fieldOptions = computed(() => {
    return Object.assign({}, defaultOptions.value, options.value || {})
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
    fieldOptions,
    hasDate,
    hasTime,
  }
}

const select = function (props, context, dependencies)
{
  const {
    native,
    search,
    options,
  } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$

  // ============== COMPUTED ==============

  /**
   * Determines if the native select is used.
   * 
   * @type {string}
   */
  const isNative = computed(() => {
    return native.value && !search.value
  })
  
  /**
  * Default options for vue-multiselect.
  * 
  * @type {object} 
  * @default {}
  */
  const defaultOptions = computed(() => {
    return {
      mode: 'single',
      searchable: search.value,
      noOptionsText: form$.value.__('laraform.multiselect.noOptions'),
      noResultsText: form$.value.__('laraform.multiselect.noResults'),
    }
  })

  /**
   * Additional [options](https://vue-multiselect.js.org/#sub-props) for the select.
   * 
   * @type {object}
   * @default {}
   * @option
   */
  const fieldOptions = computed(() => {
    return Object.assign({}, defaultOptions.value, options.value || {})
  })

  return {
    native,
    search,
    fieldOptions,
    isNative,
  }
}

const multiselect = function (props, context, dependencies)
{
  const {
    options
  } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$

  const {
    native,
    search,
    isNative
  } = select(props, context, dependencies)


  // ============== COMPUTED ==============

  /**
  * Default options for vue-multiselect.
  * 
  * @type {object} 
  * @default {}
  */
  const defaultOptions = computed(() => {
    return {
      mode: 'multiple',
      searchable: search.value,
      noOptionsText: form$.value.__('laraform.multiselect.noOptions'),
      noResultsText: form$.value.__('laraform.multiselect.noResults'),
      multipleLabel: (val) => {
        return val && val.length > 1
          ? form$.value.__('laraform.multiselect.multipleLabelMore', { options: val.length })
          : form$.value.__('laraform.multiselect.multipleLabelOne') 
      },
    }
  })

  /**
   * Additional [options](https://vue-multiselect.js.org/#sub-props) for the select.
   * 
   * @type {object}
   * @default {}
   * @option
   */
  const fieldOptions = computed(() => {
    return Object.assign({}, defaultOptions.value, options.value || {})
  })

  return {
    native,
    search,
    fieldOptions,
    isNative,
  }
}

const tags = function (props, context, dependencies)
{
  const {
    create,
    search
  } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$

  // ================ DATA ================

  const native = ref(false)

  // ============== COMPUTED ==============

  /**
   * 
   * 
   * @private
   */
  const isNative = computed(() => {
    return false
  })

  /**
  * Default options for vue-multiselect.
  * 
  * @type {object} 
  * @default {}
  */
  const defaultOptions = computed(() => {
    return {
      mode: 'tags',
      searchable: search.value || create.value,
      createTag: create.value,
      noOptionsText: form$.value.__('laraform.multiselect.noOptions'),
      noResultsText: form$.value.__('laraform.multiselect.noResults'),
    }
  })

  /**
   * Additional [options](https://vue-multiselect.js.org/#sub-props) for the select.
   * 
   * @type {object}
   * @default {}
   * @option
   */
  const fieldOptions = computed(() => {
    return Object.assign({}, defaultOptions.value, options.value || {})
  })

  return {
    fieldOptions,
    isNative,
    native,
  }
}

const slider = function (props, context, dependencies)
{
  const { 
    min,
    max,
    step,
    tooltips,
    merge,
    format,
    orientation,
    direction,
    height,
  } = toRefs(props)

  // ============ DEPENDENCIES ============
  
  const isDisabled = dependencies.isDisabled

  // ============== COMPUTED ==============

  /**
  * Default options for vue-js-toggle-button.
  * 
  * @type {object} 
  * @default {}
  */
  const defaultOptions = computed(() => {
    return {
      min: min.value,
      max: max.value,
      step: step.value,
      tooltips: tooltips.value,
      merge: merge.value,
      format: format.value,
      orientation: orientation.value,
      direction: direction.value,
      height: height.value,
      disabled: isDisabled.value,
    }
  })

  /**
  * Additional [options](https://nightcatsama.github.io/vue-slider-component/#/api/props) for slider.
  * 
  * @type {object} 
  * @default {}
  * @option
  */
  const fieldOptions = computed(() => {
    return Object.assign({}, defaultOptions.value, options.value || {})
  })

  return {
    fieldOptions,
  }
}

const time = function(props, context, dependencies)
{
  const { 
    seconds,
    hour24,
    readonly,
  } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$
  const isDisabled = dependencies.isDisabled

  const {
    disabledDates,
    minDate,
    maxDate,
  } = date(props, context, dependencies)

  // ============== COMPUTED ==============

  /**
  * Default options for flatpickr.
  * 
  * @type {object} 
  * @default {}
  */
  const defaultOptions = computed(() => {
    return {
      dateFormat: displayFormat.value || (seconds.value
        ? form$.value.__('laraform.elements.time.secondsDisplayFormat')
        : form$.value.__('laraform.elements.time.displayFormat')
      ),
      minDate: minDate.value,
      maxDate: maxDate.value,
      disable: disabledDates.value,
      clickOpens: !isDisabled.value && !readonly.value,
      time_24hr: hour24.value,
      enableTime: true,
      enableSeconds: seconds.value,
      noCalendar: true,
    }
  })

  /**
  * Additional [options](https://flatpickr.js.org/options/) for flatpickr.
  * 
  * @type {object} 
  * @default {}
  * @option
  */
  const fieldOptions = computed(() => {
    return Object.assign({}, defaultOptions.value, options.value || {})
  })

  /**
   * Helper property used to determine the element has date.
   * 
   * @type {boolean}
   * @ignore
   */
  const hasDate = computed(() => {
    return false
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
    minDate,
    maxDate,
    disabledDates,
    fieldOptions,
    hasDate,
    hasTime,
  }
}

const toggle = function(props, context, dependencies)
{
  const { 
    labels,
    width,
    height,
    speed,
    colors,  
  } = toRefs(props)

  // ============ DEPENDENCIES ============

  const isDisabled = dependencies.isDisabled

  // ============== COMPUTED ==============

  /**
  * Default options for vue-js-toggle-button.
  * 
  * @type {object} 
  * @default {}
  */
  const defaultOptions = computed(() => {
    return {
      disabled: isDisabled.value,
      offLabel: labels.value ? (labels.value.off || '') : '',
      onLabel: labels.value ? (labels.value.on || '') : '',
      width: width.value,
      height: height.value,
      speed: speed.value,
      colors: colors.value,
    }
  })

  /**
  * Additional [options](https://github.com/vueform/toggle) for @vueform/toggle.
  * 
  * @type {object} 
  * @default {}
  * @option
  */
  const fieldOptions = computed(() => {
    return Object.assign({}, defaultOptions.value, options.value || {})
  })

  return {
    fieldOptions,
  }
}

export {
  date,
  dates,
  datetime,
  multiselect,
  select,
  slider,
  tags,
  time,
  toggle,
}