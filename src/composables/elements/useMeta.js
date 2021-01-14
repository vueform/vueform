import { toRefs, onMounted } from 'composition-api'
import useForm$ from './../useForm$'
import usePath from './features/usePath'
import useConditions from './../useConditions'
import useValue from './features/useValue'
import useData from './features/useData'
import useDefault from './features/useDefault'
import useNullValue from './features/useNullValue'
import useValidation from './features/useValidation'
import useBaseElement from './features/useBaseElement'
import useGenericName from './features/useGenericName'
import useDebounce from './features/useDebounce'
import useEvents from './../useEvents'
import useEmpty from './features/useEmpty'

export default function useText(props, context) {
  const { schema } = toRefs(props)

  const form$ = useForm$(props, context)
  const path = usePath(props, context)
  const debounce = useDebounce(props, context)
  const nullValue = useNullValue(props, context)

  const baseElement = useBaseElement(props, context, {
    form$: form$.form$,
  })

  const default_ = useDefault(props, context, {
    nullValue: nullValue.nullValue
  })

  const value = useValue(props, context, {
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
    events: ['change'],
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

  const empty = useEmpty(props, context, {
    value: value.value,
    nullValue: nullValue.nullValue,
  })

  const genericName = useGenericName(props, context, {})

  onMounted(() => {
    validation.initMessageBag()
    validation.initValidation()
  })

  return {
    ...form$,
    ...path,
    ...debounce,
    ...nullValue,
    ...default_,
    ...value,
    ...conditions,
    ...validation,
    ...events,
    ...data,
    ...empty,
    ...baseElement,
    ...genericName,
  }
} 