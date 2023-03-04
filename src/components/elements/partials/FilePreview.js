import { computed } from 'vue'
import useElementComponent from './../../../composables/useElementComponent'
import usePreview from './../../../composables/usePreview'

export default {
  name: 'FilePreview',
  props: {
    attrs: {
      required: false,
      type: [Object],
      default: () => ({})
    },
  },
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
      ariaLabelledby,
      upload,
      remove,
      handleKeyup,
    } = usePreview(props, context, {
      el$,
      form$,
    })

    // ============== COMPUTED ==============
    
    /**
     * The image's preview when [`view`](#option-view) is `image` or `gallery`. Equals to the `link` if the file is already uploaded and `base64` if only selected or temporarily uploaded.
     * 
     * @type {string}
     */
    const preview = computed(() => {
      return ['image', 'gallery'].indexOf(el$.value.View) !== -1 ? el$.value.preview : null
    })

    /**
     * The `aria-placeholder` attribute of the preview.
     * 
     * @type {string}
     */
    const ariaPlaceholder = computed(() => {
      let text = el$.value.embed && el$.value.View !== 'gallery' ? undefined : filename.value

      if (hasError.value) {
        if (text) {
          text += ', error'
        } else {
          text = 'error'
        }
      }

      return text
    })

    /**
     * The `aria-roledescription` attribute of the preview.
     * 
     * @type {string}
     */
    const ariaRoledescription = computed(() => {
      return (el$.value.embed && el$.value.View !== 'gallery') || uploaded.value || el$.value.auto ? undefined : uploadText.value
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
      ariaLabelledby,
      ariaPlaceholder,
      ariaRoledescription,
      upload,
      remove,
      handleKeyup,
    }
  },
}