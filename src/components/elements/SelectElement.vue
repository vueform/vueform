<script>
  import BaseElement from './../../mixins/BaseElement'
  import BaseValidation from './../../mixins/BaseValidation'
  import CanBeDisabled from './../../mixins/CanBeDisabled'
  import utils from './../../utils'

  export default {
    name: 'SelectElement',
    mixins: [BaseElement, BaseValidation, CanBeDisabled],
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
       *  "default": { "type": "string", "description": "Value of element when the form is initially loaded or reseted." },
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
    data() {
      return {

        /**
        * List of select options.
        * 
        * @type {obj|arr} 
        * @default null
        */
        items: null,

        /**
        * Determines whether the native select should be used by default.
        * 
        * @type {boolean} 
        * @default true
        */
        native: true,

        /**
        * When item values are objects this object element will be used to track search.
        * 
        * @type {string} 
        * @default 'label'
        */
        trackBy: 'label',

        /**
        * Determines whether the select options are searchable.
        * 
        * @type {boolean} 
        * @default false
        */
        search: false,

        /**
        * Maximum number of search options.
        * 
        * @type {number}
        * @default 1000
        */
        limit: 1000,

        /**
        * Value of element when the form is initially loaded or reseted.
        * 
        * @type {str|num} 
        * @default null
        */
        defaultValue: null,

        /**
        * The placeholder of the element.
        * 
        * @type {string} 
        * @default null
        */
        placeholder: null,

        /**
        * The floating label of the element.
        * 
        * @type {string} 
        * @default null
        */
        floating: null,

        /**
         * Additional [options](https://vue-multiselect.js.org/#sub-props) for the select.
         * 
         * @type {object}
         * @default {}
         */
        options: {
          showLabels: false,
        },

        /**
        * The select element / component.
        * 
        * @type {object} 
        * @default null
        */
        select$: null,

        /**
        * Determines whether the element is going through async process to load options.
        * 
        * @type {boolean} 
        * @default false
        */
        loading: false,

        /**
        * Determines whether multiple options can be selected.
        * 
        * @type {boolean} 
        * @default null
        * @ignore
        */
        multiple: null,

        /**
        * Determines whether the select should behave as tags.
        * 
        * @type {boolean} 
        * @default null
        * @ignore
        */
        taggable: null,

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
         *  "singleLabel": {
         *    "description": "Renders the selected value in the input field.",
         *    "attributes": {
         *      "el$": {"type": "object", "description": "The element component."}
         *    }
         *  },
         *  "noOptions": {
         *    "description": "Renders the select options list is empty.",
         *    "attributes": {
         *      "el$": {"type": "object", "description": "The element component."}
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
          singleLabel: null,
          noOptions: null,
        },
        
        /**
         * Helper property used to store available events for the element.
         * 
         * @private
         * @type {array}
         * @default []
         */
        events: [
          'change', 'select', 'remove', 'searchChange',
          'open', 'close', 'tag',
        ],
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
          // if (!this.$_hasOption(value) && value !== null) {
          //   return
          // }

          this.memory = value
        }
      },

      /**
       * Helper property used for tracking the field's value.
       * 
       * @type {str|num}
       * @ignore
       */
      model: {
        get() {
          return this.isNative ? this.value : this.$_getOption(this.value)
        },
        set(value) {
          this.value = this.isNative || value === null ? value : value['value']
        }
      },

      /**
       * List of select options converted to an array of objects.
       * 
       * @type {array}
       */
      selectOptions() {
        if (_.isArray(this.items)) {
          return this.items
        }

        var options = []

        _.each(this.items, (value, key) => {
          var option = {
            value: utils.normalize(key),
          }

          if (_.isObject(value)) {
            option = Object.assign({}, option, value)

            if (option.label === undefined) {
              option.label = option[this.trackBy]
            }
          }
          else {
            option.label = value
          }

          options.push(option)
        })      

        return options
      },

      /**
       * Retrieves the selected option's label.
       * 
       * @type {string}
       */
      textValue() {
        var value = this.$_getOption(this.value)

        if (!value) {
          return ''
        }

        return value[this.trackBy]
      },

      /**
       * Retrieves the selected option.
       * 
       * @type {object}
       */
      selectedOption() {
        var value = this.$_getOption(this.value)

        if (!value) {
          return {}
        }

        return value
      },

      /**
       * Determines if the native select is used.
       * 
       * @type {string}
       */
      isNative() {
        return this.native && !this.search
      },

      /**
       * Text to be rendered when user can add a new tag.
       * 
       * @type {string}
       * @ignore
       */
      tagPlaceholder() {
        return this.taggable && this.create
          ? this.locale.elements.createLabel : ''
      }
    },
    methods: {

      /**
       * Validates the element.
       * 
       * @public
       * @returns {void}
       */
      validate() {
        if (!this.schema.rules) {
          return
        }

        _.each(this.Validators, (Validator) => {
          Validator.validate(this.value)
        })

          this.state.validated = true
      },

      /**
       * Triggered when the user changes the value of the select.
       *
       * @private
       * @param {string} value value of the select. 
       * @event change
       */
      handleInput(value) {
        this.fire('input', {value})

        this.handleChange()
      },

      /**
       * Triggered when the user selects an option when using not native element.
       *
       * @public
       * @event select
       * @param {object} selectedOption the selected option.
       */
      handleSelect(selectedOption) {
        this.fire('select', {selectedOption})
      },

      /**
       * Triggered when the user removes a selected option.
       *
       * @public
       * @event remove
       * @param {object} removedOption the removed option.
       */
      handleRemove(removedOption) {
        this.fire('remove', {removedOption})
      },

      /**
       * Triggered when the user changes the search criteria.
       *
       * @public
       * @event searchChange
       * @param {string} searchQuery the current search query.
       */
      handleSearchChange(searchQuery) {
        this.fire('searchChange', {searchQuery})
      },

      /**
       * Triggered when the option list is opened.
       *
       * @public
       * @event open
       */
      handleOpen() {
        this.fire('open')
      },

      /**
       * Triggered when the option list is closed.
       *
       * @public
       * @event close
       * @param {string} value value of the select.
       */
      handleClose(value) {
        this.fire('close', {value})
      },

      /**
       * Triggered when the user creates a tag.
       *
       * @private
       * @event tag
       * @param {string} searchQuery the current search query.
       */
      handleTag(searchQuery) {
        // unimplemented
      },

      /**
       * Helper method used to retrieve an option by its value.
       * 
       * @private
       * @param {str|num} value value to look for.
       * @returns {object}
       */
      $_getOption(value) {
        return _.find(this.selectOptions, { value: utils.normalize(value) })
      },

      /**
       * Helper method used to determine if the select has option with a certain value.
       * 
       * @private
       * @param {str|num} value value to look for.
       * @returns {boolean}
       */
      $_hasOption(value) {
        return _.some(this.selectOptions, {value: utils.normalize(value)})
      },
    },
    created() {
      if (!this.schema.items) {
        throw new Error('Property `items` must be defined. To init with empty items, use {} or [].')
      }

      if (this.slots.option === null) {
        this.slots.option = this.theme.components.MultiselectSlotOption
      }

      if (this.slots.noResult === null) {
        this.slots.noResult = this.theme.components.MultiselectSlotNoResult
      }

      if (this.slots.noOptions === null) {
        this.slots.noOptions = this.theme.components.MultiselectSlotNoOptions
      }
      
      this.$_copy([
        'items', 'native', 'search', 'limit',
        'trackBy',
      ])

      this.$_merge([
        'options',
      ])
    },
    mounted() {
      this.select$ = this.$refs.select$ || null
    }
  }
</script>