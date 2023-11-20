import map from 'lodash/map'
import moment from 'moment'
import checkDateFormat from './../../utils/checkDateFormat'
import localize from './../../utils/localize'
import { computed, toRefs, ref, inject } from 'vue'

const date = function(props, context, dependencies)
{
  const {
    disables,
    min,
    max,
    extendOptions,
    readonly,
    hour24,
    seconds,
    date,
    time,
  } = toRefs(props)
  
  // ============ DEPENDENCIES ============
  
  const isDisabled = dependencies.isDisabled
  const displayDateFormat = dependencies.displayDateFormat
  const valueDateFormat = dependencies.valueDateFormat
  
  // ============== COMPUTED ==============
  
  /**
   * List of dates to disable.
   *
   * @type {array}
   * @private
   */
  const disabledDates = computed(() => {
    /* istanbul ignore next: failsafe only */
    if (disables.value === undefined) {
      return []
    }
    
    return map(disables.value, (disabledDate) => {
      checkDateFormat(valueDateFormat.value, disabledDate)
      
      return disabledDate instanceof Date ? disabledDate : moment(disabledDate, valueDateFormat.value, true).toDate()
    })
  })
  
  /**
   * Earliest selectable date. Can be a string in `[loadFormat](#load-format)` or a Date object.
   *
   * @type {string|Date}
   * @private
   */
  const minDate = computed(() => {
    if (!min.value) {
      return null
    }
    
    checkDateFormat(valueDateFormat.value, min.value)
    
    return min.value instanceof Date ? min.value : moment(min.value, valueDateFormat.value, true).toDate()
  })
  
  /**
   * Latest selectable date. Can be a string in `[loadFormat](#load-format)` or a Date object.
   *
   * @type {string|Date}
   * @private
   */
  const maxDate = computed(() => {
    if (!max.value) {
      return null
    }
    
    checkDateFormat(valueDateFormat.value, max.value)
    
    return max.value instanceof Date ? max.value : moment(max.value, valueDateFormat.value, true).toDate()
  })
  
  /**
   * Default options for date selector.
   *
   * @type {object}
   * @private
   */
  const defaultOptions = computed(() => {
    return {
      dateFormat: displayDateFormat.value,
      minDate: minDate.value,
      maxDate: maxDate.value,
      disable: disabledDates.value,
      clickOpens: !isDisabled.value && !readonly.value,
      time_24hr: hour24.value,
      enableTime: time.value,
      enableSeconds: seconds.value,
      noCalendar: !date.value,
    }
  })
  
  /**
   * Options for date selector. Can be extended via [`extend-options`](#option-extend-options) with [flatpickr options](https://flatpickr.js.org/options/).
   *
   * @type {object}
   */
  const fieldOptions = computed(() => {
    return Object.assign({}, defaultOptions.value, extendOptions.value || /* istanbul ignore next */ {})
  })
  
  /**
   * Whether date selector has `date` enabled.
   *
   * @type {boolean}
   * @private
   */
  const hasDate = computed(() => {
    return true
  })
  
  /**
   * Whether date selector has `time` enabled.
   *
   * @type {boolean}
   * @private
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
    extendOptions,
    readonly,
  } = toRefs(props)
  
  const {
    minDate,
    maxDate,
    disabledDates,
  } = date(props, context, dependencies)
  
  // ============ DEPENDENCIES ============
  
  const isDisabled = dependencies.isDisabled
  const displayDateFormat = dependencies.displayDateFormat
  
  // ============== COMPUTED ==============
  
  const defaultOptions = computed(() => {
    return {
      mode: mode.value,
      dateFormat: displayDateFormat.value,
      minDate: minDate.value,
      maxDate: maxDate.value,
      disable: disabledDates.value,
      clickOpens: !isDisabled.value && !readonly.value,
    }
  })
  
  const fieldOptions = computed(() => {
    return Object.assign({}, defaultOptions.value, extendOptions.value || /* istanbul ignore next */ {})
  })
  
  const hasDate = computed(() => {
    return true
  })
  
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

