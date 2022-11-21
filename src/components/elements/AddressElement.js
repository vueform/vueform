import useElement from './../../composables/useElement'
import useForm$ from './../../composables/useForm$'
import useTheme from './../../composables/useTheme'
import useLayout from './../../composables/elements/useLayout'
import usePath from './../../composables/elements/usePath'
import useConditions from './../../composables/useConditions'
import useLabel from './../../composables/elements/useLabel'
import useClasses from './../../composables/elements/useClasses'
import useColumns from './../../composables/elements/useColumns'
import useBaseElement from './../../composables/elements/useBaseElement'
import useView from './../../composables/elements/useView'
import useTemplates from './../../composables/elements/useTemplates'
import useSlots from './../../composables/elements/useSlots'
import useDisabled from './../../composables/elements/useDisabled'
import useElements from './../../composables/useElements'
import useEvents from './../../composables/useEvents'
import useWatchValue from './../../composables/elements/useWatchValue'
import useFocus from './../../composables/elements/useFocus'

import { address as useLocation } from './../../composables/elements/useLocation'
import { address as useChildren } from './../../composables/elements/useChildren'
import { address as useNullValue } from './../../composables/elements/useNullValue'
import { object as useDefault } from './../../composables/elements/useDefault'
import { object as useValue } from './../../composables/elements/useValue'
import { object as useData } from './../../composables/elements/useData'
import { object as useValidation } from './../../composables/elements/useValidation'

import BaseElement from './../../mixins/BaseElement'
import HasView from './../../mixins/HasView'
import HasChange from './../../mixins/HasChange'
import HasData from './../../mixins/HasData'

export default {
  name: 'AddressElement',
  mixins: [BaseElement, HasView, HasChange, HasData],
  emits: ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: true,
      type: [String],
      default: 'address',
      private: true,
    },
    default: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    provider: {
      required: false,
      type: [String],
      default: 'google'
    },
    extendOptions: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    readonly: {
      required: false,
      type: [Boolean],
      default: false
    },
    required: {
      required: false,
      type: [Boolean],
      default: false
    },
    embed: {
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
      usePath,
      useDisabled,
      useNullValue,
      useEvents,
      useBaseElement,
      useDefault,
      useValue,
      useLabel,
      useChildren,
      useElements,
      useConditions,
      useValidation,
      useTemplates,
      useClasses,
      useColumns,
      useView,
      useSlots,
      useData,
      useLocation,
      useWatchValue,
      useFocus,
    ]
    context.slots = [
      'label',  'info', 'description',
      'before', 'between', 'after', 'default',
    ]

    return {
      ...useElement(props, context)
    }
  },
}