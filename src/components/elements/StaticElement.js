import useForm$ from './../../composables/useForm$'
import useTheme from './../../composables/useTheme'
import useLayout from './../../composables/elements/useLayout'
import useConditions from './../../composables/useConditions'
import useLabel from './../../composables/elements/useLabel'
import useClasses from './../../composables/elements/useClasses'
import useColumns from './../../composables/elements/useColumns'
import useView from './../../composables/elements/useView'
import useTemplates from './../../composables/elements/useTemplates'
import useSlots from './../../composables/elements/useSlots'
import useEvents from './../../composables/useEvents'
import useStatic from './../../composables/elements/useStatic'
import useFieldId from './../../composables/elements/useFieldId'
import useFocus from './../../composables/elements/useFocus'

import { static_ as useBaseElement } from './../../composables/elements/useBaseElement'
import { static_ as usePath } from './../../composables/elements/usePath'
import { static_ as useA11y } from './../../composables/elements/useA11y'
import { static_ as useElement } from './../../composables/useElement'

import BaseElement from './../../mixins/BaseElement'
import HasView from './../../mixins/HasView'

export default {
  name: 'StaticElement',
  mixins: [BaseElement, HasView],
  emits: ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'static',
      private: true,
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    content: {
      required: false,
      type: [String, Object],
      default: ''
    },
    wrap: {
      required: false,
      type: [Boolean],
      default: true
    },
    tag: {
      required: false,
      type: [String],
      default: undefined,
    },
    allowHtml: {
      required: false,
      type: [Boolean],
      default: true,
    },
    href: {
      required: false,
      type: [String],
      default: undefined,
    },
    target: {
      required: false,
      type: [String],
      default: undefined,
    },
    src: {
      required: false,
      type: [String],
      default: undefined,
    },
    alt: {
      required: false,
      type: [String],
      default: undefined,
    },
    title: {
      required: false,
      type: [String],
      default: undefined,
    },
    width: {
      required: false,
      type: [String],
      default: undefined,
    },
    height: {
      required: false,
      type: [String],
      default: undefined,
    },
    attrs: {
      required: false,
      type: [Object],
      default: () => ({}),
    },
    align: {
      required: false,
      type: [String],
      default: undefined,
    },
    top: {
      required: false,
      type: [String, Number],
      default: 0,
    },
    bottom: {
      required: false,
      type: [String, Number],
      default: 0,
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
      useConditions,
      useLabel,
      useView,
      useTemplates,
      useClasses,
      useColumns,
      useSlots,
      useFieldId,
      useA11y,
      useFocus,
      useStatic,
    ]
    context.slots = [
      'default', 'label', 'info', 'description',
      'before', 'between', 'after',
    ]

    return {
      ...useElement(props, context)
    }
  },
}