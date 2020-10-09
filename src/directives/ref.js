const vueVersion = function(binding, vnode) {
  if (vnode.context && vnode.context.$laraform && vnode.context.$laraform.vue == 2) {
    return 2
  }

  return 3
}

const options = function(el, binding, vnode) {
  let name = binding.arg
  let parent = vueVersion(binding, vnode) == 2 ? vnode.context : binding.instance
  let component = vueVersion(binding, vnode) == 2 ? (vnode.componentInstance || vnode.elm) : el.__vueParentComponent.ctx

  if (vueVersion(binding, vnode) == 3 && component.$options.name.endsWith('ElementLayout')) {
    component = el.__vueParentComponent.parent.ctx
  }

  return {
    name,
    parent,
    component,
  }
}

const add = function (el, binding, vnode) {
  const { name, parent, component } = options(el, binding, vnode)

  if (_.isArray(parent[name])) {
    if (parent[name].indexOf(component) === -1) {
      parent[name].push(component)
    }
  }
  else {
    parent[name] = component
  }
}

const unbind = function(el, binding, vnode) {
  const { name, parent, component } = options(el, binding, vnode)

  if (_.isArray(parent[name])) {
    parent[name].splice(parent[name].indexOf(component), 1)
  }
  else {
    parent[name] = undefined
  }
}

export default {
  // Vue2
  bind: add,
  udpate: add,
  unbind: unbind,

  // Vue3
  mounted: add,
  updated: add,
  unmounted: unbind,
}