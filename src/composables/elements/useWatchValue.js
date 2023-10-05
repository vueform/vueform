import { watch, toRefs } from 'vue'
import dataEquals from './../../utils/dataEquals'

const base = function(props, context, dependencies, /* istanbul ignore next */ options = {})
{
  // ============ DEPENDENCIES =============
  
  const form$ = dependencies.form$
  const el$ = dependencies.el$
  const fire = dependencies.fire
  const dirt = dependencies.dirt
  const validate = dependencies.validate
  const value = dependencies.value
  
  // =============== METHODS ===============
  
  const initWatcher = () => {
    watch(value, (n, o) => {
      if (dataEquals(n, o)) {
        return
      }
      
      fire('change', n, o, el$.value)
      
      /* istanbul ignore else */
      if (dirt) {
        dirt()
      }
      
      if (validate && form$.value.shouldValidateOnChange) {
        validate()
      }
    }, { immediate: false, deep: true })
  }
  
  return {
    initWatcher,
  }
}

const multilingual = function(props, context, dependencies, /* istanbul ignore next */ options = {})
{
  // ============ DEPENDENCIES =============
  
  const form$ = dependencies.form$
  const el$ = dependencies.el$
  const fire = dependencies.fire
  const dirt = dependencies.dirt
  const value = dependencies.value
  const language = dependencies.language
  const validateLanguage = dependencies.validateLanguage
  
  // =============== METHODS ===============
  
  const initWatcher = () => {
    watch(value, (n, o) => {
      if (dataEquals(n, o)) {
        return
      }
      
      fire('change', n, o, el$.value)
      
      /* istanbul ignore else */
      if (dirt) {
        dirt()
      }
      
      if (form$.value.shouldValidateOnChange) {
        validateLanguage(language.value)
      }
    }, { immediate: false, deep: true })
  }
  
  return {
    initWatcher,
  }
}

const list = function(props, context, dependencies, /* istanbul ignore next */ options = {})
{
  // ============ DEPENDENCIES =============
  
  const form$ = dependencies.form$
  const el$ = dependencies.el$
  const fire = dependencies.fire
  const dirt = dependencies.dirt
  const validateValidators = dependencies.validateValidators
  const value = dependencies.value
  
  // =============== METHODS ===============
  
  const initWatcher = () => {
    watch(value, (n, o) => {
      if (dataEquals(n, o)) {
        return
      }
      
      fire('change', n, o, el$.value)
      
      /* istanbul ignore else */
      if (dirt) {
        dirt()
      }
      
      /* istanbul ignore else */
      if (validateValidators && form$.value.shouldValidateOnChange) {
        validateValidators()
      }
    }, { immediate: false, deep: true })
  }
  
  return {
    initWatcher,
  }
}

const object = function(props, context, dependencies, /* istanbul ignore next */ options = {})
{
  // ============ DEPENDENCIES =============
  
  const form$ = dependencies.form$
  const fire = dependencies.fire
  const value = dependencies.value
  const el$ = dependencies.el$
  const dirt = dependencies.dirt
  const validateValidators = dependencies.validateValidators
  
  // =============== METHODS ===============
  
  const initWatcher = () => {
    watch(value, (n, o) => {
      if (dataEquals(n, o)) {
        return
      }
      
      fire('change', n, o, el$.value)
      
      /* istanbul ignore else */
      if (dirt) {
        dirt()
      }
      
      /* istanbul ignore else */
      if (validateValidators && form$.value.shouldValidateOnChange) {
        validateValidators()
      }
    }, { immediate: false, deep: true })
  }
  
  return {
    initWatcher,
  }
}

const location = function(props, context, dependencies, /* istanbul ignore next */ options = {})
{
  const { displayKey } = toRefs(props)
  
  // ============ DEPENDENCIES =============
  
  const form$ = dependencies.form$
  const el$ = dependencies.el$
  const fire = dependencies.fire
  const dirt = dependencies.dirt
  const validate = dependencies.validate
  const value = dependencies.value
  const input = dependencies.input
  
  // =============== METHODS ===============
  
  const initWatcher = () => {
    watch(value, (n, o) => {
      if (dataEquals(n, o)) {
        return
      }
      
      fire('change', n, o, el$.value)
      
      dirt()
      
      input.value.value = input.value && value.value && value.value[displayKey.value] !== undefined ? value.value[displayKey.value] : ''
      
      /* istanbul ignore else */
      if (validate && form$.value.shouldValidateOnChange) {
        validate()
      }
    }, { immediate: false, deep: true })
  }
  
  return {
    initWatcher,
  }
}

const multifile = list
const group = object

export {
  list,
  multifile,
  location,
  object,
  group,
  multilingual,
}

export default base