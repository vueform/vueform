import { computed, ref, onMounted } from 'vue'

const base = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============
  
  const form$ = dependencies.form$
  
  // ================ DATA ================
  
  /**
   * The axios request when temp is being uploaded.
   *
   * @type {object}
   * @private
   */
  const request = ref(null)
  
  /**
   * The form's axios instance.
   *
   * @type {object}
   * @private
   */
  const axios = ref(null)
  
  // ============== COMPUTED ==============
  
  /**
   * Whether a temp file is currently being uploaded.
   *
   * @type {boolean}
   * @private
   */
  const uploading = computed(() => {
    return request.value !== null
  })
  
  // =============== HOOKS ================
  
  onMounted(() => {
    axios.value = form$.value.$vueform.services.axios
  })
  
  return {
    request,
    axios,
    uploading,
  }
}

export default base