import { computed, ref, watch } from 'composition-api'
import useFile from './useFile'

const base = function (props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const isImageType = dependencies.isImageType

  const file = useFile(props, context, dependencies)
  
  delete file.link
  delete file.clickable
  delete file.previewOptions

  // ================ DATA ================

  const base64 = ref(null)

  // ============== COMPUTED ==============

  const link = computed(() => {
    if (!file.uploaded.value) {
      return
    }

    return file.url.value + file.filename.value
  })

  const preview = computed(() => {
    return file.uploaded.value ? link.value : base64.value
  })

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
    ...file,
    base64,
    preview,
    previewOptions,
    link,
  }
}

export default base