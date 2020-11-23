import { computed, toRefs } from 'composition-api'
import usePath from './usePath'

export default function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const { path } = usePath(props, context, dependencies)

  // ============== COMPUTED ==============

  const flat = computed(() => {
    return true
  })

  return {
    path,
    flat,
  }
}