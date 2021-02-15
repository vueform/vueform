export default function prototypeAddOptions(prototype, options) {
  let key = prototype.object !== undefined ? 'object' : 'element'

  if (key == 'element') {
    return Object.assign({}, prototype, prototype.element === undefined ? {
      file: options
    } : {
      element: Object.assign({}, prototype.element, options)
    })
  }
  else {
    return Object.assign({}, prototype, typeof prototype.object === 'boolean' ? {
      file: options,
    } : {
      object: {
        schema: {
          child: Object.assign({}, prototype.object.schema.child, options)
        }
      }
    })
  }
}