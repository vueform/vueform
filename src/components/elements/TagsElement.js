import useElement from './../../composables/useElement'
import useForm$ from './../../composables/useForm$'
import useFieldId from './../../composables/elements/useFieldId'
import useTheme from './../../composables/useTheme'
import useLayout from './../../composables/elements/useLayout'
import useInput from './../../composables/elements/useInput'
import usePath from './../../composables/elements/usePath'
import useConditions from './../../composables/useConditions'
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
import useA11y from './../../composables/elements/useA11y'
import useFocus from './../../composables/elements/useFocus'
import usePlaceholder from './../../composables/elements/usePlaceholder'

import { array as useNullValue } from './../../composables/elements/useNullValue'
import { array as useEmpty } from './../../composables/elements/useEmpty'
import { tags as useOptions } from './../../composables/elements/useOptions'
import { tags as useBaseElement } from './../../composables/elements/useBaseElement'
import { tags as useFocused } from './../../composables/elements/useFocused'
import { tags as useData } from './../../composables/elements/useData'
import { tags as useAsyncItems } from './../../composables/elements/useAsyncItems'

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
    },
    trackBy: {
      type: [String, Array],
      required: false,
      default: 'label',
    },
    strict: {
      type: [Boolean],
      required: false,
      default: true,
    },
    breakTags: {
      type: [Boolean],
      required: false,
      default: false,
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
    },
    limit: {
      type: [Number],
      required: false,
      default: -1,
    },
    max: {
      type: [Number],
      required: false,
      default: -1,
    },

    groups: {
      type: [Boolean],
      required: false,
      default: false,
    },
    groupLabel: {
      type: [String],
      required: false,
      default: 'label',
    },
    groupOptions: {
      type: [String],
      required: false,
      default: 'items',
    },
    groupHideEmpty: {
      type: [Boolean],
      required: false,
      default: false,
    },
    groupSelect: {
      type: [Boolean],
      required: false,
      default: true,
    },
    
    openDirection: {
      type: [String],
      required: false,
      default: 'bottom',
    },
    appendToBody: {
      type: [Boolean],
      required: false,
      default: false,
      native: false,
    },
    appendTo: {
      type: [String],
      required: false,
      default: undefined,
      native: false,
    },
    canClear: {
      type: [Boolean],
      required: false,
      default: true,
    },
    clearOnSelect: {
      type: [Boolean],
      required: false,
      default: true,
    },
    closeOnSelect: {
      type: [Boolean],
      required: false,
      default: true,
    },
    closeOnDeselect: {
      type: [Boolean],
      required: false,
      default: false,
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
    },
    minChars: {
      type: [Number],
      required: false,
      default: 0,
    },
    resolveOnLoad: {
      type: [Boolean],
      required: false,
      default: true,
    },
    filterResults: {
      type: [Boolean],
      required: false,
      default: true,
    },
    clearOnSearch: {
      type: [Boolean],
      required: false,
      default: false,
    },
    hideSelected: {
      type: [Boolean],
      required: false,
      default: true,
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
    },
    loading: {
      type: [Boolean],
      required: false,
      default: false,
    },
    noOptionsText: {
      type: [String, Object],
      required: false,
      default: undefined,
      '@default': 'locale.multiselect.noOptions',
      localized: true,
    },
    noResultsText: {
      type: [String, Object],
      required: false,
      default: undefined,
      '@default': 'locale.multiselect.noResults',
      localized: true,
    },

    autocomplete: {
      type: [String],
      required: false,
    },
    inputType: {
      type: [String],
      required: false,
      default: 'text',
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
      useEmpty,
      useData,
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
      useA11y,
      useWatchValue,
      useFocus,
      usePlaceholder,
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