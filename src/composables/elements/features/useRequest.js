import { computed, ref, onMounted } from 'composition-api'

const base = function (props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$

  // ================ DATA ================

  const request = ref(null)

  const axios = ref(null)

  // ============== COMPUTED ==============

  const uploading = computed(() => {
    return request.value !== null
  })

  // =============== HOOKS ================

  onMounted(() => {
    axios.value = form$.value.$laraform.services.axios
  })

  return {
    // Data
    request,
    axios,

    // Computed
    uploading,
  }
}

export default base