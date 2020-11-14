export default function uncheck (el) {
  el.get('input').setChecked(false)
  // el.get('input').trigger('change')
}