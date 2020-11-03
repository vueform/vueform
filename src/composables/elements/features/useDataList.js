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

      if (value) {
        filtered.push(value)
      }
    })

    return formatData.value(name.value, filtered, form$.value)
  })

  // =============== METHODS ===============

  const load = (data) => {
    clear()

    var length = available.value
      ? _.keys(data[name.value]).length
      : initial.value

    for (var i = 0; i < length; i++) {
      insert()
    }

    clean()
    
    // nextTick is required because children$ reflects
    // $refs, which only refreshed after DOM rerender
    // therefore when inserting new elements children$
    // will only contain them once they are rendered
    nextTick(() => {
      _.each(children$.value, (element$) => {
        // order loaded data by it's
        // order field if should be ordered
        var value = data[name.value]

        if (isObject.value && orderBy.value) {
          value = _.sortBy(value, orderBy.value)

          if (order.value == 'DESC') {
            value = value.reverse()
          }
        }
        else if (order.value) {
          value = value.sort()
          
          if (order.value == 'DESC') {
            value = value.reverse()
          }
        }

        element$.load(value)
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
    if (disabled.value) {
      return
    }
    
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
    instances.value = _.clone(nullValue.value)
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
    update,
    clear,
    reset,
    prepare,
  }
}