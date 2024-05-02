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
import useLabel from './../../composables/elements/useLabel'
import useColumns from './../../composables/elements/useColumns'
import useView from './../../composables/elements/useView'
import useTemplates from './../../composables/elements/useTemplates'
import useDisabled from './../../composables/elements/useDisabled'
import useEvents from './../../composables/useEvents'
import useEmpty from './../../composables/elements/useEmpty'
import useFile from './../../composables/elements/useFile'
import useRequest from './../../composables/elements/useRequest'
import useDrop from './../../composables/elements/useDrop'
import useRemoving from './../../composables/elements/useRemoving'
import useHandleError from './../../composables/elements/useHandleError'
import useValue from './../../composables/elements/useValue'
import useWatchValue from './../../composables/elements/useWatchValue'
import useSlots from './../../composables/elements/useSlots'
import useClasses from './../../composables/elements/useClasses'
import useFocus from './../../composables/elements/useFocus'

import { file as useBaseElement } from './../../composables/elements/useBaseElement'
import { file as useValidation } from './../../composables/elements/useValidation'
import { file as useGenericName } from './../../composables/elements/useGenericName'
import { file as useA11y } from './../../composables/elements/useA11y'
import { file as useData } from './../../composables/elements/useData'

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
    urls: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    methods: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    uploadTempEndpoint: {
      required: false,
      type: [Object, String, Function, Boolean, Promise],
      default: undefined,
      '@default': 'config.endpoints.uploadTempFile',
    },
    removeTempEndpoint: {
      required: false,
      type: [Object, String, Function, Boolean, Promise],
      default: undefined,
      '@default': 'config.endpoints.removeTempFile',
    },
    removeEndpoint: {
      required: false,
      type: [Object, String, Function, Boolean, Promise],
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
    embed: {
      type: [Boolean],
      required: false,
      default: false,
      private: true,
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
      useRemoving,
      useFieldId,
      useEvents,
      useBaseElement,
      useRequest,
      useDefault,
      useConditions,
      useValue,
      useValidation,
      useEmpty,
      useData,
      useHandleError,
      useFile,
      useDrop,
      useLabel,
      useGenericName,
      useView,
      useTemplates,
      useClasses,
      useColumns,
      useSlots,
      useA11y,
      useWatchValue,
      useFocus,
    ]
    context.slots = [
      'label', 'info', 'description',
      'before', 'between', 'after',
    ]

    return {
      ...useElement(props, context)
    }
  },
}