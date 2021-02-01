import computedOption from './../../../utils/computedOption'
import { toRefs } from 'composition-api'

const base = function (props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES ============
  
  const form$ = dependencies.form$

  // ============== COMPUTED ==============

  /**
  * Accepted attachment extensions. Example: `['jpeg', 'png', 'gif']`.
  * 
  * @type {array}
  * @default []
  */
  const accept = computedOption('accept', schema, [])

  /**
  * Accepted attachment mime types. Example: `['image/jpeg', 'image/png', 'image/gif']`.
  * 
  * @type {array}
  * @default []
  */
  const acceptMimes = computedOption('acceptMimes', schema, [])

  /**
  * Endpoint to be called to upload attachments. Defaults to config's `config.endpoints.elements`<br>`.trix.attachment`.
  * 
  * @type {string}
  * @default '...'
  */
  const endpoint = computedOption('endpoint', schema, form$.value.$laraform.endpoints.elements.trix.attachment)

  return {
    accept,
    acceptMimes,
    endpoint,
  }
}

export default base