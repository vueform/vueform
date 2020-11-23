import { onMounted, nextTick } from 'composition-api'
import normalize from './../../../utils/normalize'

const base = function (props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$
  const listeners = dependencies.listeners
  const create = dependencies.create
  const selectOptions = dependencies.selectOptions
  const trackBy = dependencies.trackBy
  const items = dependencies.items
  const select = dependencies.select
  const on = dependencies.on

  // =============== PRIVATE ==============

  const hasOption = (val) => {
    return _.some(selectOptions.value, { value: normalize(val) })
  }

  // =============== METHODS ==============

  const addItem = (label, val) => {
    let v = val

    if (v === undefined) {
      v = label
    }

    let item = {
      value: normalize(v),
      label: label,
      [trackBy.value]: label,
    }

    if (_.isPlainObject(items.value)) {
      form$.value.$set(items.value, normalize(v), item)
    }
    else {
      // Push as a plain value if `value` is not explicitly defined
      // Otherwise push a complete option object
      items.value.push(val === undefined ? label : item)
    }
  }
  
  const removeItem = (val) => {
    if (_.isPlainObject(items.value)) {
      form$.value.$delete(items.value, _.keys(items.value)[_.findIndex(selectOptions.value, { value: val })])
    }
    else {
      items.value.splice(_.findIndex(selectOptions.value, { value: val }), 1)
    }
  }

  // =============== HOOKS ================

  onMounted(() => {
    // Next tick is required because user
    // may set `tag` event at lifecycle hook
    nextTick(() => {
      if (listeners.value.tag || !create.value) {
        return
      }

      on('tag', (query) => {
        query = query.trim()

        if (hasOption(query)) {
          return
        }

        addItem(query, query)
        select(query)
      })
    })
  })

  return {
    addItem,
    removeItem,
  }
}

export default base