import { onMounted, watch } from 'composition-api'
import useForm$ from './../../composables/useForm$'
import useFieldId from './../../composables/elements/useFieldId'
import useTheme from './../../composables/useTheme'
import useLayout from './../../composables/elements/useLayout'
import useInput from './../../composables/elements/useInput'
import useAddons from './../../composables/elements/useAddons'
import usePath from './../../composables/elements/usePath'
import useConditions from './../../composables/useConditions'
import useLabel from './../../composables/elements/useLabel'
import useColumns from './../../composables/elements/useColumns'
import useBaseElement from './../../composables/elements/useBaseElement'
import useGenericName from './../../composables/elements/useGenericName'
import useView from './../../composables/elements/useView'
import useComponents from './../../composables/elements/useComponents'
import useSlots from './../../composables/elements/useSlots'
import useDisabled from './../../composables/elements/useDisabled'
import useEvents from './../../composables/useEvents'
import useHandleInput from './../../composables/elements/useHandleInput'
import useLanguages from './../../composables/elements/useLanguages'
import useWatchValue from './../../composables/elements/useWatchValue'

import { input as useClasses } from './../../composables/elements/useClasses'
import { multilingual as useValue } from './../../composables/elements/useValue'
import { multilingual as useData } from './../../composables/elements/useData'
import { multilingual as useDefault } from './../../composables/elements/useDefault'
import { multilingual as useNullValue } from './../../composables/elements/useNullValue'
import { multilingual as useValidation } from './../../composables/elements/useValidation'
import { multilingual as useEmpty } from './../../composables/elements/useEmpty'
import { multilingual as useAutogrow } from './../../composables/elements/useAutogrow'

import BaseElement from './../../mixins/BaseElement'
import HasView from './../../mixins/HasView'
import HasChange from './../../mixins/HasChange'
import HasData from './../../mixins/HasData'
import HasValidation from './../../mixins/HasValidation'

export default {
  name: 'TTextareaElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 't-textarea',
      private: true,
    },
    default: {
      required: false,
      type: [Object, String, Number],
      default: null
    },
    addons: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    autogrow: {
      required: false,
      type: [Boolean],
      default: true
    },
    rows: {
      required: false,
      type: [Number],
      default: 3
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
    const fieldId = useFieldId(props, context)
    const theme = useTheme(props, context)
    const layout = useLayout(props, context)
    const input = useInput(props, context)
    const addons = useAddons(props, context)
    const path = usePath(props, context)
    const disabled = useDisabled(props, context)

    const baseElement = useBaseElement(props, context, {
      form$: form$.form$,
    })

    const events = useEvents(props, context, {
      form$: form$.form$,
    }, {
      events: [
        'change'
      ],
    })

    const languages = useLanguages(props, context, {
      form$: form$.form$,
    })

    const nullValue = useNullValue(props, context, {
      languages: languages.languages,
    })

    const default_ = useDefault(props, context, {
      nullValue: nullValue.nullValue,
      form$: form$.form$,
      parent: path.parent,
    })

    const value = useValue(props, context, {
      defaultValue: default_.defaultValue,
      language: languages.language,
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
      language: languages.language,
      languages: languages.languages,
      value: value.value,
    })

    const data = useData(props, context, {
      form$: form$.form$,
      available: conditions.available,
      value: value.value,
      resetValidators: validation.resetValidators,
      defaultValue: default_.defaultValue,
      nullValue: nullValue.nullValue,
      language: languages.language,
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
      isDisabled: disabled.isDisabled,
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
      components: components.components,
    }, {
      slots: [
        'label', 'description', 'error',
        'message', 'before', 'between', 'after',
        'addonBefore', 'addonAfter'
      ]
    })

    const handleInput = useHandleInput(props, context, {
      model: value.model,
    })

    const autogrow = useAutogrow(props, context, {
      form$: form$.form$,
      input: input.input,
      value: value.value,
    })

    useWatchValue(props, context, {
      form$: form$.form$,
      value: value.value,
      fire: events.fire,
      dirt: validation.dirt,
      validate: validation.validateLanguage,
    })

    onMounted(() => {
      validation.initState()
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
      ...components,
      ...slots,
      ...disabled,
      ...events,
      ...data,
      ...empty,
      ...default_,
      ...nullValue,
      ...handleInput,
      ...autogrow,
      ...languages,
    }
  } 
}