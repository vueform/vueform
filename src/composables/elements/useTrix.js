import { toRefs, computed } from 'composition-api'

const base = function (props, context, dependencies)
{
  const {
    endpoint
  } = toRefs(props)

  // ============ DEPENDENCIES ============
  
  const form$ = dependencies.form$

  // ============== COMPUTED ==============

  /**
  * Endpoint to be called to upload attachments. Defaults to config's `config.endpoints.elements`<br>`.trix.attachment`.
  * 
  * @type {string}
  * @default "..."
  */
  const trixEndpoint = computed(() => {
    return endpoint.value || form$.value.$laraform.endpoints.elements.trix.attachment
  })

  return {
    trixEndpoint,
  }
}

export default base