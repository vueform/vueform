import { onMounted, watch } from 'composition-api'
import useForm$ from './../../composables/useForm$'
import useTheme from './../../composables/useTheme'
import useLayout from './../../composables/elements/useLayout'
import usePath from './../../composables/elements/usePath'
import useConditions from './../../composables/useConditions'
import useLabel from './../../composables/elements/useLabel'
import useClasses from './../../composables/elements/useClasses'
import useColumns from './../../composables/elements/useColumns'
import useGenericName from './../../composables/elements/useGenericName'
import useView from './../../composables/elements/useView'
import useComponents from './../../composables/elements/useComponents'
import useSlots from './../../composables/elements/useSlots'
import useEvents from './../../composables/useEvents'
import useStatic from './../../composables/elements/useStatic'

import { static_ as useBaseElement } from './../../composables/elements/useBaseElement'

import BaseElement from './../../mixins/BaseElement'
import HasView from './../../mixins/HasView'

export default {
  name: 'StaticElement',
  mixins: [BaseElement, HasView],
  slots: ['label', 'info', 'description', 'before', 'between', 'after'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'static'
    },
    wrap: {
      required: false,
      type: [Boolean],
      default: true
    },
    content: {
      required: false,
      type: [String, Object],
      default: ''
    },
  },
  setup(props, context) {
    const form$ = useForm$(props, context)
    const theme = useTheme(props, context)
    const layout = useLayout(props, context)
    const path = usePath(props, context)
    const static_ = useStatic(props, context)

    const baseElement = useBaseElement(props, context, {
      form$: form$.form$,
    })

    const conditions = useConditions(props, context, {
      form$: form$.form$,
      path: path.path,
    })

    const events = useEvents(props, context, {
      form$: form$.form$,
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
      ...layout,
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
      ...events,
      ...static_,
    }
  } 
}