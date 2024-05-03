import useElement from './../../composables/useElement'
import useForm$ from './../../composables/useForm$'
import useFieldId from './../../composables/elements/useFieldId'
import useTheme from './../../composables/useTheme'
import useLayout from './../../composables/elements/useLayout'
import useInput from './../../composables/elements/useInput'
import usePath from './../../composables/elements/usePath'
import useConditions from './../../composables/useConditions'
import useValue from './../../composables/elements/useValue'
import useNullValue from './../../composables/elements/useNullValue'
import useLabel from './../../composables/elements/useLabel'
import useColumns from './../../composables/elements/useColumns'
import useBaseElement from './../../composables/elements/useBaseElement'
import useGenericName from './../../composables/elements/useGenericName'
import useView from './../../composables/elements/useView'
import useTemplates from './../../composables/elements/useTemplates'
import useSlots from './../../composables/elements/useSlots'
import useDisabled from './../../composables/elements/useDisabled'
import useEvents from './../../composables/useEvents'
import useEmpty from './../../composables/elements/useEmpty'
import useLoading from './../../composables/elements/useLoading'
import useFloating from './../../composables/elements/useFloating'
import useClasses from './../../composables/elements/useClasses'
import useFocused from './../../composables/elements/useFocused'
import useHandleBlur from './../../composables/elements/useHandleBlur'
import useWatchValue from './../../composables/elements/useWatchValue'
import useA11y from './../../composables/elements/useA11y'
import useFocus from './../../composables/elements/useFocus'
import usePlaceholder from './../../composables/elements/usePlaceholder'
import usePhone from './../../composables/elements/usePhone'
import useData from './../../composables/elements/useData'

import { phone as useHandleKeyEvents } from './../../composables/elements/useHandleKeyEvents'
import { phone as useHandleInput } from './../../composables/elements/useHandleInput'
import { text as useValidation } from './../../composables/elements/useValidation'
import { text as useDefault } from './../../composables/elements/useDefault'

import BaseElement from './../../mixins/BaseElement'
import HasView from './../../mixins/HasView'
import HasChange from './../../mixins/HasChange'
import HasData from './../../mixins/HasData'
import HasValidation from './../../mixins/HasValidation'

export default {
  name: 'PhoneElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'select', 'blur', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'text',
      private: true,
    },
    default: {
      required: false,
      type: [String, Number, Object],
      localized: true,
      default: null
    },
    debounce: {
      required: false,
      type: [Number],
      default: null
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    floating: {
      required: false,
      type: [String, Boolean, Object],
      localized: true,
      default: null
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    placeholder: {
      required: false,
      type: [String, Object],
      localized: true,
      default: null
    },
    readonly: {
      required: false,
      type: [Boolean],
      default: false
    },

    include: {
      required: false,
      type: [Array],
      default: () => ([]),
    },
    exclude: {
      required: false,
      type: [Array],
      default: () => ([]),
    },
    attrs: {
      required: false,
      type: [Object],
      default: () => ({}),
    },
    autocomplete: {
      required: false,
      type: [String, Number],
      default: null
    },
    loading: {
      type: [Boolean],
      required: false,
      default: false,
    },

    onBlur: {
      required: false,
      type: [Function],
      default: null,
      private: true,
    },
    onSelect: {
      required: false,
      type: [Function],
      default: null,
      private: true,
    },
  },
  setup(props, context) {
    context.features = [
      useForm$,
      useTheme,
      useLayout,
      useInput,
      usePath,
      useDisabled,
      useNullValue,
      useFieldId,
      useFloating,
      useEvents,
      useBaseElement,
      useDefault,
      useConditions,
      useValidation,
      useLoading,
      useValue,
      useEmpty,
      useData,
      useLabel,
      useGenericName,
      useView,
      useTemplates,
      useClasses,
      useColumns,
      useSlots,
      useHandleInput,
      useFocused,
      useHandleBlur,
      useA11y,
      useWatchValue,
      useFocus,
      useHandleKeyEvents,
      usePlaceholder,
      usePhone,
    ]
    context.slots = [
      'label', 'info', 'description', 'before',
      'between', 'after',
    ]

    return {
      ...useElement(props, context)
    }
  },
}