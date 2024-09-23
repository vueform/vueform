import { computed, toRefs } from 'vue'

const base = function(props, context, dependencies)
{
  const {
    rows,
    cols,
  } = toRefs(props)
  
  // ============== COMPUTED ==============
  
  const resolvedRows = computed(() => {
    return rows.value.map((row) => {
      return typeof row === 'string' || typeof row === 'number'
        ? { value: row, label: row }
        : row
    })
  })
  
  const resolvedColumns = computed(() => {
    return cols.value.map((col) => {
      return typeof col === 'string' || typeof col === 'number'
        ? { value: col, label: col }
        : col
    })
  })
  
  return {
    resolvedRows,
    resolvedColumns,
  }
}

export default base