const select = function(props, context, dependencies)
{
  const {
    native,
    extendOptions,
    labelProp,
    trackBy,
    valueProp,
    search,
    limit,
    noOptionsText,
    noResultsText,
    caret,
    object,
    delay,
    minChars,
    resolveOnLoad,
    filterResults,
    clearOnSearch,
    canDeselect,
    canClear,
    openDirection,
    strict,
    closeOnSelect,
    closeOnDeselect,
    autocomplete,
    groups,
    groupLabel,
    groupOptions,
    groupHideEmpty,
    inputType,
    create,
    appendNewOption,
    addOptionOn,
  } = toRefs(props)
  
  // ============ DEPENDENCIES ============
  
  const form$ = dependencies.form$
  const isLoading = dependencies.isLoading
  
  // =============== INJECT ===============
  
  const config$ = inject('config$')
  
  // ============== COMPUTED ==============
  
  /**
   * Whether native select should be used.
   *
   * @type {string}
   */
  const isNative = computed(() => {
    return native.value && !search.value
  })
  
  /**
   * Default options for non-native select input.
   *
   * @type {object}
   * @private
   */
  const defaultOptions = computed(() => {
    return {
      mode: 'single',
      searchable: search.value || create.value,
      noOptionsText: noOptionsText.value || form$.value.translations.vueform.multiselect.noOptions,
      noResultsText: noResultsText.value || form$.value.translations.vueform.multiselect.noResults,
      locale: Object.keys(config$.value.i18n.locales).length > 1 ? config$.value.i18n.locale : null, //@todo:adam can not be localized on form level
      fallbackLocale: config$.value.i18n.fallbackLocale,
      label: labelProp.value,
      trackBy: trackBy.value,
      valueProp: valueProp.value,
      limit: limit.value,
      caret: caret.value,
      loading: isLoading.value,
      object: object.value,
      delay: delay.value,
      minChars: minChars.value,
      resolveOnLoad: resolveOnLoad.value,
      filterResults: filterResults.value,
      clearOnSearch: clearOnSearch.value,
      canDeselect: canDeselect.value,
      canClear: canClear.value,
      openDirection: openDirection.value,
      strict: strict.value,
      closeOnSelect: closeOnSelect.value,
      closeOnDeselect: closeOnDeselect.value,
      autocomplete: autocomplete.value,
      groups: groups.value,
      groupLabel: groupLabel.value,
      groupOptions: groupOptions.value,
      groupHideEmpty: groupHideEmpty.value,
      inputType: inputType.value,
      createOption: create.value,
      appendNewOption: appendNewOption.value,
      addOptionOn: addOptionOn.value,
    }
  })
  
  /**
   * Options for non-native select input. Can be extended via [`extend-options`](#option-extend-options) with [@vueform/multiselect options](https://github.com/vueform/multiselect#basic-props).
   *
   * @type {object}
   */
  const fieldOptions = computed(() => {
    return Object.assign({}, defaultOptions.value, extendOptions.value || /* istanbul ignore next */ {})
  })
  
  return {
    fieldOptions,
    isNative,
  }
}

