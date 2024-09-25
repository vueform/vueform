import { computed, toRefs, inject } from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import localize from './../../utils/localize'

const base = function(props, context, dependencies)
{
  const {
    rows,
    cols,
    inputType,
    widths,
  } = toRefs(props)

  const {
    el$,
    form$,
    path,
  } = dependencies

  const config$ = inject('config$')
  
  // ============== COMPUTED ==============
  
  const resolvedRows = computed(() => {
    let resolvedRows = rows.value

    if (rows.value && (typeof rows.value === 'object' && !Array.isArray(rows.value))) {
      resolvedRows = Object.keys(rows.value).map((key) => ({
        value: [key], label: rows.value[key],
      }))
    }

    return resolvedRows.map((row) => {
      return typeof row === 'string' || typeof row === 'number'
        ? { value: row, label: row }
        : row
    })
    .map(r => ({ ...r, label: localize(r.label, config$.value, form$.value) }))
    .map(r => ({ ...r, available: !r.conditions || !r.conditions.some((condition) => !form$.value.$vueform.services.condition.check(condition, path.value, form$.value, el$.value)) }))
  })
  
  const resolvedColumns = computed(() => {
    let resolvedColumns = cols.value

    if (cols.value && (typeof cols.value === 'object' && !Array.isArray(cols.value))) {
      resolvedColumns = Object.keys(cols.value).map((key) => ({
        value: [key], label: cols.value[key],
      }))
    }

    return resolvedColumns.map((col) => {
      return typeof col === 'string' || typeof col === 'number'
        ? { value: col, label: col }
        : col
    })
    .map(r => ({ ...r, label: localize(r.label, config$.value, form$.value) }))
    .map(r => ({ ...r, available: !r.conditions || !r.conditions.some((condition) => !form$.value.$vueform.services.condition.check(condition, path.value, form$.value, el$.value)) }))
  })

  // =============== METHODS ==============

  const inputTypeComponent = (column) => {
    const element = column.inputType || inputType.value

    return `${upperFirst(camelCase(element.type))}Element`
  }

  const getColStyle = (index) => {
    if (widths.value[index] === undefined) {
      return
    }

    return {
      width: widths.value[index]
    }
  }

  const resolveColInputType = (col) => {
    return col.inputType || inputType.value
  }

  const resolveConditions = (row, column) => {
    return [
      ...(row.conditions || []),
      ...(column.conditions || []),
    ]
  }
  
  return {
    resolvedRows,
    resolvedColumns,
    inputTypeComponent,
    getColStyle,
    resolveColInputType,
    resolveConditions,
  }
}

export default base