import { computed, toRefs, inject, ref, watch } from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import isEqual from 'lodash/isEqual'
import cloneDeep from 'lodash/cloneDeep'
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
    defaultValue,
  } = dependencies

  const config$ = inject('config$')

  // ================ DATA ================

  /**
   * The HTML element of the matrix grix.
   * 
   * @type {HTMLElement}
   */
  const grid = ref(null)

  // ============== COMPUTED ==============

  /**
   * Whether rows can be added when rows are dynamic.
   * 
   * @type {boolean}
   */
  const allowAdd = computed(() => {
    return hasDynamicRows.value && canAdd.value && (max.value === -1 || max.value > Object.keys(value.value).length)
  })

  /**
   * Whether rows can be removed when rows are dynamic.
   * 
   * @type {boolean}
   */
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

  /**
   * Whether row labels should be displayed.
   * 
   * @type {boolean}
   */
  const rowsVisible = computed(() => {
    if (hasDynamicRows.value) {
      return false
    }

    return !hideRows.value
  })

  /**
   * Whether column headers should be displayed.
   * 
   * @type {boolean}
   */
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

      el$.value.resolvedColumns.filter(c => c.available).forEach((col, i) => {
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
      'gap': gap.value !== 0
        ? typeof gap.value === 'number'
          ? `${gap.value}px`
          : gap.value
        : undefined,
    }
  })

  /**
   * The component props of the cells.
   * 
   * @type {array}
   */
  const cells = computed(() => {
    const rows = []

    resolvedRows.value.forEach((row, r) => {
      const cols = []

      resolvedColumns.value.forEach((col, c) => {
        cols.push(resolveComponentProps(row, col, r, c))
      })

      rows.push(cols)
    })

    return rows
  })

  /**
   * The array of cell input types.
   * 
   * @type {array}
   */
  const inputTypes = computed(() => {
    return cells.value.reduce((prev, curr) => {
      prev.push(...curr.map((cell) => cell.type))

      return prev
    }, [])
  })

  // =============== METHODS ==============

  /**
   * Resolves the `width` property to either `px` or plain value,
   *
   * @returns {string}
   * @param {number|string} width* the width to be resolved
   * @param {number|string} def* the default value to be used if width is `undefined`
   * @private
   */
  const resolveWidth = (width, def) => {
    return typeof width === 'number' ? `${width}px` : width !== undefined ? width : def
  }

  /**
   * Resolves the cell component type (for `:is`) based on a column object.
   *
   * @returns {string}
   * @param {object} column* the column definition object
   */
  const resolveComponentType = (column) => {
    const element = column.inputType || inputType.value
    const type = typeof element === 'string' ? element : element.type

    return `${upperFirst(camelCase(type))}Element`
  }

  /**
   * Resolves the cell component name based on row and column index.
   *
   * @returns {string}
   * @param {number} rowIndex* the index of the row
   * @param {number} colIndex* the index of the column
   */
  const resolveComponentName = (rowIndex, colIndex) => {
    return `${path.value.replace(/\./g, '__')}_${rowIndex}_${colIndex}`
  }

  /**
   * Resolves the cell component properties.
   *
   * @returns {object}
   * @param {object} row* the row definition object
   * @param {object} col* the column definition object
   * @param {number} rowIndex* the index of the row
   * @param {number} colIndex* the index of the column
   */
  const resolveComponentProps = (row, col, rowIndex, colIndex) => {
    const type = resolveColInputType(col)

    let props = {
      fieldName: `${genericName.value} / ${hasDynamicRows.value ? `#${row.label+1}` : row.label} / ${col.label}`,
      displayErrors: false,
      disabled: isDisabled.value,
      readonly: isReadonly.value,
      presets: presets.value,
    }

    if (row.conditions || col.conditions) {
      props.conditions = resolveColConditions(row, col)
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
        }

        const presets = col?.inputType?.presets || inputType.value?.presets || []

        if (presets.length) {
          props.presets.push(...presets)
        }

        if (props.items && !props.items?.length) {
          props.items = items.value
        }

        if (['radio', 'checkbox', 'toggle'].includes(props.type)) {
          props.standalone = true
        }

        if (['select', 'multiselect', 'tags'].includes(props.type)) {
          props.appendToBody = true
        }

        if (['multiselect', 'tags'].includes(props.type)) {
          props.closeOnSelect = false
        }
    }

    if (items.value.length && !props.items) {
      props.items = items.value
    }

    if (col.items?.length && !props.items) {
      props.items = col.items
    }

    props.name = resolveComponentName(rowIndex, colIndex)

    return props
  }

  /**
   * Returns the style of a colum based on its index.
   *
   * @returns {object}
   * @param {object} index* the index of the column
   */
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

  /**
   * Resolves the input type of a column.
   *
   * @returns {object|string}
   * @param {object} col* the column definition object
   */
  const resolveColInputType = (col) => {
    return col.inputType || inputType.value
  }

  /**
   * Resolves the type of the input field of a column.
   *
   * @returns {string}
   * @param {object} col* the column definition object
   */
  const resolveColType = (col) => {
    if (col.inputType) {
      return col.inputType?.type || col.inputType
    }

    return inputType.value?.type || inputType.value
  }

  /**
   * Resolves the properties of the input type if any.
   *
   * @returns {object}
   * @param {object} col* the column definition object
   * @private
   */
  const resolveColProps = (col) => {
    const type = resolveColInputType(col)

    return typeof type === 'object'
      ? type
      : {}
  }

  /**
   * Resolves the conditions of a cell based on row and column.
   *
   * @returns {object}
   * @param {object} row* the row definition object
   * @param {object} col* the column definition object
   */
  const resolveColConditions = (row, col) => {
    return [
      ...(row.conditions || []),
      ...(col.conditions || []),
    ]
  }

  watch([inputType, inputTypes], (n, o) => {
    if (isEqual(n[0], o[0]) && isEqual(n[1], o[1])) {
      return
    }

    value.value = cloneDeep(defaultValue.value)
  }, { flush: 'pre' })
  
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
    cells,
    inputTypes,
  }
}

export default base