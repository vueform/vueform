export default {
  address: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columnsClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
      providerOptions: {
        required: false,
        type: [Object],
        default: undefined
      },
    },
    slots: ['label', 'description', 'message', 'before', 'between', 'after'],
    events: ['change'],
  },
  button: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columnsClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
    },
    slots: ['label', 'description', 'before', 'between', 'after'],
    events: [],
  },
  checkbox: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columnsClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
    },
    slots: ['label', 'description', 'error', 'message', 'before', 'between', 'after'],
    events: ['change'],
  },
  checkboxgroup: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columnsClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
      disabledItems: {
        required: false,
        type: [Array],
        default: undefined
      },
    },
    slots: ['label', 'description', 'error', 'message', 'before', 'between', 'after', 'checkbox'],
    events: ['change'],
  },
  date: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columnsClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
    },
    slots: ['label', 'description', 'error', 'message', 'before', 'between', 'after', 'addonBefore', 'addonAfter'],
    events: ['change'],
  },
  dates: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columnsClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
    },
    slots: ['label', 'description', 'error', 'message', 'before', 'between', 'after', 'addonBefore', 'addonAfter'],
    events: ['change'],
  },
  file: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columnsClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
      fileMethods: {
        required: false,
        type: [Object],
        default: undefined
      },
      fileEndpoints: {
        required: false,
        type: [Object],
        default: undefined
      },
      fileUrl: {
        required: false,
        type: [String],
        default: undefined
      },
    },
    slots: ['label', 'description', 'error', 'message', 'before', 'between', 'after', 'preview'],
    events: ['change', 'remove', 'error'],
  },
  group: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columnsClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
    },
    slots: ['label', 'description', 'message', 'before', 'between', 'after'],
    events: ['change'],
  },
  hidden: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      components: {
        required: false,
        type: [Object],
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
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columnsClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
    },
    slots: ['label', 'description', 'error', 'message', 'before', 'between', 'after'],
    events: ['change', 'add', 'remove', 'sort'],
  },
  location: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columnsClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
      providerOptions: {
        required: false,
        type: [Object],
        default: undefined
      },
    },
    slots: ['label', 'description', 'error', 'message', 'before', 'between', 'after', 'addonBefore', 'addonAfter'],
    events: ['change'],
  },
  multifile: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columnsClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
    },
    slots: ['label', 'description', 'error', 'message', 'before', 'between', 'after'],
    events: ['change', 'add', 'remove', 'sort'],
  },
  multiselect: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columnsClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
    },
    slots: ['label', 'description', 'error', 'message', 'before', 'between', 'after', 'beforelist', 'afterlist', 'multiplelabel', 'noresults', 'nooptions', 'option'],
    events: ['change', 'select', 'deselect', 'searchChange', 'open', 'close'],
  },
  object: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columnsClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
    },
    slots: ['label', 'description', 'message', 'before', 'between', 'after'],
    events: ['change'],
  },
  radio: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columnsClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
    },
    slots: ['label', 'description', 'error', 'message', 'before', 'between', 'after'],
    events: ['change'],
  },
  radiogroup: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columnsClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
    },
    slots: ['label', 'description', 'error', 'message', 'before', 'between', 'after', 'radio'],
    events: ['change'],
  },
  select: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columnsClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
    },
    slots: ['label', 'description', 'error', 'message', 'before', 'between', 'after', 'beforelist', 'afterlist', 'singlelabel', 'noresults', 'nooptions', 'option'],
    events: ['change', 'select', 'deselect', 'searchChange', 'open', 'close'],
  },
  slider: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columnsClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
    },
    slots: ['label', 'description', 'error', 'message', 'before', 'between', 'after'],
    events: ['change'],
  },
  static: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columnsClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
    },
    slots: ['label', 'description', 'before', 'between', 'after'],
    events: [],
  },
  tags: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columnsClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
    },
    slots: ['label', 'description', 'error', 'message', 'before', 'between', 'after', 'beforelist', 'afterlist', 'noresults', 'nooptions', 'option', 'tag'],
    events: ['change', 'select', 'deselect', 'searchChange', 'open', 'close', 'tag'],
  },
  textarea: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columnsClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
    },
    slots: ['label', 'description', 'error', 'message', 'before', 'between', 'after', 'addonBefore', 'addonAfter'],
    events: ['change'],
  },
  text: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columnsClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
    },
    slots: ['label', 'description', 'error', 'message', 'before', 'between', 'after', 'addonBefore', 'addonAfter'],
    events: ['change'],
  },
  toggle: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columnsClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
    },
    slots: ['label', 'description', 'error', 'message', 'before', 'between', 'after'],
    events: ['change'],
  },
  trix: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columnsClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
    },
    slots: ['label', 'description', 'error', 'message', 'before', 'between', 'after'],
    events: ['change', 'error'],
  },
  tTextarea: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columnsClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
      defaultValue: {
        required: false,
        type: [Object, String, Number],
        default: undefined
      },
    },
    slots: ['label', 'description', 'error', 'message', 'before', 'between', 'after', 'addonBefore', 'addonAfter'],
    events: ['change'],
  },
  tText: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columnsClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
      defaultValue: {
        required: false,
        type: [Object, String, Number],
        default: undefined
      },
    },
    slots: ['label', 'description', 'error', 'message', 'before', 'between', 'after', 'addonBefore', 'addonAfter'],
    events: ['change'],
  },
  tTrix: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      classes: {
        required: false,
        type: [Object],
        default: undefined
      },
      columnsClasses: {
        required: false,
        type: [Object],
        default: undefined
      },
      components: {
        required: false,
        type: [Object],
        default: undefined
      },
      defaultValue: {
        required: false,
        type: [Object, String, Number],
        default: undefined
      },
    },
    slots: ['label', 'description', 'error', 'message', 'before', 'between', 'after'],
    events: ['change', 'error'],
  },
}