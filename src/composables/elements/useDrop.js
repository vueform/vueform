import each from 'lodash/each'
import checkFileType from './../../utils/checkFileType'
import { computed, toRefs } from 'vue'

const base = function(props, context, dependencies)
{
  const {
    accept,
    auto,
  } = toRefs(props)
  
  // ============ DEPENDENCIES =============
  
  const update = dependencies.update
  const isDisabled = dependencies.isDisabled
  const uploadTemp = dependencies.uploadTemp
  
  // ============== COMPUTED ==============
  
  /**
   * Whether `drop` is enabled and browser supports dragging.
   *
   * @type {boolean}
   * @private
   */
  const canDrop = computed(() => {
    let div = document.createElement('div')
    
    return (('draggable' in div)
        || /* istanbul ignore next: failsafe only, can not influence div from outside */ ('ondragstart' in div && 'ondrop' in div))
      && 'FormData' in window
      && 'FileReader' in window
  })
  
  // =============== METHODS ==============
  
  /**
   * Handles the `drop` event.
   *
   * @param {Event} e* event object
   * @returns {void}
   * @private
   */
  const handleDrop = (e) => {
    if (isDisabled.value) {
      return
    }
    
    let file = e.dataTransfer.files[0]
    
    if (!checkFileType(file, accept.value)) {
      return
    }
    
    update(file || /* istanbul ignore next: failsafe only */ null)
    
    if (auto.value) {
      uploadTemp()
    }
    
    file.value = null
  }
  
  return {
    canDrop,
    handleDrop,
  }
}

const multifile = function(props, context, dependencies)
{
  const {
    accept,
  } = toRefs(props)
  
  const {
    canDrop,
  } = base(props, context, dependencies)
  
  // ============ DEPENDENCIES =============
  
  const add = dependencies.add
  const isDisabled = dependencies.isDisabled
  const isObject = dependencies.isObject
  const storeFileName = dependencies.storeFileName
  
  // =============== METHODS ==============
  
  const handleDrop = (e) => {
    if (!e.dataTransfer || !e.dataTransfer.files || e.dataTransfer.files.length == 0 || isDisabled.value) {
      return
    }
    
    each(e.dataTransfer.files, (file) => {
      if (!checkFileType(file, accept.value)) {
        return
      }
      
      add(isObject.value ? {
        [storeFileName.value]: file,
      } : file)
    })
  }
  
  return {
    canDrop,
    handleDrop,
  }
}

export {
  multifile,
}

export default base