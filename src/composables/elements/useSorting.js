import { ref } from 'composition-api'

const base = function(props, context, dependencies)
{
  // ================ DATA ================

  /**
   * 
   * 
   * @type {boolean}
   */
  const sorting = ref(false)

  return {
    sorting,
  }
}

export default base