import { onMounted, watch } from 'composition-api'
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
    const form$ = useForm$(props, context)
    const theme = useTheme(props, context)
    const layout = useLayout(props, context)
    const path = usePath(props, context)
    const nullValue = useNullValue(props, context)

    const events = useEvents(props, context, {}, {
      events: context.emits,
    })

    const baseElement = useBaseElement(props, context, {
      form$: form$.form$,
      fire: events.fire,
    })

    const default_ = useDefault(props, context, {
      nullValue: nullValue.nullValue,
      form$: form$.form$,
      parent: path.parent,
    })

    const value = useValue(props, context, {
      defaultValue: default_.defaultValue,
      dataPath: path.dataPath,
      form$: form$.form$,
      parent: path.parent,
    })

    const label = useLabel(props, context, {
      form$: form$.form$,
      el$: baseElement.el$,
    })

    const children = useChildren(props, context, {
      form$: form$.form$,
    })

    const elements = useElements(props, context, {
      theme: theme.theme,
    })

    const conditions = useConditions(props, context, {
      form$: form$.form$,
      path: path.path,
    })

    const validation = useValidation(props, context, {
      form$: form$.form$,
      children$: children.children$,
      path: path.path,
    })

    const view = useView(props, context, {
      available: conditions.available,
      active: baseElement.active,
      form$: form$.form$,
      parent: path.parent,
    })

    const templates = useTemplates(props, context, {
      theme: theme.theme,
      form$: form$.form$,
      View: view.View,
    })

    const classes = useClasses(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      Templates: templates.Templates,
      el$: baseElement.el$,
      View: view.View,
    })

    const columns = useColumns(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      hasLabel: label.hasLabel,
    })

    const slots = useSlots(props, context, {
      form$: form$.form$,
      el$: baseElement.el$,
      Templates: templates.Templates,
    }, {
      slots: [
        'label', 'info', 'description',
        'before', 'between', 'after'
      ]
    })

    const data = useData(props, context, {
      form$: form$.form$,
      available: conditions.available,
      value: value.value,
      clean: validation.clean,
      validate: validation.validate,
      resetValidators: validation.resetValidators,
      children$: children.children$,
    })

    useWatchValue(props, context, {
      fire: events.fire,
      value: value.value,
    })
    
    onMounted(() => {
      validation.initMessageBag()  
    })

    return {
      ...form$,
      ...theme,
      ...layout,
      ...path,
      ...conditions,
      ...value,
      ...label,
      ...classes,
      ...columns,
      ...baseElement,
      ...view,
      ...templates,
      ...slots,
      ...data,
      ...children,
      ...elements,
      ...validation,
      ...nullValue,
      ...default_,
      ...events,
    }
  } 
}