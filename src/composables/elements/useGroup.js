import { toRefs } from 'composition-api'
import useForm$ from './../useForm$'
import useTheme from './../useTheme'
import useConditions from './../useConditions'
import useLabel from './features/useLabel'
import useClasses from './features/useClasses'
import useColumns from './features/useColumns'
import useDescription from './features/useDescription'
import useInfo from './features/useInfo'
import useBaseElement from './features/useBaseElement'
import useView from './features/useView'
import useComponents from './features/useComponents'
import useLayout from './features/useLayout'
import useSlots from './features/useSlots'
import useElements from './../useElements'

import usePathGroup from './features/usePathGroup'
import useValidationGroup from './features/useValidationGroup'
import useChildrenGroup from './features/useChildrenGroup'
import useValueGroup from './features/useValueGroup'
import useDataGroup from './features/useDataGroup'

export default function useGroup(props, context) {
  const { schema } = toRefs(props)

  const form$ = useForm$(props, context)
  const theme = useTheme(props, context)
  const path = usePathGroup(props, context)
  const description = useDescription(props, context)
  const info = useInfo(props, context)

  const label = useLabel(props, context, {
    form$: form$.form$,
  })

  const baseElement = useBaseElement(props, context, {
    label: label.label,
  })

  const children = useChildrenGroup(props, context, {
    form$: form$.form$,
  })

  const value = useValueGroup(props, context, {
    children$: children.children$
  })

  const elements = useElements(props, context, {
    theme: theme.theme,
  })

  const conditions = useConditions(props, context, {
    form$: form$.form$,
    path: path.path,
    descriptor: schema,
  })

  const validation = useValidationGroup(props, context, {
    form$: form$.form$,
    value: value.value,
    children$: children.children$,
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

  const data = useDataGroup(props, context, {
    form$: form$.form$,
    available: conditions.available,
    value: value.value,
    previousValue: value.previousValue,
    clean: validation.clean,
    validate: validation.validate,
    resetValidators: validation.resetValidators,
    children$: children.children$,
  })

  return {
    ...form$,
    ...theme,
    ...path,
    ...conditions,
    ...value,
    ...value,
    ...label,
    ...classes,
    ...columns,
    ...description,
    ...info,
    ...baseElement,
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