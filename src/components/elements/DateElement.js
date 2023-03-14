import useElement from './../../composables/useElement'
import useForm$ from './../../composables/useForm$'
import useFieldId from './../../composables/elements/useFieldId'
import useTheme from './../../composables/useTheme'
import useLayout from './../../composables/elements/useLayout'
import useInput from './../../composables/elements/useInput'
import useAddons from './../../composables/elements/useAddons'
import usePath from './../../composables/elements/usePath'
import useConditions from './../../composables/useConditions'
import useNullValue from './../../composables/elements/useNullValue'
import useValidation from './../../composables/elements/useValidation'
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
import useDateFormat from './../../composables/elements/useDateFormat'
import useHandleChange from './../../composables/elements/useHandleChange'
import useWatchValue from './../../composables/elements/useWatchValue'
import useDefault from './../../composables/elements/useDefault'
import useFloating from './../../composables/elements/useFloating'
import useClasses from './../../composables/elements/useClasses'
import useA11y from './../../composables/elements/useA11y'
import useFocus from './../../composables/elements/useFocus'
import usePlaceholder from './../../composables/elements/usePlaceholder'

import { date as useData } from './../../composables/elements/useData'
import { date as useValue } from './../../composables/elements/useValue'
import { date as useOptions } from './../../composables/elements/useOptions'
import { date as useFocused } from './../../composables/elements/useFocused'

import BaseElement from './../../mixins/BaseElement'
import HasView from './../../mixins/HasView'
import HasChange from './../../mixins/HasChange'
import HasData from './../../mixins/HasData'
import HasValidation from './../../mixins/HasValidation'

export default {
  name: 'DateElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'date',
      private: true,
    },
    default: {
      required: false,
      type: [String, Date],
      default: null
    },
    addons: {
      required: false,
      type: [Object],
      localized: true,
      default: () => ({})
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
    displayFormat: {
      required: false,
      type: [String],
      default: null,
      '@default': 'locale.vueform.dateFormats.*',
    },
    valueFormat: {
      required: false,
      type: [String, Boolean],
      default: null,
      '@default': 'locale.vueform.dateFormats.*',
    },
    loadFormat: {
      required: false,
      type: [String],
      default: null,
      '@default': 'locale.vueform.dateFormats.*',
    },
    date: {
      required: false,
      type: [Boolean],
      default: true
    },
    time: {
      required: false,
      type: [Boolean],
      default: false
    },
    seconds: {
      required: false,
      type: [Boolean],
      default: false
    },
    hour24: {
      required: false,
      type: [Boolean],
      default: true
    },
    min: {
      required: false,
      type: [String, Date],
      default: null
    },
    max: {
      required: false,
      type: [String, Date],
      default: null
    },
    disables: {
      required: false,
      type: [Array],
      default: () => ([])
    },
    extendOptions: {
      required: false,
      type: [Object],
      default: () => ({})
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
      useDateFormat,
      useOptions,
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
      useHandleChange,
      useFocused,
      useA11y,
      useWatchValue,
      useFocus,
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