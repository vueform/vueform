import { computed, nextTick, toRefs } from 'composition-api'
import computedOption from './../../../utils/computedOption'
import useData from './useData'

export default function(props, context, dependencies)
{
  const { name } = toRefs(props)

  // ============ DEPENDENCIES =============

  const form$ = dependencies.form$
  const available = dependencies.available
  const value = dependencies.value
  const currentValue = dependencies.currentValue
  const previousValue = dependencies.previousValue
  const dirt = dependencies.dirt
  const resetValidators = dependencies.resetValidators
  const validateLanguage = dependencies.validateLanguage
  const language = dependencies.language
  const fire = dependencies.fire
  const default_ = dependencies.default
  const nullValue = dependencies.nullValue
  const { submit, formatData, formatLoad, data, filtered, changed, reset, prepare } = useData(props, context, dependencies)

  // =============== METHODS ===============

  const load = (val, format = false) => {
    let formatted = format ? formatLoad.value(val, form$.value) : val

    if (!available.value || formatted === undefined) {
      value.value = _.clone(nullValue.value)
      return
    }

    if (!_.isPlainObject(formatted)) {
      throw new Error('Multilingual element requires an object to load')
    }

    value.value = Object.assign({}, _.clone(nullValue.value), formatted)
  }

  const update = (val) => {
    let updateValue = val

    if (!_.isPlainObject(updateValue)) {
      updateValue = {
        [language.value]: val,
      }
    }
    
    value.value = Object.assign({}, value.value, updateValue)

    updated()
  }

  const clear = () => {
    value.value = _.clone(nullValue.value)

    updated()
  }

  const updated = () => {
    if (changed.value) {
      dirt()
      fire('change', currentValue.value, previousValue.value)
    }

    if (form$.value.shouldValidateOnChange) {
      validateLanguage(language.value)
    }
  }

  return {
    // Computed
    data,
    filtered,
    formatData,
    formatLoad,
    submit,
    changed,

    // Mehtods
    load,
    update,
    updated,
    clear,
    reset,
    prepare,
  }
}