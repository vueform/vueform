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
    
    let filtered = {}

    _.each(children$.value, (element$) => {
      filtered = Object.assign({}, filtered, element$.filtered)
    })

    return formatData.value(name.value, filtered, form$.value)
  })

  // =============== METHODS ===============

  const load = (data) => {
    if (available.value && data && data[name.value] !== undefined) {
      let formattedData = formatLoad.value(data[name.value], form$.value)

      _.each(children$.value, (element$) => {
        element$.load(formattedData)
      })
      return
    }

    clear()
    resetValidators()
      
    nextTick(() => { nextTick(() => {
      clean()
    })})
  }

  const update = (val) => {
    _.each(children$.value, (element$) => {
      if (val[element$.name] === undefined && !element$.flat) {
        return
      }
      element$.update(element$.flat ? val : val[element$.name])
    })
  }

  const reset = () => {
    _.each(children$.value, (element$) => {
      element$.reset()
    })
  }

  const clear = () => {
    _.each(children$.value, (element$) => {
      element$.clear()
    })
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