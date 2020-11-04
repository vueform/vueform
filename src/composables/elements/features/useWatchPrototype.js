import { watch } from 'composition-api'

export default function useWatchPrototype (props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const value = dependencies.value
  const prototype = dependencies.prototype
  const clear = dependencies.clear
  const insert = dependencies.insert

  // ============== WATCHERS ==============

  // @todo: after value
//   watch(prototype, () => {
//     let val = value.value
// console.log(1, val)
//     clear()
// console.log(2, val)

//     _.each(val, (one) => {
//       insert(one)
//     })
//   }, { lazy: false, deep: true })

  return {}
}