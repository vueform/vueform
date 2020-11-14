export default function unselect (el) {
  el.get('input').setSelected(false)
  // el.get('input').trigger('change')
}