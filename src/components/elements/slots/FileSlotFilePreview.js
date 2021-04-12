import { computed, toRefs } from 'composition-api'
import useElementComponent from './../../../composables/useElementComponent'

export default {
  name: 'FileSlotFilePreview',
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

    const visible = computed(() => {
      return el$.value.stage > 0
    })

    const hasLink = computed(() => {
      return el$.value.link && el$.value.clickable
    })

    const hasError = computed(() => {
      return el$.value.hasUploadError
    })

    const link = computed(() => {
      return el$.value.link
    })

    const filename = computed(() => {
      return el$.value.filename
    })

    const uploaded = computed(() => {
      return el$.value.stage > 1
    })

    const uploading = computed(() => {
      return el$.value.uploading
    })

    const progress = computed(() => {
      return el$.value.progress
    })

    const canRemove = computed(() => {
      return el$.value.progress || el$.value.stage == 1
    })

    const canUpload = computed(() => {
      return el$.value.canUploadTemp
    })

    const uploadText = computed(() => {
      return el$.value.__('laraform.elements.file.upload')
    })

    // =============== METHODS ==============

    const upload = () => {
      el$.value.uploadTemp()
    }

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