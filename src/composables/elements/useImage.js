import { toRefs, onMounted, markRaw } from 'composition-api'
import useForm$ from './../useForm$'
import useTheme from './../useTheme'
import useInput from './features/useInput'
import usePath from './features/usePath'
import useConditions from './../useConditions'
import useDefault from './features/useDefault'
import useNullValue from './features/useNullValue'
import useLabel from './features/useLabel'
import useId from './features/useId'
import useColumns from './features/useColumns'
import useDescription from './features/useDescription'
import useInfo from './features/useInfo'
import useView from './features/useView'
import useComponents from './features/useComponents'
import useLayout from './features/useLayout'
import useSlots from './features/useSlots'
import useDebounce from './features/useDebounce'
import useDisabled from './features/useDisabled'
import useEvents from './../useEvents'
import useEmpty from './features/useEmpty'
import useImage from './features/useImage'
import useRequest from './features/useRequest'
import useData from './features/useData'
import useDrop from './features/useDrop'
import useRemoving from './features/useRemoving'
import useHandleError from './features/useHandleError'

import { image as useBaseElement } from './features/useBaseElement'
import { file as useValue } from './features/useValue'
import { file as useValidation } from './features/useValidation'
import { file as useGenericName } from './features/useGenericName'
import { file as useClasses } from './features/useClasses'

export default function (props, context) {
  const { schema } = toRefs(props)

  const form$ = useForm$(props, context)
  const baseElement = useBaseElement(props, context)
  const theme = useTheme(props, context)
  const input = useInput(props, context)
  const path = usePath(props, context)
  const id = useId(props, context)
  const description = useDescription(props, context)
  const info = useInfo(props, context)
  const debounce = useDebounce(props, context)
  const disabled = useDisabled(props, context)
  const nullValue = useNullValue(props, context)
  const removing = useRemoving(props, context)

  const request = useRequest(props, context, {
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
    value: value.value,
    uploading: request.uploading,
    removing: removing.removing,
  })

  const events = useEvents(props, context, {
    form$: form$.form$,
    descriptor: schema,
  }, {
    events: [
      'change', 'remove', 'error',
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

  const handleError = useHandleError(props, context, {
    fire: events.fire,
    listeners: events.listeners,
  })

  const image = useImage(props, context, {
    form$: form$.form$,
    value: value.value,
    previousValue: value.previousValue,
    disabled: disabled.disabled,
    validate: validation.validate,
    invalid: validation.invalid,
    path: path.path,
    input: input.input,
    update: data.update,
    fire: events.fire,
    listeners: events.listeners,
    uploading: request.uploading,
    request: request.request,
    axios: request.axios,
    isImageType: baseElement.isImageType,
    removing: removing.removing,
    handleError: handleError.handleError,
  })
  
  const drop = useDrop(props, context, {
    update: data.update,
    disabled: disabled.disabled,
    accept: image.accept,
  })

  const empty = useEmpty(props, context, {
    value: value.value,
    nullValue: nullValue.nullValue,
  })

  const label = useLabel(props, context, {
    form$: form$.form$,
  })

  const genericName = useGenericName(props, context, {
    form$: form$.form$,
    label: label.label,
    filename: image.filename,
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
    removing: removing.removing,
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
      'message', 'before', 'between', 'after',
      'progress', 'preview',
    ],
    defaultSlots: {
      preview: markRaw(components.components.value.ImageSlotPreview),
    }
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
    ...image,
    ...request,
    ...drop,
    ...removing,
    ...handleError,
  }
} 