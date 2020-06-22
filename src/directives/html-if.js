import _ from 'lodash'

export default {
  bind: function (el, binding, vnode) {
    let key = _.keys(binding.value)[0]
    let condition = binding.value[key]

    if (condition === true) {
      el.innerHTML = vnode.context[key]
    }
  },
  update: function (el, binding, vnode) {
    let key = _.keys(binding.value)[0]
    let condition = binding.value[key]

    if (condition === true) {
      el.innerHTML = vnode.context[key]
    }
    else {
      vnode.context.$nextTick(() => {
        let html = ''

        _.each(vnode.context.$children, (child) => {
          html += child.$el.outerHTML
        })

        el.innerHTML = html
      })
    }
  },
}