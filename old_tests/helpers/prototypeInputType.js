export default function prototypeInputType(prototype) {
  let key = _.keys(prototype)[0]

  return key == 'element' ? prototype.element.type : prototype.object.schema.child.type
}