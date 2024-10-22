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
    presets,
    name,
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
    genericName,
    isDisabled,
    isReadonly,
  } = dependencies

  const config$ = inject('config$')

  // ================ DATA ================

  const grid = ref(null)

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

      resolvedColumns.value.filter(c => c.available).forEach((col, i) => {
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

  const resolveComponentType = (column) => {
    const element = column.inputType || inputType.value
    const type = typeof element === 'string' ? element : element.type

    return `${upperFirst(camelCase(type))}Element`
  }

  const resolveComponentName = (rowIndex, colIndex) => {
    return `${path.value.replace(/\./g, '__')}_${rowIndex}_${colIndex}`
  }

  const resolveComponentProps = (row, col, rowIndex, colIndex) => {
    const type = resolveColInputType(col)

    let props = {
      fieldName: `${genericName.value} / ${hasDynamicRows.value ? `#${row.label+1}` : row.label} / ${col.label}`,
      displayErrors: false,
      disabled: isDisabled.value,
      readonly: isReadonly.value,
      conditions: resolveColConditions(row, col),
      name: resolveComponentName(rowIndex, colIndex),
      presets: presets.value,
    }

    switch (type) {
      case 'radio':
        props.radioValue = true
        props.radioName = props.name
        props.standalone = true
        break

      case 'checkbox':
      case 'toggle':
        props.standalone = true
        break

      case 'textarea':
        props.rows = 1
        break

      case 'select':
      case 'checkboxgroup':
      case 'radiogroup':
        props.items = items.value
        break

      case 'tags':
      case 'multiselect':
        props.items = items.value
        props.closeOnSelect = false
        props.appendToBody = true
        props.search = true
        break

      default:
        props = {
          ...props,
          ...resolveColProps(col),
          presets: [
            ...props.presets,
            ...(col?.inputType?.presets || inputType.value?.presets || []),
          ]
        }

        if (props.items && !props.items?.length) {
          props.items = items.value
        }

        if (['radio', 'checkbox', 'toggle'].includes(props.type)) {
          props.standalone = true
        }

        if (['select', 'multiselect', 'tags'].includes(props.type)) {
          props.closeOnSelect = true
          props.appendToBody = true
        }
    }

    if (items.value.length && !props.items) {
      props.items = items.value
    }

    if (col.items?.length && !props.items) {
      props.items = col.items
    }

    return props
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

  const resolveColType = (col) => {
    if (col.inputType) {
      return col.inputType?.type || col.inputType
    }

    return inputType.value?.type || inputType.value
  }

  const resolveColProps = (col) => {
    const type = resolveColInputType(col)

    return typeof type === 'object'
      ? type
      : {}
  }

  const resolveColConditions = (row, column) => {
    return [
      ...(row.conditions || []),
      ...(column.conditions || []),
    ]
  }
  
  return {
    grid,
    resolveComponentType,
    resolveComponentProps,
    resolveComponentName,
    getColStyle,
    resolveColInputType,
    resolveColConditions,
    addLabel,
    gridStyle,
    rowsVisible,
    colsVisible,
    resolveColType,
    allowAdd,
    allowRemove,
  }
}

export default base