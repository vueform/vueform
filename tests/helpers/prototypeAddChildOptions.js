export default function prototypeAddOptions(prototype, options) {
  let key = prototype.element !== undefined ? 'element' : 'object'

  if (key == 'element') {
    return Object.assign({}, prototype, ['file', 'image'].indexOf(prototype.element.type) !== -1 ? {
      file: options
    } : {
      element: Object.assign({}, prototype.element, options)
    })
  }
  else {
    return Object.assign({}, prototype, ['file', 'image'].indexOf(prototype.object.schema[_.keys(prototype.object.schema)[0]].type) !== -1 ? {
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