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
    el$,
    path,
  } = dependencies
  
  // =============== INJECTS ===============

  const config$ = inject('config$')

  // ================ DATA =================

  /**
   * The instances of cells.
   *
   * @type {object}
   */
  const cells$ = ref({})

  /**
   * The count of current rows when rows are dynamic.
   *
   * @type {number}
   */
  const rowsCount = ref(typeof rows.value === 'number' ? rows.value : null)

  // =============== COMPUTED ==============

  /**
   * The data structure type of the matrix. Can be: `assoc`, `array` or `object`.
   *
   * @type {array}
   */
  const dataType = computed(() => {
    const type = inputType.value?.type || inputType.value
    const assocTypes = ['radio']
    const arrayTypes = ['checkbox', 'toggle']
    
    if (resolvedColumns.value.every(c => assocTypes.includes(c.inputType?.type || c.inputType || type))) {
      return 'assoc'
    }

    if (resolvedColumns.value.every(c => arrayTypes.includes(c.inputType?.type || c.inputType || type))) {
      return 'array'
    }

    return 'object'
  })

  /**
   * The value of `rows` or `rowsCount` if rows are dynamic.
   *
   * @type {number|array}
   */
  const computedRows = computed(() => {
    return typeof rows.value === 'number'
      ? rowsCount.value === null
        ? 1
        : rowsCount.value
      : rows.value
  })

  /**
   * The rows of the matrix to be displayed.
   * 
   * @type {array}
   */
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
  
  /**
   * The columns of the matrix to be displayed.
   * 
   * @type {array}
   */
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
   * Whether the matrix has dynamic rows.
   * 
   * @type {boolean}
   */
  const hasDynamicRows = computed(() => {
    return typeof rows.value === 'number'
  })

  // ============== WEATCHERS ==============

  watch(rows, (n, o) => {
    console.log('rows updates', n, o)
    if (typeof n !== 'number') {
      rowsCount.value = null
    } else {
      rowsCount.value = n
    }
  }, { flush: 'pre' })
  
  return {
    hasDynamicRows,
    computedRows,
    resolvedRows,
    resolvedColumns,
    rowsCount,
    dataType,
    cells$,
  }
}

export default base