import { computed, toRefs } from 'composition-api'

const base = function(props, context, dependencies)
{
  // ============== COMPUTED ===============

  const nullValue = computed(() => {
    return null
  })
  
  return {
    // Computed
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
    // Computed
    nullValue,
  }
}

const boolean = function(props, context, dependencies)
{
  // ============ DEPENDENCIES =============

  const falseValue = dependencies.falseValue

  // ============== COMPUTED ===============

  const nullValue = computed(() => {
    return falseValue.value
  })
  
  return {
    // Computed
    nullValue,
  }
}

const min = function(props, context, dependencies)
{
  // ============ DEPENDENCIES =============

  const min = dependencies.min

  // ============== COMPUTED ===============

  const nullValue = computed(() => {
    return min.value
  })
  
  return {
    // Computed
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

    _.each(languages.value, (code) => {
      value[code] = null
    })

    return value
  })
  
  return {
    // Computed
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
    // Computed
    nullValue,
  }
}

export {
  array,
  boolean,
  min,
  multilingual,
  object,
}

export default base