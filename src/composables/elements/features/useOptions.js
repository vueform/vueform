import computedOption from './../../../utils/computedOption'
import checkDateFormat from './../../../utils/checkDateFormat'
import { computed, toRefs, ref } from 'composition-api'

const date = function(props, context, dependencies)
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
   * @type {string} 
   * @default "locale.elements.date.displayFormat"
    */
  const displayFormat = computedOption('displayFormat', schema, form$.value.__('laraform.elements.date.displayFormat'))

  /**
   * Defines how date should be formatted in `value`. If `false` Date object will be used.
   * 
   * @type {string} 
   * @default "YYYY-MM-DD"
    */
  const valueFormat = computedOption('valueFormat', schema, 'YYYY-MM-DD')

  /**
   * Defines how date is formatted when using `load` or `update` method or by directly setting `value`. When using "formatLoad" this should be the output format of that.
   * 
   * @type {string} 
   * @default "YYYY-MM-DD"
    */
  const loadFormat = computedOption('loadFormat', schema, 'YYYY-MM-DD')

  /**
   * List of dates to be disabled.
   * 
   * @type {array} 
   * @default []
   * @option
   */
  const disables = computed({
    get() {
      let disables = schema.value.disables

      if (disables === undefined) {
        return []
      }

      return _.map(disables, (disabled) => {
        checkDateFormat(valueFormat.value, disabled)

        return disabled instanceof Date ? disabled : moment(disabled, valueFormat.value, true).toDate()
      })

    },
    set(val) {
      form$.value.$set(schema.value, 'disables', _.map(val, (disabled) => {
        return disabled instanceof Date ? moment(disabled).format(valueFormat.value) : disabled
      }))
    }
  })

  /**
   * Earliest selectable date. Can be a string in `[loadFormat](#prop-loadFormat)` or a Date object.
   * 
   * @type {string|Date} 
   * @default null
   * @option
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
   * @option
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
  * @option
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

const dates = function(props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$
  const disabled = dependencies.disabled
  const readonly = dependencies.readonly
  const { displayFormat, valueFormat, loadFormat, min, max, disables } = date(props, context, dependencies)

  // ============== COMPUTED ==============

  /**
  * Flatpickr's mode option. Possible values: `multiple` or `range`.
  * 
  * @type {string} 
  * @default "single"
  */
  const mode = computedOption('mode', schema, 'multiple')

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
  * @option
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

const datetime = function(props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$
  const disabled = dependencies.disabled
  const readonly = dependencies.readonly

  const {
    disables, min, max
  } = date(props, context, dependencies)

  // ============== COMPUTED ==============

  /**
   * 
   * 
   * @private
   */
  const seconds = computedOption('seconds', schema, false)

  /**
  * Determines if the time should use 24 hours format.
  * 
  * @type {boolean} 
  * @default false
  */
  const hour24 = computedOption('hour24', schema, true)

  /**
   * Defines how date should be formatted in the input field.
   * 
  * @type {string} 
  * @default "from locale"
    */
  const displayFormat = computedOption('displayFormat', schema, seconds.value
    ? form$.value.__('laraform.elements.datetime.secondsDisplayFormat')
    : form$.value.__('laraform.elements.datetime.displayFormat')
  )

  /**
   * Defines how date should be formatted in `value`. If `false` Date object will be used.
   * 
  * @type {string} 
  * @default "YYYY-MM-DD"
    */
  const valueFormat = computedOption('valueFormat', schema, seconds.value
    ? 'YYYY-MM-DD HH:mm:ss'
    : 'YYYY-MM-DD HH:mm'
  )

  /**
   * Defines how date is formatted when using `load` or `update` method or by directly setting `value`.
   * 
  * @type {string} 
  * @default "YYYY-MM-DD"
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
  * @option
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

const select = function (props, context, dependencies)
{
  const { schema, name } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$

  // ============== COMPUTED ==============

  /**
  * Determines whether the native select should be used by default.
  * 
  * @type {boolean} 
  * @default true
  */
  const native = computedOption('native', schema, true)

  /**
  * Determines whether the select options are searchable.
  * 
  * @type {boolean} 
  * @default false
  */
  const search = computedOption('search', schema, false)

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
  const options = computed({
    get() {
      return Object.assign({}, defaultOptions.value, schema.value.options || {})
    },
    set(val) {
      form$.value.$set(schema.value, 'options', val)
    }
  })

  return {
    native,
    search,
    options,
    isNative,
  }
}

