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
import useGenericName from './../../composables/elements/useGenericName'
import useCells from './../../composables/elements/useCells'

import { object as useChildren } from './../../composables/elements/useChildren'
import { object as useConditions } from './../../composables/useConditions'
import { object as useNullValue } from './../../composables/elements/useNullValue'
import { object as useWatchValue } from './../../composables/elements/useWatchValue'

import { matrix as useBaseElement } from './../../composables/elements/useBaseElement'
import { matrix as useData } from './../../composables/elements/useData'
import { matrix as useValue } from './../../composables/elements/useValue'
import { matrix as useDefault } from './../../composables/elements/useDefault'
import { matrix as useValidation } from './../../composables/elements/useValidation'

import BaseElement from './../../mixins/BaseElement'
import HasView from './../../mixins/HasView'
import HasChange from './../../mixins/HasChange'
import HasData from './../../mixins/HasData'
import HasValidation from './../../mixins/HasValidation'

export default {
  name: 'MatrixElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'add', 'remove', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
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
    items: { // done
      required: false,
      type: [Array, Object, String, Function],
      default: () => ([]),
    },

    cols: { // done
      required: false,
      type: [Array, Object],
      default: () => ([]),
    },
    colWrap: {
      required: false,
      type: [Boolean],
      default: true,
    },
    hideCols: { // done
      required: false,
      type: [Boolean],
      default: false,
    },
    stickyCols: {
      required: false,
      type: [Boolean],
      default: false,
    },
    
    rows: { // done
      required: false,
      type: [Array, Object, Number],
      default: 1,
    },
    rowWrap: { // done
      required: false,
      type: [Boolean],
      default: true,
    },
    hideRows: { // done
      required: false,
      type: [Boolean],
      default: false,
    },
    stickyRows: {
      required: false,
      type: [Boolean],
      default: false,
    },
    min: { // done
      required: false,
      type: [Number, String],
      default: -1,
    },
    max: { // done
      required: false,
      type: [Number, String],
      default: -1,
    },
    canAdd: { // done
      required: false,
      type: [Boolean],
      default: true,
    },
    canRemove: { // done
      required: false,
      type: [Boolean],
      default: true,
    },
    addText: { // done
      required: false,
      type: [String],
      default: null,
      '@default': 'locale.elements.list.add',
    },

    minWidth: { // done
      required: false,
      type: [Number, String],
      default: 'min-content',
    },
    maxWidth: { // done
      required: false,
      type: [Number, String],
      default: '1fr',
    },
    gap: { // done
      required: false,
      type: [String, Number],
      default: 16,
    },
    padding: { // done
      required: false,
      type: [Boolean],
      default: false,
    },
    scrollable: {
      required: false,
      type: [Boolean],
      default: false,
    },
    templateColumns: { // done
      required: false,
      type: [String, Function],
      default: null,
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
      useEvents,
      useBaseElement,
      useCells,
      useNullValue,
      useDefault,
      useValue,
      useLabel,
      useGenericName,
      useDisabled,
      useReadonly,
      useMatrix,
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