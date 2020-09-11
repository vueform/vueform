import clickedOutsideElement from './../../utils/clickedOutsideElement'
import ElementComponent from '../../mixins/ElementComponent'
import flatpickr from 'flatpickr'
import 'flatpickr/dist/themes/light.css'

export default {
  name: 'Flatpickr',
  mixins: [ElementComponent],
  inject: ['form$'],
  props: {
    options: {
      type: [Object],
      required: true
    },
    model: {
      required: true,
    },
    id: {
      type: [Number, String],
      required: true
    },
    placeholder: {
      type: [Number, String],
      required: false
    },
    dateFormat: {
      type: [String],
      required: false
    },
    mode: {
      type: [String],
      required: false
    },
  },
  data() {
    return {
      flatpickr$: null,
    }
  },
  watch: {
    model(value) {
      this.flatpickr$.setDate(value, false)
    },
    id: {
      handler(value) {
        this.$_setFlatpickrId()
      },
      immediate: false
    },
    options: {
      handler() {
        _.each(this.config, (value, option) => {
          this.flatpickr$.set(option, value)
        })
      },
      deep: true
    }
  },
  computed: {
    config() {
      var config = {}

      _.each(this.options, (value, option) => {
        if (value !== null && value !== undefined) {
          config[option] = value
        }
      })

      // Append the form to main form instead of end of the body
      // Update: Experimental removal, because enter was disabled
      // when appended to form config.appendTo = this.form$.$refs.form$

      // according to:
      // https://github.com/flatpickr/flatpickr/issues/1019
      config.static = true

      return config
    }
  },
  methods: {
    update(value) {
      value = this.mode == 'single' ? (value[0] || null) : value

      this.$emit('input', value)
      this.$emit('change', value)
    },
    $_setFlatpickrId() {
      this.flatpickr$.input.parentElement.id = 'flatpickr-' + this.id
    }
  },
  mounted() {
    this.flatpickr$ = flatpickr(this.$refs.input, Object.assign({}, this.config, {
      onChange: (value) => {
        this.update(value)
      },
      onClose: (value) => {
        value = this.mode == 'range' && value.length < 2 ? [] : value

        this.update(value)
      },
      parseDate: (dateStr, format) => {
        return moment(dateStr, format, true).toDate();
      },
      formatDate: (date, format, locale) => {
        return moment(date).format(format);
      }
    }))

    if (this.flatpickr$.calendarContainer) {
      this.flatpickr$.calendarContainer.classList.add(this.classes.calendarContainer)
    }

    this.$_setFlatpickrId()
    // // Required because if static == true the picker does
    // // not close properly when clicking outside of it.
    // document.addEventListener('click', () => {
    //   if(clickedOutsideElement('flatpickr-' + this.id)) {
    //     if (this.flatpickr$.isOpen) {
    //       this.flatpickr$.close()
    //     }
    //   }
    // })
  },
}