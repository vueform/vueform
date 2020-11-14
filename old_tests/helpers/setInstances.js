export default function setInstances (el, count) {
  el.vm.clear()

  for (var i = 0; i < count; i++) {
    el.vm.add()
  }
}