import { onMounted, watch } from 'composition-api'
import useForm$ from './../../composables/useForm$'
import useTheme from './../../composables/useTheme'
import useLayout from './../../composables/elements/useLayout'
import useConditions from './../../composables/useConditions'
import useLabel from './../../composables/elements/useLabel'
import useColumns from './../../composables/elements/useColumns'
import useGenericName from './../../composables/elements/useGenericName'
import useView from './../../composables/elements/useView'
import useComponents from './../../composables/elements/useComponents'
import useSlots from './../../composables/elements/useSlots'
import useElements from './../../composables/useElements'
import useDisabled from './../../composables/elements/useDisabled'
import useDefault from './../../composables/elements/useDefault'
import useEvents from './../../composables/useEvents'
import useSort from './../../composables/elements/useSort'
import useSorting from './../../composables/elements/useSorting'
import useOrder from './../../composables/elements/useOrder'
import usePath from './../../composables/elements/usePath'
import useInput from './../../composables/elements/useInput'
import useMultifile from './../../composables/elements/useMultifile'
import useWatchValue from './../../composables/elements/useWatchValue'
import useChildren from './../../composables/elements/useChildren'
import useValue from './../../composables/elements/useValue'

import { multifile as usePrototype } from './../../composables/elements/usePrototype'
import { multifile as useDrop } from './../../composables/elements/useDrop'
import { multifile as useClasses } from './../../composables/elements/useClasses'
import { list as useData } from './../../composables/elements/useData'
import { list as useValidation } from './../../composables/elements/useValidation'
import { list as useBaseElement } from './../../composables/elements/useBaseElement'
import { array as useNullValue } from './../../composables/elements/useNullValue'
import { array as useEmpty } from './../../composables/elements/useEmpty'

import BaseElement from './../../mixins/BaseElement'
import HasView from './../../mixins/HasView'
import HasChange from './../../mixins/HasChange'
import HasData from './../../mixins/HasData'
import HasValidation from './../../mixins/HasValidation'

export default {
  name: 'MultifileElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'add', 'remove', 'sort'],
  // slots: ['label', 'description', 'error', 'message', 'before', 'between', 'after'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'multifile'
    },
    default: {
      required: false,
      type: [Array],
      default: () => ([])
    },
    image: {
      type: [Boolean],
      required: false,
      default: false
    },
    view: {
      type: [String],
      required: false,
      default: null,
    },
    debounce: {
      required: false,
      type: [Number],
      default: null
    },
    initial: {
      required: false,
      type: [Number],
      default: 1
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
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
    order: {
      required: false,
      type: [String],
      default: 'ASC'
    },
    orderBy: {
      required: false,
      type: [String],
      default: null
    },
    auto: {
      required: false,
      type: [Boolean],
      default: true
    },
    file: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    storeFile: {
      required: false,
      type: [String],
      default: null
    },
    fields: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    sort: {
      required: false,
      type: [Boolean],
      default: false
    },
    storeOrder: {
      required: false,
      type: [String],
      default: null
    },
    object: {
      required: false,
      type: [Boolean],
      default: null
    },
    onAdd: {
      required: false,
      type: [Function],
      default: null,
    },
    onRemove: {
      required: false,
      type: [Function],
      default: null,
    },
    onSort: {
      required: false,
      type: [Function],
      default: null,
    },
  },
  setup(props, context) {
    const form$ = useForm$(props, context)
    const theme = useTheme(props, context)
    const layout = useLayout(props, context)
    const path = usePath(props, context)
    const disabled = useDisabled(props, context)
    const nullValue = useNullValue(props, context)
    const children = useChildren(props, context)
    const input = useInput(props, context)
    const sorting = useSorting(props, context)

    const prototype = usePrototype(props, context, {
      isDisabled: disabled.isDisabled,
    })

    const baseElement = useBaseElement(props, context, {
      form$: form$.form$,
    })

    const events = useEvents(props, context, {
      form$: form$.form$,
    }, {
      events: [
        'change', 'add', 'remove', 'sort'
      ]
    })

    const default_ = useDefault(props, context, {
      nullValue: nullValue.nullValue,
      form$: form$.form$,
      dataPath: path.dataPath,
      parent: path.parent,
    })

    const label = useLabel(props, context, {
      form$: form$.form$,
    })

    const genericName = useGenericName(props, context, {
      label: label.label,
    })

    const validation = useValidation(props, context, {
      form$: form$.form$,
      children$: children.children$,
      form$: form$.form$,
      path: path.path,
    })

    const value = useValue(props, context, {
      defaultValue: default_.defaultValue,
      dataPath: path.dataPath,
      form$: form$.form$,
      parent: path.parent,
    }, { init: false })

    const empty = useEmpty(props, context, {
      value: value.value,
      nullValue: nullValue.nullValue,
    })

    const elements = useElements(props, context, {
      theme: theme.theme,
    })

    const conditions = useConditions(props, context, {
      form$: form$.form$,
      path: path.path,
    })

    const columns = useColumns(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      hasLabel: label.hasLabel,
    })

    const view = useView(props, context, {
      available: conditions.available,
    })

    const components = useComponents(props, context, {
      theme: theme.theme,
      form$: form$.form$
    })

    const slots = useSlots(props, context, {
      form$: form$.form$,
      components: components.components,
    }, {
      slots: [
        'label', 'description', 'error',
        'message', 'before', 'between', 'after'
      ]
    })

    const order = useOrder(props, context, {
      isObject: prototype.isObject,
      children$: children.children$,
    })

    const data = useData(props, context, {
      form$: form$.form$,
      available: conditions.available,
      value: value.value,
      resetValidators: validation.resetValidators,
      defaultValue: default_.defaultValue,
      nullValue: nullValue.nullValue,
      children$: children.children$,
      isDisabled: disabled.isDisabled,
      orderByName: order.orderByName,
      refreshOrderStore: order.refreshOrderStore,
      dataPath: path.dataPath,
      nullValue: nullValue.nullValue,
      defaultValue: default_.defaultValue,
      fire: events.fire,
    })

    const multifile = useMultifile(props, context, {
      isDisabled: disabled.isDisabled,
      input: input.input,
      add: data.add,
      isObject: prototype.isObject,
      storeFileName: prototype.storeFileName,
    })

    const drop = useDrop(props, context, {
      add: data.add,
      isDisabled: disabled.isDisabled,
      isObject: prototype.isObject,
      storeFileName: prototype.storeFileName,
      accept: multifile.accept,
    })

    const classes = useClasses(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      isDisabled: disabled.isDisabled,
      sorting: sorting.sorting,
    })

    const sort = useSort(props, context, {
      isDisabled: disabled.isDisabled,
      fire: events.fire,
      refreshOrderStore: order.refreshOrderStore,
      value: value.value,
      sorting: sorting.sorting,
      classes: classes.classes,
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
      ...theme,
      ...layout,
      ...path,
      ...disabled,
      ...nullValue,
      ...label,
      ...baseElement,
      ...genericName,
      ...children,
      ...value,
      ...elements,
      ...conditions,
      ...validation,
      ...classes,
      ...columns,
      ...view,
      ...components,
      ...slots,
      ...data,
      ...events,
      ...sort,
      ...sorting,
      ...default_,
      ...order,
      ...prototype,
      ...multifile,
      ...input,
      ...drop,
      ...empty,
    }
  } 
}