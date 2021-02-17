import { computed, toRefs } from 'composition-api'

const base = function(props, context, dependencies)
{
  const {
    layout,
    inline,
  } = toRefs(props)

  // ============== COMPUTED ==============

  const elementLayout = computed(() => {
    return inline.value || !layout.value ? 'ElementLayoutInline' : layout.value
  })

  return {
    elementLayout,
  }
}

export default base