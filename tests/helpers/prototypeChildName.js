export default function prototypeChildName(prototype) {
  let key = prototype.element !== undefined ? 'element' : 'object'

  return key == 'element' ? '' : _.keys(prototype.object.schema)[0]
}