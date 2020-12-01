import { computed, toRefs } from 'composition-api'
import computedOption from '../../../utils/computedOption'

const base = function(props, context, dependencies)
{
  const { schema } = toRefs(props)
      
  // ============== COMPUTED ==============

  /**
    * The schema of a child.
    * 
    * @type {object}
    */
  const prototype = computed(() => {
    return isObject.value
      ? Object.assign({}, schema.value.object, {type: 'object'})
      : schema.value.element
  })

  /**
   * Determines if the list items are objects.
   *
   * @type {boolean}
   */
  const isObject = computed(() => {
    return schema.value.object !== undefined
  })

  return {
    // Computed
    prototype,
    isObject,
  }
}

const multifile = function(props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES ============

  const storeOrder = dependencies.storeOrder

  // ============== COMPUTED ==============

  const object = computedOption('object', schema, false)

  const file = computedOption('file', schema, {})

  const storeFile = computedOption('storeFile', schema, object.value ? 'file' : null)

  const fields = computedOption('fields', schema, {})

  /**
    * The schema of a child.
    * 
    * @type {object}
    */
  const prototype = computed(() => {
    if (!isObject.value) {
      return Object.assign({}, {
        type: 'file',
      }, file.value)
    }

    return {
      type: 'object',
      schema: Object.assign({},
        // File
        {[storeFile.value]: Object.assign({}, {
          type: 'file'
        }, file.value)},

        // Order
        storeOrder.value ? {
          [storeOrder.value]: {
            type: 'meta'
          }
        } : {},

        // Other fields
        fields.value
      )
    }
  })

  /**
   * Determines if the list items are objects.
   *
   * @type {boolean}
   */
  const isObject = computed(() => {
    return object.value || storeFile.value || storeOrder.value || _.keys(fields.value).length
  })

  return {
    // Computed
    object,
    file,
    storeFile,
    fields,
    prototype,
    isObject,
  }
}

export {
  multifile,
}

export default base