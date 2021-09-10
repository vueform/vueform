module.exports = {
  AddressElement: {
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
      type: {
        required: 'true',
        default: 'address',
        types: [
          'string',
        ],
        private: false,
      },
      default: {
        required: 'false',
        default: '{}',
        types: [
          'object',
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
      provider: {
        required: 'false',
        default: 'google',
        types: [
          'string',
        ],
        private: false,
      },
      options: {
        required: 'false',
        default: '{}',
        types: [
          'object',
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
      required: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      embed: {
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
      children$Array: {
        types: [
          'array,Element',
        ],
        description: '',
        private: true,
      },
      addressId: {
        types: [
          'string',
        ],
        description: '',
        default: '"address-*"',
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
      locationService: {
        types: [
          'class',
        ],
        description: 'The location service that&quot;s initalized once the component is mounted.',
        default: 'null',
        private: false,
      },
      location: {
        types: [
          'class',
        ],
        description: 'The raw location object of location provider (Google/Algolia).',
        default: 'null',
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
      children$: {
        types: [
          'object,Element',
        ],
        description: '',
        private: false,
      },
      children: {
        types: [
          'object',
        ],
        description: 'Schema of child elements.',
        private: true,
      },
      fields: {
        types: [
          'object',
        ],
        description: 'Fields of the address. By default has the following `text` type elements: `address`, `address2`, `zip`, `city`, `state`, `country`.',
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
      defaultOptions: {
        types: [
          'object',
        ],
        description: 'Default options for flatpickr.',
        default: '{}',
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
      value: {
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
              'object',
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
              'object',
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
      component: {
        description: '',
        private: true,
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
      updateFields: {
        description: 'Updates fields with address data.',
        params: {
          data: {
            types: [
              'object',
            ],
            required: 'false',
            description: 'an object containing address data',
          },
        },
        private: false,
      },
      handleAddressChange: {
        description: 'Handles location service&quot;s address change.',
        params: {
          data: {
            types: [
              'object',
            ],
            required: 'false',
            description: 'an object containing address data',
          },
          raw: {
            types: [
              'object',
            ],
            required: 'false',
            description: 'an object containing raw address data (based on provider)',
          },
        },
        private: false,
      },
      initLocationService: {
        description: 'Initalizes location service.',
        returns: 'void',
        private: false,
      },
      validate: {
        description: 'Validates the element.',
        returns: 'void',
        private: false,
      },
      clean: {
        description: 'Cleans the element.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Resets validators for children.',
        returns: 'void',
        private: false,
      },
      initMessageBag: {
        description: '',
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
    },
  },
  ButtonElement: {
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
      type: {
        required: 'false',
        default: 'button',
        types: [
          'string',
        ],
        private: false,
      },
      buttonLabel: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'object',
          'function',
        ],
        private: false,
      },
      buttonType: {
        required: 'false',
        default: 'button',
        types: [
          'string',
        ],
        private: false,
      },
      buttonClass: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'array',
          'object',
        ],
        private: false,
      },
      disabled: {
        required: 'false',
        default: 'false',
        types: [
          'function',
          'boolean',
        ],
        private: false,
      },
      loading: {
        required: 'false',
        default: 'false',
        types: [
          'function',
          'boolean',
        ],
        private: false,
      },
      href: {
        required: 'false',
        default: '',
        types: [
          'string',
        ],
        private: false,
      },
      target: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      onClick: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      resets: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      submits: {
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
      isButtonLabelComponent: {
        types: [
          'boolean',
        ],
        description: '',
        private: false,
      },
      button: {
        types: [
          'object',
        ],
        description: '',
        private: false,
      },
      isLoading: {
        types: [
          'boolean',
        ],
        description: '',
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
      isDisabled: {
        types: [
          'boolean',
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
      handleClick: {
        description: '',
        returns: 'void',
        params: {
          e: {
            types: [
              'Event',
            ],
            required: 'true',
            description: 'event',
          },
        },
        private: false,
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
    events: {
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
    },
  },
  CheckboxElement: {
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
        default: 'checkbox',
        types: [
          'string',
        ],
        private: false,
      },
      default: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
          'boolean',
          'number',
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
      text: {
        required: 'false',
        default: 'null',
        types: [
          'string',
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
      debounce: {
        required: 'false',
        default: 'null',
        types: [
          'number',
        ],
        private: false,
      },
      trueValue: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
          'string',
          'number',
        ],
        private: false,
      },
      falseValue: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
          'string',
          'number',
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
      check: {
        description: 'Checks the checkbox.',
        returns: 'void',
        params: {
          triggerChange: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the element should trigger `change` event',
          },
        },
        private: false,
      },
      uncheck: {
        description: 'Unhecks the checkbox.',
        returns: 'void',
        params: {
          triggerChange: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the element should trigger `change` event',
          },
        },
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
    },
  },
  CheckboxgroupElement: {
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
        default: 'checkboxgroup',
        types: [
          'string',
        ],
        private: false,
      },
      default: {
        required: 'false',
        default: '[]',
        types: [
          'array',
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
      items: {
        required: 'false',
        default: '{}',
        types: [
          'object',
          'array',
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
      disables: {
        required: 'false',
        default: '[]',
        types: [
          'array',
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
    },
    data: {
      defaultClasses: {
        types: [
          'object',
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
      check: {
        description: 'Checks a checkbox or checkboxes.',
        returns: 'void',
        params: {
          items: {
            types: [
              'array',
              'string',
              'number',
            ],
            required: 'true',
            description: 'key of one or more checkboxes to check.',
          },
        },
        private: false,
      },
      uncheck: {
        description: 'Unchecks a checkbox or checkboxes.',
        returns: 'void',
        params: {
          items: {
            types: [
              'array',
              'string',
              'number',
            ],
            required: 'true',
            description: 'key of one or more checkboxes to uncheck.',
          },
        },
        private: false,
      },
      checkAll: {
        description: 'Checks all checkboxes.',
        returns: 'void',
        private: false,
      },
      uncheckAll: {
        description: 'Checks all checkboxes.',
        returns: 'void',
        private: false,
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
      disableAll: {
        description: 'Disabled all items.',
        returns: 'void',
        private: false,
      },
      enableAll: {
        description: 'Enables all items.',
        returns: 'void',
        private: false,
      },
      disable: {
        description: 'Disables an item or items.',
        returns: 'void',
        params: {
          items: {
            types: [
              'array',
              'string',
              'number',
            ],
            required: 'true',
            description: 'Key of one or more items to disable.',
          },
        },
        private: false,
      },
      enable: {
        description: 'Enables an item or items.',
        returns: 'void',
        params: {
          items: {
            types: [
              'array',
              'string',
              'number',
            ],
            required: 'true',
            description: 'Key of one or more items to enable.',
          },
        },
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
      checkbox: {},
    },
  },
  DateElement: {
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
        default: 'date',
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
          'date',
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
      displayFormat: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      valueFormat: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'boolean',
        ],
        private: false,
      },
      loadFormat: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      date: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        private: false,
      },
      time: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      seconds: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      hour24: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        private: false,
      },
      min: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'date',
        ],
        private: false,
      },
      max: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'date',
        ],
        private: false,
      },
      disables: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        private: false,
      },
      options: {
        required: 'false',
        default: '{}',
        types: [
          'object',
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
      displayDateFormat: {
        description: '',
        private: true,
      },
      valueDateFormat: {
        description: '',
        private: true,
      },
      loadDateFormat: {
        description: '',
        private: true,
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
          'Date',
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
      handleChange: {
        description: 'Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed.',
        returns: 'void',
        private: true,
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
  },
  DatesElement: {
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
        default: 'dates',
        types: [
          'string',
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
      default: {
        required: 'false',
        default: '[]',
        types: [
          'array',
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
      range: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      displayFormat: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      valueFormat: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'boolean',
        ],
        private: false,
      },
      loadFormat: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'boolean',
        ],
        private: false,
      },
      mode: {
        required: 'false',
        default: 'multiple',
        types: [
          'string',
        ],
        private: false,
      },
      min: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'date',
        ],
        private: false,
      },
      max: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'date',
        ],
        private: false,
      },
      disables: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        private: false,
      },
      options: {
        required: 'false',
        default: '{}',
        types: [
          'object',
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
      displayDateFormat: {
        description: '',
        private: true,
      },
      valueDateFormat: {
        description: '',
        private: true,
      },
      loadDateFormat: {
        description: '',
        private: true,
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
          'array',
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
      load: {
        description: '',
        returns: 'void',
        params: {
          value: {
            types: [
              'array',
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
      handleChange: {
        description: 'Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed.',
        returns: 'void',
        private: true,
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
  },
  FileElement: {
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
        default: 'file',
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
          'object',
        ],
        private: false,
      },
      embed: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      image: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      view: {
        required: 'false',
        default: 'null',
        types: [
          'string',
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
      drop: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      accept: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'array',
        ],
        private: false,
      },
      clickable: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        private: false,
      },
      auto: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        private: false,
      },
      methods: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      endpoints: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      params: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      softRemove: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      url: {
        required: 'false',
        default: '/',
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
      onRemove: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      onError: {
        required: 'false',
        default: 'null',
        types: [
          'function',
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
      file: {
        types: [
          'File',
          'object',
          'string',
        ],
        description: '',
        default: 'null',
        private: false,
      },
      hasUploadError: {
        types: [
          'boolean',
        ],
        description: '',
        default: 'false',
        private: false,
      },
      base64: {
        types: [
          'string',
        ],
        description: '',
        default: 'null',
        private: false,
      },
      progress: {
        types: [
          'number',
        ],
        description: '',
        default: '0',
        private: false,
      },
      preparing: {
        types: [
          'boolean',
        ],
        description: '',
        default: 'false',
        private: false,
      },
      previewLoaded: {
        types: [
          'boolean',
        ],
        description: '',
        default: 'false',
        private: false,
      },
      input: {
        types: [
          'HTMLElement',
        ],
        description: '',
        private: false,
      },
      removing: {
        description: '',
        private: true,
      },
      request: {
        description: '',
        private: true,
      },
      axios: {
        description: '',
        private: true,
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
      canDrop: {
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
      stage: {
        types: [
          'number',
        ],
        description: '',
        private: false,
      },
      filename: {
        types: [
          'string',
        ],
        description: '',
        private: false,
      },
      link: {
        types: [
          'string',
        ],
        description: '',
        private: false,
      },
      preview: {
        types: [
          'string',
        ],
        description: '',
        private: false,
      },
      uploaded: {
        types: [
          'boolean',
        ],
        description: '',
        private: false,
      },
      canRemove: {
        types: [
          'boolean',
        ],
        description: '',
        private: false,
      },
      canUploadTemp: {
        types: [
          'boolean',
        ],
        description: '',
        private: false,
      },
      canSelect: {
        types: [
          'boolean',
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
      uploading: {
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
        description: 'Whether the element is `pending`, `debouncing` or `uploading`.',
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
      handleDrop: {
        description: '',
        returns: 'void',
        params: {
          e: {
            types: [
              'Event',
            ],
            required: 'false',
            description: '',
          },
        },
        private: true,
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
      uploadTemp: {
        description: '',
        returns: 'void',
        private: false,
      },
      remove: {
        description: '',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: '',
        returns: 'void',
        private: true,
      },
      loadPreview: {
        description: '',
        returns: 'void',
        private: false,
      },
      handleChange: {
        description: '',
        returns: 'void',
        params: {
          e: {
            types: [
              'Event',
            ],
            required: 'true',
            description: '',
          },
        },
        private: true,
      },
      handleClick: {
        description: 'Triggered when an uploader is clicked.',
        returns: 'void',
        private: true,
      },
      handleUploadTemp: {
        description: '',
        returns: 'void',
        private: true,
      },
      handleRemove: {
        description: '',
        returns: 'void',
        private: true,
      },
      handleAbort: {
        description: '',
        returns: 'void',
        private: true,
      },
      handleError: {
        description: 'Triggered when the trix editor throws an error during file upload (for example not accepted file types). If no event is attached browsers default `alert()` function will be used.',
        returns: 'void',
        params: {
          message: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'message to display.',
          },
          e: {
            types: [
              'Event',
            ],
            required: 'true',
            description: '',
          },
        },
        private: true,
      },
      validate: {
        description: 'Validates the element. File element will only validate for `min`, `max`, `between`, `size`, `mimetypes` and `mimes` rules before the temporary files are uploaded.',
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
      remove: {
        description: 'Remove event',
        params: {
          index: {
            description: 'Index',
            types: [
              'number',
            ]
          },
          value: {
            description: 'Value',
            types: [
              'array',
            ]
          },
       },
      },
      error: {
        description: 'Error event',
        params: {
          message: {
            description: 'Message',
            types: [
              'string',
            ]
          },
          e: {
            description: 'Event',
            types: [
              'Event',
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
      preview: {},
    },
  },
  GroupElement: {
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
      type: {
        required: 'false',
        default: 'group',
        types: [
          'string',
        ],
        private: false,
      },
      default: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      schema: {
        required: 'false',
        default: '{}',
        types: [
          'object',
          'array',
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
      parent: {
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
      value: {
        types: [
          'object',
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
              'object',
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
              'object',
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
      component: {
        description: '',
        private: true,
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
    },
  },
  HiddenElement: {
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
        default: 'hidden',
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
      debounce: {
        required: 'false',
        default: 'null',
        types: [
          'number',
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
      meta: {
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
    },
    computed: {
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
    },
  },
  ListElement: {
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
        default: 'list',
        types: [
          'string',
        ],
        private: false,
      },
      default: {
        required: 'false',
        default: 'undefined',
        types: [
          'array',
        ],
        private: false,
      },
      initial: {
        required: 'false',
        default: '1',
        types: [
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
      order: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      orderBy: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      storeOrder: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      sort: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      min: {
        required: 'false',
        default: '-1',
        types: [
          'number',
        ],
        private: false,
      },
      max: {
        required: 'false',
        default: '-1',
        types: [
          'number',
        ],
        private: false,
      },
      controls: {
        required: 'false',
        default: '{"add":true,"remove":true,"sort":true}',
        types: [
          'object',
        ],
        private: false,
      },
      object: {
        required: 'false',
        default: 'null',
        types: [
          'object',
        ],
        private: false,
      },
      element: {
        required: 'false',
        default: 'null',
        types: [
          'object',
        ],
        private: false,
      },
      onAdd: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      onRemove: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      onSort: {
        required: 'false',
        default: 'null',
        types: [
          'function',
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
      children$Array: {
        types: [
          'array,Element',
        ],
        description: '',
        private: true,
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
      list: {
        types: [
          'HTMLElement',
        ],
        description: '',
        private: false,
      },
      sortable: {
        description: '',
        private: true,
      },
      sorting: {
        types: [
          'boolean',
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
      children$: {
        types: [
          'object,Element',
        ],
        description: '',
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
      hasAdd: {
        types: [
          'boolean',
        ],
        description: '',
        private: false,
      },
      hasRemove: {
        types: [
          'boolean',
        ],
        description: '',
        private: false,
      },
      hasSort: {
        types: [
          'boolean',
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
      data: {
        types: [
          'object',
        ],
        description: '',
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
      orderByName: {
        types: [
          'string',
        ],
        description: '',
        private: false,
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
      prototype: {
        types: [
          'object',
        ],
        description: 'The schema of a child.',
        private: false,
      },
      isObject: {
        types: [
          'boolean',
        ],
        description: 'Determines if the list items are objects.',
        private: false,
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
      isSortable: {
        types: [
          'boolean',
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
      validatorErrors: {
        description: '',
        private: true,
      },
      childrenErrors: {
        description: '',
        private: true,
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
        description: 'The element&quot;s error.',
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
      add: {
        description: '',
        returns: 'void',
        params: {
          value: {
            types: [
              'object',
              'array',
              'string',
              'number',
              'boolean',
            ],
            required: 'false',
            description: ' ',
          },
        },
        private: false,
      },
      remove: {
        description: '',
        returns: 'void',
        params: {
          index: {
            types: [
              'number',
            ],
            required: 'true',
            description: '  ',
          },
        },
        private: false,
      },
      load: {
        description: '',
        private: true,
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
      handleAdd: {
        description: '',
        returns: 'void',
        private: true,
      },
      handleRemove: {
        description: 'Triggered when the user removes a list item or `.remove()` method is invoked.',
        returns: 'void',
        params: {
          index: {
            types: [
              'number',
            ],
            required: 'true',
            description: 'Index of child to be removed.',
          },
        },
        private: true,
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
      component: {
        description: '',
        private: true,
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
      refreshOrderStore: {
        description: 'Helper method used to refresh the element&quot;s value which stores the order.',
        returns: 'void',
        private: true,
      },
      handleSort: {
        description: 'Triggered when the user changes the order of the list items.',
        params: {
          indexes: {
            types: [
              'object',
            ],
            required: 'false',
            description: 'an object containing `newIndex` and `oldIndex`.',
          },
        },
        private: false,
      },
      initSortable: {
        description: '',
        returns: 'void',
        private: false,
      },
      destroySortable: {
        description: '',
        returns: 'void',
        private: false,
      },
      validate: {
        description: 'Validates the element.',
        returns: 'void',
        private: false,
      },
      validateValidators: {
        description: 'Validates the element.',
        returns: 'void',
        private: true,
      },
      validateChildren: {
        description: 'Validates each children.',
        returns: 'void',
        private: true,
      },
      dirt: {
        description: 'Flag the element as dirty.',
        returns: 'void',
        private: false,
      },
      clean: {
        description: 'Cleans the element.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Resets validators for children.',
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
      add: {
        description: 'Add event',
        params: {
          addedValue: {
            description: 'Added value',
            types: [
              'any',
            ]
          },
          index: {
            description: 'Index',
            types: [
              'number',
            ]
          },
          value: {
            description: 'Value',
            types: [
              'array',
            ]
          },
       },
      },
      remove: {
        description: 'Remove event',
        params: {
          index: {
            description: 'Index',
            types: [
              'number',
            ]
          },
          value: {
            description: 'Value',
            types: [
              'array',
            ]
          },
       },
      },
      sort: {
        description: 'Sort event',
        params: {
          value: {
            description: 'Value',
            types: [
              'array',
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
    },
  },
  LocationElement: {
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
        default: 'location',
        types: [
          'string',
        ],
        private: false,
      },
      default: {
        required: 'false',
        default: '{"country":null,"country_code":null,"state":null,"state_code":null,"city":null,"zip":null,"address":null,"formatted_address":null,"lat":null,"lng":null}',
        types: [
          'object',
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
      displayKey: {
        required: 'false',
        default: 'formatted_address',
        types: [
          'string',
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
      provider: {
        required: 'false',
        default: 'google',
        types: [
          'string',
        ],
        private: false,
      },
      options: {
        required: 'false',
        default: '{}',
        types: [
          'object',
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
      locationService: {
        types: [
          'class',
        ],
        description: 'The location service that&quot;s initalized once the component is mounted.',
        default: 'null',
        private: false,
      },
      location: {
        types: [
          'class',
        ],
        description: 'The raw location object of location provider (Google/Algolia).',
        default: 'null',
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
      defaultOptions: {
        types: [
          'object',
        ],
        description: 'Default options for flatpickr.',
        default: '{}',
        private: false,
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
      handleAddressChange: {
        description: 'Handles location service&quot;s address change.',
        params: {
          data: {
            types: [
              'object',
            ],
            required: 'false',
            description: 'an object containing address data',
          },
          raw: {
            types: [
              'object',
            ],
            required: 'false',
            description: 'an object containing raw address data (based on provider)',
          },
        },
        private: false,
      },
      handleLocationBlur: {
        description: '',
        private: true,
      },
      initLocationService: {
        description: 'Initalizes location service.',
        returns: 'void',
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
  },
  MultifileElement: {
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
        default: 'multifile',
        types: [
          'string',
        ],
        private: false,
      },
      default: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        private: false,
      },
      image: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      view: {
        required: 'false',
        default: 'null',
        types: [
          'string',
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
      initial: {
        required: 'false',
        default: '1',
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
      drop: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      accept: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'array',
        ],
        private: false,
      },
      order: {
        required: 'false',
        default: 'ASC',
        types: [
          'string',
        ],
        private: false,
      },
      orderBy: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      auto: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        private: false,
      },
      file: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      storeFile: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      fields: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      sort: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      storeOrder: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      object: {
        required: 'false',
        default: 'null',
        types: [
          'boolean',
        ],
        private: false,
      },
      onAdd: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      onRemove: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      onSort: {
        required: 'false',
        default: 'null',
        types: [
          'function',
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
      children$Array: {
        types: [
          'array,Element',
        ],
        description: '',
        private: true,
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
      list: {
        types: [
          'HTMLElement',
        ],
        description: '',
        private: false,
      },
      sortable: {
        description: '',
        private: true,
      },
      sorting: {
        types: [
          'boolean',
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
      children$: {
        types: [
          'object,Element',
        ],
        description: '',
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
      output: {
        types: [
          'object',
        ],
        description: 'An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`.',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: '',
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
      canDrop: {
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
      preparing: {
        types: [
          'boolean',
        ],
        description: '',
        private: false,
      },
      nullValue: {
        description: '',
        private: true,
      },
      orderByName: {
        types: [
          'string',
        ],
        description: '',
        private: false,
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
      storeFileName: {
        description: '',
        private: true,
      },
      isObject: {
        types: [
          'boolean',
        ],
        description: 'Determines if the list items are objects.',
        private: false,
      },
      prototype: {
        types: [
          'object',
        ],
        description: 'The schema of a child.',
        private: false,
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
      isSortable: {
        types: [
          'boolean',
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
      validatorErrors: {
        description: '',
        private: true,
      },
      childrenErrors: {
        description: '',
        private: true,
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
        description: 'The element&quot;s error.',
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
      add: {
        description: '',
        returns: 'void',
        params: {
          value: {
            types: [
              'object',
              'array',
              'string',
              'number',
              'boolean',
            ],
            required: 'false',
            description: ' ',
          },
        },
        private: false,
      },
      remove: {
        description: '',
        returns: 'void',
        params: {
          index: {
            types: [
              'number',
            ],
            required: 'true',
            description: '  ',
          },
        },
        private: false,
      },
      load: {
        description: '',
        private: true,
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
      handleAdd: {
        description: '',
        returns: 'void',
        private: true,
      },
      handleRemove: {
        description: 'Triggered when the user removes a list item or `.remove()` method is invoked.',
        returns: 'void',
        params: {
          index: {
            types: [
              'number',
            ],
            required: 'true',
            description: 'Index of child to be removed.',
          },
        },
        private: true,
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
      handleDrop: {
        description: '',
        returns: 'void',
        params: {
          e: {
            types: [
              'Event',
            ],
            required: 'false',
            description: '',
          },
        },
        private: true,
      },
      component: {
        description: '',
        private: true,
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
      handleChange: {
        description: '',
        private: true,
      },
      handleClick: {
        description: '',
        private: true,
      },
      refreshOrderStore: {
        description: 'Helper method used to refresh the element&quot;s value which stores the order.',
        returns: 'void',
        private: true,
      },
      handleSort: {
        description: 'Triggered when the user changes the order of the list items.',
        params: {
          indexes: {
            types: [
              'object',
            ],
            required: 'false',
            description: 'an object containing `newIndex` and `oldIndex`.',
          },
        },
        private: false,
      },
      initSortable: {
        description: '',
        returns: 'void',
        private: false,
      },
      destroySortable: {
        description: '',
        returns: 'void',
        private: false,
      },
      validate: {
        description: 'Validates the element.',
        returns: 'void',
        private: false,
      },
      validateValidators: {
        description: 'Validates the element.',
        returns: 'void',
        private: true,
      },
      validateChildren: {
        description: 'Validates each children.',
        returns: 'void',
        private: true,
      },
      dirt: {
        description: 'Flag the element as dirty.',
        returns: 'void',
        private: false,
      },
      clean: {
        description: 'Cleans the element.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Resets validators for children.',
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
      add: {
        description: 'Add event',
        params: {
          addedValue: {
            description: 'Added value',
            types: [
              'any',
            ]
          },
          index: {
            description: 'Index',
            types: [
              'number',
            ]
          },
          value: {
            description: 'Value',
            types: [
              'array',
            ]
          },
       },
      },
      remove: {
        description: 'Remove event',
        params: {
          index: {
            description: 'Index',
            types: [
              'number',
            ]
          },
          value: {
            description: 'Value',
            types: [
              'array',
            ]
          },
       },
      },
      sort: {
        description: 'Sort event',
        params: {
          value: {
            description: 'Value',
            types: [
              'array',
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
    },
  },
  MultiselectElement: {
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
        default: 'multiselect',
        types: [
          'string',
        ],
        private: false,
      },
      default: {
        required: 'false',
        default: '[]',
        types: [
          'array',
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
      items: {
        required: 'false',
        default: '{}',
        types: [
          'object',
          'array',
          'function',
        ],
        private: false,
      },
      search: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      options: {
        required: 'false',
        default: '{}',
        types: [
          'object',
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
      native: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        private: false,
      },
      onSelect: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      onDeselect: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      onSearchChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      onOpen: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      onClose: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
    },
    data: {
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
      nativeItems: {
        types: [
          'array',
        ],
        description: '',
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
      updateItems: {
        description: '',
        returns: 'void',
        params: {
          disable: {
            types: [
              'boolean',
            ],
            required: 'true',
            description: '',
          },
        },
        private: false,
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
      handleSelect: {
        description: 'Triggered when the user selects an option using non-native element.',
        returns: 'void',
        params: {
          option: {
            types: [
              'object',
            ],
            required: 'true',
            description: 'the selected option object.',
          },
        },
        private: true,
      },
      handleDeselect: {
        description: 'Triggered when the user deselects an option using non-native element. Does not trigger when an *other* element gets selected.',
        returns: 'void',
        params: {
          option: {
            types: [
              'object',
            ],
            required: 'true',
            description: 'the deselected option object.',
          },
        },
        private: true,
      },
      handleSearchChange: {
        description: 'Triggered when the user changes the search criteria using non-native element.',
        returns: 'void',
        params: {
          searchQuery: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the current search query.',
          },
        },
        private: true,
      },
      handleOpen: {
        description: 'Triggered when the option list is opened using non-native element.',
        returns: 'void',
        private: true,
      },
      handleClose: {
        description: 'Triggered when the option list is closed using non-native element.',
        returns: 'void',
        private: true,
      },
      handleTag: {
        description: 'Triggered when the user creates a tag using non-native element.',
        returns: 'void',
        params: {
          searchQuery: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the current search query.',
          },
        },
        private: true,
      },
      select: {
        description: 'Selects an option.',
        returns: 'void',
        params: {
          option: {
            types: [
              'str',
              'num',
            ],
            required: 'false',
            description: 'the key of option to select.',
          },
        },
        private: false,
      },
      deselect: {
        description: 'Deselects an option.',
        returns: 'void',
        params: {
          option: {
            types: [
              'str',
              'num',
            ],
            required: 'false',
            description: 'the key of option to deselect.',
          },
        },
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
      select: {
        description: 'Select event',
      },
      deselect: {
        description: 'Select event',
      },
      searchChange: {
        description: 'searchChange event',
      },
      open: {
        description: 'Open event',
      },
      close: {
        description: 'Close event',
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
      beforelist: {},
      afterlist: {},
      multiplelabel: {},
      noresults: {},
      nooptions: {},
      option: {},
    },
  },
  ObjectElement: {
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
      type: {
        required: 'false',
        default: 'object',
        types: [
          'string',
        ],
        private: false,
      },
      default: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      schema: {
        required: 'false',
        default: '{}',
        types: [
          'object',
          'array',
        ],
        private: false,
      },
      embed: {
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
      children$Array: {
        types: [
          'array,Element',
        ],
        description: '',
        private: true,
      },
      defaultClasses: {
        types: [
          'object',
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
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Message bag service.',
        default: '{MessageBag}',
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
      children: {
        types: [
          'object',
        ],
        description: 'Schema of child elements.',
        private: true,
      },
      children$: {
        types: [
          'object,Element',
        ],
        description: '',
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
      value: {
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
              'object',
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
              'object',
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
      component: {
        description: '',
        private: true,
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
      validate: {
        description: 'Validates the element.',
        returns: 'void',
        private: false,
      },
      clean: {
        description: 'Cleans the element.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Resets validators for children.',
        returns: 'void',
        private: false,
      },
      initMessageBag: {
        description: '',
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
    },
  },
  RadioElement: {
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
        default: 'radio',
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
      id: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      fieldName: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      radioValue: {
        required: 'false',
        default: '1',
        types: [
          'boolean',
          'string',
          'number',
        ],
        private: false,
      },
      text: {
        required: 'false',
        default: 'null',
        types: [
          'string',
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
      check: {
        description: 'Checks the radio.',
        returns: 'void',
        params: {
          triggerChange: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the element should trigger `change` event',
          },
        },
        private: false,
      },
      uncheck: {
        description: 'Unhecks the radio.',
        returns: 'void',
        params: {
          triggerChange: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the element should trigger `change` event',
          },
        },
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
    },
  },
  RadiogroupElement: {
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
        default: 'radiogroup',
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
      debounce: {
        required: 'false',
        default: 'null',
        types: [
          'number',
        ],
        private: false,
      },
      disables: {
        required: 'false',
        default: '[]',
        types: [
          'array',
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
      id: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      items: {
        required: 'false',
        default: '{}',
        types: [
          'object',
          'array',
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
      radio: {},
    },
  },
  SelectElement: {
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
        default: 'select',
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
          'object',
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
      items: {
        required: 'false',
        default: '{}',
        types: [
          'object',
          'array',
          'function',
        ],
        private: false,
      },
      native: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        private: false,
      },
      search: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      options: {
        required: 'false',
        default: '{}',
        types: [
          'object',
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
      noOptionsText: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      noResultsText: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      onSelect: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      onDeselect: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      onSearchChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      onOpen: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      onClose: {
        required: 'false',
        default: 'null',
        types: [
          'function',
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
      nativeItems: {
        types: [
          'array',
        ],
        description: '',
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
      updateItems: {
        description: '',
        returns: 'void',
        params: {
          disable: {
            types: [
              'boolean',
            ],
            required: 'true',
            description: '',
          },
        },
        private: false,
      },
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
      handleSelect: {
        description: 'Triggered when the user selects an option using non-native element.',
        returns: 'void',
        params: {
          option: {
            types: [
              'object',
            ],
            required: 'true',
            description: 'the selected option object.',
          },
        },
        private: true,
      },
      handleDeselect: {
        description: 'Triggered when the user deselects an option using non-native element. Does not trigger when an *other* element gets selected.',
        returns: 'void',
        params: {
          option: {
            types: [
              'object',
            ],
            required: 'true',
            description: 'the deselected option object.',
          },
        },
        private: true,
      },
      handleSearchChange: {
        description: 'Triggered when the user changes the search criteria using non-native element.',
        returns: 'void',
        params: {
          searchQuery: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the current search query.',
          },
        },
        private: true,
      },
      handleOpen: {
        description: 'Triggered when the option list is opened using non-native element.',
        returns: 'void',
        private: true,
      },
      handleClose: {
        description: 'Triggered when the option list is closed using non-native element.',
        returns: 'void',
        private: true,
      },
      handleTag: {
        description: 'Triggered when the user creates a tag using non-native element.',
        returns: 'void',
        params: {
          searchQuery: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the current search query.',
          },
        },
        private: true,
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
      select: {
        description: 'Select event',
      },
      deselect: {
        description: 'Select event',
      },
      searchChange: {
        description: 'searchChange event',
      },
      open: {
        description: 'Open event',
      },
      close: {
        description: 'Close event',
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
      beforelist: {},
      afterlist: {},
      singlelabel: {},
      noresults: {},
      nooptions: {},
      option: {},
    },
  },
  SliderElement: {
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
        default: 'slider',
        types: [
          'string',
        ],
        private: false,
      },
      default: {
        required: 'false',
        default: '0',
        types: [
          'number',
          'array',
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
      id: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      min: {
        required: 'false',
        default: '0',
        types: [
          'number',
        ],
        private: false,
      },
      max: {
        required: 'false',
        default: '100',
        types: [
          'number',
        ],
        private: false,
      },
      step: {
        required: 'false',
        default: '1',
        types: [
          'number',
        ],
        private: false,
      },
      tooltips: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        private: false,
      },
      merge: {
        required: 'false',
        default: '-1',
        types: [
          'number',
        ],
        private: false,
      },
      format: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'function',
        ],
        private: false,
      },
      orientation: {
        required: 'false',
        default: 'horizontal',
        types: [
          'string',
        ],
        private: false,
      },
      direction: {
        required: 'false',
        default: 'ltr',
        types: [
          'string',
        ],
        private: false,
      },
      options: {
        required: 'false',
        default: '{}',
        types: [
          'object',
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
      handleChange: {
        description: 'Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed.',
        returns: 'void',
        private: true,
      },
      validate: {
        description: '',
        private: true,
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
    },
  },
  StaticElement: {
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
      type: {
        required: 'false',
        default: 'static',
        types: [
          'string',
        ],
        private: false,
      },
      wrap: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        private: false,
      },
      content: {
        required: 'false',
        default: '',
        types: [
          'string',
          'object',
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
      isHtml: {
        types: [
          'boolean',
        ],
        description: 'Determines if HTML content should be rendered for the element.',
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
    events: {
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
    },
  },
  TTextElement: {
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
        default: 't-text',
        types: [
          'string',
        ],
        private: false,
      },
      default: {
        required: 'false',
        default: 'undefined',
        types: [
          'object',
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
        description: '',
        private: true,
      },
      Validators: {
        description: '',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Message bag service.',
        default: '{MessageBag}',
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
      language: {
        types: [
          'string',
        ],
        description: 'Current language.',
        private: false,
      },
      languages: {
        types: [
          'array',
        ],
        description: 'Available language codes.',
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
        description: '',
        private: true,
      },
      error: {
        description: '',
        private: true,
      },
      validationRules: {
        description: '',
        private: true,
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
          'object',
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
      validateLanguage: {
        description: '',
        private: true,
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
      initState: {
        description: '',
        private: true,
      },
      initMessageBag: {
        description: '',
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
  },
  TTextareaElement: {
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
        default: 't-textarea',
        types: [
          'string',
        ],
        private: false,
      },
      default: {
        required: 'false',
        default: 'null',
        types: [
          'object',
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
      autogrow: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        private: false,
      },
      rows: {
        required: 'false',
        default: '3',
        types: [
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
        description: '',
        private: true,
      },
      Validators: {
        description: '',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Message bag service.',
        default: '{MessageBag}',
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
      language: {
        types: [
          'string',
        ],
        description: 'Current language.',
        private: false,
      },
      languages: {
        types: [
          'array',
        ],
        description: 'Available language codes.',
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
        description: '',
        private: true,
      },
      error: {
        description: '',
        private: true,
      },
      validationRules: {
        description: '',
        private: true,
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
          'object',
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
      autosize: {
        description: 'Refreshes size.',
        returns: 'void',
        private: false,
      },
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
      validateLanguage: {
        description: '',
        private: true,
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
      initState: {
        description: '',
        private: true,
      },
      initMessageBag: {
        description: '',
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
  },
  TTrixElement: {
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
        default: 'tTrix',
        types: [
          'string',
        ],
        private: false,
      },
      default: {
        required: 'false',
        default: 'null',
        types: [
          'object',
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
      id: {
        required: 'false',
        default: 'null',
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
      accept: {
        required: 'false',
        default: 'null',
        types: [
          'array',
        ],
        private: false,
      },
      acceptMimes: {
        required: 'false',
        default: 'null',
        types: [
          'array',
        ],
        private: false,
      },
      endpoint: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      onError: {
        required: 'false',
        default: 'null',
        types: [
          'function',
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
      focused: {
        types: [
          'boolean',
        ],
        description: '',
        private: false,
      },
      state: {
        description: '',
        private: true,
      },
      Validators: {
        description: '',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Message bag service.',
        default: '{MessageBag}',
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
      language: {
        types: [
          'string',
        ],
        description: 'Current language.',
        private: false,
      },
      languages: {
        types: [
          'array',
        ],
        description: 'Available language codes.',
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
      trixEndpoint: {
        types: [
          'string',
        ],
        description: 'Endpoint to be called to upload attachments. Defaults to config&quot;s `config.endpoints.elements`<br>`.trix.attachment`.',
        default: '"..."',
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
        description: '',
        private: true,
      },
      error: {
        description: '',
        private: true,
      },
      validationRules: {
        description: '',
        private: true,
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
          'object',
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
      handleError: {
        description: 'Triggered when the trix editor throws an error during file upload (for example not accepted file types). If no event is attached browsers default `alert()` function will be used.',
        returns: 'void',
        params: {
          message: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'message to display.',
          },
          e: {
            types: [
              'Event',
            ],
            required: 'true',
            description: '',
          },
        },
        private: true,
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
      validateLanguage: {
        description: '',
        private: true,
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
      initState: {
        description: '',
        private: true,
      },
      initMessageBag: {
        description: '',
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
      error: {
        description: 'Error event',
        params: {
          message: {
            description: 'Message',
            types: [
              'string',
            ]
          },
          e: {
            description: 'Event',
            types: [
              'Event',
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
    },
  },
  TagsElement: {
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
        default: 'tags',
        types: [
          'string',
        ],
        private: false,
      },
      default: {
        required: 'false',
        default: '[]',
        types: [
          'array',
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
      items: {
        required: 'false',
        default: '{}',
        types: [
          'object',
          'array',
          'function',
        ],
        private: false,
      },
      search: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      create: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      options: {
        required: 'false',
        default: '{}',
        types: [
          'object',
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
      onSelect: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      onDeselect: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      onSearchChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      onOpen: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      onClose: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      onTag: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
    },
    data: {
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
      nativeItems: {
        types: [
          'array',
        ],
        description: '',
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
      updateItems: {
        description: '',
        returns: 'void',
        params: {
          disable: {
            types: [
              'boolean',
            ],
            required: 'true',
            description: '',
          },
        },
        private: false,
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
      handleSelect: {
        description: 'Triggered when the user selects an option using non-native element.',
        returns: 'void',
        params: {
          option: {
            types: [
              'object',
            ],
            required: 'true',
            description: 'the selected option object.',
          },
        },
        private: true,
      },
      handleDeselect: {
        description: 'Triggered when the user deselects an option using non-native element. Does not trigger when an *other* element gets selected.',
        returns: 'void',
        params: {
          option: {
            types: [
              'object',
            ],
            required: 'true',
            description: 'the deselected option object.',
          },
        },
        private: true,
      },
      handleSearchChange: {
        description: 'Triggered when the user changes the search criteria using non-native element.',
        returns: 'void',
        params: {
          searchQuery: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the current search query.',
          },
        },
        private: true,
      },
      handleOpen: {
        description: 'Triggered when the option list is opened using non-native element.',
        returns: 'void',
        private: true,
      },
      handleClose: {
        description: 'Triggered when the option list is closed using non-native element.',
        returns: 'void',
        private: true,
      },
      handleTag: {
        description: 'Triggered when the user creates a tag using non-native element.',
        returns: 'void',
        params: {
          searchQuery: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the current search query.',
          },
        },
        private: true,
      },
      handleTag: {
        description: 'Triggered when the user creates a tag. Only gets fired if [`create`](#option-create) is `true`.',
        returns: 'void',
        params: {
          searchQuery: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the current search query.',
          },
        },
        private: true,
      },
      select: {
        description: 'Selects an option.',
        returns: 'void',
        params: {
          option: {
            types: [
              'str',
              'num',
            ],
            required: 'false',
            description: 'the key of option to select.',
          },
        },
        private: false,
      },
      deselect: {
        description: 'Deselects an option.',
        returns: 'void',
        params: {
          option: {
            types: [
              'str',
              'num',
            ],
            required: 'false',
            description: 'the key of option to deselect.',
          },
        },
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
      select: {
        description: 'Select event',
      },
      deselect: {
        description: 'Select event',
      },
      searchChange: {
        description: 'searchChange event',
      },
      open: {
        description: 'Open event',
      },
      close: {
        description: 'Close event',
      },
      tag: {
        description: 'Tag event',
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
      beforelist: {},
      afterlist: {},
      noresults: {},
      nooptions: {},
      option: {},
      tag: {},
    },
  },
  TextElement: {
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
  },
  TextareaElement: {
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
        default: 'textarea',
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
      autogrow: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        private: false,
      },
      rows: {
        required: 'false',
        default: '3',
        types: [
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
      autosize: {
        description: 'Refreshes size.',
        returns: 'void',
        private: false,
      },
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
  },
  ToggleElement: {
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
        default: 'toggle',
        types: [
          'string',
        ],
        private: false,
      },
      default: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
          'number',
          'boolean',
        ],
        private: false,
      },
      trueValue: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
          'string',
          'number',
        ],
        private: false,
      },
      falseValue: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
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
      id: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      labels: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      options: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      text: {
        required: 'false',
        default: 'null',
        types: [
          'string',
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
      handleChange: {
        description: 'Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed.',
        returns: 'void',
        private: true,
      },
      check: {
        description: 'Checks the checkbox.',
        returns: 'void',
        params: {
          triggerChange: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the element should trigger `change` event',
          },
        },
        private: false,
      },
      uncheck: {
        description: 'Unhecks the checkbox.',
        returns: 'void',
        params: {
          triggerChange: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the element should trigger `change` event',
          },
        },
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
    },
  },
  TrixElement: {
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
        default: 'trix',
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
      id: {
        required: 'false',
        default: 'null',
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
      accept: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        private: false,
      },
      acceptMimes: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        private: false,
      },
      endpoint: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      onError: {
        required: 'false',
        default: 'null',
        types: [
          'function',
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
      focused: {
        types: [
          'boolean',
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
      trixEndpoint: {
        types: [
          'string',
        ],
        description: 'Endpoint to be called to upload attachments. Defaults to config&quot;s `config.endpoints.elements`<br>`.trix.attachment`.',
        default: '"..."',
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
      handleError: {
        description: 'Triggered when the trix editor throws an error during file upload (for example not accepted file types). If no event is attached browsers default `alert()` function will be used.',
        returns: 'void',
        params: {
          message: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'message to display.',
          },
          e: {
            types: [
              'Event',
            ],
            required: 'true',
            description: '',
          },
        },
        private: true,
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
      error: {
        description: 'Error event',
        params: {
          message: {
            description: 'Message',
            types: [
              'string',
            ]
          },
          e: {
            description: 'Event',
            types: [
              'Event',
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
    },
  },
}