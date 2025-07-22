import useElement from './../../composables/useElement'
import useForm$ from './../../composables/useForm$'
import useFieldId from './../../composables/elements/useFieldId'
import useTheme from './../../composables/useTheme'
import useInput from './../../composables/elements/useInput'
import usePath from './../../composables/elements/usePath'
import useConditions from './../../composables/useConditions'
import useNullValue from './../../composables/elements/useNullValue'
import useValidation from './../../composables/elements/useValidation'
import useBaseElement from './../../composables/elements/useBaseElement'
import useGenericName from './../../composables/elements/useGenericName'
import useEvents from './../../composables/useEvents'
import useEmpty from './../../composables/elements/useEmpty'
import useTemplates from './../../composables/elements/useTemplates'
import useWatchValue from './../../composables/elements/useWatchValue'
import useFocus from './../../composables/elements/useFocus'
import useNumbers from './../../composables/elements/useNumbers'
import useEl$ from './../../composables/elements/useEl$'

import { hidden as useDefault } from './../../composables/elements/useDefault'
import { hidden as useData } from './../../composables/elements/useData'
import { hidden as useValue } from './../../composables/elements/useValue'

import BaseElement from './../../mixins/BaseElement'
import HasChange from './../../mixins/HasChange'
import HasData from './../../mixins/HasData'
import HasValidation from './../../mixins/HasValidation'

export default {
  name: 'HiddenElement',
  mixins: [BaseElement, HasChange, HasData, HasValidation],
  emits: ['reset', 'clear', 'change', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'hidden',
      private: true,
    },
    default: {
      required: false,
      type: [String, Number, Object],
      default: null
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    meta: {
      required: false,
      type: [Boolean],
      default: false
    },
    forceNumbers: {
      required: false,
      type: [Boolean],
      default: null
    },
    expression: {
      required: false,
      type: [String, Object],
      default: undefined,
    },
  },
  setup(props, ctx) {
    const context = { ...ctx }
    
    context.features = [
      useEl$,
      useForm$,
      useTheme,
      useInput,
      usePath,
      useNullValue,
      useGenericName,
      useFieldId,
      useTemplates,
      useEvents,
      useBaseElement,
      useDefault,
      useConditions,
      useValidation,
      useNumbers,
      useValue,
      useEmpty,
      useData,
      useWatchValue,
      useFocus,
    ]

    return {
      ...useElement(props, context)
    }
  },
}