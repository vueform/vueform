function add (el, binding, vnode, prevVnode) {
  // console.log(1, el.$refs)
  // console.log(2, binding)
  // console.log(3, binding.instance) // form elements
  // console.log(4, binding.instance.$refs)
  // console.log(5, vnode)


  const ref = binding.arg // ok
  const vm = binding.instance // ok
  const component = vnode // ok?

  console.log(vnode.instance)

  vm.inlineElements$['a'] = vnode.instance
}

// function remove (el, {arg: ref }, {context: vm }, vnode) {
//   if (vm.$refs.hasOwnProperty(ref)) {
//     const arr = vm.$refs[ref]
//     const thing = vnode.componentInstance || vnode.elm
//     const index = arr.indexOf(thing)
//     if (index) {
//       arr.splice(index, 1)
//     }
//   }
// }

export default {
  mounted: add,
  updated: add,
  // unbind: remove
}