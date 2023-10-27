import useElement from './../../composables/useElement'
import useForm$ from './../../composables/useForm$'
import useFieldId from './../../composables/elements/useFieldId'
import useTheme from './../../composables/useTheme'
import useLayout from './../../composables/elements/useLayout'
import useInput from './../../composables/elements/useInput'
import usePath from './../../composables/elements/usePath'
import useConditions from './../../composables/useConditions'
import useData from './../../composables/elements/useData'
import useDefault from './../../composables/elements/useDefault'
import useValidation from './../../composables/elements/useValidation'
import useLabel from './../../composables/elements/useLabel'
import useClasses from './../../composables/elements/useClasses'
import useColumns from './../../composables/elements/useColumns'
import useBaseElement from './../../composables/elements/useBaseElement'
import useGenericName from './../../composables/elements/useGenericName'
import useView from './../../composables/elements/useView'
import useTemplates from './../../composables/elements/useTemplates'
import useSlots from './../../composables/elements/useSlots'
import useDisabled from './../../composables/elements/useDisabled'
import useEvents from './../../composables/useEvents'
import useToggle from './../../composables/elements/useToggle'
import useValue from './../../composables/elements/useValue'
import useHandleChange from './../../composables/elements/useHandleChange'
import useWatchValue from './../../composables/elements/useWatchValue'
import useFocus from './../../composables/elements/useFocus'
import useText from './../../composables/elements/useText'

import { toggle as useA11y } from './../../composables/elements/useA11y'
import { toggle as useOptions } from './../../composables/elements/useOptions'
import { boolean as useNullValue } from './../../composables/elements/useNullValue'

import BaseElement from './../../mixins/BaseElement'
import HasView from './../../mixins/HasView'
import HasChange from './../../mixins/HasChange'
import HasData from './../../mixins/HasData'
import HasValidation from './../../mixins/HasValidation'

export default {
  name: 'ToggleElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'toggle',
      private: true,
    },
    default: {
      required: false,
      type: [String, Number, Boolean],
      default: undefined // falseValue
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
    text: {
      required: false,
      type: [String, Object],
      localized: true,
      default: null
    },
    labels: {
      required: false,
      type: [Object],
      localized: true,
      default: () => ({})
    },
    trueValue: {
      required: false,
      type: [Boolean, String, Number],
      default: true
    },
    falseValue: {
      required: false,
      type: [Boolean, String, Number],
      default: false
    },
    extendOptions: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    align: {
      required: false,
      type: [String],
      default: undefined,
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
      useOptions,
      useDefault,
      useConditions,
      useValidation,
      useValue,
      useData,
      useLabel,
      useGenericName,
      useView,
      useTemplates,
      useClasses,
      useColumns,
      useSlots,
      useHandleChange,
      useToggle,
      useA11y,
      useWatchValue,
      useFocus,
      useText,
    ]
    context.slots = [
      'default', 'label', 'info', 'description',
      'before', 'between', 'after', 
    ]

    return {
      ...useElement(props, context)
    }
  },
}