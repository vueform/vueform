import BaseElement from './../../mixins/BaseElement'
import BaseValidation from './../../mixins/BaseValidation'
import CanBeDisabled from './../../mixins/CanBeDisabled'
import $model from './../../directives/$model'
import convertFormatToken from './../../utils/convertFormatToken'

export default {
  name: 'DateElement',
  directives: {
    $model,
  },
  mixins: [BaseElement, BaseValidation, CanBeDisabled],
  data() {
    return {
      /**
      * The flatpickr component.
      * 
      * @type {object} 
      * @default null
      */
      datepicker$: null,
    }
  },
  computed: {

    /**
     * Helper property used for tracking the field's value. It always contains the current and previous Date object or objects.
     * 
     * @type {any}
     */
    model: {
      // need to be a setter/getter variable
      // because in some cases it must behave
      // in a custom way, but it needs a store
      // which is currentValue
      get() {
        return this.currentValue
      },
      set(value) {
        this.previousValue = _.clone(this.currentValue)

        this.currentValue = value
      }
    },

    // /**
    //   * The value of the element.
    //   * 
    //   * @type {any}
    //   */
    value: {
      get() {
        if (!this.model) {
          return this.model
        }

        if (this.valueFormat === false) {
          return this.model
        }

        return moment(this.model).format(convertFormatToken(this.valueFormat, 'flatpickr', 'moment'))
      },
      set(value) {
        if (value === this.default) {
          this.model = _.clone(this.default)
          return
        }

        this.model = value instanceof Date ? value : moment(value, convertFormatToken(this.loadFormat, 'flatpickr', 'moment')).toDate()
      }
    },

    displayFormat: {
      get() {
        return this.schema.displayFormat || this.__('laraform.elements.date.displayFormat')
      },
      set(value) {
        this.$set(this.schema, 'displayFormat', value)
      }
    },

    valueFormat: {
      get() {
        return this.schema.valueFormat !== undefined ? this.schema.valueFormat : 'Y-m-d'
      },
      set(value) {
        this.$set(this.schema, 'valueFormat', value)
      }
    },

    loadFormat: {
      get() {
        return this.schema.loadFormat || 'Y-m-d'
      },
      set(value) {
        this.$set(this.schema, 'loadFormat', value)
      }
    },
  },
  methods: {
    handleInput(value) {
      this.model = value
    }
  }
}