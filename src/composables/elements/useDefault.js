import each from 'lodash/each'
import cloneDeep from 'lodash/cloneDeep'
import isPlainObject from 'lodash/isPlainObject'
import merge from 'lodash/merge'
import clone from 'lodash/clone'
import { computed, toRefs, inject } from 'vue'
import localize from '../../utils/localize'

const base = function(props, context, dependencies)
{
  const {
    default: default_,
    name,
  } = toRefs(props)
  
  // ============ DEPENDENCIES =============
  
  const nullValue = dependencies.nullValue
  const form$ = dependencies.form$
  const parent = dependencies.parent
  
  // ============== COMPUTED ===============
  
  /**
   * The default value of the element.
   *
   * @type {any}
   * @private
   */
  const defaultValue = computed(() => {
    let parentDefaultValue
    
    if (parent && parent.value && !parent.value.mounted) {
      parentDefaultValue = parent.value.defaultValue[name.value]
    } else if (!form$.value.mounted && form$.value.options.default[name.value]) {
      parentDefaultValue = form$.value.options.default[name.value]
    }
    
    if (parentDefaultValue !== undefined) {
      return parentDefaultValue instanceof File
        ? new File([parentDefaultValue], parentDefaultValue.name, parentDefaultValue)
        : cloneDeep(parentDefaultValue)
    }
    
    if (default_.value !== undefined) {
      return default_.value instanceof File
        ? new File([default_.value], default_.value.name, default_.value)
        : cloneDeep(default_.value)
    }
    
    return cloneDeep(nullValue.value)
  })
  
  return {
    defaultValue,
  }
}

const text = function(props, context, dependencies)
{
  const {
    default: default_,
    name,
  } = toRefs(props)
  
  // ============ DEPENDENCIES =============
  
  const nullValue = dependencies.nullValue
  const form$ = dependencies.form$
  const parent = dependencies.parent
  
  // =============== INJECT ===============
  
  const config$ = inject('config$')
  
  // ============== COMPUTED ===============
  
  /**
   * The default value of the element.
   *
   * @type {any}
   * @private
   */
  const defaultValue = computed(() => {
    let parentDefaultValue
    
    if (parent && parent.value && !parent.value.mounted) {
      parentDefaultValue = parent.value.defaultValue[name.value]
    } else if (!form$.value.mounted && typeof form$.value.options.default[name.value] !== undefined) {
      parentDefaultValue = form$.value.options.default[name.value]
    }

    if (parentDefaultValue !== undefined) {
      return parentDefaultValue instanceof File
        ? new File([parentDefaultValue], parentDefaultValue.name, parentDefaultValue)
        : (isPlainObject(parentDefaultValue)
          ? localize(cloneDeep(parentDefaultValue), config$.value, form$.value)
          : cloneDeep(parentDefaultValue))
    }
    
    /* istanbul ignore else */
    if (default_.value !== undefined) {
      /* istanbul ignore next: text can not have File as default */
      return default_.value instanceof File
        ? new File([default_.value], default_.value.name, default_.value)
        : isPlainObject(default_.value)
          ? localize(cloneDeep(default_.value), config$.value, form$.value)
          : cloneDeep(default_.value)
    }
    
    /* istanbul ignore next: text will never fall into this case, because `default_.value` is never undefined but null */
    return cloneDeep(nullValue.value)
  })
  
  return {
    defaultValue,
  }
}

const object = function(props, context, dependencies)
{
  const {
    default: default_,
    name,
  } = toRefs(props)
  
  // ============ DEPENDENCIES =============
  
  const nullValue = dependencies.nullValue
  const form$ = dependencies.form$
  const parent = dependencies.parent
  
  // ============== COMPUTED ===============
  
  const defaultValue = computed(() => {
    let parentDefaultValue
    
    if (parent && parent.value && !parent.value.mounted) {
      parentDefaultValue = parent.value.defaultValue[name.value]
    } else if (!form$.value.mounted && form$.value.options.default[name.value]) {
      parentDefaultValue = form$.value.options.default[name.value]
    }
    
    if (parentDefaultValue !== undefined) {
      return cloneDeep(merge({}, default_.value || /* istanbul ignore next: `default_.value` will never be undefined, because it is a hardwired `{}` */ nullValue.value, parentDefaultValue))
    }
    
    if (Object.keys(default_.value).length > 0) {
      return cloneDeep(default_.value)
    }
    
    return cloneDeep(nullValue.value)
  })
  
  return {
    defaultValue,
  }
}

const group = function(props, context, dependencies)
{
  const {
    default: default_,
  } = toRefs(props)
  
  // ============ DEPENDENCIES =============
  
  const form$ = dependencies.form$
  const parent = dependencies.parent
  
  // ============== COMPUTED ===============
  
  const defaultValue = computed(() => {
    let parentDefaultValue = {}
    
    if (parent && parent.value && !parent.value.mounted) {
      parentDefaultValue = parent.value.defaultValue
    } else if (!form$.value.mounted && form$.value.options.default) { //@todo:adam
      parentDefaultValue = form$.value.options.default
    }
    
    return cloneDeep(merge({}, default_.value, parentDefaultValue))
  })
  
  return {
    defaultValue,
  }
}

const multilingual = function(props, context, dependencies)
{
  const {
    default: default_,
    name,
  } = toRefs(props)
  
  // ============ DEPENDENCIES =============
  
  const nullValue = dependencies.nullValue
  const form$ = dependencies.form$
  const parent = dependencies.parent
  
  // ============== COMPUTED ===============
  
  const defaultValue = computed(() => {
    let parentDefaultValue
    
    if (parent && parent.value && !parent.value.mounted) {
      parentDefaultValue = parent.value.defaultValue[name.value]
    } else if (!form$.value.mounted && form$.value.options.default[name.value]) {
      parentDefaultValue = form$.value.options.default[name.value]
    }
    
    if (parentDefaultValue !== undefined) {
      return cloneDeep(Object.assign({}, clone(nullValue.value), parentDefaultValue))
    }
    
    if (default_.value === undefined) {
      return clone(nullValue.value)
    }
    
    let def = clone(default_.value)
    
    if (!isPlainObject(def)) {
      let tempDefault = {}
      
      each(nullValue.value, (v, language) => {
        tempDefault[language] = def
      })
      
      def = tempDefault
    }
    
    return Object.assign({}, clone(nullValue.value), def)
  })
  
  return {
    defaultValue,
  }
}

export {
  object,
  group,
  multilingual,
  text,
}

export default base