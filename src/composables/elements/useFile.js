import isObject from 'lodash/isObject'
import isString from 'lodash/isString'
import { computed, toRefs, ref, watch, nextTick } from 'vue'
import convertFormData from './../../utils/convertFormData'

const base = function(props, context, dependencies)
{
  const {
    embed,
    auto,
    methods,
    urls,
    uploadTempEndpoint,
    removeTempEndpoint,
    removeEndpoint,
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
   * The HTTP request endpoints.
   *
   * @type {object}
   * @private
   */
  const endpoints = computed(() => {
    const configEndpoints = form$.value.$vueform.config.endpoints
    const propEndpoints = {
      uploadTempFile: uploadTempEndpoint.value,
      removeTempFile: removeTempEndpoint.value,
      removeFile: removeEndpoint.value,
    }
    const endpoints = {}
    
    Object.keys(propEndpoints).forEach((name) => {
      let endpoint = configEndpoints[name]
      
      if (urls.value[name]) {
        endpoint = {
          url: urls.value[name],
          method: 'POST',
        }
      }
      
      if (methods.value[name] && typeof endpoint === 'object') {
        endpoint.method = methods.value[name]
      }
      
      if (typeof propEndpoints[name] === 'string') {
        if (configEndpoints[propEndpoints[name]] !== undefined) {
          endpoint = configEndpoints[propEndpoints[name]]
        } else {
          endpoint.url = propEndpoints[name]
        }
      }
      
      if (propEndpoints[name] === false) {
        endpoint = f => f
      }

      if (typeof propEndpoints[name] === 'function') {
        endpoint = propEndpoints[name]
      }
      
      if (typeof propEndpoints[name] === 'object') {
        endpoint = {
          url: propEndpoints[name].url || propEndpoints[name].endpoint || configEndpoints[name].url,
          method: propEndpoints[name].method || configEndpoints[name].method,
        }
      }
      
      endpoints[name] = endpoint
    })
    
    return endpoints
  })
  
  /**
   * URL to file using the [`url`](#url) option without including the filename. If `url` is not defined it will default to `'/'`.
   *
   * @type {string|boolean}
   * @private
   */
  const fileUrl = computed(() => {
    /* istanbul ignore next: will never be undefined, hardcoded `/`, failsafe only */
    if (url.value === undefined) {
      return '/'
    }
    
    if (url.value === false) {
      return ''
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
  /* istanbul ignore next: private computed, can not cover but tested */
  const filePreviewUrl = computed(() => {
    /* istanbul ignore else */
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
    
    if (isObject(value.value) && value.value.tmp !== undefined) {
      return 2 // temp uploaded
    }
    
    if (isString(value.value)) {
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
    switch (stage.value) {
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
  /* istanbul ignore next: private computed, can not cover but tested */
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
    
    return uploaded.value
      ? previewLink.value
      : value.value instanceof File
        ? URL.createObjectURL(value.value)
        : value.value?.__file__ instanceof File
          ? URL.createObjectURL(value.value.__file__)
          : null
  })
  
  /**
   * Whether the file is permanently uploaded.
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
   * @returns {Promise}
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
      
      let response
      
      if (typeof endpoints.value.uploadTempFile === 'function') {
        response = await endpoints.value.uploadTempFile(value.value, el$.value)
      } else {
        const method = endpoints.value.uploadTempFile.method.toLowerCase()
        
        response = await axios.value.request({
          url: endpoints.value.uploadTempFile.url,
          method,
          [method === 'get' ? 'params' : 'data']: data,
          onUploadProgress: (e) => {
            progress.value = Math.round((e.loaded * 100) / e.total)
          },
          cancelToken: request.value.token,
        })
        
        response = response.data
      }
      
      if (response && typeof response === 'object') {
        response.__file__ = value.value
      }
      
      update(response)
    } catch (error) {
      progress.value = 0
      
      if (!axios.value.isCancel(error)) {
        hasUploadError.value = true
        handleError(error)
      }
      
      throw new Error(error)
    } finally {
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
   * @returns {Promise}
   */
  const remove = async () => {
    removing.value = true
    hasUploadError.value = false
    
    try {
      if (stage.value === 3 && !softRemove.value) {
        if (!confirm(form$.value.translations.vueform.elements.file.removeConfirm)) {
          return false
        }
        
        if (typeof endpoints.value.removeFile === 'function') {
          await endpoints.value.removeFile(value.value, el$.value)
        } else {
          const method = endpoints.value.removeFile.method.toLowerCase()
          
          await axios.value.request({
            method,
            url: endpoints.value.removeFile.url,
            [method === 'get' ? 'params' : 'data']: Object.assign({}, params.value, {
              file: value.value,
              formKey: form$.value.options.formKey,
              path: path.value,
            }),
          })
        }
      } else if (stage.value === 2 && !softRemove.value) {
        if (typeof endpoints.value.removeTempFile === 'function') {
          await endpoints.value.removeTempFile(value.value, el$.value)
        } else {
          const method = endpoints.value.removeTempFile.method.toLowerCase()
          
          await axios.value.request({
            method,
            url: endpoints.value.removeTempFile.url,
            [method === 'get' ? 'params' : 'data']: Object.assign({}, params.value, {
              file: value.value.tmp,
              formKey: form$.value.options.formKey,
              path: path.value,
            }),
          })
        }
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
   * Prepare the element for submitting the form (async). It will upload temp file if it hasn't been uploaded yet and halts the submit process until it is done without any errors.
   *
   * @returns {Promise}
   * @private
   */
  const prepare = async () => {
    // In selected state
    if (stage.value === 1) {
      preparing.value = true
      
      try {
        await uploadTemp()
      } finally {
        preparing.value = false
      }
    }
  }
  
  /**
   * Handles `change` event.
   *
   * @param {Event} e* event object
   * @returns {Promise}
   * @private
   */
  const handleChange = async (e) => { //@todo:adam handleChange has to be async and await uploadTemp() and input.value.value should be before update because otherwise it may not exist
    let file = e.target.files[0]
    
    input.value.value = ''

    update(file || null)
    
    if (auto.value) {
      await uploadTemp()
    }
    
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
  
  if (value.value instanceof File && auto.value) {
    nextTick(() => {
      uploadTemp()
    })
  }
  
  return {
    hasUploadError,
    progress,
    preparing,
    endpoints,
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