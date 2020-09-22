import BaseElement from './../../mixins/BaseElement'
import BaseValidation from './../../mixins/BaseValidation'
import CanBeDisabled from './../../mixins/CanBeDisabled'
import normalize from './../../utils/normalize'

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
      * Determines whether the element is going through async process to load options.
      * 
      * @type {boolean} 
      * @default false
      */
      loading: false,

      /**
      * The select element / component.
      * 
      * @type {object} 
      * @default null
      */
      select$: null,

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
       *  "singleLabel": {
       *    "description": "Renders the selected value in the input field.",
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
        singleLabel: null,
        noResult: this.theme.components.MultiselectSlotNoResult,
        noOptions: this.theme.components.MultiselectSlotNoOptions,
      },

      /**
       * Slots that should not be added to $slots object once found in schema.
       * 
       * @private
       * @type {array}
       * @default []
       */
      skipSlots: [
        'option', 'beforeList', 'afterList', 'singleLabel',
        'noResult', 'noOptions',
      ],
      
      /**
       * Helper property used to store available events for the element.
       * 
       * @private
       * @type {array}
       * @default []
       */
      events: [
        'change', 'select', 'deselect', 'searchChange',
        'open', 'close',
      ],
    }
  },
  computed: {

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
    * List of select options.
    * 
    * @type {obj|arr} 
    * @default null
    */
    items: {
      get() {
        return this.schema.items !== undefined ? this.schema.items : {}
      },
      set(value) {
        this.$set(this.schema, 'items', value)
      }
    },

    /**
    * Determines whether the native select should be used by default.
    * 
    * @type {boolean} 
    * @default true
    */
    native: {
      get() {
        return this.schema.native !== undefined ? this.schema.native : true
      },
      set(value) {
        this.$set(this.schema, 'native', value)
      }
    },

    /**
    * When item values are objects this object element will be used to track search.
    * 
    * @type {string} 
    * @default 'label'
    */
    trackBy: {
      get() {
        return this.schema.trackBy !== undefined ? this.schema.trackBy : 'label'
      },
      set(value) {
        this.$set(this.schema, 'trackBy', value)
      }
    },

    /**
    * Determines whether the select options are searchable.
    * 
    * @type {boolean} 
    * @default false
    */
    search: {
      get() {
        return this.schema.search !== undefined ? this.schema.search : false
      },
      set(value) {
        this.$set(this.schema, 'search', value)
      }
    },

    /**
    * Maximum number of search options.
    * 
    * @type {number}
    * @default 1000
    */
    limit: {
      get() {
        return this.schema.limit !== undefined ? this.schema.limit : 1000
      },
      set(value) {
        this.$set(this.schema, 'limit', value)
      }
    },

    /**
    * The placeholder of the element.
    * 
    * @type {string} 
    * @default null
    */
    placeholder: {
      get() {
        return this.schema.placeholder !== undefined ? this.schema.placeholder : null
      },
      set(value) {
        this.$set(this.schema, 'placeholder', value)
      }
    },

    /**
    * The floating label of the element.
    * 
    * @type {string} 
    * @default null
    */
    floating: {
      get() {
        return this.schema.floating !== undefined ? this.schema.floating : null
      },
      set(value) {
        this.$set(this.schema, 'floating', value)
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
        multiple: false,
      }
    },

    /**
     * Additional [options](https://vue-multiselect.js.org/#sub-props) for the select.
     * 
     * @type {object}
     * @default {}
     */
    options: {
      get() {
        return Object.assign({}, this.defaultOptions, this.schema.options || {})
      },
      set(value) {
        this.$set(this.schema, 'options', value)
      }
    },

    /**
     * List of select options converted to an array of objects.
     * 
     * @type {array}
     */
    selectOptions() {
      let options = []

      _.each(this.items, (item, key) => {
        let value = key
        let label = item

        if (_.isPlainObject(item)) {
          if (item.value !== undefined) {
            value = item.value
          }

          if (item.label !== undefined) {
            label = item.label
          } else if (item[this.trackBy] !== undefined) {
            label = item[this.trackBy]
          } else {
            throw new Error('When providing an object value for SelectElement either `label` key or a key equal to `trackBy` must be present.')
          }
        }

        options.push(Object.assign({}, _.isPlainObject(item) ? item : {}, {
          value: value,
          label: label,
        }))
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

      if (value === undefined) {
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
  },
  methods: {

    /**
     * Triggered when the user selects an option using non-native element.
     *
     * @public
     * @event select
     * @param {object} option the selected option object.
     */
    handleSelect(option) {
      this.fire('select', option)
    },

    /**
     * Triggered when the user deselects an option using non-native element. Does not trigger when an *other* element gets selected.
     *
     * @public
     * @event remove
     * @param {object} option the deselected option object.
     */
    handleDeselect(option) {
      this.fire('deselect', option)
    },

    /**
     * Triggered when the user changes the search criteria using non-native element.
     *
     * @public
     * @event searchChange
     * @param {string} searchQuery the current search query.
     */
    handleSearchChange(searchQuery) {
      this.fire('searchChange', searchQuery)
    },

    /**
     * Triggered when the option list is opened using non-native element.
     *
     * @public
     * @event open
     */
    handleOpen() {
      this.fire('open')
    },

    /**
     * Triggered when the option list is closed using non-native element.
     *
     * @public
     * @event close
     */
    handleClose() {
      this.fire('close')
    },

    /**
     * Triggered when the user creates a tag using non-native element.
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
      return _.find(this.selectOptions, { value: normalize(value) })
    },

    $_setSlots() {
      _.each(this.skipSlots, (slot) => {
        if (this.schema.slots && this.schema.slots[slot] !== undefined) {
          this.$set(this.slots, slot, this.schema.slots[slot])
        }
      })
    },
  },
  created() {
    this.$_setSlots()
  },
  mounted() {
    this.select$ = this.$refs.select$ || null
  }
}