import { computed, toRefs } from 'composition-api'

const base = function(props, context, dependencies)
{
  const { name } = toRefs(props)

  // ============== COMPUTED ==============

  /**
   * 
   * 
   * @private
   */
  const parent = computed(() => {
    const getParent = (parent, getParent) => {
      if (parent && parent.el$ !== undefined) {
        return parent.el$
      } else if (parent.$parent) {
        return getParent(parent.$parent, getParent)
      } else {
        return null
      }
    }

    return getParent(context.parent, getParent)
  })

  /**
   * The path of the element using dot `.` syntax.
   * 
   * @type {string} 
   */
  const path = computed(() => {

    return parent.value && parent.value.path ? parent.value.path + '.' + name.value : name.value
  })

  /**
   * 
   * 
   * @private
   */
  const flat = computed(() => {
    return false
  })

  return {
    parent,
    path,
    flat,
  }
}

const group = function (props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const {
    path
  } = base(props, context, dependencies)

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