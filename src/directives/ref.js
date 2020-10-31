import { computed, ref } from 'vue'

const options = function(el, binding, vnode) {
  let name = binding.arg
  let parent = vnode.context
  let component = vnode.componentInstance || vnode.elm

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
    parent.$set(parent, name, component)
  }
}

const unbind = function(el, binding, vnode) {
  const { name, parent, component } = options(el, binding, vnode)

  if (_.isArray(parent[name])) {
    parent[name].splice(parent[name].indexOf(component), 1)
  }
  else {
    parent.$set(parent, name, undefined)
  }
}

export default {
  // Vue2
  bind: add,
  udpate: add,
  unbind: unbind,
}