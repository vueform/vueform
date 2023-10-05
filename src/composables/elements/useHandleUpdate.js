import { toRefs } from 'vue'

const base = function(props, context, dependencies)
{
  const { lazy } = toRefs(props)
  
  // ============ DEPENDENCIES ============
  
  const value = dependencies.value
  
  // =============== METHODS ==============
  
  /**
   * Handles `update` event if not lazy.
   *
   * @param {string} val* value of the element
   * @returns {void}
   * @private
   */
  const handleUpdate = (val) => {
    if (lazy.value) {
      return
    }
    
    value.value = val
  }
  
  return {
    handleUpdate,
  }
}

export default base