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
    gap,
    rowTitleMaxWidth,
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

    if (!gridTemplateColumns) {
      gridTemplateColumns = []

      const min = typeof minWidth.value === 'number' ? `${minWidth.value}px` : minWidth.value
      const max = typeof maxWidth.value === 'number' ? `${maxWidth.value}px` : maxWidth.value

      // Row label column
      if (rowsVisible.value) {
        const firstColMin = rowWrap.value
          ? rowTitleMaxWidth.value
            ? 'min-content'
            : typeof minWidth.value === 'number'
              ? `${minWidth.value}px` 
              : minWidth.value
            : 'max-content'
            
        const firstColMax = rowWrap.value ? rowTitleMaxWidth.value : 'max-content'

        gridTemplateColumns.push(`minmax(${firstColMin}, ${firstColMax})`)
      }

      resolvedColumns.value.forEach((col, i) => {
        const colMin = typeof col.minWidth === 'number' ? `${col.minWidth}px` : col.minWidth !== undefined ? col.minWidth : min
        const colMax = typeof col.maxWidth === 'number' ? `${col.maxWidth}px` : col.maxWidth !== undefined ? col.maxWidth : max

        gridTemplateColumns.push(`minmax(${colMin}, ${colMax})`)
      })

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