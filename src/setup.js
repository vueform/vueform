export default function setup(props, context, component, defaultClasses) {
  let setup = component.setup(props, Object.assign({}, context, {
    name: component.name,
    defaultClasses,
  }))

  _.each(component.extensions, (extension) => {
    setup = Object.assign({}, setup, extension.setup(props, context, component))
  })
  
  return setup
}