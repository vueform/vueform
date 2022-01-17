import useElementComponent from './../../../composables/useElementComponent'
import usePreview from './../../../composables/usePreview'

export default {
  name: 'FilePreview',
  setup(props, context)
  {
    const {
      el$,
      form$,
      $size,
      classes,
      mainClass,
      defaultClasses,
      templates,
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

    return {
      el$,
      form$,
      $size,
      classes,
      mainClass,
      defaultClasses,
      templates,
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
      upload,
      remove,
    }
  },
}