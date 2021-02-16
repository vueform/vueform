export default function (el, options, childIndex, parentName = 'el') {
  return el.form$.el$(`${parentName}.${el.isObject ? `${childIndex}.${options.childName}` : childIndex}`)
}