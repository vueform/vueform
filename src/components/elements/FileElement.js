import BaseElement from './../../mixins/BaseElement'
import BaseValidation from './../../mixins/BaseValidation'
import HasFileDrop from './../../mixins/HasFileDrop'
import CanBeDisabled from './../../mixins/CanBeDisabled'

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
      file: null,

      base64: null,

      progress: 0,

      uploading: false,

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
       * Helper property used to store available events for the element.
       * 
       * @type {array}
       * @default []
       * @ignore
       */
      events: [
        'change', 'add', 'remove', 'prepare',
      ],
    }
  },
  watch: {
    file(value) {
      if (!value) {
        this.base64 = null
        return
      }

      if (!this.isImage) {
        return
      }

      let reader = new FileReader()
    
      reader.onload = (e) => {
        this.base64 = e.target.result
      }
      
      reader.readAsDataURL(this.file)
    }
  },
  computed: {
    url: {
      get() {
        return this.schema.url !== undefined ? this.schema.url : '/'
      },
      set(value) {
        this.$set(this.schema, 'url', value)
      },
    },

    clickable: {
      get() {
        return this.schema.clickable !== undefined ? this.schema.clickable : true
      },
      set(value) {
        this.$set(this.schema, 'clickable', value)
      },
    },

    auto: {
      get() {
        return this.schema.auto !== undefined ? this.schema.auto : true
      },
      set(value) {
        this.$set(this.schema, 'auto', value)
      },
    },

    link() {
      if (!this.uploaded && this.clickable) {
        return
      }

      return this.url + this.value
    },

    preview() {
      if (!this.isImage) {
        return
      }

      return this.uploaded ? this.link : this.base64
    },

    filename() {
      switch(this.stage) {
        case 1:
          return this.file ? this.file.name : null
          break

        case 2:
          return this.value.originalName
          break

        case 3:
          return this.value
          break

        default:
          return null
      }
    },

    stage() {
      if (this.value === null) {
        return 0 // file not selected
      }

      if (this.value instanceof File) {
        return 1 // file selected
      }

      if (_.isObject(this.value) && this.value.tmp !== undefined) {
        return 2 // temp uploaded
      }

      if (_.isString(this.value)) {
        return 3 // file uploaded & moved
      }

      return 'unknown'
    },

    uploaded() {
      return this.stage === 3
    },

    /**
     * Helper property used to determine a generic name for the element.
     * 
     * @type {object}
     * @ignore
     */
    genericName() {
      if (this.label) {
        return this.label
      } else if (this.placeholder) {
        return this.placeholder
      } else {
        return /^\d+$/.test(this.name)
          ? this.__('laraform.elements.file.defaultName')
          : this.name
      }
    },

    /**
     * Whether the element is `pending` or `uploading`.
     * 
     * @type {boolean}
     */
    busy() {
      return this.pending || this.uploading
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

    /**
     * Determines if the element's value is a file.
     *
     * @private
     * @type {boolean}
     */
    isFileType() {
      return true
    },

    /**
     * Determines if the element's value is a file.
     *
     * @private
     * @type {boolean}
     */
    isImage() {
      if (!this.filename) {
        return false
      }

      return !!this.filename.match(/png|jpg|jpeg|gif|svg/)
    },

    canRemove() {
      return this.stage > 0
    }
  },
  methods: {
    setFile(file) {
      this.file = file
    },
    remove() {
      if (this.stage === 3) {
        if (!confirm('The file will be immediately deleted. Are you sure to continue?')) {
          return
        }

        this.$laraform.services.axios.post('/file/remove', { file: this.value })
      }

      if (this.stage === 2) {
        this.$laraform.services.axios.post('/file/remove-temp', { file: this.value.tmp })
      }

      this.clear()
      this.file = null
      this.progress = 0
    },

    handleFileChanged(e) {
      this.remove()

      let file = e.target.files[0]

      if (file) {
        this.update(file)
        this.setFile(file)
        
        if (this.auto) {
          this.uploadTemp()
        }
      }

      this.$refs.input.value = ''
    },

    async uploadTemp(callback) {
      if (this.stage !== 1) {
        throw new Error('Temporary file cannot be uploaded because no file is selected')
      }

      let data = new FormData()
 
      data.append('file', this.value)

      this.uploading = true

      let response = await this.$laraform.services.axios.post('/file/preupload', data, {
        onUploadProgress: (e) => {
          this.progress = Math.round((e.loaded * 100) / e.total)
        }
      })

      this.uploading = false

      this.update(response.data)
    },

    /**
     * Prepares the element for submission. First it fires `prepare` event then  uploads files if [`auto`](#option-auto) is `false` and `prepare` event does not return `false`.
     *
     * @public
     * @returns {void}
     */
    async prepare() {
      // In selected state
      if (this.stage === 1) {
        await this.uploadTemp()
      }
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

    handleRemove() {
      this.remove()
    }
  },
}