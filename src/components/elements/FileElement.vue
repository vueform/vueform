<script>
  // @todo button label from locale
  // @todo disabled uploading

  import BaseElement from './../../mixins/BaseElement'
  import BaseValidation from './../../mixins/BaseValidation'
  import HasFileDrop from './../../mixins/HasFileDrop'
  import CanBeDisabled from './../../mixins/CanBeDisabled'
  import LaraformFile from './../../utils/file'
  import utils from './../../utils'

  export default {
    name: 'FileElement',
    mixins: [BaseElement, BaseValidation, HasFileDrop, CanBeDisabled],
    props: {
      /**
       * The element schema containing it's options.
       * 
       * @default {
       *  "clickable": { "type": "boolean", "description": "Whether the file's name in the default preview should be linked to the actual file." },
       *  "url": { "type": "string", "description": "If the file is `clickable` this will be prepended to the file's URI." },
       *  "drop": { "type": "boolean", "description": "Whether the uploader should be a drag n drop area instead of a button." },
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
        /**
        * The element's File object containing information about the uploaded file. Available properties: file, base64, preview, name, displayName, link.
        * 
        * @type {object} 
        * @default null
        */
        file: null,

        /**
        * Whether the file's name in the default preview should be linked to the actual file.
        * 
        * @type {boolean} 
        * @default true
        */
        clickable: true,

        /**
        * If the file is `clickable` this will be prepended to the file's URI.
        * 
        * @type {boolean} 
        * @default null
        */
        url: null,

        /**
        * Value of element when the form is initially loaded or reseted.
        * 
        * @type {string} 
        * @default null
        */
        defaultValue: null,

        /**
         * Element slots.
         * 
         * @type {object}
         * @default {
         *  "preview": {
         *    "description": "Custom preview.",
         *    "attributes": {
         *      "el$": {"type": "object", "description": "The element component."},
         *      "remove": {"type": "function", "description": "Removes the file."}
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
        },

        /**
         * View type of the file's preview. Possible values: `list`
         * 
         * @type {string}
         * @default 'list'
         * @ignore
         */
        view: 'list',

        /**
         * Helper property used to determine if the element is being embedded by a
         * parent component (like multifile).
         * 
         * @type {boolean}
         * @default false
         * @ignore
         */
        embed: false,
        
        /**
         * Helper property used to store available events for the element.
         * 
         * @type {array}
         * @default []
         * @ignore
         */
        events: [
          'change', 'add', 'remove'
        ],
      }
    },
    computed: {
      /**
       * The original name of the uploaded file.
       * 
       * @type {string}
       */
      originalName() {
        return this.schema.storeOriginalName !== undefined
          ? this.siblings$[this.schema.storeOriginalName].value
          : null
      },

      /**
       * Whether an uploader should be displayed.
       * 
       * @type {boolean}
       * @ignore
       */
      displayUploader() {
        return !this.file
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
       * Helper property used to determine a generic name for the element.
       * 
       * @type {object}
       * @ignore
       */
      attribute() {
        if (this.label) {
          return this.label
        } else if (this.placeholder) {
          return this.placeholder
        } else {
          return /^\d+$/.test(this.name)
            ? this.__('elements.file.defaultName')
            : this.name
        }
      },

      /**
       * The sibling elements of the element.
       * 
       * @type {string}
       * @ignore
       */
      siblings$() {
        return this.form$.siblings$(this.path)
      },
    },
    methods: {

      /**
       * Loads data for element or clears the element if the element's key is not found in the `data` object.
       *
       * @public
       * @param {object} data an object containing data for the element using its **name as key**
       * @returns {void}
       */
      load(data) {
        if (this.available && data && data[this.name] !== undefined) {
          this.value = data[this.name]
          this.$_initFile()
          return
        }

        this.clear()
        this.resetValidators()
      },

      /**
       * Updates the element's value.
       *
       * @public
       * @param {any} value the value to be set for the element
       * @returns {void}
       */
      update(value) {
        this.value = value

        this.$_initFile()
      },

      /**
       * Resets the element to it's default state.
       *
       * @public
       * @returns {void}
       */
      reset() {
        if (this.disabled) {
          return
        }

        this.value = this.defaultValue
        
        this.remove()
        this.clearMeta()

        this.resetValidators()
      },

      /**
       * Clears the value of the element.
       *
       * @public
       * @returns {void}
       */
      clear() {
        this.value = this.null
        
        this.remove()
        this.clearMeta()
      },

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
          Validator.validate(this.file ? this.file.file : null)
        })

        this.state.validated = true
      },

      /**
       * Changes the uploaded file and trigger it's change event.
       *
       * @public
       * @param {File} File Javascript file object
       * @returns {void}
       */
      change(File) {
        // updates its value and triggers
        // change handler -> required to
        // trigger change evt on external
        // value setting
        this.update(File)
        this.handleChange()
      },

      /**
       * Converts a javascript File object to element's File object and set it as the file property.
       * 
       * @public
       * @param {object} File Javascript File object.
       * @returns {void}
       */
      set(File) {
        this.file = new LaraformFile(File)
      },

      /**
       * Removes the element's File object.
       * 
       * @public
       * @returns {void}
       */
      remove() {
        this.file = null
        this.handleChange()
      },

      /**
       * Triggered when a new file is selected by the user.
       *
       * @public
       * @event add
       */
      handleAdd() {
        this.fire('add')
      },

      /**
       * Triggered when the element's file is removed.
       *
       * @public
       * @event remove
       */
      handleRemove() {
        this.fire('remove')
        
        this.$emit('remove')

        this.clear()
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
        if (this.disabled) {
          return
        }
        
        var file = e.dataTransfer.files[0]

        this.change(file)

        this.handleAdd()
        
        this.set(file)
      },

      /**
       * Triggered when a file is selected by the user.
       *
       * @private
       * @returns {void}
       */
      handleFileSelected(e) {
        if (this.disabled) {
          return
        }
        
        var file = e.target.files[0]

        this.change(file)

        this.handleAdd()
        
        this.set(file)

        this.$refs.input.value = ''
      },

      /**
       * Clears the meta elements related to the file.
       *
       * @private
       * @returns {void}
       */
      clearMeta() {
        if (this.schema.storeSize !== undefined) {
          this.siblings$[this.schema.storeSize].clear()
        }

        if (this.schema.storeOriginalName !== undefined) {
          this.siblings$[this.schema.storeOriginalName].clear()
        }

        if (this.schema.storeExtension !== undefined) {
          this.siblings$[this.schema.storeExtension].clear()
        }

        if (this.schema.storeMime !== undefined) {
          this.siblings$[this.schema.storeMime].clear()
        }
      },

      /**
       * Determines if the element's value is a file.
       *
       * @private
       * @returns {boolean}
       */
      isFileType() {
        return true
      },

      /**
       * Inits the element.
       * 
       * @private 
       * @returns {void}
       */
      $_initElement() {
        this.value = this.defaultValue !== null ? this.defaultValue : this.null

        this.$_initFile()
      },

      /**
       * Inits file if the element has any.
       * 
       * @private 
       * @returns {void}
       */
      $_initFile() {
        if (!this.value) {
          return
        }

        var file = this.value

        // value is a JS File
        if (file instanceof Blob) {
          this.set(file)
        }

        // value is a file name
        else {
          var fileUrl = (this.url || '') + '/' + file

          // fetch the actual file
          fetch(fileUrl).then(res => res.blob()).then((blob) => {
            // creating JS File object
            var JsFile = new File([blob], file)

            // adding properties to JS File object
            JsFile.originalName = this.originalName
            JsFile.url = this.url

            // creating a Laraform File from JS File object
            // which will be set as this.file
            this.set(JsFile)
          })
        }
      },
    },
    created() {
      this.$_copy([
        'url', 'clickable', 'preview', 'drop',
        'embed',
      ])
    },
  }
</script>