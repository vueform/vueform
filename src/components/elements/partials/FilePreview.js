import { computed } from 'composition-api'
import useElementComponent from './../../../composables/useElementComponent'
import usePreview from './../../../composables/usePreview'

export default {
  name: 'FilePreview',
  setup(props, context)
  {
    const {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      classes,
      Templates,
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
     * The image's preview when [`view`](#option-view) is `image` or `gallery`. Equals to the `link` if the file is already uploaded and `base64` if only selected or temporarily uploaded.
     * 
     * @type {string}
     */
    const preview = computed(() => {
      return ['image', 'gallery'].indexOf(View.value) !== -1 ? el$.value.preview : null
    })

    return {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      classes,
      Templates,
      template,
      theme,
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
      preview,
      upload,
      remove,
    }
  },
}