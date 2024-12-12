import { computed, toRefs, inject, ref, watch } from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import walkCells from './../../utils/walkCells'

const base = function(props, context, dependencies)
{
  const {
    grid,
    align: alignProp,
    valign: valignProp,
    presets,
    cols,
    rows,
    name,
    widths,
    minWidth,
    maxWidth,
  } = toRefs(props)

  const {
    el$,
    form$,
    path,
  } = dependencies

  const config$ = inject('config$')

  // ============== COMPUTED ==============

  /**
   * The list of cells that should be displayed in the grid.
   *
   * @type {array}
   */
  const cells = computed(() => {
    const grid = resolvedRows.value

    const cells = []

    walkCells(resolvedRows.value, ({ field, colspan, rowspan, colIndex, rowIndex, rowStart, colStart, rowEnd, colEnd }) => {
      cells.push({
        ...field,
        col: colIndex,
        row: rowIndex,
        colStart,
        rowStart,
        colEnd,
        rowEnd,
        style: colspan > 1 || rowspan > 1
          ? { 'grid-area': `${rowStart + 1} / ${colStart + 1} / ${rowEnd + 2} / ${colEnd + 2}` }
          : {}
      })
    })

    return cells
  })

  /**
   * The cells that should be displayed in a row format.
   *
   * @type {array}
   */
  const resolvedRows = computed(() => {
    const resolvedRows = []
    let rows = grid.value || []

    if (!rows || !rows.length) {
      rows = [...Array(rows.value)].map(r => [...Array(cols.value)].map(c => null))
    }

    rows = rows.map(cols => cols.map(cell => Array.isArray(cell) ? cell : [cell]))

    rows.forEach((cols, r) => {
      const resolvedCols = []

      cols.forEach(([
        content, colspan, rowspan, align, valign, attrs
      ], c) => {
        let col = {
          content,
          colspan: colspan || 1,
          rowspan: rowspan || 1,
          align: align || alignProp.value,
          valign: valign || valignProp.value,
          attrs: attrs || {},
          row: r,
          col: c,
          slot: `cell_${r}_${c}`,
        }

        if (content && typeof content === 'object') {
          col = {
            ...col,
            component: `${upperFirst(camelCase(content.type))}Element`,
            name: content.name || resolveComponentName(r, c),
            schema: {
              ...content,
              presets: presets.value,
            },
          }
        }

        resolvedCols.push([col, col.colspan, col.rowspan, col.align])
      })

      resolvedRows.push(resolvedCols)
    })

    return resolvedRows
  })

  /**
   * The `style` properties that should be added to the grid's DOM element.
   *
   * @type {object}
   */
  const gridStyle = computed(() => {
    const colWidths = []

    for (let c = 0; c < parseInt(cols.value); c++) {
      colWidths.push(widths.value[c] || '1fr')
    }

    return {
      'grid-template-columns': colWidths.join(' '),
      'grid-template-rows': `repeat(${rows.value}, auto)`,
      'min-width': typeof minWidth.value === 'number'
        ? `${minWidth.value}px`
        : minWidth.value,
      'max-width': typeof maxWidth.value === 'number'
        ? maxWidth.value > 0 ? `${maxWidth.value}px` : undefined
        : maxWidth.value,

    }
  })

  /**
   * Whether the element is in table view (has `grid-table` preset).
   *
   * @type {boolean}
   */
  const isTableView = computed(() => {
    return presets.value.includes('grid-table')
  })

  // ============== METHODS ===============

  /**
   * Resolves the cell component name based on row and column index.
   *
   * @returns {string}
   * @param {number} rowIndex* the index of the row
   * @param {number} colIndex* the index of the column
   */
  const resolveComponentName = (rowIndex, colIndex) => {
    return `${name.value}_${rowIndex}_${colIndex}`
  }
  
  return {
    cells,
    isTableView,
    gridStyle,
    resolvedRows,
    resolveComponentName,
  }
}

export default base