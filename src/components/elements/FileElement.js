import { onMounted, toRefs, watch } from 'composition-api'
import useForm$ from './../../composables/useForm$'
import useFieldId from './../../composables/elements/useFieldId'
import useTheme from './../../composables/useTheme'
import useLayout from './../../composables/elements/useLayout'
import useInput from './../../composables/elements/useInput'
import usePath from './../../composables/elements/usePath'
import useConditions from './../../composables/useConditions'
import useDefault from './../../composables/elements/useDefault'
import useNullValue from './../../composables/elements/useNullValue'
import useLabel from './../../composables/elements/useLabel'
import useColumns from './../../composables/elements/useColumns'
import useView from './../../composables/elements/useView'
import useTemplates from './../../composables/elements/useTemplates'
import useDisabled from './../../composables/elements/useDisabled'
import useEvents from './../../composables/useEvents'
import useEmpty from './../../composables/elements/useEmpty'
import useFile from './../../composables/elements/useFile'
import useRequest from './../../composables/elements/useRequest'
import useData from './../../composables/elements/useData'
import useDrop from './../../composables/elements/useDrop'
import useRemoving from './../../composables/elements/useRemoving'
import useHandleError from './../../composables/elements/useHandleError'
import useValue from './../../composables/elements/useValue'
import useWatchValue from './../../composables/elements/useWatchValue'
import useSlots from './../../composables/elements/useSlots'

import { file as useBaseElement } from './../../composables/elements/useBaseElement'
import { file as useValidation } from './../../composables/elements/useValidation'
import { file as useGenericName } from './../../composables/elements/useGenericName'
import { file as useClasses } from './../../composables/elements/useClasses'

import BaseElement from './../../mixins/BaseElement'
import HasView from './../../mixins/HasView'
import HasChange from './../../mixins/HasChange'
import HasData from './../../mixins/HasData'
import HasValidation from './../../mixins/HasValidation'

export default {
  name: 'FileElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'remove', 'error', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'file',
      private: true,
    },
    default: {
      required: false,
      type: [String, Object],
      default: null
    },
    embed: {
      type: [Boolean],
      required: false,
      default: false,
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
    onRemove: {
      required: false,
      type: [Function],
      default: null,
      private: true,
    },
    onError: {
      required: false,
      type: [Function],
      default: null,
      private: true,
    },
    
    view: {
      type: [String],
      required: false,
      default: 'file',
    },
    drop: {
      required: false,
      type: [Boolean],
      default: false
    },
    accept: {
      required: false,
      type: [String, Array],
      default: null
    },
    clickable: {
      required: false,
      type: [Boolean],
      default: true
    },
    url: {
      required: false,
      type: [String],
      default: '/'
    },
    previewUrl: {
      required: false,
      type: [String],
      default: undefined
    },
    auto: {
      required: false,
      type: [Boolean],
      default: true
    },
    endpoints: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    methods: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    params: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    softRemove: {
      required: false,
      type: [Boolean],
      default: false
    },
  },
  setup(props, context) {
    const form$ = useForm$(props, context)
    const theme = useTheme(props, context)
    const layout = useLayout(props, context)
    const input = useInput(props, context)
    const path = usePath(props, context)
    const disabled = useDisabled(props, context)
    const nullValue = useNullValue(props, context)
    const removing = useRemoving(props, context)

    const fieldId = useFieldId(props, context, {
      path: path.path,
    })

    const events = useEvents(props, context, {}, {
      events: context.emits,
    })

    const baseElement = useBaseElement(props, context, {
      form$: form$.form$,
      fire: events.fire,
    })

    const request = useRequest(props, context, {
      form$: form$.form$,
    })

    const default_ = useDefault(props, context, {
      nullValue: nullValue.nullValue,
      form$: form$.form$,
      dataPath: path.dataPath,
      parent: path.parent,
    })

    const conditions = useConditions(props, context, {
      form$: form$.form$,
      path: path.path,
    })

    const value = useValue(props, context, {
      defaultValue: default_.defaultValue,
      dataPath: path.dataPath,
      form$: form$.form$,
      parent: path.parent,
    })

    const validation = useValidation(props, context, {
      form$: form$.form$,
      path: path.path,
      uploading: request.uploading,
      removing: removing.removing,
      value: value.value,
    })

    const data = useData(props, context, {
      form$: form$.form$,
      available: conditions.available,
      value: value.value,
      resetValidators: validation.resetValidators,
      defaultValue: default_.defaultValue,
      nullValue: nullValue.nullValue,
    })

    const handleError = useHandleError(props, context, {
      fire: events.fire,
      listeners: events.listeners,
    })

    const file = useFile(props, context, {
      form$: form$.form$,
      value: value.value,
      isDisabled: disabled.isDisabled,
      validate: validation.validate,
      invalid: validation.invalid,
      path: path.path,
      input: input.input,
      load: data.load,
      update: data.update,
      updated: data.updated,
      fire: events.fire,
      listeners: events.listeners,
      uploading: request.uploading,
      request: request.request,
      axios: request.axios,
      isImageType: baseElement.isImageType,
      removing: removing.removing,
      handleError: handleError.handleError,
      el$: baseElement.el$,
    })
    
    const drop = useDrop(props, context, {
      update: data.update,
      isDisabled: disabled.isDisabled,
      accept: file.accept,
    })

    const empty = useEmpty(props, context, {
      value: value.value,
      nullValue: nullValue.nullValue,
    })

    const label = useLabel(props, context, {
      form$: form$.form$,
      el$: baseElement.el$,
    })

    const genericName = useGenericName(props, context, {
      form$: form$.form$,
      filename: file.filename,
      label: label.label,
    })
    
    const templates = useTemplates(props, context, {
      theme: theme.theme,
      form$: form$.form$
    })

    const classes = useClasses(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      removing: removing.removing,
      isDisabled: disabled.isDisabled,
      preparing: file.preparing,
      templates: templates.templates,
    })

    const columns = useColumns(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      hasLabel: label.hasLabel,
    })

    const view = useView(props, context, {
      available: conditions.available,
      active: baseElement.active,
    })

    const slots = useSlots(props, context, {
      form$: form$.form$,
      el$: baseElement.el$,
      templates: templates.templates,
    }, {
      slots: [
        'label', 'info', 'description',
        'before', 'between', 'after',
      ]
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
      ...genericName,
      ...view,
      ...templates,
      ...slots,
      ...disabled,
      ...events,
      ...data,
      ...empty,
      ...default_,
      ...nullValue,
      ...file,
      ...request,
      ...drop,
      ...removing,
      ...handleError,
    }
  } 
}