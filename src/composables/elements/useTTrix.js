import { toRefs, onMounted } from 'composition-api'
import useForm$ from './../useForm$'
import useTheme from './../useTheme'
import useInput from './features/useInput'
import usePath from './features/usePath'
import useConditions from './../useConditions'
import useLabel from './features/useLabel'
import usePlaceholder from './features/usePlaceholder'
import useClasses from './features/useClasses'
import useId from './features/useId'
import useColumns from './features/useColumns'
import useDescription from './features/useDescription'
import useInfo from './features/useInfo'
import useBaseElement from './features/useBaseElement'
import useGenericName from './features/useGenericName'
import useView from './features/useView'
import useComponents from './features/useComponents'
import useLayout from './features/useLayout'
import useSlots from './features/useSlots'
import useDebounce from './features/useDebounce'
import useDisabled from './features/useDisabled'
import useEvents from './../useEvents'
import useHandleInput from './features/useHandleInput'
import useHandleError from './features/useHandleError'
import useLanguages from './features/useLanguages'
import useTrix from './features/useTrix'

import { ttrix as useData } from './features/useData'
import { multilingual as useNullValue } from './features/useNullValue'
import { multilingual as useValue } from './features/useValue'
import { multilingual as useDefault } from './features/useDefault'
import { multilingual as useValidation } from './features/useValidation'
import { multilingual as useEmpty } from './features/useEmpty'

export default function useTTextarea(props, context) {
  const { schema } = toRefs(props)

  const form$ = useForm$(props, context)
  const baseElement = useBaseElement(props, context)
  const theme = useTheme(props, context)
  const input = useInput(props, context)
  const path = usePath(props, context)
  const placeholder = usePlaceholder(props, context)
  const id = useId(props, context)
  const description = useDescription(props, context)
  const info = useInfo(props, context)
  const debounce = useDebounce(props, context)
  const disabled = useDisabled(props, context)

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
    default: default_.default,
    language: languages.language,
  })

  const conditions = useConditions(props, context, {
    form$: form$.form$,
    path: path.path,
    descriptor: schema,
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
    descriptor: schema,
  }, {
    events: ['change', 'error'],
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
    default: default_.default,
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
    placeholder: placeholder.placeholder,
  })
  
  const components = useComponents(props, context, {
    theme: theme.theme,
    form$: form$.form$
  })

  const layout = useLayout(props, context, {
    components: components.components,
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
    ...placeholder,
    ...classes,
    ...id,
    ...columns,
    ...description,
    ...info,
    ...baseElement,
    ...genericName,
    ...view,
    ...components,
    ...layout,
    ...slots,
    ...debounce,
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