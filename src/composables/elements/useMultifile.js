import each from 'lodash/each'
import some from 'lodash/some'
import { computed } from 'vue'

const base = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============
  
  const isDisabled = dependencies.isDisabled
  const add = dependencies.add
  const input = dependencies.input
  const isObject = dependencies.isObject
  const storeFileName = dependencies.storeFileName
  const children$ = dependencies.children$
  
  // ============== COMPUTED ==============
  
  /**
   * Whether any of the files are currently being uploaded to the server (initiated by form submit).
   *
   * @type {boolean}
   */
  const preparing = computed(() => {
    return some(children$.value, { available: true, preparing: true })
  })
  
  /**
   * Whether any of the files are currently being uploaded to the server (initiated by the user).
   *
   * @type {boolean}
   */
  const hasUploading = computed(() => {
    return some(children$.value, { uploading: true })
  })
  
  // =============== METHODS ==============
  
  /**
   * Handles `change` event.
   *
   * @param {Event} e* event object
   * @returns {void}
   * @private
   */
  const handleChange = (e) => {
    if (!e.target || !e.target.files || e.target.files.length == 0 || isDisabled.value) {
      return
    }
    
    each(e.target.files, (file) => {
      add(isObject.value ? {
        [storeFileName.value]: file,
      } : file)
    })
    
    input.value.value = ''
  }
  
  /**
   * Handles `click` event.
   *
   * @returns {void}
   * @private
   */
  const handleClick = () => {
    if (isDisabled.value) {
      return
    }
    
    input.value.click()
  }
  
  return {
    preparing,
    hasUploading,
    handleChange,
    handleClick,
  }
}

export default base