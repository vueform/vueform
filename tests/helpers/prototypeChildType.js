export default function prototypeChildType(prototype) {
  let key = prototype.object !== undefined ? 'object' : 'element'

  // This means file
  if (key === 'element' && prototype.element === undefined) {
    return 'file'
  } 

  return key == 'element' ? prototype.element.type : 'object'
}