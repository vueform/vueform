import keys from 'lodash-es/keys'
import { computed, toRefs } from 'vue'

const base = function(props, context, dependencies)
{
  const {
    object,
    element,
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
      ? Object.assign({}, object.value, { type: 'object' })
      : element.value || {}
  })
  
  /**
   * Whether children are objects.
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

const multifile = function(props, context, dependencies, /* istanbul ignore next */ options = {})
{
  const {
    auto,
    object,
    file,
    fields,
    storeFile,
    storeOrder,
    view,
    
    clickable,
    url,
    previewUrl,
    uploadTempEndpoint,
    removeTempEndpoint,
    removeEndpoint,
    params,
    softRemove,
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
    /* istanbul ignore else */
    if (storeFile.value) {
      return storeFile.value
    }
    
    //@todo:adam unreachable code, storeFile is never undefined
    /* istanbul ignore next: fields.value is hardcoded {} */
    return object.value || keys(fields.value).length || storeOrder.value ? 'file' : null
  })
  
  const isObject = computed(() => {
    return !!object.value || !!storeOrder.value || !!keys(fields.value).length
  })
  
  const prototype = computed(() => {
    let fileSchema = {
      type: type.value,
      auto: auto.value,
      view: view.value,
      layout: view.value === 'gallery' ? 'ElementLayoutInline' : 'ElementLayout',
      disabled: isDisabled.value,
      
      clickable: clickable.value,
      url: url.value,
      previewUrl: previewUrl.value,
      uploadTempEndpoint: uploadTempEndpoint.value,
      removeTempEndpoint: removeTempEndpoint.value,
      removeEndpoint: removeEndpoint.value,
      params: params.value,
      softRemove: softRemove.value,
    }
    
    if (!isObject.value) {
      return Object.assign({}, fileSchema, file.value)
    }
    
    return {
      type: 'object',
      schema: Object.assign({},
        // File
        {
          [storeFileName.value]: Object.assign({}, fileSchema, {
            embed: true,
          }, file.value),
        },
        
        // Order
        storeOrder.value ? {
          [storeOrder.value]: {
            type: 'hidden',
            meta: true,
          },
        } : {},
        
        // Other fields
        fields.value,
      ),
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