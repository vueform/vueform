import _ from 'lodash'
import { computed, toRefs } from 'composition-api'

const base = function(props, context, dependencies)
{
  const {
    object,
    element
  } = toRefs(props)
      
  // ============== COMPUTED ==============

  /**
    * The schema of a child element.
    * 
    * @type {object}
    * @private
    */
  const prototype = computed(() => {
    return isObject.value
      ? Object.assign({}, object.value, {type: 'object'})
      : element.value || {}
  })

  /**
   * Whether childrens are objects.
   *
   * @type {boolean}
   * @private
   */
  const isObject = computed(() => {
    return !!object.value
  })

  return {
    prototype,
    isObject,
  }
}

const multifile = function(props, context, dependencies, options = {})
{
  const { 
    auto,
    object,
    file,
    fields,
    storeFile,
    storeOrder,
    image,
    view,
   } = toRefs(props)

  // ============ DEPENDENCIES ============

  const isDisabled = dependencies.isDisabled

  // =============== PRIVATE ==============

  const type = computed(() => {
    return options.type || 'file'
  })

  // ============== COMPUTED ==============

  /**
   * The `name` of the child element that stores the filename.
   * 
   * @type {string}
   * @private
   */
  const storeFileName = computed(() => {
    if (storeFile.value) {
      return storeFile.value
    }

    return object.value || _.keys(fields.value).length || storeOrder.value ? 'file' : null
  })

  const isObject = computed(() => {
    return !!object.value || !!storeFileName.value || !!storeOrder.value || !!_.keys(fields.value).length
  })

  const prototype = computed(() => {
    if (!isObject.value) {
      return Object.assign({}, {
        type: type.value,
        auto: auto.value,
        image: image.value,
        view: view.value,
        layout: view.value === 'gallery' ? 'ElementLayoutInline' : 'ElementLayout',
        disabled: isDisabled.value,
      }, file.value)
    }

    return {
      type: 'object',
      schema: Object.assign({},
        // File
        {[storeFileName.value]: Object.assign({}, {
          type: type.value,
          auto: auto.value,
          image: image.value,
          view: view.value,
          layout: view.value === 'gallery' ? 'ElementLayoutInline' : 'ElementLayout',
          embed: true,
          disabled: isDisabled.value,
        }, file.value)},

        // Order
        storeOrder.value ? {
          [storeOrder.value]: {
            type: 'hidden',
            meta: true
          }
        } : {},

        // Other fields
        fields.value
      )
    }
  })

  return {
    storeFileName,
    isObject,
    prototype,
  }
}

export {
  multifile,
}

export default base