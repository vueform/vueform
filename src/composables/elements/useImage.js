import { computed, watch } from 'composition-api'
import useFile from './useFile'

const base = function (props, context, dependencies)
{
  const {
    file,
    base64,
    progress,
    preparing,
    fileMethods,
    fileEndpoints,
    fileUrl,
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
    if (!uploaded.value) {
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
    return uploaded.value ? link.value : base64.value
  })

  /**
   * 
   * 
   * @type {object}
   */
  const previewOptions = computed(() => {
    return {
      link: link.value,
      uploaded: uploaded.value,
      filename: filename.value,
      preview: preview.value,
    }
  })

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

  return {
    file,
    base64,
    progress,
    preparing,
    fileMethods,
    fileEndpoints,
    fileUrl,
    preview,
    previewOptions,
    link,
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