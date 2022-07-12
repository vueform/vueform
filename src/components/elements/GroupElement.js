import { onMounted } from 'vue'
import useElement from './../../composables/useElement'
import useForm$ from './../../composables/useForm$'
import useTheme from './../../composables/useTheme'
import useLayout from './../../composables/elements/useLayout'
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

import { group as useValue } from './../../composables/elements/useValue'
import { group as useDefault } from './../../composables/elements/useDefault'
import { group as usePath } from './../../composables/elements/usePath'
import { group as useValidation } from './../../composables/elements/useValidation'
import { group as useChildren } from './../../composables/elements/useChildren'
import { group as useData } from './../../composables/elements/useData'
import { group as useWatchValue } from './../../composables/elements/useWatchValue'
import { object as useNullValue } from './../../composables/elements/useNullValue'

import BaseElement from './../../mixins/BaseElement'
import HasView from './../../mixins/HasView'
import HasChange from './../../mixins/HasChange'
import HasData from './../../mixins/HasData'

export default {
  name: 'GroupElement',
  mixins: [BaseElement, HasView, HasChange, HasData],
  emits: ['change', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'group',
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
      useChildren,
      useDefault,
      useLabel,
      useValidation,
      useValue,
      useElements,
      useConditions,
      useView,
      useTemplates,
      useClasses,
      useColumns,
      useSlots,
      useData,
    ]
    context.slots = [
      'label', 'info', 'description',
      'before', 'between', 'after',
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