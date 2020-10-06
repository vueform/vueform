import { computed, toRefs } from 'composition-api'

export default function usePath(props, context, dependencies)
{
  const { parent, name } = toRefs(props.schema)

  // ============== COMPUTED ==============

  /**
   * The path of the element using dot `.` syntax.
   * 
   * @type {string} 
   */
  const path = computed(() => {
    return parent && parent.path ? parent.path + '.' + name : name
  })

  return {
    path,
  }
}