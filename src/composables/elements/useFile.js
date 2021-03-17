import { computed, toRefs, ref, watch } from 'composition-api'
import convertFormData from './../../utils/convertFormData'

const base = function (props, context, dependencies)
{
  const {
    type,
    embed,
    clickable,
    auto,
    methods,
    endpoints,
    url,
    image,
    params,
    softRemove,
  } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$
  const value = dependencies.value
  const isDisabled = dependencies.isDisabled
  const validate = dependencies.validate
  const invalid = dependencies.invalid
  const path = dependencies.path
  const axios = dependencies.axios
  const request = dependencies.request
  const uploading = dependencies.uploading
  const input = dependencies.input
  const update = dependencies.update
  const fire = dependencies.fire
  const isImageType = dependencies.isImageType
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
   * @type {object}
   * @default config.methods.file
   * @option
   */
  const fileMethods = computed(() => {
    return Object.assign({}, form$.value.$laraform.config.methods.file, methods.value || {})
  })

  /**
   * 
   * 
   * @type {object}
   * @default config.endpoints.file
   * @option
   */
  const fileEndpoints = computed(() => {
    return Object.assign({}, form$.value.$laraform.config.endpoints.file, endpoints.value || {})
  })

  /**
   * 
   * 
   * @type {string}
   * @option
   */
  const fileUrl = computed(() => {
    if (url.value === undefined) {
      return '/'
    }

    let fileUrl = url.value

    if (!fileUrl.match(/\/$/)) {
      fileUrl += '/'
    }

    if (!fileUrl.match(/^http/) && !fileUrl.match(/^\//)) {
      fileUrl = '/' + fileUrl
    }

    return fileUrl
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

    return fileUrl.value + filename.value
  })

  /**
   * 
   * 
   * @type {string}
   */
  const preview = computed(() => {
    if (!image.value) {
      return null
    }

    return uploaded.value ? link.value : base64.value
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
    return stage.value > 0 && !uploading.value && !isDisabled.value && !preparing.value && !removing.value
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
    return !embed.value && stage.value == 0 && !isDisabled.value && !preparing.value
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
      preview: preview.value,
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
      let data = convertFormData(Object.assign({}, params.value, {
        file: value.value,
        formKey: form$.value.options.formKey,
        path: path.value,
      }))

      let response = await axios.value[fileMethods.value.uploadTemp](fileEndpoints.value.uploadTemp, data, {
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
        handleError(form$.value.__(`laraform.elements.${type.value.toLowerCase()}.uploadError`, { filename: filename.value }), e)
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
      if (stage.value === 3 && !softRemove.value) {
        if (!confirm(form$.value.__(`laraform.elements.file.removeConfirm`))) {
          return false
        }

        await form$.value.$laraform.services.axios[fileMethods.value.remove](fileEndpoints.value.remove,
          Object.assign({}, params.value, {
            file: value.value,
            formKey: form$.value.options.formKey,
            path: path.value,
          })
        )
      }

      else if (stage.value === 2 && !softRemove.value) {
        await form$.value.$laraform.services.axios[fileMethods.value.removeTemp](fileEndpoints.value.removeTemp,
          Object.assign({}, params.value, {
            file: value.value.tmp,
            formKey: form$.value.options.formKey,
            path: path.value,
          })
        )
      }
    } catch (e) {
      handleError(form$.value.__(`laraform.elements.file.removeError`), e)
      return
    } finally {
      removing.value = false
    }

    update(null)

    progress.value = 0
    
    fire('remove')

    if (form$.value.shouldValidateOnChange) {
      validate()
    }
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

    if (form$.value.shouldValidateOnChange) {
      validate()
    }
  }

  /**
   * Triggered when an uploader is clicked.
   *
   * @returns {void}
   * @private
   */
  const handleClick = () => {
    if (isDisabled.value) {
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

    if (!isImageType.value || !(file.value instanceof Blob)) {
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
  }, { immediate: true })

  return {
    file,
    base64,
    progress,
    preparing,
    fileMethods,
    fileEndpoints,
    fileUrl,
    stage,
    filename,
    link,
    preview,
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