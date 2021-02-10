import { onMounted } from 'composition-api'
import useForm$ from './../../composables/useForm$'
import useTheme from './../../composables/useTheme'
import useInput from './../../composables/elements/useInput'
import usePath from './../../composables/elements/usePath'
import useConditions from './../../composables/useConditions'
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
import useHandleInput from './../../composables/elements/useHandleInput'
import useHandleError from './../../composables/elements/useHandleError'
import useLanguages from './../../composables/elements/useLanguages'
import useTrix from './../../composables/elements/useTrix'

import { ttrix as useData } from './../../composables/elements/useData'
import { multilingual as useNullValue } from './../../composables/elements/useNullValue'
import { multilingual as useValue } from './../../composables/elements/useValue'
import { multilingual as useDefault } from './../../composables/elements/useDefault'
import { multilingual as useValidation } from './../../composables/elements/useValidation'
import { multilingual as useEmpty } from './../../composables/elements/useEmpty'

export default {
  name: 'TTrixElement',
  emits: ['change', 'error'],
  slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after'],
  props: {
    name: {
      required: true,
      type: [String, Number],
    },
    type: {
      required: false,
      type: [String],
      default: 'tTrix'
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
      default: null
    },
    default: {
      required: false,
      type: [Object, String, Number],
      default: null
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
    placeholder: {
      required: false,
      type: [String],
      default: null
    },
    before: {
      required: false,
      type: [Object, String, Number],
      default: null
    },
    between: {
      required: false,
      type: [Object, String, Number],
      default: null
    },
    after: {
      required: false,
      type: [Object, String, Number],
      default: null
    },
    slots: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    accept: {
      required: false,
      type: [Array],
      default: null
    },
    acceptMimes: {
      required: false,
      type: [Array],
      default: null
    },
    endpoint: {
      required: false,
      type: [String],
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
    const form$ = useForm$(props, context)
    const theme = useTheme(props, context)
    const input = useInput(props, context)
    const path = usePath(props, context)
    const disabled = useDisabled(props, context)

    const baseElement = useBaseElement(props, context, {
      form$: form$.form$,
    })

    const languages = useLanguages(props, context, {
      form$: form$.form$,
    })

    const nullValue = useNullValue(props, context, {
      languages: languages.languages,
    })

    const default_ = useDefault(props, context, {
      nullValue: nullValue.nullValue
    })

    const value = useValue(props, context, {
      nullValue: nullValue.nullValue,
      defaultValue: default_.defaultValue,
      language: languages.language,
    })

    const conditions = useConditions(props, context, {
      form$: form$.form$,
      path: path.path,
    })

    const validation = useValidation(props, context, {
      form$: form$.form$,
      path: path.path,
      language: languages.language,
      languages: languages.languages,
      value: value.value,
    })

    const events = useEvents(props, context, {
      form$: form$.form$,
    }, {
      events: [
        'change', 'error'
      ],
    })

    const data = useData(props, context, {
      form$: form$.form$,
      available: conditions.available,
      value: value.value,
      model: value.model,
      currentValue: value.currentValue,
      previousValue: value.previousValue,
      clean: validation.clean,
      validateLanguage: validation.validateLanguage,
      resetValidators: validation.resetValidators,
      fire: events.fire,
      defaultValue: default_.defaultValue,
      nullValue: nullValue.nullValue,
      dirt: validation.dirt,
      language: languages.language,
      input: input.input,
    })

    const empty = useEmpty(props, context, {
      value: value.value,
      nullValue: nullValue.nullValue,
      language: languages.language,
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

    const handleInput = useHandleInput(props, context, {
      form$: form$.form$,
      model: value.model,
      currentValue: value.currentValue,
      previousValue: value.previousValue,
      changed: data.changed,
      dirt: validation.dirt,
      validate: validation.validateLanguage,
      fire: events.fire,
      language: languages.language,
    })

    const handleError = useHandleError(props, context, {
      fire: events.fire,
      listeners: events.listeners,
    })

    const trix = useTrix(props, context, {
      form$: form$.form$,
    })

    onMounted(() => {
      validation.initState()
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
      ...empty,
      ...default_,
      ...nullValue,
      ...handleInput,
      ...handleError,
      ...trix,
      ...languages,
    }
  } 
}