import { computed, watch } from 'composition-api'
import useFile from './useFile'

const base = function (props, context, dependencies)
{
  const {
    accept,
    file,
    base64,
    progress,
    preparing,
    auto,
    methods,
    endpoints,
    url,
    stage,
    filename,
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
  } = useFile(props, context, dependencies)
  
  // ============ DEPENDENCIES ============

  const isImageType = dependencies.isImageType

  // ============== COMPUTED ==============

  /**
   * 
   * 
   * @type {string}
   */
  const link = computed(() => {
    if (!file.uploaded.value) {
      return
    }

    return file.url.value + file.filename.value
  })

  /**
   * 
   * 
   * @type {string}
   */
  const preview = computed(() => {
    return file.uploaded.value ? link.value : base64.value
  })

  /**
   * 
   * 
   * @type {object}
   */
  const previewOptions = computed(() => {
    return {
      link: link.value,
      uploaded: file.uploaded.value,
      filename: file.filename.value,
      preview: preview.value,
    }
  })

  // ============== WATCHERS ==============
  
  watch(file.file, (val) => {
    if (!val) {
      base64.value = null
      return
    }

    if (!isImageType.value || !(file.file.value instanceof Blob)) {
      return
    }

    let reader = new FileReader()
  
    reader.onload = (e) => {
      base64.value = e.target.result
    }
    
    reader.readAsDataURL(file.file.value)
  })

  return {
    accept,
    file,
    base64,
    progress,
    preparing,
    auto,
    methods,
    endpoints,
    preview,
    previewOptions,
    link,
    url,
    stage,
    filename,
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