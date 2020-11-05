import BaseElement from './../../mixins/BaseElement'
import BaseValidation from './../../mixins/BaseValidation'
import CanBeDisabled from './../../mixins/CanBeDisabled'
import asyncForEach from './../../utils/asyncForEach'

export default {
  name: 'FileElement',
  mixins: [BaseElement, BaseValidation, CanBeDisabled],
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

      preparing: false,

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

        progress: this.theme.components.FileSlotProgress,
      },

      skipSlots: [
        'progress'
      ],
      
      /**
       * Helper property used to store available events for the element.
       * 
       * @type {array}
       * @default []
       * @ignore
       */
      events: [
        'change', 'remove', 'error',
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

    /**
     * The value of the element.
     * 
     * @type {any}
     */
    value: {
      get() {
        return this.currentValue
      },
      set(value) {
        this.previousValue = this.currentValue && this.currentValue instanceof File
          ? new File([this.currentValue], this.currentValue.name)
          : _.clone(this.currentValue)

        this.currentValue = value
      }
    },
    url: {
      get() {
        if (this.schema.url === undefined) {
          return '/'
        }

        let url = this.schema.url

        if (!url.match(/\/$/)) {
          url += '/'
        }

        if (!url.match(/^http/) && !url.match(/^\//)) {
          url = '/' + url
        }

        return url
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

      return -1
    },

    filename() {
      switch(this.stage) {
        case 1:
          return this.value.name

        case 2:
          return this.value.originalName

        case 3:
          return this.value

        default:
          return null
      }
    },

    link() {
      if (!this.uploaded || !this.clickable) {
        return
      }

      return this.url + this.filename
    },

    uploading() {
      return this.request !== null
    },

    uploaded() {
      return this.stage === 3
    },

    /**
     * Whether the element is `pending`, `debouncing` or `uploading`.
     * 
     * @type {boolean}
     */
    busy() {
      return this.pending || this.debouncing || this.uploading
    },

    /**
     * Helper property used to determine a generic name for the element.
     * 
     * @type {object}
     * @ignore
     */
    genericName() {
      if (this.embed && this.filename) {
        return this.filename
      } else if (this.label) {
        return this.label
      } else {
        return /^\d+$/.test(this.name)
          ? this.__('laraform.elements.file.defaultName')
          : _.upperFirst(this.name)
      }
    },

    canRemove() {
      return this.stage > 0 && !this.uploading && !this.disabled && !this.preparing
    },

    canUploadTemp() {
      return this.stage === 1 && !this.auto && !this.uploading
    },

    canSelect() {
      return !this.embed && this.stage == 0 && !this.disabled && !this.preparing
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
     * Determines if the element's value is an image.
     *
     * @private
     * @type {boolean}
     */
    isImage() {
      return false
    },

    // preview() {
    //   if (!this.isImage) {
    //     return
    //   }

    //   return this.uploaded ? this.link : this.base64
    // },
  },

  methods: {
    
    /**
     * Validates the element. File element will only validate for `min`, `max`, `between`, `size`, `mimetypes` and `mimes` rules before the temporary files are uploaded.
     * 
     * @public
     * @returns {void}
     */
    async validate() {
      if (!this.rules) {
        return
      }

      if (this.form$.validation === false) {
        return
      }

      let restricted = ['min', 'max', 'between', 'size', 'mimetypes', 'mimes']

      await asyncForEach(this.Validators, async (Validator) => {
        if (!(this.value instanceof File) && restricted.indexOf(Validator.name) !== -1) {
          return
        }
        
        await Validator.validate()
      })
      
      this.state.validated = true
    },

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

      this.update(null, true, this.form$.shouldValidateOnChange)

      this.progress = 0

      this.$emit('remove', this.name)
    },

    handleFileSelected(e) {
      let file = e.target.files[0]

      this.update(file || null, true, this.form$.shouldValidateOnChange)

      this.$refs.input.value = ''
    },

    async uploadTemp() {
      if (this.stage !== 1) {
        throw new Error('No file is selected')
      }

      await this.validate()

      if (this.invalid) {
        return
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
        }

        throw new Error(e)
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
        this.preparing = true

        try {
          await this.uploadTemp()
        }
        finally {
          this.preparing = false
        }
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

    handleRemove(oldValue) {
      this.remove()
      this.fire('remove', this.previousValue)
    },

    handleAbort() {
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