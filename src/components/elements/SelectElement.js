import { onMounted, watch } from 'composition-api'
import useForm$ from './../../composables/useForm$'
import useFieldId from './../../composables/elements/useFieldId'
import useTheme from './../../composables/useTheme'
import useLayout from './../../composables/elements/useLayout'
import useInput from './../../composables/elements/useInput'
import usePath from './../../composables/elements/usePath'
import useConditions from './../../composables/useConditions'
import useData from './../../composables/elements/useData'
import useDefault from './../../composables/elements/useDefault'
import useNullValue from './../../composables/elements/useNullValue'
import useValidation from './../../composables/elements/useValidation'
import useLabel from './../../composables/elements/useLabel'
import useColumns from './../../composables/elements/useColumns'
import useBaseElement from './../../composables/elements/useBaseElement'
import useGenericName from './../../composables/elements/useGenericName'
import useView from './../../composables/elements/useView'
import useTemplates from './../../composables/elements/useTemplates'
import useSlots from './../../composables/elements/useSlots'
import useDisabled from './../../composables/elements/useDisabled'
import useEvents from './../../composables/useEvents'
import useEmpty from './../../composables/elements/useEmpty'
import useHandleSelectEvents from './../../composables/elements/useHandleSelectEvents'
import useAsyncItems from './../../composables/elements/useAsyncItems'
import useValue from './../../composables/elements/useValue'
import useWatchValue from './../../composables/elements/useWatchValue'
import useFloating from './../../composables/elements/useFloating'
import useLoading from './../../composables/elements/useLoading'

import { select as useOptions } from './../../composables/elements/useOptions'
import { input as useClasses } from './../../composables/elements/useClasses'

import BaseElement from './../../mixins/BaseElement'
import HasView from './../../mixins/HasView'
import HasChange from './../../mixins/HasChange'
import HasData from './../../mixins/HasData'
import HasValidation from './../../mixins/HasValidation'

export default {
  name: 'SelectElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'select', 'deselect', 'search-change', 'open', 'close', 'clear', 'paste', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'select',
      private: true,
    },
    default: {
      required: false,
      type: [String, Number, Object],
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
    onSelect: {
      required: false,
      type: [Function],
      default: null,
      private: true,
    },
    onDeselect: {
      required: false,
      type: [Function],
      default: null,
      private: true,
    },
    onSearchChange: {
      required: false,
      type: [Function],
      default: null,
      private: true,
    },
    onOpen: {
      required: false,
      type: [Function],
      default: null,
      private: true,
    },
    onClose: {
      required: false,
      type: [Function],
      default: null,
      private: true,
    },
    onClear: {
      required: false,
      type: [Function],
      default: null,
      private: true,
    },
    onPaste: {
      required: false,
      type: [Function],
      default: null,
      private: true,
    },

    native: {
      required: false,
      type: [Boolean],
      default: true
    },
    items: {
      required: false,
      type: [Object, Array, Function],
      default: () => ({})
    },
    labelProp: {
      type: [String],
      required: false,
      default: 'label',
      native: false,
    },
    valueProp: {
      type: [String],
      required: false,
      default: 'value',
      native: false,
    },
    search: {
      required: false,
      type: [Boolean],
      default: false,
      native: false,
    },
    trackBy: {
      type: [String],
      required: false,
      default: 'label',
      native: false,
    },
    strict: {
      type: [Boolean],
      required: false,
      default: true,
      native: false,
    },
    object: {
      type: [Boolean],
      required: false,
      default: false,
      native: false,
    },
    limit: {
      type: [Number],
      required: false,
      default: -1,
      native: false,
    },
    groups: {
      type: [Boolean],
      required: false,
      default: false,
      native: false,
    },
    groupLabel: {
      type: [String],
      required: false,
      default: 'label',
      native: false,
    },
    groupOptions: {
      type: [String],
      required: false,
      default: 'items',
      native: false,
    },
    groupHideEmpty: {
      type: [Boolean],
      required: false,
      default: false,
      native: false,
    },
    
    openDirection: {
      type: [String],
      required: false,
      default: 'bottom',
      native: false,
    },
    canDeselect: {
      type: [Boolean],
      required: false,
      default: true,
      native: false,
    },
    canClear: {
      type: [Boolean],
      required: false,
      default: true,
      native: false,
    },
    closeOnSelect: {
      type: [Boolean],
      required: false,
      default: true,
      native: false,
    },

    delay: {
      type: [Number],
      required: false,
      default: -1,
      native: false,
    },
    minChars: {
      type: [Number],
      required: false,
      default: 0,
      native: false,
    },
    resolveOnLoad: {
      type: [Boolean],
      required: false,
      default: true,
      native: false,
    },
    filterResults: {
      type: [Boolean],
      required: false,
      default: true,
      native: false,
    },
    clearOnSearch: {
      type: [Boolean],
      required: false,
      default: false,
      native: false,
    },

    caret: {
      type: [Boolean],
      required: false,
      default: true,
      native: false,
    },
    loading: {
      type: [Boolean],
      required: false,
      default: false,
      native: false,
    },
    noOptionsText: {
      type: [String],
      required: false,
      default: undefined,
      '@default': 'locale.multiselect.noOptions',
      native: false,
    },
    noResultsText: {
      type: [String],
      required: false,
      default: undefined,
      '@default': 'locale.multiselect.noResults',
      native: false,
    },

    autocomplete: {
      type: [String],
      required: false,
      native: false,
    },
    inputType: {
      type: [String],
      required: false,
      default: 'text',
      native: false,
    },
    extendOptions: {
      required: false,
      type: [Object],
      default: () => ({})
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

    const default_ = useDefault(props, context, {
      nullValue: nullValue.nullValue,
      form$: form$.form$,
      dataPath: path.dataPath,
      parent: path.parent,
    })

    const validation = useValidation(props, context, {
      form$: form$.form$,
      path: path.path,
    })

    const loading = useLoading(props, context, {
      pending: validation.pending,
    })

    const options = useOptions(props, context, {
      form$: form$.form$,
      isLoading: loading.isLoading,
    })

    const asyncItems = useAsyncItems(props, context, {
      isNative: options.isNative,
      input: input.input,
      disable: disabled.disable,
      enable: disabled.enable,
      el$: baseElement.el$,
    })

    const value = useValue(props, context, {
      defaultValue: default_.defaultValue,
      dataPath: path.dataPath,
      form$: form$.form$,
      parent: path.parent,
    })

    const conditions = useConditions(props, context, {
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
        'option',
        'single-label',
        'placeholder',
        'group-label', 
        'before-list',
        'after-list',
        'no-results',
        'no-options',
        'caret',
        'spinner',
        'clear',
        'label', 'info', 'description', 'before', 'between', 'after',
      ]
    })

    const handleSelectEvents = useHandleSelectEvents(props, context, {
      fire: events.fire,
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
      ...templates,
      ...slots,
      ...disabled,
      ...events,
      ...data,
      ...empty,
      ...default_,
      ...nullValue,
      ...asyncItems,
      ...options,
      ...handleSelectEvents,
      ...floating,
      ...loading,
    }
  } 
}
  