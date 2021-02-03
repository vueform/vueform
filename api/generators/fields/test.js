import _ from 'lodash'
import fields from './../../../src/components/fields/fields'

const expected = {
  address: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      type: {
        required: false,
        type: [String],
        default: undefined
      },
      elements: {
        required: false,
        type: [Object],
        default: undefined
      },
      addClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      class: {
        required: false,
        type: [String],
        default: undefined
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columns: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
      conditions: {
        required: false,
        type: [Array],
        default: undefined
      },
      formatData: {
        required: false,
        type: [Function],
        default: undefined
      },
      formatLoad: {
        required: false,
        type: [Function],
        default: undefined
      },
      submit: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      description: {
        required: false,
        type: [String],
        default: undefined
      },
      disabled: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      info: {
        required: false,
        type: [String],
        default: undefined
      },
      label: {
        required: false,
        type: [String],
        default: undefined
      },
      provider: {
        required: false,
        type: [String],
        default: undefined
      },
      options: {
        required: false,
        type: [Object],
        default: undefined
      },
      readonly: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      required: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      before: {
        required: false,
        type: [Object],
        default: undefined
      },
      between: {
        required: false,
        type: [Object],
        default: undefined
      },
      after: {
        required: false,
        type: [Object],
        default: undefined
      },
      slots: {
        required: false,
        type: [Object],
        default: undefined
      },
    },
    slots: ['label', 'info', 'description', 'message', 'before', 'between', 'after'],
    events: [],
  },
  button: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      type: {
        required: false,
        type: [String],
        default: undefined
      },
      buttonLabel: {
        required: false,
        type: [String],
        default: undefined
      },
      buttonType: {
        required: false,
        type: [String],
        default: undefined
      },
      buttonClass: {
        required: false,
        type: [String, Array, Object],
        default: undefined
      },
      disabled: {
        required: false,
        type: [Function],
        default: undefined
      },
      loading: {
        required: false,
        type: [Function],
        default: undefined
      },
      href: {
        required: false,
        type: [String],
        default: undefined
      },
      target: {
        required: false,
        type: [String],
        default: undefined
      },
      align: {
        required: false,
        type: [String],
        default: undefined
      },
      onClick: {
        required: false,
        type: [Function],
        default: undefined
      },
      addClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      class: {
        required: false,
        type: [String],
        default: undefined
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columns: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
      conditions: {
        required: false,
        type: [Array],
        default: undefined
      },
      description: {
        required: false,
        type: [String],
        default: undefined
      },
      info: {
        required: false,
        type: [String],
        default: undefined
      },
      label: {
        required: false,
        type: [String],
        default: undefined
      },
      before: {
        required: false,
        type: [Object],
        default: undefined
      },
      between: {
        required: false,
        type: [Object],
        default: undefined
      },
      after: {
        required: false,
        type: [Object],
        default: undefined
      },
      slots: {
        required: false,
        type: [Object],
        default: undefined
      },
    },
    slots: ['label', 'info', 'description', 'before', 'between', 'after'],
    events: [],
  },
  buttons: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      type: {
        required: false,
        type: [String],
        default: undefined
      },
      buttons: {
        required: false,
        type: [Array],
        default: undefined
      },
      addClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      class: {
        required: false,
        type: [String],
        default: undefined
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columns: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
      conditions: {
        required: false,
        type: [Array],
        default: undefined
      },
      description: {
        required: false,
        type: [String],
        default: undefined
      },
      info: {
        required: false,
        type: [String],
        default: undefined
      },
      label: {
        required: false,
        type: [String],
        default: undefined
      },
      before: {
        required: false,
        type: [Object],
        default: undefined
      },
      between: {
        required: false,
        type: [Object],
        default: undefined
      },
      after: {
        required: false,
        type: [Object],
        default: undefined
      },
      slots: {
        required: false,
        type: [Object],
        default: undefined
      },
    },
    slots: ['label', 'info', 'description', 'before', 'between', 'after'],
    events: [],
  },
  checkbox: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      type: {
        required: false,
        type: [String],
        default: undefined
      },
      trueValue: {
        required: false,
        type: [, , ],
        default: undefined
      },
      falseValue: {
        required: false,
        type: [, , ],
        default: undefined
      },
      addClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      class: {
        required: false,
        type: [String],
        default: undefined
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columns: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
      conditions: {
        required: false,
        type: [Array],
        default: undefined
      },
      submit: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      formatData: {
        required: false,
        type: [Function],
        default: undefined
      },
      formatLoad: {
        required: false,
        type: [Function],
        default: undefined
      },
      debounce: {
        required: false,
        type: [Number],
        default: undefined
      },
      default: {
        required: false,
        type: [String, Number],
        default: undefined
      },
      description: {
        required: false,
        type: [String],
        default: undefined
      },
      disabled: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      id: {
        required: false,
        type: [String],
        default: undefined
      },
      info: {
        required: false,
        type: [String],
        default: undefined
      },
      label: {
        required: false,
        type: [String],
        default: undefined
      },
      before: {
        required: false,
        type: [Object],
        default: undefined
      },
      between: {
        required: false,
        type: [Object],
        default: undefined
      },
      after: {
        required: false,
        type: [Object],
        default: undefined
      },
      slots: {
        required: false,
        type: [Object],
        default: undefined
      },
      text: {
        required: false,
        type: [String],
        default: undefined
      },
      rules: {
        required: false,
        type: [Array, String, Object],
        default: undefined
      },
      messages: {
        required: false,
        type: [Object],
        default: undefined
      },
      displayError: {
        required: false,
        type: [Boolean],
        default: undefined
      },
    },
    slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after'],
    events: ['change'],
  },
  checkboxgroup: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      type: {
        required: false,
        type: [String],
        default: undefined
      },
      addClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      class: {
        required: false,
        type: [String],
        default: undefined
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columns: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
      conditions: {
        required: false,
        type: [Array],
        default: undefined
      },
      submit: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      formatData: {
        required: false,
        type: [Function],
        default: undefined
      },
      formatLoad: {
        required: false,
        type: [Function],
        default: undefined
      },
      debounce: {
        required: false,
        type: [Number],
        default: undefined
      },
      default: {
        required: false,
        type: [String, Number],
        default: undefined
      },
      description: {
        required: false,
        type: [String],
        default: undefined
      },
      disables: {
        required: false,
        type: [Array],
        default: undefined
      },
      disabled: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      id: {
        required: false,
        type: [String],
        default: undefined
      },
      info: {
        required: false,
        type: [String],
        default: undefined
      },
      items: {
        required: false,
        type: [Object],
        default: undefined
      },
      label: {
        required: false,
        type: [String],
        default: undefined
      },
      before: {
        required: false,
        type: [Object],
        default: undefined
      },
      between: {
        required: false,
        type: [Object],
        default: undefined
      },
      after: {
        required: false,
        type: [Object],
        default: undefined
      },
      slots: {
        required: false,
        type: [Object],
        default: undefined
      },
      rules: {
        required: false,
        type: [Array, String, Object],
        default: undefined
      },
      messages: {
        required: false,
        type: [Object],
        default: undefined
      },
      displayError: {
        required: false,
        type: [Boolean],
        default: undefined
      },
    },
    slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after', 'checkbox'],
    events: ['change'],
  },
  date: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      type: {
        required: false,
        type: [String],
        default: undefined
      },
      addClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      class: {
        required: false,
        type: [String],
        default: undefined
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columns: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
      conditions: {
        required: false,
        type: [Array],
        default: undefined
      },
      formatData: {
        required: false,
        type: [Function],
        default: undefined
      },
      formatLoad: {
        required: false,
        type: [Function],
        default: undefined
      },
      submit: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      debounce: {
        required: false,
        type: [Number],
        default: undefined
      },
      default: {
        required: false,
        type: [String, ],
        default: undefined
      },
      description: {
        required: false,
        type: [String],
        default: undefined
      },
      disabled: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      floating: {
        required: false,
        type: [String],
        default: undefined
      },
      id: {
        required: false,
        type: [String],
        default: undefined
      },
      info: {
        required: false,
        type: [String],
        default: undefined
      },
      label: {
        required: false,
        type: [String],
        default: undefined
      },
      displayFormat: {
        required: false,
        type: [String],
        default: undefined
      },
      valueFormat: {
        required: false,
        type: [String],
        default: undefined
      },
      loadFormat: {
        required: false,
        type: [String],
        default: undefined
      },
      disables: {
        required: false,
        type: [Array],
        default: undefined
      },
      min: {
        required: false,
        type: [String, ],
        default: undefined
      },
      max: {
        required: false,
        type: [String, ],
        default: undefined
      },
      options: {
        required: false,
        type: [Object],
        default: undefined
      },
      placeholder: {
        required: false,
        type: [String],
        default: undefined
      },
      readonly: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      before: {
        required: false,
        type: [Object],
        default: undefined
      },
      between: {
        required: false,
        type: [Object],
        default: undefined
      },
      after: {
        required: false,
        type: [Object],
        default: undefined
      },
      slots: {
        required: false,
        type: [Object],
        default: undefined
      },
      rules: {
        required: false,
        type: [Array, String, Object],
        default: undefined
      },
      messages: {
        required: false,
        type: [Object],
        default: undefined
      },
      displayError: {
        required: false,
        type: [Boolean],
        default: undefined
      },
    },
    slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after'],
    events: ['change'],
  },
  dates: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      type: {
        required: false,
        type: [String],
        default: undefined
      },
      addClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      class: {
        required: false,
        type: [String],
        default: undefined
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columns: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
      conditions: {
        required: false,
        type: [Array],
        default: undefined
      },
      formatData: {
        required: false,
        type: [Function],
        default: undefined
      },
      formatLoad: {
        required: false,
        type: [Function],
        default: undefined
      },
      submit: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      debounce: {
        required: false,
        type: [Number],
        default: undefined
      },
      default: {
        required: false,
        type: [Array],
        default: undefined
      },
      description: {
        required: false,
        type: [String],
        default: undefined
      },
      disabled: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      floating: {
        required: false,
        type: [String],
        default: undefined
      },
      id: {
        required: false,
        type: [String],
        default: undefined
      },
      info: {
        required: false,
        type: [String],
        default: undefined
      },
      label: {
        required: false,
        type: [String],
        default: undefined
      },
      mode: {
        required: false,
        type: [String],
        default: undefined
      },
      options: {
        required: false,
        type: [Object],
        default: undefined
      },
      displayFormat: {
        required: false,
        type: [String],
        default: undefined
      },
      valueFormat: {
        required: false,
        type: [String],
        default: undefined
      },
      loadFormat: {
        required: false,
        type: [String],
        default: undefined
      },
      min: {
        required: false,
        type: [String, ],
        default: undefined
      },
      max: {
        required: false,
        type: [String, ],
        default: undefined
      },
      disables: {
        required: false,
        type: [Array],
        default: undefined
      },
      placeholder: {
        required: false,
        type: [String],
        default: undefined
      },
      readonly: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      before: {
        required: false,
        type: [Object],
        default: undefined
      },
      between: {
        required: false,
        type: [Object],
        default: undefined
      },
      after: {
        required: false,
        type: [Object],
        default: undefined
      },
      slots: {
        required: false,
        type: [Object],
        default: undefined
      },
      rules: {
        required: false,
        type: [Array, String, Object],
        default: undefined
      },
      messages: {
        required: false,
        type: [Object],
        default: undefined
      },
      displayError: {
        required: false,
        type: [Boolean],
        default: undefined
      },
    },
    slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after'],
    events: ['change'],
  },
  datetime: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      type: {
        required: false,
        type: [String],
        default: undefined
      },
      addClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      class: {
        required: false,
        type: [String],
        default: undefined
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columns: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
      conditions: {
        required: false,
        type: [Array],
        default: undefined
      },
      formatData: {
        required: false,
        type: [Function],
        default: undefined
      },
      formatLoad: {
        required: false,
        type: [Function],
        default: undefined
      },
      submit: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      debounce: {
        required: false,
        type: [Number],
        default: undefined
      },
      default: {
        required: false,
        type: [String, ],
        default: undefined
      },
      description: {
        required: false,
        type: [String],
        default: undefined
      },
      disabled: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      floating: {
        required: false,
        type: [String],
        default: undefined
      },
      id: {
        required: false,
        type: [String],
        default: undefined
      },
      info: {
        required: false,
        type: [String],
        default: undefined
      },
      label: {
        required: false,
        type: [String],
        default: undefined
      },
      seconds: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      hour24: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      displayFormat: {
        required: false,
        type: [String],
        default: undefined
      },
      valueFormat: {
        required: false,
        type: [String],
        default: undefined
      },
      loadFormat: {
        required: false,
        type: [String],
        default: undefined
      },
      options: {
        required: false,
        type: [Object],
        default: undefined
      },
      min: {
        required: false,
        type: [String, ],
        default: undefined
      },
      max: {
        required: false,
        type: [String, ],
        default: undefined
      },
      disables: {
        required: false,
        type: [Array],
        default: undefined
      },
      placeholder: {
        required: false,
        type: [String],
        default: undefined
      },
      readonly: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      before: {
        required: false,
        type: [Object],
        default: undefined
      },
      between: {
        required: false,
        type: [Object],
        default: undefined
      },
      after: {
        required: false,
        type: [Object],
        default: undefined
      },
      slots: {
        required: false,
        type: [Object],
        default: undefined
      },
      rules: {
        required: false,
        type: [Array, String, Object],
        default: undefined
      },
      messages: {
        required: false,
        type: [Object],
        default: undefined
      },
      displayError: {
        required: false,
        type: [Boolean],
        default: undefined
      },
    },
    slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after'],
    events: ['change'],
  },
  file: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      type: {
        required: false,
        type: [String],
        default: undefined
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      class: {
        required: false,
        type: [String],
        default: undefined
      },
      addClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      columns: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
      conditions: {
        required: false,
        type: [Array],
        default: undefined
      },
      submit: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      formatData: {
        required: false,
        type: [Function],
        default: undefined
      },
      formatLoad: {
        required: false,
        type: [Function],
        default: undefined
      },
      debounce: {
        required: false,
        type: [Number],
        default: undefined
      },
      default: {
        required: false,
        type: [String, Number],
        default: undefined
      },
      description: {
        required: false,
        type: [String],
        default: undefined
      },
      disabled: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      drop: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      accept: {
        required: false,
        type: [String, Array],
        default: undefined
      },
      clickable: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      auto: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      methods: {
        required: false,
        type: [Object],
        default: undefined
      },
      endpoints: {
        required: false,
        type: [Object],
        default: undefined
      },
      url: {
        required: false,
        type: [String],
        default: undefined
      },
      id: {
        required: false,
        type: [String],
        default: undefined
      },
      info: {
        required: false,
        type: [String],
        default: undefined
      },
      label: {
        required: false,
        type: [String],
        default: undefined
      },
      before: {
        required: false,
        type: [Object],
        default: undefined
      },
      between: {
        required: false,
        type: [Object],
        default: undefined
      },
      after: {
        required: false,
        type: [Object],
        default: undefined
      },
      slots: {
        required: false,
        type: [Object],
        default: undefined
      },
      rules: {
        required: false,
        type: [Array, String, Object],
        default: undefined
      },
      messages: {
        required: false,
        type: [Object],
        default: undefined
      },
      displayError: {
        required: false,
        type: [Boolean],
        default: undefined
      },
    },
    slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after', 'progress', 'preview'],
    events: ['change', 'remove', 'error'],
  },
  gallery: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      type: {
        required: false,
        type: [String],
        default: undefined
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      class: {
        required: false,
        type: [String],
        default: undefined
      },
      addClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      columns: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
      conditions: {
        required: false,
        type: [Array],
        default: undefined
      },
      formatData: {
        required: false,
        type: [Function],
        default: undefined
      },
      formatLoad: {
        required: false,
        type: [Function],
        default: undefined
      },
      submit: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      debounce: {
        required: false,
        type: [Number],
        default: undefined
      },
      default: {
        required: false,
        type: [String, Number],
        default: undefined
      },
      description: {
        required: false,
        type: [String],
        default: undefined
      },
      disabled: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      drop: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      info: {
        required: false,
        type: [String],
        default: undefined
      },
      label: {
        required: false,
        type: [String],
        default: undefined
      },
      accept: {
        required: false,
        type: [String, Array],
        default: undefined
      },
      order: {
        required: false,
        type: [String],
        default: undefined
      },
      orderBy: {
        required: false,
        type: [String],
        default: undefined
      },
      auto: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      object: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      file: {
        required: false,
        type: [Object],
        default: undefined
      },
      storeFile: {
        required: false,
        type: [String],
        default: undefined
      },
      fields: {
        required: false,
        type: [Object],
        default: undefined
      },
      before: {
        required: false,
        type: [Object],
        default: undefined
      },
      between: {
        required: false,
        type: [Object],
        default: undefined
      },
      after: {
        required: false,
        type: [Object],
        default: undefined
      },
      slots: {
        required: false,
        type: [Object],
        default: undefined
      },
      sort: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      storeOrder: {
        required: false,
        type: [String],
        default: undefined
      },
      rules: {
        required: false,
        type: [Array, String, Object],
        default: undefined
      },
      messages: {
        required: false,
        type: [Object],
        default: undefined
      },
      displayError: {
        required: false,
        type: [Boolean],
        default: undefined
      },
    },
    slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after'],
    events: ['change', 'add', 'remove', 'sort'],
  },
  group: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      type: {
        required: false,
        type: [String],
        default: undefined
      },
      elements: {
        required: false,
        type: [Object],
        default: undefined
      },
      addClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      class: {
        required: false,
        type: [String],
        default: undefined
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columns: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
      conditions: {
        required: false,
        type: [Array],
        default: undefined
      },
      formatData: {
        required: false,
        type: [Function],
        default: undefined
      },
      formatLoad: {
        required: false,
        type: [Function],
        default: undefined
      },
      submit: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      description: {
        required: false,
        type: [String],
        default: undefined
      },
      info: {
        required: false,
        type: [String],
        default: undefined
      },
      label: {
        required: false,
        type: [String],
        default: undefined
      },
      before: {
        required: false,
        type: [Object],
        default: undefined
      },
      between: {
        required: false,
        type: [Object],
        default: undefined
      },
      after: {
        required: false,
        type: [Object],
        default: undefined
      },
      slots: {
        required: false,
        type: [Object],
        default: undefined
      },
    },
    slots: ['label', 'info', 'description', 'message', 'before', 'between', 'after'],
    events: [],
  },
  hidden: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      type: {
        required: false,
        type: [String],
        default: undefined
      },
      conditions: {
        required: false,
        type: [Array],
        default: undefined
      },
      submit: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      formatData: {
        required: false,
        type: [Function],
        default: undefined
      },
      formatLoad: {
        required: false,
        type: [Function],
        default: undefined
      },
      debounce: {
        required: false,
        type: [Number],
        default: undefined
      },
      default: {
        required: false,
        type: [String, Number],
        default: undefined
      },
      id: {
        required: false,
        type: [String],
        default: undefined
      },
      rules: {
        required: false,
        type: [Array, String, Object],
        default: undefined
      },
      messages: {
        required: false,
        type: [Object],
        default: undefined
      },
      displayError: {
        required: false,
        type: [Boolean],
        default: undefined
      },
    },
    slots: [],
    events: ['change'],
  },
  image: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      type: {
        required: false,
        type: [String],
        default: undefined
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      class: {
        required: false,
        type: [String],
        default: undefined
      },
      addClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      columns: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
      conditions: {
        required: false,
        type: [Array],
        default: undefined
      },
      submit: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      formatData: {
        required: false,
        type: [Function],
        default: undefined
      },
      formatLoad: {
        required: false,
        type: [Function],
        default: undefined
      },
      debounce: {
        required: false,
        type: [Number],
        default: undefined
      },
      default: {
        required: false,
        type: [String, Number],
        default: undefined
      },
      description: {
        required: false,
        type: [String],
        default: undefined
      },
      disabled: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      drop: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      id: {
        required: false,
        type: [String],
        default: undefined
      },
      info: {
        required: false,
        type: [String],
        default: undefined
      },
      label: {
        required: false,
        type: [String],
        default: undefined
      },
      before: {
        required: false,
        type: [Object],
        default: undefined
      },
      between: {
        required: false,
        type: [Object],
        default: undefined
      },
      after: {
        required: false,
        type: [Object],
        default: undefined
      },
      slots: {
        required: false,
        type: [Object],
        default: undefined
      },
      rules: {
        required: false,
        type: [Array, String, Object],
        default: undefined
      },
      messages: {
        required: false,
        type: [Object],
        default: undefined
      },
      displayError: {
        required: false,
        type: [Boolean],
        default: undefined
      },
    },
    slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after', 'progress', 'preview'],
    events: ['change', 'remove', 'error'],
  },
  key: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      type: {
        required: false,
        type: [String],
        default: undefined
      },
      conditions: {
        required: false,
        type: [Array],
        default: undefined
      },
      submit: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      formatData: {
        required: false,
        type: [Function],
        default: undefined
      },
      formatLoad: {
        required: false,
        type: [Function],
        default: undefined
      },
      debounce: {
        required: false,
        type: [Number],
        default: undefined
      },
      default: {
        required: false,
        type: [String, Number],
        default: undefined
      },
      id: {
        required: false,
        type: [String],
        default: undefined
      },
      rules: {
        required: false,
        type: [Array, String, Object],
        default: undefined
      },
      messages: {
        required: false,
        type: [Object],
        default: undefined
      },
      displayError: {
        required: false,
        type: [Boolean],
        default: undefined
      },
    },
    slots: [],
    events: ['change'],
  },
  list: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      type: {
        required: false,
        type: [String],
        default: undefined
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      class: {
        required: false,
        type: [String],
        default: undefined
      },
      addClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      columns: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
      conditions: {
        required: false,
        type: [Array],
        default: undefined
      },
      initial: {
        required: false,
        type: [Number],
        default: undefined
      },
      formatData: {
        required: false,
        type: [Function],
        default: undefined
      },
      formatLoad: {
        required: false,
        type: [Function],
        default: undefined
      },
      submit: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      debounce: {
        required: false,
        type: [Number],
        default: undefined
      },
      default: {
        required: false,
        type: [String, Number],
        default: undefined
      },
      description: {
        required: false,
        type: [String],
        default: undefined
      },
      disabled: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      info: {
        required: false,
        type: [String],
        default: undefined
      },
      label: {
        required: false,
        type: [String],
        default: undefined
      },
      order: {
        required: false,
        type: [String],
        default: undefined
      },
      orderBy: {
        required: false,
        type: [String],
        default: undefined
      },
      before: {
        required: false,
        type: [Object],
        default: undefined
      },
      between: {
        required: false,
        type: [Object],
        default: undefined
      },
      after: {
        required: false,
        type: [Object],
        default: undefined
      },
      slots: {
        required: false,
        type: [Object],
        default: undefined
      },
      sort: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      storeOrder: {
        required: false,
        type: [String],
        default: undefined
      },
      rules: {
        required: false,
        type: [Array, String, Object],
        default: undefined
      },
      messages: {
        required: false,
        type: [Object],
        default: undefined
      },
      displayError: {
        required: false,
        type: [Boolean],
        default: undefined
      },
    },
    slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after'],
    events: ['change', 'add', 'remove', 'sort'],
  },
  location: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      addons: {
        required: false,
        type: [Object],
        default: undefined
      },
      type: {
        required: false,
        type: [String],
        default: undefined
      },
      addClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      class: {
        required: false,
        type: [String],
        default: undefined
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columns: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
      conditions: {
        required: false,
        type: [Array],
        default: undefined
      },
      submit: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      formatData: {
        required: false,
        type: [Function],
        default: undefined
      },
      formatLoad: {
        required: false,
        type: [Function],
        default: undefined
      },
      debounce: {
        required: false,
        type: [Number],
        default: undefined
      },
      default: {
        required: false,
        type: [String, Number],
        default: undefined
      },
      description: {
        required: false,
        type: [String],
        default: undefined
      },
      disabled: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      displayKey: {
        required: false,
        type: [String],
        default: undefined
      },
      floating: {
        required: false,
        type: [String],
        default: undefined
      },
      id: {
        required: false,
        type: [String],
        default: undefined
      },
      info: {
        required: false,
        type: [String],
        default: undefined
      },
      label: {
        required: false,
        type: [String],
        default: undefined
      },
      provider: {
        required: false,
        type: [String],
        default: undefined
      },
      options: {
        required: false,
        type: [Object],
        default: undefined
      },
      placeholder: {
        required: false,
        type: [String],
        default: undefined
      },
      readonly: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      before: {
        required: false,
        type: [Object],
        default: undefined
      },
      between: {
        required: false,
        type: [Object],
        default: undefined
      },
      after: {
        required: false,
        type: [Object],
        default: undefined
      },
      slots: {
        required: false,
        type: [Object],
        default: undefined
      },
      rules: {
        required: false,
        type: [Array, String, Object],
        default: undefined
      },
      messages: {
        required: false,
        type: [Object],
        default: undefined
      },
      displayError: {
        required: false,
        type: [Boolean],
        default: undefined
      },
    },
    slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after'],
    events: ['change'],
  },
  meta: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      type: {
        required: false,
        type: [String],
        default: undefined
      },
      conditions: {
        required: false,
        type: [Array],
        default: undefined
      },
      submit: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      formatData: {
        required: false,
        type: [Function],
        default: undefined
      },
      formatLoad: {
        required: false,
        type: [Function],
        default: undefined
      },
      debounce: {
        required: false,
        type: [Number],
        default: undefined
      },
      default: {
        required: false,
        type: [String, Number],
        default: undefined
      },
      rules: {
        required: false,
        type: [Array, String, Object],
        default: undefined
      },
      messages: {
        required: false,
        type: [Object],
        default: undefined
      },
      displayError: {
        required: false,
        type: [Boolean],
        default: undefined
      },
    },
    slots: [],
    events: ['change'],
  },
  multifile: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      type: {
        required: false,
        type: [String],
        default: undefined
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      class: {
        required: false,
        type: [String],
        default: undefined
      },
      addClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      columns: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
      conditions: {
        required: false,
        type: [Array],
        default: undefined
      },
      formatData: {
        required: false,
        type: [Function],
        default: undefined
      },
      formatLoad: {
        required: false,
        type: [Function],
        default: undefined
      },
      submit: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      debounce: {
        required: false,
        type: [Number],
        default: undefined
      },
      default: {
        required: false,
        type: [String, Number],
        default: undefined
      },
      description: {
        required: false,
        type: [String],
        default: undefined
      },
      disabled: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      drop: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      info: {
        required: false,
        type: [String],
        default: undefined
      },
      label: {
        required: false,
        type: [String],
        default: undefined
      },
      accept: {
        required: false,
        type: [String, Array],
        default: undefined
      },
      order: {
        required: false,
        type: [String],
        default: undefined
      },
      orderBy: {
        required: false,
        type: [String],
        default: undefined
      },
      auto: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      object: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      file: {
        required: false,
        type: [Object],
        default: undefined
      },
      fields: {
        required: false,
        type: [Object],
        default: undefined
      },
      storeFile: {
        required: false,
        type: [String],
        default: undefined
      },
      before: {
        required: false,
        type: [Object],
        default: undefined
      },
      between: {
        required: false,
        type: [Object],
        default: undefined
      },
      after: {
        required: false,
        type: [Object],
        default: undefined
      },
      slots: {
        required: false,
        type: [Object],
        default: undefined
      },
      sort: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      storeOrder: {
        required: false,
        type: [String],
        default: undefined
      },
      rules: {
        required: false,
        type: [Array, String, Object],
        default: undefined
      },
      messages: {
        required: false,
        type: [Object],
        default: undefined
      },
      displayError: {
        required: false,
        type: [Boolean],
        default: undefined
      },
    },
    slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after'],
    events: ['change', 'add', 'remove', 'sort'],
  },
  multiselect: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      type: {
        required: false,
        type: [String],
        default: undefined
      },
      addClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      class: {
        required: false,
        type: [String],
        default: undefined
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columns: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
      conditions: {
        required: false,
        type: [Array],
        default: undefined
      },
      submit: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      formatData: {
        required: false,
        type: [Function],
        default: undefined
      },
      formatLoad: {
        required: false,
        type: [Function],
        default: undefined
      },
      debounce: {
        required: false,
        type: [Number],
        default: undefined
      },
      default: {
        required: false,
        type: [String, Number],
        default: undefined
      },
      description: {
        required: false,
        type: [String],
        default: undefined
      },
      disabled: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      floating: {
        required: false,
        type: [String],
        default: undefined
      },
      id: {
        required: false,
        type: [String],
        default: undefined
      },
      info: {
        required: false,
        type: [String],
        default: undefined
      },
      items: {
        required: false,
        type: [Object],
        default: undefined
      },
      label: {
        required: false,
        type: [String],
        default: undefined
      },
      options: {
        required: false,
        type: [Object],
        default: undefined
      },
      native: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      search: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      placeholder: {
        required: false,
        type: [String],
        default: undefined
      },
      readonly: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      before: {
        required: false,
        type: [Object],
        default: undefined
      },
      between: {
        required: false,
        type: [Object],
        default: undefined
      },
      after: {
        required: false,
        type: [Object],
        default: undefined
      },
      slots: {
        required: false,
        type: [Object],
        default: undefined
      },
      rules: {
        required: false,
        type: [Array, String, Object],
        default: undefined
      },
      messages: {
        required: false,
        type: [Object],
        default: undefined
      },
      displayError: {
        required: false,
        type: [Boolean],
        default: undefined
      },
    },
    slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after', 'beforelist', 'afterlist', 'multiplelabel', 'noresults', 'nooptions', 'option'],
    events: ['change', 'select', 'deselect', 'searchChange', 'open', 'close'],
  },
  object: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      type: {
        required: false,
        type: [String],
        default: undefined
      },
      elements: {
        required: false,
        type: [Object],
        default: undefined
      },
      addClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      class: {
        required: false,
        type: [String],
        default: undefined
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columns: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
      conditions: {
        required: false,
        type: [Array],
        default: undefined
      },
      formatData: {
        required: false,
        type: [Function],
        default: undefined
      },
      formatLoad: {
        required: false,
        type: [Function],
        default: undefined
      },
      submit: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      description: {
        required: false,
        type: [String],
        default: undefined
      },
      info: {
        required: false,
        type: [String],
        default: undefined
      },
      label: {
        required: false,
        type: [String],
        default: undefined
      },
      before: {
        required: false,
        type: [Object],
        default: undefined
      },
      between: {
        required: false,
        type: [Object],
        default: undefined
      },
      after: {
        required: false,
        type: [Object],
        default: undefined
      },
      slots: {
        required: false,
        type: [Object],
        default: undefined
      },
    },
    slots: ['label', 'info', 'description', 'message', 'before', 'between', 'after'],
    events: [],
  },
  password: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      addons: {
        required: false,
        type: [Object],
        default: undefined
      },
      autocomplete: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      type: {
        required: false,
        type: [String],
        default: undefined
      },
      addClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      class: {
        required: false,
        type: [String],
        default: undefined
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columns: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
      conditions: {
        required: false,
        type: [Array],
        default: undefined
      },
      submit: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      formatData: {
        required: false,
        type: [Function],
        default: undefined
      },
      formatLoad: {
        required: false,
        type: [Function],
        default: undefined
      },
      debounce: {
        required: false,
        type: [Number],
        default: undefined
      },
      default: {
        required: false,
        type: [String, Number],
        default: undefined
      },
      description: {
        required: false,
        type: [String],
        default: undefined
      },
      disabled: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      floating: {
        required: false,
        type: [String],
        default: undefined
      },
      id: {
        required: false,
        type: [String],
        default: undefined
      },
      info: {
        required: false,
        type: [String],
        default: undefined
      },
      label: {
        required: false,
        type: [String],
        default: undefined
      },
      placeholder: {
        required: false,
        type: [String],
        default: undefined
      },
      readonly: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      before: {
        required: false,
        type: [Object],
        default: undefined
      },
      between: {
        required: false,
        type: [Object],
        default: undefined
      },
      after: {
        required: false,
        type: [Object],
        default: undefined
      },
      slots: {
        required: false,
        type: [Object],
        default: undefined
      },
      rules: {
        required: false,
        type: [Array, String, Object],
        default: undefined
      },
      messages: {
        required: false,
        type: [Object],
        default: undefined
      },
      displayError: {
        required: false,
        type: [Boolean],
        default: undefined
      },
    },
    slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after'],
    events: ['change'],
  },
  radio: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      type: {
        required: false,
        type: [String],
        default: undefined
      },
      addClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      class: {
        required: false,
        type: [String],
        default: undefined
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columns: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
      conditions: {
        required: false,
        type: [Array],
        default: undefined
      },
      submit: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      formatData: {
        required: false,
        type: [Function],
        default: undefined
      },
      formatLoad: {
        required: false,
        type: [Function],
        default: undefined
      },
      debounce: {
        required: false,
        type: [Number],
        default: undefined
      },
      default: {
        required: false,
        type: [String, Number],
        default: undefined
      },
      description: {
        required: false,
        type: [String],
        default: undefined
      },
      disabled: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      id: {
        required: false,
        type: [String],
        default: undefined
      },
      info: {
        required: false,
        type: [String],
        default: undefined
      },
      label: {
        required: false,
        type: [String],
        default: undefined
      },
      fieldName: {
        required: false,
        type: [String],
        default: undefined
      },
      radioValue: {
        required: false,
        type: [, , ],
        default: undefined
      },
      before: {
        required: false,
        type: [Object],
        default: undefined
      },
      between: {
        required: false,
        type: [Object],
        default: undefined
      },
      after: {
        required: false,
        type: [Object],
        default: undefined
      },
      slots: {
        required: false,
        type: [Object],
        default: undefined
      },
      text: {
        required: false,
        type: [String],
        default: undefined
      },
      rules: {
        required: false,
        type: [Array, String, Object],
        default: undefined
      },
      messages: {
        required: false,
        type: [Object],
        default: undefined
      },
      displayError: {
        required: false,
        type: [Boolean],
        default: undefined
      },
    },
    slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after'],
    events: ['change'],
  },
  radiogroup: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      type: {
        required: false,
        type: [String],
        default: undefined
      },
      addClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      class: {
        required: false,
        type: [String],
        default: undefined
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columns: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
      conditions: {
        required: false,
        type: [Array],
        default: undefined
      },
      submit: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      formatData: {
        required: false,
        type: [Function],
        default: undefined
      },
      formatLoad: {
        required: false,
        type: [Function],
        default: undefined
      },
      debounce: {
        required: false,
        type: [Number],
        default: undefined
      },
      default: {
        required: false,
        type: [String, Number],
        default: undefined
      },
      description: {
        required: false,
        type: [String],
        default: undefined
      },
      disables: {
        required: false,
        type: [Array],
        default: undefined
      },
      disabled: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      id: {
        required: false,
        type: [String],
        default: undefined
      },
      info: {
        required: false,
        type: [String],
        default: undefined
      },
      items: {
        required: false,
        type: [Object],
        default: undefined
      },
      label: {
        required: false,
        type: [String],
        default: undefined
      },
      before: {
        required: false,
        type: [Object],
        default: undefined
      },
      between: {
        required: false,
        type: [Object],
        default: undefined
      },
      after: {
        required: false,
        type: [Object],
        default: undefined
      },
      slots: {
        required: false,
        type: [Object],
        default: undefined
      },
      rules: {
        required: false,
        type: [Array, String, Object],
        default: undefined
      },
      messages: {
        required: false,
        type: [Object],
        default: undefined
      },
      displayError: {
        required: false,
        type: [Boolean],
        default: undefined
      },
    },
    slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after', 'radio'],
    events: ['change'],
  },
  select: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      type: {
        required: false,
        type: [String],
        default: undefined
      },
      addClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      class: {
        required: false,
        type: [String],
        default: undefined
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columns: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
      conditions: {
        required: false,
        type: [Array],
        default: undefined
      },
      submit: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      formatData: {
        required: false,
        type: [Function],
        default: undefined
      },
      formatLoad: {
        required: false,
        type: [Function],
        default: undefined
      },
      debounce: {
        required: false,
        type: [Number],
        default: undefined
      },
      default: {
        required: false,
        type: [String, Number],
        default: undefined
      },
      description: {
        required: false,
        type: [String],
        default: undefined
      },
      disabled: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      floating: {
        required: false,
        type: [String],
        default: undefined
      },
      id: {
        required: false,
        type: [String],
        default: undefined
      },
      info: {
        required: false,
        type: [String],
        default: undefined
      },
      items: {
        required: false,
        type: [Object],
        default: undefined
      },
      label: {
        required: false,
        type: [String],
        default: undefined
      },
      native: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      search: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      options: {
        required: false,
        type: [Object],
        default: undefined
      },
      placeholder: {
        required: false,
        type: [String],
        default: undefined
      },
      readonly: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      before: {
        required: false,
        type: [Object],
        default: undefined
      },
      between: {
        required: false,
        type: [Object],
        default: undefined
      },
      after: {
        required: false,
        type: [Object],
        default: undefined
      },
      slots: {
        required: false,
        type: [Object],
        default: undefined
      },
      rules: {
        required: false,
        type: [Array, String, Object],
        default: undefined
      },
      messages: {
        required: false,
        type: [Object],
        default: undefined
      },
      displayError: {
        required: false,
        type: [Boolean],
        default: undefined
      },
    },
    slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after', 'beforelist', 'afterlist', 'singlelabel', 'noresults', 'nooptions', 'option'],
    events: ['change', 'select', 'deselect', 'searchChange', 'open', 'close'],
  },
  slider: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      type: {
        required: false,
        type: [String],
        default: undefined
      },
      addClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      class: {
        required: false,
        type: [String],
        default: undefined
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columns: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
      conditions: {
        required: false,
        type: [Array],
        default: undefined
      },
      submit: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      formatData: {
        required: false,
        type: [Function],
        default: undefined
      },
      formatLoad: {
        required: false,
        type: [Function],
        default: undefined
      },
      debounce: {
        required: false,
        type: [Number],
        default: undefined
      },
      default: {
        required: false,
        type: [String, Number],
        default: undefined
      },
      description: {
        required: false,
        type: [String],
        default: undefined
      },
      disabled: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      id: {
        required: false,
        type: [String],
        default: undefined
      },
      info: {
        required: false,
        type: [String],
        default: undefined
      },
      label: {
        required: false,
        type: [String],
        default: undefined
      },
      min: {
        required: false,
        type: [Number],
        default: undefined
      },
      max: {
        required: false,
        type: [Number],
        default: undefined
      },
      step: {
        required: false,
        type: [Number],
        default: undefined
      },
      tooltips: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      merge: {
        required: false,
        type: [Number],
        default: undefined
      },
      format: {
        required: false,
        type: [Object, Function],
        default: undefined
      },
      orientation: {
        required: false,
        type: [String],
        default: undefined
      },
      direction: {
        required: false,
        type: [String],
        default: undefined
      },
      height: {
        required: false,
        type: [String],
        default: undefined
      },
      options: {
        required: false,
        type: [Object],
        default: undefined
      },
      readonly: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      before: {
        required: false,
        type: [Object],
        default: undefined
      },
      between: {
        required: false,
        type: [Object],
        default: undefined
      },
      after: {
        required: false,
        type: [Object],
        default: undefined
      },
      slots: {
        required: false,
        type: [Object],
        default: undefined
      },
      rules: {
        required: false,
        type: [Array, String, Object],
        default: undefined
      },
      messages: {
        required: false,
        type: [Object],
        default: undefined
      },
      displayError: {
        required: false,
        type: [Boolean],
        default: undefined
      },
    },
    slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after'],
    events: ['change'],
  },
  static: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      type: {
        required: false,
        type: [String],
        default: undefined
      },
      addClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      class: {
        required: false,
        type: [String],
        default: undefined
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columns: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
      conditions: {
        required: false,
        type: [Array],
        default: undefined
      },
      description: {
        required: false,
        type: [String],
        default: undefined
      },
      info: {
        required: false,
        type: [String],
        default: undefined
      },
      label: {
        required: false,
        type: [String],
        default: undefined
      },
      before: {
        required: false,
        type: [Object],
        default: undefined
      },
      between: {
        required: false,
        type: [Object],
        default: undefined
      },
      after: {
        required: false,
        type: [Object],
        default: undefined
      },
      slots: {
        required: false,
        type: [Object],
        default: undefined
      },
      wrap: {
        required: false,
        type: [Boolean],
        default: undefined
      },
    },
    slots: ['label', 'info', 'description', 'before', 'between', 'after'],
    events: [],
  },
  tags: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      type: {
        required: false,
        type: [String],
        default: undefined
      },
      addClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      class: {
        required: false,
        type: [String],
        default: undefined
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columns: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
      conditions: {
        required: false,
        type: [Array],
        default: undefined
      },
      submit: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      formatData: {
        required: false,
        type: [Function],
        default: undefined
      },
      formatLoad: {
        required: false,
        type: [Function],
        default: undefined
      },
      debounce: {
        required: false,
        type: [Number],
        default: undefined
      },
      default: {
        required: false,
        type: [String, Number],
        default: undefined
      },
      description: {
        required: false,
        type: [String],
        default: undefined
      },
      disabled: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      floating: {
        required: false,
        type: [String],
        default: undefined
      },
      id: {
        required: false,
        type: [String],
        default: undefined
      },
      info: {
        required: false,
        type: [String],
        default: undefined
      },
      items: {
        required: false,
        type: [Object],
        default: undefined
      },
      label: {
        required: false,
        type: [String],
        default: undefined
      },
      create: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      search: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      options: {
        required: false,
        type: [Object],
        default: undefined
      },
      placeholder: {
        required: false,
        type: [String],
        default: undefined
      },
      readonly: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      before: {
        required: false,
        type: [Object],
        default: undefined
      },
      between: {
        required: false,
        type: [Object],
        default: undefined
      },
      after: {
        required: false,
        type: [Object],
        default: undefined
      },
      slots: {
        required: false,
        type: [Object],
        default: undefined
      },
      rules: {
        required: false,
        type: [Array, String, Object],
        default: undefined
      },
      messages: {
        required: false,
        type: [Object],
        default: undefined
      },
      displayError: {
        required: false,
        type: [Boolean],
        default: undefined
      },
    },
    slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after', 'beforelist', 'afterlist', 'noresults', 'nooptions', 'option', 'tag'],
    events: ['change', 'select', 'deselect', 'searchChange', 'open', 'close', 'tag'],
  },
  textarea: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      addons: {
        required: false,
        type: [Object],
        default: undefined
      },
      autogrow: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      rows: {
        required: false,
        type: [Number],
        default: undefined
      },
      type: {
        required: false,
        type: [String],
        default: undefined
      },
      addClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      class: {
        required: false,
        type: [String],
        default: undefined
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columns: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
      conditions: {
        required: false,
        type: [Array],
        default: undefined
      },
      submit: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      formatData: {
        required: false,
        type: [Function],
        default: undefined
      },
      formatLoad: {
        required: false,
        type: [Function],
        default: undefined
      },
      debounce: {
        required: false,
        type: [Number],
        default: undefined
      },
      default: {
        required: false,
        type: [String, Number],
        default: undefined
      },
      description: {
        required: false,
        type: [String],
        default: undefined
      },
      disabled: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      floating: {
        required: false,
        type: [String],
        default: undefined
      },
      id: {
        required: false,
        type: [String],
        default: undefined
      },
      info: {
        required: false,
        type: [String],
        default: undefined
      },
      label: {
        required: false,
        type: [String],
        default: undefined
      },
      placeholder: {
        required: false,
        type: [String],
        default: undefined
      },
      readonly: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      before: {
        required: false,
        type: [Object],
        default: undefined
      },
      between: {
        required: false,
        type: [Object],
        default: undefined
      },
      after: {
        required: false,
        type: [Object],
        default: undefined
      },
      slots: {
        required: false,
        type: [Object],
        default: undefined
      },
      rules: {
        required: false,
        type: [Array, String, Object],
        default: undefined
      },
      messages: {
        required: false,
        type: [Object],
        default: undefined
      },
      displayError: {
        required: false,
        type: [Boolean],
        default: undefined
      },
    },
    slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after'],
    events: ['change'],
  },
  text: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      addons: {
        required: false,
        type: [Object],
        default: undefined
      },
      autocomplete: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      type: {
        required: false,
        type: [String],
        default: undefined
      },
      addClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      class: {
        required: false,
        type: [String],
        default: undefined
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columns: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
      conditions: {
        required: false,
        type: [Array],
        default: undefined
      },
      submit: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      formatData: {
        required: false,
        type: [Function],
        default: undefined
      },
      formatLoad: {
        required: false,
        type: [Function],
        default: undefined
      },
      debounce: {
        required: false,
        type: [Number],
        default: undefined
      },
      default: {
        required: false,
        type: [String, Number],
        default: undefined
      },
      description: {
        required: false,
        type: [String],
        default: undefined
      },
      disabled: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      floating: {
        required: false,
        type: [String],
        default: undefined
      },
      id: {
        required: false,
        type: [String],
        default: undefined
      },
      info: {
        required: false,
        type: [String],
        default: undefined
      },
      inputType: {
        required: false,
        type: [String],
        default: undefined
      },
      label: {
        required: false,
        type: [String],
        default: undefined
      },
      placeholder: {
        required: false,
        type: [String],
        default: undefined
      },
      readonly: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      before: {
        required: false,
        type: [Object],
        default: undefined
      },
      between: {
        required: false,
        type: [Object],
        default: undefined
      },
      after: {
        required: false,
        type: [Object],
        default: undefined
      },
      slots: {
        required: false,
        type: [Object],
        default: undefined
      },
      rules: {
        required: false,
        type: [Array, String, Object],
        default: undefined
      },
      messages: {
        required: false,
        type: [Object],
        default: undefined
      },
      displayError: {
        required: false,
        type: [Boolean],
        default: undefined
      },
    },
    slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after'],
    events: ['change'],
  },
  time: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      type: {
        required: false,
        type: [String],
        default: undefined
      },
      addClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      class: {
        required: false,
        type: [String],
        default: undefined
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columns: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
      conditions: {
        required: false,
        type: [Array],
        default: undefined
      },
      formatData: {
        required: false,
        type: [Function],
        default: undefined
      },
      formatLoad: {
        required: false,
        type: [Function],
        default: undefined
      },
      submit: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      debounce: {
        required: false,
        type: [Number],
        default: undefined
      },
      default: {
        required: false,
        type: [String, ],
        default: undefined
      },
      description: {
        required: false,
        type: [String],
        default: undefined
      },
      disabled: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      floating: {
        required: false,
        type: [String],
        default: undefined
      },
      id: {
        required: false,
        type: [String],
        default: undefined
      },
      info: {
        required: false,
        type: [String],
        default: undefined
      },
      label: {
        required: false,
        type: [String],
        default: undefined
      },
      seconds: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      hour24: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      displayFormat: {
        required: false,
        type: [String],
        default: undefined
      },
      valueFormat: {
        required: false,
        type: [String],
        default: undefined
      },
      loadFormat: {
        required: false,
        type: [String],
        default: undefined
      },
      options: {
        required: false,
        type: [Object],
        default: undefined
      },
      min: {
        required: false,
        type: [String, ],
        default: undefined
      },
      max: {
        required: false,
        type: [String, ],
        default: undefined
      },
      disables: {
        required: false,
        type: [Array],
        default: undefined
      },
      placeholder: {
        required: false,
        type: [String],
        default: undefined
      },
      readonly: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      before: {
        required: false,
        type: [Object],
        default: undefined
      },
      between: {
        required: false,
        type: [Object],
        default: undefined
      },
      after: {
        required: false,
        type: [Object],
        default: undefined
      },
      slots: {
        required: false,
        type: [Object],
        default: undefined
      },
      rules: {
        required: false,
        type: [Array, String, Object],
        default: undefined
      },
      messages: {
        required: false,
        type: [Object],
        default: undefined
      },
      displayError: {
        required: false,
        type: [Boolean],
        default: undefined
      },
    },
    slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after'],
    events: ['change'],
  },
  toggle: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      type: {
        required: false,
        type: [String],
        default: undefined
      },
      trueValue: {
        required: false,
        type: [, , ],
        default: undefined
      },
      falseValue: {
        required: false,
        type: [, , ],
        default: undefined
      },
      addClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      class: {
        required: false,
        type: [String],
        default: undefined
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columns: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
      conditions: {
        required: false,
        type: [Array],
        default: undefined
      },
      submit: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      formatData: {
        required: false,
        type: [Function],
        default: undefined
      },
      formatLoad: {
        required: false,
        type: [Function],
        default: undefined
      },
      debounce: {
        required: false,
        type: [Number],
        default: undefined
      },
      default: {
        required: false,
        type: [String, Number],
        default: undefined
      },
      description: {
        required: false,
        type: [String],
        default: undefined
      },
      disabled: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      id: {
        required: false,
        type: [String],
        default: undefined
      },
      info: {
        required: false,
        type: [String],
        default: undefined
      },
      label: {
        required: false,
        type: [String],
        default: undefined
      },
      labels: {
        required: false,
        type: [Object],
        default: undefined
      },
      width: {
        required: false,
        type: [Number],
        default: undefined
      },
      height: {
        required: false,
        type: [Number],
        default: undefined
      },
      speed: {
        required: false,
        type: [Number],
        default: undefined
      },
      colors: {
        required: false,
        type: [Object],
        default: undefined
      },
      options: {
        required: false,
        type: [Object],
        default: undefined
      },
      before: {
        required: false,
        type: [Object],
        default: undefined
      },
      between: {
        required: false,
        type: [Object],
        default: undefined
      },
      after: {
        required: false,
        type: [Object],
        default: undefined
      },
      slots: {
        required: false,
        type: [Object],
        default: undefined
      },
      text: {
        required: false,
        type: [String],
        default: undefined
      },
      rules: {
        required: false,
        type: [Array, String, Object],
        default: undefined
      },
      messages: {
        required: false,
        type: [Object],
        default: undefined
      },
      displayError: {
        required: false,
        type: [Boolean],
        default: undefined
      },
    },
    slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after'],
    events: ['change'],
  },
  trix: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      type: {
        required: false,
        type: [String],
        default: undefined
      },
      addClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      class: {
        required: false,
        type: [String],
        default: undefined
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columns: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
      conditions: {
        required: false,
        type: [Array],
        default: undefined
      },
      formatData: {
        required: false,
        type: [Function],
        default: undefined
      },
      formatLoad: {
        required: false,
        type: [Function],
        default: undefined
      },
      submit: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      debounce: {
        required: false,
        type: [Number],
        default: undefined
      },
      default: {
        required: false,
        type: [String, Number],
        default: undefined
      },
      description: {
        required: false,
        type: [String],
        default: undefined
      },
      disabled: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      id: {
        required: false,
        type: [String],
        default: undefined
      },
      info: {
        required: false,
        type: [String],
        default: undefined
      },
      label: {
        required: false,
        type: [String],
        default: undefined
      },
      placeholder: {
        required: false,
        type: [String],
        default: undefined
      },
      before: {
        required: false,
        type: [Object],
        default: undefined
      },
      between: {
        required: false,
        type: [Object],
        default: undefined
      },
      after: {
        required: false,
        type: [Object],
        default: undefined
      },
      slots: {
        required: false,
        type: [Object],
        default: undefined
      },
      accept: {
        required: false,
        type: [Array],
        default: undefined
      },
      acceptMimes: {
        required: false,
        type: [Array],
        default: undefined
      },
      endpoint: {
        required: false,
        type: [String],
        default: undefined
      },
      rules: {
        required: false,
        type: [Array, String, Object],
        default: undefined
      },
      messages: {
        required: false,
        type: [Object],
        default: undefined
      },
      displayError: {
        required: false,
        type: [Boolean],
        default: undefined
      },
    },
    slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after'],
    events: ['change', 'error'],
  },
  tTextarea: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      addons: {
        required: false,
        type: [Object],
        default: undefined
      },
      autogrow: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      rows: {
        required: false,
        type: [Number],
        default: undefined
      },
      type: {
        required: false,
        type: [String],
        default: undefined
      },
      addClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      class: {
        required: false,
        type: [String],
        default: undefined
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columns: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
      conditions: {
        required: false,
        type: [Array],
        default: undefined
      },
      formatData: {
        required: false,
        type: [Function],
        default: undefined
      },
      formatLoad: {
        required: false,
        type: [Function],
        default: undefined
      },
      submit: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      debounce: {
        required: false,
        type: [Number],
        default: undefined
      },
      default: {
        required: false,
        type: [Object, String, Number],
        default: undefined
      },
      description: {
        required: false,
        type: [String],
        default: undefined
      },
      disabled: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      floating: {
        required: false,
        type: [String],
        default: undefined
      },
      id: {
        required: false,
        type: [String],
        default: undefined
      },
      info: {
        required: false,
        type: [String],
        default: undefined
      },
      label: {
        required: false,
        type: [String],
        default: undefined
      },
      placeholder: {
        required: false,
        type: [String],
        default: undefined
      },
      readonly: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      before: {
        required: false,
        type: [Object],
        default: undefined
      },
      between: {
        required: false,
        type: [Object],
        default: undefined
      },
      after: {
        required: false,
        type: [Object],
        default: undefined
      },
      slots: {
        required: false,
        type: [Object],
        default: undefined
      },
      messages: {
        required: false,
        type: [Object],
        default: undefined
      },
      displayError: {
        required: false,
        type: [Boolean],
        default: undefined
      },
    },
    slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after'],
    events: ['change'],
  },
  tText: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      addons: {
        required: false,
        type: [Object],
        default: undefined
      },
      autocomplete: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      type: {
        required: false,
        type: [String],
        default: undefined
      },
      addClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      class: {
        required: false,
        type: [String],
        default: undefined
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columns: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
      conditions: {
        required: false,
        type: [Array],
        default: undefined
      },
      formatData: {
        required: false,
        type: [Function],
        default: undefined
      },
      formatLoad: {
        required: false,
        type: [Function],
        default: undefined
      },
      submit: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      debounce: {
        required: false,
        type: [Number],
        default: undefined
      },
      default: {
        required: false,
        type: [Object, String, Number],
        default: undefined
      },
      description: {
        required: false,
        type: [String],
        default: undefined
      },
      disabled: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      floating: {
        required: false,
        type: [String],
        default: undefined
      },
      id: {
        required: false,
        type: [String],
        default: undefined
      },
      info: {
        required: false,
        type: [String],
        default: undefined
      },
      inputType: {
        required: false,
        type: [String],
        default: undefined
      },
      label: {
        required: false,
        type: [String],
        default: undefined
      },
      placeholder: {
        required: false,
        type: [String],
        default: undefined
      },
      readonly: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      before: {
        required: false,
        type: [Object],
        default: undefined
      },
      between: {
        required: false,
        type: [Object],
        default: undefined
      },
      after: {
        required: false,
        type: [Object],
        default: undefined
      },
      slots: {
        required: false,
        type: [Object],
        default: undefined
      },
      messages: {
        required: false,
        type: [Object],
        default: undefined
      },
      displayError: {
        required: false,
        type: [Boolean],
        default: undefined
      },
    },
    slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after'],
    events: ['change'],
  },
  tTrix: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      type: {
        required: false,
        type: [String],
        default: undefined
      },
      addClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      class: {
        required: false,
        type: [String],
        default: undefined
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columns: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
      conditions: {
        required: false,
        type: [Array],
        default: undefined
      },
      formatData: {
        required: false,
        type: [Function],
        default: undefined
      },
      formatLoad: {
        required: false,
        type: [Function],
        default: undefined
      },
      submit: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      debounce: {
        required: false,
        type: [Number],
        default: undefined
      },
      default: {
        required: false,
        type: [Object, String, Number],
        default: undefined
      },
      description: {
        required: false,
        type: [String],
        default: undefined
      },
      disabled: {
        required: false,
        type: [Boolean],
        default: undefined
      },
      id: {
        required: false,
        type: [String],
        default: undefined
      },
      info: {
        required: false,
        type: [String],
        default: undefined
      },
      label: {
        required: false,
        type: [String],
        default: undefined
      },
      placeholder: {
        required: false,
        type: [String],
        default: undefined
      },
      before: {
        required: false,
        type: [Object],
        default: undefined
      },
      between: {
        required: false,
        type: [Object],
        default: undefined
      },
      after: {
        required: false,
        type: [Object],
        default: undefined
      },
      slots: {
        required: false,
        type: [Object],
        default: undefined
      },
      accept: {
        required: false,
        type: [Array],
        default: undefined
      },
      acceptMimes: {
        required: false,
        type: [Array],
        default: undefined
      },
      endpoint: {
        required: false,
        type: [String],
        default: undefined
      },
      messages: {
        required: false,
        type: [Object],
        default: undefined
      },
      displayError: {
        required: false,
        type: [Boolean],
        default: undefined
      },
    },
    slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after'],
    events: ['change', 'error'],
  },
}

console.log(_.isEqual(fields, expected) ? 'Test passed' : 'Test failed')