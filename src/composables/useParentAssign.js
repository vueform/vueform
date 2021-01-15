import { toRefs, getCurrentInstance } from 'composition-api'
import normalize from './../utils/normalize'

export default function useParentAssign(props, context, dependencies, options = {})
{
  const { name } = toRefs(props)
  const currentInstance = getCurrentInstance()

  // ============ DEPENDENCIES =============

  const form$ = dependencies.form$

  // =============== METHODS ==============

  // no export
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

  // no export
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