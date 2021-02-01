export default {
  address: {
    props: {
      name: {
        required: true,
        type: [String, Number]
      },
      type: {
        required: false,
        type: [String]
      },
      addClasses: {
        required: false,
        type: [Object]
      },
      class: {
        required: false,
        type: [String]
      },
      conditions: {
        required: false,
        type: [Array]
      },
      formatData: {
        required: false,
        type: []
      },
      formatLoad: {
        required: false,
        type: []
      },
      submit: {
        required: false,
        type: []
      },
      description: {
        required: false,
        type: [String]
      },
      disabled: {
        required: false,
        type: []
      },
      info: {
        required: false,
        type: [String]
      },
      label: {
        required: false,
        type: [String]
      },
      readonly: {
        required: false,
        type: []
      },
      required: {
        required: false,
        type: []
      },
      before: {
        required: false,
        type: [String]
      },
      between: {
        required: false,
        type: [String]
      },
      after: {
        required: false,
        type: [String]
      },
    }
  },
  button: {
    props: {
      name: {
        required: true,
        type: [String, Number]
      },
      type: {
        required: false,
        type: [String]
      },
      buttonLabel: {
        required: false,
        type: [String]
      },
      buttonType: {
        required: false,
        type: [String]
      },
      buttonClass: {
        required: false,
        type: [String, Array, Object]
      },
      disabled: {
        required: false,
        type: []
      },
      loading: {
        required: false,
        type: []
      },
      href: {
        required: false,
        type: [String]
      },
      target: {
        required: false,
        type: [String]
      },
      align: {
        required: false,
        type: [String]
      },
      onClick: {
        required: false,
        type: []
      },
      addClasses: {
        required: false,
        type: [Object]
      },
      class: {
        required: false,
        type: [String]
      },
      conditions: {
        required: false,
        type: [Array]
      },
      description: {
        required: false,
        type: [String]
      },
      info: {
        required: false,
        type: [String]
      },
      label: {
        required: false,
        type: [String]
      },
      before: {
        required: false,
        type: [String]
      },
      between: {
        required: false,
        type: [String]
      },
      after: {
        required: false,
        type: [String]
      },
    }
  },
  buttons: {
    props: {
      name: {
        required: true,
        type: [String, Number]
      },
      type: {
        required: false,
        type: [String]
      },
      addClasses: {
        required: false,
        type: [Object]
      },
      class: {
        required: false,
        type: [String]
      },
      conditions: {
        required: false,
        type: [Array]
      },
      description: {
        required: false,
        type: [String]
      },
      info: {
        required: false,
        type: [String]
      },
      label: {
        required: false,
        type: [String]
      },
      before: {
        required: false,
        type: [String]
      },
      between: {
        required: false,
        type: [String]
      },
      after: {
        required: false,
        type: [String]
      },
    }
  },
  checkbox: {
    props: {
      name: {
        required: true,
        type: [String, Number]
      },
      type: {
        required: false,
        type: [String]
      },
      trueValue: {
        required: false,
        type: [, , ]
      },
      falseValue: {
        required: false,
        type: [, , ]
      },
      addClasses: {
        required: false,
        type: [Object]
      },
      class: {
        required: false,
        type: [String]
      },
      conditions: {
        required: false,
        type: [Array]
      },
      submit: {
        required: false,
        type: []
      },
      formatData: {
        required: false,
        type: []
      },
      formatLoad: {
        required: false,
        type: []
      },
      debounce: {
        required: false,
        type: [Number]
      },
      default: {
        required: false,
        type: [String, Number]
      },
      description: {
        required: false,
        type: [String]
      },
      disabled: {
        required: false,
        type: []
      },
      id: {
        required: false,
        type: [String]
      },
      info: {
        required: false,
        type: [String]
      },
      label: {
        required: false,
        type: [String]
      },
      before: {
        required: false,
        type: [String]
      },
      between: {
        required: false,
        type: [String]
      },
      after: {
        required: false,
        type: [String]
      },
      text: {
        required: false,
        type: []
      },
      rules: {
        required: false,
        type: [Array, String, Object]
      },
      messages: {
        required: false,
        type: [Object]
      },
      displayError: {
        required: false,
        type: []
      },
    }
  },
  checkboxgroup: {
    props: {
      name: {
        required: true,
        type: [String, Number]
      },
      type: {
        required: false,
        type: [String]
      },
      addClasses: {
        required: false,
        type: [Object]
      },
      class: {
        required: false,
        type: [String]
      },
      conditions: {
        required: false,
        type: [Array]
      },
      submit: {
        required: false,
        type: []
      },
      formatData: {
        required: false,
        type: []
      },
      formatLoad: {
        required: false,
        type: []
      },
      debounce: {
        required: false,
        type: [Number]
      },
      default: {
        required: false,
        type: [String, Number]
      },
      description: {
        required: false,
        type: [String]
      },
      disabled: {
        required: false,
        type: []
      },
      id: {
        required: false,
        type: [String]
      },
      info: {
        required: false,
        type: [String]
      },
      items: {
        required: false,
        type: [Object]
      },
      label: {
        required: false,
        type: [String]
      },
      before: {
        required: false,
        type: [String]
      },
      between: {
        required: false,
        type: [String]
      },
      after: {
        required: false,
        type: [String]
      },
      rules: {
        required: false,
        type: [Array, String, Object]
      },
      messages: {
        required: false,
        type: [Object]
      },
      displayError: {
        required: false,
        type: []
      },
    }
  },
  date: {
    props: {
      name: {
        required: true,
        type: [String, Number]
      },
      type: {
        required: false,
        type: [String]
      },
      addClasses: {
        required: false,
        type: [Object]
      },
      class: {
        required: false,
        type: [String]
      },
      conditions: {
        required: false,
        type: [Array]
      },
      formatData: {
        required: false,
        type: []
      },
      formatLoad: {
        required: false,
        type: []
      },
      submit: {
        required: false,
        type: []
      },
      debounce: {
        required: false,
        type: [Number]
      },
      description: {
        required: false,
        type: [String]
      },
      disabled: {
        required: false,
        type: []
      },
      floating: {
        required: false,
        type: [String]
      },
      id: {
        required: false,
        type: [String]
      },
      info: {
        required: false,
        type: [String]
      },
      label: {
        required: false,
        type: [String]
      },
      displayFormat: {
        required: false,
        type: [String, ]
      },
      valueFormat: {
        required: false,
        type: [String, ]
      },
      loadFormat: {
        required: false,
        type: [String]
      },
      placeholder: {
        required: false,
        type: [String]
      },
      readonly: {
        required: false,
        type: []
      },
      before: {
        required: false,
        type: [String]
      },
      between: {
        required: false,
        type: [String]
      },
      after: {
        required: false,
        type: [String]
      },
      rules: {
        required: false,
        type: [Array, String, Object]
      },
      messages: {
        required: false,
        type: [Object]
      },
      displayError: {
        required: false,
        type: []
      },
    }
  },
  dates: {
    props: {
      name: {
        required: true,
        type: [String, Number]
      },
      type: {
        required: false,
        type: [String]
      },
      addClasses: {
        required: false,
        type: [Object]
      },
      class: {
        required: false,
        type: [String]
      },
      conditions: {
        required: false,
        type: [Array]
      },
      formatData: {
        required: false,
        type: []
      },
      formatLoad: {
        required: false,
        type: []
      },
      submit: {
        required: false,
        type: []
      },
      debounce: {
        required: false,
        type: [Number]
      },
      description: {
        required: false,
        type: [String]
      },
      disabled: {
        required: false,
        type: []
      },
      floating: {
        required: false,
        type: [String]
      },
      id: {
        required: false,
        type: [String]
      },
      info: {
        required: false,
        type: [String]
      },
      label: {
        required: false,
        type: [String]
      },
      mode: {
        required: false,
        type: [String]
      },
      displayFormat: {
        required: false,
        type: [String, ]
      },
      valueFormat: {
        required: false,
        type: [String, ]
      },
      loadFormat: {
        required: false,
        type: [String]
      },
      placeholder: {
        required: false,
        type: [String]
      },
      readonly: {
        required: false,
        type: []
      },
      before: {
        required: false,
        type: [String]
      },
      between: {
        required: false,
        type: [String]
      },
      after: {
        required: false,
        type: [String]
      },
      rules: {
        required: false,
        type: [Array, String, Object]
      },
      messages: {
        required: false,
        type: [Object]
      },
      displayError: {
        required: false,
        type: []
      },
    }
  },
  datetime: {
    props: {
      name: {
        required: true,
        type: [String, Number]
      },
      type: {
        required: false,
        type: [String]
      },
      addClasses: {
        required: false,
        type: [Object]
      },
      class: {
        required: false,
        type: [String]
      },
      conditions: {
        required: false,
        type: [Array]
      },
      formatData: {
        required: false,
        type: []
      },
      formatLoad: {
        required: false,
        type: []
      },
      submit: {
        required: false,
        type: []
      },
      debounce: {
        required: false,
        type: [Number]
      },
      description: {
        required: false,
        type: [String]
      },
      disabled: {
        required: false,
        type: []
      },
      floating: {
        required: false,
        type: [String]
      },
      id: {
        required: false,
        type: [String]
      },
      info: {
        required: false,
        type: [String]
      },
      label: {
        required: false,
        type: [String]
      },
      seconds: {
        required: false,
        type: []
      },
      hour24: {
        required: false,
        type: []
      },
      displayFormat: {
        required: false,
        type: [String, ]
      },
      valueFormat: {
        required: false,
        type: [String, ]
      },
      loadFormat: {
        required: false,
        type: [String]
      },
      placeholder: {
        required: false,
        type: [String]
      },
      readonly: {
        required: false,
        type: []
      },
      before: {
        required: false,
        type: [String]
      },
      between: {
        required: false,
        type: [String]
      },
      after: {
        required: false,
        type: [String]
      },
      rules: {
        required: false,
        type: [Array, String, Object]
      },
      messages: {
        required: false,
        type: [Object]
      },
      displayError: {
        required: false,
        type: []
      },
    }
  },
  file: {
    props: {
      name: {
        required: true,
        type: [String, Number]
      },
      type: {
        required: false,
        type: [String]
      },
      class: {
        required: false,
        type: [String]
      },
      addClasses: {
        required: false,
        type: [Object]
      },
      conditions: {
        required: false,
        type: [Array]
      },
      submit: {
        required: false,
        type: []
      },
      formatData: {
        required: false,
        type: []
      },
      formatLoad: {
        required: false,
        type: []
      },
      debounce: {
        required: false,
        type: [Number]
      },
      default: {
        required: false,
        type: [String, Number]
      },
      description: {
        required: false,
        type: [String]
      },
      disabled: {
        required: false,
        type: []
      },
      drop: {
        required: false,
        type: []
      },
      accept: {
        required: false,
        type: [String, Array]
      },
      clickable: {
        required: false,
        type: []
      },
      auto: {
        required: false,
        type: []
      },
      id: {
        required: false,
        type: [String]
      },
      info: {
        required: false,
        type: [String]
      },
      label: {
        required: false,
        type: [String]
      },
      before: {
        required: false,
        type: [String]
      },
      between: {
        required: false,
        type: [String]
      },
      after: {
        required: false,
        type: [String]
      },
      rules: {
        required: false,
        type: [Array, String, Object]
      },
      messages: {
        required: false,
        type: [Object]
      },
      displayError: {
        required: false,
        type: []
      },
    }
  },
  gallery: {
    props: {
      name: {
        required: true,
        type: [String, Number]
      },
      type: {
        required: false,
        type: [String]
      },
      class: {
        required: false,
        type: [String]
      },
      addClasses: {
        required: false,
        type: [Object]
      },
      conditions: {
        required: false,
        type: [Array]
      },
      formatData: {
        required: false,
        type: []
      },
      formatLoad: {
        required: false,
        type: []
      },
      submit: {
        required: false,
        type: []
      },
      debounce: {
        required: false,
        type: [Number]
      },
      default: {
        required: false,
        type: [String, Number]
      },
      description: {
        required: false,
        type: [String]
      },
      disabled: {
        required: false,
        type: []
      },
      drop: {
        required: false,
        type: []
      },
      info: {
        required: false,
        type: [String]
      },
      label: {
        required: false,
        type: [String]
      },
      accept: {
        required: false,
        type: []
      },
      order: {
        required: false,
        type: [String]
      },
      orderBy: {
        required: false,
        type: [String]
      },
      auto: {
        required: false,
        type: []
      },
      object: {
        required: false,
        type: []
      },
      file: {
        required: false,
        type: []
      },
      storeFile: {
        required: false,
        type: []
      },
      fields: {
        required: false,
        type: []
      },
      before: {
        required: false,
        type: [String]
      },
      between: {
        required: false,
        type: [String]
      },
      after: {
        required: false,
        type: [String]
      },
      sort: {
        required: false,
        type: []
      },
      storeOrder: {
        required: false,
        type: [String]
      },
      rules: {
        required: false,
        type: [Array, String, Object]
      },
      messages: {
        required: false,
        type: [Object]
      },
      displayError: {
        required: false,
        type: []
      },
    }
  },
  group: {
    props: {
      name: {
        required: true,
        type: [String, Number]
      },
      type: {
        required: false,
        type: [String]
      },
      addClasses: {
        required: false,
        type: [Object]
      },
      class: {
        required: false,
        type: [String]
      },
      conditions: {
        required: false,
        type: [Array]
      },
      formatData: {
        required: false,
        type: []
      },
      formatLoad: {
        required: false,
        type: []
      },
      submit: {
        required: false,
        type: []
      },
      description: {
        required: false,
        type: [String]
      },
      info: {
        required: false,
        type: [String]
      },
      label: {
        required: false,
        type: [String]
      },
      before: {
        required: false,
        type: [String]
      },
      between: {
        required: false,
        type: [String]
      },
      after: {
        required: false,
        type: [String]
      },
    }
  },
  hidden: {
    props: {
      name: {
        required: true,
        type: [String, Number]
      },
      type: {
        required: false,
        type: [String]
      },
      conditions: {
        required: false,
        type: [Array]
      },
      submit: {
        required: false,
        type: []
      },
      formatData: {
        required: false,
        type: []
      },
      formatLoad: {
        required: false,
        type: []
      },
      debounce: {
        required: false,
        type: [Number]
      },
      default: {
        required: false,
        type: [String, Number]
      },
      id: {
        required: false,
        type: [String]
      },
      rules: {
        required: false,
        type: [Array, String, Object]
      },
      messages: {
        required: false,
        type: [Object]
      },
      displayError: {
        required: false,
        type: []
      },
    }
  },
  image: {
    props: {
      name: {
        required: true,
        type: [String, Number]
      },
      type: {
        required: false,
        type: [String]
      },
      class: {
        required: false,
        type: [String]
      },
      addClasses: {
        required: false,
        type: [Object]
      },
      conditions: {
        required: false,
        type: [Array]
      },
      submit: {
        required: false,
        type: []
      },
      formatData: {
        required: false,
        type: []
      },
      formatLoad: {
        required: false,
        type: []
      },
      debounce: {
        required: false,
        type: [Number]
      },
      default: {
        required: false,
        type: [String, Number]
      },
      description: {
        required: false,
        type: [String]
      },
      disabled: {
        required: false,
        type: []
      },
      drop: {
        required: false,
        type: []
      },
      id: {
        required: false,
        type: [String]
      },
      info: {
        required: false,
        type: [String]
      },
      label: {
        required: false,
        type: [String]
      },
      before: {
        required: false,
        type: [String]
      },
      between: {
        required: false,
        type: [String]
      },
      after: {
        required: false,
        type: [String]
      },
      rules: {
        required: false,
        type: [Array, String, Object]
      },
      messages: {
        required: false,
        type: [Object]
      },
      displayError: {
        required: false,
        type: []
      },
    }
  },
  key: {
    props: {
      name: {
        required: true,
        type: [String, Number]
      },
      type: {
        required: false,
        type: [String]
      },
      conditions: {
        required: false,
        type: [Array]
      },
      submit: {
        required: false,
        type: []
      },
      formatData: {
        required: false,
        type: []
      },
      formatLoad: {
        required: false,
        type: []
      },
      debounce: {
        required: false,
        type: [Number]
      },
      default: {
        required: false,
        type: [String, Number]
      },
      id: {
        required: false,
        type: [String]
      },
      rules: {
        required: false,
        type: [Array, String, Object]
      },
      messages: {
        required: false,
        type: [Object]
      },
      displayError: {
        required: false,
        type: []
      },
    }
  },
  list: {
    props: {
      name: {
        required: true,
        type: [String, Number]
      },
      type: {
        required: false,
        type: [String]
      },
      class: {
        required: false,
        type: [String]
      },
      addClasses: {
        required: false,
        type: [Object]
      },
      conditions: {
        required: false,
        type: [Array]
      },
      formatData: {
        required: false,
        type: []
      },
      formatLoad: {
        required: false,
        type: []
      },
      submit: {
        required: false,
        type: []
      },
      debounce: {
        required: false,
        type: [Number]
      },
      default: {
        required: false,
        type: [String, Number]
      },
      description: {
        required: false,
        type: [String]
      },
      disabled: {
        required: false,
        type: []
      },
      info: {
        required: false,
        type: [String]
      },
      label: {
        required: false,
        type: [String]
      },
      order: {
        required: false,
        type: [String]
      },
      orderBy: {
        required: false,
        type: [String]
      },
      before: {
        required: false,
        type: [String]
      },
      between: {
        required: false,
        type: [String]
      },
      after: {
        required: false,
        type: [String]
      },
      sort: {
        required: false,
        type: []
      },
      storeOrder: {
        required: false,
        type: [String]
      },
      rules: {
        required: false,
        type: [Array, String, Object]
      },
      messages: {
        required: false,
        type: [Object]
      },
      displayError: {
        required: false,
        type: []
      },
    }
  },
  location: {
    props: {
      name: {
        required: true,
        type: [String, Number]
      },
      addons: {
        required: false,
        type: [Object]
      },
      type: {
        required: false,
        type: [String]
      },
      addClasses: {
        required: false,
        type: [Object]
      },
      class: {
        required: false,
        type: [String]
      },
      conditions: {
        required: false,
        type: [Array]
      },
      submit: {
        required: false,
        type: []
      },
      formatData: {
        required: false,
        type: []
      },
      formatLoad: {
        required: false,
        type: []
      },
      debounce: {
        required: false,
        type: [Number]
      },
      default: {
        required: false,
        type: [String, Number]
      },
      description: {
        required: false,
        type: [String]
      },
      disabled: {
        required: false,
        type: []
      },
      displayKey: {
        required: false,
        type: [String]
      },
      floating: {
        required: false,
        type: [String]
      },
      id: {
        required: false,
        type: [String]
      },
      info: {
        required: false,
        type: [String]
      },
      label: {
        required: false,
        type: [String]
      },
      placeholder: {
        required: false,
        type: [String]
      },
      readonly: {
        required: false,
        type: []
      },
      before: {
        required: false,
        type: [String]
      },
      between: {
        required: false,
        type: [String]
      },
      after: {
        required: false,
        type: [String]
      },
      rules: {
        required: false,
        type: [Array, String, Object]
      },
      messages: {
        required: false,
        type: [Object]
      },
      displayError: {
        required: false,
        type: []
      },
    }
  },
  meta: {
    props: {
      name: {
        required: true,
        type: [String, Number]
      },
      type: {
        required: false,
        type: [String]
      },
      conditions: {
        required: false,
        type: [Array]
      },
      submit: {
        required: false,
        type: []
      },
      formatData: {
        required: false,
        type: []
      },
      formatLoad: {
        required: false,
        type: []
      },
      debounce: {
        required: false,
        type: [Number]
      },
      default: {
        required: false,
        type: [String, Number]
      },
      rules: {
        required: false,
        type: [Array, String, Object]
      },
      messages: {
        required: false,
        type: [Object]
      },
      displayError: {
        required: false,
        type: []
      },
    }
  },
  multifile: {
    props: {
      name: {
        required: true,
        type: [String, Number]
      },
      type: {
        required: false,
        type: [String]
      },
      class: {
        required: false,
        type: [String]
      },
      addClasses: {
        required: false,
        type: [Object]
      },
      conditions: {
        required: false,
        type: [Array]
      },
      formatData: {
        required: false,
        type: []
      },
      formatLoad: {
        required: false,
        type: []
      },
      submit: {
        required: false,
        type: []
      },
      debounce: {
        required: false,
        type: [Number]
      },
      default: {
        required: false,
        type: [String, Number]
      },
      description: {
        required: false,
        type: [String]
      },
      disabled: {
        required: false,
        type: []
      },
      drop: {
        required: false,
        type: []
      },
      info: {
        required: false,
        type: [String]
      },
      label: {
        required: false,
        type: [String]
      },
      accept: {
        required: false,
        type: []
      },
      order: {
        required: false,
        type: [String]
      },
      orderBy: {
        required: false,
        type: [String]
      },
      auto: {
        required: false,
        type: []
      },
      object: {
        required: false,
        type: []
      },
      file: {
        required: false,
        type: []
      },
      fields: {
        required: false,
        type: []
      },
      storeFile: {
        required: false,
        type: []
      },
      before: {
        required: false,
        type: [String]
      },
      between: {
        required: false,
        type: [String]
      },
      after: {
        required: false,
        type: [String]
      },
      sort: {
        required: false,
        type: []
      },
      storeOrder: {
        required: false,
        type: [String]
      },
      rules: {
        required: false,
        type: [Array, String, Object]
      },
      messages: {
        required: false,
        type: [Object]
      },
      displayError: {
        required: false,
        type: []
      },
    }
  },
  multiselect: {
    props: {
      name: {
        required: true,
        type: [String, Number]
      },
      type: {
        required: false,
        type: [String]
      },
      addClasses: {
        required: false,
        type: [Object]
      },
      class: {
        required: false,
        type: [String]
      },
      conditions: {
        required: false,
        type: [Array]
      },
      submit: {
        required: false,
        type: []
      },
      formatData: {
        required: false,
        type: []
      },
      formatLoad: {
        required: false,
        type: []
      },
      debounce: {
        required: false,
        type: [Number]
      },
      default: {
        required: false,
        type: [String, Number]
      },
      description: {
        required: false,
        type: [String]
      },
      disabled: {
        required: false,
        type: []
      },
      floating: {
        required: false,
        type: [String]
      },
      id: {
        required: false,
        type: [String]
      },
      info: {
        required: false,
        type: [String]
      },
      items: {
        required: false,
        type: [Object]
      },
      label: {
        required: false,
        type: [String]
      },
      native: {
        required: false,
        type: []
      },
      search: {
        required: false,
        type: []
      },
      placeholder: {
        required: false,
        type: [String]
      },
      readonly: {
        required: false,
        type: []
      },
      before: {
        required: false,
        type: [String]
      },
      between: {
        required: false,
        type: [String]
      },
      after: {
        required: false,
        type: [String]
      },
      rules: {
        required: false,
        type: [Array, String, Object]
      },
      messages: {
        required: false,
        type: [Object]
      },
      displayError: {
        required: false,
        type: []
      },
    }
  },
  object: {
    props: {
      name: {
        required: true,
        type: [String, Number]
      },
      type: {
        required: false,
        type: [String]
      },
      addClasses: {
        required: false,
        type: [Object]
      },
      class: {
        required: false,
        type: [String]
      },
      conditions: {
        required: false,
        type: [Array]
      },
      formatData: {
        required: false,
        type: []
      },
      formatLoad: {
        required: false,
        type: []
      },
      submit: {
        required: false,
        type: []
      },
      description: {
        required: false,
        type: [String]
      },
      info: {
        required: false,
        type: [String]
      },
      label: {
        required: false,
        type: [String]
      },
      before: {
        required: false,
        type: [String]
      },
      between: {
        required: false,
        type: [String]
      },
      after: {
        required: false,
        type: [String]
      },
    }
  },
  password: {
    props: {
      name: {
        required: true,
        type: [String, Number]
      },
      addons: {
        required: false,
        type: [Object]
      },
      autocomplete: {
        required: false,
        type: []
      },
      type: {
        required: false,
        type: [String]
      },
      addClasses: {
        required: false,
        type: [Object]
      },
      class: {
        required: false,
        type: [String]
      },
      conditions: {
        required: false,
        type: [Array]
      },
      submit: {
        required: false,
        type: []
      },
      formatData: {
        required: false,
        type: []
      },
      formatLoad: {
        required: false,
        type: []
      },
      debounce: {
        required: false,
        type: [Number]
      },
      default: {
        required: false,
        type: [String, Number]
      },
      description: {
        required: false,
        type: [String]
      },
      disabled: {
        required: false,
        type: []
      },
      floating: {
        required: false,
        type: [String]
      },
      id: {
        required: false,
        type: [String]
      },
      info: {
        required: false,
        type: [String]
      },
      label: {
        required: false,
        type: [String]
      },
      placeholder: {
        required: false,
        type: [String]
      },
      readonly: {
        required: false,
        type: []
      },
      before: {
        required: false,
        type: [String]
      },
      between: {
        required: false,
        type: [String]
      },
      after: {
        required: false,
        type: [String]
      },
      rules: {
        required: false,
        type: [Array, String, Object]
      },
      messages: {
        required: false,
        type: [Object]
      },
      displayError: {
        required: false,
        type: []
      },
    }
  },
  radio: {
    props: {
      name: {
        required: true,
        type: [String, Number]
      },
      type: {
        required: false,
        type: [String]
      },
      addClasses: {
        required: false,
        type: [Object]
      },
      class: {
        required: false,
        type: [String]
      },
      conditions: {
        required: false,
        type: [Array]
      },
      submit: {
        required: false,
        type: []
      },
      formatData: {
        required: false,
        type: []
      },
      formatLoad: {
        required: false,
        type: []
      },
      debounce: {
        required: false,
        type: [Number]
      },
      default: {
        required: false,
        type: [String, Number]
      },
      description: {
        required: false,
        type: [String]
      },
      disabled: {
        required: false,
        type: []
      },
      id: {
        required: false,
        type: [String]
      },
      info: {
        required: false,
        type: [String]
      },
      label: {
        required: false,
        type: [String]
      },
      fieldName: {
        required: false,
        type: [String]
      },
      radioValue: {
        required: false,
        type: [, , ]
      },
      before: {
        required: false,
        type: [String]
      },
      between: {
        required: false,
        type: [String]
      },
      after: {
        required: false,
        type: [String]
      },
      text: {
        required: false,
        type: []
      },
      rules: {
        required: false,
        type: [Array, String, Object]
      },
      messages: {
        required: false,
        type: [Object]
      },
      displayError: {
        required: false,
        type: []
      },
    }
  },
  radiogroup: {
    props: {
      name: {
        required: true,
        type: [String, Number]
      },
      type: {
        required: false,
        type: [String]
      },
      addClasses: {
        required: false,
        type: [Object]
      },
      class: {
        required: false,
        type: [String]
      },
      conditions: {
        required: false,
        type: [Array]
      },
      submit: {
        required: false,
        type: []
      },
      formatData: {
        required: false,
        type: []
      },
      formatLoad: {
        required: false,
        type: []
      },
      debounce: {
        required: false,
        type: [Number]
      },
      default: {
        required: false,
        type: [String, Number]
      },
      description: {
        required: false,
        type: [String]
      },
      disabled: {
        required: false,
        type: []
      },
      id: {
        required: false,
        type: [String]
      },
      info: {
        required: false,
        type: [String]
      },
      items: {
        required: false,
        type: [Object]
      },
      label: {
        required: false,
        type: [String]
      },
      before: {
        required: false,
        type: [String]
      },
      between: {
        required: false,
        type: [String]
      },
      after: {
        required: false,
        type: [String]
      },
      rules: {
        required: false,
        type: [Array, String, Object]
      },
      messages: {
        required: false,
        type: [Object]
      },
      displayError: {
        required: false,
        type: []
      },
    }
  },
  select: {
    props: {
      name: {
        required: true,
        type: [String, Number]
      },
      type: {
        required: false,
        type: [String]
      },
      addClasses: {
        required: false,
        type: [Object]
      },
      class: {
        required: false,
        type: [String]
      },
      conditions: {
        required: false,
        type: [Array]
      },
      submit: {
        required: false,
        type: []
      },
      formatData: {
        required: false,
        type: []
      },
      formatLoad: {
        required: false,
        type: []
      },
      debounce: {
        required: false,
        type: [Number]
      },
      default: {
        required: false,
        type: [String, Number]
      },
      description: {
        required: false,
        type: [String]
      },
      disabled: {
        required: false,
        type: []
      },
      floating: {
        required: false,
        type: [String]
      },
      id: {
        required: false,
        type: [String]
      },
      info: {
        required: false,
        type: [String]
      },
      items: {
        required: false,
        type: [Object]
      },
      label: {
        required: false,
        type: [String]
      },
      native: {
        required: false,
        type: []
      },
      search: {
        required: false,
        type: []
      },
      placeholder: {
        required: false,
        type: [String]
      },
      readonly: {
        required: false,
        type: []
      },
      before: {
        required: false,
        type: [String]
      },
      between: {
        required: false,
        type: [String]
      },
      after: {
        required: false,
        type: [String]
      },
      rules: {
        required: false,
        type: [Array, String, Object]
      },
      messages: {
        required: false,
        type: [Object]
      },
      displayError: {
        required: false,
        type: []
      },
    }
  },
  slider: {
    props: {
      name: {
        required: true,
        type: [String, Number]
      },
      type: {
        required: false,
        type: [String]
      },
      addClasses: {
        required: false,
        type: [Object]
      },
      class: {
        required: false,
        type: [String]
      },
      conditions: {
        required: false,
        type: [Array]
      },
      submit: {
        required: false,
        type: []
      },
      formatData: {
        required: false,
        type: []
      },
      formatLoad: {
        required: false,
        type: []
      },
      debounce: {
        required: false,
        type: [Number]
      },
      default: {
        required: false,
        type: [String, Number]
      },
      description: {
        required: false,
        type: [String]
      },
      disabled: {
        required: false,
        type: []
      },
      id: {
        required: false,
        type: [String]
      },
      info: {
        required: false,
        type: [String]
      },
      label: {
        required: false,
        type: [String]
      },
      min: {
        required: false,
        type: []
      },
      max: {
        required: false,
        type: []
      },
      step: {
        required: false,
        type: []
      },
      tooltips: {
        required: false,
        type: []
      },
      merge: {
        required: false,
        type: []
      },
      format: {
        required: false,
        type: []
      },
      orientation: {
        required: false,
        type: []
      },
      direction: {
        required: false,
        type: []
      },
      height: {
        required: false,
        type: []
      },
      readonly: {
        required: false,
        type: []
      },
      before: {
        required: false,
        type: [String]
      },
      between: {
        required: false,
        type: [String]
      },
      after: {
        required: false,
        type: [String]
      },
      rules: {
        required: false,
        type: [Array, String, Object]
      },
      messages: {
        required: false,
        type: [Object]
      },
      displayError: {
        required: false,
        type: []
      },
    }
  },
  static: {
    props: {
      name: {
        required: true,
        type: [String, Number]
      },
      type: {
        required: false,
        type: [String]
      },
      addClasses: {
        required: false,
        type: [Object]
      },
      class: {
        required: false,
        type: [String]
      },
      conditions: {
        required: false,
        type: [Array]
      },
      description: {
        required: false,
        type: [String]
      },
      info: {
        required: false,
        type: [String]
      },
      label: {
        required: false,
        type: [String]
      },
      before: {
        required: false,
        type: [String]
      },
      between: {
        required: false,
        type: [String]
      },
      after: {
        required: false,
        type: [String]
      },
      wrap: {
        required: false,
        type: []
      },
    }
  },
  tags: {
    props: {
      name: {
        required: true,
        type: [String, Number]
      },
      type: {
        required: false,
        type: [String]
      },
      addClasses: {
        required: false,
        type: [Object]
      },
      class: {
        required: false,
        type: [String]
      },
      conditions: {
        required: false,
        type: [Array]
      },
      submit: {
        required: false,
        type: []
      },
      formatData: {
        required: false,
        type: []
      },
      formatLoad: {
        required: false,
        type: []
      },
      debounce: {
        required: false,
        type: [Number]
      },
      default: {
        required: false,
        type: [String, Number]
      },
      description: {
        required: false,
        type: [String]
      },
      disabled: {
        required: false,
        type: []
      },
      floating: {
        required: false,
        type: [String]
      },
      id: {
        required: false,
        type: [String]
      },
      info: {
        required: false,
        type: [String]
      },
      items: {
        required: false,
        type: [Object]
      },
      label: {
        required: false,
        type: [String]
      },
      create: {
        required: false,
        type: []
      },
      placeholder: {
        required: false,
        type: [String]
      },
      readonly: {
        required: false,
        type: []
      },
      before: {
        required: false,
        type: [String]
      },
      between: {
        required: false,
        type: [String]
      },
      after: {
        required: false,
        type: [String]
      },
      rules: {
        required: false,
        type: [Array, String, Object]
      },
      messages: {
        required: false,
        type: [Object]
      },
      displayError: {
        required: false,
        type: []
      },
    }
  },
  textarea: {
    props: {
      name: {
        required: true,
        type: [String, Number]
      },
      addons: {
        required: false,
        type: [Object]
      },
      autogrow: {
        required: false,
        type: []
      },
      rows: {
        required: false,
        type: [Number]
      },
      type: {
        required: false,
        type: [String]
      },
      addClasses: {
        required: false,
        type: [Object]
      },
      class: {
        required: false,
        type: [String]
      },
      conditions: {
        required: false,
        type: [Array]
      },
      submit: {
        required: false,
        type: []
      },
      formatData: {
        required: false,
        type: []
      },
      formatLoad: {
        required: false,
        type: []
      },
      debounce: {
        required: false,
        type: [Number]
      },
      default: {
        required: false,
        type: [String, Number]
      },
      description: {
        required: false,
        type: [String]
      },
      disabled: {
        required: false,
        type: []
      },
      floating: {
        required: false,
        type: [String]
      },
      id: {
        required: false,
        type: [String]
      },
      info: {
        required: false,
        type: [String]
      },
      label: {
        required: false,
        type: [String]
      },
      placeholder: {
        required: false,
        type: [String]
      },
      readonly: {
        required: false,
        type: []
      },
      before: {
        required: false,
        type: [String]
      },
      between: {
        required: false,
        type: [String]
      },
      after: {
        required: false,
        type: [String]
      },
      rules: {
        required: false,
        type: [Array, String, Object]
      },
      messages: {
        required: false,
        type: [Object]
      },
      displayError: {
        required: false,
        type: []
      },
    }
  },
  text: {
    props: {
      name: {
        required: true,
        type: [String, Number]
      },
      addons: {
        required: false,
        type: [Object]
      },
      autocomplete: {
        required: false,
        type: []
      },
      type: {
        required: false,
        type: [String]
      },
      addClasses: {
        required: false,
        type: [Object]
      },
      class: {
        required: false,
        type: [String]
      },
      conditions: {
        required: false,
        type: [Array]
      },
      submit: {
        required: false,
        type: []
      },
      formatData: {
        required: false,
        type: []
      },
      formatLoad: {
        required: false,
        type: []
      },
      debounce: {
        required: false,
        type: [Number]
      },
      default: {
        required: false,
        type: [String, Number]
      },
      description: {
        required: false,
        type: [String]
      },
      disabled: {
        required: false,
        type: []
      },
      floating: {
        required: false,
        type: [String]
      },
      id: {
        required: false,
        type: [String]
      },
      info: {
        required: false,
        type: [String]
      },
      inputType: {
        required: false,
        type: [String]
      },
      label: {
        required: false,
        type: [String]
      },
      placeholder: {
        required: false,
        type: [String]
      },
      readonly: {
        required: false,
        type: []
      },
      before: {
        required: false,
        type: [String]
      },
      between: {
        required: false,
        type: [String]
      },
      after: {
        required: false,
        type: [String]
      },
      rules: {
        required: false,
        type: [Array, String, Object]
      },
      messages: {
        required: false,
        type: [Object]
      },
      displayError: {
        required: false,
        type: []
      },
    }
  },
  time: {
    props: {
      name: {
        required: true,
        type: [String, Number]
      },
      type: {
        required: false,
        type: [String]
      },
      addClasses: {
        required: false,
        type: [Object]
      },
      class: {
        required: false,
        type: [String]
      },
      conditions: {
        required: false,
        type: [Array]
      },
      formatData: {
        required: false,
        type: []
      },
      formatLoad: {
        required: false,
        type: []
      },
      submit: {
        required: false,
        type: []
      },
      debounce: {
        required: false,
        type: [Number]
      },
      description: {
        required: false,
        type: [String]
      },
      disabled: {
        required: false,
        type: []
      },
      floating: {
        required: false,
        type: [String]
      },
      id: {
        required: false,
        type: [String]
      },
      info: {
        required: false,
        type: [String]
      },
      label: {
        required: false,
        type: [String]
      },
      seconds: {
        required: false,
        type: []
      },
      hour24: {
        required: false,
        type: []
      },
      displayFormat: {
        required: false,
        type: [String, ]
      },
      valueFormat: {
        required: false,
        type: [String, ]
      },
      loadFormat: {
        required: false,
        type: [String]
      },
      placeholder: {
        required: false,
        type: [String]
      },
      readonly: {
        required: false,
        type: []
      },
      before: {
        required: false,
        type: [String]
      },
      between: {
        required: false,
        type: [String]
      },
      after: {
        required: false,
        type: [String]
      },
      rules: {
        required: false,
        type: [Array, String, Object]
      },
      messages: {
        required: false,
        type: [Object]
      },
      displayError: {
        required: false,
        type: []
      },
    }
  },
  toggle: {
    props: {
      name: {
        required: true,
        type: [String, Number]
      },
      type: {
        required: false,
        type: [String]
      },
      trueValue: {
        required: false,
        type: [, , ]
      },
      falseValue: {
        required: false,
        type: [, , ]
      },
      addClasses: {
        required: false,
        type: [Object]
      },
      class: {
        required: false,
        type: [String]
      },
      conditions: {
        required: false,
        type: [Array]
      },
      submit: {
        required: false,
        type: []
      },
      formatData: {
        required: false,
        type: []
      },
      formatLoad: {
        required: false,
        type: []
      },
      debounce: {
        required: false,
        type: [Number]
      },
      default: {
        required: false,
        type: [String, Number]
      },
      description: {
        required: false,
        type: [String]
      },
      disabled: {
        required: false,
        type: []
      },
      id: {
        required: false,
        type: [String]
      },
      info: {
        required: false,
        type: [String]
      },
      label: {
        required: false,
        type: [String]
      },
      labels: {
        required: false,
        type: [Object]
      },
      width: {
        required: false,
        type: []
      },
      height: {
        required: false,
        type: []
      },
      speed: {
        required: false,
        type: [Number]
      },
      colors: {
        required: false,
        type: []
      },
      before: {
        required: false,
        type: [String]
      },
      between: {
        required: false,
        type: [String]
      },
      after: {
        required: false,
        type: [String]
      },
      text: {
        required: false,
        type: []
      },
      rules: {
        required: false,
        type: [Array, String, Object]
      },
      messages: {
        required: false,
        type: [Object]
      },
      displayError: {
        required: false,
        type: []
      },
    }
  },
  trix: {
    props: {
      name: {
        required: true,
        type: [String, Number]
      },
      type: {
        required: false,
        type: [String]
      },
      addClasses: {
        required: false,
        type: [Object]
      },
      class: {
        required: false,
        type: [String]
      },
      conditions: {
        required: false,
        type: [Array]
      },
      formatData: {
        required: false,
        type: []
      },
      formatLoad: {
        required: false,
        type: []
      },
      submit: {
        required: false,
        type: []
      },
      debounce: {
        required: false,
        type: [Number]
      },
      default: {
        required: false,
        type: [String, Number]
      },
      description: {
        required: false,
        type: [String]
      },
      disabled: {
        required: false,
        type: []
      },
      id: {
        required: false,
        type: [String]
      },
      info: {
        required: false,
        type: [String]
      },
      label: {
        required: false,
        type: [String]
      },
      placeholder: {
        required: false,
        type: [String]
      },
      before: {
        required: false,
        type: [String]
      },
      between: {
        required: false,
        type: [String]
      },
      after: {
        required: false,
        type: [String]
      },
      accept: {
        required: false,
        type: [Array]
      },
      acceptMimes: {
        required: false,
        type: [Array]
      },
      endpoint: {
        required: false,
        type: [String]
      },
      rules: {
        required: false,
        type: [Array, String, Object]
      },
      messages: {
        required: false,
        type: [Object]
      },
      displayError: {
        required: false,
        type: []
      },
    }
  },
  tTextarea: {
    props: {
      name: {
        required: true,
        type: [String, Number]
      },
      addons: {
        required: false,
        type: [Object]
      },
      autogrow: {
        required: false,
        type: []
      },
      rows: {
        required: false,
        type: [Number]
      },
      type: {
        required: false,
        type: [String]
      },
      addClasses: {
        required: false,
        type: [Object]
      },
      class: {
        required: false,
        type: [String]
      },
      conditions: {
        required: false,
        type: [Array]
      },
      formatData: {
        required: false,
        type: []
      },
      formatLoad: {
        required: false,
        type: []
      },
      submit: {
        required: false,
        type: []
      },
      debounce: {
        required: false,
        type: [Number]
      },
      description: {
        required: false,
        type: [String]
      },
      disabled: {
        required: false,
        type: []
      },
      floating: {
        required: false,
        type: [String]
      },
      id: {
        required: false,
        type: [String]
      },
      info: {
        required: false,
        type: [String]
      },
      label: {
        required: false,
        type: [String]
      },
      placeholder: {
        required: false,
        type: [String]
      },
      readonly: {
        required: false,
        type: []
      },
      before: {
        required: false,
        type: [String]
      },
      between: {
        required: false,
        type: [String]
      },
      after: {
        required: false,
        type: [String]
      },
      messages: {
        required: false,
        type: [Object]
      },
      displayError: {
        required: false,
        type: []
      },
    }
  },
  tText: {
    props: {
      name: {
        required: true,
        type: [String, Number]
      },
      addons: {
        required: false,
        type: [Object]
      },
      autocomplete: {
        required: false,
        type: []
      },
      type: {
        required: false,
        type: [String]
      },
      addClasses: {
        required: false,
        type: [Object]
      },
      class: {
        required: false,
        type: [String]
      },
      conditions: {
        required: false,
        type: [Array]
      },
      formatData: {
        required: false,
        type: []
      },
      formatLoad: {
        required: false,
        type: []
      },
      submit: {
        required: false,
        type: []
      },
      debounce: {
        required: false,
        type: [Number]
      },
      description: {
        required: false,
        type: [String]
      },
      disabled: {
        required: false,
        type: []
      },
      floating: {
        required: false,
        type: [String]
      },
      id: {
        required: false,
        type: [String]
      },
      info: {
        required: false,
        type: [String]
      },
      inputType: {
        required: false,
        type: [String]
      },
      label: {
        required: false,
        type: [String]
      },
      placeholder: {
        required: false,
        type: [String]
      },
      readonly: {
        required: false,
        type: []
      },
      before: {
        required: false,
        type: [String]
      },
      between: {
        required: false,
        type: [String]
      },
      after: {
        required: false,
        type: [String]
      },
      messages: {
        required: false,
        type: [Object]
      },
      displayError: {
        required: false,
        type: []
      },
    }
  },
  tTrix: {
    props: {
      name: {
        required: true,
        type: [String, Number]
      },
      type: {
        required: false,
        type: [String]
      },
      addClasses: {
        required: false,
        type: [Object]
      },
      class: {
        required: false,
        type: [String]
      },
      conditions: {
        required: false,
        type: [Array]
      },
      formatData: {
        required: false,
        type: []
      },
      formatLoad: {
        required: false,
        type: []
      },
      submit: {
        required: false,
        type: []
      },
      debounce: {
        required: false,
        type: [Number]
      },
      description: {
        required: false,
        type: [String]
      },
      disabled: {
        required: false,
        type: []
      },
      id: {
        required: false,
        type: [String]
      },
      info: {
        required: false,
        type: [String]
      },
      label: {
        required: false,
        type: [String]
      },
      placeholder: {
        required: false,
        type: [String]
      },
      before: {
        required: false,
        type: [String]
      },
      between: {
        required: false,
        type: [String]
      },
      after: {
        required: false,
        type: [String]
      },
      accept: {
        required: false,
        type: [Array]
      },
      acceptMimes: {
        required: false,
        type: [Array]
      },
      endpoint: {
        required: false,
        type: [String]
      },
      messages: {
        required: false,
        type: [Object]
      },
      displayError: {
        required: false,
        type: []
      },
    }
  },
}