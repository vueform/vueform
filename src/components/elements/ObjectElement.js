import { onMounted } from 'vue'
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
import useElements from './../../composables/useElements'
import useEvents from './../../composables/useEvents'

import { object as useDefault } from './../../composables/elements/useDefault'
import { object as useValue } from './../../composables/elements/useValue'
import { object as useNullValue } from './../../composables/elements/useNullValue'
import { object as useData } from './../../composables/elements/useData'
import { object as useChildren } from './../../composables/elements/useChildren'
import { object as useValidation } from './../../composables/elements/useValidation'
import { object as useWatchValue } from './../../composables/elements/useWatchValue'

import BaseElement from './../../mixins/BaseElement'
import HasView from './../../mixins/HasView'
import HasChange from './../../mixins/HasChange'
import HasData from './../../mixins/HasData'

export default {
  name: 'ObjectElement',
  mixins: [BaseElement, HasView, HasChange, HasData],
  emits: ['change', 'remove', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'object',
      private: true,
    },
    default: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    schema: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    embed: {
      required: false,
      type: [Boolean],
      default: false,
    },
    onRemove: {
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
      usePath,
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
      useView,
      useTemplates,
      useClasses,
      useColumns,
      useSlots,
      useData,
    ]
    context.slots = [
      'label', 'info', 'description',
      'before', 'between', 'after'
    ]
    context.watchValue = false
    context.initValidation = false

    const element = useElement(props, context)

    useWatchValue(props, context, element)

    onMounted(() => {
      element.initMessageBag()  
    })

    return {
      ...element
    }
  },
}