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
   * Defines how date is formatted when using `load` or `update` method or by directly setting `value`. When using "formatLoad" this should be the output format of that.
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

const datetime = function(props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$
  const disabled = dependencies.disabled
  const readonly = dependencies.readonly

  const { disables, min, max } = date(props, context, dependencies)

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

const select = function (props, context, dependencies)
{
  const { schema, name } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$

  // ================ DATA ================

  const loading = ref(false)

  // ============== COMPUTED ==============

  /**
  * Determines whether the native select should be used by default.
  * 
  * @type {boolean} 
  * @default true
  */
  const native = computedOption('native', schema, true)

  /**
  * When item values are objects this object element will be used to track search.
  * 
  * @type {string} 
  * @default 'label'
  */
  const trackBy = computedOption('trackBy', schema, 'label')

  /**
  * Determines whether the select options are searchable.
  * 
  * @type {boolean} 
  * @default false
  */
  const search = computedOption('search', schema, false)

  /**
  * Maximum number of search options.
  * 
  * @type {number}
  * @default 1000
  */
  const limit = computedOption('limit', schema, 20)

  const maxHeight = computedOption('maxHeight', schema, 160)

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
  * @ignore
  */
  const defaultOptions = computed(() => {
    return {
      showLabels: false,
      searchable: search.value,
      label: 'label',
      trackBy: trackBy.value,
      loading: loading.value,
      limit: limit.value,
      mode: 'single',
      maxHeight: maxHeight.value,
    }
  })

  /**
   * Additional [options](https://vue-multiselect.js.org/#sub-props) for the select.
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

  return {
    loading,
    native,
    trackBy,
    search,
    limit,
    maxHeight,
    isNative,
    options,
  }
}

const multiselect = function (props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$

  const { loading, native, trackBy, search, limit, maxHeight, isNative } = select(props, context, dependencies)

  // ============== COMPUTED ==============

  /**
  * Default options for vue-multiselect.
  * 
  * @type {object} 
  * @default {}
  * @ignore
  */
  const defaultOptions = computed(() => {
    return {
      searchable: search.value,
      label: 'label',
      trackBy: trackBy.value,
      loading: loading.value,
      limit: limit.value,
      mode: 'multiple',
      clearOnSelect: true,
      maxHeight: maxHeight.value,
    }
  })

  /**
   * Additional [options](https://vue-multiselect.js.org/#sub-props) for the select.
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

  return {
    loading,
    native,
    trackBy,
    search,
    limit,
    maxHeight,
    isNative,
    options,
  }
}

const tags = function (props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$

  const { loading, trackBy, limit, maxHeight } = select(props, context, dependencies)

  // ============== COMPUTED ==============

  const create = computedOption('create', schema, false)

  const hideSelectedTag = computedOption('hideSelectedTag', schema, false)

  const tagPlaceholder = computedOption('tagPlaceholder', schema, form$.value.__('laraform.elements.tags.createLabel'))

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

  const native = computed(() => {
    return false
  })

  const isNative = computed(() => {
    return native.value && !search.value
  })

  /**
  * Default options for vue-multiselect.
  * 
  * @type {object} 
  * @default {}
  * @ignore
  */
  const defaultOptions = computed(() => {
    return {
      searchable: search.value,
      label: 'label',
      trackBy: trackBy.value,
      loading: loading.value,
      limit: limit.value,
      mode: 'tags',
      hideSelectedTag: hideSelectedTag.value,
      maxHeight: maxHeight.value,
      createTag: create.value,
      appendNewTag: false,
    }
  })

  /**
   * Additional [options](https://vue-multiselect.js.org/#sub-props) for the select.
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

  return {
    loading,
    native,
    trackBy,
    search,
    limit,
    maxHeight,
    create,
    tagPlaceholder,
    isNative,
    options,
  }
}

const slider = function (props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES ============
  
  const disabled = dependencies.disabled

  // ============== COMPUTED ==============

  const min = computedOption('min', schema, 0)

  const max = computedOption('max', schema, 100)

  /**
  * Default options for vue-js-toggle-button.
  * 
  * @type {object} 
  * @default {}
  * @ignore
  */
  const defaultOptions = computed(() => {
    return {
      min: min.value,
      max: max.value,
      disabled: disabled.value,
    }
  })

  /**
  * Additional [options](https://nightcatsama.github.io/vue-slider-component/#/api/props) for slider.
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

  return {
    min,
    max,
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

  const { disables, min, max } = date(props, context, dependencies)

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
    ? form$.value.__('laraform.elements.time.secondsDisplayFormat')
    : form$.value.__('laraform.elements.time.displayFormat')
  )

  /**
   * Defines how date should be formatted in `value`. If `false` Date object will be used.
   * 
  * @type {string|false} 
  * @default 'YYYY-MM-DD'
    */
  const valueFormat = computedOption('valueFormat', schema, seconds.value ? 'HH:mm:ss' : 'HH:mm')

  /**
   * Defines how date is formatted when using `load` or `update` method or by directly setting `value`.
   * 
  * @type {string} 
  * @default 'YYYY-MM-DD'
    */
  const loadFormat = computedOption('loadFormat', schema, seconds.value ? 'HH:mm:ss': 'HH:mm')

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
      noCalendar: true,
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
  * The speed of toggle animation in milliseconds.
  * 
  * @type {number} 
  * @default 300
  */
  const speed = computedOption('speed', schema, 300)

  /**
  * Whether the toggle should use CSS colors. Turns to `false` if `colors` is defined.
  * 
  * @type {boolean} 
  * @default true
  * @ignore
  */
  const cssColors = computedOption('cssColors', schema, true)

  /**
  * Dimensions of the toggle input. Default: `{ width: 50, height: 22 }`
  * 
  * @type {object} 
  * @default {...}
  */
  const dimensions = computed({
    get() {
      return Object.assign({}, {
        width: 50,
        height: 22,
      }, schema.value.dimensions || {})
    },
    set(val) {
      form$.value.$set(schema.value, 'dimensions', val)
    }
  })

  /**
  * Colors of the toggle input. Default: `{ background: '#777777', handle: '#FFFFFF' }`
  * 
  * @type {object} 
  * @default {...}
  */
  const colors = computed({
    get() {
      return Object.assign({}, {
        background: '#777777',
        handle: '#FFFFFF',
      }, schema.value.colors || {})
    },
    set(val) {
      form$.value.$set(schema.value, 'colors', val)
    }
  })

  /**
  * Default options for vue-js-toggle-button.
  * 
  * @type {object} 
  * @default {}
  * @ignore
  */
  const defaultOptions = computed(() => {
    return {
      labels: labels.value,
      speed: speed.value,
      width: dimensions.value.width,
      height: dimensions.value.height,
      color: colors.value.background,
      switchColor: colors.value.handle,
      cssColors: cssColors.value,
      disabled: disabled.value,
    }
  })

  /**
  * Additional [options](https://github.com/euvl/vue-js-toggle-button#properties) for vue-js-toggle-button.
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

  return {
    labels,
    speed,
    cssColors,
    dimensions,
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