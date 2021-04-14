import { onMounted, watch } from 'composition-api'
import useForm$ from './../../composables/useForm$'
import useTheme from './../../composables/useTheme'
import useLayout from './../../composables/elements/useLayout'
import useConditions from './../../composables/useConditions'
import useLabel from './../../composables/elements/useLabel'
import useClasses from './../../composables/elements/useClasses'
import useColumns from './../../composables/elements/useColumns'
import useBaseElement from './../../composables/elements/useBaseElement'
import useGenericName from './../../composables/elements/useGenericName'
import useView from './../../composables/elements/useView'
import useComponents from './../../composables/elements/useComponents'
import useSlots from './../../composables/elements/useSlots'
import useElements from './../../composables/useElements'
import useEvents from './../../composables/useEvents'
import useWatchValue from './../../composables/elements/useWatchValue'

import { group as useValue } from './../../composables/elements/useValue'
import { group as useDefault } from './../../composables/elements/useDefault'
import { group as usePath } from './../../composables/elements/usePath'
import { group as useValidation } from './../../composables/elements/useValidation'
import { group as useChildren } from './../../composables/elements/useChildren'
import { group as useData } from './../../composables/elements/useData'
import { object as useNullValue } from './../../composables/elements/useNullValue'

import BaseElement from './../../mixins/BaseElement'
import HasView from './../../mixins/HasView'
import HasChange from './../../mixins/HasChange'
import HasData from './../../mixins/HasData'

export default {
  name: 'GroupElement',
  mixins: [BaseElement, HasView, HasChange, HasData],
  emits: ['change'],
  // slots: ['label', 'description', 'message', 'before', 'between', 'after'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'group'
    },
    default: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    schema: {
      required: false,
      type: [Object, Array],
      default: () => ({})
    },
  },
  setup(props, context) {
    const form$ = useForm$(props, context)
    const theme = useTheme(props, context)
    const layout = useLayout(props, context)
    const path = usePath(props, context)
    const nullValue = useNullValue(props, context)

    const baseElement = useBaseElement(props, context, {
      form$: form$.form$,
    })

    const children = useChildren(props, context, {
      form$: form$.form$,
    })

    const events = useEvents(props, context, {
      form$: form$.form$,
    }, {
      events: [
        'change'
      ]
    })

    const default_ = useDefault(props, context, {
      form$: form$.form$,
      parent: path.parent,
    })

    const label = useLabel(props, context, {
      form$: form$.form$,
    })

    const genericName = useGenericName(props, context, {
      label: label.label,
    })

    const validation = useValidation(props, context, {
      form$: form$.form$,
      children$: children.children$,
      path: path.path,
    })

    const value = useValue(props, context, {
      dataPath: path.dataPath,
      form$: form$.form$,
      children$Array: children.children$Array,
      parent: path.parent,
    })

    const elements = useElements(props, context, {
      theme: theme.theme,
    })

    const conditions = useConditions(props, context, {
      form$: form$.form$,
      path: path.path,
    })

    const classes = useClasses(props, context, {
      form$: form$.form$,
      theme: theme.theme,
    })

    const columns = useColumns(props, context, {
      form$: form$.form$,
    })

    const view = useView(props, context, {
      available: conditions.available,
    })

    const components = useComponents(props, context, {
      theme: theme.theme,
      form$: form$.form$
    })

    const slots = useSlots(props, context, {
      form$: form$.form$,
      components: components.components,
    }, {
      slots: [
        'label', 'description', 'message',
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
      ...path,
      ...conditions,
      ...value,
      ...label,
      ...classes,
      ...columns,
      ...baseElement,
      ...genericName,
      ...view,
      ...components,
      ...slots,
      ...data,
      ...children,
      ...elements,
      ...validation,
      ...events,
      ...nullValue,
      ...default_,
    }
  } 
}