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
import useHandleInput from './../../composables/elements/useHandleInput'
import usePlaceholder from './../../composables/elements/usePlaceholder'
import useValidation from './../../composables/elements/useValidation'
import useDefault from './../../composables/elements/useDefault'
import useData from './../../composables/elements/useData'
import useSignature from './../../composables/elements/useSignature'

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

    width: {
      required: false,
      type: [Number, String],
      default: 360,
    },
    height: {
      required: false,
      type: [Number],
      default: 230,
    },
    signatureHeight: {
      required: false,
      type: [Number],
      default: 80,
    },
    placeholder: {
      required: false,
      type: [String, Object],
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
    signatures: {
      required: false,
      type: [Array],
      default: () => ([]),
    },
    colors: {
      required: false,
      type: [Array],
      default: () => (['#000000', '#2558b2', '#f22f30']),
    },
    fonts: {
      required: false,
      type: [Array],
      default: () => ([
        'cursive'
      ]),
    },
    accept: {
      required: false,
      type: [Array],
      default: () => (['jpg', 'png', 'svg']),
    },
    background: {
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
      useHandleInput,
      usePlaceholder,
      useSignature,
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