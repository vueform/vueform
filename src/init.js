import { reactive, ref } from 'composition-api'

export default function init(props, context, component, data) {
  let setup = component.init(props, Object.assign({}, context, {
    name: ref(component.name),
    data: reactive(data),
  }))

  _.each(component.extensions, (extension) => {
    setup = Object.assign({}, setup, extension.setup(props, context, component))
  })
  
  return setup
}