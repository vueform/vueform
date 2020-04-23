<script>
  import ListElement from './ListElement.vue'
  import HasFileDrop from './../../mixins/HasFileDrop'

  export default {
    mixins: [ListElement, HasFileDrop],
    name: 'MultifileElement',
    props: {
      /**
       * The element schema containing it's options.
       * 
       * @default {
       *  "storeFile": { "type": "string", "description": "The name of child element which should contain the size of the file. Storing size, original name, extension, mime and defining fields is only possible if this one is set and the element's value will be a list of objects instead of a list of filenames." },
       *  "fileRules": { "type": "str|arr", "description": "Validation [rules](#) to be applied for the file element when using `storeFile`." },
       *  "storeSize": { "type": "string", "description": "The name of child element which should contain the size of the file." },
       *  "storeOriginalName": { "type": "string", "description": "The name of child element which should contain the original name of the file." },
       *  "storeExtension": { "type": "string", "description": "The name of child element which should contain the extension of the file." },
       *  "storeMime": { "type": "string", "description": "The name of child element which should contain the mime type of the file." },
       *  "fields": { "type": "object", "description": "Additional elements for each file. General schema rules apply." },
       *  "drop": { "type": "boolean", "description": "Whether the uploader should be a drag n drop area instead of a button." },
       *  "sort": { "type": "boolean", "description": "Whether the files can be sorted by drag n drop." },
       *  "storeOrder": { "type": "string", "description": "The name of the field which should contain the order of the files." },
       *  "order": { "type": "string", "description": "The default order direction of file list when data is loaded. Possible values: `null`, `'ASC'`, `'DESC'`." },
       *  "orderBy": { "type": "string", "description": "The file list will be ordered by this element's values." },
       *  "disabled": { "type": "boolean", "description": "Whether the field is *disabled*." }
       * }
       */
      schema: {
        type: Object,
        required: true
      },
    },
    data() {
      return {
        // /**
        // * The name of child element which should contain the file.
        // * 
        // * @type {string}
        // * @default null
        // */
        // storeFile: null,

        // /**
        // * The name of child element which should contain the size of the file.
        // * 
        // * @type {string}
        // * @default null
        // */
        // storeSize: null,

        // /**
        // * The name of child element which should contain the original name of the file.
        // * 
        // * @type {string}
        // * @default null
        // */
        // storeOriginalName: null,

        // /**
        // * The name of child element which should contain the extension of the file.
        // * 
        // * @type {string}
        // * @default null
        // */
        // storeExtension: null,

        // /**
        // * The name of child element which should contain the mime type of the file.
        // * 
        // * @type {string}
        // * @default null
        // */
        // storeMime: null,

        /**
        * Additional elements for each file. General schema rules apply.
        * 
        * @type {object}
        * @default '{}'
        */
        fields: {},

        /**
         * Element slots.
         * 
         * @type {object}
         * @default {
         *  "preview": {
         *    "description": "Custom preview for file.",
         *    "attributes": {
         *      "el$": {"type": "object", "description": "The file's element component."},
         *      "remove": {"type": "function", "description": "Removes the file."}
         *    }
         *  },
         *  "children": {
         *    "description": "Contains the children of the element.",
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
          after: null,
          description: null,
          error: null,
          preview: null,
          children: null,
        },

        /**
        * Value of element when the form is initially loaded or reseted.
        * 
        * @type {array} 
        * @default null
        * @ignore
        */
        defaultValue: null,

        /**
        * Type of file. Possible values: `file` or `image`
        * 
        * @type {string}
        * @default 'file'
        * @ignore
        */
        fileType: 'file',

        /**
        * Initial number of child instances.
        * 
        * @type {number}
        * @default 1
        * @ignore
        */
        initial: 0,

        /**
        * Meta types.
        * 
        * @type {array} 
        * @default [...]
        * @ignore
        */
        metas: ['size', 'originalName', 'extension', 'mime'],
      }
    },
    computed: {

      /**
       * The schema of a child.
       * 
       * @type {object}
       */
      prototype() {
        return this.isObject()
          ? this.$_objectSchema()
          : this.$_elementSchema()
      },

      /**
       * The element's error.
       * 
       * @type {string}
       */
      error() {
        return _.head(this.errors)
      },

      /**
       * The type of uploader. Possible values: `drop` or `button`
       * 
       * @type {object}
       * @ignore
       */
      uploader() {
        return this.drop ? 'drop' : 'button'
      },

      /**
       * Returns the list of elements which should be required by the component.
       * 
       * @returns {array}
       * @ignore
       */
      elements_() {
        return this.isObject() ? ['fileobject'] : ['file']
      },
      
      /**
       * Preview type.
       * 
       * @type {string}
       * @ignore
       */
      view() {
        return this.schema.view || 'list'
      },
    },
    methods: {

      /**
       * Adds a file to the file list. Returns the index of the added file.
       *
       * @public
       * @param {data} data Javascript file object
       * @returns {number}
       */
      add(data) {
        if (data === undefined) {
          data == null
        }

        if (this.disabled) {
          return
        }

        var index = this.insert(data)

        this.fire('add', index)

        this.handleChange()

        // nextTick is required because nested element
        // search is based on children$ which only
        // updates after DOM rerender
        this.$nextTick(() => {
          var element = this.form$.el$(this.path + '.' + index)

          if (this.isObject()) {
            element.children$[this.schema.storeFile].change(data)
          }
          else {
            element.change(data)
          }
        })

        return index
      },

      /**
       * Determines if the list items are objects.
       *
       * @private
       * @returns {boolean}
       */
      isObject() {
        return this.schema.storeFile !== undefined
      },

      /**
       * Triggered when an uploader is clicked.
       *
       * @private
       * @returns {void}
       */
      handleClick() {
        if (this.disabled) {
          return
        }

        this.$refs.input.click()
      },

      /**
       * Triggered when a file is dropped to the drag n drop area.
       *
       * @private
       * @returns {void}
       */
      handleFileDropped(e) {
        if (!e.dataTransfer || !e.dataTransfer.files || e.dataTransfer.files.length == 0 || this.disabled) {
          return
        }

        _.each(e.dataTransfer.files, (file) => {
          this.add(file)
        })
      },

      /**
       * Triggered when a file is selected by the user.
       *
       * @private
       * @returns {void}
       */
      handleFileSelected(e) {
        if (!e.target || !e.target.files || e.target.files.length == 0 || this.disabled) {
          return
        }

        _.each(e.target.files, (file) => {
          this.add(file)
        })

        this.$refs.input.value = ''
      },

      /**
       * Returns the schema of an object child.
       *
       * @private
       * @returns {object}
       */
      $_objectSchema() {
        return {
          type: 'file-object',
          schema: Object.assign({},
            this.$_fileSchema(),
            this.$_metasSchema(),
            this.fields,
          )
        }
      },

      /**
       * Returns the schema of the file element.
       *
       * @private
       * @returns {object}
       */
      $_fileSchema() {
        return {
          [this.schema.storeFile]: this.$_elementSchema(),
        }
      },

      /**
       * Returns the schema of the meta elements.
       *
       * @private
       * @returns {object}
       */
      $_metasSchema() {
        var schema = {}

        _.each(this.$_requiredMetas(), (storeName) => {
          schema[storeName] = {
            type: 'meta'
          }
        })

        return schema
      },

      /**
       * Returns the schema of a single element child.
       *
       * @private
       * @returns {object}
       */
      $_elementSchema() {
        return Object.assign({}, {
          type: this.fileType,
          embed: true,
          slots: {
            preview: this.slots.preview,
          },
        }, this.$_fileAttributes())
      },

      /**
       * Returns the attributes of the element which will contain the file.
       *
       * @private
       * @returns {object}
       */
      $_fileAttributes() {
        var attributes = {}

        var copy = [
          {'fileRules': 'rules'}, 'storeSize', 'storeMime',
          'storeExtension', 'storeOriginalName', 'url', 'preview',
          'clickable', 'view', 'disabled',
        ]

        _.each(copy, (value) => {
          if (_.isPlainObject(value)) {
            var key = _.keys(value)[0]
            value = _.values(value)[0]
          }
          else {
            var key = value
          }

          if (this.schema[key] !== undefined) {
            attributes[value] = this.schema[key]
          }
        })

        return attributes
      },

      /**
       * Returns the list of required meta tags.
       *
       * @private
       * @returns {array}
       */
      $_requiredMetas() {
        var required = []

        _.each(this.metas, (meta) => {
          if (this.schema['store' + _.upperFirst(meta)] !== undefined) {
            required.push(this.schema['store' + _.upperFirst(meta)])
          }
        })

        return required
      },

      /**
       * Determines if any meta is required.
       *
       * @private
       * @returns {boolean}
       */
      $_schemaHasAnyMeta() {
        return !!this.$_requiredMetas().length
      },
    },
    created() {
      this.$_copy([
        'fields', 'drop',
      ])
    },
    mounted() {
      if (this.schema.storeFile === undefined && this.$_schemaHasAnyMeta()) {
        throw new Error('Property `storeFile` must be defined when using any `store` variable')
      }
    },
  }
</script>