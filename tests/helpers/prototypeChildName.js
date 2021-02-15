export default function prototypeChildName(prototype) {
  let key = prototype.element !== undefined ? 'element' : 'object'

  if (key === 'element') {
    return ''
  } else if (typeof prototype.object !== 'boolean' || prototype.element !== undefined) {
    return _.keys(prototype.object.schema)[0]
  } else {
    return 'file'
  }
}