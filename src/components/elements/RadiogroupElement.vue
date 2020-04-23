<script>
  import BaseElement from './../../mixins/BaseElement'
  import BaseValidation from './../../mixins/BaseValidation'
  import utils from './../../utils'

  export default {
    name: 'RadiogroupElement',
    mixins: [BaseElement, BaseValidation],
    props: {
      /**
       * The element schema containing it's options.
       * 
       * @default {
       *  "items": { "type": "object", "description": "List of checkbox options." },
       *  "disable": { "type": "array", "description": "List of option keys to be disabled." },
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
         * List of radio buttons.
         * 
         * @type {object} 
         * @default {}
         */
        items: {},

        /**
         * List of option keys to be disabled.
         * 
         * @type {array} 
         * @default []
         */
        disables: [],

        /**
         * Whether the field is *disabled*.
         * 
         * @type {boolean} 
         * @default false
         */
        disabled: false,

        /**
         * Value of element when the form is initially loaded or reseted.
         * 
         * @type {array} 
         * @default null
         */
        defaultValue: null,

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

          radio: null,
        },
      }
    },
    methods: {
      /**
       * Disables a radio or more radio buttons.
       *
       * @public
       * @param {arr|str|num} options key of one or more radio buttons to disable.
       * @returns {void}
       */
      disable(options) {
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
       * Helper method to create an ID for a radio button.
       *
       * @private
       * @param {str|num} key key of the radio.
       * @returns {void}
       */
      radioId(key) {
        return this.id + '-' + key
      },

      /**
       * Helper method which determines if a radio button is disabled.
       *
       * @private
       * @param {str|num} key key of the radio.
       * @returns {void}
       */
      isDisabled(key) {
        if (this.disabled || this.disables.indexOf(utils.normalize(key)) !== -1) {
          return true
        }

        return false
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
      this.$_copy([
        'items', {disable: 'disables'}
      ])

      if (this.slots.radio === null) {
        this.slots.radio = this.theme.components.RadiogroupSlotRadio
      }
    },
  }
</script>