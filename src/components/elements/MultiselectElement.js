import SelectElement from './SelectElement'
import normalize from './../../utils/normalize'

export default {
  name: 'MultiselectElement',
  mixins: [SelectElement],
  props: {
    /**
     * The element schema containing it's options.
     * 
     * @default {
     *  "items": { "type": "obj|arr", "description": "List of select options." },
     *  "native": { "type": "boolean", "description": "Determines whether the native select should be used by default." },
     *  "search": { "type": "boolean", "description": "Determines whether the select options should be searchable." },
     *  "trackBy": { "type": "string", "description": "When item values are objects this object element will be used to track search." },
     *  "limit": { "type": "number", "description": "Maximum number of search options." },
     *  "default": { "type": "array", "description": "Value of element when the form is initially loaded or reseted." },
     *  "placeholder": { "type": "string", "description": "The placeholder of the element." },
     *  "floating": { "type": "string", "description": "The floating label of the element." },
     *  "disabled": { "type": "boolean", "description": "Whether the field is *disabled*." },
     *  "options": { "type": "object", "description": "Additional [options](https://vue-multiselect.js.org/#sub-props) for the select." }
     * }
     */
    schema: {
      type: Object,
      required: true
    },
  },
  data () {
    return {

      /**
       * Element slots.
       * 
       * @type {object}
       * @default {
       *  "option": {
       *    "description": "Contains the select option template.",
       *    "attributes": {
       *      "el$": {"type": "object", "description": "The element component."},
       *      "option": {"type": "object", "description": "Select option."},
       *      "search": {"type": "string", "description": "Current value of search."}
       *    }
       *  },
       *  "beforeList": {
       *    "description": "Component to be rendered before the option list.",
       *    "attributes": {
       *      "el$": {"type": "object", "description": "The element component."}
       *    }
       *  },
       *  "afterList": {
       *    "description": "Component to be rendered after the option list.",
       *    "attributes": {
       *      "el$": {"type": "object", "description": "The element component."}
       *    }
       *  },
       *  "noResult": {
       *    "description": "Component to be rendered when there are no search results.",
       *    "attributes": {
       *      "el$": {"type": "object", "description": "The element component."}
       *    }
       *  },
       *  "noOptions": {
       *    "description": "Renders the select options list is empty.",
       *    "attributes": {
       *      "el$": {"type": "object", "description": "The element component."}
       *    }
       *  },
       *  "selection": {
       *    "description": "Renders a label for selected values in the input field.",
       *    "attributes": {
       *      "el$": {"type": "object", "description": "The element component."},
       *      "values": {"type": "object", "description": "Selected options."},
       *      "search": {"type": "object", "description": "The current value of search."}
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

        option: this.theme.components.MultiselectSlotOption,
        beforeList: null,
        afterList: null,
        noResult: this.theme.components.MultiselectSlotNoResult,
        noOptions: this.theme.components.MultiselectSlotNoOptions,
        selection: this.theme.components.MultiselectSlotSelection,
      },

      /**
       * Slots that should not be added to $slots object once found in schema.
       * 
       * @private
       * @type {array}
       * @default []
       */
      skipSlots: [
        'option', 'beforeList', 'afterList', 'noResult',
        'noOptions', 'selection',
      ],
    }
  },
  computed: {
    /**
     * Helper property used for tracking the field's value.
     * 
     * @type {array}
     * @ignore
     */
    model: {
      get() {
        var values = this.value === null ? [] : this.value

        if (!this.isNative) {
          values = []

          _.each(this.value, (option) => {
            values.push(this.$_getOption(option))
          })
        }

        return values
      },
      set(value) {
        var values = value

        if (!this.isNative) {
          values = []

          _.each(value, (option) => {
            values.push(option.value)
          })
        }

        this.value = values
      }
    },
    
    /**
    * Default options for vue-multiselect.
    * 
    * @type {object} 
    * @default {}
    * @ignore
    */
    defaultOptions() {
      return {
        showLabels: false,
        searchable: this.search,
        label: 'label',
        trackBy: this.trackBy,
        loading: this.loading,
        optionsLimit: this.limit,
        multiple: true,
        clearOnSelect: true,
        closeOnSelect: false,
        preserveSearch: true,
        showLabels: true,
        selectLabel: '',
        deselectLabel: '✓',
        selectedLabel: '✓',
      }
    },

    /**
     * Whether the element has no value filled in.
     * 
     * @type {boolean}
     */
    empty() {
      return this.value === null || this.value.length == 0
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
    * Determines whether multiple options can be selected.
    * 
    * @type {boolean} 
    * @default null
    * @ignore
    */
    multiple() {
      return true
    },

    /**
     * Retrieves the selected options' label.
     * 
     * @type {array}
     * @ignore
     */
    textValue() { },

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
     * Selects an option.
     *
     * @public
     * @param {str|num} option the key of option to select.
     * @returns {void}
     */
    select(option) {
      if (this.$_inValue(normalize(option))) {
        return
      }
      
      this.value.push(option)
    },

    /**
     * Deselects an option.
     *
     * @public
     * @param {str|num} option the key of option to deselect.
     * @returns {void}
     */
    deselect(option) {
      var index = this.value.indexOf(option)

      if (index === -1) {
        return
      }

      this.value.splice(index, 1)
    },

    /**
     * Determines if an option is already among the selected options.
     *
     * @private
     * @returns {boolean}
     */
    $_inValue(option) {
      return this.value.indexOf(option) !== -1
    },
  },
  created() {
    this.previousValue = []
  },
}