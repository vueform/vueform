import isEqual from 'lodash/isEqual'
import { computed, toRefs, inject, ref, watch } from 'vue'
import localize from '../../utils/localize'

const base = function(props, context, dependencies)
{
  const {
    rows,
    cols,
    inputType,
  } = toRefs(props)
  
  // ============ DEPENDENCIES =============
  
  const {
    form$,
  } = dependencies
  
  // =============== INJECTS ===============

  const config$ = inject('config$')

  // ================ DATA =================

  const rowsCount = ref(typeof rows.value === 'number' ? rows.value : null)
  // =============== COMPUTED ==============

  const dataType = computed(() => {
    return resolvedColumns.value.some(c => c.inputType && !isEqual(c.inputType, inputType.value)) || (inputType.value !== 'radio' && inputType.value !== 'checkbox')
      ? 'object'
      : inputType.value === 'radio'
        ? 'assoc'
        : 'array'
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

  const hasDynamicRows = computed(() => {
    return typeof rows.value === 'number'
  })

  // ============== WEATCHERS ==============

  watch(rows, (n, o) => {
    if (typeof n !== 'number') {
      rowsCount.value = null
    } else {
      rowsCount.value = n
    }
  })
  
  return {
    hasDynamicRows,
    computedRows,
    resolvedRows,
    resolvedColumns,
    rowsCount,
    dataType,
  }
}

export default base