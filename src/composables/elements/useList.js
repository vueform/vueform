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
import useDisabled from './features/useDisabled'
import useDefault from './features/useDefault'
import useEvents from './../useEvents'
import useArrayType from './features/useArrayType'
import useSort from './features/useSort'
import usePrototype from './features/usePrototype'
import useSortable from './features/useSortable'
import useWatchPrototype from './features/useWatchPrototype'

import usePath from './features/usePath'
import useValueList from './features/useValueList'
import useDataList from './features/useDataList'
import useClassesList from './features/useClassesList'
import useChildrenList from './features/useChildrenList'
import useValidationList from './features/useValidationList'
import useNullValueArray from './features/useNullValueArray'
import useHandleChangeList from './features/useHandleChangeList'

export default function useList(props, context) {
  const { schema } = toRefs(props)

  const form$ = useForm$(props, context)
  const theme = useTheme(props, context)
  const path = usePath(props, context)
  const description = useDescription(props, context)
  const info = useInfo(props, context)
  const disabled = useDisabled(props, context)
  const nullValue = useNullValueArray(props, context)
  const prototype = usePrototype(props, context)

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
    events: {
      change: [],
      add: [],
      sort: [],
      remove: [],
    },
  })

  const sort = useSort(props, context, {
    isObject: prototype.isObject,
  })

  const children = useChildrenList(props, context, {
    form$: form$.form$,
    default: default_.default,
    disabled: disabled.disabled,
    fireAdd: events.fireAdd,
    fireRemove: events.fireRemove,
    refreshOrderStore: sort.refreshOrderStore,
    prototype: prototype.prototype,
    isObject: prototype.isObject,
    storeOrder: sort.storeOrder,
    // handleChange: handleChange.handleChange,
  }, {
    initial: 1
  })

  const value = useValueList(props, context, {
    children$: children.children$,
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

  const classes = useClassesList(props, context, {
    form$: form$.form$,
    theme: theme.theme,
    sort: sort.sort,
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

  const handleChange = useHandleChangeList(props, context, {
    form$: form$.form$,
    validateValidators: validation.validateValidators,
    fireChange: events.fireChange,
  })
  
  const handleSort = useSort(props, context, {
    fireSort: events.fireSort,
    disabled: disabled.disabled,
    value: value.value,
  })

  const sortable = useSortable(props, context, {
    handleSort: disabled.handleSort,
    disabled: disabled.disabled,
    sort: sort.sort,
  })

  const data = useDataList(props, context, {
    form$: form$.form$,
    available: conditions.available,
    value: value.value,
    previousValue: value.previousValue,
    clean: validation.clean,
    validate: validation.validate,
    resetValidators: validation.resetValidators,
    children$: children.children$,
    instances: children.instances,
    nullValue: nullValue.nullValue,
    disabled: disabled.disabled,
    setInitialInstances: children.setInitialInstances,
    insert: children.insert,
    isObject: prototype.isObject,
    orderBy: sort.orderBy,
    order: sort.order,
  })

  const watchPrototype = useWatchPrototype(props, context, {
    prototype: prototype.prototype,
    value: value.value,
    clear: data.clear,
    insert: children.insert,
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
    ...handleChange,
    ...sort,
    ...sortable,
    ...handleSort,
    ...watchPrototype,
    ...default_,
  }
} 