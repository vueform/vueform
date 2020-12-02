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

const multifile = function(props, context, dependencies, options = {})
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES ============

  const storeOrder = dependencies.storeOrder

  // =============== PRIVATE ==============

  const type = computed(() => {
    return options.type || 'file'
  })

  // ============== COMPUTED ==============

  const auto = computedOption('auto', schema, true)

  const object = computedOption('object', schema, false)

  const file = computedOption('file', schema, {})

  const fields = computedOption('fields', schema, {})

  const storeFile = computedOption('storeFile', schema, object.value || _.keys(fields.value).length || storeOrder.value ? 'file' : null)

  /**
    * The schema of a child.
    * 
    * @type {object}
    */
  const prototype = computed(() => {
    if (!isObject.value) {
      return Object.assign({}, {
        type: type.value,
        auto: auto.value,
      }, file.value)
    }

    return {
      type: 'object',
      schema: Object.assign({},
        // File
        {[storeFile.value]: Object.assign({}, {
          type: type.value,
          auto: auto.value,
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
    return !!object.value || !!storeFile.value || !!storeOrder.value || !!_.keys(fields.value).length
  })

  return {
    // Computed
    auto,
    object,
    file,
    storeFile,
    fields,
    prototype,
    isObject,
  }
}

const gallery = function(props, context, dependencies)
{
  const useMultifile = multifile(props, context, dependencies, {
    type: 'image'
  })

  return {
    ...useMultifile,
  }
}

export {
  multifile,
  gallery,
}

export default base