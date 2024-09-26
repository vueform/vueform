import useElement from './../../composables/useElement'
import useForm$ from './../../composables/useForm$'
import useTheme from './../../composables/useTheme'
import useLayout from './../../composables/elements/useLayout'
import usePath from './../../composables/elements/usePath'
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
import useMatrix from './../../composables/elements/useMatrix'
import useDisabled from './../../composables/elements/useDisabled'
import useReadonly from './../../composables/elements/useReadonly'
import useDataType from './../../composables/elements/useDataType'

import { object as useBaseElement } from './../../composables/elements/useBaseElement'
import { object as useValue } from './../../composables/elements/useValue'
import { object as useNullValue } from './../../composables/elements/useNullValue'
import { object as useChildren } from './../../composables/elements/useChildren'
import { object as useValidation } from './../../composables/elements/useValidation'
import { object as useWatchValue } from './../../composables/elements/useWatchValue'
import { object as useConditions } from './../../composables/useConditions'

import { matrix as useData } from './../../composables/elements/useData'
import { matrix as useDefault } from './../../composables/elements/useDefault'

import BaseElement from './../../mixins/BaseElement'
import HasView from './../../mixins/HasView'
import HasChange from './../../mixins/HasChange'
import HasData from './../../mixins/HasData'
import HasValidation from './../../mixins/HasValidation'

export default {
  name: 'MatrixElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'remove', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'object',
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
    disabled: {
      required: false,
      type: [Boolean, Function, Array, Object],
      default: false
    },
    readonly: {
      required: false,
      type: [Boolean, Function, Array, Object],
      default: false
    },
    inputType: {
      required: false,
      type: [String, Object],
      default: 'radio',
    },
    rows: {
      required: false,
      type: [Array],
      default: () => ([]),
    },
    cols: {
      required: false,
      type: [Array],
      default: () => ([]),
    },

    // Whether all cells should be equal width
    equal: {
      required: false,
      type: [Boolean],
      default: true,
    },
    // The exact widths of columns in relative (`%`) or absolute value (`px`, `rem`, etc).
    widths: {
      required: false,
      type: [Array],
      default: () => ([]),
    },

    // User horizontal padding between cells
    padding: {
      required: false,
      type: [Boolean],
      default: false,
    },
    rowWrap: {
      required: false,
      type: [Boolean],
      default: false,
    },
    colWrap: {
      required: false,
      type: [Boolean],
      default: true,
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
      useMatrix,
      useDataType,
      useDefault,
      useValue,
      useLabel,
      useChildren,
      useElements,
      useConditions,
      useValidation,
      useView,
      useTemplates,
      useClasses,
      useColumns,
      useSlots,
      useData,
      useA11y,
      useWatchValue,
      useFocus,
      useDisabled,
      useReadonly,
    ]
    context.slots = [
      'label', 'info', 'required', 'description',
      'before', 'between', 'after'
    ]

    return {
      ...useElement(props, context)
    }
  },
}