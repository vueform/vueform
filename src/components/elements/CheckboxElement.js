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
import useColumns from './../../composables/elements/useColumns'
import useBaseElement from './../../composables/elements/useBaseElement'
import useGenericName from './../../composables/elements/useGenericName'
import useView from './../../composables/elements/useView'
import useTemplates from './../../composables/elements/useTemplates'
import useDisabled from './../../composables/elements/useDisabled'
import useEvents from './../../composables/useEvents'
import useValue from './../../composables/elements/useValue'
import useWatchValue from './../../composables/elements/useWatchValue'
import useSlots from './../../composables/elements/useSlots'
import useClasses from './../../composables/elements/useClasses'
import useFocus from './../../composables/elements/useFocus'
import useText from './../../composables/elements/useText'
import useEl$ from './../../composables/elements/useEl$'

import { boolean as useNullValue } from './../../composables/elements/useNullValue'
import { checkbox as useToggle } from './../../composables/elements/useToggle'
import { checkbox as useA11y } from './../../composables/elements/useA11y'

import BaseElement from './../../mixins/BaseElement'
import HasView from './../../mixins/HasView'
import HasChange from './../../mixins/HasChange'
import HasData from './../../mixins/HasData'
import HasValidation from './../../mixins/HasValidation'

export default {
  name: 'CheckboxElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['reset', 'clear', 'change', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'checkbox',
      private: true,
    },
    default: {
      required: false,
      type: [String, Boolean, Number],
      default: undefined // falseValue
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
    disabled: {
      required: false,
      type: [Boolean, Function, Array, Object],
      default: false
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
    align: {
      required: false,
      type: [String],
      default: undefined,
    },
    standalone: {
      required: false,
      type: [Boolean],
      default: false,
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
      useToggle,
      useA11y,
      useWatchValue,
      useFocus,
      useText,
    ]
    context.slots = [
      'default', 'label', 'info', 'required', 'description',
      'before', 'between', 'after', 
    ]

    return {
      ...useElement(props, context)
    }
  },
}