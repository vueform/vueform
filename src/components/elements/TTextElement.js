import useForm$ from './../../composables/useForm$'
import useFieldId from './../../composables/elements/useFieldId'
import useTheme from './../../composables/useTheme'
import useLayout from './../../composables/elements/useLayout'
import useInput from './../../composables/elements/useInput'
import useAddons from './../../composables/elements/useAddons'
import usePath from './../../composables/elements/usePath'
import useConditions from './../../composables/useConditions'
import useLabel from './../../composables/elements/useLabel'
import useColumns from './../../composables/elements/useColumns'
import useBaseElement from './../../composables/elements/useBaseElement'
import useGenericName from './../../composables/elements/useGenericName'
import useView from './../../composables/elements/useView'
import useTemplates from './../../composables/elements/useTemplates'
import useSlots from './../../composables/elements/useSlots'
import useDisabled from './../../composables/elements/useDisabled'
import useEvents from './../../composables/useEvents'
import useHandleInput from './../../composables/elements/useHandleInput'
import useLanguages from './../../composables/elements/useLanguages'
import useFloating from './../../composables/elements/useFloating'
import useLoading from './../../composables/elements/useLoading'
import useClasses from './../../composables/elements/useClasses'
import useFocused from './../../composables/elements/useFocused'
import useHandleBlur from './../../composables/elements/useHandleBlur'
import useA11y from './../../composables/elements/useA11y'
import useFocus from './../../composables/elements/useFocus'
import useHandleKeyEvents from './../../composables/elements/useHandleKeyEvents'
import usePlaceholder from './../../composables/elements/usePlaceholder'
import useReadonly from './../../composables/elements/useReadonly'
import useEl$ from './../../composables/elements/useEl$'

import { multilingual as useValue } from './../../composables/elements/useValue'
import { multilingual as useData } from './../../composables/elements/useData'
import { multilingual as useDefault } from './../../composables/elements/useDefault'
import { multilingual as useNullValue } from './../../composables/elements/useNullValue'
import { multilingual as useValidation } from './../../composables/elements/useValidation'
import { multilingual as useEmpty } from './../../composables/elements/useEmpty'
import { multilingual as useElement } from './../../composables/useElement'
import { multilingual as useWatchValue } from './../../composables/elements/useWatchValue'

import BaseElement from './../../mixins/BaseElement'
import HasView from './../../mixins/HasView'
import HasChange from './../../mixins/HasChange'
import HasData from './../../mixins/HasData'
import HasValidation from './../../mixins/HasValidation'

export default {
  name: 'TTextElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['reset', 'clear', 'change', 'blur', 'focus', 'keydown', 'keyup', 'keypress', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 't-text',
      private: true,
    },
    default: {
      required: false,
      type: [Object, String, Number],
      localized: true,
      default: undefined
    },
    addons: {
      required: false,
      type: [Object],
      localized: true,
      default: () => ({})
    },
    autocomplete: {
      required: false,
      type: [String, Number],
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
    inputType: {
      required: false,
      type: [String],
      default: 'text'
    },
    attrs: {
      required: false,
      type: [Object],
      default: () => ({}),
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
      useFieldId,
      useFloating,
      useEvents,
      useBaseElement,
      useDisabled,
      useReadonly,
      useAddons,
      useLanguages,
      useNullValue,
      useDefault,
      useValue,
      useConditions,
      useValidation,
      useLoading,
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
    ]
    context.slots = [
      'label', 'info', 'required', 'description', 'before',
      'between', 'after', 'addon-before', 'addon-after',
    ]

    return {
      ...useElement(props, context),
    }
  },
}