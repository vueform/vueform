import { onMounted } from 'composition-api'
import useForm$ from './../../composables/useForm$'
import useTheme from './../../composables/useTheme'
import usePath from './../../composables/elements/usePath'
import useConditions from './../../composables/useConditions'
import useLabel from './../../composables/elements/useLabel'
import useClasses from './../../composables/elements/useClasses'
import useColumns from './../../composables/elements/useColumns'
import useGenericName from './../../composables/elements/useGenericName'
import useView from './../../composables/elements/useView'
import useComponents from './../../composables/elements/useComponents'
import useSlots from './../../composables/elements/useSlots'
import useButtons from './../../composables/elements/useButtons'

import { static_ as useBaseElement } from './../../composables/elements/useBaseElement'
import { buttons as useChildren } from './../../composables/elements/useChildren'

export default {
  name: 'ButtonsElement',
  emits: [],
  slots: ['label', 'info', 'description', 'before', 'between', 'after'],
  props: {
    name: {
      required: true,
      type: [String, Number],
    },
    layout: {
      required: false,
      type: [String, Object],
      default: 'ElementLayout'
    },
    type: {
      required: false,
      type: [String],
      default: 'buttons'
    },
    buttons: {
      required: false,
      type: [Array],
      default: () => ([])
    },
    addClass: {
      required: false,
      type: [String, Array, Object],
      default: null
    },
    overrideClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    addClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    columns: {
      required: false,
      type: [Object, String],
      default: null
    },
    overrideComponents: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    conditions: {
      required: false,
      type: [Array],
      default: () => ([])
    },
    description: {
      required: false,
      type: [String],
      default: null
    },
    info: {
      required: false,
      type: [String],
      default: null
    },
    label: {
      required: false,
      type: [String],
      default: null
    },
    before: {
      required: false,
      type: [Object, String, Number],
      default: null
    },
    between: {
      required: false,
      type: [Object, String, Number],
      default: null
    },
    after: {
      required: false,
      type: [Object, String, Number],
      default: null
    },
    slots: {
      required: false,
      type: [Object],
      default: () => ({})
    },
  },
  setup(props, context) {
    const form$ = useForm$(props, context)
    const theme = useTheme(props, context)
    const path = usePath(props, context)

    const baseElement = useBaseElement(props, context, {
      form$: form$.form$,
    })

    const children = useChildren(props, context, {
      form$: form$.form$,
    })

    const conditions = useConditions(props, context, {
      form$: form$.form$,
      path: path.path,
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

    const buttons = useButtons(props, context, {
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
        'label', 'info', 'description', 'before',
        'between', 'after'
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
      ...baseElement,
      ...genericName,
      ...view,
      ...components,
      ...slots,
      ...buttons,
      ...children,
    }
  } 
}