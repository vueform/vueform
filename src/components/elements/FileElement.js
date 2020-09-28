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

    embed: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      file: null,

      base64: null,

      progress: 0,

      request: null,

      axios: null,

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
        'change', 'add', 'remove', 'error',
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
    },
    value(value) {
      if (value instanceof File) {
        this.file = value
        
        if (this.auto) {
          this.uploadTemp()
        }
      }
      else if (value === null) {
        this.file = null
      }
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
        return 3 // file uploaded
      }

      return 'unknown'
    },

    uploaded() {
      return this.stage === 3
    },

    uploading() {
      return this.request !== null
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
      return this.stage > 0 && !this.uploading
    },
  },

  methods: {
    remove() {
      if (this.stage === 3) {
        if (!confirm('By removing the file it will be permanently deleted. Are you sure to continue?')) {
          return false
        }

        this.$laraform.services.axios.post('/file/remove', { file: this.value })
      }

      if (this.stage === 2) {
        this.$laraform.services.axios.post('/file/remove-temp', { file: this.value.tmp })
      }

      this.clear()
      this.progress = 0

      this.$emit('remove', this.name)
    },

    handleFileChanged(e) {
      if (this.remove() === false) {
        this.$refs.input.value = ''
        return
      }

      let file = e.target.files[0]

      this.update(file || null)

      this.$refs.input.value = ''
    },

    async uploadTemp() {
      if (this.stage !== 1) {
        throw new Error('No file is selected')
      }

      this.request = this.axios.CancelToken.source()

      try {
        let data = new FormData()

        data.append('file', this.value)
        data.append('key', this.form$.key)
        data.append('path', this.path)

        let response = await this.axios.post('/file/preupload', data, {
          onUploadProgress: (e) => {
            this.progress = Math.round((e.loaded * 100) / e.total)
          },
          cancelToken: this.request.token,
        })

        this.update(response.data)
      }
      catch (e) {
        this.progress = 0

        if (!this.axios.isCancel(e)) {
          this.handleError(e)

          throw new Error(e)
        }
      }
      finally {
        this.request = null
      }
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
    },

    handleCancel() {
      if (this.request === null) {
        return
      }

      this.request.cancel()
    },

    /**
     * Triggered when an error occurs during file upload. If no event is attached browsers default `alert()` function will be used with a default error message.
     *
     * @public
     * @param {string} e error object
     * @event error
     */
    handleError(e) {
      this.fire('error', e)

      if (!this.listeners.error) {
        alert(`Couldn\'t upload file: ${this.filename}`)
      } 
    },
  },
  mounted() {
    this.axios = this.$laraform.services.axios
  }
}