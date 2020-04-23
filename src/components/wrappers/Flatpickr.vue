<template>
  <input
    type="text"
    class="laraform-flatpickr"
    :id="id"
    :placeholder="placeholder"
    ref="input"
  />
</template>

<script>
  import utils from './../../utils'
  import flatpickr from 'flatpickr'
  import 'flatpickr/dist/themes/light.css'

  export default {
    inject: ['form$'],
    name: 'Flatpickr',
    props: {
      placeholder: [String, Number],
      value: null,
      id: [String, Number],
      mode: String,
      dateFormat: String,
      defaultDate: [String, Array],
      disable: Array,
      time_24hr: Boolean,
      enableTime: Boolean,
      enableSeconds: Boolean,
      altFormat: String,
      altInput: Boolean,
      altInputClass: String,
      allowInput: Boolean,
      appendTo: Object,
      ariaDateFormat: String,
      clickOpens: {type: Boolean, default: true},
      defaultHour: Number,
      defaultMinute: Number,
      disableMobile: Boolean,
      enable: Array,
      formatDate: Function,
      hourIncrement: Number,
      inline: Boolean,
      maxDate: String,
      minDate: String,
      minuteIncrement: Number,
      nextArrow: String,
      noCalendar: Boolean,
      parseDate: Function,
      prevArrow: String,
      shorthandCurrentMonth: Boolean,
      static: Boolean,
      weekNumbers: Boolean,
      wrap: Boolean,
    },
    data() {
      return {
        flatpickr$: null,
      }
    },
    watch: {
      value(value) {
        this.flatpickr$.setDate(value, false, this.dateFormat)
      }
    },
    methods: {
      update(value) {
        if (this.mode === 'range' && value.length < 2) {
          return
        }

        value = this.mode == 'single' ? (value[0] || null) : value

        this.$emit('input', value)
        this.$emit('change', value)
      }
    },
    mounted() {
      var config = {}

      _.each(this.$props, (value, prop) => {
        if (value !== null && value !== undefined) {
          config[prop] = value
        }
      })

      // append the form to main form
      // instead of end of the body
      // Update: Experimental removal, because enter was
      // disabled when appended to form
      // config.appendTo = this.form$.$refs.form$

      // according to:
      // https://github.com/flatpickr/flatpickr/issues/1019
      config.static = true

      this.flatpickr$ = flatpickr(this.$refs.input, Object.assign({}, config, {
        onChange: (value) => {
          this.update(value)
        },
        onClose: (value) => {
          this.update(value)
        }
      }))

      if (this.flatpickr$.calendarContainer) {
        this.flatpickr$.calendarContainer.classList.add('lf-flatpickr')
      }

      this.flatpickr$.input.parentElement.id = 'flatpickr-' + this.id

      // required because if static == true
      // the picker does not close properly
      // when clicking outside of it
      document.addEventListener('click', (e) => {
        if(utils.clickedOutsideElement('flatpickr-' + this.id)) {
          if (this.flatpickr$.isOpen) {
            this.flatpickr$.close()
          }
        }
      })
    },
  }
</script>