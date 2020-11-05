export default function prototypeChildSchema(prototype) {
  let key = _.keys(prototype)[0]

  if (key == 'element') {
    return prototype.element
  }
  else {
    return {
      type: 'object',
      schema: prototype.object.schema
    }
  }
}