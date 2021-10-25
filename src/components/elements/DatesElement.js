import { onMounted, watch } from 'composition-api'
import useForm$ from './../../composables/useForm$'
import useFieldId from './../../composables/elements/useFieldId'
import useTheme from './../../composables/useTheme'
import useLayout from './../../composables/elements/useLayout'
import useInput from './../../composables/elements/useInput'
import useAddons from './../../composables/elements/useAddons'
import usePath from './../../composables/elements/usePath'
import useConditions from './../../composables/useConditions'
import useValidation from './../../composables/elements/useValidation'
import useLabel from './../../composables/elements/useLabel'
import useColumns from './../../composables/elements/useColumns'
import useGenericName from './../../composables/elements/useGenericName'
import useView from './../../composables/elements/useView'
import useTemplates from './../../composables/elements/useTemplates'
import useSlots from './../../composables/elements/useSlots'
import useDisabled from './../../composables/elements/useDisabled'
import useEvents from './../../composables/useEvents'
import useEmpty from './../../composables/elements/useEmpty'
import useWatchValue from './../../composables/elements/useWatchValue'
import useDefault from './../../composables/elements/useDefault'
import useHandleChange from './../../composables/elements/useHandleChange'
import useFloating from './../../composables/elements/useFloating'

import { dates as useValue } from './../../composables/elements/useValue'
import { dates as useData } from './../../composables/elements/useData'
import { dates as useOptions } from './../../composables/elements/useOptions'
import { array as useNullValue } from './../../composables/elements/useNullValue'
import { dates as useBaseElement } from './../../composables/elements/useBaseElement'
import { dates as useDateFormat } from './../../composables/elements/useDateFormat'
import { input as useClasses } from './../../composables/elements/useClasses'

import BaseElement from './../../mixins/BaseElement'
import HasView from './../../mixins/HasView'
import HasChange from './../../mixins/HasChange'
import HasData from './../../mixins/HasData'
import HasValidation from './../../mixins/HasValidation'

export default {
  name: 'DatesElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'dates',
      private: true,
    },
    default: {
      required: false,
      type: [Array],
      default: () => ([])
    },
    addons: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    floating: {
      required: false,
      type: [String],
      default: null
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    displayFormat: {
      required: false,
      type: [String],
      default: null
    },
    valueFormat: {
      required: false,
      type: [String, Boolean],
      default: null
    },
    loadFormat: {
      required: false,
      type: [String, Boolean],
      default: null
    },
    mode: {
      required: false,
      type: [String],
      default: 'multiple'
    },
    min: {
      required: false,
      type: [String, Date],
      default: null
    },
    max: {
      required: false,
      type: [String, Date],
      default: null
    },
    disables: {
      required: false,
      type: [Array],
      default: () => ([])
    },
    extendOptions: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    placeholder: {
      required: false,
      type: [String],
      default: null
    },
    readonly: {
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

    const fieldId = useFieldId(props, context, {
      path: path.path,
    })

    const floating = useFloating(props, context, {
      form$: form$.form$,
    })

    const events = useEvents(props, context, {}, {
      events: context.emits,
    })

    const baseElement = useBaseElement(props, context, {
      form$: form$.form$,
      fire: events.fire,
    })
    
    const addons = useAddons(props, context, {
      el$: baseElement.el$,
    })

    const dateFormat = useDateFormat(props, context, {
      form$: form$.form$,
    })

    const options = useOptions(props, context, {
      form$: form$.form$,
      isDisabled: disabled.isDisabled,
      displayDateFormat: dateFormat.displayDateFormat,
      valueDateFormat: dateFormat.valueDateFormat,
    })

    const default_ = useDefault(props, context, {
      form$: form$.form$,
      nullValue: nullValue.nullValue,
      path: path.path,
      parent: path.parent,
    })

    const value = useValue(props, context, {
      valueDateFormat: dateFormat.valueDateFormat,
      defaultValue: default_.defaultValue,
      dataPath: path.dataPath,
      form$: form$.form$,
      parent: path.parent,
    })

    const conditions = useConditions(props, context, {
      form$: form$.form$,
      path: path.path,
    })

    const validation = useValidation(props, context, {
      form$: form$.form$,
      path: path.path,
    })

    const data = useData(props, context, {
      form$: form$.form$,
      available: conditions.available,
      value: value.value,
      resetValidators: validation.resetValidators,
      defaultValue: default_.defaultValue,
      nullValue: nullValue.nullValue,
      loadDateFormat: dateFormat.loadDateFormat,
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
      label: label.label,
      form$: form$.form$,
    })
    
    const templates = useTemplates(props, context, {
      theme: theme.theme,
      form$: form$.form$
    })

    const classes = useClasses(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      isDisabled: disabled.isDisabled,
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
        'label', 'info', 'description', 'before',
        'between', 'after', 'addon-before', 'addon-after',
      ]
    })

    const handleChange = useHandleChange(props, context, {
      value: value.value,
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
      ...addons,
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
      ...templates,
      ...slots,
      ...disabled,
      ...events,
      ...data,
      ...empty,
      ...default_,
      ...nullValue,
      ...handleChange,
      ...options,
      ...dateFormat,
      ...floating,
    }
  } 
}