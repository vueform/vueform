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
import useFieldId from './../../composables/elements/useFieldId'
import useFocus from './../../composables/elements/useFocus'

import { button as useDisabled } from './../../composables/elements/useDisabled'
import { button as useA11y } from './../../composables/elements/useA11y'
import { static_ as useBaseElement } from './../../composables/elements/useBaseElement'
import { static_ as usePath } from './../../composables/elements/usePath'
import { static_ as useElement } from './../../composables/useElement'

import BaseElement from './../../mixins/BaseElement'
import HasView from './../../mixins/HasView'

export default {
  name: 'ButtonElement',
  mixins: [BaseElement, HasView],
  emits: ['click', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
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
    id: {
      required: false,
      type: [String],
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
    secondary: {
      required: false,
      type: [Boolean],
      default: false
    },
    danger: {
      required: false,
      type: [Boolean],
      default: false
    },
    full: {
      required: false,
      type: [Boolean],
      default: false
    },
    align: {
      required: false,
      type: [String],
      default: undefined,
    },
  },
  setup(props, context) {
    context.features = [
      useForm$,
      useTheme,
      useLayout,
      usePath,
      useEvents,
      useBaseElement,
      useDisabled,
      useConditions,
      useLabel,
      useView,
      useTemplates,
      useFieldId,
      useButton,
      useClasses,
      useColumns,
      useSlots,
      useA11y,
      useFocus,
    ]
    context.slots = [
      'label',  'info', 'description',
      'before', 'between', 'after', 'default',
    ]

    return {
      ...useElement(props, context)
    }
  },
}