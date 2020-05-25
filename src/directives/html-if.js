import _ from 'lodash'

export default {
  bind: function (el, binding, vnode) {
    let key = _.keys(binding.value)[0]
    let condition = binding.value[key]

    if (condition === true) {
      el.innerHTML = vnode.context[key]
    }

    vnode.context.$watch(() => { return vnode.context[key] }, () => {
      if (condition === true) {
        el.innerHTML = vnode.context[key]
      }
    }, { deep: true })
  }
}