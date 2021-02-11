import { toRefs, computed } from 'composition-api'

const base = function (props, context, dependencies)
{
  const {
    name,
    id,
  } = toRefs(props)

  // ============== COMPUTED ==============
  
  const fieldId = computed(() => {
    return id.value || name.value
  })

  return {
    fieldId,
  }
}

export default base