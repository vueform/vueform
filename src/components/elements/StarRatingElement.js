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
import useEl$ from './../../composables/elements/useEl$'
import useStarRating from './../../composables/elements/useStarRating'

import useNullValue from './../../composables/elements/useNullValue'
import useA11y from './../../composables/elements/useA11y'

import BaseElement from './../../mixins/BaseElement'
import HasView from './../../mixins/HasView'
import HasChange from './../../mixins/HasChange'
import HasData from './../../mixins/HasData'
import HasValidation from './../../mixins/HasValidation'

export default {
  name: 'StarRatingElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['reset', 'clear', 'change', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'star-rating',
      private: true,
    },
    default: { 
      required: false,
      type: [String, Number],
      default: null
    },
    id: { 
      required: false,
      type: [String],
      default: null
    },
    disabled: { 
      required: false,
      type: [Boolean, Function, Array, Object],
      default: false
    },
    align: { 
      required: false,
      type: [String],
      default: undefined,
    },
    count: {
      required: false,
      type: [Number],
      default: 5,
    },
    starViewBox: {
      required: false,
      type: [String],
      default: '0 0 24 24',
    },
    starPathData: {
      required: false,
      type: [String],
      default: 'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z',
    },
    starColor: {
      required: false,
      type: [String],
      default: '#E5E7EB',
    },
    starHoverColor: {
      required: false,
      type: [String],
      default: '#FFD700',
    },
    roundValue: {
      required: false,
      type: [Number],
      default: 2,
    },
    starFillSnap: {
      required: false,
      type: [Number],
      default: null,
    },
    starFillFullAt: {
      required: false,
      type: [Number],
      default: 85,
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
      useA11y,
      useWatchValue,
      useFocus,
      useStarRating,
    ]
    context.slots = [
      'label', 'info', 'required', 'description',
      'before', 'between', 'after', 
    ]

    return {
      ...useElement(props, context)
    }
  },
}