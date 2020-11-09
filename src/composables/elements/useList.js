import { toRefs } from 'composition-api'
import useForm$ from './../useForm$'
import useTheme from './../useTheme'
import useConditions from './../useConditions'
import useLabel from './features/useLabel'
import useColumns from './features/useColumns'
import useDescription from './features/useDescription'
import useInfo from './features/useInfo'
import useBaseElement from './features/useBaseElement'
import useView from './features/useView'
import useComponents from './features/useComponents'
import useLayout from './features/useLayout'
import useSlots from './features/useSlots'
import useElements from './../useElements'
import useDisabledList from './features/useDisabledList'
import useDefault from './features/useDefault'
import useEvents from './../useEvents'
import useArrayType from './features/useArrayType'
import useSort from './features/useSort'
import useOrder from './features/useOrder'
import usePrototype from './features/usePrototype'
import useWatchPrototype from './features/useWatchPrototype'
import useDebounce from './features/useDebounce'

import usePath from './features/usePath'
import useValueList from './features/useValueList'
import useDataList from './features/useDataList'
import useClassesList from './features/useClassesList'
import useChildrenList from './features/useChildrenList'
import useValidationList from './features/useValidationList'
import useNullValueArray from './features/useNullValueArray'

export default function useList(props, context) {
  const { schema } = toRefs(props)

  const form$ = useForm$(props, context)
  const theme = useTheme(props, context)
  const path = usePath(props, context)
  const description = useDescription(props, context)
  const info = useInfo(props, context)
  const disabled = useDisabledList(props, context)
  const nullValue = useNullValueArray(props, context)
  const prototype = usePrototype(props, context)
  const children = useChildrenList(props, context)
  const debounce = useDebounce(props, context)

  const default_ = useDefault(props, context, {
    nullValue: nullValue.nullValue
  })

  const label = useLabel(props, context, {
    form$: form$.form$,
  })

  const baseElement = useBaseElement(props, context, {
    label: label.label,
  })

  const arrayType = useArrayType(props, context)

  const events = useEvents(props, context, {
    form$: form$.form$,
    descriptor: schema,
  }, {
    events: ['change', 'add', 'remove', 'sort']
  })

  const value = useValueList(props, context, {
    children$: children.children$,
    nullValue: nullValue.nullValue,
    default: default_.default,
  })

  const elements = useElements(props, context, {
    theme: theme.theme,
  })

  const conditions = useConditions(props, context, {
    form$: form$.form$,
    path: path.path,
    descriptor: schema,
  })

  const validation = useValidationList(props, context, {
    form$: form$.form$,
    value: value.value,
    children$: children.children$,
    form$: form$.form$,
    path: path.path,
  })

  const columns = useColumns(props, context, {
    form$: form$.form$,
  })

  const view = useView(props, context, {
    available: conditions.available,
  })

  const components = useComponents(props, context, {
    theme: theme.theme,
    form$: form$.form$
  })

  const layout = useLayout(props, context, {
    components: components.components,
  })

  const slots = useSlots(props, context, {
    form$: form$.form$,
    components: components.components,
  })

  const order = useOrder(props, context, {
    isObject: prototype.isObject,
    children$: children.children$,
  })

  const data = useDataList(props, context, {
    form$: form$.form$,
    children$: children.children$,
    instances: children.instances,
    default: default_.default,
    nullValue: nullValue.nullValue,
    available: conditions.available,
    disabled: disabled.disabled,

    value: value.value,
    currentValue: value.currentValue,
    previousValue: value.previousValue,

    dirt: validation.dirt,
    validate: validation.validate,
    validateValidators: validation.validateValidators,
    resetValidators: validation.resetValidators,

    nullValue: nullValue.nullValue,
    order: order.order,
    orderBy: order.orderBy,
    storeOrder: order.storeOrder,
    refreshOrderStore: order.refreshOrderStore,

    isObject: prototype.isObject,
    prototype: prototype.prototype,

    fire: events.fire,
  }, {
    initial: 1
  })

  const sort = useSort(props, context, {
    child$: children.child$,
    currentValue: value.currentValue,
    fire: events.fire,
    disabled: disabled.disabled,
    updated: data.updated,
    refreshOrderStore: order.refreshOrderStore,
    instances: children.instances,
  })

  const classes = useClassesList(props, context, {
    form$: form$.form$,
    theme: theme.theme,
    sort: sort.sort,
    disabled: disabled.disabled,
  })

  const watchPrototype = useWatchPrototype(props, context, {
    prototype: prototype.prototype,
    value: value.value,
    clear: data.clear,
    insert: children.insert,
    instances: children.instances,
  })

  return {
    ...form$,
    ...theme,
    ...path,
    ...description,
    ...info,
    ...disabled,
    ...nullValue,
    ...label,
    ...baseElement,
    ...arrayType,
    ...children,
    ...value,
    ...elements,
    ...conditions,
    ...validation,
    ...classes,
    ...columns,
    ...view,
    ...components,
    ...layout,
    ...slots,
    ...data,
    ...events,
    ...sort,
    ...watchPrototype,
    ...default_,
    ...order,
    ...debounce,
    ...prototype,
  }
} 