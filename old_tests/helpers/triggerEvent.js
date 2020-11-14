export default function triggerEvent (el, fieldType, event) {
  switch (fieldType) {
    case 'input':
      el.get('input').trigger(event)
      break
  }
}