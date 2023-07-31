import { ref } from 'vue'

const base = function(props, context, dependencies)
{
  // ================ DATA ================
  
  /**
   * Whether async file removing request is in progress.
   *
   * @type {boolean}
   */
  const removing = ref(false)
  
  return {
    removing,
  }
}

export default base