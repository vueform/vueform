<script>
  import SelectElement from './SelectElement.vue'
  import utils from './../../utils'

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
        * Determines whether the select options are searchable.
        * 
        * @type {boolean} 
        * @default false
        */
        search: false,

        /**
        * Value of element when the form is initially loaded or reseted.
        * 
        * @type {array} 
        * @default null
        */
        defaultValue: [],

        /**
         * Additional [options](https://vue-multiselect.js.org/#sub-props) for the select.
         * 
         * @type {object}
         * @default {}
         */
        options: {
          clearOnSelect: true,
          closeOnSelect: false,
          preserveSearch: true,
          showLabels: true,
          selectLabel: '',
          deselectLabel: '✓',
          selectedLabel: '✓',
        },

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

          option: null,
          beforeList: null,
          afterList: null,
          noResult: null,
          noOptions: null,
          selection: null,
        },

        /**
        * Determines whether multiple options can be selected.
        * 
        * @type {boolean} 
        * @default null
        * @ignore
        */
        multiple: true,
      }
    },
    computed: {
      /**
       * The value of the element.
       * 
       * @type {any}
       */
      value: {
        get() {
          return this.memory
        },
        set(value) {
          if (!_.isArray(value)) {
            return
          }

          var values = []

          _.each(value, (option) => {
            // Maybe allow inavailable options to select
            // in case options are loaded later
            // if (!this.$_hasOption(option)) {
            //   return
            // }

            values.push(option)
          })

          this.memory = values
        }
      },

      /**
       * Helper property used for tracking the field's value.
       * 
       * @type {array}
       * @ignore
       */
      model: {
        get() {
          var values = this.value

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
       * Retrieves the selected options' label.
       * 
       * @type {array}
       * @ignore
       */
      textValue() { },
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
        // if (!this.$_hasOption(utils.normalize(option)) || this.$_inValue(utils.normalize(option))) {
        if (this.$_inValue(utils.normalize(option))) {
          return
        }
        
        this.value.push(option)
      },

      /**
       * Unselects an option.
       *
       * @public
       * @param {str|num} option the key of option to unselect.
       * @returns {void}
       */
      unselect(option) {
        var index = this.value.indexOf(option)

        if (index === -1) {
          return
        }

        this.value.splice(index, 1)
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
      if (!this.taggable && this.slots.selection === null) {
        this.slots.selection = this.theme.components.MultiselectSlotSelection
      }
    }
  }
</script>