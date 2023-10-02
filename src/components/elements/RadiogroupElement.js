import useElement from './../../composables/useElement'
import useForm$ from './../../composables/useForm$'
import useTheme from './../../composables/useTheme'
import useLayout from './../../composables/elements/useLayout'
import usePath from './../../composables/elements/usePath'
import useConditions from './../../composables/useConditions'
import useValue from './../../composables/elements/useValue'
import useData from './../../composables/elements/useData'
import useDefault from './../../composables/elements/useDefault'
import useNullValue from './../../composables/elements/useNullValue'
import useValidation from './../../composables/elements/useValidation'
import useLabel from './../../composables/elements/useLabel'
import useClasses from './../../composables/elements/useClasses'
import useColumns from './../../composables/elements/useColumns'
import useBaseElement from './../../composables/elements/useBaseElement'
import useGenericName from './../../composables/elements/useGenericName'
import useView from './../../composables/elements/useView'
import useTemplates from './../../composables/elements/useTemplates'
import useSlots from './../../composables/elements/useSlots'
import useEvents from './../../composables/useEvents'
import useFieldId from './../../composables/elements/useFieldId'
import useWatchValue from './../../composables/elements/useWatchValue'
import useFocus from './../../composables/elements/useFocus'

import { radiogroup as useDisabled } from './../../composables/elements/useDisabled'
import { radiogroup as useAsyncItems } from './../../composables/elements/useAsyncItems'
import { radiogroup as useA11y } from './../../composables/elements/useA11y'

import BaseElement from './../../mixins/BaseElement'
import HasView from './../../mixins/HasView'
import HasChange from './../../mixins/HasChange'
import HasData from './../../mixins/HasData'
import HasValidation from './../../mixins/HasValidation'

export default {
  name: 'RadiogroupElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'radiogroup',
      private: true,
    },
    default: {
      required: false,
      type: [String, Number],
      default: null
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    items: {
      required: false,
      type: [Object, Array, Function, String],
      localized: true,
      default: () => ({})
    },
    disables: {
      required: false,
      type: [Array],
      default: () => ([])
    },
    clearOnRefetch: {
      type: [Boolean],
      required: false,
      default: true,
    },
  },
  setup(props, context) {
    context.features = [
      useForm$,
      useTheme,
      useLayout,
      usePath,
      useNullValue,
      useFieldId,
      useEvents,
      useBaseElement,
      useDisabled,
      useDefault,
      useValue,
      useAsyncItems,
      useConditions,
      useValidation,
      useData,
      useLabel,
      useGenericName,
      useView,
      useTemplates,
      useClasses,
      useColumns,
      useSlots,
      useA11y,
      useWatchValue,
      useFocus,
    ]
    context.slots = [
      'radio', 'label', 'info', 'description', 'before',
      'between', 'after',
    ]

    return {
      ...useElement(props, context)
    }
  },
}