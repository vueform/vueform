import { onMounted, watch } from 'composition-api'
import useForm$ from './../../composables/useForm$'
import useFieldId from './../../composables/elements/useFieldId'
import useTheme from './../../composables/useTheme'
import useLayout from './../../composables/elements/useLayout'
import useInput from './../../composables/elements/useInput'
import usePath from './../../composables/elements/usePath'
import useConditions from './../../composables/useConditions'
import useValue from './../../composables/elements/useValue'
import useDefault from './../../composables/elements/useDefault'
import useNullValue from './../../composables/elements/useNullValue'
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
import useHandleInput from './../../composables/elements/useHandleInput'
import useEmpty from './../../composables/elements/useEmpty'
import useTrix from './../../composables/elements/useTrix'
import useHandleError from './../../composables/elements/useHandleError'
import useWatchValue from './../../composables/elements/useWatchValue'

import { trix as useData } from './../../composables/elements/useData'

import BaseElement from './../../mixins/BaseElement'
import HasView from './../../mixins/HasView'
import HasChange from './../../mixins/HasChange'
import HasData from './../../mixins/HasData'
import HasValidation from './../../mixins/HasValidation'

export default {
  name: 'TrixElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'error'],
  // slots: ['label', 'description', 'error', 'message', 'before', 'between', 'after'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'trix'
    },
    default: {
      required: false,
      type: [String, Number],
      default: null
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
    id: {
      required: false,
      type: [String],
      default: null
    },
    placeholder: {
      required: false,
      type: [String],
      default: null
    },
    accept: {
      required: false,
      type: [Array],
      default: () => ([])
    },
    acceptMimes: {
      required: false,
      type: [Array],
      default: () => ([])
    },
    endpoint: {
      required: false,
      type: [String],
      default: null
    },
    onError: {
      required: false,
      type: [Function],
      default: null,
    },
  },
  setup(props, context) {
    const form$ = useForm$(props, context)
    const fieldId = useFieldId(props, context)
    const theme = useTheme(props, context)
    const layout = useLayout(props, context)
    const input = useInput(props, context)
    const path = usePath(props, context)
    const disabled = useDisabled(props, context)
    const nullValue = useNullValue(props, context)

    const baseElement = useBaseElement(props, context, {
      form$: form$.form$,
    })

    const events = useEvents(props, context, {
      form$: form$.form$,
    }, {
      events: [
        'change', 'error'
      ],
    })

    const default_ = useDefault(props, context, {
      nullValue: nullValue.nullValue,
      form$: form$.form$,
      dataPath: path.dataPath,
    })

    const conditions = useConditions(props, context, {
      form$: form$.form$,
      path: path.path,
    })

    const validation = useValidation(props, context, {
      form$: form$.form$,
      path: path.path,
    })

    const value = useValue(props, context, {
      defaultValue: default_.defaultValue,
      dataPath: path.dataPath,
      form$: form$.form$,
    })

    const data = useData(props, context, {
      form$: form$.form$,
      available: conditions.available,
      value: value.value,
      resetValidators: validation.resetValidators,
      defaultValue: default_.defaultValue,
      nullValue: nullValue.nullValue,
      input: input.input,
    })

    const empty = useEmpty(props, context, {
      value: value.value,
      nullValue: nullValue.nullValue,
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
      theme: theme.theme,
      hasLabel: label.hasLabel,
    })

    const view = useView(props, context, {
      available: conditions.available,
    })

    const slots = useSlots(props, context, {
      form$: form$.form$,
      components: components.components,
    }, {
      slots: [
        'label', 'description', 'error',
        'message', 'before', 'between', 'after'
      ]
    })

    const handleInput = useHandleInput(props, context, {
      model: value.model,
    })

    const handleError = useHandleError(props, context, {
      fire: events.fire,
      listeners: events.listeners,
    })

    const trix = useTrix(props, context, {
      form$: form$.form$,
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
      validation.initValidation()
    })

    watch(validation.validationRules, () => {
      validation.initValidation()
    }, { deep: true })

    return {
      ...form$,
      ...fieldId,
      ...theme,
      ...layout,
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
    }
  } 
}