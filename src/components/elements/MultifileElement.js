import useElement from './../../composables/useElement'
import useForm$ from './../../composables/useForm$'
import useTheme from './../../composables/useTheme'
import useLayout from './../../composables/elements/useLayout'
import useConditions from './../../composables/useConditions'
import useLabel from './../../composables/elements/useLabel'
import useColumns from './../../composables/elements/useColumns'
import useGenericName from './../../composables/elements/useGenericName'
import useView from './../../composables/elements/useView'
import useTemplates from './../../composables/elements/useTemplates'
import useSlots from './../../composables/elements/useSlots'
import useElements from './../../composables/useElements'
import useDisabled from './../../composables/elements/useDisabled'
import useDefault from './../../composables/elements/useDefault'
import useEvents from './../../composables/useEvents'
import useSort from './../../composables/elements/useSort'
import useSorting from './../../composables/elements/useSorting'
import usePath from './../../composables/elements/usePath'
import useInput from './../../composables/elements/useInput'
import useMultifile from './../../composables/elements/useMultifile'
import useChildren from './../../composables/elements/useChildren'
import useValue from './../../composables/elements/useValue'
import useClasses from './../../composables/elements/useClasses'
import useFieldId from './../../composables/elements/useFieldId'
import useA11y from './../../composables/elements/useA11y'
import useFocus from './../../composables/elements/useFocus'

import { array as useNullValue } from './../../composables/elements/useNullValue'
import { array as useEmpty } from './../../composables/elements/useEmpty'
import { list as useValidation } from './../../composables/elements/useValidation'
import { list as useBaseElement } from './../../composables/elements/useBaseElement'
import { multifile as useData } from './../../composables/elements/useData'
import { multifile as usePrototype } from './../../composables/elements/usePrototype'
import { multifile as useDrop } from './../../composables/elements/useDrop'
import { multifile as useWatchValue } from './../../composables/elements/useWatchValue'
import { multifile as useControls } from './../../composables/elements/useControls'
import { multifile as useOrder } from './../../composables/elements/useOrder'

import BaseElement from './../../mixins/BaseElement'
import HasView from './../../mixins/HasView'
import HasChange from './../../mixins/HasChange'
import HasData from './../../mixins/HasData'
import HasValidation from './../../mixins/HasValidation'

export default {
  name: 'MultifileElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'add', 'remove', 'sort', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'multifile',
      private: true,
    },
    default: {
      required: false,
      type: [Array],
      default: () => ([])
    },
    initial: {
      required: false,
      type: [Number],
      default: 0,
      private: true,
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
    onAdd: {
      required: false,
      type: [Function],
      default: null,
      private: true,
    },
    onRemove: {
      required: false,
      type: [Function],
      default: null,
      private: true,
    },
    onSort: {
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
    sort: {
      required: false,
      type: [Boolean],
      default: false
    },
    controls: {
      required: false,
      type: [Object],
      default: () => ({
        add: true,
        remove: true,
        sort: true,
      })
    },
    object: {
      required: false,
      type: [Boolean],
      default: null
    },
    storeFile: {
      required: false,
      type: [String],
      default: 'file',
    },
    fields: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    storeOrder: {
      required: false,
      type: [String],
      default: null
    },
    order: {
      required: false,
      type: [String],
      default: null
    },
    orderBy: {
      required: false,
      type: [String],
      default: null
    },

    file: {
      required: false,
      type: [Object],
      default: () => ({})
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
      type: [String, Boolean],
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
    uploadTempEndpoint: {
      required: false,
      type: [Object, String, Function],
      default: undefined,
      '@default': 'config.endpoints.uploadTempFile',
    },
    removeTempEndpoint: {
      required: false,
      type: [Object, String, Function],
      default: undefined,
      '@default': 'config.endpoints.removeTempFile',
    },
    removeEndpoint: {
      required: false,
      type: [Object, String, Function],
      default: undefined,
      '@default': 'config.endpoints.removeFile',
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
    context.features = [
      useForm$,
      useTheme,
      useLayout,
      usePath,
      useDisabled,
      useNullValue,
      useChildren,
      useInput,
      useSorting,
      usePrototype,
      useFieldId,
      useEvents,
      useBaseElement,
      useDefault,
      useLabel,
      useGenericName,
      useValidation,
      useValue,
      useEmpty,
      useElements,
      useConditions,
      useColumns,
      useView,
      useTemplates,
      useSlots,
      useOrder,
      useData,
      useMultifile,
      useControls,
      useDrop,
      useClasses,
      useSort,
      useA11y,
      useWatchValue,
      useFocus,
    ]
    context.slots = [
      'label', 'info', 'description',
      'before', 'between', 'after'
    ]

    return {
      ...useElement(props, context)
    }
  },
}