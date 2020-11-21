import MultiselectElement from './MultiselectElement'
import normalize from './../../utils/normalize'
import useTags from './../../composables/elements/useTags'

export default {
  name: 'TagsElement',
  mixins: [MultiselectElement],
  init: useTags,
  props: {
    /**
     * The element schema containing it's options.
     * 
     * @default {
     *  "items": { "type": "obj|arr", "description": "List of select options." },
     *  "search": { "type": "boolean", "description": "Determines whether the select options should be searchable." },
     *  "trackBy": { "type": "string", "description": "When item values are objects this object element will be used to track search." },
     *  "limit": { "type": "number", "description": "Maximum number of search options." },
     *  "create": { "type": "boolean", "description": "Whether new tags are allowed to be created." },
     *  "tagPlaceholder": { "type": "string", "description": "Text to be rendered when the user tries to add a new tag if [`create`](#option-create) is `true`. Default: locale.laraform.elements.createLabel" },
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
       *  "tag": {
       *    "description": "Contains a selected tag.",
       *    "attributes": {
       *      "el$": {"type": "object", "description": "The element component."},
       *      "option": {"type": "object", "description": "Selected option."},
       *      "search": {"type": "object", "description": "The current value of search."},
       *      "remove": {"type": "function", "description": "Removes the tag. Must receive `option` as the first parameter."}
       *    }
       *  }
        * "selection": {
        *    "description": "Renders a label for selected values in the input field.",
        *    "attributes": {
        *      "el$": {"type": "object", "description": "The element component."},
        *      "values": {"type": "object", "description": "Selected options."},
        *      "search": {"type": "object", "description": "The current value of search."}
        *      "remove": {"type": "function", "description": "Removes a tag. Must receive `option` as the first parameter."}
        *    }
        *  }
        * }
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
        
        tag: this.theme.components.MultiselectSlotTag,
        selection: this.theme.components.MultiselectSlotTagsSelection,
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
        'noOptions', 'tag', 'selection',
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
        'open', 'close', 'tag',
      ],
    }
  },
  computed: {

    /**
     * Whether new tags are allowed to be created.
     * 
     * @type {boolean}
     * @default false
     */
    create: {
      get() {
        return this.schema.create !== undefined ? this.schema.create : false
      },
      set(value) {
        this.$set(this.schema, 'create', value)
      }
    },

    /**
    * Determines whether the native select should be used by default.
    * 
    * @type {boolean} 
    * @default true
    * @ignore
    */
    native() {
      return false
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
        taggable: true,
        tagPlaceholder: this.tagPlaceholder,
        clearOnSelect: true,
        hideSelected: true,
        closeOnSelect: false,
      }
    },

    /**
     * Text to be rendered when user can add a new tag.
     * 
     * @type {string}
     * @ignore
     */
    tagPlaceholder: {
      get() {
        if (!this.create) {
          return ''
        }

        return this.schema.tagPlaceholder !== undefined
          ? this.schema.tagPlaceholder
          : this.__('laraform.elements.tags.createLabel')
      },
      set(value) {
        this.$set(this.schema, 'tagPlaceholder', value)
      }
    },
  },
  methods: {
    addItem(value, label) {
      let item = {
        value: normalize(value),
        label: label,
        [this.trackBy]: label,
      }

      if (_.isPlainObject(this.items)) {
        this.$set(this.items, normalize(value), item)
      }
      else {
        this.items.push(item)
      }
    },
    removeItem(value) {
      if (_.isPlainObject(this.items)) {
        this.$delete(this.items, _.keys(this.items)[_.findIndex(this.selectOptions, { value: value })])
      }
      else {
        this.items.splice(_.findIndex(this.selectOptions, { value: value }), 1)
      }
    },

    /**
     * Triggered when the user creates a tag. Only gets fired if [`create`](#option-create) is `true`.
     *
     * @public
     * @event tag
     * @param {string} searchQuery the current search query.
     */
    handleTag(searchQuery) {
      if (this.create) {
        this.fire('tag', searchQuery)
      }
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
  mounted() {
    
    // Next tick is required because user
    // may set `tag` event at lifecycle hook
    this.$nextTick(() => {
      if (!this.listeners.tag && this.create) {
        this.on('tag', (searchQuery) => {
          // if the typed value already exists
          // a key of an element we should not 
          // add the new tag
          if (this.$_hasOption(searchQuery)) {
            return
          }

          searchQuery = searchQuery.trim()

          this.addItem(searchQuery, searchQuery)

          this.select(searchQuery)
        })
      }
    })
  }
}