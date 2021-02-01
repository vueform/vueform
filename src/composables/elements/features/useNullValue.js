import { computed, toRefs } from 'composition-api'

const base = function(props, context, dependencies)
{
  // ============== COMPUTED ===============

  /**
   * 
   * 
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
  // ============ DEPENDENCIES =============

  const falseValue = dependencies.falseValue

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
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES =============

  const min = dependencies.min

  // ============== COMPUTED ===============

  const nullValue = computed(() => {
    return schema.value.default !== undefined && _.isArray(schema.value.default)
      ? schema.value.default.map(v => min.value)
      : min.value
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

    _.each(languages.value, (code) => {
      value[code] = null
    })

    return value
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

export {
  array,
  boolean,
  min,
  multilingual,
  object,
}

export default base