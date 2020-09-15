import Trix from 'trix'
import 'trix/dist/trix.css'

// https://github.com/basecamp/trix#styling-formatted-content
export default {
  name: 'Trix',
  props: {
    value: {
      default: null
    },
    placeholder: {
      type: [String, Number],
      default: null
    },
    name: {
      type: [String, Number],
      default: null
    },
    id: {
      type: [String, Number],
      default: null
    },
    accept: {
      type: Array,
      default: []
    },
    acceptMimes: {
      type: Array,
      default: []
    },
    endpoint: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
  },
  watch: {
    disabled(disabled) {
      this.$refs.trix$.contentEditable = !disabled
    }
  },
  methods: {
    update(value) {
      if (typeof value == 'number') {
        throw new Error('Cannot update Trix value with number')
      }

      this.$refs.trix$.value = value
    },
    setOption(key, value) {
      this.$refs.trix$[key] = value
    },
    handleChange() {
      this.$emit('input', this.$refs.trix$.value)
      this.$emit('change', this.$refs.trix$.value)
    },
    handleBlur() {
      this.$emit('blur', this.$refs.trix$.value)
    },
    handleFileAccept(e) {
      if (this.disabled) {
        e.preventDefault()
        return
      }

      if (!e.file) {
        return
      }

      if (this.acceptMimes.length && this.acceptMimes.indexOf(e.file.type) === -1) {
        e.preventDefault()

        this.$emit('alert', this.__('trix.acceptedMimes', {
          mimes:this.acceptMimes.join(', ')})
        )
      }

      var extension = e.file.name.split('.').pop()

      if (this.accept.length && this.accept.indexOf(extension) === -1) {
        e.preventDefault()

        this.$emit('alert', this.__('trix.acceptedExtensions', {
          extensions:this.accept.join(', ')})
        )
      }
    },
    handleAttachmentAdd(e) {
      if (!e.attachment.file) {
        return
      }

      if (!this.endpoint) {
        throw new Error('Property `endpoint` must be defined to upload')
      }

      const data = new FormData()

      data.append('Content-Type', e.attachment.file.type)
      data.append('file', e.attachment.file)

      axios.post(this.endpoint, data, {
        onUploadProgress: (progress) => {
          e.attachment.setUploadProgress(
            Math.round((progress.loaded * 100) / progress.total)
          )
        }
      })
      .then((response) => {
        return e.attachment.setAttributes({
          url: response.data.url,
          href: response.data.href,
        })
      })
    },
  },
  mounted() {
    if (this.disabled) {
      this.$refs.trix$.contentEditable = false
    }
  },

}