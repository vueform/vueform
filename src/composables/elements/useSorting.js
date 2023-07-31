import { ref } from 'vue'

const base = function(props, context, dependencies)
{
  // ================ DATA ================
  
  /**
   * Whether the list is currently being sorted (an item is dragged).
   *
   * @type {boolean}
   */
  const sorting = ref(false)
  
  return {
    sorting,
  }
}

export default base