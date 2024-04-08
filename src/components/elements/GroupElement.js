import useElement from './../../composables/useElement'
import useForm$ from './../../composables/useForm$'
import useTheme from './../../composables/useTheme'
import useLayout from './../../composables/elements/useLayout'
import useLabel from './../../composables/elements/useLabel'
import useClasses from './../../composables/elements/useClasses'
import useColumns from './../../composables/elements/useColumns'
import useView from './../../composables/elements/useView'
import useTemplates from './../../composables/elements/useTemplates'
import useSlots from './../../composables/elements/useSlots'
import useFieldId from './../../composables/elements/useFieldId'
import useElements from './../../composables/useElements'
import useEvents from './../../composables/useEvents'
import useA11y from './../../composables/elements/useA11y'
import useFocus from './../../composables/elements/useFocus'

import { group as useBaseElement } from './../../composables/elements/useBaseElement'
import { group as useValue } from './../../composables/elements/useValue'
import { group as useDefault } from './../../composables/elements/useDefault'
import { group as usePath } from './../../composables/elements/usePath'
import { group as useValidation } from './../../composables/elements/useValidation'
import { group as useChildren } from './../../composables/elements/useChildren'
import { group as useData } from './../../composables/elements/useData'
import { group as useWatchValue } from './../../composables/elements/useWatchValue'
import { group as useConditions } from './../../composables/useConditions'
import { object as useNullValue } from './../../composables/elements/useNullValue'

import BaseElement from './../../mixins/BaseElement'
import HasView from './../../mixins/HasView'
import HasChange from './../../mixins/HasChange'
import HasData from './../../mixins/HasData'
import HasValidation from './../../mixins/HasValidation'

export default {
  name: 'GroupElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'group',
      private: true,
    },
    default: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    schema: {
      required: false,
      type: [Object],
      default: () => ({})
    },
  },
  setup(props, context) {
    context.features = [
      useForm$,
      useTheme,
      useLayout,
      usePath,
      useFieldId,
      useNullValue,
      useEvents,
      useBaseElement,
      useChildren,
      useDefault,
      useLabel,
      useValidation,
      useValue,
      useElements,
      useConditions,
      useView,
      useTemplates,
      useClasses,
      useColumns,
      useSlots,
      useData,
      useA11y,
      useWatchValue,
      useFocus,
    ]
    context.slots = [
      'label', 'info', 'description',
      'before', 'between', 'after',
    ]

    return {
      ...useElement(props, context)
    }
  },
}