import useElement from './../../composables/useElement'
import useForm$ from './../../composables/useForm$'
import useFieldId from './../../composables/elements/useFieldId'
import useTheme from './../../composables/useTheme'
import useLayout from './../../composables/elements/useLayout'
import useInput from './../../composables/elements/useInput'
import useAddons from './../../composables/elements/useAddons'
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
import useHandleInput from './../../composables/elements/useHandleInput'
import useEmpty from './../../composables/elements/useEmpty'
import useAutogrow from './../../composables/elements/useAutogrow'
import useWatchValue from './../../composables/elements/useWatchValue'
import useFloating from './../../composables/elements/useFloating'
import useClasses from './../../composables/elements/useClasses'
import useFocused from './../../composables/elements/useFocused'
import useHandleBlur from './../../composables/elements/useHandleBlur'
import useA11y from './../../composables/elements/useA11y'
import useFocus from './../../composables/elements/useFocus'
import useHandleKeyEvents from './../../composables/elements/useHandleKeyEvents'
import usePlaceholder from './../../composables/elements/usePlaceholder'
import useData from './../../composables/elements/useData'

import { text as useValidation } from './../../composables/elements/useValidation'
import { text as useDefault } from './../../composables/elements/useDefault'

import BaseElement from './../../mixins/BaseElement'
import HasView from './../../mixins/HasView'
import HasChange from './../../mixins/HasChange'
import HasData from './../../mixins/HasData'
import HasValidation from './../../mixins/HasValidation'

export default {
  name: 'TextareaElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'blur', 'keydown', 'keyup', 'keypress', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'textarea',
      private: true,
    },
    default: {
      required: false,
      type: [String, Number, Object],
      localized: true,
      default: null
    },
    addons: {
      required: false,
      type: [Object],
      localized: true,
      default: () => ({})
    },
    autogrow: {
      required: false,
      type: [Boolean],
      default: true
    },
    rows: {
      required: false,
      type: [Number],
      default: 3
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
    attrs: {
      required: false,
      type: [Object],
      default: () => ({}),
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
      useAddons,
      useDefault,
      useConditions,
      useValidation,
      useValue,
      useData,
      useEmpty,
      useLabel,
      useGenericName,
      useView,
      useTemplates,
      useClasses,
      useColumns,
      useSlots,
      useHandleInput,
      useAutogrow,
      useFocused,
      useHandleBlur,
      useA11y,
      useWatchValue,
      useFocus,
      useHandleKeyEvents,
      usePlaceholder,
    ]
    context.slots = [
      'label', 'info', 'description', 'before',
      'between', 'after', 'addon-before', 'addon-after',
    ]

    return {
      ...useElement(props, context)
    }
  },
}