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
import useEl$ from './../../composables/elements/useEl$'
import useGrid from './../../composables/elements/useGrid'

import { group as useValue } from './../../composables/elements/useValue'
import { group as useDefault } from './../../composables/elements/useDefault'
import { group as usePath } from './../../composables/elements/usePath'
import { group as useChildren } from './../../composables/elements/useChildren'
import { group as useData } from './../../composables/elements/useData'
import { group as useWatchValue } from './../../composables/elements/useWatchValue'
import { group as useConditions } from './../../composables/useConditions'
import { object as useNullValue } from './../../composables/elements/useNullValue'

import { grid as useBaseElement } from './../../composables/elements/useBaseElement'
import { grid as useValidation } from './../../composables/elements/useValidation'

import BaseElement from './../../mixins/BaseElement'
import HasView from './../../mixins/HasView'
import HasChange from './../../mixins/HasChange'
import HasData from './../../mixins/HasData'
import HasValidation from './../../mixins/HasValidation'

export default {
  name: 'GridElement',
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
    cols: {
      required: false,
      type: [Number],
      default: 1,
    },
    rows: {
      required: false,
      type: [Number],
      default: 1,
    },
    grid: {
      required: false,
      type: [Array],
      default: () => ([])
    },
    align: {
      required: false,
      type: [String],
      default: 'left',
    },
    valign: {
      required: false,
      type: [String],
      default: 'baseline',
    },
    widths: {
      required: false,
      type: [Array],
      default: () => ([]),
    },
    minWidth: {
      required: false,
      type: [String, Number],
      default: 0,
    },
    maxWidth: {
      required: false,
      type: [String, Number],
      default: -1,
    },
    scrollable: {
      required: false,
      type: [Boolean],
      default: false,
    },
    colHeader: {
      required: false,
      type: [Boolean],
      default: false,
    },
    rowHeader: {
      required: false,
      type: [Boolean],
      default: false,
    },
  },
  setup(props, ctx) {
    const context = { ...ctx }
    
    context.features = [
      useEl$,
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
      useGrid,
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
      'label', 'info', 'required', 'description',
      'before', 'between', 'after',
    ]

    return {
      ...useElement(props, context)
    }
  },
}