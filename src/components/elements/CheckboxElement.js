import { toRefs, onMounted } from 'composition-api'
import useForm$ from './../../composables/useForm$'
import useTheme from './../../composables/useTheme'
import useInput from './../../composables/elements/useInput'
import usePath from './../../composables/elements/usePath'
import useConditions from './../../composables/useConditions'
import useData from './../../composables/elements/useData'
import useDefault from './../../composables/elements/useDefault'
import useValidation from './../../composables/elements/useValidation'
import useLabel from './../../composables/elements/useLabel'
import useClasses from './../../composables/elements/useClasses'
import useColumns from './../../composables/elements/useColumns'
import useBaseElement from './../../composables/elements/useBaseElement'
import useGenericName from './../../composables/elements/useGenericName'
import useView from './../../composables/elements/useView'
import useComponents from './../../composables/elements/useComponents'
import useSlots from './../../composables/elements/useSlots'
import useDisabled from './../../composables/elements/useDisabled'
import useEvents from './../../composables/useEvents'
import useToggle from './../../composables/elements/useToggle'

import { checkbox as useValue } from './../../composables/elements/useValue'
import { boolean as useNullValue } from './../../composables/elements/useNullValue'
import { checkbox as useHandleChange } from './../../composables/elements/useHandleChange'

export default {
  name: 'CheckboxElement',
  emits: ['change'],
  slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after'],
  props: {
    name: {
      required: true,
      type: [String, Number],
    },
    type: {
      required: false,
      type: [String],
      default: 'checkbox'
    },
    trueValue: {
      required: false,
      type: [Boolean, String, Number],
      default: 1
    },
    falseValue: {
      required: false,
      type: [Boolean, String, Number],
      default: 0
    },
    addClass: {
      required: false,
      type: [String, Array, Object],
      default: null
    },
    overrideClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    addClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    columns: {
      required: false,
      type: [Object, String],
      default: null
    },
    overrideComponents: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    conditions: {
      required: false,
      type: [Array],
      default: () => ([])
    },
    formatData: {
      required: false,
      type: [Function],
      default: null
    },
    formatLoad: {
      required: false,
      type: [Function],
      default: null
    },
    submit: {
      required: false,
      type: [Boolean],
      default: true
    },
    debounce: {
      required: false,
      type: [Number],
      default: 0
    },
    default: {
      required: false,
      type: [String, Number, Boolean],
      default: undefined // falseValue
    },
    description: {
      required: false,
      type: [String],
      default: null
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    info: {
      required: false,
      type: [String],
      default: null
    },
    label: {
      required: false,
      type: [String],
      default: null
    },
    before: {
      required: false,
      type: [Object],
      default: null
    },
    between: {
      required: false,
      type: [Object],
      default: null
    },
    after: {
      required: false,
      type: [Object],
      default: null
    },
    slots: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    text: {
      required: false,
      type: [String],
      default: null
    },
    rules: {
      required: false,
      type: [Array, String, Object],
      default: null
    },
    messages: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    displayError: {
      required: false,
      type: [Boolean],
      default: true
    },
  },
  setup(props, context) {
    const { schema } = toRefs(props)

    const form$ = useForm$(props, context)
    const theme = useTheme(props, context)
    const input = useInput(props, context)
    const path = usePath(props, context)
    const disabled = useDisabled(props, context)
    const nullValue = useNullValue(props, context)

    const baseElement = useBaseElement(props, context, {
      form$: form$.form$,
    })

    const default_ = useDefault(props, context, {
      nullValue: nullValue.nullValue
    })

    const value = useValue(props, context, {
      nullValue: nullValue.nullValue,
      defaultValue: default_.defaultValue,
    })

    const conditions = useConditions(props, context, {
      form$: form$.form$,
      path: path.path,
      descriptor: schema,
    })

    const validation = useValidation(props, context, {
      form$: form$.form$,
      path: path.path,
    })

    const events = useEvents(props, context, {
      form$: form$.form$,
      descriptor: schema,
    }, {
      events: [
        'change'
      ],
    })

    const data = useData(props, context, {
      form$: form$.form$,
      available: conditions.available,
      value: value.value,
      currentValue: value.currentValue,
      previousValue: value.previousValue,
      clean: validation.clean,
      validate: validation.validate,
      resetValidators: validation.resetValidators,
      fire: events.fire,
      defaultValue: default_.defaultValue,
      nullValue: nullValue.nullValue,
      dirt: validation.dirt,
    })

    const label = useLabel(props, context, {
      form$: form$.form$,
    })

    const genericName = useGenericName(props, context, {
      label: label.label,
    })
    
    const components = useComponents(props, context, {
      theme: theme.theme,
      form$: form$.form$
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

    const slots = useSlots(props, context, {
      form$: form$.form$,
      components: components.components,
    }, {
      slots: [
        'label', 'info', 'description', 'error',
        'message', 'before', 'between', 'after'
      ]
    })

    const handleChange = useHandleChange(props, context, {
      form$: form$.form$,
      model: value.model,
      currentValue: value.currentValue,
      previousValue: value.previousValue,
      changed: data.changed,
      dirt: validation.dirt,
      validate: validation.validate,
      fire: events.fire,
    })

    const toggle = useToggle(props, context, {
      update: data.update,
    })

    onMounted(() => {
      validation.initMessageBag()
      validation.initValidation()
    })

    return {
      ...form$,
      ...theme,
      ...input,
      ...path,
      ...conditions,
      ...value,
      ...validation,
      ...label,
      ...classes,
      ...columns,
      ...baseElement,
      ...genericName,
      ...view,
      ...components,
      ...slots,
      ...disabled,
      ...events,
      ...data,
      ...default_,
      ...nullValue,
      ...handleChange,
      ...toggle,
    }
  } 
}