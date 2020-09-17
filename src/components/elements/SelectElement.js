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

        option: this.theme.components.MultiselectSlotOption,
        beforeList: null,
        afterList: null,
        noResult: this.theme.components.MultiselectSlotNoResult,
        singleLabel: null,
        noOptions: this.theme.components.MultiselectSlotNoOptions,
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
    * Determines whether multiple options can be selected.
    * 
    * @type {boolean} 
    * @default null
    * @ignore
    */
    multiple() {
      return false
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

    // /**
    //  * Text to be rendered when user can add a new tag.
    //  * 
    //  * @type {string}
    //  * @ignore
    //  */
    // tagPlaceholder() {
    //   return this.taggable && this.create
    //     ? this.locale.elements.createLabel : ''
    // }

    // /**
    // * Determines whether multiple options can be selected.
    // * 
    // * @type {boolean} 
    // * @default false
    // * @ignore
    // */
    // multiple: {
    //   get() {
    //     return this.schema.multiple !== undefined ? this.schema.multiple : false
    //   },
    //   set(value) {
    //     this.$set(this.schema, 'multiple', value)
    //   }
    // },

    // /**
    // * Determines whether the select should behave as tags.
    // * 
    // * @type {boolean} 
    // * @default false
    // * @ignore
    // */
    // taggable: {
    //   get() {
    //     return this.schema.taggable !== undefined ? this.schema.taggable : false
    //   },
    //   set(value) {
    //     this.$set(this.schema, 'taggable', value)
    //   }
    // },
  },
  methods: {

    /**
     * Triggered when the user selects an option, using non-native element.
     *
     * @public
     * @event select
     * @param {object} option the selected option.
     */
    handleSelect(option) {
      this.fire('select', option)
    },

    /**
     * Triggered when the user removes a selected option, using non-native element.
     *
     * @public
     * @event remove
     * @param {object} option the removed option.
     */
    handleRemove(option) {
      this.fire('remove', option)
    },

    /**
     * Triggered when the user changes the search criteria, using non-native element.
     *
     * @public
     * @event searchChange
     * @param {string} searchQuery the current search query.
     */
    handleSearchChange(searchQuery) {
      this.fire('searchChange', searchQuery)
    },

    /**
     * Triggered when the option list is opened, using non-native element.
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
     */
    handleClose() {
      this.fire('close')
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
      return _.find(this.selectOptions, { value: normalize(value) })
    },

    /**
     * Helper method used to determine if the select has option with a certain value.
     * 
     * @private
     * @param {str|num} value value to look for.
     * @returns {boolean}
     */
    $_hasOption(value) {
      return _.some(this.selectOptions, {value: normalize(value)})
    },
  },
  created() {
    if (this.schema.slots && this.schema.slots.option === null) {
      this.$set(this.slots, 'option', this.schema.slots.option)
    }

    if (this.schema.slots && this.schema.slots.noResult === null) {
      this.$set(this.slots, 'noResult', this.schema.slots.noResult)
    }

    if (this.schema.slots && this.schema.slots.noOptions === null) {
      this.$set(this.slots, 'noOptions', this.schema.slots.noOptions)
    }
  },
  mounted() {
    this.select$ = this.$refs.select$ || null
  }
}