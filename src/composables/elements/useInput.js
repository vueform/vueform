import { ref } from 'composition-api'

const base = function(props, context, dependencies)
{
  // ================ DATA ================

  /**
   * 
   * 
   * @type {HTMLElement} 
   */
  const input = ref(null)

  return {
    input,
  }
}

export default base