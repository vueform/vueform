import useElement from './../../composables/useElement'
import useForm$ from './../../composables/useForm$'
import useTheme from './../../composables/useTheme'
import useLayout from './../../composables/elements/useLayout'
import useLabel from './../../composables/elements/useLabel'
import useColumns from './../../composables/elements/useColumns'
import useGenericName from './../../composables/elements/useGenericName'
import useView from './../../composables/elements/useView'
import useTemplates from './../../composables/elements/useTemplates'
import useSlots from './../../composables/elements/useSlots'
import useElements from './../../composables/useElements'
import useDisabled from './../../composables/elements/useDisabled'
import useEvents from './../../composables/useEvents'
import useSort from './../../composables/elements/useSort'
import useSorting from './../../composables/elements/useSorting'
import useOrder from './../../composables/elements/useOrder'
import usePrototype from './../../composables/elements/usePrototype'
import usePath from './../../composables/elements/usePath'
import useChildren from './../../composables/elements/useChildren'
import useDefault from './../../composables/elements/useDefault'
import useControls from './../../composables/elements/useControls'
import useClasses from './../../composables/elements/useClasses'
import useFieldId from './../../composables/elements/useFieldId'
import useA11y from './../../composables/elements/useA11y'
import useFocus from './../../composables/elements/useFocus'

import { array as useNullValue } from './../../composables/elements/useNullValue'
import { array as useEmpty } from './../../composables/elements/useEmpty'
import { list as useData } from './../../composables/elements/useData'
import { list as useValidation } from './../../composables/elements/useValidation'
import { list as useBaseElement } from './../../composables/elements/useBaseElement'
import { list as useValue } from './../../composables/elements/useValue'
import { list as useWatchValue } from './../../composables/elements/useWatchValue'
import { list as useConditions } from './../../composables/useConditions'

import BaseElement from './../../mixins/BaseElement'
import HasView from './../../mixins/HasView'
import HasChange from './../../mixins/HasChange'
import HasData from './../../mixins/HasData'
import HasValidation from './../../mixins/HasValidation'

export default {
  name: 'ListElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'add', 'remove', 'sort', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'list',
      private: true,
    },
    default: {
      required: false,
      type: [Array],
      default: undefined,
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    onAdd: {
      required: false,
      type: [Function],
      default: null,
      private: true,
    },
    onRemove: {
      required: false,
      type: [Function],
      default: null,
      private: true,
    },
    onSort: {
      required: false,
      type: [Function],
      default: null,
      private: true,
    },

    element: {
      required: false,
      type: [Object],
      default: null
    },
    object: {
      required: false,
      type: [Object],
      default: null
    },
    initial: {
      required: false,
      type: [Number],
      default: 1
    },
    min: {
      required: false,
      type: [Number],
      default: -1,
    },
    max: {
      required: false,
      type: [Number],
      default: -1,
    },
    addText: {
      required: false,
      type: [String],
      default: null,
      '@default': 'locale.elements.list.add',
    },
    sort: {
      required: false,
      type: [Boolean],
      default: false
    },
    controls: {
      required: false,
      type: [Object],
      default: () => ({
        add: true,
        remove: true,
        sort: true,
      })
    },
    storeOrder: {
      required: false,
      type: [String],
      default: null
    },
    order: {
      required: false,
      type: [String],
      default: null
    },
    orderBy: {
      required: false,
      type: [String],
      default: null
    },
  },
  setup(props, context) { //@todo:adam useValue and useDefault should be before useOrder
    context.features = [
      useForm$,
      useTheme,
      useLayout,
      usePath,
      useFieldId,
      useDisabled,
      useNullValue,
      usePrototype,
      useChildren,
      useSorting,
      useOrder,
      useEvents,
      useBaseElement,
      useDefault,
      useLabel,
      useGenericName,
      useElements,
      useConditions,
      useValidation,
      useValue,
      useControls,
      useEmpty,
      useColumns,
      useView,
      useTemplates,
      useClasses,
      useSlots,
      useData,
      useSort,
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