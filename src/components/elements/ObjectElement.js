import { toRefs, onMounted } from 'composition-api'
import useForm$ from './../../composables/useForm$'
import useTheme from './../../composables/useTheme'
import usePath from './../../composables/elements/usePath'
import useConditions from './../../composables/useConditions'
import useLabel from './../../composables/elements/useLabel'
import useClasses from './../../composables/elements/useClasses'
import useColumns from './../../composables/elements/useColumns'
import useBaseElement from './../../composables/elements/useBaseElement'
import useGenericName from './../../composables/elements/useGenericName'
import useView from './../../composables/elements/useView'
import useComponents from './../../composables/elements/useComponents'
import useSlots from './../../composables/elements/useSlots'
import useElements from './../../composables/useElements'

import { object as useValue } from './../../composables/elements/useValue'
import { object as useData } from './../../composables/elements/useData'
import { object as useChildren } from './../../composables/elements/useChildren'
import { object as useValidation } from './../../composables/elements/useValidation'

export default {
  name: 'ObjectElement',
  emits: [],
  slots: ['label', 'info', 'description', 'message', 'before', 'between', 'after'],
  props: {
    name: {
      required: true,
      type: [String, Number],
    },
    type: {
      required: false,
      type: [String],
      default: 'object'
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
    formatData: {
      required: false,
      type: [Function],
      default: null
    },
    formatLoad: {
      required: false,
      type: [Function],
      default: null
    },
    submit: {
      required: false,
      type: [Boolean],
      default: true
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
      type: [Object],
      default: null
    },
    between: {
      required: false,
      type: [Object],
      default: null
    },
    after: {
      required: false,
      type: [Object],
      default: null
    },
    slots: {
      required: false,
      type: [Object],
      default: () => ({})
    },
  },
  setup(props, context) {
    const { schema } = toRefs(props)

    const form$ = useForm$(props, context)
    const theme = useTheme(props, context)
    const path = usePath(props, context)

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
      ...baseElement,
      ...genericName,
      ...view,
      ...components,
      ...slots,
      ...data,
      ...children,
      ...elements,
      ...validation,
    }
  } 
}