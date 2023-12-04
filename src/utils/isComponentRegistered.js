export default function (vm, component) {
  return vm.appContext !== undefined
    ? typeof vm.appContext.app.component(component) !== 'string'
    : !!vm.proxy.$root.$options.components[component]
}