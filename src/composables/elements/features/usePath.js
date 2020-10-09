import { computed, toRefs } from 'composition-api'

export default function usePath(props, context, dependencies)
{
  const { parent, name } = toRefs(props)

  // ============== COMPUTED ==============

  /**
   * The path of the element using dot `.` syntax.
   * 
   * @type {string} 
   */
  const path = computed(() => {
    return parent.value && parent.value.path ? parent.value.path + '.' + name.value : name.value
  })

  return {
    path,
  }
}