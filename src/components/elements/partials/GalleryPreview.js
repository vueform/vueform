import { computed } from 'composition-api'
import useElementComponent from './../../../composables/useElementComponent'
import usePreview from './../../../composables/usePreview'

export default {
  name: 'GalleryPreview',
  setup(props, context)
  {
    const {
      el$,
      form$,
      $size,
      classes,
      templates,
      template,
      theme,
    } = useElementComponent(props, context)

    const {
      visible,
      hasLink,
      hasError,
      link,
      filename,
      clickable,
      uploaded,
      uploading,
      progress,
      canRemove,
      canUploadTemp,
      uploadText,
      upload,
      remove,
    } = usePreview(props, context, {
      el$,
    })

    // ============== COMPUTED ==============
    
    /**
     * The image's preview. Equals to the `link` if the file is already uploaded and `base64` if only selected or temporarily uploaded.
     * 
     * @type {string}
     */
    const preview = computed(() => {
      return el$.value.preview
    })

    return {
      el$,
      form$,
      $size,
      classes,
      templates,
      template,
      theme,
      visible,
      hasLink,
      hasError,
      link,
      filename,
      clickable,
      preview,
      uploaded,
      uploading,
      progress,
      canRemove,
      canUploadTemp,
      uploadText,
      preview,
      upload,
      remove,
    }
  },
}