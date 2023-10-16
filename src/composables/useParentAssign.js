import { toRefs, getCurrentInstance } from 'vue'
import normalize from './../utils/normalize'

const base = function(props, context, dependencies, options = {})
{
  const { name } = toRefs(props)
  const currentInstance = getCurrentInstance()

  // ============ DEPENDENCIES =============

  const form$ = dependencies.form$

  // =============== METHODS ==============

  /**
  * Sets the component to the parent as if `refs` were used.
  * 
  * @param {VNode} $parent parent component
  * @param {function} assignToParent the assignToParent function for recursion
  * @returns {void}
  * @private
  */
  const assignToParent = ($parent, assignToParent) => {
    if ($parent.children$Array) {
      $parent.children$Array.push(currentInstance.proxy)
    }
    else if ($parent.elements$) {
      form$.value.$set($parent.elements$, name.value, currentInstance.proxy)
    }
    else {
      assignToParent($parent.$parent, assignToParent)
    }
  }

  /**
  * Removes the component from the parent.
  * 
  * @param {VNode} $parent parent component
  * @param {function} removeFromParent the removeFromParent function for recursion
  * @private
  */
  const removeFromParent = ($parent, removeFromParent) => {
    if ($parent.children$Array) {
      $parent.children$Array.splice($parent.children$Array.map(e$=>normalize(e$.name)).indexOf(normalize(name.value)), 1)
    }
    else if ($parent.elements$) {
      form$.value.$delete($parent.elements$, name.value)
    }
    else {
      removeFromParent($parent.$parent, removeFromParent)
    }
  }

  return {
    assignToParent,
    removeFromParent,
  }
}

export default base