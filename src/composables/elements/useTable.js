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
  } = toRefs(props)

  const {
    el$,
    form$,
    path,
  } = dependencies

  const config$ = inject('config$')

  // ================ DATA ================

  const resolvedRows = computed(() => {
    const rows = []

    tr.value.forEach((row, r) => {
      const cols = []

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

        const col = {
          colspan,
          rowspan,
          align,
          valign,
          attrs,
          type: !r && heading.value ? 'th' : 'td',
          slot: `cell_${r}_${c}`,
        }

        if (typeof content === 'string') {
          col.content = content
        }
        else if (content === null) {
          const type = translate.value
            ? grow.value ? 't-textarea' : 't-text'
            : grow.value ? 'textarea' : 'text'

          col.schema = {
            type,
          }

          if (type.includes('textarea')) {
            col.schema.rows = 1
          }
        }
        else {
          col.schema = content
        }

        if (col.schema) {
          col.component = `${upperFirst(camelCase(col.schema.type))}Element`
          col.name = col.schema.name || resolveComponentName(r, c)
          col.schema.displayErrors = false
          col.schema.presets = presets.value
        }

        cols.push(col)
      })

      rows.push(cols)
    })

    return rows
  })

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
  
  return {
    resolvedRows,
    resolveComponentName,
  }
}

export default base