import { watch } from 'composition-api'

export default function useWatchPrototype (props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const value = dependencies.value
  const prototype = dependencies.prototype
  const clear = dependencies.clear
  const insert = dependencies.insert

  // ============== WATCHERS ==============

  watch(prototype, () => {
    let val = value.value

    clear()

    _.each(val, (one) => {
      insert(one)
    })
  }, { lazy: false, deep: true })

  return {}
}