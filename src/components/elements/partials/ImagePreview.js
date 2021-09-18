import { computed } from 'composition-api'
import useElementComponent from './../../../composables/useElementComponent'
import usePreview from './../../../composables/usePreview'

export default {
  name: 'ImagePreview',
  setup(props, context)
  {
    const {
      el$,
      form$,
      classes,
      mainClass,
      defaultClasses,
      components,
      theme,
    } = useElementComponent(props, context, {}, {
      addClasses: [
        ['image', 'image_link', computed(() => hasLink.value)],
        ['image', 'image_static', computed(() => !hasLink.value)],
      ]
    })

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

    /**
     * Whether the preview file has been loaded by the browser when the file has already been uploaded or has only been selected.
     * 
     * @type {boolean}
     * @private
     */
    const previewLoaded = computed(() => {
      return el$.value.previewLoaded
    })

    return {
      el$,
      form$,
      classes,
      mainClass,
      defaultClasses,
      components,
      theme,
      visible,
      hasLink,
      hasError,
      link,
      filename,
      clickable,
      preview,
      previewLoaded,
      uploaded,
      uploading,
      progress,
      canRemove,
      canUploadTemp,
      uploadText,
      preview,
      previewLoaded,
      upload,
      remove,
    }
  },
}