export default function setValue (el, fieldType, value) {
  switch (fieldType) {
    case 'input':
      el.get('input').setValue(value)
      break
  }
}