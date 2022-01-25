import useElement from './../../composables/useElement'
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

import { static_ as useBaseElement } from './../../composables/elements/useBaseElement'
import { static_ as usePath } from './../../composables/elements/usePath'

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
  },
  setup(props, context) {
    context.features = [
      useForm$,
      useTheme,
      useLayout,
      usePath,
      useStatic,
      useEvents,
      useBaseElement,
      useConditions,
      useLabel,
      useView,
      useTemplates,
      useClasses,
      useColumns,
      useSlots,
    ]
    context.slots = [
      'default', 'label', 'info', 'description',
      'before', 'between', 'after',
    ]
    context.watchValue = false
    context.initValidation = false

    return {
      ...useElement(props, context)
    }
  },
}