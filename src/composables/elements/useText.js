import { toRefs } from 'composition-api'
import useForm$ from './../useForm$'
import useTheme from './../useTheme'
import useInput from './features/useInput'
import useAddons from './features/useAddons'
import usePath from './features/usePath'
import useConditions from './../useConditions'
import useValue from './features/useValue'
import useData from './features/useData'
import useValidation from './features/useValidation'
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
import useSlots from './features/useSlots'
import useInputType from './features/useInputType'
import useAutocomplete from './features/useAutocomplete'
import useDebounce from './features/useDebounce'
import useDisabled from './features/useDisabled'
import useEvents from './../useEvents'
import useHandleChange from './features/useHandleChange'
import useHandleKeyup from './features/useHandleKeyup'
import useEmpty from './features/useEmpty'

export default function useText(props, context) {
  const { schema } = toRefs(props)

  const form$ = useForm$(props, context)
  const theme = useTheme(props, context)
  const input = useInput(props, context)
  const addons = useAddons(props, context)
  const path = usePath(props, context)
  const conditions = useConditions(props, context, {
    form$: form$.form$,
    path: path.path,
    descriptor: schema,
  })
  const value = useValue(props, context)
  const validation = useValidation(props, context, {
    form$: form$.form$,
    value: value.value,
  })
  const label = useLabel(props, context, {
    form$: form$.form$,
  })
  const placeholder = usePlaceholder(props, context)
  const floating = useFloating(props, context)
  const classes = useClasses(props, context, {
    form$: form$.form$,
    theme: theme.theme,
  })
  const id = useId(props, context)
  const columns = useColumns(props, context)
  const description = useDescription(props, context)
  const readonly = useReadonly(props, context)
  const info = useInfo(props, context)
  const baseElement = useBaseElement(props, context, {
    available: conditions.available,
    theme: theme.theme,
    label: label.label,
    placeholder: placeholder.placeholder,
  })
  const slots = useSlots(props, context, {
    theme: theme.theme,
  })
  const inputType = useInputType(props, context)
  const autocomplete = useAutocomplete(props, context)
  const debounce = useDebounce(props, context)
  const disabled = useDisabled(props, context)
  const events = useEvents(props, context, {
    form$: form$.form$,
    descriptor: schema,
  }, {
    events: {
      change: [value.currentValue, value.previousValue]
    },
  })
  const handleChange = useHandleChange(props, context, {
    form$: form$.form$,
    validate: validation.validate,
    fireChange: events.fireChange,
  })
  const handleKeyup = useHandleKeyup(props, context, {
    readonly: readonly.readonly,
    handleChange: handleChange.handleChange,
  })
  const data = useData(props, context, {
    form$: form$.form$,
    available: conditions.available,
    value: value.value,
    previousValue: value.previousValue,
    clean: validation.clean,
    validate: validation.validate,
    resetValidators: validation.resetValidators,
    fireChange: events.fireChange,
  })
  const empty = useEmpty(props, context, {
    value: value.value,
    nill: data.nill,
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
    ...slots,
    ...inputType,
    ...autocomplete,
    ...debounce,
    ...disabled,
    ...events,
    ...handleChange,
    ...handleKeyup,
    ...data,
    ...empty,
  }
} 