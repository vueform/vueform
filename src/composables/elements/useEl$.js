import { computed, getCurrentInstance, provide, } from 'vue'

const base = function(props, context, dependencies)
{
  const currentInstance = getCurrentInstance()
  
  // ============== COMPUTED ==============
  
  /**
   * The element's component.
   *
   * @type {VueformElement}
   */
  const el$ = computed(() => {
    return currentInstance.proxy
  })
  
  // ============== PROVIDES ==============
  
  /**
   * The element's component.
   *
   * @type {VueformElement}
   */
  provide('el$', el$)
  
  return {
    el$,
  }
}

export default base