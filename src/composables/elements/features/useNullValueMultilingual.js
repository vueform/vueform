import { computed, toRefs } from 'composition-api'

export default function(props, context, dependencies)
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