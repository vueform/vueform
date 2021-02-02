import { toRefs, onMounted } from 'composition-api'
import useForm$ from './../useForm$'
import useTheme from './../useTheme'
import useInput from './features/useInput'
import usePath from './features/usePath'
import useConditions from './../useConditions'
import useData from './features/useData'
import useDefault from './features/useDefault'
import useNullValue from './features/useNullValue'
import useValidation from './features/useValidation'
import useLabel from './features/useLabel'
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
import useText from './features/useText'
import useRadio from './features/useRadio'
import useRadioValue from './features/useRadioValue'

import { radio as useValue } from './features/useValue'
import { radio as useHandleChange } from './features/useHandleChange'

export default function useCheckbox(props, context) {
  const { schema } = toRefs(props)

  const form$ = useForm$(props, context)
  const theme = useTheme(props, context)
  const input = useInput(props, context)
  const path = usePath(props, context)
  const id = useId(props, context)
  const description = useDescription(props, context)
  const info = useInfo(props, context)
  const debounce = useDebounce(props, context)
  const disabled = useDisabled(props, context)
  const radioValue = useRadioValue(props, context)

  const baseElement = useBaseElement(props, context, {
    form$: form$.form$,
  })

  const nullValue = useNullValue(props, context)

  const default_ = useDefault(props, context, {
    nullValue: nullValue.nullValue
  })

  const value = useValue(props, context, {
    nullValue: nullValue.nullValue,
    radioValue: radioValue.radioValue,
    nullValue: nullValue.nullValue,
    default: default_.default,
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
    default: default_.default,
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

  const text = useText(props, context)

  const radio = useRadio(props, context, {
    update: data.update,
    id: id.id,
    nullValue: nullValue.nullValue,
    radioValue: radioValue.radioValue,
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
    ...default_,
    ...nullValue,
    ...handleChange,
    ...text,
    ...radio,
    ...radioValue,
  }
} 