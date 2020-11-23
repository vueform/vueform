import { computed, toRefs } from 'composition-api'

const base = function(props, context, dependencies)
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

  const flat = computed(() => {
    return false
  })

  return {
    path,
    flat,
  }
}

const group = function (props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const { path } = base(props, context, dependencies)

  // ============== COMPUTED ==============

  const flat = computed(() => {
    return true
  })

  return {
    path,
    flat,
  }
}

export {
  group,
}

export default base