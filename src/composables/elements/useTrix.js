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

  /**
   * Whether the editor is focused.
   * 
   * @type {boolean}
   */
  const focused = ref(false)

  // ============== COMPUTED ==============

  /**
  * The endpoint that uploads attachment. Can be changed by setting [`endpoint`](#endpoint) option.
  * 
  * @type {string}
  * @default `config.endpoints.elements`
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