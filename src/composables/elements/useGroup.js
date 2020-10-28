import { toRefs } from 'composition-api'
import useForm$ from './../useForm$'
import useTheme from './../useTheme'
import useGroupPath from './features/useGroupPath'
import useConditions from './../useConditions'
import useNestedValue from './features/useNestedValue'
import useGroupData from './features/useGroupData'
import useLabel from './features/useLabel'
import useClasses from './features/useClasses'
import useColumns from './features/useColumns'
import useDescription from './features/useDescription'
import useInfo from './features/useInfo'
import useBaseElement from './features/useBaseElement'
import useView from './features/useView'
import useComponents from './features/useComponents'
import useBaseLayout from './features/useBaseLayout'
import useSlots from './features/useSlots'
import useSchemaChildren from './features/useSchemaChildren'
import useChildrenValidation from './features/useChildrenValidation'
import useElements from './../useElements'

export default function useGroup(props, context) {
  const { schema } = toRefs(props)

  const form$ = useForm$(props, context)
  const theme = useTheme(props, context)
  const path = useGroupPath(props, context)
  const description = useDescription(props, context)
  const info = useInfo(props, context)
  const children = useSchemaChildren(props, context)

  const value = useNestedValue(props, context, {
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

  const validation = useChildrenValidation(props, context, {
    form$: form$.form$,
    value: value.value,
    children$: children.children$,
  })

  const label = useLabel(props, context, {
    form$: form$.form$,
  })

  const classes = useClasses(props, context, {
    form$: form$.form$,
    theme: theme.theme,
  })

  const columns = useColumns(props, context, {
    form$: form$.form$,
  })

  const baseElement = useBaseElement(props, context, {
    label: label.label,
  })

  const view = useView(props, context, {
    available: conditions.available,
  })

  const components = useComponents(props, context, {
    theme: theme.theme,
    form$: form$.form$
  })

  const layout = useBaseLayout(props, context, {
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

  const data = useGroupData(props, context, {
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