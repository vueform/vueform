import { toRefs } from 'composition-api'
import useForm$ from './../useForm$'
import useTheme from './../useTheme'
import usePath from './features/usePath'
import useConditions from './../useConditions'
import useLabel from './features/useLabel'
import useClasses from './features/useClasses'
import useColumns from './features/useColumns'
import useDescription from './features/useDescription'
import useInfo from './features/useInfo'
import useGenericName from './features/useGenericName'
import useView from './features/useView'
import useComponents from './features/useComponents'
import useLayout from './features/useLayout'
import useSlots from './features/useSlots'
import useEvents from './../useEvents'
import useStatic from './features/useStatic'

import { static_ as useBaseElement } from './features/useBaseElement'

export default function (props, context) {
  const { schema } = toRefs(props)

  const form$ = useForm$(props, context)
  const theme = useTheme(props, context)
  const path = usePath(props, context)
  const description = useDescription(props, context)
  const info = useInfo(props, context)
  const static_ = useStatic(props, context)

  const baseElement = useBaseElement(props, context, {
    form$: form$.form$,
  })

  const conditions = useConditions(props, context, {
    form$: form$.form$,
    path: path.path,
    descriptor: schema,
  })

  const events = useEvents(props, context, {
    form$: form$.form$,
    descriptor: schema,
  }, {
    events: [],
  })

  const label = useLabel(props, context, {
    form$: form$.form$,
  })

  const genericName = useGenericName(props, context, {
    label: label.label,
  })
  
  const components = useComponents(props, context, {
    theme: theme.theme,
    form$: form$.form$
  })

  const layout = useLayout(props, context, {
    components: components.components,
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

  const slots = useSlots(props, context, {
    form$: form$.form$,
    components: components.components,
  }, {
    slots: [
      'label', 'info', 'description',
      'before', 'between', 'after',
    ]
  })

  return {
    ...form$,
    ...theme,
    ...path,
    ...conditions,
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
    ...events,
    ...static_,
  }
} 