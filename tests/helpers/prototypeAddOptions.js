export default function prototypeAddOptions(prototype, options) {
  let key = _.keys(prototype)[0]

  if (key == 'element') {
    return {
      element: Object.assign({}, prototype.element, options)
    }
  }
  else if (typeof prototype.object !== 'boolean') {
    return {
      object: {
        schema: _.merge({}, prototype.object.schema, options)
      }
    }
  } else {
    return {}
  }
}