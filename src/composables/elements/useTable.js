import { computed, toRefs, inject, ref, watch } from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import isEqual from 'lodash/isEqual'
import cloneDeep from 'lodash/cloneDeep'
import localize from './../../utils/localize'

const base = function(props, context, dependencies)
{
  const {
    tr,
    heading,
    align: alignProp,
    valign: valignProp,
    grow,
    translate,
    presets,
    cols,
    rows,
    name,
    inputType,
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

    if (!tr.value || !tr.value.length) {
      for (let r = 0; r < rows.value; r++) {
        const resolvedCols = []

        for (let c = 0; c < cols.value; c++) {
          const col = {
            type: 'td',
            slot: `cell_${r}_${c}`,
            align: alignProp.value,
            valign: valignProp.value,
            name: resolveComponentName(r, c),
          }

          if (inputType.value) {
            col.schema = {
              ...inputType.value,
              presets: presets.value,
            }
            col.component = `${upperFirst(camelCase(col.schema.type))}Element`
          }


          resolvedCols.push(col)
        }

        resolvedRows.push(resolvedCols)
      }

      return resolvedRows
    }

    tr.value.forEach((row, r) => {
      const resolvedCols = []

      row.forEach((column, c) => {
        let content = column
        let colspan = undefined
        let rowspan = undefined
        let align = alignProp.value
        let valign = valignProp.value
        let attrs = {}

        if (Array.isArray(column)) {
          content = column[0]
          colspan = column[1] || undefined
          rowspan = column[2] || undefined
          align = column[3] || align
          valign = column[4] || valign
          attrs = column[5] || {}
        }

        let col = {
          colspan,
          rowspan,
          align,
          valign,
          attrs,
          type: !r && heading.value ? 'th' : 'td',
          slot: `cell_${r}_${c}`,
        }

        if (typeof content === 'string' || !content) {
          col.content = content || ''
        } else {
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

        resolvedCols.push(col)
      })

      resolvedRows.push(resolvedCols)
    })

    return resolvedRows
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
    resolvedRows,
    resolveComponentName,
  }
}

export default base