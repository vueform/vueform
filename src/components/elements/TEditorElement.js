import useForm$ from './../../composables/useForm$'
import useFieldId from './../../composables/elements/useFieldId'
import useTheme from './../../composables/useTheme'
import useLayout from './../../composables/elements/useLayout'
import useInput from './../../composables/elements/useInput'
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
import useHandleError from './../../composables/elements/useHandleError'
import useLanguages from './../../composables/elements/useLanguages'
import useEditor from './../../composables/elements/useEditor'
import useHandleAlert from './../../composables/elements/useHandleAlert'
import useClasses from './../../composables/elements/useClasses'
import useHandleBlur from './../../composables/elements/useHandleBlur'
import useA11y from './../../composables/elements/useA11y'
import useFocus from './../../composables/elements/useFocus'
import usePlaceholder from './../../composables/elements/usePlaceholder'

import { teditor as useData } from './../../composables/elements/useData'
import { multilingual as useNullValue } from './../../composables/elements/useNullValue'
import { multilingual as useValue } from './../../composables/elements/useValue'
import { multilingual as useDefault } from './../../composables/elements/useDefault'
import { multilingual as useValidation } from './../../composables/elements/useValidation'
import { multilingual as useEmpty } from './../../composables/elements/useEmpty'
import { multilingual as useWatchValue } from './../../composables/elements/useWatchValue'
import { multilingual as useElement } from './../../composables/useElement'

import BaseElement from './../../mixins/BaseElement'
import HasView from './../../mixins/HasView'
import HasChange from './../../mixins/HasChange'
import HasData from './../../mixins/HasData'
import HasValidation from './../../mixins/HasValidation'

export default {
  name: 'TEditorElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'blur', 'alert', 'error', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 't-editor',
      private: true,
    },
    default: {
      required: false,
      type: [Object, String, Number],
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
    onError: {
      required: false,
      type: [Function],
      default: null,
      private: true,
    },
    onAlert: {
      required: false,
      type: [Function],
      default: null,
      private: true,
    },
    accept: {
      required: false,
      type: [Array],
      default: null
    },
    acceptMimes: {
      required: false,
      type: [Array],
      default: null
    },
    endpoint: {
      required: false,
      type: [String, Function],
      default: null,
      '@default': 'config.endpoints.attachment.url',
    },
    method: {
      required: false,
      type: [String],
      default: null,
      '@default': 'config.endpoints.attachment.method',
    },
    hideTools: {
      required: false,
      type: [Array],
      default: () => ([])
    },

    onBlur: {
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
      useFieldId,
      useEvents,
      useBaseElement,
      useLanguages,
      useNullValue,
      useDefault,
      useValue,
      useConditions,
      useValidation,
      useData,
      useEmpty,
      useLabel,
      useGenericName,
      useView,
      useTemplates,
      useEditor,
      useClasses,
      useColumns,
      useSlots,
      useHandleInput,
      useHandleAlert,
      useHandleError,
      useHandleBlur,
      useA11y,
      useWatchValue,
      useFocus,
      usePlaceholder,
    ]
    context.slots = [
      'label', 'info', 'description',
      'before', 'between', 'after',
    ]

    return {
      ...useElement(props, context),
    }
  },
}