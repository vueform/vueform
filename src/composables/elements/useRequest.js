import { computed, ref, onMounted } from 'composition-api'

const base = function (props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$

  // ================ DATA ================

  /**
   * 
   * 
   * @private
   */
  const request = ref(null)

  /**
   * 
   * 
   * @private
   */
  const axios = ref(null)

  // ============== COMPUTED ==============

  /**
   * 
   * 
   * @private
   */
  const uploading = computed(() => {
    return request.value !== null
  })

  // =============== HOOKS ================

  onMounted(() => {
    axios.value = form$.value.$laraform.services.axios
  })

  return {
    request,
    axios,
    uploading,
  }
}

export default base