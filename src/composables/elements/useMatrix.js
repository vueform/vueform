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
    minWidth,
    addText,
    hideRows,
    items,
    maxWidth,
    rowWrap,
    templateColumns,
    hideCols,
    colWrap,
    gap,
    canRemove,
    canAdd,
    min,
    max,
  } = toRefs(props)

  const {
    el$,
    form$,
    path,
    hasDynamicRows,
    resolvedRows,
    resolvedColumns,
    rowsCount,
    value,
  } = dependencies

  const config$ = inject('config$')

  // ============== COMPUTED ==============

  const allowAdd = computed(() => {
    return hasDynamicRows.value && canAdd.value && (max.value === -1 || max.value > Object.keys(value.value).length)
  })

  const allowRemove = computed(() => {
    return hasDynamicRows.value && canRemove.value && (min.value === -1 || min.value < Object.keys(value.value).length)
  })
  
  /**
   * The label of add button.
   *
   * @type {string}
   */
  const addLabel = computed(() => {
    return addText.value || form$.value.translations.vueform.elements.list.add
  })

  const rowsVisible = computed(() => {
    if (hasDynamicRows.value) {
      return false
    }

    return !hideRows.value
  })

  const colsVisible = computed(() => {
    return !hideCols.value
  })

  const gridStyle = computed(() => {
    let gridTemplateColumns = templateColumns.value

    if (typeof templateColumns.value === 'function') {
      gridTemplateColumns = templateColumns.value(el$.value)
    }

    if (!gridTemplateColumns) {
      gridTemplateColumns = []

      // Row label column
      if (rowsVisible.value) {
        gridTemplateColumns.push(`minmax(min-content, auto)`)
      }

      // Cells
      const min = resolveWidth(minWidth.value, 'min-content')
      const max = resolveWidth(maxWidth.value, '1fr')

      resolvedColumns.value.forEach((col, i) => {
        const colMin = resolveWidth(col.minWidth, min)
        const colMax = resolveWidth(col.maxWidth, max)

        gridTemplateColumns.push(`minmax(${colMin}, ${colMax})`)
      })

      // Remove column
      if (allowRemove.value) {
        gridTemplateColumns.push(`minmax(max-content, max-content)`)
      }

      gridTemplateColumns = gridTemplateColumns.join(' ')
    }

    return {
      'grid-template-columns': gridTemplateColumns,
      'gap': gap.value !== 0 ? `${gap.value}px` : undefined,
    }
  })

  // =============== METHODS ==============

  const resolveWidth = (width, def) => {
    return typeof width === 'number' ? `${width}px` : width !== undefined ? width : def
  }

  const inputTypeComponent = (column) => {
    const element = column.inputType || inputType.value
    const type = typeof element === 'string' ? element : element.type

    return `${upperFirst(camelCase(type))}Element`
  }

  const getColStyle = (index) => {
    if (!index) {
      return
    }
    
    const col = resolvedColumns.value?.[index - 1] || {}
    const minW = col?.minWidth || minWidth.value || 0
    const maxW = col?.maxWidth || maxWidth.value || 0

    const style = {}

    if (minW) {
      style.minWidth = `${minW}px`
    }

    if (maxW) {
      style.maxWidth = `${maxW}px`
    }

    return style
  }

  const resolveColInputType = (col) => {
    return col.inputType || inputType.value
  }

  const resolveType = (col) => {
    if (col.inputType) {
      return col.inputType?.type || col.inputType
    }

    return inputType.value?.type || inputType.value
  }

  const resolveItems = (col) => {
    return col.items || items.value
  }

  const resolveConditions = (row, column) => {
    return [
      ...(row.conditions || []),
      ...(column.conditions || []),
    ]
  }
  
  return {
    inputTypeComponent,
    getColStyle,
    resolveColInputType,
    resolveConditions,
    addLabel,
    resolveItems,
    gridStyle,
    rowsVisible,
    colsVisible,
    resolveType,
    allowAdd,
    allowRemove,
  }
}

export default base