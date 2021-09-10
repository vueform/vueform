import { computed, toRefs } from 'composition-api'
import useElementComponent from './../../../composables/useElementComponent'

export default {
  name: 'FileSlotGalleryPreview',
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
    } = useElementComponent(props, context)

    // ============== COMPUTED ==============

    /**
     * 
     * 
     * @private
     */
    const visible = computed(() => {
      return el$.value.stage > 0
    })

    /**
     * 
     * 
     * @private
     */
    const hasLink = computed(() => {
      return el$.value.link && el$.value.clickable
    })

    /**
     * 
     * 
     * @private
     */
    const hasError = computed(() => {
      return el$.value.hasUploadError
    })

    /**
     * 
     * 
     * @private
     */
    const link = computed(() => {
      return el$.value.link
    })

    /**
     * 
     * 
     * @private
     */
    const filename = computed(() => {
      return el$.value.filename
    })

    /**
     * 
     * 
     * @private
     */
    const clickable = computed(() => {
      return el$.value.clickable
    })

    /**
     * 
     * 
     * @private
     */
    const preview = computed(() => {
      return el$.value.preview
    })

    /**
     * 
     * 
     * @private
     */
    const previewLoaded = computed(() => {
      return el$.value.previewLoaded
    })

    /**
     * 
     * 
     * @private
     */
    const uploaded = computed(() => {
      return el$.value.stage > 1
    })

    /**
     * 
     * 
     * @private
     */
    const uploading = computed(() => {
      return el$.value.uploading
    })

    /**
     * 
     * 
     * @private
     */
    const progress = computed(() => {
      return el$.value.progress
    })

    /**
     * 
     * 
     * @private
     */
    const canRemove = computed(() => {
      return el$.value.canRemove || el$.value.uploading
    })

    /**
     * 
     * 
     * @private
     */
    const canUpload = computed(() => {
      return el$.value.canUploadTemp
    })

    /**
     * 
     * 
     * @private
     */
    const uploadText = computed(() => {
      return el$.value.__('laraform.elements.file.upload')
    })

    // =============== METHODS ==============

    /**
     * 
     * 
     * @private
     */
    const upload = () => {
      el$.value.uploadTemp()
    }

    /**
     * 
     * 
     * @private
     */
    const remove = () => {
      if (uploading.value) {
        el$.value.handleAbort()
      }
      else {
        el$.value.handleRemove()
      }

    }

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
      canUpload,
      uploadText,
      upload,
      remove,
    }
  },
}