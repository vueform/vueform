import { toRefs, onMounted } from 'composition-api'
import useForm$ from './../useForm$'
import useTheme from './../useTheme'
import useInput from './features/useInput'
import useAddons from './features/useAddons'
import usePath from './features/usePath'
import useConditions from './../useConditions'
import useValueMultilingual from './features/useValueMultilingual'
import useDataMultilingual from './features/useDataMultilingual'
import useDefaultMultilingual from './features/useDefaultMultilingual'
import useNullValueMultilingual from './features/useNullValueMultilingual'
import useValidationMultilingual from './features/useValidationMultilingual'
import useLabel from './features/useLabel'
import usePlaceholder from './features/usePlaceholder'
import useFloating from './features/useFloating'
import useClasses from './features/useClasses'
import useId from './features/useId'
import useColumns from './features/useColumns'
import useDescription from './features/useDescription'
import useReadonly from './features/useReadonly'
import useInfo from './features/useInfo'
import useBaseElement from './features/useBaseElement'
import useView from './features/useView'
import useComponents from './features/useComponents'
import useLayout from './features/useLayout'
import useSlots from './features/useSlots'
import useInputType from './features/useInputType'
import useAutocomplete from './features/useAutocomplete'
import useDebounce from './features/useDebounce'
import useDisabledInput from './features/useDisabledInput'
import useEvents from './../useEvents'
import useHandleInput from './features/useHandleInput'
import useEmptyMultilingual from './features/useEmptyMultilingual'
import useLanguages from './features/useLanguages'

export default function useTText(props, context) {
  const { schema } = toRefs(props)

  const form$ = useForm$(props, context)
  const theme = useTheme(props, context)
  const input = useInput(props, context)
  const addons = useAddons(props, context)
  const path = usePath(props, context)
  const placeholder = usePlaceholder(props, context)
  const floating = useFloating(props, context)
  const id = useId(props, context)
  const description = useDescription(props, context)
  const readonly = useReadonly(props, context)
  const info = useInfo(props, context)
  const inputType = useInputType(props, context)
  const autocomplete = useAutocomplete(props, context)
  const debounce = useDebounce(props, context)
  const disabled = useDisabledInput(props, context)

  const languages = useLanguages(props, context, {
    form$: form$.form$,
  })

  const nullValue = useNullValueMultilingual(props, context, {
    languages: languages.languages,
  })

  const default_ = useDefaultMultilingual(props, context, {
    form$: form$.form$,
    nullValue: nullValue.nullValue,
  })

  const value = useValueMultilingual(props, context, {
    nullValue: nullValue.nullValue,
    default: default_.default,
    language: languages.language,
  })

  const conditions = useConditions(props, context, {
    form$: form$.form$,
    path: path.path,
    descriptor: schema,
  })

  const validation = useValidationMultilingual(props, context, {
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
    events: ['change'],
  })

  const data = useDataMultilingual(props, context, {
    form$: form$.form$,
    available: conditions.available,
    value: value.value,
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
  })

  const empty = useEmptyMultilingual(props, context, {
    value: value.value,
    nullValue: nullValue.nullValue,
    language: languages.language,
  })

  const label = useLabel(props, context, {
    form$: form$.form$,
  })

  const baseElement = useBaseElement(props, context, {
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

  onMounted(() => {
    validation.initState()
    validation.initMessageBag()
    validation.initValidation()
  })

  return {
    ...form$,
    ...theme,
    ...input,
    ...addons,
    ...path,
    ...conditions,
    ...value,
    ...validation,
    ...label,
    ...placeholder,
    ...floating,
    ...classes,
    ...id,
    ...columns,
    ...description,
    ...readonly,
    ...info,
    ...baseElement,
    ...view,
    ...components,
    ...layout,
    ...slots,
    ...inputType,
    ...autocomplete,
    ...debounce,
    ...disabled,
    ...events,
    ...data,
    ...empty,
    ...default_,
    ...nullValue,
    ...handleInput,
    ...languages,
  }
} 