<script>
  import MultiselectElement from './MultiselectElement.vue'
  import utils from './../../utils'

  export default {
    name: 'TagsElement',
    mixins: [MultiselectElement],
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
         * Whether new tags are allowed to be created.
         * 
         * @type {boolean}
         * @default false
         */
        create: false,

        /**
        * Determines whether the select options are searchable.
        * 
        * @type {boolean} 
        * @default false
        */
        search: true,

        /**
         * Additional [options](https://vue-multiselect.js.org/#sub-props) for the select.
         * 
         * @type {object}
         * @default {}
         */
        options: {
          clearOnSelect: true,
          hideSelected: true,
          closeOnSelect: false,
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
         *  "tag": {
         *    "description": "Contains a selected tag.",
         *    "attributes": {
         *      "el$": {"type": "object", "description": "The element component."},
         *      "option": {"type": "object", "description": "Selected option."},
         *      "search": {"type": "object", "description": "The current value of search."},
         *      "remove": {"type": "function", "description": "Removes the tag. Must receive `option` as the first parameter."}
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
          tag: null,
        },

        /**
        * Determines whether multiple options can be selected.
        * 
        * @type {boolean} 
        * @default true
        * @ignore
        */
        multiple: true,

        /**
        * Determines whether the select should behave as tags.
        * 
        * @type {boolean} 
        * @default true
        * @ignore
        */
        taggable: true,
      }
    },
    computed: {

      /**
       * Retrieves the selected options' label.
       * 
       * @type {array}
       * @ignore
       */
      textValue() { },
    },
    methods: {
      addItem(value, label) {
        if (_.isPlainObject(this.items)) {
          this.$set(this.items, utils.normalize(value), label)
        }
        else {
          this.items.push({
            value: utils.normalize(value),
            label: label,
          })
        }
      },
      removeItem(value) {
        if (_.isPlainObject(this.items)) {
          this.$delete(this.items, value)
        }
        else {
          this.items.splice(_.findIndex(this.items, {value: value}), 1)
        }
      },

      /**
       * Triggered when the user creates a tag.
       *
       * @public
       * @event tag
       * @param {string} searchQuery the current search query.
       */
      handleTag(searchQuery) {
        if (this.create) {
          this.fire('tag', {searchQuery})
        }
      },
    },
    created() {
      this.$_copy([
        'create'
      ])

      if (this.slots.tag === null) {
        this.slots.tag = this.theme.components.MultiselectSlotTag
      }

      if (this.slots.selection === null) {
        this.slots.selection = this.theme.components.MultiselectSlotTagsSelection
      }

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
</script>