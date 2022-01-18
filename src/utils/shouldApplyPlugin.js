import _ from 'lodash'

export default function (name, apply) {
  if (!Array.isArray(apply)) {
    apply = [apply]
  }

  let shouldApply = false

  _.each(apply, (condition) => {
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