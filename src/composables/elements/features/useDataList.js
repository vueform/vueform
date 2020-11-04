import { computed, nextTick, toRefs } from 'composition-api'
import computedOption from './../../../utils/computedOption'
import useData from './useData'

export default function useGroupData(props, context, dependencies)
{
  const { name } = toRefs(props)

  // ============ DEPENDENCIES =============

  const { submit, data, formatData, formatLoad, prepare } = useData(props, context, dependencies)

  const form$ = dependencies.form$
  const available = dependencies.available
  const children$ = dependencies.children$
  const clean = dependencies.clean
  const resetValidators = dependencies.resetValidators
  const instances = dependencies.instances
  const nullValue = dependencies.nullValue
  const disabled = dependencies.disabled
  const setInitialInstances = dependencies.setInitialInstances
  const insert = dependencies.insert
  const isObject = dependencies.isObject
  const orderBy = dependencies.orderBy
  const order = dependencies.order

  // ============== COMPUTED ===============
  /**
   * A function that formats data before gets merged with form `data`.
   * 
   * @type {function}
   */
  
  const filtered = computed(() => {
    if (!available.value || !submit.value) {
      return {}
    }
    
    let filtered = []

    _.each(children$.value, (element$) => {
      let value = element$.filtered[element$.name]

      if (value !== undefined) {
        filtered.push(value)
      }
    })

    return formatData.value(name.value, filtered, form$.value)
  })

  // =============== METHODS ===============

  const load = (val, format = false) => {
    let formatted = format ? formatLoad.value(val, form$.value) : val

    if (!available.value || formatted === undefined) {
      unload()
      return
    }

    // Remove all existing children
    clear()

    // Insert a number of children based on data length
    for (let i = 0; i < _.keys(formatted).length; i++) {
      insert()
    }

    // Set dirty to `false` because we just loaded children
    nextTick(() => {
      nextTick(() => {
        clean()
      })
    })
    
    // nextTick is required because children$ reflects
    // $refs, which only refreshed after DOM rerender
    // therefore when inserting new elements children$
    // will only contain them once they are rendered
    nextTick(() => {
      _.each(children$.value, (element$) => {
        // order loaded data by it's order field if should be ordered
        const desc = order.value && typeof order.value === 'string' && order.value.toUpperCase() == 'DESC'

        if (isObject.value && orderBy.value) {
          const sorted = _.sortBy(formatted, orderBy.value)

          formatted = desc ? sorted.reverse() : sorted
        }
        else if (order.value) {
          formatted = desc ? formatted.sort().reverse() : formatted.sort()
        }

        element$.load(formatted[element$.name], format)
      })

      // Set dirty to `false` because children data got updated and that
      // affecets list element's data too
      nextTick(() => {
        nextTick(() => {
          clean()
        })
      })
    })
  }

  const unload = () => {
    clear()
    resetValidators()
      
    nextTick(() => {
      nextTick(() => {
        clean()
      })
    })
  }
  
  /**
   * Updates the element's value.
   *
   * @public
   * @param {any} value the value to be set for the element
   * @returns {void}
   */
  const update = (value) => {
    _.each(children$.value, (element$) => {
      if (value[element$.name] === undefined) {
        return
      }
      
      element$.update(value[element$.name])
    })
  }

  /**
   * Resets the element to it's default state.
   *
   * @public
   * @returns {void}
   */
  const reset = () => {
    clear()

    // nextTick is required because the children
    // elements has to first rerender, otherwise
    // their values would be kept because even
    // we add new instances their keys are the
    // same and Vue wouldn't make difference
    nextTick(() => {
      setInitialInstances()
    })

    resetValidators()
  }

  /**
   * Clears the value of the element.
   *
   * @public
   * @returns {void}
   */
  const clear = () => {
    instances.value = []
  }

  return {
    // Computed
    data,
    filtered,
    formatData,
    formatLoad,
    submit,

    // Mehtods
    load,
    unload,
    update,
    clear,
    reset,
    prepare,
  }
}