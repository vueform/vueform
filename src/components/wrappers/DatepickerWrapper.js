import _ from 'lodash'
import moment from 'moment'
import { toRefs, watch, computed, ref, onMounted } from 'composition-api'
import useElementComponent from '../../composables/useElementComponent'
import flatpickr from 'flatpickr'

export default {
  name: 'DatepickerWrapper',
  emits: ['change'],
  props: {
    value: {
      required: true,
    },
    options: {
      type: [Object],
      required: true
    },
    id: {
      type: [Number, String],
      required: true
    },
    placeholder: {
      type: [Number, String],
      required: false
    },
  },
  setup(props, context)
  {
    const {
      id,
      options,
      value,
    } = toRefs(props)

    // ============ DEPENDENCIES ============

    const {
      el$,
      form$,
      $size,
      classes,
      templates,
      template,
      theme,
    } = useElementComponent(props, context)

    // ================ DATA ================

    /**
     * The [flatpickr instance](https://flatpickr.js.org/instance-methods-properties-elements).
     * 
     * @type {object}
     * @default null
     */
    const datepicker$ = ref(null)

    /**
     * The date input DOM element.
     * 
     * @type {HTMLElement}
     */
    const input = ref(null)

    // ============== COMPITED ==============

    /**
     * The current `options.mode`.
     * 
     * @type {string}
     */
    const mode = computed(() => {
      return options.value.mode || 'single'
    })

    /**
     * The flatpickr configuration object. Can be extended via [`options`](#options) with [flatpickr options](https://flatpickr.js.org/options/).
     * 
     * @type {object}
     */
    const config = computed(() => {
      const config = {}

      _.each(options.value, (val, option) => {
        if (val !== null && val !== undefined) {
          config[option] = val
        }
      })

      // Append the form to main form instead of end of the body
      // Update: Experimental removal, because enter was disabled
      // when appended to form config.appendTo = this.form$.$refs.form$

      // according to:
      // https://github.com/flatpickr/flatpickr/issues/1019
      config.static = true

      return config
    })

    // =============== METHODS ==============

    /**
     * Emits `change` event.
     * 
     * @param {array|Date} value* the value to emit with change
     * @returns {void}
     * @private
     */
    const update = (val) => {
      context.emit('change', mode.value == 'single' ? (val[0] || null) : val)
    }

    /**
     * Sets's the datepicker input parent's `id` attribute.
     * 
     * @returns {void}
     * @private
     */
    const setDatepickerId = () => {
      datepicker$.value.input.parentElement.id = 'datepicker-' + id.value
    }

    // ============== WATCHERS ==============

    watch(value, (n,o) => {
      datepicker$.value.setDate(n, false)
    })

    watch(id, (n,o) => {
      setDatepickerId()
    }, { immediate: false })

    watch(options, (n,o) => {
      _.each(config.value, (val, option) => {
        datepicker$.value.set(option, val)
      })
    }, { deep: true })

    // ================ HOOKS ===============

    onMounted(() => {
      datepicker$.value = flatpickr(input.value, Object.assign({}, config.value, {
        onChange: (val) => {
          update(val)
        },
        onClose: (val) => {
          val = mode.value == 'range' && val.length < 2 ? [] : val

          update(val)
        },
        // creating a date object from a string date provided in displayFormat (to value)
        parseDate: (dateStr, format) => {
          return moment(dateStr, format, true).toDate()
        },
        // creating a date string according to displayFormat (to display)
        formatDate: (date, format) => {
          return moment(date).format(format)
        }
      }))

      if (datepicker$.value.calendarContainer) {
        if (typeof classes.value.calendarContainer !== 'string' || classes.value.calendarContainer.length > 0)
        datepicker$.value.calendarContainer.classList.add(classes.value.calendarContainer)
      }

      setDatepickerId()

      if (value.value !== null) {
        datepicker$.value.setDate(value.value, false)
      }
    })

    // // Required because if static == true the picker does
    // // not close properly when clicking outside of it.
    // document.addEventListener('click', () => {
    //   if(clickedOutsideElement('datepicker-' + this.id)) {
    //     if (this.datepicker$.isOpen) {
    //       this.datepicker$.close()
    //     }
    //   }
    // })

    return {
      el$,
      form$,
      $size,
      theme,
      classes,
      templates,
      template,
      datepicker$,
      input,
      config,
      mode,
      update,
    }
  },
}