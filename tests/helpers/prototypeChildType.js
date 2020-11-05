export default function prototypeChildType(prototype) {
  let key = _.keys(prototype)[0]

  return key == 'element' ? prototype.element.type : 'object'
}