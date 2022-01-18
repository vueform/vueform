import useForm$ from './../../composables/useForm$'
import useTheme from './../../composables/useTheme'
import useConditions from './../../composables/useConditions'
import useLabel from './../../composables/elements/useLabel'
import useColumns from './../../composables/elements/useColumns'
import useView from './../../composables/elements/useView'
import useTemplates from './../../composables/elements/useTemplates'
import useSlots from './../../composables/elements/useSlots'
import useButton from './../../composables/elements/useButton'
import useLayout from './../../composables/elements/useLayout'
import useEvents from './../../composables/useEvents'
import useClasses from './../../composables/elements/useClasses'

import { button as useDisabled } from './../../composables/elements/useDisabled'
import { static_ as useBaseElement } from './../../composables/elements/useBaseElement'
import { static_ as usePath } from './../../composables/elements/usePath'

import BaseElement from './../../mixins/BaseElement'
import HasView from './../../mixins/HasView'

export default {
  name: 'ButtonElement',
  mixins: [BaseElement, HasView],
  emits: ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'button',
      private: true,
    },
    buttonLabel: {
      required: false,
      type: [String, Object, Function],
      default: null
    },
    buttonType: {
      required: false,
      type: [String],
      default: 'button' // button|anchor
    },
    buttonClass: {
      required: false,
      type: [String, Array, Object],
      default: null
    },
    disabled: {
      required: false,
      type: [Function, Boolean],
      default: false
    },
    loading: {
      required: false,
      type: [Function, Boolean],
      default: false
    },
    href: {
      required: false,
      type: [String],
      default: ''
    },
    target: {
      required: false,
      type: [String],
      default: null
    },
    onClick: {
      required: false,
      type: [Function],
      default: null,
      private: true,
    },
    resets: {
      required: false,
      type: [Boolean],
      default: false
    },
    submits: {
      required: false,
      type: [Boolean],
      default: false
    },
  },
  setup(props, context) {
    const form$ = useForm$(props, context)
    const theme = useTheme(props, context)
    const layout = useLayout(props, context)
    const path = usePath(props, context)

    const events = useEvents(props, context, {}, {
      events: context.emits,
    })

    const baseElement = useBaseElement(props, context, {
      form$: form$.form$,
      fire: events.fire,
    })
    
    const disabled = useDisabled(props, context, {
      form$: form$.form$,
      el$: baseElement.el$,
    })

    const conditions = useConditions(props, context, {
      form$: form$.form$,
      path: path.path,
    })

    const label = useLabel(props, context, {
      form$: form$.form$,
      el$: baseElement.el$,
    })
    
    const templates = useTemplates(props, context, {
      theme: theme.theme,
      form$: form$.form$
    })

    const button = useButton(props, context, {
      form$: form$.form$,
      isDisabled: disabled.isDisabled,
      el$: baseElement.el$,
    })

    const classes = useClasses(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      isLoading: button.isLoading,
      isDisabled: disabled.isDisabled,
      templates: templates.templates,
      el$: baseElement.el$,
    })

    const columns = useColumns(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      hasLabel: label.hasLabel,
    })

    const view = useView(props, context, {
      available: conditions.available,
      active: baseElement.active,
      form$: form$.form$,
      parent: path.parent,
    })

    const slots = useSlots(props, context, {
      form$: form$.form$,
      el$: baseElement.el$,
      templates: templates.templates,
    }, {
      slots: [
        'label',  'info', 'description',
        'before', 'between', 'after', 'default',
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
      ...view,
      ...templates,
      ...slots,
      ...button,
      ...disabled,
      ...events,
    }
  }
}