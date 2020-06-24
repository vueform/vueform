import Sortable from 'sortablejs'

export default {
  inserted: function (el, binding, vnode) {
    if (binding.value && binding.value.sort === false) {
      return
    }

    vnode.context.sortableInstance = Sortable.create(el, binding.value || {})
  },
  update(el, binding, vnode) {
    if (binding.value && binding.value.sort === false) {
      if (vnode.context.sortableInstance !== null) {
        // Should work but it does not
        // vnode.context.sortableInstance.destroy()

        // vnode.context.sortableInstance = null
      }

      return
    }

    new Sortable(el, binding.value || {})
  }
}