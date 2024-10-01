import { computed, toRefs, inject, ref, watch } from 'vue'
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
    addText,
  } = toRefs(props)

  const {
    el$,
    form$,
    path,
  } = dependencies

  const config$ = inject('config$')

  const rowsCount = ref(typeof rows.value === 'number' ? rows.value : null)

  // ============== COMPUTED ==============

  const hasDynamicRows = computed(() => {
    return typeof rows.value === 'number'
  })

  const computedRows = computed(() => {
    return typeof rows.value === 'number'
      ? rowsCount.value
      : rows.value
  })

  const resolvedRows = computed(() => {
    let resolvedRows = computedRows.value

    if (typeof resolvedRows === 'number') {
      resolvedRows = [...Array(resolvedRows)].map((r, i) => ({
        value: i, label: i
      }))
    }

    if (resolvedRows && (typeof resolvedRows === 'object' && !Array.isArray(resolvedRows))) {
      resolvedRows = Object.keys(resolvedRows).map((key) => ({
        value: [key], label: resolvedRows[key],
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
  
  /**
   * The label of add button.
   *
   * @type {string}
   */
  const addLabel = computed(() => {
    return addText.value || form$.value.translations.vueform.elements.list.add
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

  watch(rows, (n, o) => {
    if (typeof n !== 'number') {
      rowsCount.value = null
    } else {
      rowsCount.value = n
    }
  })
  
  return {
    resolvedRows,
    resolvedColumns,
    inputTypeComponent,
    getColStyle,
    resolveColInputType,
    resolveConditions,
    hasDynamicRows,
    rowsCount,
    computedRows,
    addLabel,
  }
}

export default base