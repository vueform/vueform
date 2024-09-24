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

  const { form$ } = dependencies

  const config$ = inject('config$')
  
  // ============== COMPUTED ==============
  
  const resolvedRows = computed(() => {
    return rows.value.map((row) => {
      return typeof row === 'string' || typeof row === 'number'
        ? { value: row, label: row }
        : row
    }).map(r => ({ ...r, label: localize(r.label, config$.value, form$.value) }))
  })
  
  const resolvedColumns = computed(() => {
    return cols.value.map((col) => {
      return typeof col === 'string' || typeof col === 'number'
        ? { value: col, label: col }
        : col
    }).map(r => ({ ...r, label: localize(r.label, config$.value, form$.value) }))
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
  
  return {
    resolvedRows,
    resolvedColumns,
    inputTypeComponent,
    getColStyle,
  }
}

export default base