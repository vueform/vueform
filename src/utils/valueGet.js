import cloneDeep from 'lodash/cloneDeep'
import get from 'lodash/get'
import getRowKey from './getRowKey'
import getColKey from './getColKey'

export default ({ parent, name, form$, dataPath, internalValue, defaultValue}) => {
  let value
  
  if (parent.value && parent.value.isMatrixType) {
    const row = parent.value.resolvedRows[getRowKey(name.value)]
    const col = parent.value.resolvedColumns[getColKey(name.value)]

    let rowModel = form$.value.isSync
      ? get(form$.value.model, `${parent.value.dataPath}.${row.value}`)
      : parent.value.value[row.value]

    switch (parent.value.dataType) {
      case 'assoc':
        value = rowModel === col.value ? true : null
        break

      case 'array':
        value = Array.isArray(rowModel) && rowModel.includes(col.value)
        break

      default:
        value = rowModel?.[col.value]
    }
  } else if (form$.value.isSync) {
    value = get(form$.value.model, dataPath.value)
  }
  else if (parent.value && (parent.value.isObjectType || parent.value.isGroupType || parent.value.isListType)) {
    value = parent.value.value[name.value] 
  } else {
    value = internalValue?.value
  }

  return value !== undefined ? value : (defaultValue?.value instanceof File ? defaultValue?.value : cloneDeep(defaultValue?.value))
}