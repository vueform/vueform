import BaseElement from './../../mixins/BaseElement'
import BaseValidation from './../../mixins/BaseValidation'
import useCheckboxgroup from './../../composables/elements/useCheckboxgroup'

export default {
  name: 'CheckboxgroupElement',
  mixins: [BaseElement, BaseValidation],
  init: useCheckboxgroup,
  props: {
    /**
     * The element schema containing it's options.
     * 
     * @default {
     *  "items": { "type": "object", "description": "List of checkbox options." },
     *  "disables": { "type": "array", "description": "List of option keys to be disabled." },
     *  "disabled": { "type": "boolean", "description": "Whether the field is *disabled*." },
     *  "default": { "type": "array", "description": "Value of element when the form is initially loaded or reseted." }
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
       *  "checkbox": {
       *    "description": "Contains the checkbox field.",
       *    "attributes": {
       *      "el$": {"type": "object", "description": "The element component."},
       *      "item": {"type": "object", "description": "The checkbox item's object."},
       *      "value": {"type": "str|num|bool", "description": "The checkbox item's value."}
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
        checkbox: this.theme.components.CheckboxgroupSlotCheckbox,
      },
    }
  },
  computed: {

    /**
     * List of checkbox options.
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
     * Whether all the checkboxes are *disabled*.
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

    /**
     * Helper property used to determine the element's 'null' value.
     * 
     * @type {array}
     * @ignore
     */
    null() {
      return []
    },

    /**
     * Determines if the element's value is an array.
     *
     * @private
     * @returns {boolean}
     */
    isArrayType() {
      return true
    },
  },
  methods: {

    /**
     * Checks all checkboxes.
     *
     * @public
     * @returns {void}
     */
    checkAll() {
      this.check(_.keys(this.items))
    },

    /**
     * Checks all checkboxes.
     *
     * @public
     * @returns {void}
     */
    uncheckAll() {
      this.uncheck(_.keys(this.items))
    },

    /**
     * Disabled all checkboxes.
     *
     * @public
     * @returns {void}
     */
    disableAll() {
      this.disabled = true
    },

    /**
     * Enables all checkboxes.
     *
     * @public
     * @returns {void}
     */
    enableAll() {
      this.disabled = false
    },

    /**
     * Checks a checkbox or checkboxes.
     *
     * @public
     * @param {arr|str|num} options key of one or more checkboxes to check.
     * @returns {void}
     */
    check(options) {
      this.$_addOptionsTo(this.value, options)
    },

    /**
     * Unchecks a checkbox or checkboxes.
     *
     * @public
     * @param {arr|str|num} options key of one or more checkboxes to uncheck.
     * @returns {void}
     */
    uncheck(options) {
      this.$_removeOptionsFrom(this.value, options)
    },

    /**
     * Disables a checkbox or checkboxes.
     *
     * @public
     * @param {arr|str|num} options key of one or more checkboxes to disable.
     * @returns {void}
     */
    disable(options) {
      if (this.schema.disables === undefined) {
        this.$set(this.schema, 'disables', [])
      } 

      this.$_addOptionsTo(this.disables, options)
    },

    /**
     * Enables a checkbox or checkboxes.
     *
     * @public
     * @param {arr|str|num} options key of one or more checkboxes to enable.
     * @returns {void}
     */
    enable(options) {
      this.$_removeOptionsFrom(this.disables, options)
    },

    /**
     * Helper method to change checked or disabled items.
     *
     * @public
     * @param {array} to array which needs to be altered.
     * @param {arr|str|num} options key of one or more checkboxes to alter.
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
     * @param {arr|str|num} options key of one or more checkboxes to alter.
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
    if (this.schema.slots && this.schema.slots.checkbox) {
      this.$set(this.slots, 'checkbox', this.schema.slots.checkbox)
    }
  }
}