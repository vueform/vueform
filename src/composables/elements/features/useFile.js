import computedOption from './../../../utils/computedOption'
import { computed, toRefs, ref, onMounted, watch } from 'composition-api'

const base = function (props, context, dependencies)
{
  const { schema, embed } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$
  const value = dependencies.value
  const previousValue = dependencies.previousValue
  const disabled = dependencies.disabled
  const validate = dependencies.validate
  const invalid = dependencies.invalid
  const path = dependencies.path
  const axios = dependencies.axios
  const request = dependencies.request
  const uploading = dependencies.uploading
  const input = dependencies.input
  const load = dependencies.load
  const update = dependencies.update
  const updated = dependencies.updated
  const fire = dependencies.fire
  const isImageType = dependencies.isImageType
  const listeners = dependencies.listeners
  const removing = dependencies.removing
  const handleError = dependencies.handleError

  // ================ DATA ================

  /**
   * 
   * 
   * @type {File|object|string}
   * @default null
   */
  const file = ref(null)

  /**
   * 
   * 
   * @type {string}
   * @default null
   */
  const base64 = ref(null)

  /**
   * 
   * 
   * @type {number}
   * @default 0
   */
  const progress = ref(0)

  /**
   * 
   * 
   * @type {boolean}
   * @default false
   */
  const preparing = ref(false)

  // ============== COMPUTED ==============

  /**
   * 
   * 
   * @type {string|array}
   * @default false
   */
  const accept = computedOption('accept', schema, null)

  /**
   * 
   * 
   * @type {boolean}
   * @default true
   */
  const clickable = computedOption('clickable', schema, true)

  /**
   * 
   * 
   * @type {boolean}
   * @default true
   */
  const auto = computedOption('auto', schema, true)

  /**
   * 
   * 
   * @type {object}
   * @default config.methods.file
   * @option
   */
  const methods = computed({
    get() {
      return Object.assign({}, form$.value.$laraform.methods.file, schema.value.methods || {})
    },
    set(val) {
      form$.value.$set(schema.value, 'methods', val)
    }
  })

  /**
   * 
   * 
   * @type {object}
   * @default config.endpoints.file
   * @option
   */
  const endpoints = computed({
    get() {
      return Object.assign({}, form$.value.$laraform.endpoints.file, schema.value.endpoints || {})
    },
    set(val) {
      form$.value.$set(schema.value, 'endpoints', val)
    }
  })

  /**
   * 
   * 
   * @type {string}
   * @option
   */
  const url = computed({
    get() {
      if (schema.value.url === undefined) {
        return '/'
      }

      let url = schema.value.url

      if (!url.match(/\/$/)) {
        url += '/'
      }

      if (!url.match(/^http/) && !url.match(/^\//)) {
        url = '/' + url
      }

      return url
    },
    set(val) {
      form$.value.$set(schema.value, 'url', val)
    },
  })

  /**
   * 
   * 
   * @type {number}
   */
  const stage = computed(() => {
    if (value.value === null) {
      return 0 // file not selected
    }

    if (value.value instanceof File) {
      return 1 // file selected
    }

    if (_.isObject(value.value) && value.value.tmp !== undefined) {
      return 2 // temp uploaded
    }

    if (_.isString(value.value)) {
      return 3 // file uploaded
    }

    return -1
  })

  /**
   * 
   * 
   * @type {string}
   */
  const filename = computed(() => {
    switch(stage.value) {
      case 1:
        return value.value.name

      case 2:
        return value.value.originalName

      case 3:
        return value.value

      default:
        return null
    }
  })

  /**
   * 
   * 
   * @type {string}
   */
  const link = computed(() => {
    if (!uploaded.value || !clickable.value) {
      return
    }

    return url.value + filename.value
  })

  /**
   * 
   * 
   * @type {boolean}
   */
  const uploaded = computed(() => {
    return stage.value === 3
  })

  /**
   * 
   * 
   * @type {boolean}
   */
  const canRemove = computed(() => {
    return stage.value > 0 && !uploading.value && !disabled.value && !preparing.value && !removing.value
  })

  /**
   * 
   * 
   * @type {boolean}
   */
  const canUploadTemp = computed(() => {
    return stage.value === 1 && !auto.value && !uploading.value
  })

  /**
   * 
   * 
   * @type {boolean}
   */
  const canSelect = computed(() => {
    return !embed.value && stage.value == 0 && !disabled.value && !preparing.value
  })

  /**
   * 
   * 
   * @type {object}
   */
  const previewOptions = computed(() => {
    return {
      link: link.value,
      clickable: clickable.value,
      filename: filename.value,
    }
  })

  // =============== METHODS ==============

  /**
   * 
   * 
   * @returns {void}
   */
  const uploadTemp = async () => {
    if (stage.value !== 1) {
      throw new Error('No file is selected')
    }

    await validate()

    if (invalid.value) {
      return
    }

    request.value = axios.value.CancelToken.source()

    try {
      let data = new FormData()

      data.append('file', value.value)
      data.append('key', form$.value.key)
      data.append('path', path.value)

      let response = await axios.value[methods.value.uploadTemp](endpoints.value.uploadTemp, data, {
        onUploadProgress: (e) => {
          progress.value = Math.round((e.loaded * 100) / e.total)
        },
        cancelToken: request.value.token,
      })
      
      update(response.data)
    }
    catch (e) {
      progress.value = 0

      if (!axios.value.isCancel(e)) {
        handleError(form$.value.__(`laraform.elements.${schema.value.type}.uploadError`, { filename: filename.value }), e)
      }

      throw new Error(e)
    }
    finally {
      request.value = null
    }
  }

  /**
   * 
   * 
   * @returns {void}
   */
  const remove = async () => {
    removing.value = true

    try {
      if (stage.value === 3) {
        if (!confirm(form$.value.__(`laraform.elements.${schema.value.type}.removeConfirm`))) {
          return false
        }

        await form$.value.$laraform.services.axios[methods.value.remove](endpoints.value.remove, { file: value.value })
      }

      else if (stage.value === 2) {
        await form$.value.$laraform.services.axios[methods.value.removeTemp](endpoints.value.removeTemp, { file: value.value.tmp })
      }
    } catch (e) {
      handleError(form$.value.__(`laraform.elements.${schema.value.type}.removeError`), e)
      return
    } finally {
      removing.value = false
    }

    update(null)

    progress.value = 0

    context.emit('remove')
    
    fire('remove', previousValue.value)
  }

  /**
   * 
   * 
   * @returns {void}
   * @private
   */
  const prepare = async () => {
    // In selected state
    if (stage.value === 1) {
      preparing.value = true

      try {
        await uploadTemp()
      }
      finally {
        preparing.value = false
      }
    }
  }

  /**
   * 
   * @param {Event} e* 
   * @returns {void}
   * @private
   */
  const handleChange = (e) => {
    let file = e.target.files[0]

    update(file || null)

    input.value.value = ''
  }

  /**
   * Triggered when an uploader is clicked.
   *
   * @returns {void}
   * @private
   */
  const handleClick = () => {
    if (disabled.value) {
      return
    }

    input.value.click()
  }

  /**
   * 
   * 
   * @returns {void}
   * @private
   */
  const handleUploadTemp = () => {
    uploadTemp()
  }

  /**
   * 
   * 
   * @returns {void}
   * @private
   */
  const handleRemove = () => {
    remove()
  }

  /**
   * 
   * 
   * @returns {void}
   * @private
   */
  const handleAbort = () => {
    if (request.value === null) {
      return
    }

    request.value.cancel()
  }

  // ============== WATCHERS ==============
  
  watch(file, (val) => {
    if (!val) {
      base64.value = null
      return
    }

    if (!isImageType.value) {
      return
    }

    let reader = new FileReader()
  
    reader.onload = (e) => {
      base64.value = e.target.result
    }
    
    reader.readAsDataURL(file.value)
  })

  watch(value, (val) => {
    if (val instanceof File) {
      file.value = val

      if (auto.value) {
        uploadTemp()
      }
    }
    else if (val === null) {
      file.value = null
    }
  })

  return {
    accept,
    file,
    base64,
    progress,
    preparing,
    clickable,
    auto,
    methods,
    endpoints,
    url,
    stage,
    filename,
    link,
    uploaded,
    canRemove,
    canUploadTemp,
    canSelect,
    previewOptions,
    uploadTemp,
    remove,
    prepare,
    handleChange,
    handleClick,
    handleUploadTemp,
    handleRemove,
    handleAbort,
  }
}

export default base