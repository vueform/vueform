import Condition from './../utils/condition'

const Directive = (el, binding, vnode) => {
  let watcher = null

  let conditions = binding.value

  if (!_.isArray(conditions)) {
    conditions = [conditions]
  }

  let forwardConditions = () => {
    _.each(elements(), (element) => {
      _.each(conditions, (condition) => {
        element.componentInstance.conditions.push(condition)
      })
    })
  }

  let elements = () => {
    let doms = []

    var collectFields = (children) => {
      _.each(children, (child) => {
        if (conditionable(child)) {
          doms.push(child)
        }
        else if (child.children !== undefined && child.children) {
          collectFields(child.children)
        }
      })
    }

    collectFields(vnode.children)

    return doms
  }

  let conditionable = (child) => {
    return child.componentInstance !== undefined
      && child.componentInstance.conditions !== undefined
  }

  let review = () => {
    el.style.display = check() ? '' : 'none'
  }

  let check = () => {
    return !_.some(conditions, (condition) => {
      return !Condition.check(condition, null, vnode.context.form$ || vnode.context)
    })
  }

  let watch = () => {
    watcher = vnode.context.$watch('data', () => {
      review()
    }, { deep: true })
  }

  forwardConditions()
  review()
  watch()
}

export default {
  inserted(el, binding, vnode) {
    return Directive(el, binding, vnode)
  },
}