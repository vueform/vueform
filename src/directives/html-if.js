import _ from 'lodash'

export default {
  mounted: function (el, binding, vnode) {
    let key = _.keys(binding.value)[0]
    let condition = binding.value[key]

    if (condition === true) {
      el.innerHTML = binding.instance[key]
    }
  },
  update: function (el, binding, vnode) {
    let key = _.keys(binding.value)[0]
    let condition = binding.value[key]

    if (condition === true) {
      el.innerHTML = binding.instance[key]
    }
    else {
      // @todo
      // binding.instance.$nextTick(() => {
      //   let html = ''

      //   _.each(vnode.context.$children, (child) => {
      //     html += child.$el.outerHTML
      //   })

      //   el.innerHTML = html
      // })
    }
  },
}