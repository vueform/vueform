export default {
  mounted: function (el, binding, vnode) {
    el.oninput = () => (vnode.context[binding.expression] = el.value)
  }
}