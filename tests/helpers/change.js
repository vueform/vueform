export default function change (el, value, event = 'keyup') {
  el.get('input').setValue(value)
  el.get('input').trigger(event)
}