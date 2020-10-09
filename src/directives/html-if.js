import _ from 'lodash'

const vueVersion = function(binding, vnode) {
  if (vnode.context && vnode.context.$laraform && vnode.context.$laraform.vue == 2) {
    return 2
  }

  return 3
}

const add = function(el, binding, vnode) {
  let key = _.keys(binding.value)[0]
  let condition = binding.value[key]

  if (condition === true) {
    el.innerHTML = vueVersion(binding, vnode) == 2 ? vnode.context[key] : binding.instance[key]
  }
}

const update = function(el, binding, vnode) {
  let key = _.keys(binding.value)[0]
  let condition = binding.value[key]

  if (condition === true) {
    el.innerHTML = vueVersion(binding, vnode) == 2 ? vnode.context[key] : binding.instance[key]
  }
  else {
    binding.instance.$nextTick(() => {
      let html = ''

      _.each(vnode.context.$children, (child) => {
        html += child.$el.outerHTML
      })

      el.innerHTML = html
    })
  }
}

export default {
  bind: add,
  mounted: add,
  update: update,
  updated: update,
}