const multiselect = function(props, context, dependencies)
{
  const {
    native,
    extendOptions,
    labelProp,
    trackBy,
    valueProp,
    search,
    limit,
    noOptionsText,
    noResultsText,
    caret,
    object,
    delay,
    minChars,
    resolveOnLoad,
    filterResults,
    clearOnSearch,
    clearOnSelect,
    canClear,
    max,
    openDirection,
    strict,
    closeOnSelect,
    closeOnDeselect,
    autocomplete,
    groups,
    groupLabel,
    groupOptions,
    groupHideEmpty,
    groupSelect,
    inputType,
    hideSelected,
    multipleLabel,
    multipleLabelMultiple,
    multipleLabelSingle,
    create,
    appendNewOption,
    addOptionOn,
  } = toRefs(props)
  
  // ============ DEPENDENCIES ============
  
  const form$ = dependencies.form$
  const isLoading = dependencies.isLoading
  
  // =============== INJECT ===============
  
  const config$ = inject('config$')
  
  // ============== COMPUTED ==============
  
  /**
   * Whether native multiselect should be used.
   *
   * @type {string}
   */
  const isNative = computed(() => {
    return native.value && !search.value
  })
  
  /**
   * Default options for non-native multiselect input.
   *
   * @type {object}
   * @private
   */
  const defaultOptions = computed(() => {
    return {
      mode: 'multiple',
      searchable: search.value || create.value,
      noOptionsText: noOptionsText.value || form$.value.translations.vueform.multiselect.noOptions,
      noResultsText: noResultsText.value || form$.value.translations.vueform.multiselect.noResults,
      multipleLabel: multipleLabel.value || ((val, select$) => {
        return val && val.length > 1
          ? (multipleLabelMultiple.value
              ? multipleLabelMultiple.value.replace(':x:', val.length)
              : form$.value.__(form$.value.translations.vueform.multiselect.multipleLabelMore, { options: val.length })
          )
          : multipleLabelSingle.value || form$.value.translations.vueform.multiselect.multipleLabelOne
      }),
      locale: Object.keys(config$.value.i18n.locales).length > 1 ? config$.value.i18n.locale : null, //@todo:adam can not be localized on form level
      fallbackLocale: config$.value.i18n.fallbackLocale,
      
      label: labelProp.value,
      trackBy: trackBy.value,
      valueProp: valueProp.value,
      limit: limit.value,
      caret: caret.value,
      loading: isLoading.value,
      object: object.value,
      delay: delay.value,
      minChars: minChars.value,
      resolveOnLoad: resolveOnLoad.value,
      filterResults: filterResults.value,
      clearOnSearch: clearOnSearch.value,
      clearOnSelect: clearOnSelect.value,
      canClear: canClear.value,
      max: max.value,
      openDirection: openDirection.value,
      strict: strict.value,
      closeOnSelect: closeOnSelect.value,
      closeOnDeselect: closeOnDeselect.value,
      autocomplete: autocomplete.value,
      groups: groups.value,
      groupLabel: groupLabel.value,
      groupOptions: groupOptions.value,
      groupHideEmpty: groupHideEmpty.value,
      groupSelect: groupSelect.value,
      inputType: inputType.value,
      hideSelected: hideSelected.value,
      createOption: create.value,
      appendNewOption: appendNewOption.value,
      addOptionOn: addOptionOn.value,
    }
  })
  
  /**
   * Options for non-native multiselect input. Can be extended via [`extend-options`](#option-extend-options) with [@vueform/multiselect options](https://github.com/vueform/multiselect#basic-props).
   *
   * @type {object}
   */
  const fieldOptions = computed(() => {
    return Object.assign({}, defaultOptions.value, extendOptions.value || /* istanbul ignore next */ {})
  })
  
  return {
    fieldOptions,
    isNative,
  }
}

const tags = function(props, context, dependencies)
{
  const {
    extendOptions,
    labelProp,
    trackBy,
    valueProp,
    search,
    limit,
    noOptionsText,
    noResultsText,
    caret,
    object,
    delay,
    minChars,
    resolveOnLoad,
    filterResults,
    clearOnSearch,
    clearOnSelect,
    canClear,
    max,
    showOptions,
    openDirection,
    strict,
    closeOnSelect,
    closeOnDeselect,
    autocomplete,
    groups,
    groupLabel,
    groupOptions,
    groupHideEmpty,
    groupSelect,
    inputType,
    hideSelected,
    create,
    appendNewOption,
    addOptionOn,
    breakTags,
  } = toRefs(props)
  
  // ============ DEPENDENCIES ============
  
  const form$ = dependencies.form$
  const isLoading = dependencies.isLoading
  
  // =============== INJECT ===============
  
  const config$ = inject('config$')
  
  // ================ DATA ================
  
  /**
   * Technical prop to be able to use the same template for tags as for select.
   *
   * @type {boolean}
   * @default false
   * @private
   */
  const native = ref(false)
  
  // ============== COMPUTED ==============
  
  /**
   * Technical prop to be able to use the same template for tags as for select.
   *
   * @type {boolean}
   * @private
   */
  const isNative = computed(() => {
    return false
  })
  
  /**
   * Default options for tags input.
   *
   * @type {object}
   * @private
   */
  const defaultOptions = computed(() => {
    return {
      mode: 'tags',
      searchable: search.value || create.value,
      noOptionsText: noOptionsText.value || form$.value.translations.vueform.multiselect.noOptions,
      noResultsText: noResultsText.value || form$.value.translations.vueform.multiselect.noResults,
      locale: Object.keys(config$.value.i18n.locales).length > 1 ? config$.value.i18n.locale : null, //@todo:adam can not be localized on form level
      fallbackLocale: config$.value.i18n.fallbackLocale,
      label: labelProp.value,
      trackBy: trackBy.value,
      valueProp: valueProp.value,
      limit: limit.value,
      caret: caret.value,
      loading: isLoading.value,
      object: object.value,
      delay: delay.value,
      minChars: minChars.value,
      resolveOnLoad: resolveOnLoad.value,
      filterResults: filterResults.value,
      clearOnSearch: clearOnSearch.value,
      clearOnSelect: clearOnSelect.value,
      canClear: canClear.value,
      max: max.value,
      showOptions: showOptions.value,
      openDirection: openDirection.value,
      strict: strict.value,
      closeOnSelect: closeOnSelect.value,
      closeOnDeselect: closeOnDeselect.value,
      autocomplete: autocomplete.value,
      groups: groups.value,
      groupLabel: groupLabel.value,
      groupOptions: groupOptions.value,
      groupHideEmpty: groupHideEmpty.value,
      groupSelect: groupSelect.value,
      inputType: inputType.value,
      hideSelected: hideSelected.value,
      createOption: create.value,
      appendNewOption: appendNewOption.value,
      addOptionOn: addOptionOn.value,
      breakTags: breakTags.value,
    }
  })
  
  /**
   * Options for tags input. Can be extended via [`extend-options`](#option-extend-options) with [@vueform/multiselect options](https://github.com/vueform/multiselect#basic-props).
   *
   * @type {object}
   */
  const fieldOptions = computed(() => {
    return Object.assign({}, defaultOptions.value, extendOptions.value || /* istanbul ignore next */ {})
  })
  
  return {
    native,
    fieldOptions,
    isNative,
  }
}

