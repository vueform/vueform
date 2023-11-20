import each from 'lodash/each'
import difference from 'lodash/difference'

export default function (name, plugin) {
  if (!plugin.apply && difference(Object.keys(plugin), ['config', 'install']).length > 0) {
    return true
  }

  let apply = plugin.apply

  if (!Array.isArray(apply)) {
    apply = [apply]
  }

  let shouldApply = false

  each(apply, (condition) => {
    if (typeof condition === 'string' && condition === name) {
      shouldApply = true
      return false
    } else if (typeof condition === 'object' && condition instanceof RegExp && name.match(condition)) {
      shouldApply = true
      return false
    }
  })
  
  return shouldApply
} 