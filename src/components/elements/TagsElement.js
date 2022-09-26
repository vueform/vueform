import useElement from './../../composables/useElement'
import useForm$ from './../../composables/useForm$'
import useFieldId from './../../composables/elements/useFieldId'
import useTheme from './../../composables/useTheme'
import useLayout from './../../composables/elements/useLayout'
import useInput from './../../composables/elements/useInput'
import usePath from './../../composables/elements/usePath'
import useConditions from './../../composables/useConditions'
import useData from './../../composables/elements/useData'
import useDefault from './../../composables/elements/useDefault'
import useValidation from './../../composables/elements/useValidation'
import useLabel from './../../composables/elements/useLabel'
import useClasses from './../../composables/elements/useClasses'
import useColumns from './../../composables/elements/useColumns'
import useGenericName from './../../composables/elements/useGenericName'
import useView from './../../composables/elements/useView'
import useTemplates from './../../composables/elements/useTemplates'
import useSlots from './../../composables/elements/useSlots'
import useDisabled from './../../composables/elements/useDisabled'
import useEvents from './../../composables/useEvents'
import useHandleSelectEvents from './../../composables/elements/useHandleSelectEvents'
import useHandleTag from './../../composables/elements/useHandleTag'
import useSelect from './../../composables/elements/useSelect'
import useValue from './../../composables/elements/useValue'
import useWatchValue from './../../composables/elements/useWatchValue'
import useFloating from './../../composables/elements/useFloating'
import useLoading from './../../composables/elements/useLoading'
import useAsyncItems from './../../composables/elements/useAsyncItems'
import useA11y from './../../composables/elements/useA11y'

import { array as useNullValue } from './../../composables/elements/useNullValue'
import { array as useEmpty } from './../../composables/elements/useEmpty'
import { tags as useOptions } from './../../composables/elements/useOptions'
import { tags as useBaseElement } from './../../composables/elements/useBaseElement'
import { tags as useFocused } from './../../composables/elements/useFocused'

import BaseElement from './../../mixins/BaseElement'
import HasView from './../../mixins/HasView'
import HasChange from './../../mixins/HasChange'
import HasData from './../../mixins/HasData'
import HasValidation from './../../mixins/HasValidation'

export default {
  name: 'TagsElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'select', 'deselect', 'search-change', 'open', 'close', 'tag', 'clear', 'paste', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'tags',
      private: true,
    },
    default: {
      required: false,
      type: [Array],
      default: () => ([])
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    floating: {
      required: false,
      type: [String, Boolean],
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
    onTag: {
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

    items: {
      required: false,
      type: [Object, Array, Function, String],
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

    create: {
      required: false,
      type: [Boolean],
      default: false
    },
    appendNewOption: {
      type: [Boolean],
      required: false,
      default: true,
    },
    addOptionOn: {
      type: [Array],
      required: false,
      default: () => (['enter']),
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
    max: {
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
    groupSelect: {
      type: [Boolean],
      required: false,
      default: true,
      native: false,
    },
    
    openDirection: {
      type: [String],
      required: false,
      default: 'bottom',
      native: false,
    },
    canClear: {
      type: [Boolean],
      required: false,
      default: true,
      native: false,
    },
    clearOnSelect: {
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
    hideSelected: {
      type: [Boolean],
      required: false,
      default: true,
      native: false,
    },
    showOptions: {
      type: [Boolean],
      required: false,
      default: true,
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
    context.features = [
      useForm$,
      useTheme,
      useLayout,
      useInput,
      usePath,
      useDisabled,
      useNullValue,
      useFieldId,
      useA11y,
      useFloating,
      useEvents,
      useBaseElement,
      useDefault,
      useValidation,
      useLoading,
      useOptions,
      useAsyncItems,
      useValue,
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
      useHandleTag,
      useSelect,
      useFocused,
    ]
    context.slots = [
      'tag',
      'option',
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