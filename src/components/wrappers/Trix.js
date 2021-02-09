import { ref, watch, onMounted, toRefs } from 'composition-api'
import { trix } from '../../composables/elements/features/useData'
import useElementComponent from './../../composables/useElementComponent'

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
  setup(props, context)
  {
    const { value, disabled, acceptMimes, accept, endpoint } = toRefs(props)

    // ============ DEPENDENCIES ============

    const { el$, form$, classes, components, theme } = useElementComponent(props, context)

    // ================ DATA ================

    const trix$ = ref(null)

    // =============== METHODS ==============

    const update = (val) => {
      if (typeof val == 'number') {
        val = String(val)
      }

      trix$.value.editor.loadHTML(val)
    }

    const setOption = (key, val) => {
      trix$.value[key] = val
    }

    const handleChange = () => {
      // If the change is only triggered because of `update`
      // method (which implies an external call) we should
      // not emit any events because that would duplicate the
      // effects of the value change.
      if (trix$.value.value == value.value || (!trix$.value.value && !value.value)) {
        return
      }

      context.emit('input', { target: { value: trix$.value.value }})
    }

    const handleFileAccept = (e) => {
      if (disabled.value) {
        e.preventDefault()
        return
      }

      if (!e.file) {
        e.preventDefault()
        return
      }

      if (acceptMimes.value.length && acceptMimes.value.indexOf(e.file.type) === -1) {
        e.preventDefault()

        context.emit('alert', form$.value.__('laraform.trix.acceptedMimes', {
          mimes:acceptMimes.value.join(', ')})
        )
      }

      var extension = e.file.name.split('.').pop()

      if (accept.value.length && accept.value.indexOf(extension) === -1) {
        e.preventDefault()

        context.emit('alert', form$.value.__('laraform.trix.acceptedExtensions', {
          extensions:accept.value.join(', ')})
        )
      }
    }

    const handleAttachmentAdd = (e) => {
      if (!e.attachment.file) {
        return
      }

      if (!endpoint.value) {
        throw new Error('Property `endpoint` must be defined to upload')
      }

      const data = new FormData()

      data.append('Content-Type', e.attachment.file.type)
      data.append('file', e.attachment.file)

      $laraform.value.services.axios.post(endpoint.value, data, {
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
    }

    // ============== WATCHERS ==============

    watch(disabled, (val) => {
      trix$.value.contentEditable = !val
    })

    // ================ HOOKS ===============

    onMounted(() => {
      if (disabled.value) {
        trix$.value.contentEditable = false
      }
    })

    return {
      el$,
      form$,
      theme,
      classes,
      components,
      trix$,
      update,
      setOption,
      handleChange,
      handleFileAccept,
      handleAttachmentAdd,
    }
  },
}