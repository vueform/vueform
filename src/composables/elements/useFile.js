import _ from 'lodash'
import { computed, toRefs, ref, watch, nextTick } from 'composition-api'
import convertFormData from './../../utils/convertFormData'

const base = function (props, context, dependencies)
{
  const {
    type,
    embed,
    clickable,
    auto,
    methods,
    urls,
    url,
    previewUrl,
    params,
    softRemove,
    view,
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
  const el$ = dependencies.el$

  // ================ DATA ================

  /**
   * Whether the file uploader has any errors.
   * 
   * @type {boolean}
   * @default false
   */
  const hasUploadError = ref(false)

  /**
   * The `base64` representation of the file when [`view`](#option-view) is `image` or `gallery` and file is only selected, but not uploaded yet.
   * 
   * @type {string}
   * @default null
   */
  const base64 = ref(null)

  /**
   * The percentage of progress when the file is being temporarily uploaded (0-100).
   * 
   * @type {number}
   * @default 0
   */
  const progress = ref(0)

  /**
   * If the form is submitted and the file is not uploaded yet, the element will enter into `preparing` state and upload the temporary file before submitting the form.
   * 
   * @type {boolean}
   * @default false
   */
  const preparing = ref(false)

  // ============== COMPUTED ==============

  /**
   * The url where the temp file should be submitted.
   * 
   * @type {object}
   * @default config.endpoints.uploadTempFile.url
   * @private
   */
  const uploadTempFileUrl = computed(() => {
    return urls.value.uploadTempFile || form$.value.$vueform.config.endpoints.uploadTempFile.url
  })

  /**
   * The url where the remove temp file request should be submitted.
   * 
   * @type {object}
   * @default config.endpoints.removeTempFile.url
   * @private
   */
  const removeTempFileUrl = computed(() => {
    return urls.value.removeTempFile || form$.value.$vueform.config.endpoints.removeTempFile.url
  })

  /**
   * The url where the remove file request should be submitted.
   * 
   * @type {object}
   * @default config.endpoints.removeFile.url
   * @private
   */
  const removeFileUrl = computed(() => {
    return urls.value.removeFile || form$.value.$vueform.config.endpoints.removeFile.url
  })

  /**
   * The method where the temp file should be submitted.
   * 
   * @type {object}
   * @default config.endpoints.uploadTempFile.method
   * @private
   */
  const uploadTempFileMethod = computed(() => {
    return methods.value.uploadTempFile || form$.value.$vueform.config.endpoints.uploadTempFile.method
  })

  /**
   * The method where the remove temp file request should be submitted.
   * 
   * @type {object}
   * @default config.endpoints.removeTempFile.method
   * @private
   */
  const removeTempFileMethod = computed(() => {
    return methods.value.removeTempFile || form$.value.$vueform.config.endpoints.removeTempFile.method
  })

  /**
   * The method where the remove file request should be submitted.
   * 
   * @type {object}
   * @default config.endpoints.removeFile.method
   * @private
   */
  const removeFileMethod = computed(() => {
    return methods.value.removeFile || form$.value.$vueform.config.endpoints.removeFile.method
  })

  /**
   * URL to file using the [`url`](#url) option without including the filename. If `url` is not defined it will default to `'/'`.
   * 
   * @type {string}
   * @private
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
   * URL to file preview image using the [`previewUrl`](#option-preview-url) option without including the filename. If `previewUrl` is not defined it will default to [`url`](#option-url).
   * 
   * @type {string}
   * @private
   */
  const filePreviewUrl = computed(() => {
    if (previewUrl.value === undefined) {
      return fileUrl.value
    }

    let filePreviewUrl = previewUrl.value

    if (!filePreviewUrl.match(/\/$/)) {
      filePreviewUrl += '/'
    }

    if (!filePreviewUrl.match(/^http/) && !filePreviewUrl.match(/^\//)) {
      filePreviewUrl = '/' + filePreviewUrl
    }

    return filePreviewUrl
  })

  /**
   * The stage the file is at:
   * 
   * * `0`: file not selected
   * * `1`: file selected
   * * `2`: file temporarily uploaded
   * * `3`: file permanently uploaded
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
   * The original or stored name of the file.
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
   * The clickable link of the uploaded file.
   * 
   * @type {string}
   */
  const link = computed(() => {
    if (!uploaded.value) {
      return
    }

    return fileUrl.value + filename.value
  })

  /**
   * The preview link of the uploaded file.
   * 
   * @type {string}
   */
  const previewLink = computed(() => {
    if (!uploaded.value) {
      return
    }

    return filePreviewUrl.value + filename.value
  })

  /**
   * The preview of the file when [`view`](#view) is `image` or `gallery`. Equals to the `link` if the file is already uploaded and `base64` if only selected or temporarily uploaded.
   * 
   * @type {string}
   */
  const preview = computed(() => {
    if (view.value === 'file') {
      return null
    }

    return uploaded.value ? previewLink.value : base64.value
  })

  /**
   * Whether the file is permantently uploaded.
   * 
   * @type {boolean}
   */
  const uploaded = computed(() => {
    return stage.value === 3
  })

  /**
   * Whether the file can be removed. 
   * 
   * @type {boolean}
   */
  const canRemove = computed(() => {
    return stage.value > 0 && !uploading.value && !isDisabled.value && !preparing.value && !removing.value
  })

  /**
   * Whether temporary file can be uploaded.
   * 
   * @type {boolean}
   */
  const canUploadTemp = computed(() => {
    return stage.value === 1 && !auto.value && !uploading.value && !isDisabled.value
  })

  /**
   * Whether file can be selected.
   * 
   * @type {boolean}
   */
  const canSelect = computed(() => {
    return !embed.value && stage.value == 0
  })

  // =============== METHODS ==============

  /**
   * Upload temporary file (async).
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

      hasUploadError.value = false

      let response = await axios.value[uploadTempFileMethod.value](uploadTempFileUrl.value, data, {
        onUploadProgress: (e) => {
          progress.value = Math.round((e.loaded * 100) / e.total)
        },
        cancelToken: request.value.token,
      })
      
      update(response.data)
    }
    catch (error) {
      progress.value = 0

      if (!axios.value.isCancel(error)) {
        hasUploadError.value = true
        handleError(error)
      }

      throw new Error(error)
    }
    finally {
      request.value = null
    }
  }

  /**
   * Removes file (async):
   * 
   * * in stage `1`: sets the value to `null`
   * * in stage `2`: submits a request to `removeTemp` endpoint (if [`softRemove: false`](#option-soft-remove)) and sets the value to `null`
   * * in stage `3`: submits a request to `remove` endpoint (if [`softRemove: false`](#option-soft-remove)) and sets the value to `null`
   * 
   * @returns {void}
   */
  const remove = async () => {
    removing.value = true
    hasUploadError.value = false

    try {
      if (stage.value === 3 && !softRemove.value) {
        if (!confirm(form$.value.__(`vueform.elements.file.removeConfirm`))) {
          return false
        }

        await axios.value[removeFileMethod.value](removeFileUrl.value,
          Object.assign({}, params.value, {
            file: value.value,
            formKey: form$.value.options.formKey,
            path: path.value,
          })
        )
      }

      else if (stage.value === 2 && !softRemove.value) {
        await axios.value[removeTempFileMethod.value](removeTempFileUrl.value,
          Object.assign({}, params.value, {
            file: value.value.tmp,
            formKey: form$.value.options.formKey,
            path: path.value,
          })
        )
      }
    } catch (error) {
      handleError(error)
      return
    } finally {
      removing.value = false
    }

    update(null)

    progress.value = 0
    
    fire('remove')
  }

  /**
   * Prepare the element for submitting the form (async). It will upload temp file if it hasn't been uploaded yet and halts the submit process until its done without any errors.
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
   * Handles `change` event.
   * 
   * @param {Event} e* 
   * @returns {void}
   * @private
   */
  const handleChange = (e) => {
    let file = e.target.files[0]

    update(file || null)

    if (auto.value) {
      uploadTemp()
    }

    input.value.value = ''

    if (form$.value.shouldValidateOnChange) {
      validate()
    }
  }

  /**
   * Handles file select button `click` event.
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
   * Handles `uploadTemp` event.
   * 
   * @returns {void}
   * @private
   */
  const handleUploadTemp = () => {
    uploadTemp()
  }

  /**
   * Handles `remove` event.
   * 
   * @returns {void}
   * @private
   */
  const handleRemove = () => {
    remove()
  }

  /**
   * Handles `abort` event.
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
  
  watch(value, (val) => {
    if (!val) {
      base64.value = null
      return
    }

    if (!isImageType.value || !(value.value instanceof File) || view.value === 'file') {
      return
    }

    let reader = new FileReader()
  
    reader.onload = (e) => {
      base64.value = e.target.result
    }

    reader.readAsDataURL(value.value)
  }, { immediate: true })

  if (value.value instanceof File && auto.value) {
    uploadTemp()
  }

  return {
    hasUploadError,
    base64,
    progress,
    preparing,
    uploadTempFileUrl,
    removeTempFileUrl,
    removeFileUrl,
    uploadTempFileMethod,
    removeTempFileMethod,
    removeFileMethod,
    fileUrl,
    stage,
    filename,
    link,
    preview,
    uploaded,
    canRemove,
    canUploadTemp,
    canSelect,
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