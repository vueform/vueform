import Sortable from 'sortablejs'

const vueVersion = function(binding, vnode) {
  if (vnode.context && vnode.context.$laraform && vnode.context.$laraform.vue == 2) {
    return 2
  }

  return 3
}

const component = function(binding, vnode) {
  return vueVersion(binding, vnode) == 2 ? vnode.context : binding.instance
}

const add = function (el, binding, vnode) {
  if (binding.value && binding.value.sort === false) {
    return
  }

  component(binding, vnode).sortableInstance = Sortable.create(el, binding.value || {})
}

const update = function (el, binding, vnode) {
  let enabled = binding.value.sort == true
  let parent = component(binding, vnode)
  let sortableInstance = parent.sortableInstance

  if (enabled && (sortableInstance === undefined || sortableInstance.el === null)) {
    parent.sortableInstance = Sortable.create(el, binding.value || {})
  }
  else if (!enabled && sortableInstance !== undefined && sortableInstance.el !== null) {
    parent.sortableInstance.destroy()
  }
}

export default {
  // Vue2
  bind: add,
  update: update,

  // Vue3
  mounted: add,
  updated: update,
}