export default function init(props, context, component, data) {
  let setup = component.init(props, Object.assign({}, context, {
    name: component.name,
    data,
  }))

  _.each(component.extensions, (extension) => {
    setup = Object.assign({}, setup, extension.setup(props, context, component))
  })
  
  return setup
}