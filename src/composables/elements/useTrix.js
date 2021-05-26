import { toRefs, computed, onMounted, ref } from 'composition-api'

const base = function (props, context, dependencies)
{
  const {
    endpoint,
  } = toRefs(props)

  // ============ DEPENDENCIES ============
  
  const form$ = dependencies.form$
  const input = dependencies.input

  // ================ DATA ================

  const focused = ref(false)

  // ============== COMPUTED ==============

  /**
  * Endpoint to be called to upload attachments. Defaults to config's `config.endpoints.elements`<br>`.trix.attachment`.
  * 
  * @type {string}
  * @default "..."
  */
  const trixEndpoint = computed(() => {
    return endpoint.value || form$.value.$laraform.config.endpoints.elements.trix.attachment
  })


  // =============== HOOKS ================

  onMounted(() => {
    input.value.trix$.addEventListener('focus', () => {
      focused.value = true
    })

    input.value.trix$.addEventListener('blur', () => {
      focused.value = false
    })
  })

  return {
    trixEndpoint,
    focused,
  }
}

export default base