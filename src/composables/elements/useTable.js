import { computed, toRefs, inject, ref, watch } from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import isEqual from 'lodash/isEqual'
import cloneDeep from 'lodash/cloneDeep'
import localize from './../../utils/localize'
import walkCells from './../../utils/walkCells'

const base = function(props, context, dependencies)
{
  const {
    tr,
    heading,
    align: alignProp,
    valign: valignProp,
    presets,
    cols,
    rows,
    name,
  } = toRefs(props)

  const {
    el$,
    form$,
    path,
  } = dependencies

  const config$ = inject('config$')

  // ================ DATA ================

  const resolvedRows = computed(() => {
    const resolvedRows = []
    let grid = tr.value

    if (!grid || !grid.length) {
      grid = [...Array(rows.value)].map(r => [...Array(cols.value)].map(c => null))
    }

    grid = grid.map(cols => cols.map(cell => Array.isArray(cell) ? cell : [cell]))

    grid.forEach((cols, r) => {
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
              displayErrors: false,
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

  const cells = computed(() => {
    const grid = resolvedRows.value

    const cells = []

    walkCells(resolvedRows.value, ({ field, colspan, rowspan, colIndex, rowIndex, rowStart, colStart, rowEnd, colEnd }) => {
      cells.push({
        ...field,
        col: colIndex,
        row: rowIndex,
        style: colspan > 1 || rowspan > 1
          ? { 'grid-area': `${rowStart + 1} / ${colStart + 1} / ${rowEnd + 2} / ${colEnd + 2}` }
          : {}
      })
    })

    return cells
  })

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
    resolvedRows,
    resolveComponentName,
  }
}

export default base