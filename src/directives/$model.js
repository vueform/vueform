export default {
  bind: function (el, binding, vnode) {
    el.oninput = () => (vnode.context[binding.expression] = el.value)
  }
}