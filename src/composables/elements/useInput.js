import { ref } from 'composition-api'

const base = function(props, context, dependencies)
{
  // ================ DATA ================

  /**
   * The main input field of the element.
   * 
   * @type {HTMLElement} 
   */
  const input = ref(null)

  return {
    input,
  }
}

export default base