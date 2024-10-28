import each from 'lodash/each'
import cloneDeep from 'lodash/cloneDeep'
import isPlainObject from 'lodash/isPlainObject'
import merge from 'lodash/merge'
import clone from 'lodash/clone'
import isEqual from 'lodash/isEqual'
import { computed, toRefs, inject, ref } from 'vue'
import localize from '../../utils/localize'
import getRowKey from '../../utils/getRowKey'
import getColKey from '../../utils/getColKey'

const base = function(props, context, dependencies)
{
  const {
    default: default_,
    name,
  } = toRefs(props)
  
  // ============ DEPENDENCIES =============
  
  const {
    nullValue,
    form$,
    parent,
  } = dependencies
  
  // ============== COMPUTED ===============
  
  /**
   * The default value of the element.
   *
   * @type {any}
   * @private
   */
  const defaultValue = computed(() => {
    let parentDefaultValue
    
    if (parent && parent.value && parent.value.isMatrixType) {
      const row = parent.value.resolvedRows[getRowKey(name.value)]
      const col = parent.value.resolvedColumns[getColKey(name.value)]

      const rowModel = parent.value.defaultValue[row.value]

      switch (parent.value.dataType) {
        case 'assoc':
          parentDefaultValue = rowModel === col.value ? true : null
          break

        case 'array':
          parentDefaultValue = Array.isArray(rowModel) && rowModel.includes(col.value)
          break

        default:
          parentDefaultValue = rowModel?.[col.value]
          break
      }
    } else if (parent && parent.value) {
      parentDefaultValue = parent.value.defaultValue[name.value]
    } else if (form$.value.options.default[name.value] !== undefined) {
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
    
    if (parent && parent.value && parent.value.isMatrixType) {
      const row = parent.value.resolvedRows[getRowKey(name.value)]
      const col = parent.value.resolvedColumns[getColKey(name.value)]

      const rowModel = parent.value.defaultValue[row.value]

      switch (parent.value.dataType) {
        case 'assoc':
          parentDefaultValue = rowModel === col.value ? true : null
          break

        case 'array':
          parentDefaultValue = Array.isArray(rowModel) && rowModel.includes(col.value)
          break

        default:
          parentDefaultValue = rowModel?.[col.value]
          break
      }
    } else if (parent && parent.value) {
      parentDefaultValue = parent.value.defaultValue[name.value]
    } else if (form$.value.options.default[name.value] !== undefined) {
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
    
    if (parent && parent.value) {
      parentDefaultValue = parent.value.defaultValue[name.value]
    } else if (form$.value.options.default[name.value]) {
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

const matrix = function(props, context, dependencies)
{
  const {
    name,
    default: default_,
  } = toRefs(props)
  
  // ============ DEPENDENCIES =============
  
  const {
    nullValue,
    form$,
    parent,
    hasDynamicRows,
    computedRows,
    resolvedRows,
    resolvedColumns,
    rowsCount,
    dataType,
    el$,
  } = dependencies
  
  // ============== COMPUTED ===============
  
  const defaultValue = computed(() => {
    let parentDefaultValue
    
    if (parent && parent.value) {
      parentDefaultValue = parent.value.defaultValue[name.value]
    } else if (form$.value.options.default[name.value]) {
      parentDefaultValue = form$.value.options.default[name.value]
    }

    const defaultValue = parentDefaultValue || cloneDeep(default_.value)

    if (Object.keys(defaultValue).length) {
      return defaultValue
    }

    resolvedRows.value.forEach((row, r) => {
      resolvedColumns.value.forEach((col, c) => {
        switch (dataType.value) {
          case 'assoc':
            defaultValue[row.value] = defaultValue[row.value] === col.value ? col.value : null
            break

          case 'array':
            defaultValue[row.value] = [
              ...(defaultValue[row.value] || []),
              ...(defaultValue[row.value] && defaultValue[row.value].indexOf(col.value) !== -1 ? [col.value] : [])
            ]
            break

          default:
            defaultValue[row.value] = {
              ...(defaultValue[row.value] || {}),
              [col.value]: defaultValue[row.value]?.[col.value] || undefined,
            }
        }
      })
    })

    return defaultValue
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
    
    if (parent && parent.value) {
      parentDefaultValue = parent.value.defaultValue
    } else if (form$.value.options.default) { //@todo:adam
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
    
    if (parent && parent.value) {
      parentDefaultValue = parent.value.defaultValue[name.value]
    } else if (form$.value.options.default[name.value]) {
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
  matrix,
}

export default base