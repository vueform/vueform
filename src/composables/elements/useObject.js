import { toRefs, onMounted } from 'composition-api'
import useForm$ from './../useForm$'
import useTheme from './../useTheme'
import usePath from './features/usePath'
import useConditions from './../useConditions'
import useLabel from './features/useLabel'
import useClasses from './features/useClasses'
import useColumns from './features/useColumns'
import useDescription from './features/useDescription'
import useInfo from './features/useInfo'
import useBaseElement from './features/useBaseElement'
import useGenericName from './features/useGenericName'
import useView from './features/useView'
import useComponents from './features/useComponents'
import useLayout from './features/useLayout'
import useSlots from './features/useSlots'
import useElements from './../useElements'

import { object as useValue } from './features/useValue'
import { object as useData } from './features/useData'
import { object as useChildren } from './features/useChildren'
import { object as useValidation } from './features/useValidation'

export default function useObject(props, context) {
  const { schema } = toRefs(props)

  const form$ = useForm$(props, context)
  const theme = useTheme(props, context)
  const path = usePath(props, context)
  const description = useDescription(props, context)
  const info = useInfo(props, context)

  const baseElement = useBaseElement(props, context, {
    form$: form$.form$,
  })

  const label = useLabel(props, context, {
    form$: form$.form$,
  })

  const genericName = useGenericName(props, context, {
    label: label.label,
  })

  const children = useChildren(props, context, {
    form$: form$.form$,
  })

  const value = useValue(props, context, {
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

  const validation = useValidation(props, context, {
    form$: form$.form$,
    value: value.value,
    children$: children.children$,
    form$: form$.form$,
  })

  const classes = useClasses(props, context, {
    form$: form$.form$,
    theme: theme.theme,
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
  }, {
    slots: [
      'label', 'info', 'description', 'message',
      'before', 'between', 'after'
    ]
  })

  const data = useData(props, context, {
    form$: form$.form$,
    available: conditions.available,
    value: value.value,
    previousValue: value.previousValue,
    clean: validation.clean,
    validate: validation.validate,
    resetValidators: validation.resetValidators,
    children$: children.children$,
  })
  
  onMounted(() => {
    validation.initMessageBag()  
  })

  return {
    ...form$,
    ...theme,
    ...path,
    ...conditions,
    ...value,
    ...label,
    ...classes,
    ...columns,
    ...description,
    ...info,
    ...baseElement,
    ...genericName,
    ...view,
    ...components,
    ...layout,
    ...slots,
    ...data,
    ...children,
    ...elements,
    ...validation,
  }
} 