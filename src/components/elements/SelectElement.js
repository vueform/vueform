import useElement from './../../composables/useElement'
import useForm$ from './../../composables/useForm$'
import useFieldId from './../../composables/elements/useFieldId'
import useTheme from './../../composables/useTheme'
import useLayout from './../../composables/elements/useLayout'
import useInput from './../../composables/elements/useInput'
import usePath from './../../composables/elements/usePath'
import useConditions from './../../composables/useConditions'
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
import useValue from './../../composables/elements/useValue'
import useWatchValue from './../../composables/elements/useWatchValue'
import useFloating from './../../composables/elements/useFloating'
import useLoading from './../../composables/elements/useLoading'
import useClasses from './../../composables/elements/useClasses'
import useA11y from './../../composables/elements/useA11y'
import useFocus from './../../composables/elements/useFocus'
import usePlaceholder from './../../composables/elements/usePlaceholder'

import { select as useFocused } from './../../composables/elements/useFocused'
import { select as useOptions } from './../../composables/elements/useOptions'
import { select as useData } from './../../composables/elements/useData'
import { select as useAsyncItems } from './../../composables/elements/useAsyncItems'

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
      type: [String, Boolean, Object],
      localized: true,
      default: null
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    placeholder: {
      required: false,
      type: [String, Object],
      localized: true,
      default: null
    },
    attrs: {
      required: false,
      type: [Object],
      default: () => ({}),
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
      type: [Object, Array, Function, String],
      localized: true,
      default: () => ({})
    },
    labelProp: {
      type: [String],
      required: false,
      default: 'label',
    },
    valueProp: {
      type: [String],
      required: false,
      default: 'value',
    },
    dataKey: {
      type: [String],
      required: false,
      default: undefined,
    },
    searchParam: {
      type: [String],
      required: false,
      default: 'query',
    },
    search: {
      required: false,
      type: [Boolean],
      default: false,
      native: false,
    },
    trackBy: {
      type: [String, Array],
      required: false,
      default: undefined,
      native: false,
    },
    strict: {
      type: [Boolean],
      required: false,
      default: true,
      native: false,
    },

    create: {
      required: false,
      type: [Boolean],
      default: false,
      native: false,
    },
    appendNewOption: {
      type: [Boolean],
      required: false,
      default: true,
      native: false,
    },
    addOptionOn: {
      type: [Array],
      required: false,
      default: () => (['enter']),
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
    closeOnDeselect: {
      type: [Boolean],
      required: false,
      default: false,
      native: false,
    },
    clearOnRefetch: {
      type: [Boolean],
      required: false,
      default: false,
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
    truncate: {
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
      type: [String, Object],
      required: false,
      default: undefined,
      '@default': 'locale.multiselect.noOptions',
      localized: true,
      native: false,
    },
    noResultsText: {
      type: [String, Object],
      required: false,
      default: undefined,
      '@default': 'locale.multiselect.noResults',
      localized: true,
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
    context.features = [
      useForm$,
      useTheme,
      useLayout,
      useInput,
      usePath,
      useDisabled,
      useNullValue,
      useFieldId,
      useFloating,
      useEvents,
      useBaseElement,
      useDefault,
      useValidation,
      useLoading,
      useOptions,
      useValue,
      useAsyncItems,
      useConditions,
      useData,
      useEmpty,
      useLabel,
      useGenericName,
      useView,
      useTemplates,
      useClasses,
      useColumns,
      useSlots,
      useHandleSelectEvents,
      useFocused,
      useA11y,
      useWatchValue,
      useFocus,
      usePlaceholder,
    ]
    context.slots = [
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

    return {
      ...useElement(props, context)
    }
  },
}
  