import Sortable from 'sortablejs'

export default {
  inserted: function (el, binding) {
    if (binding.value && binding.value.sort === false) {
      return
    }

    new Sortable(el, binding.value || {})
  }
}