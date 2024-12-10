import cloneDeep from 'lodash/cloneDeep'
import get from 'lodash/get'
import getRowKey from './getRowKey'
import getColKey from './getColKey'

export default (val, { parent, name, form$, dataPath, internalValue }) => {
  if (parent.value && parent.value.isMatrixType) {
    const row = parent.value.resolvedRows[getRowKey(name.value)]
    const col = parent.value.resolvedColumns[getColKey(name.value)]

    const matrixModel = form$.value.isSync
      ? get(form$.value.model, parent.value.dataPath)
      : parent.value.value

    const rowModel = matrixModel[row.value]

    let newValue

    switch (parent.value.dataType) {
      case 'assoc':
        let assocValue

        if (val) {
          assocValue = col.value
        } else if (rowModel === col.value || (rowModel && typeof rowModel !== typeof col.value)) {
          assocValue = null
        }

        newValue = {
          ...matrixModel,
        }

        if (assocValue !== undefined) {
          newValue[row.value] = assocValue
        }
        break

      case 'array':
        let arrayValue = []

        parent.value.resolvedColumns.forEach((column, c) => {
          if ((Array.isArray(rowModel) && rowModel.includes(column.value) && column.value !== col.value) || (column.value === col.value && val)) {
            arrayValue.push(column.value)
          }
        })

        newValue = {
          ...matrixModel,
          [row.value]: arrayValue
        }
        break

      default:
        const newParentValue = {}

        parent.value.resolvedRows.forEach((Row, r) => {
          newParentValue[Row.value] = {
            ...Object.keys(matrixModel[Row.value] || {}).filter(k => parent.value.resolvedColumns.map(c => String(c.value)).includes(k)).reduce((prev, curr) => ({
              ...prev,
              [curr]: matrixModel[Row.value][curr]
            }), {})
          }

          if (Row.value === row.value) {
            parent.value.resolvedColumns.forEach((Column, c) => {
              newParentValue[row.value][Column.value] = Column.value === col.value
                ? val
                : newParentValue[row.value][Column.value]
            })
          }
        })

        newValue = newParentValue
    }

    if (form$.value.isSync) {
      form$.value.updateModel(parent.value.dataPath, newValue)
    } else {
      parent.value.value = newValue
    }
  } else if (form$.value.isSync) {
    form$.value.updateModel(dataPath.value, val)
  }
  else if (parent.value && parent.value.isListType) {
    const newValue = parent.value.value.map((v, k) => k == name.value ? val : v)
    parent.value.update(newValue)
  } else if (parent.value && (parent.value.isObjectType || parent.value.isGroupType || parent.value.isGridType)) {
    parent.value.value = Object.assign({}, parent.value.value, {
      [name.value]: val,
    })
  } else {
    internalValue.value = val
  }
}