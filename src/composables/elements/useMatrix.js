import { computed, toRefs } from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const base = function(props, context, dependencies)
{
  const {
    rows,
    cols,
    inputType,
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

  // =============== METHODS ==============

  const inputTypeComponent = (column) => {
    const element = column.inputType || inputType.value

    return `${upperFirst(camelCase(element.type))}Element`
  }
  
  return {
    resolvedRows,
    resolvedColumns,
    inputTypeComponent,
  }
}

export default base