export default function prototypeAddOptions(prototype, options) {
  let key = _.keys(prototype)[0]

  if (key == 'element') {
    return {
      element: Object.assign({}, prototype.element, options)
    }
  }
  else {
    return {
      object: {
        schema: {
          child: Object.assign({}, prototype.object.schema.child, options)
        }
      }
    }
  }
}