import { ref, watch, onMounted, toRefs, computed, onBeforeUnmount, h } from 'vue'
import useElementComponent from './../../composables/useElementComponent'

export default {
  name: 'EditorWrapper',
  emits: ['input', 'alert', 'error', 'blur'],
  props: {
    value: {
      required: false,
      default: null
    },
    placeholder: {
      required: false,
      type: [String, Number],
      default: null
    },
    name: {
      required: false,
      type: [String, Number],
      default: null
    },
    id: {
      required: false,
      type: [String, Number],
      default: null
    },
    accept: {
      required: false,
      type: Array,
      default: () => ([])
    },
    acceptMimes: {
      required: false,
      type: Array,
      default: () => ([])
    },
    endpoint: {
      required: false,
      type: [String, Function],
      default: null
    },
    method: {
      required: false,
      type: String,
      default: 'post'
    },
    disabled: {
      required: false,
      type: Boolean,
      default: false
    },
    hideTools: {
      required: false,
      type: [Array],
      default: () => ([])
    },
    attrs: {
      required: false,
      type: [Object],
      default: () => ({})
    },
  },
  setup(props, context)
  {
    const {
      value,
      disabled,
      acceptMimes,
      accept,
      endpoint,
      method,
      attrs,
      placeholder,
      id,
    } = toRefs(props)

    // ============ DEPENDENCIES ============

    const {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      classes,
      Templates,
      template,
      theme
    } = useElementComponent(props, context)

    // ================ DATA ================

    /**
     * The [`Trix`](https://github.com/basecamp/trix) instance.
     * 
     * @type {HTMLElement}
     * @default null
     */
    const editor$ = ref(null)

    // ============== COMPUTED ==============

    const resolvedEndpoint = computed(() => {
      if (endpoint.value) {
        return typeof endpoint.value === 'function' ? endpoint.value : (form$.value.$vueform.config.endpoints[endpoint.value] || endpoint.value)
      }

      return typeof form$.value.$vueform.config.endpoints.attachment === 'function'
        ? form$.value.$vueform.config.endpoints.attachment
        : form$.value.$vueform.config.endpoints.attachment.url
    })

    const resolvedMethod = computed(() => {
      if (typeof resolvedEndpoint.value === 'function') {
        return null
      }

      if (endpoint.value && form$.value.$vueform.config.endpoints[endpoint.value]) {
        return form$.value.$vueform.config.endpoints[endpoint.value]
      }

      return method.value || form$.value.$vueform.config.endpoints.attachment.method
    })

    const editorComponent = computed(() => {
      return h('trix-editor', {
        ...attrs.value,
        placeholder: placeholder.value,
        disabled: disabled.value,
        id: id.value,
        input: `editor-input-${id.value}`,
        ref: 'editor$',
      })
    })

    // =============== METHODS ==============

    /**
     * Updates the value of editor.
     * 
     * @param {string} value* the value to update with
     * @returns {void}
     */
    const update = (val) => {
      if (typeof val == 'number') {
        val = String(val)
      }

      editor$.value.editor.loadHTML(val)
    }

    /**
     * Sets an option for editor.
     * 
     * @param {string} key* the option key
     * @param {string} value* the option value
     * @returns {void}
     */
    const setOption = (key, val) => {
      editor$.value[key] = val
    }

    /**
     * Handles `change` event.
     * 
     * @returns {void}
     * @private
     */
    const handleChange = () => {
      // If the change is only triggered because of `update`
      // method (which implies an external call) we should
      // not emit any events because that would duplicate the
      // effects of the value change.
      if (editor$.value.value == value.value || (!editor$.value.value && !value.value)) {
        return
      }

      context.emit('input', { target: { value: editor$.value.value }})
    }

    /**
     * Handles `fileAccept` event.
     * 
     * @param {Event} e* event
     * @returns {void}
     * @private
     */
    const handleFileAccept = (e) => {
      if (disabled.value) {
        e.preventDefault()
        return
      }

      if (!e.file) {
        e.preventDefault()
        return
      }

      if (acceptMimes.value && acceptMimes.value.length && acceptMimes.value.indexOf(e.file.type) === -1) {
        e.preventDefault()

        context.emit('alert', form$.value.__(form$.value.translations.vueform.editor.acceptedMimesError, {
          mimes:acceptMimes.value.join(', ')
        }))
      }

      var extension = e.file.name.split('.').pop()

      if (accept.value && accept.value.length && accept.value.indexOf(extension) === -1) {
        e.preventDefault()

        context.emit('alert', form$.value.__(form$.value.translations.vueform.editor.acceptedExtensionsError, {
          extensions:accept.value.join(', ')
        }))
      }
    }

    /**
     * Handles `attachmentAdd` event.
     * 
     * @param {Event} e* event
     * @returns {Promise}
     * @private
     */
    const handleAttachmentAdd = async (e) => {
      if (!e.attachment.file) {
        return
      }

      const data = new FormData()

      data.append('Content-Type', e.attachment.file.type)
      data.append('file', e.attachment.file)

      let response

      try {
        if (typeof resolvedEndpoint.value === 'function') {
          response = await resolvedEndpoint.value(e.attachment, el$.value)
        } else {
          response = await el$.value.$vueform.services.axios.request({
            url: resolvedEndpoint.value,
            method: resolvedMethod.value,
            [resolvedMethod.value.toLowerCase() === 'get' ? 'params' : 'data']: data,
            onUploadProgress: (progress) => {
              e.attachment.setUploadProgress(
                Math.round((progress.loaded * 100) / progress.total)
              )
            },
          })

          response = response.data
        }

        e.attachment.setAttributes({
          url: response.url,
          href: response.href,
        })
      } catch (error) {
        context.emit('error', error)
      }
    }

    /**
     * Handles `blur` event.
     * 
     * @returns {void}
     * @private
     */
    const handleBlur = () => {
      context.emit('blur')
    }

    // ============== WATCHERS ==============

    watch(disabled, (val) => {
      editor$.value.contentEditable = !val
    })

    // ================ HOOKS ===============

    onMounted(() => {
      if (disabled.value) {
        editor$.value.contentEditable = false
      }

      editor$.value.addEventListener('trix-change', handleChange)
      editor$.value.addEventListener('trix-blur', handleBlur)
      editor$.value.addEventListener('trix-file-accept', handleFileAccept)
      editor$.value.addEventListener('trix-attachment-add', handleAttachmentAdd)
    })

    onBeforeUnmount(() => {
      editor$.value?.removeEventListener('trix-change', handleChange)
      editor$.value?.removeEventListener('trix-blur', handleBlur)
      editor$.value?.removeEventListener('trix-file-accept', handleFileAccept)
      editor$.value?.removeEventListener('trix-attachment-add', handleAttachmentAdd)
    })

    return {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      resolvedEndpoint,
      editorComponent,
      theme,
      classes,
      Templates,
      template,
      editor$,
      update,
      setOption,
      handleChange,
      handleFileAccept,
      handleAttachmentAdd,
      handleBlur,
    }
  },
}