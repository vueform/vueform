export default function change (el, value, event = 'input') {
  el.get('input').setValue(value)
  el.get('input').trigger(event)
}