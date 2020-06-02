import Vue from 'vue'

function add (el, binding, vnode) {
  const ref = binding.arg
  const vm = vnode.context
  const thing = vnode.componentInstance || vnode.elm

  vm.$refs = Vue.observable(Object.assign({}, vm.$refs))

  if (!vm.$refs.hasOwnProperty(ref)) {
    vm.$refs[ref] = []
  }

  const index = vm.$refs[ref].indexOf(thing)

  if (index == -1) {
  	vm.$refs[ref].push(thing)
 	}
}

function remove (el, {arg: ref }, {context: vm }, vnode) {
  if (vm.$refs.hasOwnProperty(ref)) {
    const arr = vm.$refs[ref]
    const thing = vnode.componentInstance || vnode.elm
    const index = arr.indexOf(thing)
    if (index) {
      arr.splice(index, 1)
    }
  }
}

export default {
  bind: add,
  update: add,
  unbind: remove
}