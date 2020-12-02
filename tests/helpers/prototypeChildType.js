export default function prototypeChildType(prototype) {
  let key = prototype.element !== undefined ? 'element' : 'object'

  return key == 'element' ? prototype.element.type : 'object'
}