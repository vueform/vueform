import { computed, toRefs, getCurrentInstance } from 'composition-api'

const base = function(props, context, dependencies)
{
  const {
    name
  } = toRefs(props)
  const currentInstance = getCurrentInstance()

  // ============== COMPUTED ==============

  /**
   * 
   * 
   * @private
   */
  const parent = computed(() => {
    const getParent = (parent, getParent) => {
      if (parent && ((context.expose !== undefined && parent.$options.name && parent.$options.name.match(/^[a-zA-Z\-]*Element$/)) || (context.expose === undefined && parent.hasOwnProperty('el$') && typeof parent.el$ !== 'function'))) {
        return parent.el$
      } else if (parent.$parent) {
        return getParent(parent.$parent, getParent)
      } else {
        return null
      }
    }

    return getParent(currentInstance.parent.proxy, getParent)
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
   * @type {string} 
   */
  const dataPath = computed(() => {
    return parent.value && parent.value.dataPath ? parent.value.dataPath + '.' + name.value : name.value
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
    dataPath,
    flat,
  }
}

const group = function (props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const {
    path,
    parent,
  } = base(props, context, dependencies)

  // ============== COMPUTED ==============

  /**
   * 
   * 
   * @type {string} 
   */
  const dataPath = computed(() => {

    return parent.value && parent.value.dataPath ? parent.value.dataPath : null
  })

  const flat = computed(() => {
    return true
  })

  return {
    path,
    dataPath,
    flat,
    parent,
  }
}

export {
  group,
}

export default base