const multiselect = function (props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$

  const {
    native, search, isNative
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
  const options = computed({
    get() {
      return Object.assign({}, defaultOptions.value, schema.value.options || {})
    },
    set(val) {
      form$.value.$set(schema.value, 'options', val)
    }
  })

  return {
    native,
    search,
    options,
    isNative,
  }
}

const tags = function (props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$

  // ============== COMPUTED ==============

  /**
   * 
   * 
   * @private
   */
  const create = computedOption('create', schema, false)

  /**
   * 
   * 
   * @private
   * @option
   */
  const search = computed({
    get() {
      if (create.value) {
        return true
      }

      return schema.value.search !== undefined ? schema.value.search : false
    },
    set(val) {
      form$.value.$set(schema.value, 'search', val)
    }
  })

  /**
   * 
   * 
   * @private
   */
  const native = computed(() => {
    return false
  })

  /**
   * 
   * 
   * @private
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
      mode: 'tags',
      searchable: search.value,
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
  const options = computed({
    get() {
      return Object.assign({}, defaultOptions.value, schema.value.options || {})
    },
    set(val) {
      form$.value.$set(schema.value, 'options', val)
    }
  })

  return {
    native,
    search,
    create,
    options,
    isNative,
  }
}

const slider = function (props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES ============
  
  const disabled = dependencies.disabled
  const form$ = dependencies.form$

  // ============== COMPUTED ==============

  /**
   * 
   * 
   * @private
   */
  const min = computedOption('min', schema, 0)

  /**
   * 
   * 
   * @private
   */
  const max = computedOption('max', schema, 100)
  
  /**
   * 
   * 
   * @private
   */
  const step = computedOption('step', schema, 1)

  /**
   * 
   * 
   * @private
   */
  const tooltips = computedOption('tooltips', schema, true)

  /**
   * 
   * 
   * @private
   */
  const merge = computedOption('merge', schema, -1)

  /**
   * 
   * 
   * @private
   */
  const format = computedOption('format', schema, false)

  /**
   * 
   * 
   * @private
   */
  const orientation = computedOption('orientation', schema, 'horizontal')

  /**
   * 
   * 
   * @private
   */
  const direction = computedOption('direction', schema, 'ltr')
  
  /**
   * 
   * 
   * @private
   */
  const height = computedOption('height', schema, '300px')

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
      disabled: disabled.value,
    }
  })

  /**
  * Additional [options](https://nightcatsama.github.io/vue-slider-component/#/api/props) for slider.
  * 
  * @type {object} 
  * @default {}
  * @option
  */
  const options = computed({
    get() {
      return Object.assign({}, defaultOptions.value, schema.value.options || {})
    },
    set(val) {
      form$.value.$set(schema.value, 'options', val)
    }
  })

  return {
    min,
    max,
    step,
    tooltips,
    merge,
    format,
    orientation,
    direction,
    height,
    options,
  }
}

const time = function(props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$
  const disabled = dependencies.disabled
  const readonly = dependencies.readonly

  const {
    disables, min, max
  } = date(props, context, dependencies)

  // ============== COMPUTED ==============

  /**
   * 
   * 
   * @private
   */
  const seconds = computedOption('seconds', schema, false)

  /**
  * Determines if the time should use 24 hours format.
  * 
  * @type {boolean} 
  * @default false
  */
  const hour24 = computedOption('hour24', schema, true)

  /**
   * Defines how date should be formatted in the input field.
   * 
  * @type {string} 
  * @default "from locale"
    */
  const displayFormat = computedOption('displayFormat', schema, seconds.value
    ? form$.value.__('laraform.elements.time.secondsDisplayFormat')
    : form$.value.__('laraform.elements.time.displayFormat')
  )

  /**
   * Defines how date should be formatted in `value`. If `false` Date object will be used.
   * 
  * @type {string} 
  * @default "YYYY-MM-DD"
    */
  const valueFormat = computedOption('valueFormat', schema, seconds.value ? 'HH:mm:ss' : 'HH:mm')

  /**
   * Defines how date is formatted when using `load` or `update` method or by directly setting `value`.
   * 
  * @type {string} 
  * @default "YYYY-MM-DD"
    */
  const loadFormat = computedOption('loadFormat', schema, seconds.value ? 'HH:mm:ss': 'HH:mm')

  /**
  * Default options for flatpickr.
  * 
  * @type {object} 
  * @default {}
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

const toggle = function(props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$
  const disabled = dependencies.disabled

  // ============== COMPUTED ==============

  /**
  * Labels to be displayed for the toggle. If `false` no labels are displayed.
  * 
  * @type {object} 
  * @default false
  */
  const labels = computedOption('labels', schema, false)

  /**
   * 
   * 
   * @private
   */
  const width = computedOption('width', schema, 54)

  /**
   * 
   * 
   * @private
   */
  const height = computedOption('height', schema, 24)
  
  /**
  * The speed of toggle animation in milliseconds.
  * 
  * @type {number} 
  * @default 300
  */
  const speed = computedOption('speed', schema, 300)

  /**
   * 
   * 
   * @private
   */
  const colors = computedOption('colors', schema, {})

  /**
  * Default options for vue-js-toggle-button.
  * 
  * @type {object} 
  * @default {}
  */
  const defaultOptions = computed(() => {
    return {
      disabled: disabled.value,
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
  const options = computed({
    get() {
      return Object.assign({}, defaultOptions.value, schema.value.options || {})
    },
    set(val) {
      form$.value.$set(schema.value, 'options', val)
    }
  })

  return {
    labels,
    width,
    height,
    speed,
    colors,
    options,
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