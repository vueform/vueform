import isArray from 'lodash-es/isArray'
import each from 'lodash-es/each'
import { computed, toRefs } from 'vue'

const base = function(props, context, dependencies)
{
  // ============== COMPUTED ===============
  
  /**
   * The null value of the element.
   *
   * @type {any}
   * @private
   */
  const nullValue = computed(() => {
    return null
  })
  
  return {
    nullValue,
  }
}

const array = function(props, context, dependencies)
{
  // ============== COMPUTED ===============
  
  const nullValue = computed(() => {
    return []
  })
  
  return {
    nullValue,
  }
}

const boolean = function(props, context, dependencies)
{
  const {
    falseValue,
  } = toRefs(props)
  
  
  // ============== COMPUTED ===============
  
  const nullValue = computed(() => {
    return falseValue.value
  })
  
  return {
    nullValue,
  }
}

const min = function(props, context, dependencies)
{
  const {
    min,
    default: default_,
  } = toRefs(props)
  
  // ============== COMPUTED ===============
  
  const nullValue = computed(() => {
    return default_.value !== undefined && isArray(default_.value)
      ? default_.value.map(v => min.value)
      : min.value
  })
  
  return {
    nullValue,
  }
}

const object = function(props, context, dependencies)
{
  // ============== COMPUTED ===============
  
  const nullValue = computed(() => {
    return {}
  })
  
  return {
    nullValue,
  }
}

const location = function(props, context, dependencies)
{
  // ============== COMPUTED ===============
  
  const nullValue = computed(() => {
    return {
      country: null,
      country_code: null,
      state: null,
      state_code: null,
      city: null,
      zip: null,
      address: null,
      formatted_address: null,
      lat: null,
      lng: null,
    }
  })
  
  return {
    nullValue,
  }
}

/* istanbul ignore next: unimplemented */
const address = function(props, context, dependencies)
{
  // ============== COMPUTED ===============
  
  const nullValue = computed(() => {
    return {
      address: null,
      address2: null,
      zip: null,
      city: null,
      state: null,
      country: null,
    }
  })
  
  return {
    nullValue,
  }
}

const multilingual = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============
  
  const languages = dependencies.languages
  
  // ============== COMPUTED ===============
  
  const nullValue = computed(() => {
    var value = {}
    
    each(languages.value, (code) => {
      value[code] = null
    })
    
    return value
  })
  
  return {
    nullValue,
  }
}

export {
  array,
  boolean,
  min,
  multilingual,
  object,
  location,
  address,
}

export default base