module.exports = {
  TextElement: {
    events: {
      change: {
        description: 'Change event',
        params: {
          newValue: {
            description: 'New value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'Old value',
            types: [
              'string',
            ]
          },
       },
      },
    },
    slots: {
      label: {
        description: 'The label of the element',
        props: {
          el$: {
            description: 'The element&quot;s component',
            types: [
              'component',
            ],
          },
        },
      },
      description: {
        description: 'The description of the element',
        props: {
          el$: {
            description: 'The element&quot;s component',
            types: [
              'component',
            ],
          },
        },
      },
      error: {},
      message: {},
      before: {
        description: 'Text to be rendered before the field',
        props: {
          el$: {
            description: 'The element&quot;s component',
            types: [
              'component',
            ],
          },
        },
      },
      between: {
        description: 'Text to be rendered after the field and before description & error',
        props: {
          el$: {
            description: 'The element&quot;s component',
            types: [
              'component',
            ],
          },
        },
      },
      after: {
        description: 'Text to be rendered the description & error',
        props: {
          el$: {
            description: 'The element&quot;s component',
            types: [
              'component',
            ],
          },
        },
      },
      addonBefore: {
        description: 'The addon to be rendered before the field',
        props: {
          el$: {
            description: 'The element&quot;s component',
            types: [
              'component',
            ],
          },
        },
      },
      addonAfter: {
        description: 'The addon to be rendered after the field',
        props: {
          el$: {
            description: 'The element&quot;s component',
            types: [
              'component',
            ],
          },
        },
      },
    },
    props: {
      name: {
        required: 'true',
        default: 'undefined',
        types: [
          'string',
          'number',
        ],
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      layout: {
        required: 'false',
        default: 'ElementLayout',
        types: [
          'string',
          'object',
          'boolean',
        ],
        private: false,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'array',
          'object',
        ],
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      columns: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      overrideComponents: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      label: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'object',
          'function',
        ],
        private: false,
      },
      before: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      between: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      after: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        private: false,
      },
      rules: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'string',
          'object',
        ],
        private: false,
      },
      messages: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      type: {
        required: 'false',
        default: 'text',
        types: [
          'string',
        ],
        private: false,
      },
      default: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'number',
        ],
        private: false,
      },
      addons: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      autocomplete: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'number',
        ],
        private: false,
      },
      debounce: {
        required: 'false',
        default: 'null',
        types: [
          'number',
        ],
        private: false,
      },
      disabled: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      floating: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      id: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      inputType: {
        required: 'false',
        default: 'text',
        types: [
          'string',
        ],
        private: false,
      },
      placeholder: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      readonly: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by other components, like tabs or steps steps.',
        default: 'true',
        private: false,
      },
      defaultClasses: {
        types: [
          'object',
        ],
        description: '',
        private: false,
      },
      localDisabled: {
        types: [
          'boolean',
          'null',
        ],
        description: '',
        private: false,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: false,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: false,
      },
      input: {
        types: [
          'HTMLElement',
        ],
        description: '',
        private: false,
      },
      state: {
        types: [
          'object',
        ],
        description: 'Helper property used to store the element states.',
        default: '{}',
        private: true,
      },
      Validators: {
        types: [
          'array',
        ],
        description: 'An array containing all the validators of the element.',
        default: '[]',
        private: false,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Message bag service.',
        default: '{MessageBag}',
        private: false,
      },
      initialValue: {
        types: [
          'any',
        ],
        description: '',
        private: false,
      },
      internalValue: {
        types: [
          'any',
        ],
        description: '',
        private: false,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with `.show()` / `.hide()` methods.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      hasAddon: {
        types: [
          'boolean',
        ],
        description: 'Helper property used to determine internally if the element has any addons.',
        private: false,
      },
      el$: {
        types: [
          'object,Element',
        ],
        description: '',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: '',
        private: false,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Determines if the element&quot;s value is a file.',
        private: false,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Determines if the element&quot;s value is an array.',
        private: false,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Determines if the element&quot;s value is an image.',
        private: false,
      },
      mainClass: {
        types: [
          'string',
        ],
        description: 'Class of the element&quot;s outermost DOM. Can use Vue syntaxes (string, array, object).',
        private: false,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether all element conditions are met (if any).',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: '',
        private: false,
      },
      output: {
        types: [
          'object',
        ],
        description: 'An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`.',
        private: false,
      },
      defaultValue: {
        types: [
          'string',
          'number',
        ],
        description: 'The default value of the element.',
        private: false,
      },
      isDisabled: {
        types: [
          'boolean',
        ],
        description: '',
        private: false,
      },
      empty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has no value filled in.',
        private: false,
      },
      fieldId: {
        types: [
          'string',
        ],
        description: '',
        private: false,
      },
      genericName: {
        types: [
          'string',
        ],
        description: 'Helper property used to determine a generic name for the element.',
        private: false,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Helper property used to determine internally if a label should be rendered for the element.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'object',
        ],
        description: '',
        private: false,
      },
      nullValue: {
        description: '',
        private: true,
      },
      parent: {
        description: '',
        private: true,
      },
      path: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax.',
        private: false,
      },
      dataPath: {
        types: [
          'string',
        ],
        description: '',
        private: false,
      },
      flat: {
        description: '',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Returns slots for the element. Setting the value as an object will merge the current slots with the provided values.',
        private: false,
      },
      fieldSlots: {
        description: '',
        private: true,
      },
      elementSlotProps: {
        types: [
          'object',
        ],
        description: '',
        private: false,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&quot;s value has been modified by the user.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&quot;s input has already been validated at least once.',
        private: false,
      },
      invalid: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any failing rules.',
        private: false,
      },
      pending: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any async rules in progress.',
        private: false,
      },
      debouncing: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has an ongoing debounce.',
        private: false,
      },
      busy: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is `pending` or `debouncing`.',
        private: false,
      },
      errors: {
        types: [
          'array',
        ],
        description: 'List of errors of failing rules.',
        private: false,
      },
      error: {
        types: [
          'string',
        ],
        description: 'The first error that should be displayed under the element.',
        private: false,
      },
      validationRules: {
        types: [
          'string',
          'array',
        ],
        description: '',
        private: false,
      },
      value: {
        types: [
          'any',
        ],
        description: '',
        private: false,
      },
      model: {
        types: [
          'any',
        ],
        description: '',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&quot;s `false` if `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
    },
    methods: {
      activate: {
        description: 'Sets the `active` property of the element to `true`.',
        returns: 'void',
        private: true,
      },
      deactivate: {
        description: 'Sets the `active` property of the element to `false`.',
        returns: 'void',
        private: true,
      },
      load: {
        description: '',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              'number',
            ],
            required: 'true',
            description: 'The value to be loaded.',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'Whether the loaded value should be formatted with `formatLoad` before applying values to the element. Default: `false`.',
          },
        },
        private: false,
      },
      update: {
        description: '',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              'number',
            ],
            required: 'true',
            description: 'The value to update the field with.',
          },
        },
        private: false,
      },
      clear: {
        description: '',
        returns: 'void',
        private: false,
      },
      reset: {
        description: '',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: '',
        returns: 'void',
        private: true,
      },
      disable: {
        description: 'Disabled the field.',
        returns: 'void',
        private: false,
      },
      enable: {
        description: 'Enables the field.',
        returns: 'void',
        private: false,
      },
      on: {
        description: 'Adds a listener for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'event to listen for.',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered. The `this` variable refers to the component the listener is set for.',
          },
        },
        private: false,
      },
      off: {
        description: 'Removes all listeners for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'event to remove the listeners for.',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires an event.',
        returns: 'any',
        private: false,
      },
      handleInput: {
        description: 'Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed.',
        private: false,
      },
      validate: {
        description: '',
        returns: 'void',
        private: false,
      },
      dirt: {
        description: 'Flag the element as dirty.',
        returns: 'void',
        private: false,
      },
      clean: {
        description: 'Flag the element as non dirty.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Set the validated state to false.',
        returns: 'void',
        private: false,
      },
      initMessageBag: {
        description: 'Initalizes messageBag service.',
        returns: 'void',
        private: true,
      },
      initValidation: {
        description: 'Initalizes validators.',
        returns: 'void',
        private: true,
      },
      hide: {
        description: 'Sets the `hidden` property of the element to `false`.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Sets the `hidden` property of the element to `true`.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        description: '',
        private: true,
      },
      theme: {
        description: '',
        private: true,
      },
    },
  },
}