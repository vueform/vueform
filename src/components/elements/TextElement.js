import useEl$ from './../../composables/elements/useEl$'
import useForm$ from './../../composables/useForm$'
import useTheme from './../../composables/useTheme'
import useLayout from './../../composables/elements/useLayout'
import useInput from './../../composables/elements/useInput'
import usePath from './../../composables/elements/usePath'
import useNullValue from './../../composables/elements/useNullValue'
import useFieldId from './../../composables/elements/useFieldId'
import useEvents from './../../composables/useEvents'
import useBaseElement from './../../composables/elements/useBaseElement'
import useDisabled from './../../composables/elements/useDisabled'
import useReadonly from './../../composables/elements/useReadonly'
import useAddons from './../../composables/elements/useAddons'
import { text as useDefault } from './../../composables/elements/useDefault'
import useConditions from './../../composables/useConditions'
import { text as useValidation } from './../../composables/elements/useValidation'
import useLoading from './../../composables/elements/useLoading'
import useNumbers from './../../composables/elements/useNumbers'
import { text as useValue } from './../../composables/elements/useValue'
import useEmpty from './../../composables/elements/useEmpty'
import { text as useData } from './../../composables/elements/useData'
import useLabel from './../../composables/elements/useLabel'
import useGenericName from './../../composables/elements/useGenericName'
import useView from './../../composables/elements/useView'
import useTemplates from './../../composables/elements/useTemplates'
import useClasses from './../../composables/elements/useClasses'
import useColumns from './../../composables/elements/useColumns'
import useSlots from './../../composables/elements/useSlots'
import useHandleInput from './../../composables/elements/useHandleInput'
import useFocused from './../../composables/elements/useFocused'
import useHandleBlur from './../../composables/elements/useHandleBlur'
import useA11y from './../../composables/elements/useA11y'
import useWatchValue from './../../composables/elements/useWatchValue'
import useFocus from './../../composables/elements/useFocus'
import useHandleKeyEvents from './../../composables/elements/useHandleKeyEvents'
import useFloating from './../../composables/elements/useFloating'
import usePlaceholder from './../../composables/elements/usePlaceholder'

import useElement from './../../composables/useElement'

import BaseElement from './../../mixins/BaseElement'
import HasView from './../../mixins/HasView'
import HasChange from './../../mixins/HasChange'
import HasData from './../../mixins/HasData'
import HasValidation from './../../mixins/HasValidation'

export default {
  name: 'TextElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['reset', 'clear', 'change', 'blur', 'focus', 'keydown', 'keyup', 'keypress', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
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
      type: [Boolean, Function, Array, Object],
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
      type: [Boolean, Function, Array, Object],
      default: false
    },

    inputType: {
      required: false,
      type: [String],
      default: 'text'
    },
    forceNumbers: {
      required: false,
      type: [Boolean],
      default: null
    },
    expression: {
      required: false,
      type: [String, Object],
      default: undefined,
      localized: true,
    },
    attrs: {
      required: false,
      type: [Object],
      default: () => ({}),
    },
    addons: {
      required: false,
      type: [Object],
      localized: true,
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
    onKeydown: {
      required: false,
      type: [Function],
      default: null,
      private: true,
    },
    onKeyup: {
      required: false,
      type: [Function],
      default: null,
      private: true,
    },
    onKeypress: {
      required: false,
      type: [Function],
      default: null,
      private: true,
    },
  },
  setup(props, ctx) {
    const context = { ...ctx }
    
    context.features = [
      useEl$,
      useForm$,
      useTheme,
      useLayout,
      useInput,
      usePath,
      useNullValue,
      useFieldId,
      useEvents,
      useBaseElement,
      useDisabled,
      useReadonly,
      useAddons,
      useDefault,
      useConditions,
      useValidation,
      useLoading,
      useNumbers,
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
      useFloating,
      usePlaceholder,
    ]
    context.slots = [
      'label', 'info', 'required', 'description', 'before',
      'between', 'after', 'addon-before', 'addon-after',
    ]

    return {
      ...useElement(props, context)
    }
  },
}