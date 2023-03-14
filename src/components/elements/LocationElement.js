import useForm$ from './../../composables/useForm$'
import useFieldId from './../../composables/elements/useFieldId'
import useTheme from './../../composables/useTheme'
import useLayout from './../../composables/elements/useLayout'
import useInput from './../../composables/elements/useInput'
import useAddons from './../../composables/elements/useAddons'
import usePath from './../../composables/elements/usePath'
import useConditions from './../../composables/useConditions'
import useData from './../../composables/elements/useData'
import useDefault from './../../composables/elements/useDefault'
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
import useValue from './../../composables/elements/useValue'
import useLocation from './../../composables/elements/useLocation'
import useFloating from './../../composables/elements/useFloating'
import useClasses from './../../composables/elements/useClasses'
import useFocused from './../../composables/elements/useFocused'
import useA11y from './../../composables/elements/useA11y'
import useFocus from './../../composables/elements/useFocus'
import usePlaceholder from './../../composables/elements/usePlaceholder'

import { location as useWatchValue } from './../../composables/elements/useWatchValue'
import { location as useNullValue } from './../../composables/elements/useNullValue' 
import { location as useValidation } from './../../composables/elements/useValidation'
import { location as useElement } from './../../composables/useElement'

import BaseElement from './../../mixins/BaseElement'
import HasView from './../../mixins/HasView'
import HasChange from './../../mixins/HasChange'
import HasData from './../../mixins/HasData'
import HasValidation from './../../mixins/HasValidation'

export default {
  name: 'LocationElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'location',
      private: true,
    },
    default: {
      required: false,
      type: [Object],
      default: () => ({
        country: null,
        country_code: null,
        state: null,
        state_code: null,
        city: null,
        zip: null,
        address: null,
        formatted_address: null,
        lat: null,
        lng: null
      })
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
    attrs: {
      required: false,
      type: [Object],
      default: () => ({}),
    },
    addons: {
      required: false,
      type: [Object],
      localized: true,
      default: () => ({})
    },
    provider: {
      required: false,
      type: [String],
      default: 'google'
    },
    displayKey: {
      required: false,
      type: [String],
      default: 'formatted_address'
    },
    extendOptions: {
      required: false,
      type: [Object],
      default: () => ({})
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
      useDefault,
      useValue,
      useValidation,
      useConditions,
      useData,
      useLocation,
      useEmpty,
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
      usePlaceholder,
    ]
    context.slots = [
      'label', 'info', 'description', 'before',
      'between', 'after', 'addon-before', 'addon-after'
    ]

    return { 
      ...useElement(props, context),
    }
  },
}