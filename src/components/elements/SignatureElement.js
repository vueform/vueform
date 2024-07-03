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
import useClasses from './../../composables/elements/useClasses'
import useFocused from './../../composables/elements/useFocused'
import useWatchValue from './../../composables/elements/useWatchValue'
import useA11y from './../../composables/elements/useA11y'
import useFocus from './../../composables/elements/useFocus'
import usePlaceholder from './../../composables/elements/usePlaceholder'
import useValidation from './../../composables/elements/useValidation'
import useDefault from './../../composables/elements/useDefault'
import useSignature from './../../composables/elements/useSignature'

import { signature as useData } from './../../composables/elements/useData'

import BaseElement from './../../mixins/BaseElement'
import HasView from './../../mixins/HasView'
import HasChange from './../../mixins/HasChange'
import HasData from './../../mixins/HasData'
import HasValidation from './../../mixins/HasValidation'

export default {
  name: 'SignatureElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'blur', 'keydown', 'keyup', 'keypress', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'text',
      private: true,
    },
    id: {
      required: false,
      type: [String],
      default: null
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
    readonly: {
      required: false,
      type: [Boolean],
      default: false
    },
    autoload: {
      required: false,
      type: [Boolean],
      default: true
    },

    maxWidth: {
      required: false,
      type: [Number, String],
      default: 'auto',
    },
    height: {
      required: false,
      type: [Number],
      default: 160,
    },
    uploadWidth: {
      required: false,
      type: [Number],
      default: 480,
    },
    uploadHeight: {
      required: false,
      type: [Number],
      default: 160,
    },
    placeholder: {
      required: false,
      type: [String, Object, Boolean],
      localized: true,
      default: null
    },
    line: {
      required: false,
      type: [Boolean],
      default: true,
    },
    minFontSize: {
      required: false,
      type: [Number],
      default: 10,
    },
    maxFontSize: {
      required: false,
      type: [Number],
      default: 60,
    },

    modes: {
      required: false,
      type: [Array],
      default: () => (['draw', 'type', 'upload']),
    },
    colors: {
      required: false,
      type: [Array],
      default: () => (['#000000', '#2558b2', '#f22f30']),
    },
    invertColors: {
      required: false,
      type: [Array],
      default: () => (['#000000']),
    },
    fonts: {
      required: false,
      type: [Array],
      default: () => ([
        'Caveat@400',
        'Sacramento@400',
        'Dancing Script@400'
      ]),
    },
    accept: {
      required: false,
      type: [Array],
      default: () => (['jpg', 'png', 'svg']),
    },
    maxSize: {
      required: false,
      type: [Number],
      default: 2048,
    },
    canClear: {
      required: false,
      type: [Boolean],
      default: true,
    },
    canUndo: {
      required: false,
      type: [Boolean],
      default: true,
    },
    canDrop: {
      required: false,
      type: [Boolean],
      default: true,
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
      useEvents,
      useBaseElement,
      useDefault,
      useConditions,
      useValidation,
      useValue,
      useEmpty,
      usePlaceholder,
      useSignature,
      useData,
      useLabel,
      useGenericName,
      useView,
      useTemplates,
      useClasses,
      useColumns,
      useSlots,
      useFocused,
      useA11y,
      useWatchValue,
      useFocus,
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