const slider = function(props, context, dependencies)
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
    extendOptions,
    showTooltip,
    tooltipPosition,
    lazy,
  } = toRefs(props)
  
  // ============ DEPENDENCIES ============
  
  const isDisabled = dependencies.isDisabled
  const labelId = dependencies.labelId
  
  // ============== COMPUTED ==============
  
  /**
   * Default options for slider input.
   *
   * @type {object}
   * @private
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
      disabled: isDisabled.value,
      showTooltip: showTooltip.value,
      tooltipPosition: tooltipPosition.value,
      lazy: lazy.value,
    }
  })
  
  /**
   * Options for slider input. Can be extended via [`extend-options`](#option-extend-options) with [@vueform/slider options](https://github.com/vueform/slider#basic-props).
   *
   * @type {object}
   */
  const fieldOptions = computed(() => {
    return Object.assign({}, defaultOptions.value, extendOptions.value || /* istanbul ignore next */ {})
  })
  
  return {
    fieldOptions,
  }
}

const toggle = function(props, context, dependencies)
{
  const {
    labels,
    extendOptions,
    trueValue,
    falseValue,
  } = toRefs(props)
  
  // ============ DEPENDENCIES ============
  
  const isDisabled = dependencies.isDisabled
  const form$ = dependencies.form$
  
  // =============== INJECT ===============
  
  const config$ = inject('config$')
  
  // ============== COMPUTED ==============
  
  /**
   * Default options toggle input.
   *
   * @type {object}
   * @private
   */
  const defaultOptions = computed(() => {
    return {
      disabled: isDisabled.value,
      offLabel: labels.value ? (localize(labels.value.off, config$.value, form$.value) || '') : /* istanbul ignore next: default is hardcoded {}, will never fall there */ '',
      onLabel: labels.value ? (localize(labels.value.on, config$.value, form$.value) || '') : /* istanbul ignore next: default is hardcoded {}, will never fall there */ '',
      trueValue: trueValue.value,
      falseValue: falseValue.value,
    }
  })
  
  /**
   * Options for toggle input. Can be extended via [`extend-options`](#option-extend-options) with [@vueform/toggle options](https://github.com/vueform/toggle#basic-props).
   *
   * @type {object}
   */
  const fieldOptions = computed(() => {
    return Object.assign({}, defaultOptions.value, extendOptions.value || /* istanbul ignore next */ {})
  })
  
  return {
    fieldOptions,
  }
}

export {
  date,
  dates,
  multiselect,
  select,
  slider,
  tags,
  toggle,
}