import { onMounted } from 'composition-api'
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

const element = {
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
    const form$ = useForm$(props, context)
    const theme = useTheme(props, context)
    const layout = useLayout(props, context)
    const path = usePath(props, context)
    const disabled = useDisabled(props, context)
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
      path: path.path,
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
      value: value.value,
      children$: children.children$,
    })

    const templates = useTemplates(props, context, {
      theme: theme.theme,
      form$: form$.form$
    })

    const classes = useClasses(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      templates: templates.templates,
    })

    const columns = useColumns(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      hasLabel: label.hasLabel,
    })

    const view = useView(props, context, {
      available: conditions.available,
      active: baseElement.active,
    })

    const slots = useSlots(props, context, {
      form$: form$.form$,
      el$: baseElement.el$,
      templates: templates.templates,
    }, {
      slots: [
        'label',  'info', 'description',
        'before', 'between', 'after',
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

    const location = useLocation(props, context, {
      form$: form$.form$,
      value: value.value,
      fields: children.fields,
      children$: children.children$,
    })
    
    useWatchValue(props, context, {
      form$: form$.form$,
      value: value.value,
      fire: events.fire,
      dirt: validation.dirt,
      validate: validation.validate,
    })

    onMounted(() => {
      validation.initMessageBag()  
    })

    return {
      ...form$,
      ...theme,
      ...layout,
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
      ...location,
      ...disabled,
      ...default_,
      ...events,
      ...nullValue,
    }
  }
}

export default element

export { element }