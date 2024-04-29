import useElement from './../../composables/useElement'
import useForm$ from './../../composables/useForm$'
import useTheme from './../../composables/useTheme'
import useLayout from './../../composables/elements/useLayout'
import usePath from './../../composables/elements/usePath'
import useConditions from './../../composables/useConditions'
import useValue from './../../composables/elements/useValue'
import useData from './../../composables/elements/useData'
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
import useClasses from './../../composables/elements/useClasses'
import useFieldId from './../../composables/elements/useFieldId'
import useInput from './../../composables/elements/useInput'
import useFocused from './../../composables/elements/useFocused'
import useFocus from './../../composables/elements/useFocus'
import useWatchValue from './../../composables/elements/useWatchValue'
import useA11y from './../../composables/elements/useA11y'

import { text as useValidation } from './../../composables/elements/useValidation'
import { text as useDefault } from './../../composables/elements/useDefault'
import { generic as useNullValue } from './../../composables/elements/useNullValue'

import BaseElement from './../../mixins/BaseElement'
import HasView from './../../mixins/HasView'
import HasChange from './../../mixins/HasChange'
import HasData from './../../mixins/HasData'
import HasValidation from './../../mixins/HasValidation'

export default {
  register: false,
  name: 'GenericElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: '',
      private: true,
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    default: {
      required: false,
      type: [String, Number, Object],
      default: undefined
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
      useHandleInput,
      useFocused,
      useA11y,
      useWatchValue,
      useFocus,
    ]
    context.slots = [
      'label', 'info', 'description',
      'before', 'between', 'after',
    ]

    return {
      ...useElement(props, context)
    }
  },
}