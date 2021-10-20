export default {
address: {
  events: [],
  slots: ['label', 'info', 'description', 'message', 'before', 'between', 'after'],
  props: {
    name: {
      required: true,
      type: [String, Number],
    },
    type: {
      required: false,
      type: [String],
      default: 'address'
    },
    addClass: {
      required: false,
      type: [String, Array, Object],
      default: null
    },
    overrideClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    addClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    columns: {
      required: false,
      type: [Object, String],
      default: null
    },
    overrideComponents: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    conditions: {
      required: false,
      type: [Array],
      default: []
    },
    formatData: {
      required: false,
      type: [Function],
      default: null
    },
    formatLoad: {
      required: false,
      type: [Function],
      default: null
    },
    submit: {
      required: false,
      type: [Boolean],
      default: true
    },
    description: {
      required: false,
      type: [String],
      default: null
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    info: {
      required: false,
      type: [String],
      default: null
    },
    label: {
      required: false,
      type: [String],
      default: null
    },
    provider: {
      required: false,
      type: [String],
      default: 'google'
    },
    options: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    readonly: {
      required: false,
      type: [Boolean],
      default: false
    },
    required: {
      required: false,
      type: [Boolean],
      default: false
    },
    before: {
      required: false,
      type: [Object],
      default: null
    },
    between: {
      required: false,
      type: [Object],
      default: null
    },
    after: {
      required: false,
      type: [Object],
      default: null
    },
    slots: {
      required: false,
      type: [Object],
      default: () => ({})
    },
  },
},
button: {
  events: [],
  slots: ['label', 'info', 'description', 'before', 'between', 'after'],
  props: {
    name: {
      required: true,
      type: [String, Number],
    },
    type: {
      required: false,
      type: [String],
      default: 'button'
    },
    buttonLabel: {
      required: false,
      type: [String],
      default: null
    },
    buttonType: {
      required: false,
      type: [String],
      default: 'button'
    },
    buttonClass: {
      required: false,
      type: [String, Array, Object],
      default: null
    },
    disabled: {
      required: false,
      type: [Function],
      default: false
    },
    loading: {
      required: false,
      type: [Function],
      default: false
    },
    href: {
      required: false,
      type: [String],
      default: null
    },
    target: {
      required: false,
      type: [String],
      default: null
    },
    align: {
      required: false,
      type: [String],
      default: 'left'
    },
    onClick: {
      required: false,
      type: [Function],
      default: null
    },
    addClass: {
      required: false,
      type: [String, Array, Object],
      default: null
    },
    overrideClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    addClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    columns: {
      required: false,
      type: [Object, String],
      default: null
    },
    overrideComponents: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    conditions: {
      required: false,
      type: [Array],
      default: []
    },
    description: {
      required: false,
      type: [String],
      default: null
    },
    info: {
      required: false,
      type: [String],
      default: null
    },
    label: {
      required: false,
      type: [String],
      default: null
    },
    before: {
      required: false,
      type: [Object],
      default: null
    },
    between: {
      required: false,
      type: [Object],
      default: null
    },
    after: {
      required: false,
      type: [Object],
      default: null
    },
    slots: {
      required: false,
      type: [Object],
      default: () => ({})
    },
  },
},
buttons: {
  emits: [],
  slots: ['label', 'info', 'description', 'before', 'between', 'after'],
  props: {
    name: {
      required: true,
      type: [String, Number],
    },
    type: {
      required: false,
      type: [String],
      default: 'buttons'
    },
    buttons: {
      required: false,
      type: [Array],
      default: []
    },
    addClass: {
      required: false,
      type: [String, Array, Object],
      default: null
    },
    overrideClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    addClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    columns: {
      required: false,
      type: [Object, String],
      default: null
    },
    overrideComponents: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    conditions: {
      required: false,
      type: [Array],
      default: []
    },
    description: {
      required: false,
      type: [String],
      default: null
    },
    info: {
      required: false,
      type: [String],
      default: null
    },
    label: {
      required: false,
      type: [String],
      default: null
    },
    before: {
      required: false,
      type: [Object],
      default: null
    },
    between: {
      required: false,
      type: [Object],
      default: null
    },
    after: {
      required: false,
      type: [Object],
      default: null
    },
    slots: {
      required: false,
      type: [Object],
      default: () => ({})
    },
  },
},
checkbox: {
  emits: ['change'],
  slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after'],
  props: {
    name: {
      required: true,
      type: [String, Number],
    },
    type: {
      required: false,
      type: [String],
      default: 'checkbox'
    },
    trueValue: {
      required: false,
      type: [Boolean, String, Number],
      default: 1
    },
    falseValue: {
      required: false,
      type: [Boolean, String, Number],
      default: 0
    },
    addClass: {
      required: false,
      type: [String, Array, Object],
      default: null
    },
    overrideClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    addClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    columns: {
      required: false,
      type: [Object, String],
      default: null
    },
    overrideComponents: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    conditions: {
      required: false,
      type: [Array],
      default: []
    },
    formatData: {
      required: false,
      type: [Function],
      default: null
    },
    formatLoad: {
      required: false,
      type: [Function],
      default: null
    },
    submit: {
      required: false,
      type: [Boolean],
      default: true
    },
    debounce: {
      required: false,
      type: [Number],
      default: 0
    },
    default: {
      required: false,
      type: [String, Number, Boolean],
      default: undefined // falseValue
    },
    description: {
      required: false,
      type: [String],
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
    info: {
      required: false,
      type: [String],
      default: null
    },
    label: {
      required: false,
      type: [String],
      default: null
    },
    before: {
      required: false,
      type: [Object],
      default: null
    },
    between: {
      required: false,
      type: [Object],
      default: null
    },
    after: {
      required: false,
      type: [Object],
      default: null
    },
    slots: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    text: {
      required: false,
      type: [String],
      default: null
    },
    rules: {
      required: false,
      type: [Array, String, Object],
      default: null
    },
    messages: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    displayError: {
      required: false,
      type: [Boolean],
      default: true
    },
  },
},
checkboxgroup: {
  emits: ['change'],
  slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after', 'checkbox'],
  props: {
    name: {
      required: true,
      type: [String, Number],
    },
    type: {
      required: false,
      type: [String],
      default: 'checkboxgroup'
    },
    addClass: {
      required: false,
      type: [String, Array, Object],
      default: null
    },
    overrideClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    addClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    columns: {
      required: false,
      type: [Object, String],
      default: null
    },
    overrideComponents: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    conditions: {
      required: false,
      type: [Array],
      default: []
    },
    formatData: {
      required: false,
      type: [Function],
      default: null
    },
    formatLoad: {
      required: false,
      type: [Function],
      default: null
    },
    submit: {
      required: false,
      type: [Boolean],
      default: true
    },
    debounce: {
      required: false,
      type: [Number],
      default: 0
    },
    default: {
      required: false,
      type: [Array],
      default: []
    },
    description: {
      required: false,
      type: [String],
      default: null
    },
    disables: {
      required: false,
      type: [Array],
      default: []
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
    info: {
      required: false,
      type: [String],
      default: null
    },
    items: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    label: {
      required: false,
      type: [String],
      default: null
    },
    before: {
      required: false,
      type: [Object],
      default: null
    },
    between: {
      required: false,
      type: [Object],
      default: null
    },
    after: {
      required: false,
      type: [Object],
      default: null
    },
    slots: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    rules: {
      required: false,
      type: [Array, String, Object],
      default: null
    },
    messages: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    displayError: {
      required: false,
      type: [Boolean],
      default: true
    },
  },
},
date: {
  emits: ['change'],
  slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after'],
  props: {
    name: {
      required: true,
      type: [String, Number],
    },
    type: {
      required: false,
      type: [String],
      default: 'date'
    },
    addClass: {
      required: false,
      type: [String, Array, Object],
      default: null
    },
    overrideClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    addClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    columns: {
      required: false,
      type: [Object, String],
      default: null
    },
    overrideComponents: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    conditions: {
      required: false,
      type: [Array],
      default: []
    },
    formatData: {
      required: false,
      type: [Function],
      default: null
    },
    formatLoad: {
      required: false,
      type: [Function],
      default: null
    },
    submit: {
      required: false,
      type: [Boolean],
      default: true
    },
    debounce: {
      required: false,
      type: [Number],
      default: 0
    },
    default: {
      required: false,
      type: [String, Date],
      default: null
    },
    description: {
      required: false,
      type: [String],
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
    info: {
      required: false,
      type: [String],
      default: null
    },
    label: {
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
      type: [String],
      default: 'YY-MM-DD'
    },
    loadFormat: {
      required: false,
      type: [String],
      default: 'YY-MM-DD'
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
      default: []
    },
    options: {
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
    before: {
      required: false,
      type: [Object],
      default: null
    },
    between: {
      required: false,
      type: [Object],
      default: null
    },
    after: {
      required: false,
      type: [Object],
      default: null
    },
    slots: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    rules: {
      required: false,
      type: [Array, String, Object],
      default: null
    },
    messages: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    displayError: {
      required: false,
      type: [Boolean],
      default: true
    },
  },
},
dates: {
  emits: ['change'],
  slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after'],
  props: {
    name: {
      required: true,
      type: [String, Number],
    },
    type: {
      required: false,
      type: [String],
      default: 'dates'
    },
    addClass: {
      required: false,
      type: [String, Array, Object],
      default: null
    },
    overrideClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    addClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    columns: {
      required: false,
      type: [Object, String],
      default: null
    },
    overrideComponents: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    conditions: {
      required: false,
      type: [Array],
      default: []
    },
    formatData: {
      required: false,
      type: [Function],
      default: null
    },
    formatLoad: {
      required: false,
      type: [Function],
      default: null
    },
    submit: {
      required: false,
      type: [Boolean],
      default: true
    },
    debounce: {
      required: false,
      type: [Number],
      default: 0
    },
    default: {
      required: false,
      type: [Array],
      default: []
    },
    description: {
      required: false,
      type: [String],
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
    info: {
      required: false,
      type: [String],
      default: null
    },
    label: {
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
      type: [String],
      default: 'YY-MM-DD'
    },
    loadFormat: {
      required: false,
      type: [String],
      default: 'YY-MM-DD'
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
      default: []
    },
    options: {
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
    before: {
      required: false,
      type: [Object],
      default: null
    },
    between: {
      required: false,
      type: [Object],
      default: null
    },
    after: {
      required: false,
      type: [Object],
      default: null
    },
    slots: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    rules: {
      required: false,
      type: [Array, String, Object],
      default: null
    },
    messages: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    displayError: {
      required: false,
      type: [Boolean],
      default: true
    },
  },
},
datetime: {
  emits: ['change'],
  slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after'],
  props: {
    name: {
      required: true,
      type: [String, Number],
    },
    type: {
      required: false,
      type: [String],
      default: 'datetime'
    },
    addClass: {
      required: false,
      type: [String, Array, Object],
      default: null
    },
    overrideClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    addClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    columns: {
      required: false,
      type: [Object, String],
      default: null
    },
    overrideComponents: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    conditions: {
      required: false,
      type: [Array],
      default: []
    },
    formatData: {
      required: false,
      type: [Function],
      default: null
    },
    formatLoad: {
      required: false,
      type: [Function],
      default: null
    },
    submit: {
      required: false,
      type: [Boolean],
      default: true
    },
    debounce: {
      required: false,
      type: [Number],
      default: 0
    },
    default: {
      required: false,
      type: [String, Date],
      default: null
    },
    description: {
      required: false,
      type: [String],
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
    info: {
      required: false,
      type: [String],
      default: null
    },
    label: {
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
      type: [String],
      default: 'YY-MM-DD HH:mm:ss'
    },
    loadFormat: {
      required: false,
      type: [String],
      default: 'YY-MM-DD HH:mm:ss'
    },
    seconds: {
      required: false,
      type: [Boolean],
      default: true
    },
    hour24: {
      required: false,
      type: [Boolean],
      default: true
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
      default: []
    },
    options: {
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
    before: {
      required: false,
      type: [Object],
      default: null
    },
    between: {
      required: false,
      type: [Object],
      default: null
    },
    after: {
      required: false,
      type: [Object],
      default: null
    },
    slots: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    rules: {
      required: false,
      type: [Array, String, Object],
      default: null
    },
    messages: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    displayError: {
      required: false,
      type: [Boolean],
      default: true
    },
  },
},
file: {
  emits: ['change', 'remove', 'error'],
  slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after', 'progress', 'preview'],
  props: {
    name: {
      required: true,
      type: [String, Number],
    },
    type: {
      required: false,
      type: [String],
      default: 'file'
    },
    addClass: {
      required: false,
      type: [String, Array, Object],
      default: null
    },
    overrideClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    addClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    columns: {
      required: false,
      type: [Object, String],
      default: null
    },
    overrideComponents: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    conditions: {
      required: false,
      type: [Array],
      default: []
    },
    formatData: {
      required: false,
      type: [Function],
      default: null
    },
    formatLoad: {
      required: false,
      type: [Function],
      default: null
    },
    submit: {
      required: false,
      type: [Boolean],
      default: true
    },
    debounce: {
      required: false,
      type: [Number],
      default: 0
    },
    default: {
      required: false,
      type: [String, File],
      default: null
    },
    description: {
      required: false,
      type: [String],
      default: null
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
    clickable: {
      required: false,
      type: [Boolean],
      default: true
    },
    auto: {
      required: false,
      type: [Boolean],
      default: true
    },
    methods: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    endpoints: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    url: {
      required: false,
      type: [String],
      default: null
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    info: {
      required: false,
      type: [String],
      default: null
    },
    label: {
      required: false,
      type: [String],
      default: null
    },
    before: {
      required: false,
      type: [Object],
      default: null
    },
    between: {
      required: false,
      type: [Object],
      default: null
    },
    after: {
      required: false,
      type: [Object],
      default: null
    },
    slots: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    rules: {
      required: false,
      type: [Array, String, Object],
      default: null
    },
    messages: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    displayError: {
      required: false,
      type: [Boolean],
      default: true
    },
  },
},
gallery: {
  emits: ['change', 'add', 'remove', 'sort'],
  slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after'],
  props: {
    name: {
      required: true,
      type: [String, Number],
    },
    type: {
      required: false,
      type: [String],
      default: 'gallery'
    },
    addClass: {
      required: false,
      type: [String, Array, Object],
      default: null
    },
    overrideClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    addClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    columns: {
      required: false,
      type: [Object, String],
      default: null
    },
    overrideComponents: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    conditions: {
      required: false,
      type: [Array],
      default: []
    },
    formatData: {
      required: false,
      type: [Function],
      default: null
    },
    formatLoad: {
      required: false,
      type: [Function],
      default: null
    },
    submit: {
      required: false,
      type: [Boolean],
      default: true
    },
    debounce: {
      required: false,
      type: [Number],
      default: 0
    },
    default: {
      required: false,
      type: [Array],
      default: []
    },
    description: {
      required: false,
      type: [String],
      default: null
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
    info: {
      required: false,
      type: [String],
      default: null
    },
    label: {
      required: false,
      type: [String],
      default: null
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
    object: {
      required: false,
      type: [Boolean],
      default: null
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
    before: {
      required: false,
      type: [Object],
      default: null
    },
    between: {
      required: false,
      type: [Object],
      default: null
    },
    after: {
      required: false,
      type: [Object],
      default: null
    },
    slots: {
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
    rules: {
      required: false,
      type: [Array, String, Object],
      default: null
    },
    messages: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    displayError: {
      required: false,
      type: [Boolean],
      default: true
    },
  },
},
group: {
  emits: [],
  slots: ['label', 'info', 'description', 'message', 'before', 'between', 'after'],
  props: {
    name: {
      required: true,
      type: [String, Number],
    },
    type: {
      required: false,
      type: [String],
      default: 'group'
    },
    addClass: {
      required: false,
      type: [String, Array, Object],
      default: null
    },
    overrideClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    addClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    columns: {
      required: false,
      type: [Object, String],
      default: null
    },
    overrideComponents: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    conditions: {
      required: false,
      type: [Array],
      default: []
    },
    formatData: {
      required: false,
      type: [Function],
      default: null
    },
    formatLoad: {
      required: false,
      type: [Function],
      default: null
    },
    submit: {
      required: false,
      type: [Boolean],
      default: true
    },
    description: {
      required: false,
      type: [String],
      default: null
    },
    info: {
      required: false,
      type: [String],
      default: null
    },
    label: {
      required: false,
      type: [String],
      default: null
    },
    before: {
      required: false,
      type: [Object],
      default: null
    },
    between: {
      required: false,
      type: [Object],
      default: null
    },
    after: {
      required: false,
      type: [Object],
      default: null
    },
    slots: {
      required: false,
      type: [Object],
      default: () => ({})
    },
  },
},
hidden: {
  emits: ['change'],
  slots: [],
  props: {
    name: {
      required: true,
      type: [String, Number],
    },
    type: {
      required: false,
      type: [String],
      default: 'hidden'
    },
    conditions: {
      required: false,
      type: [Array],
      default: []
    },
    formatData: {
      required: false,
      type: [Function],
      default: null
    },
    formatLoad: {
      required: false,
      type: [Function],
      default: null
    },
    submit: {
      required: false,
      type: [Boolean],
      default: true
    },
    debounce: {
      required: false,
      type: [Number],
      default: 0
    },
    default: {
      required: false,
      type: [String, Number],
      default: null
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    rules: {
      required: false,
      type: [Array, String, Object],
      default: null
    },
    messages: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    displayError: {
      required: false,
      type: [Boolean],
      default: true
    },
  },
},
image: {
  emits: ['change', 'remove', 'error'],
  slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after', 'progress', 'preview'],
  props: {
    name: {
      required: true,
      type: [String, Number],
    },
    type: {
      required: false,
      type: [String],
      default: 'image'
    },
    addClass: {
      required: false,
      type: [String, Array, Object],
      default: null
    },
    overrideClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    addClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    columns: {
      required: false,
      type: [Object, String],
      default: null
    },
    overrideComponents: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    conditions: {
      required: false,
      type: [Array],
      default: []
    },
    formatData: {
      required: false,
      type: [Function],
      default: null
    },
    formatLoad: {
      required: false,
      type: [Function],
      default: null
    },
    submit: {
      required: false,
      type: [Boolean],
      default: true
    },
    debounce: {
      required: false,
      type: [Number],
      default: 0
    },
    default: {
      required: false,
      type: [String, File],
      default: null
    },
    description: {
      required: false,
      type: [String],
      default: null
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
    id: {
      required: false,
      type: [String],
      default: null
    },
    accept: {
      required: false,
      type: [String, Array],
      default: null
    },
    auto: {
      required: false,
      type: [Boolean],
      default: true
    },
    methods: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    endpoints: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    url: {
      required: false,
      type: [String],
      default: null
    },
    info: {
      required: false,
      type: [String],
      default: null
    },
    label: {
      required: false,
      type: [String],
      default: null
    },
    before: {
      required: false,
      type: [Object],
      default: null
    },
    between: {
      required: false,
      type: [Object],
      default: null
    },
    after: {
      required: false,
      type: [Object],
      default: null
    },
    slots: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    rules: {
      required: false,
      type: [Array, String, Object],
      default: null
    },
    messages: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    displayError: {
      required: false,
      type: [Boolean],
      default: true
    },
  },
},
key: {
  emits: ['change'],
  slots: [],
  props: {
    name: {
      required: true,
      type: [String, Number],
    },
    type: {
      required: false,
      type: [String],
      default: 'key'
    },
    conditions: {
      required: false,
      type: [Array],
      default: []
    },
    formatData: {
      required: false,
      type: [Function],
      default: null
    },
    formatLoad: {
      required: false,
      type: [Function],
      default: null
    },
    submit: {
      required: false,
      type: [Boolean],
      default: true
    },
    debounce: {
      required: false,
      type: [Number],
      default: 0
    },
    default: {
      required: false,
      type: [String, Number],
      default: null
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    rules: {
      required: false,
      type: [Array, String, Object],
      default: null
    },
    messages: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    displayError: {
      required: false,
      type: [Boolean],
      default: true
    },
  },
},
list: {
  emits: ['change', 'add', 'remove', 'sort'],
  slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after'],
  props: {
    name: {
      required: true,
      type: [String, Number],
    },
    type: {
      required: false,
      type: [String],
      default: 'list'
    },
    addClass: {
      required: false,
      type: [String, Array, Object],
      default: null
    },
    overrideClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    addClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    columns: {
      required: false,
      type: [Object, String],
      default: null
    },
    overrideComponents: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    conditions: {
      required: false,
      type: [Array],
      default: []
    },
    initial: {
      required: false,
      type: [Number],
      default: 1
    },
    formatData: {
      required: false,
      type: [Function],
      default: null
    },
    formatLoad: {
      required: false,
      type: [Function],
      default: null
    },
    submit: {
      required: false,
      type: [Boolean],
      default: true
    },
    debounce: {
      required: false,
      type: [Number],
      default: 0
    },
    default: {
      required: false,
      type: [Array],
      default: []
    },
    description: {
      required: false,
      type: [String],
      default: null
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    info: {
      required: false,
      type: [String],
      default: null
    },
    label: {
      required: false,
      type: [String],
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
    before: {
      required: false,
      type: [Object],
      default: null
    },
    between: {
      required: false,
      type: [Object],
      default: null
    },
    after: {
      required: false,
      type: [Object],
      default: null
    },
    slots: {
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
    rules: {
      required: false,
      type: [Array, String, Object],
      default: null
    },
    messages: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    displayError: {
      required: false,
      type: [Boolean],
      default: true
    },
  },
},
location: {
  emits: ['change'],
  slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after'],
  props: {
    name: {
      required: true,
      type: [String, Number],
    },
    addons: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    type: {
      required: false,
      type: [String],
      default: 'location'
    },
    addClass: {
      required: false,
      type: [String, Array, Object],
      default: null
    },
    overrideClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    addClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    columns: {
      required: false,
      type: [Object, String],
      default: null
    },
    overrideComponents: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    conditions: {
      required: false,
      type: [Array],
      default: []
    },
    formatData: {
      required: false,
      type: [Function],
      default: null
    },
    formatLoad: {
      required: false,
      type: [Function],
      default: null
    },
    submit: {
      required: false,
      type: [Boolean],
      default: true
    },
    debounce: {
      required: false,
      type: [Number],
      default: 0
    },
    default: {
      required: false,
      type: [String, Number],
      default: null
    },
    description: {
      required: false,
      type: [String],
      default: null
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    displayKey: {
      required: false,
      type: [String],
      default: 'formatted_address'
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
    info: {
      required: false,
      type: [String],
      default: null
    },
    label: {
      required: false,
      type: [String],
      default: null
    },
    provider: {
      required: false,
      type: [String],
      default: 'google'
    },
    options: {
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
    before: {
      required: false,
      type: [Object],
      default: null
    },
    between: {
      required: false,
      type: [Object],
      default: null
    },
    after: {
      required: false,
      type: [Object],
      default: null
    },
    slots: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    rules: {
      required: false,
      type: [Array, String, Object],
      default: null
    },
    messages: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    displayError: {
      required: false,
      type: [Boolean],
      default: true
    },
  },
},
meta: {
  emits: ['change'],
  slots: [],
  props: {
    name: {
      required: true,
      type: [String, Number],
    },
    type: {
      required: false,
      type: [String],
      default: 'meta'
    },
    conditions: {
      required: false,
      type: [Array],
      default: []
    },
    formatData: {
      required: false,
      type: [Function],
      default: null
    },
    formatLoad: {
      required: false,
      type: [Function],
      default: null
    },
    submit: {
      required: false,
      type: [Boolean],
      default: true
    },
    debounce: {
      required: false,
      type: [Number],
      default: 0
    },
    default: {
      required: false,
      type: [String, Number],
      default: null
    },
    rules: {
      required: false,
      type: [Array, String, Object],
      default: null
    },
    messages: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    displayError: {
      required: false,
      type: [Boolean],
      default: true
    },
  },
},
multifile: {
  emits: ['change', 'add', 'remove', 'sort'],
  slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after'],
  props: {
    name: {
      required: true,
      type: [String, Number],
    },
    type: {
      required: false,
      type: [String],
      default: 'multifile'
    },
    addClass: {
      required: false,
      type: [String, Array, Object],
      default: null
    },
    overrideClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    addClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    columns: {
      required: false,
      type: [Object, String],
      default: null
    },
    overrideComponents: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    conditions: {
      required: false,
      type: [Array],
      default: []
    },
    formatData: {
      required: false,
      type: [Function],
      default: null
    },
    formatLoad: {
      required: false,
      type: [Function],
      default: null
    },
    submit: {
      required: false,
      type: [Boolean],
      default: true
    },
    debounce: {
      required: false,
      type: [Number],
      default: 0
    },
    default: {
      required: false,
      type: [Array],
      default: []
    },
    description: {
      required: false,
      type: [String],
      default: null
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
    info: {
      required: false,
      type: [String],
      default: null
    },
    label: {
      required: false,
      type: [String],
      default: null
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
    before: {
      required: false,
      type: [Object],
      default: null
    },
    between: {
      required: false,
      type: [Object],
      default: null
    },
    after: {
      required: false,
      type: [Object],
      default: null
    },
    slots: {
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
    rules: {
      required: false,
      type: [Array, String, Object],
      default: null
    },
    messages: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    displayError: {
      required: false,
      type: [Boolean],
      default: true
    },
  },
},
multiselect: {
  emits: ['change', 'select', 'deselect', 'searchChange', 'open', 'close'],
  slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after', 'beforelist', 'afterlist', 'multiplelabel', 'noresults', 'nooptions', 'option'],
  props: {
    name: {
      required: true,
      type: [String, Number],
    },
    type: {
      required: false,
      type: [String],
      default: 'multiselect'
    },
    addClass: {
      required: false,
      type: [String, Array, Object],
      default: null
    },
    overrideClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    addClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    columns: {
      required: false,
      type: [Object, String],
      default: null
    },
    overrideComponents: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    conditions: {
      required: false,
      type: [Array],
      default: []
    },
    formatData: {
      required: false,
      type: [Function],
      default: null
    },
    formatLoad: {
      required: false,
      type: [Function],
      default: null
    },
    submit: {
      required: false,
      type: [Boolean],
      default: true
    },
    debounce: {
      required: false,
      type: [Number],
      default: 0
    },
    default: {
      required: false,
      type: [Array],
      default: []
    },
    description: {
      required: false,
      type: [String],
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
    info: {
      required: false,
      type: [String],
      default: null
    },
    items: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    label: {
      required: false,
      type: [String],
      default: null
    },
    search: {
      required: false,
      type: [Boolean],
      default: false
    },
    options: {
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
    before: {
      required: false,
      type: [Object],
      default: null
    },
    between: {
      required: false,
      type: [Object],
      default: null
    },
    after: {
      required: false,
      type: [Object],
      default: null
    },
    slots: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    rules: {
      required: false,
      type: [Array, String, Object],
      default: null
    },
    messages: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    displayError: {
      required: false,
      type: [Boolean],
      default: true
    },
  },
},
object: {
  emits: [],
  slots: ['label', 'info', 'description', 'message', 'before', 'between', 'after'],
  props: {
    name: {
      required: true,
      type: [String, Number],
    },
    type: {
      required: false,
      type: [String],
      default: 'object'
    },
    addClass: {
      required: false,
      type: [String, Array, Object],
      default: null
    },
    overrideClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    addClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    columns: {
      required: false,
      type: [Object, String],
      default: null
    },
    overrideComponents: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    conditions: {
      required: false,
      type: [Array],
      default: []
    },
    formatData: {
      required: false,
      type: [Function],
      default: null
    },
    formatLoad: {
      required: false,
      type: [Function],
      default: null
    },
    submit: {
      required: false,
      type: [Boolean],
      default: true
    },
    description: {
      required: false,
      type: [String],
      default: null
    },
    info: {
      required: false,
      type: [String],
      default: null
    },
    label: {
      required: false,
      type: [String],
      default: null
    },
    before: {
      required: false,
      type: [Object],
      default: null
    },
    between: {
      required: false,
      type: [Object],
      default: null
    },
    after: {
      required: false,
      type: [Object],
      default: null
    },
    slots: {
      required: false,
      type: [Object],
      default: () => ({})
    },
  },
},
password: {
  emits: ['change'],
  slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after'],
  props: {
    name: {
      required: true,
      type: [String, Number],
    },
    addons: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    autocomplete: {
      required: false,
      type: [String, Number],
      default: null
    },
    type: {
      required: false,
      type: [String],
      default: 'password'
    },
    addClass: {
      required: false,
      type: [String, Array, Object],
      default: null
    },
    overrideClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    addClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    columns: {
      required: false,
      type: [Object, String],
      default: null
    },
    overrideComponents: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    conditions: {
      required: false,
      type: [Array],
      default: []
    },
    formatData: {
      required: false,
      type: [Function],
      default: null
    },
    formatLoad: {
      required: false,
      type: [Function],
      default: null
    },
    submit: {
      required: false,
      type: [Boolean],
      default: true
    },
    debounce: {
      required: false,
      type: [Number],
      default: 0
    },
    default: {
      required: false,
      type: [String, Number],
      default: null
    },
    description: {
      required: false,
      type: [String],
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
    info: {
      required: false,
      type: [String],
      default: null
    },
    label: {
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
    before: {
      required: false,
      type: [Object],
      default: null
    },
    between: {
      required: false,
      type: [Object],
      default: null
    },
    after: {
      required: false,
      type: [Object],
      default: null
    },
    slots: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    rules: {
      required: false,
      type: [Array, String, Object],
      default: null
    },
    messages: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    displayError: {
      required: false,
      type: [Boolean],
      default: true
    },
  },
},
radio: {
  emits: ['change'],
  slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after'],
  props: {
    name: {
      required: true,
      type: [String, Number],
    },
    type: {
      required: false,
      type: [String],
      default: 'radio'
    },
    addClass: {
      required: false,
      type: [String, Array, Object],
      default: null
    },
    overrideClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    addClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    columns: {
      required: false,
      type: [Object, String],
      default: null
    },
    overrideComponents: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    conditions: {
      required: false,
      type: [Array],
      default: []
    },
    formatData: {
      required: false,
      type: [Function],
      default: null
    },
    formatLoad: {
      required: false,
      type: [Function],
      default: null
    },
    submit: {
      required: false,
      type: [Boolean],
      default: true
    },
    debounce: {
      required: false,
      type: [Number],
      default: 0
    },
    default: {
      required: false,
      type: [String, Number],
      default: null
    },
    description: {
      required: false,
      type: [String],
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
    info: {
      required: false,
      type: [String],
      default: null
    },
    label: {
      required: false,
      type: [String],
      default: null
    },
    fieldName: {
      required: false,
      type: [String],
      default: null
    },
    radioValue: {
      required: false,
      type: [Boolean, String, Number],
      default: null
    },
    before: {
      required: false,
      type: [Object],
      default: null
    },
    between: {
      required: false,
      type: [Object],
      default: null
    },
    after: {
      required: false,
      type: [Object],
      default: null
    },
    slots: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    text: {
      required: false,
      type: [String],
      default: null
    },
    rules: {
      required: false,
      type: [Array, String, Object],
      default: null
    },
    messages: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    displayError: {
      required: false,
      type: [Boolean],
      default: true
    },
  },
},
radiogroup: {
  emits: ['change'],
  slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after', 'radio'],
  props: {
    name: {
      required: true,
      type: [String, Number],
    },
    type: {
      required: false,
      type: [String],
      default: 'radiogroup'
    },
    addClass: {
      required: false,
      type: [String, Array, Object],
      default: null
    },
    overrideClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    addClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    columns: {
      required: false,
      type: [Object, String],
      default: null
    },
    overrideComponents: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    conditions: {
      required: false,
      type: [Array],
      default: []
    },
    formatData: {
      required: false,
      type: [Function],
      default: null
    },
    formatLoad: {
      required: false,
      type: [Function],
      default: null
    },
    submit: {
      required: false,
      type: [Boolean],
      default: true
    },
    debounce: {
      required: false,
      type: [Number],
      default: 0
    },
    default: {
      required: false,
      type: [String, Number],
      default: null
    },
    description: {
      required: false,
      type: [String],
      default: null
    },
    disables: {
      required: false,
      type: [Array],
      default: []
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
    info: {
      required: false,
      type: [String],
      default: null
    },
    items: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    label: {
      required: false,
      type: [String],
      default: null
    },
    before: {
      required: false,
      type: [Object],
      default: null
    },
    between: {
      required: false,
      type: [Object],
      default: null
    },
    after: {
      required: false,
      type: [Object],
      default: null
    },
    slots: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    rules: {
      required: false,
      type: [Array, String, Object],
      default: null
    },
    messages: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    displayError: {
      required: false,
      type: [Boolean],
      default: true
    },
  },
},
select: {
  emits: ['change', 'select', 'deselect', 'searchChange', 'open', 'close'],
  slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after', 'beforelist', 'afterlist', 'singlelabel', 'noresults', 'nooptions', 'option'],
  props: {
    name: {
      required: true,
      type: [String, Number],
    },
    type: {
      required: false,
      type: [String],
      default: 'select'
    },
    addClass: {
      required: false,
      type: [String, Array, Object],
      default: null
    },
    overrideClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    addClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    columns: {
      required: false,
      type: [Object, String],
      default: null
    },
    overrideComponents: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    conditions: {
      required: false,
      type: [Array],
      default: []
    },
    formatData: {
      required: false,
      type: [Function],
      default: null
    },
    formatLoad: {
      required: false,
      type: [Function],
      default: null
    },
    submit: {
      required: false,
      type: [Boolean],
      default: true
    },
    debounce: {
      required: false,
      type: [Number],
      default: 0
    },
    default: {
      required: false,
      type: [String, Number],
      default: null
    },
    description: {
      required: false,
      type: [String],
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
    info: {
      required: false,
      type: [String],
      default: null
    },
    items: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    label: {
      required: false,
      type: [String],
      default: null
    },
    native: {
      required: false,
      type: [Boolean],
      default: true
    },
    search: {
      required: false,
      type: [Boolean],
      default: false
    },
    options: {
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
    before: {
      required: false,
      type: [Object],
      default: null
    },
    between: {
      required: false,
      type: [Object],
      default: null
    },
    after: {
      required: false,
      type: [Object],
      default: null
    },
    slots: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    rules: {
      required: false,
      type: [Array, String, Object],
      default: null
    },
    messages: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    displayError: {
      required: false,
      type: [Boolean],
      default: true
    },
  },
},
slider: {
  emits: ['change'],
  slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after'],
  props: {
    name: {
      required: true,
      type: [String, Number],
    },
    type: {
      required: false,
      type: [String],
      default: 'slider'
    },
    addClass: {
      required: false,
      type: [String, Array, Object],
      default: null
    },
    overrideClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    addClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    columns: {
      required: false,
      type: [Object, String],
      default: null
    },
    overrideComponents: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    conditions: {
      required: false,
      type: [Array],
      default: []
    },
    formatData: {
      required: false,
      type: [Function],
      default: null
    },
    formatLoad: {
      required: false,
      type: [Function],
      default: null
    },
    submit: {
      required: false,
      type: [Boolean],
      default: true
    },
    debounce: {
      required: false,
      type: [Number],
      default: 0
    },
    default: {
      required: false,
      type: [Number, Array],
      default: 30
    },
    description: {
      required: false,
      type: [String],
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
    info: {
      required: false,
      type: [String],
      default: null
    },
    label: {
      required: false,
      type: [String],
      default: null
    },
    min: {
      required: false,
      type: [Number],
      default: 0
    },
    max: {
      required: false,
      type: [Number],
      default: 100
    },
    step: {
      required: false,
      type: [Number],
      default: 1
    },
    tooltips: {
      required: false,
      type: [Boolean],
      default: true
    },
    merge: {
      required: false,
      type: [Number],
      default: -1
    },
    format: {
      required: false,
      type: [Object, Function],
      default: null
    },
    orientation: {
      required: false,
      type: [String],
      default: 'horizontal'
    },
    direction: {
      required: false,
      type: [String],
      default: 'ltr'
    },
    height: {
      required: false,
      type: [String],
      default: '300px'
    },
    options: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    readonly: {
      required: false,
      type: [Boolean],
      default: false
    },
    before: {
      required: false,
      type: [Object],
      default: null
    },
    between: {
      required: false,
      type: [Object],
      default: null
    },
    after: {
      required: false,
      type: [Object],
      default: null
    },
    slots: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    rules: {
      required: false,
      type: [Array, String, Object],
      default: null
    },
    messages: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    displayError: {
      required: false,
      type: [Boolean],
      default: true
    },
  },
},
static: {
  emits: [],
  slots: ['label', 'info', 'description', 'before', 'between', 'after'],
  props: {
    name: {
      required: true,
      type: [String, Number],
    },
    type: {
      required: false,
      type: [String],
      default: 'static'
    },
    addClass: {
      required: false,
      type: [String, Array, Object],
      default: null
    },
    overrideClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    addClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    columns: {
      required: false,
      type: [Object, String],
      default: null
    },
    overrideComponents: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    conditions: {
      required: false,
      type: [Array],
      default: []
    },
    description: {
      required: false,
      type: [String],
      default: null
    },
    info: {
      required: false,
      type: [String],
      default: null
    },
    label: {
      required: false,
      type: [String],
      default: null
    },
    before: {
      required: false,
      type: [Object],
      default: null
    },
    between: {
      required: false,
      type: [Object],
      default: null
    },
    after: {
      required: false,
      type: [Object],
      default: null
    },
    slots: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    wrap: {
      required: false,
      type: [Boolean],
      default: true
    },
  },
},
tags: {
  emits: ['change', 'select', 'deselect', 'searchChange', 'open', 'close', 'tag'],
  slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after', 'beforelist', 'afterlist', 'noresults', 'nooptions', 'option', 'tag'],
  props: {
    name: {
      required: true,
      type: [String, Number],
    },
    type: {
      required: false,
      type: [String],
      default: 'tags'
    },
    addClass: {
      required: false,
      type: [String, Array, Object],
      default: null
    },
    overrideClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    addClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    columns: {
      required: false,
      type: [Object, String],
      default: null
    },
    overrideComponents: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    conditions: {
      required: false,
      type: [Array],
      default: []
    },
    formatData: {
      required: false,
      type: [Function],
      default: null
    },
    formatLoad: {
      required: false,
      type: [Function],
      default: null
    },
    submit: {
      required: false,
      type: [Boolean],
      default: true
    },
    debounce: {
      required: false,
      type: [Number],
      default: 0
    },
    default: {
      required: false,
      type: [Array],
      default: []
    },
    description: {
      required: false,
      type: [String],
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
    info: {
      required: false,
      type: [String],
      default: null
    },
    items: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    label: {
      required: false,
      type: [String],
      default: null
    },
    search: {
      required: false,
      type: [Boolean],
      default: false
    },
    create: {
      required: false,
      type: [Boolean],
      default: false
    },
    options: {
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
    before: {
      required: false,
      type: [Object],
      default: null
    },
    between: {
      required: false,
      type: [Object],
      default: null
    },
    after: {
      required: false,
      type: [Object],
      default: null
    },
    slots: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    rules: {
      required: false,
      type: [Array, String, Object],
      default: null
    },
    messages: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    displayError: {
      required: false,
      type: [Boolean],
      default: true
    },
  },
},
textarea: {
  emits: ['change'],
  slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after'],
  props: {
    name: {
      required: true,
      type: [String, Number],
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
    type: {
      required: false,
      type: [String],
      default: 'textarea'
    },
    addClass: {
      required: false,
      type: [String, Array, Object],
      default: null
    },
    overrideClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    addClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    columns: {
      required: false,
      type: [Object, String],
      default: null
    },
    overrideComponents: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    conditions: {
      required: false,
      type: [Array],
      default: []
    },
    formatData: {
      required: false,
      type: [Function],
      default: null
    },
    formatLoad: {
      required: false,
      type: [Function],
      default: null
    },
    submit: {
      required: false,
      type: [Boolean],
      default: true
    },
    debounce: {
      required: false,
      type: [Number],
      default: 0
    },
    default: {
      required: false,
      type: [String, Number],
      default: null
    },
    description: {
      required: false,
      type: [String],
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
    info: {
      required: false,
      type: [String],
      default: null
    },
    label: {
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
    before: {
      required: false,
      type: [Object],
      default: null
    },
    between: {
      required: false,
      type: [Object],
      default: null
    },
    after: {
      required: false,
      type: [Object],
      default: null
    },
    slots: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    rules: {
      required: false,
      type: [Array, String, Object],
      default: null
    },
    messages: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    displayError: {
      required: false,
      type: [Boolean],
      default: true
    },
  },
},
text: {
  emits: ['change'],
  slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after'],
  props: {
    name: {
      required: true,
      type: [String, Number],
    },
    addons: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    autocomplete: {
      required: false,
      type: [String, Number],
      default: null
    },
    type: {
      required: false,
      type: [String],
      default: 'text'
    },
    addClass: {
      required: false,
      type: [String, Array, Object],
      default: null
    },
    overrideClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    addClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    columns: {
      required: false,
      type: [Object, String],
      default: null
    },
    overrideComponents: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    conditions: {
      required: false,
      type: [Array],
      default: []
    },
    formatData: {
      required: false,
      type: [Function],
      default: null
    },
    formatLoad: {
      required: false,
      type: [Function],
      default: null
    },
    submit: {
      required: false,
      type: [Boolean],
      default: true
    },
    debounce: {
      required: false,
      type: [Number],
      default: 0
    },
    default: {
      required: false,
      type: [String, Number],
      default: null
    },
    description: {
      required: false,
      type: [String],
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
    info: {
      required: false,
      type: [String],
      default: null
    },
    inputType: {
      required: false,
      type: [String],
      default: 'text'
    },
    label: {
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
    before: {
      required: false,
      type: [Object],
      default: null
    },
    between: {
      required: false,
      type: [Object],
      default: null
    },
    after: {
      required: false,
      type: [Object],
      default: null
    },
    slots: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    rules: {
      required: false,
      type: [Array, String, Object],
      default: null
    },
    messages: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    displayError: {
      required: false,
      type: [Boolean],
      default: true
    },
  },
},
time: {
  emits: ['change'],
  slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after'],
  props: {
    name: {
      required: true,
      type: [String, Number],
    },
    type: {
      required: false,
      type: [String],
      default: 'time'
    },
    addClass: {
      required: false,
      type: [String, Array, Object],
      default: null
    },
    overrideClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    addClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    columns: {
      required: false,
      type: [Object, String],
      default: null
    },
    overrideComponents: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    conditions: {
      required: false,
      type: [Array],
      default: []
    },
    formatData: {
      required: false,
      type: [Function],
      default: null
    },
    formatLoad: {
      required: false,
      type: [Function],
      default: null
    },
    submit: {
      required: false,
      type: [Boolean],
      default: true
    },
    debounce: {
      required: false,
      type: [Number],
      default: 0
    },
    default: {
      required: false,
      type: [String, Date],
      default: null
    },
    description: {
      required: false,
      type: [String],
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
    info: {
      required: false,
      type: [String],
      default: null
    },
    label: {
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
      type: [String],
      default: 'HH:mm'
    },
    loadFormat: {
      required: false,
      type: [String],
      default: 'HH:mm'
    },
    seconds: {
      required: false,
      type: [Boolean],
      default: false
    },
    hour24: {
      required: false,
      type: [Boolean],
      default: true
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
      default: []
    },
    options: {
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
    before: {
      required: false,
      type: [Object],
      default: null
    },
    between: {
      required: false,
      type: [Object],
      default: null
    },
    after: {
      required: false,
      type: [Object],
      default: null
    },
    slots: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    rules: {
      required: false,
      type: [Array, String, Object],
      default: null
    },
    messages: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    displayError: {
      required: false,
      type: [Boolean],
      default: true
    },
  },
},
toggle: {
  emits: ['change'],
  slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after'],
  props: {
    name: {
      required: true,
      type: [String, Number],
    },
    type: {
      required: false,
      type: [String],
      default: 'toggle'
    },
    trueValue: {
      required: false,
      type: [Boolean, String, Number],
      default: 1
    },
    falseValue: {
      required: false,
      type: [Boolean, String, Number],
      default: 0
    },
    addClass: {
      required: false,
      type: [String, Array, Object],
      default: null
    },
    overrideClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    addClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    columns: {
      required: false,
      type: [Object, String],
      default: null
    },
    overrideComponents: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    conditions: {
      required: false,
      type: [Array],
      default: []
    },
    formatData: {
      required: false,
      type: [Function],
      default: null
    },
    formatLoad: {
      required: false,
      type: [Function],
      default: null
    },
    submit: {
      required: false,
      type: [Boolean],
      default: true
    },
    debounce: {
      required: false,
      type: [Number],
      default: 0
    },
    default: {
      required: false,
      type: [String, Number, Boolean],
      default: undefined // falseValue
    },
    description: {
      required: false,
      type: [String],
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
    info: {
      required: false,
      type: [String],
      default: null
    },
    label: {
      required: false,
      type: [String],
      default: null
    },
    labels: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    width: {
      required: false,
      type: [Number],
      default: 54
    },
    height: {
      required: false,
      type: [Number],
      default: 24
    },
    speed: {
      required: false,
      type: [Number],
      default: 300
    },
    colors: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    options: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    before: {
      required: false,
      type: [Object],
      default: null
    },
    between: {
      required: false,
      type: [Object],
      default: null
    },
    after: {
      required: false,
      type: [Object],
      default: null
    },
    slots: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    text: {
      required: false,
      type: [String],
      default: null
    },
    rules: {
      required: false,
      type: [Array, String, Object],
      default: null
    },
    messages: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    displayError: {
      required: false,
      type: [Boolean],
      default: true
    },
  },
},
editor: {
  emits: ['change', 'error'],
  slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after'],
  props: {
    name: {
      required: true,
      type: [String, Number],
    },
    type: {
      required: false,
      type: [String],
      default: 'editor'
    },
    addClass: {
      required: false,
      type: [String, Array, Object],
      default: null
    },
    overrideClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    addClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    columns: {
      required: false,
      type: [Object, String],
      default: null
    },
    overrideComponents: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    conditions: {
      required: false,
      type: [Array],
      default: []
    },
    formatData: {
      required: false,
      type: [Function],
      default: null
    },
    formatLoad: {
      required: false,
      type: [Function],
      default: null
    },
    submit: {
      required: false,
      type: [Boolean],
      default: true
    },
    debounce: {
      required: false,
      type: [Number],
      default: 0
    },
    default: {
      required: false,
      type: [String, Number],
      default: null
    },
    description: {
      required: false,
      type: [String],
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
    info: {
      required: false,
      type: [String],
      default: null
    },
    label: {
      required: false,
      type: [String],
      default: null
    },
    placeholder: {
      required: false,
      type: [String],
      default: null
    },
    before: {
      required: false,
      type: [Object],
      default: null
    },
    between: {
      required: false,
      type: [Object],
      default: null
    },
    after: {
      required: false,
      type: [Object],
      default: null
    },
    slots: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    accept: {
      required: false,
      type: [Array],
      default: null
    },
    acceptMimes: {
      required: false,
      type: [Array],
      default: null
    },
    endpoint: {
      required: false,
      type: [String],
      default: null
    },
    rules: {
      required: false,
      type: [Array, String, Object],
      default: null
    },
    messages: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    displayError: {
      required: false,
      type: [Boolean],
      default: true
    },
  },
},
tTextarea: {
  events: ['change'],
  slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after'],
  props: {
    name: {
      required: true,
      type: [String, Number],
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
    type: {
      required: false,
      type: [String],
      default: 't-textarea'
    },
    addClass: {
      required: false,
      type: [String, Array, Object],
      default: null
    },
    overrideClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    addClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    columns: {
      required: false,
      type: [Object, String],
      default: null
    },
    overrideComponents: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    conditions: {
      required: false,
      type: [Array],
      default: []
    },
    formatData: {
      required: false,
      type: [Function],
      default: null
    },
    formatLoad: {
      required: false,
      type: [Function],
      default: null
    },
    submit: {
      required: false,
      type: [Boolean],
      default: true
    },
    debounce: {
      required: false,
      type: [Number],
      default: 0
    },
    default: {
      required: false,
      type: [Object, String, Number],
      default: null
    },
    description: {
      required: false,
      type: [String],
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
    info: {
      required: false,
      type: [String],
      default: null
    },
    label: {
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
    before: {
      required: false,
      type: [Object],
      default: null
    },
    between: {
      required: false,
      type: [Object],
      default: null
    },
    after: {
      required: false,
      type: [Object],
      default: null
    },
    slots: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    messages: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    displayError: {
      required: false,
      type: [Boolean],
      default: true
    },
  },
},
tText: {
  events: ['change'],
  slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after'],
  props: {
    name: {
      required: true,
      type: [String, Number],
    },
    addons: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    autocomplete: {
      required: false,
      type: [String, Number],
      default: null
    },
    type: {
      required: false,
      type: [String],
      default: 't-text'
    },
    addClass: {
      required: false,
      type: [String, Array, Object],
      default: null
    },
    overrideClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    addClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    columns: {
      required: false,
      type: [Object, String],
      default: null
    },
    overrideComponents: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    conditions: {
      required: false,
      type: [Array],
      default: []
    },
    formatData: {
      required: false,
      type: [Function],
      default: null
    },
    formatLoad: {
      required: false,
      type: [Function],
      default: null
    },
    submit: {
      required: false,
      type: [Boolean],
      default: true
    },
    debounce: {
      required: false,
      type: [Number],
      default: 0
    },
    default: {
      required: false,
      type: [Object, String, Number],
      default: null
    },
    description: {
      required: false,
      type: [String],
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
    info: {
      required: false,
      type: [String],
      default: null
    },
    inputType: {
      required: false,
      type: [String],
      default: 'text'
    },
    label: {
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
    before: {
      required: false,
      type: [Object],
      default: null
    },
    between: {
      required: false,
      type: [Object],
      default: null
    },
    after: {
      required: false,
      type: [Object],
      default: null
    },
    slots: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    messages: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    displayError: {
      required: false,
      type: [Boolean],
      default: true
    },
  },
},
tEditor: {
  events: ['change', 'error'],
  slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after'],
  props: {
    name: {
      required: true,
      type: [String, Number],
    },
    type: {
      required: false,
      type: [String],
      default: 'tEditor'
    },
    addClass: {
      required: false,
      type: [String, Array, Object],
      default: null
    },
    overrideClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    addClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    columns: {
      required: false,
      type: [Object, String],
      default: null
    },
    overrideComponents: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    conditions: {
      required: false,
      type: [Array],
      default: []
    },
    formatData: {
      required: false,
      type: [Function],
      default: null
    },
    formatLoad: {
      required: false,
      type: [Function],
      default: null
    },
    submit: {
      required: false,
      type: [Boolean],
      default: true
    },
    debounce: {
      required: false,
      type: [Number],
      default: 0
    },
    default: {
      required: false,
      type: [Object, String, Number],
      default: null
    },
    description: {
      required: false,
      type: [String],
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
    info: {
      required: false,
      type: [String],
      default: null
    },
    label: {
      required: false,
      type: [String],
      default: null
    },
    placeholder: {
      required: false,
      type: [String],
      default: null
    },
    before: {
      required: false,
      type: [Object],
      default: null
    },
    between: {
      required: false,
      type: [Object],
      default: null
    },
    after: {
      required: false,
      type: [Object],
      default: null
    },
    slots: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    accept: {
      required: false,
      type: [Array],
      default: null
    },
    acceptMimes: {
      required: false,
      type: [Array],
      default: null
    },
    endpoint: {
      required: false,
      type: [String],
      default: null
    },
    messages: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    displayError: {
      required: false,
      type: [Boolean],
      default: true
    },
  },
},
}