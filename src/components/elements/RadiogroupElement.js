import BaseElement from './../../mixins/BaseElement'
import BaseValidation from './../../mixins/BaseValidation'
import useRadiogroup from './../../composables/elements/useRadiogroup'

export default {
  name: 'RadiogroupElement',
  mixins: [BaseElement, BaseValidation],
  init: useRadiogroup,
  props: {
    /**
     * The element schema containing it's options.
     * 
     * @default {
     *  "items": { "type": "object", "description": "List of checkbox options." },
     *  "disables": { "type": "array", "description": "List of option keys to be disabled." },
     *  "disabled": { "type": "boolean", "description": "Whether the field is *disabled*." },
     *  "default": { "type": "str|num", "description": "Value of element when the form is initially loaded or reseted." }
     * }
     */
    schema: {
      type: Object,
      required: true
    },
  },
  data() {
    return {

      /**
       * Element slots.
       * 
       * @type {object}
       * @default {
       *  "radio": {
       *    "description": "Contains the radio field.",
       *    "attributes": {
       *      "el$": {"type": "object", "description": "The element component."},
       *      "item": {"type": "object", "description": "The radio item's object."},
       *      "value": {"type": "str|num|bool", "description": "The radio item's value."}
       *    }
       *  }
       * }
       */
      slots: {
        info: null,
        label: null,
        before: null,
        between: null,
        description: null,
        error: null,
        after: null,
        radio: this.theme.components.RadiogroupSlotRadio,
      },
    }
  },
  computed: {

    /**
     * List of radio options.
     * 
     * @type {object} 
     * @default {}
     */
    items: {
      get() {
        return this.schema.items || {}
      },
      set(value) {
        this.$set(this.schema, 'items', value)
      }
    },

    /**
     * List of option keys to be disabled.
     * 
     * @type {array} 
     * @default []
     */
    disables: {
      get() {
        return this.schema.disables || []
      },
      set(value) {
        this.$set(this.schema, 'disables', value)
      }
    },

    /**
     * Whether all the radios are *disabled*.
     * 
     * @type {boolean} 
     * @default false
     */
    disabled: {
      get() {
        return this.schema.disabled !== undefined ? this.schema.disabled : false
      },
      set(value) {
        this.$set(this.schema, 'disabled', value)
      },
    },
  },
  methods: {

    /**
     * Disabled all radios.
     *
     * @public
     * @returns {void}
     */
    disableAll() {
      this.disabled = true
    },

    /**
     * Enables all radios.
     *
     * @public
     * @returns {void}
     */
    enableAll() {
      this.disabled = false
    },

    /**
     * Disables a radio or more radio buttons.
     *
     * @public
     * @param {arr|str|num} options key of one or more radio buttons to disable.
     * @returns {void}
     */
    disable(options) {
      if (this.schema.disables === undefined) {
        this.$set(this.schema, 'disables', [])
      } 

      this.$_addOptionsTo(this.disables, options)
    },
    
    /**
     * Enables a radio or more radio buttons.
     *
     * @public
     * @param {arr|str|num} options key of one or more radio buttons to enable.
     * @returns {void}
     */
    enable(options) {
      this.$_removeOptionsFrom(this.disables, options)
    },

    /**
     * Helper method to change selected or disabled items.
     *
     * @private
     * @param {array} to array which needs to be altered.
     * @param {arr|str|num} options key of one or more radio buttons to alter.
     * @returns {void}
     */
    $_addOptionsTo(to, options) {
      if (!_.isArray(options)) {
        options = [options]
      }

      _.each(options, (option) => {
        if (to.indexOf(option) === -1) {
          to.push(option)
        }
      })
    },

    /**
     * Helper method to change checked or disabled items.
     *
     * @private
     * @param {array} from array which needs to be altered.
     * @param {arr|str|num} options key of one or more radio buttons to alter.
     * @returns {void}
     */
    $_removeOptionsFrom(from, options) {
      if (!_.isArray(options)) {
        options = [options]
      }

      _.each(options, (option) => {
        var index = from.indexOf(option)

        if (index !== -1) {
          from.splice(index, 1)
        }
      })
    },
  },
  created() {
    if (this.schema.slots && this.schema.slots.radio) {
      this.$set(this.slots, 'radio', this.schema.slots.radio)
    }
  }
}