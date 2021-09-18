import useForm$ from './../../composables/useForm$'
import useTheme from './../../composables/useTheme'
import usePath from './../../composables/elements/usePath'
import useConditions from './../../composables/useConditions'
import useLabel from './../../composables/elements/useLabel'
import useColumns from './../../composables/elements/useColumns'
import useGenericName from './../../composables/elements/useGenericName'
import useView from './../../composables/elements/useView'
import useComponents from './../../composables/elements/useComponents'
import useSlots from './../../composables/elements/useSlots'
import useButton from './../../composables/elements/useButton'
import useLayout from './../../composables/elements/useLayout'

import { button as useDisabled } from './../../composables/elements/useDisabled'
import { button as useClasses } from './../../composables/elements/useClasses'
import { static_ as useBaseElement } from './../../composables/elements/useBaseElement'

import BaseElement from './../../mixins/BaseElement'
import HasView from './../../mixins/HasView'

export default {
  name: 'ButtonElement',
  mixins: [BaseElement, HasView],
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
      default: null
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

    const baseElement = useBaseElement(props, context, {
      form$: form$.form$,
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
    })

    const genericName = useGenericName(props, context, {
      label: label.label,
    })
    
    const components = useComponents(props, context, {
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
    })

    const columns = useColumns(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      hasLabel: label.hasLabel,
    })

    const view = useView(props, context, {
      available: conditions.available,
      active: baseElement.active,
    })

    const slots = useSlots(props, context, {
      form$: form$.form$,
      components: components.components,
    }, {
      slots: [
        'label', 'description', 'before',
        'between', 'after'
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
      ...button,
      ...disabled,
    }
  }
}