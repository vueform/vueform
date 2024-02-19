import each from 'lodash/each'
import isEqual from 'lodash/isEqual'
import moment from 'moment'
import { toRefs, watch, computed, ref, nextTick, onMounted, getCurrentInstance } from 'vue'
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
    attrs: {
      required: false,
      type: [Object],
      default: () => ({})
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
      Size,
      View,
      classesInstance,
      classes,
      Templates,
      template,
      theme,
    } = useElementComponent(props, context)

    const $this = getCurrentInstance().proxy

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

    // ============== COMPUTED ==============

    /**
     * Whether the element containing the datepicker is available.
     * 
     * @type {boolean}
     * @private
     */
    const available = computed(() => {
      return el$.value.available
    })

    /**
     * The current locale object for flatpickr.
     * 
     * @type {object}
     * @private
     */
    const locale = computed(() => {
      return $this.$vueform.i18n.locales[$this.$vueform.i18n.locale]?.vueform?.datepicker ||
             $this.$vueform.i18n.locales[$this.$vueform.i18n.fallbackLocale]?.vueform?.datepicker || {}
    })

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

      each(options.value, (val, option) => {
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

    /**
     * Initalizes the flatpickr.
     * 
     * @returns {Promise}
     * @private
     */
    const init = async () => {
      if (!input.value) {
        await nextTick()
      }

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
        },
        ariaDateFormat: 'MMMM D, YYYY',
        disableMobile: true,
        locale: locale.value,
      }))

      if (datepicker$.value.calendarContainer) {
        classes.value.calendarContainer.forEach((c) => {
          datepicker$.value.calendarContainer.classList.add(c)
        })
      }

      setDatepickerId()

      if (value.value !== null) {
        datepicker$.value.setDate(value.value, false)
      }
    }

    // ============== WATCHERS ==============

    watch(value, (n,o) => {
      datepicker$.value?.setDate(n, false)
    })

    watch(id, (n,o) => {
      setDatepickerId()
    }, { immediate: false })

    watch(options, (n,o) => {
      if (isEqual(n, o)) {
        return
      }
      
      init()
    }, { deep: true })

    watch([locale, available], (n,o) => {
      init()
    }, { deep: true })

    // ================ HOOKS ===============

    onMounted(() => {
      init()
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
      Size,
      View,
      classesInstance,
      theme,
      classes,
      Templates,
      template,
      datepicker$,
      input,
      config,
      mode,
      locale,
      update,
      init,
    }
  },
}