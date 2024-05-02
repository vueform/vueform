import useElement from './../../composables/useElement'
import useForm$ from './../../composables/useForm$'
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
import useTemplates from './../../composables/elements/useTemplates'
import useSlots from './../../composables/elements/useSlots'
import useDisabled from './../../composables/elements/useDisabled'
import useEvents from './../../composables/useEvents'
import useEmpty from './../../composables/elements/useEmpty'
import useLoading from './../../composables/elements/useLoading'
import useFloating from './../../composables/elements/useFloating'
import useClasses from './../../composables/elements/useClasses'
import useWatchValue from './../../composables/elements/useWatchValue'
import useFocus from './../../composables/elements/useFocus'
import useCaptcha from './../../composables/elements/useCaptcha'
import useValidation from './../../composables/elements/useValidation'
import useDefault from './../../composables/elements/useDefault'
import useFieldId from './../../composables/elements/useFieldId'

import { captcha as useData } from './../../composables/elements/useData'
import { captcha as useView } from './../../composables/elements/useView'

import BaseElement from './../../mixins/BaseElement'
import HasView from './../../mixins/HasView'
import HasChange from './../../mixins/HasChange'
import HasData from './../../mixins/HasData'
import HasValidation from './../../mixins/HasValidation'

export default {
  name: 'CaptchaElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'captcha',
      private: true,
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    default: {
      required: false,
      type: [String],
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
    rules: {
      required: false,
      type: [Array, String, Object],
      default: ['captcha']
    },
    size: {
      required: false,
      type: [String],
      default: undefined,
      private: true,
    },

    fieldName: {
      required: false,
      type: [String],
      '@default': 'name|label',
      private: true,
    },
    provider: {
      required: false,
      type: [String],
      default: null,
      '@default': 'config.useProviders.captcha',
    },
    options: {
      required: false,
      type: [Object],
      default: () => ({}),
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
      useCaptcha,
      useEmpty,
      useData,
      useLabel,
      useGenericName,
      useView,
      useTemplates,
      useClasses,
      useColumns,
      useSlots,
      useWatchValue,
      useFocus,
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