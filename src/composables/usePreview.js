import _ from 'lodash'
import { computed, nextTick } from 'vue'

const base = function(props, context, dependencies)
{
  const el$ = dependencies.el$

  // ============== COMPUTED ==============

  /**
   * Whether the preview component should be visible.
   * 
   * @type {boolean}
   */
  const visible = computed(() => {
    return el$.value.stage > 0
  })

  /**
   * Whether the file has link and should be clickable.
   * 
   * @type {boolean}
   */
  const hasLink = computed(() => {
    return el$.value.link && el$.value.clickable
  })

  /**
   * Whether the preview has upload error.
   * 
   * @type {boolean}
   */
  const hasError = computed(() => {
    return el$.value.hasUploadError
  })

  /**
   * The link for the file.
   * 
   * @type {string}
   */
  const link = computed(() => {
    return el$.value.link
  })

  /**
   * The filename to display.
   * 
   * @type {string}
   */
  const filename = computed(() => {
    return el$.value.filename && typeof el$.value.filename === 'string'
      ? el$.value.filename.split('\\').pop().split('/').pop()
      : el$.value.filename
  })

  /**
   * Whether the file should be clickable if it is already permantently uploaded.
   * 
   * @type {boolean}
   */
  const clickable = computed(() => {
    return el$.value.clickable
  })

  /**
   * Whether the temporary or permanent file is uploaded.
   * 
   * @type {boolean}
   */
  const uploaded = computed(() => {
    return el$.value.stage > 1
  })

  /**
   * Whether the file is currently uploading.
   * 
   * @type {boolean}
   */
  const uploading = computed(() => {
    return el$.value.uploading
  })

  /**
   * The percentage of progress when the file is being temporarily uploaded (0-100).
   * 
   * @type {number}
   */
  const progress = computed(() => {
    return el$.value.progress
  })

  /**
   * Whether the file can be removed. 
   * 
   * @type {boolean}
   */
  const canRemove = computed(() => {
    return (el$.value.canRemove || el$.value.uploading) && !el$.value.isDisabled
  })

  /**
   * Whether temporary file can be uploaded.
   * 
   * @type {boolean}
   */
  const canUploadTemp = computed(() => {
    return el$.value.canUploadTemp
  })

  /**
   * The text for upload button. Can be also changed in the locale file: `vueform.elements.file.upload`
   * 
   * @type {string}
   */
  const uploadText = computed(() => {
    return el$.value.__('vueform.elements.file.upload')
  })

  /**
   * The `aria-labelledby` attribute of the preview.
   * 
   * @type {string}
   */
  const ariaLabelledby = computed(() => {
    return el$.value.labelId
  })

  /**
   * The `aria-placeholder` attribute of the preview.
   * 
   * @type {string}
   */
  const ariaPlaceholder = computed(() => {
    return filename.value
  })

  // =============== METHODS ==============

  /**
   * Upload the currently selected file as temporary.
   * 
   * @returns {void}
   */
  const upload = () => {
    el$.value.uploadTemp()
  }

  /**
   * Remove the file.
   * 
   * @returns {void}
   */
  const remove = () => {
    if (uploading.value) {
      el$.value.handleAbort()
    }
    else {
      el$.value.handleRemove()
    }
  }

  /**
   * Handle the keyup event of the preview.
   */
  const handleKeyup = async (e) => {
    switch (e.key) {
      case 'Enter':
        remove()

        if (!el$.value.canSelect) {
          return
        }

        await nextTick()
        document.querySelector(`#${el$.value.fieldId}`).focus()
        break
    }
  }

  // =============== HOOKS ================

  return {
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
    ariaPlaceholder,
    upload,
    remove,
    handleKeyup,
  }
}

export default base