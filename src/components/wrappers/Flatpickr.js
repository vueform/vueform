import clickedOutsideElement from './../../utils/clickedOutsideElement'
import ElementComponent from '../../mixins/ElementComponent'
import flatpickr from 'flatpickr'
import 'flatpickr/dist/themes/light.css'

export default {
  name: 'Flatpickr',
  mixins: [ElementComponent],
  inject: ['form$'],
  props: {
    model: null,
    dateFormat: {
      type: String,
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
    }
  },
  computed: {
    config() {
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

      return config
    }
  },
  methods: {
    update(value) {
      this.$emit('input', value[0])
    },
    $_shouldUpdate(value) {
      return !(value instanceof Date && this.model instanceof Date && value.getTime() === this.model.getTime())
    }
  },
  mounted() {
    this.flatpickr$ = flatpickr(this.$refs.input, Object.assign({}, this.config, {
      onChange: (value) => {
        this.update(value)
      },
      onClose: (value) => {
        this.update(value)
      }
    }))
  },
}