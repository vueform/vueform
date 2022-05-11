module.exports = {
  ButtonElement: {
    props: {
      name: {
        required: 'true',
        default: 'undefined',
        types: [
          'string',
          'number',
        ],
        required: true,
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
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
        required: false,
        private: true,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      removeClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClass: {
        required: 'false',
        default: 'null',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      removeClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      presets: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      view: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      views: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      size: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      templates: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      infoPosition: {
        required: 'false',
        default: 'right',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      type: {
        required: 'false',
        default: 'button',
        types: [
          'string',
        ],
        required: false,
        private: true,
      },
      buttonLabel: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'object',
          'function',
        ],
        required: false,
        private: false,
      },
      buttonType: {
        required: 'false',
        default: 'button',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      id: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      disabled: {
        required: 'false',
        default: 'false',
        types: [
          'function',
          'boolean',
        ],
        required: false,
        private: false,
      },
      loading: {
        required: 'false',
        default: 'false',
        types: [
          'function',
          'boolean',
        ],
        required: false,
        private: false,
      },
      href: {
        required: 'false',
        default: '',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      target: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      onClick: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      resets: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      submits: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      secondary: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      danger: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      mounted: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has been already mounted.',
        default: 'true',
        private: false,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#method-show) or [`hide()`](#method-hide) methods.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: true,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: true,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: true,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: true,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: true,
      },
      isButtonLabelComponent: {
        types: [
          'boolean',
        ],
        description: 'Whether the button&apos;s label is a component.',
        private: true,
      },
      button: {
        types: [
          'object',
        ],
        description: 'Attributes of the button.',
        private: true,
      },
      isLoading: {
        types: [
          'boolean',
        ],
        description: 'Whether the button is in loading state.',
        private: false,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'The component&apos;s classes.',
        private: false,
      },
      classesInstance: {
        types: [
          'MergeClasses',
        ],
        description: 'The classes instance (for testing purpose).',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether no [`conditions`](#option-conditions) are defined or they are all fulfilled.',
        private: false,
      },
      isDisabled: {
        types: [
          'boolean',
        ],
        description: 'Whether the button is disabled.',
        private: false,
      },
      fieldId: {
        types: [
          'string',
        ],
        description: 'The `id` of the <%field%>. If [`id`](#option-id) is not provided [`path`](#option-path) will be used.',
        private: false,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`label`](#option-label) option, a [#label](#slot-label) slot or `Vueform` component&apos;s [`forceLabels`](vueform#option-force-labels) option is `true`.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      path: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax.',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      Templates: {
        types: [
          'object',
        ],
        description: 'The list of templates available to the element.',
        private: true,
      },
      template: {
        types: [
          'object',
        ],
        description: 'The component&apos;s template.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
      Size: {
        types: [
          'string',
        ],
        description: 'The resolved size of the element and all of its child components.',
        private: false,
      },
      View: {
        types: [
          'string',
        ],
        description: 'The name of the resolved view for the component and the default view for its child components. Child component views can be overridden with [`views`](#option-views) option. This one should be used to determine the component&apos;s view in class functions.',
        private: false,
      },
      Views: {
        types: [
          'object',
        ],
        description: 'The name of the views for the components.',
        private: true,
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
        description: 'Handles the button&apos;s click event.',
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
        private: true,
      },
      updateConditions: {
        description: 'Updates element conditions after they have been changed.',
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
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
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
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires and emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#method-hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form&apos;s component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default templates and classes.',
        private: false,
      },
    },
    events: {
      'beforeCreate': {
        description: 'Triggered in beforeCreate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'created': {
        description: 'Triggered in created hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeMount': {
        description: 'Triggered in beforeMount hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'mounted': {
        description: 'Triggered in mounted hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUpdate': {
        description: 'Triggered in beforeUpdate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'updated': {
        description: 'Triggered in updated hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUnmount': {
        description: 'Triggered in beforeUnmount (or beforeDestroy in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'unmounted': {
        description: 'Triggered in unmounted (or destroyed in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
    },
    slots: {
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'default': {
        description: 'Renders the button&apos;s label.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
    },
    views: [],
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
        required: true,
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
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
        required: false,
        private: true,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      removeClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClass: {
        required: 'false',
        default: 'null',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      removeClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      presets: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      view: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      views: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      size: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      templates: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      infoPosition: {
        required: 'false',
        default: 'right',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      messages: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      fieldName: {
        required: 'false',
        default: 'name|label',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      type: {
        required: 'false',
        default: 'checkbox',
        types: [
          'string',
        ],
        required: false,
        private: true,
      },
      default: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
          'boolean',
          'number',
        ],
        required: false,
        private: false,
      },
      id: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      text: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      disabled: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
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
        required: false,
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
        required: false,
        private: false,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      mounted: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has been already mounted.',
        default: 'true',
        private: false,
      },
      localDisabled: {
        types: [
          'boolean',
          'null',
        ],
        description: 'Helper to store whether the element is disabled via api (with .disable()).',
        default: 'null',
        private: true,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      input: {
        types: [
          'HTMLElement',
        ],
        description: 'The main input field of the element.',
        private: false,
      },
      state: {
        types: [
          'object',
        ],
        description: 'Helper property used to store the element states.',
        default: '{ dirty: false, validate: true }',
        private: true,
      },
      Validators: {
        types: [
          'array,Validator',
        ],
        description: 'An array containing all the validators of the element.',
        default: '[]',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Instance of MessageBag service. Custom errors and messages [can be added](/docs/1.x/validating-elements#custom-errors-and-messages).',
        default: 'MessageBag',
        private: false,
      },
      initialValue: {
        types: [
          'any',
        ],
        description: 'The initial value of the element.',
        private: true,
      },
      internalValue: {
        types: [
          'any',
        ],
        description: 'The store for the value of the element when we&apos;re not using external data (form&apos;s `v-model`).',
        private: true,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#method-show) or [`hide()`](#method-hide) methods.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: true,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: true,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: true,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: true,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: true,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'The component&apos;s classes.',
        private: false,
      },
      classesInstance: {
        types: [
          'MergeClasses',
        ],
        description: 'The classes instance (for testing purpose).',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether no [`conditions`](#option-conditions) are defined or they are all fulfilled.',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of the element in `{[name]: value}` value format. This gets merged with the parent component&apos;s data.',
        private: false,
      },
      requestData: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`submit`](#option-submit) is not disabled and [`available`](#property-available) is `true` (has no [`conditions`](#option-conditions) or they are fulfilled).',
        private: false,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
      },
      isDisabled: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is disabled.',
        private: false,
      },
      fieldId: {
        types: [
          'string',
        ],
        description: 'The `id` of the <%field%>. If [`id`](#option-id) is not provided [`path`](#option-path) will be used.',
        private: false,
      },
      genericName: {
        types: [
          'string',
        ],
        description: 'The generic name of the element constructed from label / floating or element name.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`label`](#option-label) option, a [#label](#slot-label) slot or `Vueform` component&apos;s [`forceLabels`](vueform#option-force-labels) option is `true`.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      nullValue: {
        types: [
          'any',
        ],
        description: 'The null value of the element.',
        private: true,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
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
        description: 'The path of the element&apos;s data using dot `.` syntax.',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      Templates: {
        types: [
          'object',
        ],
        description: 'The list of templates available to the element.',
        private: true,
      },
      template: {
        types: [
          'object',
        ],
        description: 'The component&apos;s template.',
        private: false,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value was modified.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was already validated at least once.',
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
      busy: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is `pending`.',
        private: false,
      },
      errors: {
        types: [
          'array',
        ],
        description: 'All the errors of `MessageBag`.',
        private: false,
      },
      error: {
        types: [
          'string',
        ],
        description: 'The first error of `MessageBag`.',
        private: false,
      },
      validationRules: {
        types: [
          'string',
          'array',
        ],
        description: 'The element&apos;s validation rules.',
        private: true,
      },
      isDanger: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has errors.',
        private: false,
      },
      isSuccess: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has been filled in successfully.',
        private: false,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      model: {
        types: [
          'any',
        ],
        description: 'Intermediary value between element&apos;s value and field&apos;s `v-model`. It is required when we need to transform the value format between the element and its field.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
      Size: {
        types: [
          'string',
        ],
        description: 'The resolved size of the element and all of its child components.',
        private: false,
      },
      View: {
        types: [
          'string',
        ],
        description: 'The name of the resolved view for the component and the default view for its child components. Child component views can be overridden with [`views`](#option-views) option. This one should be used to determine the component&apos;s view in class functions.',
        private: false,
      },
      Views: {
        types: [
          'object',
        ],
        description: 'The name of the views for the components.',
        private: true,
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
      updateConditions: {
        description: 'Updates element conditions after they have been changed.',
        returns: 'void',
        private: true,
      },
      load: {
        description: 'Loads value to the element using optional [`formatLoad`](#option-format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`formatLoad`](#option-format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#method-load), only that it can\&apos;t format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`default`](#option-default) (or empty if `default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: 'Prepares the element.',
        returns: 'void',
        private: true,
      },
      disable: {
        description: 'Disables the element.',
        returns: 'void',
        private: false,
      },
      enable: {
        description: 'Enables the element even if it is disabled by [`disabled`](#disabled) option.',
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
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
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
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires and emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      check: {
        description: 'Checks the checkbox.',
        returns: 'void',
        private: false,
      },
      uncheck: {
        description: 'Unchecks the checkbox.',
        returns: 'void',
        private: false,
      },
      validate: {
        description: 'Checks each validation rule for the element (async).',
        returns: 'void',
        private: false,
      },
      dirt: {
        description: 'Flag the element as dirty.',
        returns: 'void',
        private: true,
      },
      clean: {
        description: 'Removes the element&apos;s `dirty` state.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Sets the validators to default state.',
        returns: 'void',
        private: false,
      },
      initMessageBag: {
        description: 'Initalizes MessageBag service.',
        returns: 'void',
        private: true,
      },
      initValidation: {
        description: 'Initalizes validators.',
        returns: 'void',
        private: true,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#method-hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form&apos;s component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default templates and classes.',
        private: false,
      },
    },
    events: {
      'change': {
        description: 'Triggered when the element&apos;s value is changed.',
        params: {
          newValue: {
            description: 'the new value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'the old value',
            types: [
              'string',
            ]
          },
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeCreate': {
        description: 'Triggered in beforeCreate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'created': {
        description: 'Triggered in created hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeMount': {
        description: 'Triggered in beforeMount hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'mounted': {
        description: 'Triggered in mounted hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUpdate': {
        description: 'Triggered in beforeUpdate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'updated': {
        description: 'Triggered in updated hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUnmount': {
        description: 'Triggered in beforeUnmount (or beforeDestroy in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'unmounted': {
        description: 'Triggered in unmounted (or destroyed in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
    },
    slots: {
      'default': {
        description: 'Renders a label for the checkbox.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
    },
    views: [],
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
        required: true,
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
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
        required: false,
        private: true,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      removeClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClass: {
        required: 'false',
        default: 'null',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      removeClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      presets: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      view: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      views: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      size: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      templates: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      infoPosition: {
        required: 'false',
        default: 'right',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      messages: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      fieldName: {
        required: 'false',
        default: 'name|label',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      type: {
        required: 'false',
        default: 'checkboxgroup',
        types: [
          'string',
        ],
        required: false,
        private: true,
      },
      default: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      id: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      items: {
        required: 'false',
        default: '{}',
        types: [
          'object',
          'array',
          'function',
          'string',
        ],
        required: false,
        private: false,
      },
      disabled: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      disables: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      mounted: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has been already mounted.',
        default: 'true',
        private: false,
      },
      disabledItems: {
        types: [
          'array',
        ],
        description: 'List of option keys to be disabled.',
        default: '[]',
        private: true,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      state: {
        types: [
          'object',
        ],
        description: 'Helper property used to store the element states.',
        default: '{ dirty: false, validate: true }',
        private: true,
      },
      Validators: {
        types: [
          'array,Validator',
        ],
        description: 'An array containing all the validators of the element.',
        default: '[]',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Instance of MessageBag service. Custom errors and messages [can be added](/docs/1.x/validating-elements#custom-errors-and-messages).',
        default: 'MessageBag',
        private: false,
      },
      initialValue: {
        types: [
          'any',
        ],
        description: 'The initial value of the element.',
        private: true,
      },
      internalValue: {
        types: [
          'any',
        ],
        description: 'The store for the value of the element when we&apos;re not using external data (form&apos;s `v-model`).',
        private: true,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#method-show) or [`hide()`](#method-hide) methods.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      resolvedOptions: {
        types: [
          'array',
        ],
        description: 'Contains the available items. If [`items`](#option-items) are async this contains the resolved items.',
        private: false,
      },
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: true,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: true,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: true,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: true,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: true,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'The component&apos;s classes.',
        private: false,
      },
      classesInstance: {
        types: [
          'MergeClasses',
        ],
        description: 'The classes instance (for testing purpose).',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether no [`conditions`](#option-conditions) are defined or they are all fulfilled.',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of the element in `{[name]: value}` value format. This gets merged with the parent component&apos;s data.',
        private: false,
      },
      requestData: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`submit`](#option-submit) is not disabled and [`available`](#property-available) is `true` (has no [`conditions`](#option-conditions) or they are fulfilled).',
        private: false,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
      },
      isDisabled: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is disabled.',
        private: false,
      },
      fieldId: {
        types: [
          'string',
        ],
        description: 'The `id` of the <%field%>. If [`id`](#option-id) is not provided [`path`](#option-path) will be used.',
        private: false,
      },
      genericName: {
        types: [
          'string',
        ],
        description: 'The generic name of the element constructed from label / floating or element name.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`label`](#option-label) option, a [#label](#slot-label) slot or `Vueform` component&apos;s [`forceLabels`](vueform#option-force-labels) option is `true`.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      nullValue: {
        types: [
          'any',
        ],
        description: 'The null value of the element.',
        private: true,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
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
        description: 'The path of the element&apos;s data using dot `.` syntax.',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      Templates: {
        types: [
          'object',
        ],
        description: 'The list of templates available to the element.',
        private: true,
      },
      template: {
        types: [
          'object',
        ],
        description: 'The component&apos;s template.',
        private: false,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value was modified.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was already validated at least once.',
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
      busy: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is `pending`.',
        private: false,
      },
      errors: {
        types: [
          'array',
        ],
        description: 'All the errors of `MessageBag`.',
        private: false,
      },
      error: {
        types: [
          'string',
        ],
        description: 'The first error of `MessageBag`.',
        private: false,
      },
      validationRules: {
        types: [
          'string',
          'array',
        ],
        description: 'The element&apos;s validation rules.',
        private: true,
      },
      isDanger: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has errors.',
        private: false,
      },
      isSuccess: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has been filled in successfully.',
        private: false,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      model: {
        types: [
          'any',
        ],
        description: 'Intermediary value between element&apos;s value and field&apos;s `v-model`. It is required when we need to transform the value format between the element and its field.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
      Size: {
        types: [
          'string',
        ],
        description: 'The resolved size of the element and all of its child components.',
        private: false,
      },
      View: {
        types: [
          'string',
        ],
        description: 'The name of the resolved view for the component and the default view for its child components. Child component views can be overridden with [`views`](#option-views) option. This one should be used to determine the component&apos;s view in class functions.',
        private: false,
      },
      Views: {
        types: [
          'object',
        ],
        description: 'The name of the views for the components.',
        private: true,
      },
    },
    methods: {
      updateItems: {
        description: 'Fetches & updates items when using `async` items.',
        returns: 'void',
        params: {
          disable: {
            types: [
              'boolean',
            ],
            required: 'true',
            description: 'whether the input field should be disabled while fetching options',
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
      check: {
        description: 'Checks one or more checkboxes.',
        returns: 'void',
        params: {
          values: {
            types: [
              'array',
              'string',
              'number',
            ],
            required: 'true',
            description: 'value(s) to check',
          },
        },
        private: false,
      },
      uncheck: {
        description: 'Unchecks one or more checkboxes.',
        returns: 'void',
        params: {
          values: {
            types: [
              'array',
              'string',
              'number',
            ],
            required: 'true',
            description: 'value(s) to check',
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
        description: 'Unchecks all checkboxes.',
        returns: 'void',
        private: false,
      },
      updateConditions: {
        description: 'Updates element conditions after they have been changed.',
        returns: 'void',
        private: true,
      },
      load: {
        description: 'Loads value to the element using optional [`formatLoad`](#option-format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`formatLoad`](#option-format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#method-load), only that it can\&apos;t format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`default`](#option-default) (or empty if `default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: 'Prepares the element.',
        returns: 'void',
        private: true,
      },
      disableAll: {
        description: 'Disables all items.',
        returns: 'void',
        private: false,
      },
      enableAll: {
        description: 'Enables all items.',
        returns: 'void',
        private: false,
      },
      disable: {
        description: 'Disables one item or more items.',
        returns: 'void',
        params: {
          values: {
            types: [
              'array',
              'string',
              'number',
            ],
            required: 'true',
            description: 'value(s) to disable',
          },
        },
        private: false,
      },
      enable: {
        description: 'Disables one item or more disabled items.',
        returns: 'void',
        params: {
          values: {
            types: [
              'array',
              'string',
              'number',
            ],
            required: 'true',
            description: 'value(s) to enable',
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
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
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
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires and emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      validate: {
        description: 'Checks each validation rule for the element (async).',
        returns: 'void',
        private: false,
      },
      dirt: {
        description: 'Flag the element as dirty.',
        returns: 'void',
        private: true,
      },
      clean: {
        description: 'Removes the element&apos;s `dirty` state.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Sets the validators to default state.',
        returns: 'void',
        private: false,
      },
      initMessageBag: {
        description: 'Initalizes MessageBag service.',
        returns: 'void',
        private: true,
      },
      initValidation: {
        description: 'Initalizes validators.',
        returns: 'void',
        private: true,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#method-hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form&apos;s component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default templates and classes.',
        private: false,
      },
    },
    events: {
      'change': {
        description: 'Triggered when the element&apos;s value is changed.',
        params: {
          newValue: {
            description: 'the new value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'the old value',
            types: [
              'string',
            ]
          },
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeCreate': {
        description: 'Triggered in beforeCreate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'created': {
        description: 'Triggered in created hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeMount': {
        description: 'Triggered in beforeMount hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'mounted': {
        description: 'Triggered in mounted hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUpdate': {
        description: 'Triggered in beforeUpdate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'updated': {
        description: 'Triggered in updated hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUnmount': {
        description: 'Triggered in beforeUnmount (or beforeDestroy in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'unmounted': {
        description: 'Triggered in unmounted (or destroyed in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
    },
    slots: {
      'checkbox': {
        description: 'Replaces the template for the checkbox field. Checkboxes are rendered by the [`CheckboxgroupCheckbox`](checkboxgroup-checkbox) component which has a default checkbox template. If the this slot is defined, the default template in [`CheckboxgroupCheckbox`](checkboxgroup-checkbox) component will be overridden with the content of this slot.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
          item: {
            description: 'the checkbox item',
            types: [
              'object',
            ],
          },
          value: {
            description: 'the checkbox value',
            types: [
              'string|number',
            ],
          },
          items: {
            description: 'the checkbox items',
            types: [
              'object',
            ],
          },
          index: {
            description: 'the index of current checkbox',
            types: [
              'number',
            ],
          },
          id: {
            description: 'the `id` attribute of the checkbox field used by the default template',
            types: [
              'string',
            ],
          },
          name: {
            description: 'the `name` attribute of the checkbox field used by the default template',
            types: [
              'string',
            ],
          },
          isDisabled: {
            description: 'whether the checkbox is disabled',
            types: [
              'boolean',
            ],
          },
          classes: {
            description: 'an object containing the classes of [`CheckboxgroupCheckbox`](checkboxgroup-checkbox) component',
            types: [
              'object',
            ],
          },
        },
      },
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
    },
    views: ['blocks', 'tabs'],
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
        required: true,
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
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
        required: false,
        private: true,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      removeClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClass: {
        required: 'false',
        default: 'null',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      removeClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      presets: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      view: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      views: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      size: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      templates: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      infoPosition: {
        required: 'false',
        default: 'right',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      messages: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      fieldName: {
        required: 'false',
        default: 'name|label',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      type: {
        required: 'false',
        default: 'date',
        types: [
          'string',
        ],
        required: false,
        private: true,
      },
      default: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'date',
        ],
        required: false,
        private: false,
      },
      addons: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      disabled: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      floating: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'boolean',
        ],
        required: false,
        private: false,
      },
      id: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      displayFormat: {
        required: 'false',
        default: 'locale.vueform.dateFormats.*',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      valueFormat: {
        required: 'false',
        default: 'locale.vueform.dateFormats.*',
        types: [
          'string',
          'boolean',
        ],
        required: false,
        private: false,
      },
      loadFormat: {
        required: 'false',
        default: 'locale.vueform.dateFormats.*',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      date: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      time: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      seconds: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      hour24: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      min: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'date',
        ],
        required: false,
        private: false,
      },
      max: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'date',
        ],
        required: false,
        private: false,
      },
      disables: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      extendOptions: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      placeholder: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      readonly: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      mounted: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has been already mounted.',
        default: 'true',
        private: false,
      },
      localDisabled: {
        types: [
          'boolean',
          'null',
        ],
        description: 'Helper to store whether the element is disabled via api (with .disable()).',
        default: 'null',
        private: true,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      focused: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is focused.',
        private: false,
      },
      input: {
        types: [
          'HTMLElement',
        ],
        description: 'The main input field of the element.',
        private: false,
      },
      state: {
        types: [
          'object',
        ],
        description: 'Helper property used to store the element states.',
        default: '{ dirty: false, validate: true }',
        private: true,
      },
      Validators: {
        types: [
          'array,Validator',
        ],
        description: 'An array containing all the validators of the element.',
        default: '[]',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Instance of MessageBag service. Custom errors and messages [can be added](/docs/1.x/validating-elements#custom-errors-and-messages).',
        default: 'MessageBag',
        private: false,
      },
      initialValue: {
        types: [
          'any',
        ],
        description: 'The initial value of the element.',
        private: true,
      },
      internalValue: {
        types: [
          'any',
        ],
        description: 'The store for the value of the element when we&apos;re not using external data (form&apos;s `v-model`).',
        private: true,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#method-show) or [`hide()`](#method-hide) methods.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: true,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: true,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: true,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: true,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: true,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'The component&apos;s classes.',
        private: false,
      },
      classesInstance: {
        types: [
          'MergeClasses',
        ],
        description: 'The classes instance (for testing purpose).',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether no [`conditions`](#option-conditions) are defined or they are all fulfilled.',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of the element in `{[name]: value}` value format. This gets merged with the parent component&apos;s data.',
        private: false,
      },
      requestData: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`submit`](#option-submit) is not disabled and [`available`](#property-available) is `true` (has no [`conditions`](#option-conditions) or they are fulfilled).',
        private: false,
      },
      displayDateFormat: {
        types: [
          'string',
        ],
        description: 'The display date format.',
        private: true,
      },
      valueDateFormat: {
        types: [
          'string',
        ],
        description: 'The format of date value.',
        private: true,
      },
      loadDateFormat: {
        types: [
          'string',
        ],
        description: 'The date format of the data the element being loaded with.',
        private: true,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
      },
      isDisabled: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is disabled.',
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
        description: 'The `id` of the <%field%>. If [`id`](#option-id) is not provided [`path`](#option-path) will be used.',
        private: false,
      },
      hasFloating: {
        types: [
          'boolean',
        ],
        description: 'Whether the element floating label.',
        private: false,
      },
      genericName: {
        types: [
          'string',
        ],
        description: 'The generic name of the element constructed from label / floating or element name.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`label`](#option-label) option, a [#label](#slot-label) slot or `Vueform` component&apos;s [`forceLabels`](vueform#option-force-labels) option is `true`.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      nullValue: {
        types: [
          'any',
        ],
        description: 'The null value of the element.',
        private: true,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
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
        description: 'The path of the element&apos;s data using dot `.` syntax.',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      Templates: {
        types: [
          'object',
        ],
        description: 'The list of templates available to the element.',
        private: true,
      },
      template: {
        types: [
          'object',
        ],
        description: 'The component&apos;s template.',
        private: false,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value was modified.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was already validated at least once.',
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
      busy: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is `pending`.',
        private: false,
      },
      errors: {
        types: [
          'array',
        ],
        description: 'All the errors of `MessageBag`.',
        private: false,
      },
      error: {
        types: [
          'string',
        ],
        description: 'The first error of `MessageBag`.',
        private: false,
      },
      validationRules: {
        types: [
          'string',
          'array',
        ],
        description: 'The element&apos;s validation rules.',
        private: true,
      },
      isDanger: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has errors.',
        private: false,
      },
      isSuccess: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has been filled in successfully.',
        private: false,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      model: {
        types: [
          'any',
        ],
        description: 'Intermediary value between element&apos;s value and field&apos;s `v-model`. It is required when we need to transform the value format between the element and its field.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
      Size: {
        types: [
          'string',
        ],
        description: 'The resolved size of the element and all of its child components.',
        private: false,
      },
      View: {
        types: [
          'string',
        ],
        description: 'The name of the resolved view for the component and the default view for its child components. Child component views can be overridden with [`views`](#option-views) option. This one should be used to determine the component&apos;s view in class functions.',
        private: false,
      },
      Views: {
        types: [
          'object',
        ],
        description: 'The name of the views for the components.',
        private: true,
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
      updateConditions: {
        description: 'Updates element conditions after they have been changed.',
        returns: 'void',
        private: true,
      },
      load: {
        description: 'Loads value to the element using optional [`formatLoad`](#option-format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`formatLoad`](#option-format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#method-load), only that it can\&apos;t format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`default`](#option-default) (or empty if `default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: 'Prepares the element.',
        returns: 'void',
        private: true,
      },
      disable: {
        description: 'Disables the element.',
        returns: 'void',
        private: false,
      },
      enable: {
        description: 'Enables the element even if it is disabled by [`disabled`](#disabled) option.',
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
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
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
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires and emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      handleChange: {
        description: 'Handles `change` event.',
        returns: 'void',
        params: {
          val: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'value of the element',
          },
        },
        private: true,
      },
      validate: {
        description: 'Checks each validation rule for the element (async).',
        returns: 'void',
        private: false,
      },
      dirt: {
        description: 'Flag the element as dirty.',
        returns: 'void',
        private: true,
      },
      clean: {
        description: 'Removes the element&apos;s `dirty` state.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Sets the validators to default state.',
        returns: 'void',
        private: false,
      },
      initMessageBag: {
        description: 'Initalizes MessageBag service.',
        returns: 'void',
        private: true,
      },
      initValidation: {
        description: 'Initalizes validators.',
        returns: 'void',
        private: true,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#method-hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form&apos;s component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default templates and classes.',
        private: false,
      },
    },
    events: {
      'change': {
        description: 'Triggered when the element&apos;s value is changed.',
        params: {
          newValue: {
            description: 'the new value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'the old value',
            types: [
              'string',
            ]
          },
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeCreate': {
        description: 'Triggered in beforeCreate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'created': {
        description: 'Triggered in created hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeMount': {
        description: 'Triggered in beforeMount hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'mounted': {
        description: 'Triggered in mounted hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUpdate': {
        description: 'Triggered in beforeUpdate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'updated': {
        description: 'Triggered in updated hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUnmount': {
        description: 'Triggered in beforeUnmount (or beforeDestroy in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'unmounted': {
        description: 'Triggered in unmounted (or destroyed in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
    },
    slots: {
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'addon-before': {
        description: 'Prepends an addon to the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'addon-after': {
        description: 'Appends an addon to the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
    },
    views: [],
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
        required: true,
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
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
        required: false,
        private: true,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      removeClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClass: {
        required: 'false',
        default: 'null',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      removeClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      presets: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      view: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      views: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      size: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      templates: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      infoPosition: {
        required: 'false',
        default: 'right',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      messages: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      fieldName: {
        required: 'false',
        default: 'name|label',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      type: {
        required: 'false',
        default: 'dates',
        types: [
          'string',
        ],
        required: false,
        private: true,
      },
      default: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      addons: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      disabled: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      floating: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'boolean',
        ],
        required: false,
        private: false,
      },
      id: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      displayFormat: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      valueFormat: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'boolean',
        ],
        required: false,
        private: false,
      },
      loadFormat: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'boolean',
        ],
        required: false,
        private: false,
      },
      mode: {
        required: 'false',
        default: 'multiple',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      min: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'date',
        ],
        required: false,
        private: false,
      },
      max: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'date',
        ],
        required: false,
        private: false,
      },
      disables: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      extendOptions: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      placeholder: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      readonly: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      mounted: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has been already mounted.',
        default: 'true',
        private: false,
      },
      localDisabled: {
        types: [
          'boolean',
          'null',
        ],
        description: 'Helper to store whether the element is disabled via api (with .disable()).',
        default: 'null',
        private: true,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      focused: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is focused.',
        private: false,
      },
      input: {
        types: [
          'HTMLElement',
        ],
        description: 'The main input field of the element.',
        private: false,
      },
      state: {
        types: [
          'object',
        ],
        description: 'Helper property used to store the element states.',
        default: '{ dirty: false, validate: true }',
        private: true,
      },
      Validators: {
        types: [
          'array,Validator',
        ],
        description: 'An array containing all the validators of the element.',
        default: '[]',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Instance of MessageBag service. Custom errors and messages [can be added](/docs/1.x/validating-elements#custom-errors-and-messages).',
        default: 'MessageBag',
        private: false,
      },
      initialValue: {
        types: [
          'any',
        ],
        description: 'The initial value of the element.',
        private: true,
      },
      internalValue: {
        types: [
          'any',
        ],
        description: 'The store for the value of the element when we&apos;re not using external data (form&apos;s `v-model`).',
        private: true,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#method-show) or [`hide()`](#method-hide) methods.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: true,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: true,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: true,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: true,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: true,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'The component&apos;s classes.',
        private: false,
      },
      classesInstance: {
        types: [
          'MergeClasses',
        ],
        description: 'The classes instance (for testing purpose).',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether no [`conditions`](#option-conditions) are defined or they are all fulfilled.',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of the element in `{[name]: value}` value format. This gets merged with the parent component&apos;s data.',
        private: false,
      },
      requestData: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`submit`](#option-submit) is not disabled and [`available`](#property-available) is `true` (has no [`conditions`](#option-conditions) or they are fulfilled).',
        private: false,
      },
      displayDateFormat: {
        types: [
          'string',
        ],
        description: 'The display date format.',
        private: true,
      },
      valueDateFormat: {
        types: [
          'string',
        ],
        description: 'The format of date value.',
        private: true,
      },
      loadDateFormat: {
        types: [
          'string',
        ],
        description: 'The date format of the data the element being loaded with.',
        private: true,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
      },
      isDisabled: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is disabled.',
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
        description: 'The `id` of the <%field%>. If [`id`](#option-id) is not provided [`path`](#option-path) will be used.',
        private: false,
      },
      hasFloating: {
        types: [
          'boolean',
        ],
        description: 'Whether the element floating label.',
        private: false,
      },
      genericName: {
        types: [
          'string',
        ],
        description: 'The generic name of the element constructed from label / floating or element name.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`label`](#option-label) option, a [#label](#slot-label) slot or `Vueform` component&apos;s [`forceLabels`](vueform#option-force-labels) option is `true`.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      nullValue: {
        types: [
          'any',
        ],
        description: 'The null value of the element.',
        private: true,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
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
        description: 'The path of the element&apos;s data using dot `.` syntax.',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      Templates: {
        types: [
          'object',
        ],
        description: 'The list of templates available to the element.',
        private: true,
      },
      template: {
        types: [
          'object',
        ],
        description: 'The component&apos;s template.',
        private: false,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value was modified.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was already validated at least once.',
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
      busy: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is `pending`.',
        private: false,
      },
      errors: {
        types: [
          'array',
        ],
        description: 'All the errors of `MessageBag`.',
        private: false,
      },
      error: {
        types: [
          'string',
        ],
        description: 'The first error of `MessageBag`.',
        private: false,
      },
      validationRules: {
        types: [
          'string',
          'array',
        ],
        description: 'The element&apos;s validation rules.',
        private: true,
      },
      isDanger: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has errors.',
        private: false,
      },
      isSuccess: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has been filled in successfully.',
        private: false,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      model: {
        types: [
          'any',
        ],
        description: 'Intermediary value between element&apos;s value and field&apos;s `v-model`. It is required when we need to transform the value format between the element and its field.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
      Size: {
        types: [
          'string',
        ],
        description: 'The resolved size of the element and all of its child components.',
        private: false,
      },
      View: {
        types: [
          'string',
        ],
        description: 'The name of the resolved view for the component and the default view for its child components. Child component views can be overridden with [`views`](#option-views) option. This one should be used to determine the component&apos;s view in class functions.',
        private: false,
      },
      Views: {
        types: [
          'object',
        ],
        description: 'The name of the views for the components.',
        private: true,
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
      updateConditions: {
        description: 'Updates element conditions after they have been changed.',
        returns: 'void',
        private: true,
      },
      load: {
        description: 'Loads value to the element using optional [`formatLoad`](#option-format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`formatLoad`](#option-format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#method-load), only that it can\&apos;t format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`default`](#option-default) (or empty if `default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: 'Prepares the element.',
        returns: 'void',
        private: true,
      },
      disable: {
        description: 'Disables the element.',
        returns: 'void',
        private: false,
      },
      enable: {
        description: 'Enables the element even if it is disabled by [`disabled`](#disabled) option.',
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
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
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
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires and emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      handleChange: {
        description: 'Handles `change` event.',
        returns: 'void',
        params: {
          val: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'value of the element',
          },
        },
        private: true,
      },
      validate: {
        description: 'Checks each validation rule for the element (async).',
        returns: 'void',
        private: false,
      },
      dirt: {
        description: 'Flag the element as dirty.',
        returns: 'void',
        private: true,
      },
      clean: {
        description: 'Removes the element&apos;s `dirty` state.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Sets the validators to default state.',
        returns: 'void',
        private: false,
      },
      initMessageBag: {
        description: 'Initalizes MessageBag service.',
        returns: 'void',
        private: true,
      },
      initValidation: {
        description: 'Initalizes validators.',
        returns: 'void',
        private: true,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#method-hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form&apos;s component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default templates and classes.',
        private: false,
      },
    },
    events: {
      'change': {
        description: 'Triggered when the element&apos;s value is changed.',
        params: {
          newValue: {
            description: 'the new value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'the old value',
            types: [
              'string',
            ]
          },
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeCreate': {
        description: 'Triggered in beforeCreate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'created': {
        description: 'Triggered in created hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeMount': {
        description: 'Triggered in beforeMount hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'mounted': {
        description: 'Triggered in mounted hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUpdate': {
        description: 'Triggered in beforeUpdate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'updated': {
        description: 'Triggered in updated hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUnmount': {
        description: 'Triggered in beforeUnmount (or beforeDestroy in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'unmounted': {
        description: 'Triggered in unmounted (or destroyed in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
    },
    slots: {
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'addon-before': {
        description: 'Prepends an addon to the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'addon-after': {
        description: 'Appends an addon to the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
    },
    views: [],
  },
  EditorElement: {
    props: {
      name: {
        required: 'true',
        default: 'undefined',
        types: [
          'string',
          'number',
        ],
        required: true,
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
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
        required: false,
        private: true,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      removeClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClass: {
        required: 'false',
        default: 'null',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      removeClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      presets: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      view: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      views: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      size: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      templates: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      infoPosition: {
        required: 'false',
        default: 'right',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      messages: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      fieldName: {
        required: 'false',
        default: 'name|label',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      type: {
        required: 'false',
        default: 'editor',
        types: [
          'string',
        ],
        required: false,
        private: true,
      },
      default: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'number',
        ],
        required: false,
        private: false,
      },
      debounce: {
        required: 'false',
        default: 'null',
        types: [
          'number',
        ],
        required: false,
        private: false,
      },
      disabled: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      id: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      placeholder: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      onError: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onAlert: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      accept: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      acceptMimes: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      endpoint: {
        required: 'false',
        default: 'config.endpoints.attachment.url',
        types: [
          'string',
          'function',
        ],
        required: false,
        private: false,
      },
      method: {
        required: 'false',
        default: 'config.endpoints.attachment.method',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      hideTools: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      mounted: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has been already mounted.',
        default: 'true',
        private: false,
      },
      localDisabled: {
        types: [
          'boolean',
          'null',
        ],
        description: 'Helper to store whether the element is disabled via api (with .disable()).',
        default: 'null',
        private: true,
      },
      focused: {
        types: [
          'boolean',
        ],
        description: 'Whether the editor is focused.',
        private: false,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      input: {
        types: [
          'HTMLElement',
        ],
        description: 'The main input field of the element.',
        private: false,
      },
      state: {
        types: [
          'object',
        ],
        description: 'Helper property used to store the element states.',
        default: '{ dirty: false, validate: true }',
        private: true,
      },
      Validators: {
        types: [
          'array,Validator',
        ],
        description: 'An array containing all the validators of the element.',
        default: '[]',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Instance of MessageBag service. Custom errors and messages [can be added](/docs/1.x/validating-elements#custom-errors-and-messages).',
        default: 'MessageBag',
        private: false,
      },
      initialValue: {
        types: [
          'any',
        ],
        description: 'The initial value of the element.',
        private: true,
      },
      internalValue: {
        types: [
          'any',
        ],
        description: 'The store for the value of the element when we&apos;re not using external data (form&apos;s `v-model`).',
        private: true,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#method-show) or [`hide()`](#method-hide) methods.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: true,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: true,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: true,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: true,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: true,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'The component&apos;s classes.',
        private: false,
      },
      classesInstance: {
        types: [
          'MergeClasses',
        ],
        description: 'The classes instance (for testing purpose).',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether no [`conditions`](#option-conditions) are defined or they are all fulfilled.',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of the element in `{[name]: value}` value format. This gets merged with the parent component&apos;s data.',
        private: false,
      },
      requestData: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`submit`](#option-submit) is not disabled and [`available`](#property-available) is `true` (has no [`conditions`](#option-conditions) or they are fulfilled).',
        private: false,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
      },
      isDisabled: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is disabled.',
        private: false,
      },
      editorEndpoint: {
        types: [
          'string',
        ],
        description: 'The endpoint that uploads attachment. Can be changed by setting [`endpoint`](#endpoint) option.',
        default: '`config.endpoints.attachment.url`',
        private: true,
      },
      editorMethod: {
        types: [
          'string',
        ],
        description: 'The method to use to upload attachment. Can be changed by setting [`method`](#method) option.',
        default: '`config.endpoints.attachment.method`',
        private: true,
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
        description: 'The `id` of the <%field%>. If [`id`](#option-id) is not provided [`path`](#option-path) will be used.',
        private: false,
      },
      genericName: {
        types: [
          'string',
        ],
        description: 'The generic name of the element constructed from label / floating or element name.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`label`](#option-label) option, a [#label](#slot-label) slot or `Vueform` component&apos;s [`forceLabels`](vueform#option-force-labels) option is `true`.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      nullValue: {
        types: [
          'any',
        ],
        description: 'The null value of the element.',
        private: true,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
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
        description: 'The path of the element&apos;s data using dot `.` syntax.',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      Templates: {
        types: [
          'object',
        ],
        description: 'The list of templates available to the element.',
        private: true,
      },
      template: {
        types: [
          'object',
        ],
        description: 'The component&apos;s template.',
        private: false,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value was modified.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was already validated at least once.',
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
        description: 'Whether the element has a validation rule with pending debounce.',
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
        description: 'All the errors of `MessageBag`.',
        private: false,
      },
      error: {
        types: [
          'string',
        ],
        description: 'The first error of `MessageBag`.',
        private: false,
      },
      validationRules: {
        types: [
          'string',
          'array',
        ],
        description: 'The element&apos;s validation rules.',
        private: true,
      },
      isDanger: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has errors.',
        private: false,
      },
      isSuccess: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has been filled in successfully.',
        private: false,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      model: {
        types: [
          'any',
        ],
        description: 'Intermediary value between element&apos;s value and field&apos;s `v-model`. It is required when we need to transform the value format between the element and its field.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
      Size: {
        types: [
          'string',
        ],
        description: 'The resolved size of the element and all of its child components.',
        private: false,
      },
      View: {
        types: [
          'string',
        ],
        description: 'The name of the resolved view for the component and the default view for its child components. Child component views can be overridden with [`views`](#option-views) option. This one should be used to determine the component&apos;s view in class functions.',
        private: false,
      },
      Views: {
        types: [
          'object',
        ],
        description: 'The name of the views for the components.',
        private: true,
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
      updateConditions: {
        description: 'Updates element conditions after they have been changed.',
        returns: 'void',
        private: true,
      },
      load: {
        description: 'Loads value to the element using optional [`formatLoad`](#option-format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`formatLoad`](#option-format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#method-load), only that it can\&apos;t format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`default`](#option-default) (or empty if `default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: 'Prepares the element.',
        returns: 'void',
        private: true,
      },
      disable: {
        description: 'Disables the element.',
        returns: 'void',
        private: false,
      },
      enable: {
        description: 'Enables the element even if it is disabled by [`disabled`](#disabled) option.',
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
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
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
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires and emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      handleAlert: {
        description: 'Handles `alert` event.',
        returns: 'void',
        params: {
          message: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'alert message',
          },
        },
        private: true,
      },
      handleError: {
        description: 'Handles `error` event.',
        returns: 'void',
        params: {
          error: {
            types: [
              'Error',
            ],
            required: 'true',
            description: 'the error object',
          },
        },
        private: true,
      },
      handleInput: {
        description: 'Handles `input` event.',
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
      validate: {
        description: 'Checks each validation rule for the element (async).',
        returns: 'void',
        private: false,
      },
      dirt: {
        description: 'Flag the element as dirty.',
        returns: 'void',
        private: true,
      },
      clean: {
        description: 'Removes the element&apos;s `dirty` state.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Sets the validators to default state.',
        returns: 'void',
        private: false,
      },
      initMessageBag: {
        description: 'Initalizes MessageBag service.',
        returns: 'void',
        private: true,
      },
      initValidation: {
        description: 'Initalizes validators.',
        returns: 'void',
        private: true,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#method-hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form&apos;s component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default templates and classes.',
        private: false,
      },
    },
    events: {
      'change': {
        description: 'Triggered when the element&apos;s value is changed.',
        params: {
          newValue: {
            description: 'the new value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'the old value',
            types: [
              'string',
            ]
          },
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'alert': {
        description: 'Triggered when the user select a file/mime type that is not allowed. If the event does not have a listener the alert message will be displayed by `alert()`.',
        params: {
          message: {
            description: 'the alert message',
            types: [
              'string',
            ]
          },
       },
      },
      'error': {
        description: 'Triggered when file upload throws an error.',
        params: {
          error: {
            description: 'the Error object',
            types: [
              'Error',
            ]
          },
       },
      },
      'beforeCreate': {
        description: 'Triggered in beforeCreate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'created': {
        description: 'Triggered in created hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeMount': {
        description: 'Triggered in beforeMount hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'mounted': {
        description: 'Triggered in mounted hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUpdate': {
        description: 'Triggered in beforeUpdate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'updated': {
        description: 'Triggered in updated hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUnmount': {
        description: 'Triggered in beforeUnmount (or beforeDestroy in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'unmounted': {
        description: 'Triggered in unmounted (or destroyed in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
    },
    slots: {
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
    },
    views: [],
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
        required: true,
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
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
        required: false,
        private: true,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      removeClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClass: {
        required: 'false',
        default: 'null',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      removeClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      presets: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      view: {
        required: 'false',
        default: 'file',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      views: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      size: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      templates: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      infoPosition: {
        required: 'false',
        default: 'right',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      messages: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      fieldName: {
        required: 'false',
        default: 'name|label',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      type: {
        required: 'false',
        default: 'file',
        types: [
          'string',
        ],
        required: false,
        private: true,
      },
      default: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'object',
        ],
        required: false,
        private: false,
      },
      disabled: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      id: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      onRemove: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onError: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      drop: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      accept: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'array',
        ],
        required: false,
        private: false,
      },
      clickable: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      url: {
        required: 'false',
        default: '/',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      previewUrl: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      auto: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      urls: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      methods: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      uploadTempEndpoint: {
        required: 'false',
        default: 'config.endpoints.uploadTempFile',
        types: [
          'object',
          'string',
          'function',
        ],
        required: false,
        private: false,
      },
      removeTempEndpoint: {
        required: 'false',
        default: 'config.endpoints.removeTempFile',
        types: [
          'object',
          'string',
          'function',
        ],
        required: false,
        private: false,
      },
      removeEndpoint: {
        required: 'false',
        default: 'config.endpoints.removeFile',
        types: [
          'object',
          'string',
          'function',
        ],
        required: false,
        private: false,
      },
      params: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      softRemove: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      embed: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      mounted: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has been already mounted.',
        default: 'true',
        private: false,
      },
      localDisabled: {
        types: [
          'boolean',
          'null',
        ],
        description: 'Helper to store whether the element is disabled via api (with .disable()).',
        default: 'null',
        private: true,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      hasUploadError: {
        types: [
          'boolean',
        ],
        description: 'Whether the file uploader has any errors.',
        default: 'false',
        private: false,
      },
      base64: {
        types: [
          'string',
        ],
        description: 'The `base64` representation of the file when [`view`](#option-view) is `image` or `gallery` and file is only selected, but not uploaded yet.',
        default: 'null',
        private: false,
      },
      progress: {
        types: [
          'number',
        ],
        description: 'The percentage of progress when the file is being temporarily uploaded (0-100).',
        default: '0',
        private: false,
      },
      preparing: {
        types: [
          'boolean',
        ],
        description: 'If the form is submitted and the file is not uploaded yet, the element will enter into `preparing` state and upload the temporary file before submitting the form.',
        default: 'false',
        private: false,
      },
      input: {
        types: [
          'HTMLElement',
        ],
        description: 'The main input field of the element.',
        private: false,
      },
      removing: {
        types: [
          'boolean',
        ],
        description: 'Whether async file removing request is in progress.',
        private: false,
      },
      request: {
        types: [
          'object',
        ],
        description: 'The axios request when temp is being uploaded.',
        private: true,
      },
      axios: {
        types: [
          'object',
        ],
        description: 'The form&apos;s axios instance.',
        private: true,
      },
      state: {
        types: [
          'object',
        ],
        description: 'Helper property used to store the element states.',
        default: '{ dirty: false, validate: true }',
        private: true,
      },
      Validators: {
        types: [
          'array,Validator',
        ],
        description: 'An array containing all the validators of the element.',
        default: '[]',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Instance of MessageBag service. Custom errors and messages [can be added](/docs/1.x/validating-elements#custom-errors-and-messages).',
        default: 'MessageBag',
        private: false,
      },
      initialValue: {
        types: [
          'any',
        ],
        description: 'The initial value of the element.',
        private: true,
      },
      internalValue: {
        types: [
          'any',
        ],
        description: 'The store for the value of the element when we&apos;re not using external data (form&apos;s `v-model`).',
        private: true,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#method-show) or [`hide()`](#method-hide) methods.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: true,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: true,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: true,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: true,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: true,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'The component&apos;s classes.',
        private: false,
      },
      classesInstance: {
        types: [
          'MergeClasses',
        ],
        description: 'The classes instance (for testing purpose).',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether no [`conditions`](#option-conditions) are defined or they are all fulfilled.',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of the element in `{[name]: value}` value format. This gets merged with the parent component&apos;s data.',
        private: false,
      },
      requestData: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`submit`](#option-submit) is not disabled and [`available`](#property-available) is `true` (has no [`conditions`](#option-conditions) or they are fulfilled).',
        private: false,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
      },
      isDisabled: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is disabled.',
        private: false,
      },
      canDrop: {
        types: [
          'boolean',
        ],
        description: 'Whether `drop` is enabled and browser supports dragging.',
        private: true,
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
        description: 'The `id` of the <%field%>. If [`id`](#option-id) is not provided [`path`](#option-path) will be used.',
        private: false,
      },
      endpoints: {
        types: [
          'object',
        ],
        description: 'The HTTP request endpoints.',
        private: true,
      },
      fileUrl: {
        types: [
          'string',
        ],
        description: 'URL to file using the [`url`](#url) option without including the filename. If `url` is not defined it will default to `&apos;/&apos;`.',
        private: true,
      },
      stage: {
        types: [
          'number',
        ],
        description: 'The stage the file is at:\n\n* `0`: file not selected\n* `1`: file selected\n* `2`: file temporarily uploaded\n* `3`: file permanently uploaded',
        private: false,
      },
      filename: {
        types: [
          'string',
        ],
        description: 'The original or stored name of the file.',
        private: false,
      },
      link: {
        types: [
          'string',
        ],
        description: 'The clickable link of the uploaded file.',
        private: false,
      },
      preview: {
        types: [
          'string',
        ],
        description: 'The preview of the file when [`view`](#view) is `image` or `gallery`. Equals to the `link` if the file is already uploaded and `base64` if only selected or temporarily uploaded.',
        private: false,
      },
      uploaded: {
        types: [
          'boolean',
        ],
        description: 'Whether the file is permantently uploaded.',
        private: false,
      },
      canRemove: {
        types: [
          'boolean',
        ],
        description: 'Whether the file can be removed.',
        private: false,
      },
      canUploadTemp: {
        types: [
          'boolean',
        ],
        description: 'Whether temporary file can be uploaded.',
        private: false,
      },
      canSelect: {
        types: [
          'boolean',
        ],
        description: 'Whether file can be selected.',
        private: false,
      },
      genericName: {
        types: [
          'string',
        ],
        description: 'The generic name of the element constructed from label / floating, element name or default file name if name is a number.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`label`](#option-label) option, a [#label](#slot-label) slot or `Vueform` component&apos;s [`forceLabels`](vueform#option-force-labels) option is `true`.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      nullValue: {
        types: [
          'any',
        ],
        description: 'The null value of the element.',
        private: true,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
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
        description: 'The path of the element&apos;s data using dot `.` syntax.',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      uploading: {
        description: 'Whether a temp file is currently being uploaded.',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      Templates: {
        types: [
          'object',
        ],
        description: 'The list of templates available to the element.',
        private: true,
      },
      template: {
        types: [
          'object',
        ],
        description: 'The component&apos;s template.',
        private: false,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value was modified.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was already validated at least once.',
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
      busy: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is `pending`, `debouncing`, `uploading` or `removing`.',
        private: false,
      },
      errors: {
        types: [
          'array',
        ],
        description: 'All the errors of `MessageBag`.',
        private: false,
      },
      error: {
        types: [
          'string',
        ],
        description: 'The first error of `MessageBag`.',
        private: false,
      },
      validationRules: {
        types: [
          'string',
          'array',
        ],
        description: 'The element&apos;s validation rules.',
        private: true,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      model: {
        types: [
          'any',
        ],
        description: 'Intermediary value between element&apos;s value and field&apos;s `v-model`. It is required when we need to transform the value format between the element and its field.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
      Size: {
        types: [
          'string',
        ],
        description: 'The resolved size of the element and all of its child components.',
        private: false,
      },
      View: {
        types: [
          'string',
        ],
        description: 'The name of the resolved view for the component and the default view for its child components. Child component views can be overridden with [`views`](#option-views) option. This one should be used to determine the component&apos;s view in class functions.',
        private: false,
      },
      Views: {
        types: [
          'object',
        ],
        description: 'The name of the views for the components.',
        private: true,
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
      updateConditions: {
        description: 'Updates element conditions after they have been changed.',
        returns: 'void',
        private: true,
      },
      load: {
        description: 'Loads value to the element using optional [`formatLoad`](#option-format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`formatLoad`](#option-format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#method-load), only that it can\&apos;t format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`default`](#option-default) (or empty if `default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: 'Prepares the element.',
        returns: 'void',
        private: true,
      },
      disable: {
        description: 'Disables the element.',
        returns: 'void',
        private: false,
      },
      enable: {
        description: 'Enables the element even if it is disabled by [`disabled`](#disabled) option.',
        returns: 'void',
        private: false,
      },
      handleDrop: {
        description: 'Handles the `drop` event.',
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
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
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
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires and emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      uploadTemp: {
        description: 'Upload temporary file (async).',
        returns: 'void',
        private: false,
      },
      remove: {
        description: 'Removes file (async):\n\n* in stage `1`: sets the value to `null`\n* in stage `2`: submits a request to `removeTemp` endpoint (if [`softRemove: false`](#option-soft-remove)) and sets the value to `null`\n* in stage `3`: submits a request to `remove` endpoint (if [`softRemove: false`](#option-soft-remove)) and sets the value to `null`',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: 'Prepare the element for submitting the form (async). It will upload temp file if it hasn&apos;t been uploaded yet and halts the submit process until its done without any errors.',
        returns: 'void',
        private: true,
      },
      handleChange: {
        description: 'Handles `change` event.',
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
        description: 'Handles file select button `click` event.',
        returns: 'void',
        private: true,
      },
      handleUploadTemp: {
        description: 'Handles `uploadTemp` event.',
        returns: 'void',
        private: true,
      },
      handleRemove: {
        description: 'Handles `remove` event.',
        returns: 'void',
        private: true,
      },
      handleAbort: {
        description: 'Handles `abort` event.',
        returns: 'void',
        private: true,
      },
      handleError: {
        description: 'Handles `error` event.',
        returns: 'void',
        params: {
          error: {
            types: [
              'Error',
            ],
            required: 'true',
            description: 'the error object',
          },
        },
        private: true,
      },
      validate: {
        description: 'Checks each validation rule for the element (async). File element will only validate for `min`, `max`, `between`, `size`, `mimetypes`, `mimes`, `dimensions`, `file`, `image`, `gt`, `gte`, `lt` and `lte` rules and only before the temporary files are uploaded.',
        returns: 'void',
        private: false,
      },
      dirt: {
        description: 'Flag the element as dirty.',
        returns: 'void',
        private: true,
      },
      clean: {
        description: 'Removes the element&apos;s `dirty` state.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Sets the validators to default state.',
        returns: 'void',
        private: false,
      },
      initMessageBag: {
        description: 'Initalizes MessageBag service.',
        returns: 'void',
        private: true,
      },
      initValidation: {
        description: 'Initalizes validators.',
        returns: 'void',
        private: true,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#method-hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form&apos;s component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default templates and classes.',
        private: false,
      },
    },
    events: {
      'change': {
        description: 'Triggered when the element&apos;s value is changed.',
        params: {
          newValue: {
            description: 'the new value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'the old value',
            types: [
              'string',
            ]
          },
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'remove': {
        description: 'Triggered after the file is removed.',
      },
      'error': {
        description: 'Triggered when temporary upload or file remove throws an error.',
        params: {
          type: {
            description: 'the type of the error, possible values: `&apos;upload|remove&apos;`',
            types: [
              'string',
            ]
          },
          error: {
            description: 'the Error object',
            types: [
              'Error',
            ]
          },
       },
      },
      'beforeCreate': {
        description: 'Triggered in beforeCreate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'created': {
        description: 'Triggered in created hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeMount': {
        description: 'Triggered in beforeMount hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'mounted': {
        description: 'Triggered in mounted hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUpdate': {
        description: 'Triggered in beforeUpdate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'updated': {
        description: 'Triggered in updated hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUnmount': {
        description: 'Triggered in beforeUnmount (or beforeDestroy in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'unmounted': {
        description: 'Triggered in unmounted (or destroyed in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
    },
    slots: {
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
    },
    views: ['image', 'gallery'],
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
        required: true,
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
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
        required: false,
        private: true,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      removeClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClass: {
        required: 'false',
        default: 'null',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      removeClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      presets: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      view: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      views: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      size: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      templates: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      infoPosition: {
        required: 'false',
        default: 'right',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      type: {
        required: 'false',
        default: 'group',
        types: [
          'string',
        ],
        required: false,
        private: true,
      },
      default: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      schema: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      mounted: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has been already mounted.',
        default: 'true',
        private: false,
      },
      children$Array: {
        types: [
          'array,component',
        ],
        description: 'List of child element components.',
        default: '[children<component>]',
        private: true,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Instance of MessageBag service. Custom errors and messages [can be added](/docs/1.x/validating-elements#custom-errors-and-messages).',
        default: 'MessageBag',
        private: false,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#method-show) or [`hide()`](#method-hide) methods.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: true,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: true,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: true,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: true,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: true,
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
        description: 'Child element components.',
        private: false,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'The component&apos;s classes.',
        private: false,
      },
      classesInstance: {
        types: [
          'MergeClasses',
        ],
        description: 'The classes instance (for testing purpose).',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether no [`conditions`](#option-conditions) are defined or they are all fulfilled.',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of child elements in object. This gets merged with the parent component&apos;s data.',
        private: false,
      },
      requestData: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`submit`](#option-submit) is not disabled and [`available`](#property-available) is `true` (has no [`conditions`](#option-conditions) or they are fulfilled).',
        private: false,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`label`](#option-label) option, a [#label](#slot-label) slot or `Vueform` component&apos;s [`forceLabels`](vueform#option-force-labels) option is `true`.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      nullValue: {
        types: [
          'any',
        ],
        description: 'The null value of the element.',
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
        description: 'The path of the element&apos;s data using dot `.` syntax.',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      Templates: {
        types: [
          'object',
        ],
        description: 'The list of templates available to the element.',
        private: true,
      },
      template: {
        types: [
          'object',
        ],
        description: 'The component&apos;s template.',
        private: false,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any child with modified value.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether all the children were validated at least once.',
        private: false,
      },
      invalid: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any child with failing rules.',
        private: false,
      },
      pending: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any child with async rules in progress.',
        private: false,
      },
      debouncing: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any child with validation rule with pending debounce.',
        private: false,
      },
      busy: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any `busy` child.',
        private: false,
      },
      errors: {
        types: [
          'array',
        ],
        description: 'All the errors of `MessageBag`.',
        private: false,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
      Size: {
        types: [
          'string',
        ],
        description: 'The resolved size of the element and all of its child components.',
        private: false,
      },
      View: {
        types: [
          'string',
        ],
        description: 'The name of the resolved view for the component and the default view for its child components. Child component views can be overridden with [`views`](#option-views) option. This one should be used to determine the component&apos;s view in class functions.',
        private: false,
      },
      Views: {
        types: [
          'object',
        ],
        description: 'The name of the views for the components.',
        private: true,
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
      updateConditions: {
        description: 'Updates element conditions after they have been changed.',
        returns: 'void',
        private: true,
      },
      load: {
        description: 'Loads value to the element using optional [`formatLoad`](#option-format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`formatLoad`](#option-format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#method-load), only that it can\&apos;t format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`default`](#option-default) (or empty if `default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: 'Prepares the element.',
        returns: 'void',
        private: true,
      },
      component: {
        description: 'Transforms an element `type` into the element&apos;s component name.',
        returns: 'string',
        params: {
          element: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'element `type`',
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
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
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
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires and emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      validate: {
        description: 'Validates every child (async).',
        returns: 'void',
        private: false,
      },
      clean: {
        description: 'Removes every child&apos;s `dirty` state.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Sets the validators of children to default state.',
        returns: 'void',
        private: false,
      },
      initMessageBag: {
        description: 'Initalizes MessageBag service.',
        returns: 'void',
        private: true,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#method-hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form&apos;s component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default templates and classes.',
        private: false,
      },
    },
    events: {
      'change': {
        description: 'Triggered when the element&apos;s value is changed.',
        params: {
          newValue: {
            description: 'the new value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'the old value',
            types: [
              'string',
            ]
          },
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeCreate': {
        description: 'Triggered in beforeCreate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'created': {
        description: 'Triggered in created hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeMount': {
        description: 'Triggered in beforeMount hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'mounted': {
        description: 'Triggered in mounted hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUpdate': {
        description: 'Triggered in beforeUpdate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'updated': {
        description: 'Triggered in updated hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUnmount': {
        description: 'Triggered in beforeUnmount (or beforeDestroy in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'unmounted': {
        description: 'Triggered in unmounted (or destroyed in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
    },
    slots: {
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
    },
    views: [],
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
        required: true,
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      messages: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      fieldName: {
        required: 'false',
        default: 'name|label',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      type: {
        required: 'false',
        default: 'hidden',
        types: [
          'string',
        ],
        required: false,
        private: true,
      },
      default: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'number',
        ],
        required: false,
        private: false,
      },
      id: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      meta: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      mounted: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has been already mounted.',
        default: 'true',
        private: false,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      input: {
        types: [
          'HTMLElement',
        ],
        description: 'The main input field of the element.',
        private: false,
      },
      state: {
        types: [
          'object',
        ],
        description: 'Helper property used to store the element states.',
        default: '{ dirty: false, validate: true }',
        private: true,
      },
      Validators: {
        types: [
          'array,Validator',
        ],
        description: 'An array containing all the validators of the element.',
        default: '[]',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Instance of MessageBag service. Custom errors and messages [can be added](/docs/1.x/validating-elements#custom-errors-and-messages).',
        default: 'MessageBag',
        private: false,
      },
      initialValue: {
        types: [
          'any',
        ],
        description: 'The initial value of the element.',
        private: true,
      },
      internalValue: {
        types: [
          'any',
        ],
        description: 'The store for the value of the element when we&apos;re not using external data (form&apos;s `v-model`).',
        private: true,
      },
    },
    computed: {
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: true,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: true,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: true,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: true,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: true,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether no [`conditions`](#option-conditions) are defined or they are all fulfilled.',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of the element in `{[name]: value}` value format. This gets merged with the parent component&apos;s data.',
        private: false,
      },
      requestData: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`submit`](#option-submit) is not disabled and [`available`](#property-available) is `true` (has no [`conditions`](#option-conditions) or they are fulfilled).',
        private: false,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
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
        description: 'The `id` of the <%field%>. If [`id`](#option-id) is not provided [`path`](#option-path) will be used.',
        private: false,
      },
      genericName: {
        types: [
          'string',
        ],
        description: 'The generic name of the element constructed from label / floating or element name.',
        private: true,
      },
      nullValue: {
        types: [
          'any',
        ],
        description: 'The null value of the element.',
        private: true,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
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
        description: 'The path of the element&apos;s data using dot `.` syntax.',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      Templates: {
        types: [
          'object',
        ],
        description: 'The list of templates available to the element.',
        private: true,
      },
      template: {
        types: [
          'object',
        ],
        description: 'The component&apos;s template.',
        private: false,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value was modified.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was already validated at least once.',
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
      busy: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is `pending`.',
        private: false,
      },
      errors: {
        types: [
          'array',
        ],
        description: 'All the errors of `MessageBag`.',
        private: false,
      },
      error: {
        types: [
          'string',
        ],
        description: 'The first error of `MessageBag`.',
        private: false,
      },
      validationRules: {
        types: [
          'string',
          'array',
        ],
        description: 'The element&apos;s validation rules.',
        private: true,
      },
      isDanger: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has errors.',
        private: false,
      },
      isSuccess: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has been filled in successfully.',
        private: false,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      model: {
        types: [
          'any',
        ],
        description: 'Intermediary value between element&apos;s value and field&apos;s `v-model`. It is required when we need to transform the value format between the element and its field.',
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
      updateConditions: {
        description: 'Updates element conditions after they have been changed.',
        returns: 'void',
        private: true,
      },
      load: {
        description: 'Loads value to the element using optional [`formatLoad`](#option-format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`formatLoad`](#option-format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#method-load), only that it can\&apos;t format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`default`](#option-default) (or empty if `default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: 'Prepares the element.',
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
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
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
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires and emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      validate: {
        description: 'Checks each validation rule for the element (async).',
        returns: 'void',
        private: false,
      },
      dirt: {
        description: 'Flag the element as dirty.',
        returns: 'void',
        private: true,
      },
      clean: {
        description: 'Removes the element&apos;s `dirty` state.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Sets the validators to default state.',
        returns: 'void',
        private: false,
      },
      initMessageBag: {
        description: 'Initalizes MessageBag service.',
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
        types: [
          'component',
        ],
        description: 'The root form&apos;s component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default templates and classes.',
        private: false,
      },
    },
    events: {
      'change': {
        description: 'Triggered when the element&apos;s value is changed.',
        params: {
          newValue: {
            description: 'the new value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'the old value',
            types: [
              'string',
            ]
          },
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeCreate': {
        description: 'Triggered in beforeCreate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'created': {
        description: 'Triggered in created hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeMount': {
        description: 'Triggered in beforeMount hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'mounted': {
        description: 'Triggered in mounted hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUpdate': {
        description: 'Triggered in beforeUpdate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'updated': {
        description: 'Triggered in updated hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUnmount': {
        description: 'Triggered in beforeUnmount (or beforeDestroy in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'unmounted': {
        description: 'Triggered in unmounted (or destroyed in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
    },
    slots: {
    },
    views: [],
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
        required: true,
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
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
        required: false,
        private: true,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      removeClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClass: {
        required: 'false',
        default: 'null',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      removeClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      presets: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      view: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      views: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      size: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      templates: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      infoPosition: {
        required: 'false',
        default: 'right',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      messages: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      fieldName: {
        required: 'false',
        default: 'name|label',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      type: {
        required: 'false',
        default: 'list',
        types: [
          'string',
        ],
        required: false,
        private: true,
      },
      default: {
        required: 'false',
        default: 'undefined',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      disabled: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      onAdd: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onRemove: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onSort: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      element: {
        required: 'false',
        default: 'null',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      object: {
        required: 'false',
        default: 'null',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      initial: {
        required: 'false',
        default: '1',
        types: [
          'number',
        ],
        required: false,
        private: false,
      },
      min: {
        required: 'false',
        default: '-1',
        types: [
          'number',
        ],
        required: false,
        private: false,
      },
      max: {
        required: 'false',
        default: '-1',
        types: [
          'number',
        ],
        required: false,
        private: false,
      },
      addText: {
        required: 'false',
        default: 'locale.elements.list.add',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      sort: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      controls: {
        required: 'false',
        default: '{"add":true,"remove":true,"sort":true}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      storeOrder: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      order: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      orderBy: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      mounted: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has been already mounted.',
        default: 'true',
        private: false,
      },
      children$Array: {
        types: [
          'array,component',
        ],
        description: 'List of child element components.',
        default: '[children<component>]',
        private: true,
      },
      localDisabled: {
        types: [
          'boolean',
          'null',
        ],
        description: 'Helper to store whether the element is disabled via api (with .disable()).',
        default: 'null',
        private: true,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      list: {
        types: [
          'HTMLElement',
        ],
        description: 'The DOM element containing list items.',
        private: true,
      },
      sortable: {
        types: [
          'object',
        ],
        description: 'The `Sortable.js` instance.',
        private: true,
      },
      sorting: {
        types: [
          'boolean',
        ],
        description: 'Whether the list is currently being sorted (an item is dragged).',
        private: false,
      },
      state: {
        types: [
          'object',
        ],
        description: 'Helper property used to store the element states.',
        default: '{ dirty: false, validate: true }',
        private: true,
      },
      Validators: {
        types: [
          'array,Validator',
        ],
        description: 'An array containing all the validators of the element.',
        default: '[]',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Instance of MessageBag service. Custom errors and messages [can be added](/docs/1.x/validating-elements#custom-errors-and-messages).',
        default: 'MessageBag',
        private: false,
      },
      initialValue: {
        types: [
          'any',
        ],
        description: 'The initial value of the element.',
        private: true,
      },
      internalValue: {
        types: [
          'any',
        ],
        description: 'The store for the value of the element when we&apos;re not using external data (form&apos;s `v-model`).',
        private: true,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#method-show) or [`hide()`](#method-hide) methods.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: true,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: true,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: true,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: true,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: true,
      },
      children$: {
        types: [
          'object,Element',
        ],
        description: 'Child element components.',
        private: false,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'The component&apos;s classes.',
        private: false,
      },
      classesInstance: {
        types: [
          'MergeClasses',
        ],
        description: 'The classes instance (for testing purpose).',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether no [`conditions`](#option-conditions) are defined or they are all fulfilled.',
        private: false,
      },
      hasAdd: {
        types: [
          'boolean',
        ],
        description: 'Whether adding new items is allowed. Will return `false` if the element has [`isDisabled: true`](#property-is-disabled) or have reached [`max`](#option-max) items. Can be disabled manually by setting [`controls.add`](#option-controls) to `false`.',
        private: false,
      },
      hasRemove: {
        types: [
          'boolean',
        ],
        description: 'Whether remove items is allowed. Will return `false` if the element has [`isDisabled: true`](#property-is-disabled) or has <= [`min`](#option-min) items. Can be disabled manually by setting [`controls.remove`](#option-controls) to `false`.',
        private: false,
      },
      hasSort: {
        types: [
          'boolean',
        ],
        description: 'Whether list items should be sortable. Can be enabled by setting [`sort`](#option-sort) to `true`, but will return `false` if the element has [`isDisabled: true`](#property-is-disabled).',
        private: false,
      },
      addLabel: {
        types: [
          'string',
        ],
        description: 'The label of add button.',
        private: false,
      },
      requestData: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`submit`](#option-submit) is not disabled and [`available`](#property-available) is `true` (has no [`conditions`](#option-conditions) or they are fulfilled).',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of the element in `{[name]: value}` value format. This gets merged with the parent component&apos;s data.',
        private: false,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
      },
      isDisabled: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is disabled.',
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
        description: 'The generic name of the element constructed from label / floating or element name.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`label`](#option-label) option, a [#label](#slot-label) slot or `Vueform` component&apos;s [`forceLabels`](vueform#option-force-labels) option is `true`.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      nullValue: {
        types: [
          'any',
        ],
        description: 'The null value of the element.',
        private: true,
      },
      orderByName: {
        types: [
          'string',
        ],
        description: 'The name of the child (when using [`object`](#option-object)) by which the items should ordered.',
        private: false,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
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
        description: 'The path of the element&apos;s data using dot `.` syntax.',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      prototype: {
        types: [
          'object',
        ],
        description: 'The schema of a child element.',
        private: true,
      },
      isObject: {
        types: [
          'boolean',
        ],
        description: 'Whether childrens are objects.',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      isSortable: {
        types: [
          'boolean',
        ],
        description: 'Whether the list is sortable. Can be enabled with [`sort`](#option-sort) option, but it will disabled if [`isDisabled`](#property-is-disabled) is `true`.',
        private: false,
      },
      Templates: {
        types: [
          'object',
        ],
        description: 'The list of templates available to the element.',
        private: true,
      },
      template: {
        types: [
          'object',
        ],
        description: 'The component&apos;s template.',
        private: false,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s or any of its children&apos;s value was modified.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether the element and all of its children was already validated at least once.',
        private: false,
      },
      invalid: {
        types: [
          'boolean',
        ],
        description: 'Whether the element or any of its children has any failing rules.',
        private: false,
      },
      pending: {
        types: [
          'boolean',
        ],
        description: 'Whether the element or any of its children has any async rules in progress.',
        private: false,
      },
      debouncing: {
        types: [
          'boolean',
        ],
        description: 'Whether the element or any of its chilren has a validation rule with pending debounce.',
        private: false,
      },
      busy: {
        types: [
          'boolean',
        ],
        description: 'Whether the element or any of its children is `pending` or `debouncing`.',
        private: false,
      },
      childrenErrors: {
        types: [
          'array',
        ],
        description: 'The list of errors collected from children.',
        private: true,
      },
      errors: {
        types: [
          'array',
        ],
        description: 'All the errors of `MessageBag`.',
        private: false,
      },
      error: {
        types: [
          'string',
        ],
        description: 'The first error of `MessageBag`.',
        private: false,
      },
      validationRules: {
        types: [
          'string',
          'array',
        ],
        description: 'The element&apos;s validation rules.',
        private: true,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      model: {
        types: [
          'any',
        ],
        description: 'Intermediary value between element&apos;s value and field&apos;s `v-model`. It is required when we need to transform the value format between the element and its field.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
      Size: {
        types: [
          'string',
        ],
        description: 'The resolved size of the element and all of its child components.',
        private: false,
      },
      View: {
        types: [
          'string',
        ],
        description: 'The name of the resolved view for the component and the default view for its child components. Child component views can be overridden with [`views`](#option-views) option. This one should be used to determine the component&apos;s view in class functions.',
        private: false,
      },
      Views: {
        types: [
          'object',
        ],
        description: 'The name of the views for the components.',
        private: true,
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
      updateConditions: {
        description: 'Updates element conditions after they have been changed.',
        returns: 'void',
        private: true,
      },
      add: {
        description: 'Appends a new item.',
        returns: 'integer',
        params: {
          value: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'value of the appended element (optional)',
          },
        },
        private: false,
      },
      remove: {
        description: 'Removes an items by its index.',
        returns: 'void',
        params: {
          index: {
            types: [
              'number',
            ],
            required: 'true',
            description: 'index of items to be removed',
          },
        },
        private: false,
      },
      load: {
        description: 'Loads value to the element using optional [`formatLoad`](#option-format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`formatLoad`](#option-format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#method-load), only that it can\&apos;t format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`default`](#option-default) (or empty if `default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      handleAdd: {
        description: 'Handles the `add` event.',
        returns: 'void',
        private: true,
      },
      handleRemove: {
        description: 'Handles the `remove` event.',
        returns: 'void',
        params: {
          index: {
            types: [
              'number',
            ],
            required: 'true',
            description: 'index of child to be removed',
          },
        },
        private: true,
      },
      prepare: {
        description: 'Prepares the element.',
        returns: 'void',
        private: true,
      },
      disable: {
        description: 'Disables the element.',
        returns: 'void',
        private: false,
      },
      enable: {
        description: 'Enables the element even if it is disabled by [`disabled`](#disabled) option.',
        returns: 'void',
        private: false,
      },
      component: {
        description: 'Transforms an element `type` into the element&apos;s component name.',
        returns: 'string',
        params: {
          element: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'element `type`',
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
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
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
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires and emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      refreshOrderStore: {
        description: 'Sets the value of `storeOrder` field within a list of items to match the order.',
        returns: 'void',
        params: {
          value: {
            types: [
              'array',
            ],
            required: 'true',
            description: 'list of items',
          },
        },
        private: true,
      },
      handleSort: {
        description: 'Handles `sort` event.',
        params: {
          e: {
            types: [
              'Event',
            ],
            required: 'false',
            description: 'Sortable.js event',
          },
        },
        private: true,
      },
      initSortable: {
        description: 'Inits Sortable.js.',
        returns: 'void',
        private: true,
      },
      destroySortable: {
        description: 'Destroys Sortable.js.',
        returns: 'void',
        private: true,
      },
      validate: {
        description: 'Checks each validation rule for the element and validates children (async).',
        returns: 'void',
        private: false,
      },
      validateValidators: {
        description: 'Checks each validation rule for the element (async).',
        returns: 'void',
        private: false,
      },
      validateChildren: {
        description: 'Validates every child (async).',
        returns: 'void',
        private: false,
      },
      dirt: {
        description: 'Flag the element as dirty.',
        returns: 'void',
        private: true,
      },
      clean: {
        description: 'Removes the element&apos;s `dirty` state.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Sets the validators to default state.',
        returns: 'void',
        private: false,
      },
      initMessageBag: {
        description: 'Initalizes MessageBag service.',
        returns: 'void',
        private: true,
      },
      initValidation: {
        description: 'Initalizes validators.',
        returns: 'void',
        private: true,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#method-hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form&apos;s component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default templates and classes.',
        private: false,
      },
    },
    events: {
      'change': {
        description: 'Triggered when the element&apos;s value is changed.',
        params: {
          newValue: {
            description: 'the new value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'the old value',
            types: [
              'string',
            ]
          },
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'add': {
        description: 'Triggered when a new item is added to the list.',
        params: {
          index: {
            description: 'the index of the added item',
            types: [
              'number',
            ]
          },
          addedValue: {
            description: 'the added value',
            types: [
              'any',
            ]
          },
          newValue: {
            description: 'the element value after the item is added',
            types: [
              'array',
            ]
          },
       },
      },
      'remove': {
        description: 'Triggered when a new item is added to the list.',
        params: {
          index: {
            description: 'the index of the removed item',
            types: [
              'number',
            ]
          },
          value: {
            description: 'the element&apos;s value after the item is removed',
            types: [
              'array',
            ]
          },
       },
      },
      'sort': {
        description: 'Triggered when items are being sorted by the user, when [`sort: true`](#option-sort).',
        params: {
          value: {
            description: 'the element&apos;s value after sorting',
            types: [
              'array',
            ]
          },
       },
      },
      'beforeCreate': {
        description: 'Triggered in beforeCreate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'created': {
        description: 'Triggered in created hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeMount': {
        description: 'Triggered in beforeMount hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'mounted': {
        description: 'Triggered in mounted hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUpdate': {
        description: 'Triggered in beforeUpdate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'updated': {
        description: 'Triggered in updated hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUnmount': {
        description: 'Triggered in beforeUnmount (or beforeDestroy in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'unmounted': {
        description: 'Triggered in unmounted (or destroyed in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
    },
    slots: {
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
    },
    views: [],
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
        required: true,
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
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
        required: false,
        private: true,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      removeClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClass: {
        required: 'false',
        default: 'null',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      removeClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      presets: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      view: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      views: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      size: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      templates: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      infoPosition: {
        required: 'false',
        default: 'right',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      messages: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      fieldName: {
        required: 'false',
        default: 'name|label',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      type: {
        required: 'false',
        default: 'location',
        types: [
          'string',
        ],
        required: false,
        private: true,
      },
      default: {
        required: 'false',
        default: '{"country":null,"country_code":null,"state":null,"state_code":null,"city":null,"zip":null,"address":null,"formatted_address":null,"lat":null,"lng":null}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      debounce: {
        required: 'false',
        default: 'null',
        types: [
          'number',
        ],
        required: false,
        private: false,
      },
      disabled: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      floating: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'boolean',
        ],
        required: false,
        private: false,
      },
      id: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      placeholder: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      readonly: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      attrs: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      addons: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      provider: {
        required: 'false',
        default: 'google',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      displayKey: {
        required: 'false',
        default: 'formatted_address',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      extendOptions: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      mounted: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has been already mounted.',
        default: 'true',
        private: false,
      },
      localDisabled: {
        types: [
          'boolean',
          'null',
        ],
        description: 'Helper to store whether the element is disabled via api (with .disable()).',
        default: 'null',
        private: true,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      focused: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is focused.',
        private: false,
      },
      input: {
        types: [
          'HTMLElement',
        ],
        description: 'The main input field of the element.',
        private: false,
      },
      locationService: {
        types: [
          'class',
        ],
        description: 'The location service that&apos;s initalized once the component is mounted.',
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
        default: '{ dirty: false, validate: true }',
        private: true,
      },
      Validators: {
        types: [
          'array,Validator',
        ],
        description: 'An array containing all the validators of the element.',
        default: '[]',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Instance of MessageBag service. Custom errors and messages [can be added](/docs/1.x/validating-elements#custom-errors-and-messages).',
        default: 'MessageBag',
        private: false,
      },
      initialValue: {
        types: [
          'any',
        ],
        description: 'The initial value of the element.',
        private: true,
      },
      internalValue: {
        types: [
          'any',
        ],
        description: 'The store for the value of the element when we&apos;re not using external data (form&apos;s `v-model`).',
        private: true,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#method-show) or [`hide()`](#method-hide) methods.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: true,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: true,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: true,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: true,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: true,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'The component&apos;s classes.',
        private: false,
      },
      classesInstance: {
        types: [
          'MergeClasses',
        ],
        description: 'The classes instance (for testing purpose).',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether no [`conditions`](#option-conditions) are defined or they are all fulfilled.',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of the element in `{[name]: value}` value format. This gets merged with the parent component&apos;s data.',
        private: false,
      },
      requestData: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`submit`](#option-submit) is not disabled and [`available`](#property-available) is `true` (has no [`conditions`](#option-conditions) or they are fulfilled).',
        private: false,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
      },
      isDisabled: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is disabled.',
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
        description: 'The `id` of the <%field%>. If [`id`](#option-id) is not provided [`path`](#option-path) will be used.',
        private: false,
      },
      hasFloating: {
        types: [
          'boolean',
        ],
        description: 'Whether the element floating label.',
        private: false,
      },
      genericName: {
        types: [
          'string',
        ],
        description: 'The generic name of the element constructed from label / floating or element name.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`label`](#option-label) option, a [#label](#slot-label) slot or `Vueform` component&apos;s [`forceLabels`](vueform#option-force-labels) option is `true`.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      defaultOptions: {
        types: [
          'object',
        ],
        description: 'Default options for location provider. Can be extended with [`extendOptions`](#option-extend-options).',
        default: '{}',
        private: false,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
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
        description: 'The path of the element&apos;s data using dot `.` syntax.',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      Templates: {
        types: [
          'object',
        ],
        description: 'The list of templates available to the element.',
        private: true,
      },
      template: {
        types: [
          'object',
        ],
        description: 'The component&apos;s template.',
        private: false,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value was modified.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was already validated at least once.',
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
        description: 'Whether the element has a validation rule with pending debounce.',
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
        description: 'All the errors of `MessageBag`.',
        private: false,
      },
      error: {
        types: [
          'string',
        ],
        description: 'The first error of `MessageBag`.',
        private: false,
      },
      validationRules: {
        types: [
          'string',
          'array',
        ],
        description: 'The element&apos;s validation rules.',
        private: true,
      },
      isSuccess: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has been filled in successfully.',
        private: false,
      },
      isDanger: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has errors.',
        private: false,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      model: {
        types: [
          'any',
        ],
        description: 'Intermediary value between element&apos;s value and field&apos;s `v-model`. It is required when we need to transform the value format between the element and its field.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
      Size: {
        types: [
          'string',
        ],
        description: 'The resolved size of the element and all of its child components.',
        private: false,
      },
      View: {
        types: [
          'string',
        ],
        description: 'The name of the resolved view for the component and the default view for its child components. Child component views can be overridden with [`views`](#option-views) option. This one should be used to determine the component&apos;s view in class functions.',
        private: false,
      },
      Views: {
        types: [
          'object',
        ],
        description: 'The name of the views for the components.',
        private: true,
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
      updateConditions: {
        description: 'Updates element conditions after they have been changed.',
        returns: 'void',
        private: true,
      },
      load: {
        description: 'Loads value to the element using optional [`formatLoad`](#option-format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`formatLoad`](#option-format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#method-load), only that it can\&apos;t format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`default`](#option-default) (or empty if `default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: 'Prepares the element.',
        returns: 'void',
        private: true,
      },
      disable: {
        description: 'Disables the element.',
        returns: 'void',
        private: false,
      },
      enable: {
        description: 'Enables the element even if it is disabled by [`disabled`](#disabled) option.',
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
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
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
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires and emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      handleAddressChange: {
        description: 'Handles location service&apos;s address change.',
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
        private: true,
      },
      handleLocationBlur: {
        description: '',
        private: true,
      },
      initLocationService: {
        description: 'Initalizes location service. Can be used to re-initalize location service.',
        returns: 'void',
        private: false,
      },
      validate: {
        description: 'Checks each validation rule for the element on [`displayKey`](#option-display-key) property of the location object (async).',
        returns: 'void',
        private: false,
      },
      dirt: {
        description: 'Flag the element as dirty.',
        returns: 'void',
        private: true,
      },
      clean: {
        description: 'Removes the element&apos;s `dirty` state.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Sets the validators to default state.',
        returns: 'void',
        private: false,
      },
      initMessageBag: {
        description: 'Initalizes MessageBag service.',
        returns: 'void',
        private: true,
      },
      initValidation: {
        description: 'Initalizes validators.',
        returns: 'void',
        private: true,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#method-hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form&apos;s component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default templates and classes.',
        private: false,
      },
    },
    events: {
      'change': {
        description: 'Triggered when the element&apos;s value is changed.',
        params: {
          newValue: {
            description: 'the new value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'the old value',
            types: [
              'string',
            ]
          },
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeCreate': {
        description: 'Triggered in beforeCreate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'created': {
        description: 'Triggered in created hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeMount': {
        description: 'Triggered in beforeMount hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'mounted': {
        description: 'Triggered in mounted hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUpdate': {
        description: 'Triggered in beforeUpdate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'updated': {
        description: 'Triggered in updated hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUnmount': {
        description: 'Triggered in beforeUnmount (or beforeDestroy in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'unmounted': {
        description: 'Triggered in unmounted (or destroyed in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
    },
    slots: {
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'addon-before': {
        description: 'Prepends an addon to the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'addon-after': {
        description: 'Appends an addon to the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
    },
    views: [],
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
        required: true,
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
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
        required: false,
        private: true,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      removeClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClass: {
        required: 'false',
        default: 'null',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      removeClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      presets: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      view: {
        required: 'false',
        default: 'file',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      views: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      size: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      templates: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      infoPosition: {
        required: 'false',
        default: 'right',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      messages: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      fieldName: {
        required: 'false',
        default: 'name|label',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      type: {
        required: 'false',
        default: 'multifile',
        types: [
          'string',
        ],
        required: false,
        private: true,
      },
      default: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      initial: {
        required: 'false',
        default: '1',
        types: [
          'number',
        ],
        required: false,
        private: true,
      },
      disabled: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      onAdd: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onRemove: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onSort: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      drop: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      accept: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'array',
        ],
        required: false,
        private: false,
      },
      auto: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      file: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      sort: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      controls: {
        required: 'false',
        default: '{"add":true,"remove":true,"sort":true}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      object: {
        required: 'false',
        default: 'null',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      storeFile: {
        required: 'false',
        default: 'file',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      fields: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      storeOrder: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      order: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      orderBy: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      mounted: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has been already mounted.',
        default: 'true',
        private: false,
      },
      children$Array: {
        types: [
          'array,component',
        ],
        description: 'List of child element components.',
        default: '[children<component>]',
        private: true,
      },
      localDisabled: {
        types: [
          'boolean',
          'null',
        ],
        description: 'Helper to store whether the element is disabled via api (with .disable()).',
        default: 'null',
        private: true,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      input: {
        types: [
          'HTMLElement',
        ],
        description: 'The main input field of the element.',
        private: false,
      },
      list: {
        types: [
          'HTMLElement',
        ],
        description: 'The DOM element containing list items.',
        private: true,
      },
      sortable: {
        types: [
          'object',
        ],
        description: 'The `Sortable.js` instance.',
        private: true,
      },
      sorting: {
        types: [
          'boolean',
        ],
        description: 'Whether the list is currently being sorted (an item is dragged).',
        private: false,
      },
      state: {
        types: [
          'object',
        ],
        description: 'Helper property used to store the element states.',
        default: '{ dirty: false, validate: true }',
        private: true,
      },
      Validators: {
        types: [
          'array,Validator',
        ],
        description: 'An array containing all the validators of the element.',
        default: '[]',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Instance of MessageBag service. Custom errors and messages [can be added](/docs/1.x/validating-elements#custom-errors-and-messages).',
        default: 'MessageBag',
        private: false,
      },
      initialValue: {
        types: [
          'any',
        ],
        description: 'The initial value of the element.',
        private: true,
      },
      internalValue: {
        types: [
          'any',
        ],
        description: 'The store for the value of the element when we&apos;re not using external data (form&apos;s `v-model`).',
        private: true,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#method-show) or [`hide()`](#method-hide) methods.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: true,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: true,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: true,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: true,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: true,
      },
      children$: {
        types: [
          'object,Element',
        ],
        description: 'Child element components.',
        private: false,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'The component&apos;s classes.',
        private: false,
      },
      classesInstance: {
        types: [
          'MergeClasses',
        ],
        description: 'The classes instance (for testing purpose).',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether no [`conditions`](#option-conditions) are defined or they are all fulfilled.',
        private: false,
      },
      hasAdd: {
        types: [
          'boolean',
        ],
        description: 'Whether adding new files is allowed. Will return `false` if the element has [`isDisabled: true`](#property-is-disabled). Can be disabled manually by setting [`controls.add`](#option-controls) to `false`.',
        private: false,
      },
      hasRemove: {
        types: [
          'boolean',
        ],
        description: 'Whether remove files is allowed. Will return `false` if the element has [`isDisabled: true`](#property-is-disabled) or a temporary file upload is in progress. Can be disabled manually by setting [`controls.remove`](#option-controls) to `false`.',
        private: false,
      },
      hasSort: {
        types: [
          'boolean',
        ],
        description: 'Whether list files should be sortable. Can be enabled by setting [`sort`](#option-sort) to `true`, but will return `false` if the element has [`isDisabled: true`](#property-is-disabled) or a temporary file upload is in progress.',
        private: false,
      },
      requestData: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`submit`](#option-submit) is not disabled and [`available`](#property-available) is `true` (has no [`conditions`](#option-conditions) or they are fulfilled).',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of the element in `{[name]: value}` value format. This gets merged with the parent component&apos;s data.',
        private: false,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
      },
      isDisabled: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is disabled.',
        private: false,
      },
      canDrop: {
        types: [
          'boolean',
        ],
        description: 'Whether `drop` is enabled and browser supports dragging.',
        private: true,
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
        description: 'The generic name of the element constructed from label / floating or element name.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`label`](#option-label) option, a [#label](#slot-label) slot or `Vueform` component&apos;s [`forceLabels`](vueform#option-force-labels) option is `true`.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      preparing: {
        types: [
          'boolean',
        ],
        description: 'Whether any of the files are currently being uploaded to the server (initiated by form submit).',
        private: false,
      },
      hasUploading: {
        types: [
          'boolean',
        ],
        description: 'Whether any of the files are currently being uploaded to the server (initiated by the user).',
        private: false,
      },
      nullValue: {
        types: [
          'any',
        ],
        description: 'The null value of the element.',
        private: true,
      },
      orderByName: {
        types: [
          'string',
        ],
        description: 'The name of the field (when using [`fields`](#option-fiels)) by which the files should ordered.',
        private: false,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
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
        description: 'The path of the element&apos;s data using dot `.` syntax.',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      storeFileName: {
        types: [
          'string',
        ],
        description: 'The `name` of the child element that stores the filename.',
        private: true,
      },
      isObject: {
        types: [
          'boolean',
        ],
        description: 'Whether childrens are objects.',
        private: true,
      },
      prototype: {
        types: [
          'object',
        ],
        description: 'The schema of a child element.',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      isSortable: {
        types: [
          'boolean',
        ],
        description: 'Whether the list is sortable. Can be enabled with [`sort`](#option-sort) option, but it will disabled if [`isDisabled`](#property-is-disabled) is `true`.',
        private: false,
      },
      Templates: {
        types: [
          'object',
        ],
        description: 'The list of templates available to the element.',
        private: true,
      },
      template: {
        types: [
          'object',
        ],
        description: 'The component&apos;s template.',
        private: false,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s or any of its children&apos;s value was modified.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether the element and all of its children was already validated at least once.',
        private: false,
      },
      invalid: {
        types: [
          'boolean',
        ],
        description: 'Whether the element or any of its children has any failing rules.',
        private: false,
      },
      pending: {
        types: [
          'boolean',
        ],
        description: 'Whether the element or any of its children has any async rules in progress.',
        private: false,
      },
      debouncing: {
        types: [
          'boolean',
        ],
        description: 'Whether the element or any of its chilren has a validation rule with pending debounce.',
        private: false,
      },
      busy: {
        types: [
          'boolean',
        ],
        description: 'Whether the element or any of its children is `pending` or `debouncing`.',
        private: false,
      },
      childrenErrors: {
        types: [
          'array',
        ],
        description: 'The list of errors collected from children.',
        private: true,
      },
      errors: {
        types: [
          'array',
        ],
        description: 'All the errors of `MessageBag`.',
        private: false,
      },
      error: {
        types: [
          'string',
        ],
        description: 'The first error of `MessageBag`.',
        private: false,
      },
      validationRules: {
        types: [
          'string',
          'array',
        ],
        description: 'The element&apos;s validation rules.',
        private: true,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      model: {
        types: [
          'any',
        ],
        description: 'Intermediary value between element&apos;s value and field&apos;s `v-model`. It is required when we need to transform the value format between the element and its field.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
      Size: {
        types: [
          'string',
        ],
        description: 'The resolved size of the element and all of its child components.',
        private: false,
      },
      View: {
        types: [
          'string',
        ],
        description: 'The name of the resolved view for the component and the default view for its child components. Child component views can be overridden with [`views`](#option-views) option. This one should be used to determine the component&apos;s view in class functions.',
        private: false,
      },
      Views: {
        types: [
          'object',
        ],
        description: 'The name of the views for the components.',
        private: true,
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
      updateConditions: {
        description: 'Updates element conditions after they have been changed.',
        returns: 'void',
        private: true,
      },
      add: {
        description: 'Appends a new item.',
        returns: 'integer',
        params: {
          value: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'value of the appended element (optional)',
          },
        },
        private: false,
      },
      remove: {
        description: 'Removes an items by its index.',
        returns: 'void',
        params: {
          index: {
            types: [
              'number',
            ],
            required: 'true',
            description: 'index of items to be removed',
          },
        },
        private: false,
      },
      load: {
        description: 'Loads value to the element using optional [`formatLoad`](#option-format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`formatLoad`](#option-format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#method-load), only that it can\&apos;t format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`default`](#option-default) (or empty if `default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      handleAdd: {
        description: 'Handles the `add` event.',
        returns: 'void',
        private: true,
      },
      handleRemove: {
        description: 'Handles the `remove` event.',
        returns: 'void',
        params: {
          index: {
            types: [
              'number',
            ],
            required: 'true',
            description: 'index of child to be removed',
          },
        },
        private: true,
      },
      prepare: {
        description: 'Prepares the element.',
        returns: 'void',
        private: true,
      },
      disable: {
        description: 'Disables the element.',
        returns: 'void',
        private: false,
      },
      enable: {
        description: 'Enables the element even if it is disabled by [`disabled`](#disabled) option.',
        returns: 'void',
        private: false,
      },
      handleDrop: {
        description: 'Handles the `drop` event.',
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
        description: 'Transforms an element `type` into the element&apos;s component name.',
        returns: 'string',
        params: {
          element: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'element `type`',
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
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
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
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires and emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      handleChange: {
        description: 'Handles `change` event.',
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
        description: 'Handles `click` event.',
        returns: 'void',
        private: true,
      },
      refreshOrderStore: {
        description: 'Sets the value of `storeOrder` field within a list of items to match the order.',
        returns: 'void',
        params: {
          value: {
            types: [
              'array',
            ],
            required: 'true',
            description: 'list of items',
          },
        },
        private: true,
      },
      handleSort: {
        description: 'Handles `sort` event.',
        params: {
          e: {
            types: [
              'Event',
            ],
            required: 'false',
            description: 'Sortable.js event',
          },
        },
        private: true,
      },
      initSortable: {
        description: 'Inits Sortable.js.',
        returns: 'void',
        private: true,
      },
      destroySortable: {
        description: 'Destroys Sortable.js.',
        returns: 'void',
        private: true,
      },
      validate: {
        description: 'Checks each validation rule for the element and validates children (async).',
        returns: 'void',
        private: false,
      },
      validateValidators: {
        description: 'Checks each validation rule for the element (async).',
        returns: 'void',
        private: false,
      },
      validateChildren: {
        description: 'Validates every child (async).',
        returns: 'void',
        private: false,
      },
      dirt: {
        description: 'Flag the element as dirty.',
        returns: 'void',
        private: true,
      },
      clean: {
        description: 'Removes the element&apos;s `dirty` state.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Sets the validators to default state.',
        returns: 'void',
        private: false,
      },
      initMessageBag: {
        description: 'Initalizes MessageBag service.',
        returns: 'void',
        private: true,
      },
      initValidation: {
        description: 'Initalizes validators.',
        returns: 'void',
        private: true,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#method-hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form&apos;s component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default templates and classes.',
        private: false,
      },
    },
    events: {
      'change': {
        description: 'Triggered when the element&apos;s value is changed.',
        params: {
          newValue: {
            description: 'the new value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'the old value',
            types: [
              'string',
            ]
          },
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'add': {
        description: 'Triggered when a new item is added to the list.',
        params: {
          index: {
            description: 'the index of the added item',
            types: [
              'number',
            ]
          },
          addedValue: {
            description: 'the added value',
            types: [
              'File|object|string',
            ]
          },
          value: {
            description: 'the element&apos;s value after the item is added',
            types: [
              'array',
            ]
          },
       },
      },
      'remove': {
        description: 'Triggered when a new item is added to the list.',
        params: {
          index: {
            description: 'the index of the removed item',
            types: [
              'number',
            ]
          },
          value: {
            description: 'the element&apos;s value after the item is removed',
            types: [
              'array',
            ]
          },
       },
      },
      'sort': {
        description: 'Triggered when items are being sorted by the user, when [`sort: true`](#option-sort).',
        params: {
          value: {
            description: 'the element&apos;s value after sorting',
            types: [
              'array',
            ]
          },
       },
      },
      'beforeCreate': {
        description: 'Triggered in beforeCreate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'created': {
        description: 'Triggered in created hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeMount': {
        description: 'Triggered in beforeMount hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'mounted': {
        description: 'Triggered in mounted hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUpdate': {
        description: 'Triggered in beforeUpdate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'updated': {
        description: 'Triggered in updated hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUnmount': {
        description: 'Triggered in beforeUnmount (or beforeDestroy in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'unmounted': {
        description: 'Triggered in unmounted (or destroyed in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
    },
    slots: {
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
    },
    views: ['image', 'gallery'],
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
        required: true,
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
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
        required: false,
        private: true,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      removeClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClass: {
        required: 'false',
        default: 'null',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      removeClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      presets: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      view: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      views: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      size: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      templates: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      infoPosition: {
        required: 'false',
        default: 'right',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      messages: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      fieldName: {
        required: 'false',
        default: 'name|label',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      type: {
        required: 'false',
        default: 'multiselect',
        types: [
          'string',
        ],
        required: false,
        private: true,
      },
      default: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      disabled: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      floating: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'boolean',
        ],
        required: false,
        private: false,
      },
      id: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      placeholder: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        native: false,
        required: false,
        private: false,
      },
      attrs: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      onSelect: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onDeselect: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onSearchChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onOpen: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onClose: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onClear: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onPaste: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      native: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      items: {
        required: 'false',
        default: '{}',
        types: [
          'object',
          'array',
          'function',
          'string',
        ],
        required: false,
        private: false,
      },
      labelProp: {
        required: 'false',
        default: 'label',
        types: [
          'string',
        ],
        native: false,
        required: false,
        private: false,
      },
      valueProp: {
        required: 'false',
        default: 'value',
        types: [
          'string',
        ],
        native: false,
        required: false,
        private: false,
      },
      search: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        native: false,
        required: false,
        private: false,
      },
      trackBy: {
        required: 'false',
        default: 'label',
        types: [
          'string',
        ],
        native: false,
        required: false,
        private: false,
      },
      strict: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        native: false,
        required: false,
        private: false,
      },
      multipleLabel: {
        required: 'false',
        default: 'undefined',
        types: [
          'function',
        ],
        native: false,
        required: false,
        private: false,
      },
      multipleLabelSingle: {
        required: 'false',
        default: 'locale.vueform.multiselect.multipleLabelOne',
        types: [
          'string',
        ],
        native: false,
        required: false,
        private: false,
      },
      multipleLabelMultiple: {
        required: 'false',
        default: 'locale.vueform.multiselect.multipleLabelMore',
        types: [
          'string',
        ],
        native: false,
        required: false,
        private: false,
      },
      create: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        native: false,
        required: false,
        private: false,
      },
      appendNewOption: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        native: false,
        required: false,
        private: false,
      },
      addOptionOn: {
        required: 'false',
        default: '["enter"]',
        types: [
          'array',
        ],
        native: false,
        required: false,
        private: false,
      },
      object: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        native: false,
        required: false,
        private: false,
      },
      limit: {
        required: 'false',
        default: '-1',
        types: [
          'number',
        ],
        native: false,
        required: false,
        private: false,
      },
      max: {
        required: 'false',
        default: '-1',
        types: [
          'number',
        ],
        native: false,
        required: false,
        private: false,
      },
      groups: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        native: false,
        required: false,
        private: false,
      },
      groupLabel: {
        required: 'false',
        default: 'label',
        types: [
          'string',
        ],
        native: false,
        required: false,
        private: false,
      },
      groupOptions: {
        required: 'false',
        default: 'items',
        types: [
          'string',
        ],
        native: false,
        required: false,
        private: false,
      },
      groupHideEmpty: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        native: false,
        required: false,
        private: false,
      },
      groupSelect: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        native: false,
        required: false,
        private: false,
      },
      openDirection: {
        required: 'false',
        default: 'bottom',
        types: [
          'string',
        ],
        native: false,
        required: false,
        private: false,
      },
      canClear: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        native: false,
        required: false,
        private: false,
      },
      clearOnSelect: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        native: false,
        required: false,
        private: false,
      },
      closeOnSelect: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        native: false,
        required: false,
        private: false,
      },
      delay: {
        required: 'false',
        default: '-1',
        types: [
          'number',
        ],
        native: false,
        required: false,
        private: false,
      },
      minChars: {
        required: 'false',
        default: '0',
        types: [
          'number',
        ],
        native: false,
        required: false,
        private: false,
      },
      resolveOnLoad: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        native: false,
        required: false,
        private: false,
      },
      filterResults: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        native: false,
        required: false,
        private: false,
      },
      clearOnSearch: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        native: false,
        required: false,
        private: false,
      },
      hideSelected: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        native: false,
        required: false,
        private: false,
      },
      caret: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        native: false,
        required: false,
        private: false,
      },
      loading: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        native: false,
        required: false,
        private: false,
      },
      noOptionsText: {
        required: 'false',
        default: 'locale.multiselect.noOptions',
        types: [
          'string',
        ],
        native: false,
        required: false,
        private: false,
      },
      noResultsText: {
        required: 'false',
        default: 'locale.multiselect.noResults',
        types: [
          'string',
        ],
        native: false,
        required: false,
        private: false,
      },
      autocomplete: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        native: false,
        required: false,
        private: false,
      },
      inputType: {
        required: 'false',
        default: 'text',
        types: [
          'string',
        ],
        native: false,
        required: false,
        private: false,
      },
      extendOptions: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      mounted: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has been already mounted.',
        default: 'true',
        private: false,
      },
      localDisabled: {
        types: [
          'boolean',
          'null',
        ],
        description: 'Helper to store whether the element is disabled via api (with .disable()).',
        default: 'null',
        private: true,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      focused: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is focused.',
        private: false,
      },
      input: {
        types: [
          'HTMLElement',
        ],
        description: 'The main input field of the element.',
        private: false,
      },
      state: {
        types: [
          'object',
        ],
        description: 'Helper property used to store the element states.',
        default: '{ dirty: false, validate: true }',
        private: true,
      },
      Validators: {
        types: [
          'array,Validator',
        ],
        description: 'An array containing all the validators of the element.',
        default: '[]',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Instance of MessageBag service. Custom errors and messages [can be added](/docs/1.x/validating-elements#custom-errors-and-messages).',
        default: 'MessageBag',
        private: false,
      },
      initialValue: {
        types: [
          'any',
        ],
        description: 'The initial value of the element.',
        private: true,
      },
      internalValue: {
        types: [
          'any',
        ],
        description: 'The store for the value of the element when we&apos;re not using external data (form&apos;s `v-model`).',
        private: true,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#method-show) or [`hide()`](#method-hide) methods.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      resolvedOptions: {
        types: [
          'array',
        ],
        description: 'Contains the resolved options.',
        private: false,
      },
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: true,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: true,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: true,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: true,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: true,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'The component&apos;s classes.',
        private: false,
      },
      classesInstance: {
        types: [
          'MergeClasses',
        ],
        description: 'The classes instance (for testing purpose).',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether no [`conditions`](#option-conditions) are defined or they are all fulfilled.',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of the element in `{[name]: value}` value format. This gets merged with the parent component&apos;s data.',
        private: false,
      },
      requestData: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`submit`](#option-submit) is not disabled and [`available`](#property-available) is `true` (has no [`conditions`](#option-conditions) or they are fulfilled).',
        private: false,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
      },
      isDisabled: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is disabled.',
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
        description: 'The `id` of the <%field%>. If [`id`](#option-id) is not provided [`path`](#option-path) will be used.',
        private: false,
      },
      hasFloating: {
        types: [
          'boolean',
        ],
        description: 'Whether the element floating label.',
        private: false,
      },
      genericName: {
        types: [
          'string',
        ],
        description: 'The generic name of the element constructed from label / floating or element name.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`label`](#option-label) option, a [#label](#slot-label) slot or `Vueform` component&apos;s [`forceLabels`](vueform#option-force-labels) option is `true`.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      isLoading: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is in loading state.',
        private: false,
      },
      nullValue: {
        types: [
          'any',
        ],
        description: 'The null value of the element.',
        private: true,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
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
        description: 'The path of the element&apos;s data using dot `.` syntax.',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      Templates: {
        types: [
          'object',
        ],
        description: 'The list of templates available to the element.',
        private: true,
      },
      template: {
        types: [
          'object',
        ],
        description: 'The component&apos;s template.',
        private: false,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value was modified.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was already validated at least once.',
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
      busy: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is `pending`.',
        private: false,
      },
      errors: {
        types: [
          'array',
        ],
        description: 'All the errors of `MessageBag`.',
        private: false,
      },
      error: {
        types: [
          'string',
        ],
        description: 'The first error of `MessageBag`.',
        private: false,
      },
      validationRules: {
        types: [
          'string',
          'array',
        ],
        description: 'The element&apos;s validation rules.',
        private: true,
      },
      isDanger: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has errors.',
        private: false,
      },
      isSuccess: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has been filled in successfully.',
        private: false,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      model: {
        types: [
          'any',
        ],
        description: 'Intermediary value between element&apos;s value and field&apos;s `v-model`. It is required when we need to transform the value format between the element and its field.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
      Size: {
        types: [
          'string',
        ],
        description: 'The resolved size of the element and all of its child components.',
        private: false,
      },
      View: {
        types: [
          'string',
        ],
        description: 'The name of the resolved view for the component and the default view for its child components. Child component views can be overridden with [`views`](#option-views) option. This one should be used to determine the component&apos;s view in class functions.',
        private: false,
      },
      Views: {
        types: [
          'object',
        ],
        description: 'The name of the views for the components.',
        private: true,
      },
    },
    methods: {
      updateItems: {
        description: 'Fetches & updates select options when using `async` options. Receives [`el$`](#property-el) as first param.',
        returns: 'void',
        params: {
          disable: {
            types: [
              'boolean',
            ],
            required: 'true',
            description: 'whether the input field should be disabled while fetching options',
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
      updateConditions: {
        description: 'Updates element conditions after they have been changed.',
        returns: 'void',
        private: true,
      },
      load: {
        description: 'Loads value to the element using optional [`formatLoad`](#option-format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`formatLoad`](#option-format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#method-load), only that it can\&apos;t format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`default`](#option-default) (or empty if `default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: 'Prepares the element.',
        returns: 'void',
        private: true,
      },
      disable: {
        description: 'Disables the element.',
        returns: 'void',
        private: false,
      },
      enable: {
        description: 'Enables the element even if it is disabled by [`disabled`](#disabled) option.',
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
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
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
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires and emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      handleSelect: {
        description: 'Handles `select` event.',
        returns: 'void',
        params: {
          option: {
            types: [
              'object',
            ],
            required: 'true',
            description: 'the selected option object',
          },
        },
        private: true,
      },
      handleDeselect: {
        description: 'Handles `deselect` event.',
        returns: 'void',
        params: {
          option: {
            types: [
              'object',
            ],
            required: 'true',
            description: 'the deselected option object',
          },
        },
        private: true,
      },
      handleSearchChange: {
        description: 'Handles `search-change` event.',
        returns: 'void',
        params: {
          searchQuery: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the current search query',
          },
        },
        private: true,
      },
      handleOpen: {
        description: 'Handles `open` event.',
        returns: 'void',
        private: true,
      },
      handleClose: {
        description: 'Handles `close` event.',
        returns: 'void',
        private: true,
      },
      handleClear: {
        description: 'Handles `clear` event.',
        returns: 'void',
        private: true,
      },
      handlePaste: {
        description: 'Handles `paste` event.',
        returns: 'void',
        params: {
          e: {
            types: [
              'Event',
            ],
            required: 'false',
            description: 'event',
          },
        },
        private: true,
      },
      handleTag: {
        description: 'Handles `tag` event.',
        returns: 'void',
        params: {
          searchQuery: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the current search query',
          },
        },
        private: true,
      },
      select: {
        description: 'Selects one or more options.',
        returns: 'void',
        params: {
          options: {
            types: [
              'str',
              'array',
            ],
            required: 'true',
            description: 'value(s) of the option(s) to select',
          },
        },
        private: false,
      },
      deselect: {
        description: 'Deselects one or more options.',
        returns: 'void',
        params: {
          options: {
            types: [
              'str',
              'array',
            ],
            required: 'true',
            description: 'value(s) of the option(s) to deselect',
          },
        },
        private: false,
      },
      validate: {
        description: 'Checks each validation rule for the element (async).',
        returns: 'void',
        private: false,
      },
      dirt: {
        description: 'Flag the element as dirty.',
        returns: 'void',
        private: true,
      },
      clean: {
        description: 'Removes the element&apos;s `dirty` state.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Sets the validators to default state.',
        returns: 'void',
        private: false,
      },
      initMessageBag: {
        description: 'Initalizes MessageBag service.',
        returns: 'void',
        private: true,
      },
      initValidation: {
        description: 'Initalizes validators.',
        returns: 'void',
        private: true,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#method-hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form&apos;s component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default templates and classes.',
        private: false,
      },
    },
    events: {
      'change': {
        description: 'Triggered when the element&apos;s value is changed.',
        params: {
          newValue: {
            description: 'the new value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'the old value',
            types: [
              'string',
            ]
          },
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'select': {
        description: 'Triggered when an option is selected when using [`native: false`](#option-native).',
        params: {
          option: {
            description: 'the selected option',
            types: [
              'object',
            ]
          },
       },
      },
      'deselect': {
        description: 'Triggered when an option is deselected when using [`native: false`](#option-native).',
        params: {
          option: {
            description: 'the deselected option',
            types: [
              'object',
            ]
          },
       },
      },
      'search-change': {
        description: 'Triggered when the search query changes when using [`search: true`](#option-search).',
        params: {
          searchQuery: {
            description: 'the search value',
            types: [
              'string|null',
            ]
          },
       },
      },
      'open': {
        description: 'Triggered when the dropdown list is opened when using [`native: false`](#option-native).',
      },
      'close': {
        description: 'Triggered when the dropdown list is closed when using [`native: false`](#option-native).',
      },
      'clear': {
        description: 'Triggered when the value is cleared when using [`native: true`](#option-native).',
      },
      'paste': {
        description: 'Triggered when text is pasted to the search input when using [`search: true`](#option-search).',
        params: {
          event: {
            description: 'the paste Event',
            types: [
              'Event',
            ]
          },
       },
      },
      'beforeCreate': {
        description: 'Triggered in beforeCreate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'created': {
        description: 'Triggered in created hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeMount': {
        description: 'Triggered in beforeMount hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'mounted': {
        description: 'Triggered in mounted hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUpdate': {
        description: 'Triggered in beforeUpdate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'updated': {
        description: 'Triggered in updated hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUnmount': {
        description: 'Triggered in beforeUnmount (or beforeDestroy in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'unmounted': {
        description: 'Triggered in unmounted (or destroyed in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
    },
    slots: {
      'option': {
        description: 'Replaces the default option template.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
          option: {
            description: 'the option object',
            types: [
              'object',
            ],
          },
          search: {
            description: 'the current value of search input',
            types: [
              'string|null',
            ],
          },
        },
      },
      'multiple-label': {
        description: 'Replaces the input&apos;s inner label that is displayed when at least one option is selected.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
          values: {
            description: 'the list of selected options',
            types: [
              'array<object>',
            ],
          },
        },
      },
      'placeholder': {
        description: 'Replaces the default template for the input&apos;s [`placeholder`](#option-placeholder).',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'group-label': {
        description: 'Replaces the default group header when [`groups`](#option-groups) is `true`.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
          group: {
            description: 'the group object',
            types: [
              'object',
            ],
          },
        },
      },
      'before-list': {
        description: 'Prepends the content of the slot to the option list.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after-list': {
        description: 'Appends the content of the slot to the option list.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'no-results': {
        description: 'Replaces the default template that is shown when the input has options, but the user search does not have any results. Can be also set without overriding the template with [`noResultsText`](#option-no-results-text) option.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'no-options': {
        description: 'Replaces the default template that is shown when the input has no options. Can be also set without overriding the template with [`noOptionsText`](#option-no-options-text) option.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'caret': {
        description: 'Replaces the small triangle displayed on the right of the input when [`caret`](#option-caret) is `true`.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'spinner': {
        description: 'Replaces the spinner shown when async options are loading or [`loading`](#option-loading) is `true`.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'clear': {
        description: 'Replaces the clear icon shown when the input has at least one selected options and [`canClear`](#option-can-clear) is `true`.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
          clear: {
            description: 'clears the input value',
            types: [
              'function',
            ],
          },
        },
      },
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
    },
    views: [],
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
        required: true,
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
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
        required: false,
        private: true,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      removeClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClass: {
        required: 'false',
        default: 'null',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      removeClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      presets: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      view: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      views: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      size: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      templates: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      infoPosition: {
        required: 'false',
        default: 'right',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      type: {
        required: 'false',
        default: 'object',
        types: [
          'string',
        ],
        required: false,
        private: true,
      },
      default: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      schema: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      embed: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      onRemove: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      mounted: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has been already mounted.',
        default: 'true',
        private: false,
      },
      children$Array: {
        types: [
          'array,component',
        ],
        description: 'List of child element components.',
        default: '[children<component>]',
        private: true,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Instance of MessageBag service. Custom errors and messages [can be added](/docs/1.x/validating-elements#custom-errors-and-messages).',
        default: 'MessageBag',
        private: false,
      },
      internalValue: {
        types: [
          'any',
        ],
        description: 'The store for the value of the element when we&apos;re not using external data (form&apos;s `v-model`).',
        private: true,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#method-show) or [`hide()`](#method-hide) methods.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: true,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: true,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: true,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: true,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: true,
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
        description: 'Child element components.',
        private: false,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'The component&apos;s classes.',
        private: false,
      },
      classesInstance: {
        types: [
          'MergeClasses',
        ],
        description: 'The classes instance (for testing purpose).',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether no [`conditions`](#option-conditions) are defined or they are all fulfilled.',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of the element in `{[name]: value}` value format. This gets merged with the parent component&apos;s data.',
        private: false,
      },
      requestData: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`submit`](#option-submit) is not disabled and [`available`](#property-available) is `true` (has no [`conditions`](#option-conditions) or they are fulfilled).',
        private: false,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`label`](#option-label) option, a [#label](#slot-label) slot or `Vueform` component&apos;s [`forceLabels`](vueform#option-force-labels) option is `true`.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      nullValue: {
        types: [
          'any',
        ],
        description: 'The null value of the element.',
        private: true,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
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
        description: 'The path of the element&apos;s data using dot `.` syntax.',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      Templates: {
        types: [
          'object',
        ],
        description: 'The list of templates available to the element.',
        private: true,
      },
      template: {
        types: [
          'object',
        ],
        description: 'The component&apos;s template.',
        private: false,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any child with modified value.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether all the children were validated at least once.',
        private: false,
      },
      invalid: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any child with failing rules.',
        private: false,
      },
      pending: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any child with async rules in progress.',
        private: false,
      },
      debouncing: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any child with validation rule with pending debounce.',
        private: false,
      },
      busy: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any `busy` child.',
        private: false,
      },
      errors: {
        types: [
          'array',
        ],
        description: 'All the errors of `MessageBag`.',
        private: false,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
      Size: {
        types: [
          'string',
        ],
        description: 'The resolved size of the element and all of its child components.',
        private: false,
      },
      View: {
        types: [
          'string',
        ],
        description: 'The name of the resolved view for the component and the default view for its child components. Child component views can be overridden with [`views`](#option-views) option. This one should be used to determine the component&apos;s view in class functions.',
        private: false,
      },
      Views: {
        types: [
          'object',
        ],
        description: 'The name of the views for the components.',
        private: true,
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
      updateConditions: {
        description: 'Updates element conditions after they have been changed.',
        returns: 'void',
        private: true,
      },
      load: {
        description: 'Loads value to the element using optional [`formatLoad`](#option-format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`formatLoad`](#option-format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#method-load), only that it can\&apos;t format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`default`](#option-default) (or empty if `default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: 'Prepares the element.',
        returns: 'void',
        private: true,
      },
      component: {
        description: 'Transforms an element `type` into the element&apos;s component name.',
        returns: 'string',
        params: {
          element: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'element `type`',
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
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
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
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires and emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      validate: {
        description: 'Validates every child (async).',
        returns: 'void',
        private: false,
      },
      clean: {
        description: 'Removes every child&apos;s `dirty` state.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Sets the validators of children to default state.',
        returns: 'void',
        private: false,
      },
      initMessageBag: {
        description: 'Initalizes MessageBag service.',
        returns: 'void',
        private: true,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#method-hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form&apos;s component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default templates and classes.',
        private: false,
      },
    },
    events: {
      'change': {
        description: 'Triggered when the element&apos;s value is changed.',
        params: {
          newValue: {
            description: 'the new value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'the old value',
            types: [
              'string',
            ]
          },
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'remove': {
        private: true,
      },
      'beforeCreate': {
        description: 'Triggered in beforeCreate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'created': {
        description: 'Triggered in created hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeMount': {
        description: 'Triggered in beforeMount hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'mounted': {
        description: 'Triggered in mounted hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUpdate': {
        description: 'Triggered in beforeUpdate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'updated': {
        description: 'Triggered in updated hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUnmount': {
        description: 'Triggered in beforeUnmount (or beforeDestroy in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'unmounted': {
        description: 'Triggered in unmounted (or destroyed in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
    },
    slots: {
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
    },
    views: [],
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
        required: true,
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
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
        required: false,
        private: true,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      removeClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClass: {
        required: 'false',
        default: 'null',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      removeClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      presets: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      view: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      views: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      size: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      templates: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      infoPosition: {
        required: 'false',
        default: 'right',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      messages: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      fieldName: {
        required: 'false',
        default: 'name|label',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      type: {
        required: 'false',
        default: 'radio',
        types: [
          'string',
        ],
        required: false,
        private: true,
      },
      default: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'number',
        ],
        required: false,
        private: false,
      },
      disabled: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      id: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      radioName: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      text: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      mounted: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has been already mounted.',
        default: 'true',
        private: false,
      },
      localDisabled: {
        types: [
          'boolean',
          'null',
        ],
        description: 'Helper to store whether the element is disabled via api (with .disable()).',
        default: 'null',
        private: true,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      input: {
        types: [
          'HTMLElement',
        ],
        description: 'The main input field of the element.',
        private: false,
      },
      state: {
        types: [
          'object',
        ],
        description: 'Helper property used to store the element states.',
        default: '{ dirty: false, validate: true }',
        private: true,
      },
      Validators: {
        types: [
          'array,Validator',
        ],
        description: 'An array containing all the validators of the element.',
        default: '[]',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Instance of MessageBag service. Custom errors and messages [can be added](/docs/1.x/validating-elements#custom-errors-and-messages).',
        default: 'MessageBag',
        private: false,
      },
      initialValue: {
        types: [
          'any',
        ],
        description: 'The initial value of the element.',
        private: true,
      },
      internalValue: {
        types: [
          'any',
        ],
        description: 'The store for the value of the element when we&apos;re not using external data (form&apos;s `v-model`).',
        private: true,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#method-show) or [`hide()`](#method-hide) methods.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: true,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: true,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: true,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: true,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: true,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'The component&apos;s classes.',
        private: false,
      },
      classesInstance: {
        types: [
          'MergeClasses',
        ],
        description: 'The classes instance (for testing purpose).',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether no [`conditions`](#option-conditions) are defined or they are all fulfilled.',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of the element in `{[name]: value}` value format. This gets merged with the parent component&apos;s data.',
        private: false,
      },
      requestData: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`submit`](#option-submit) is not disabled and [`available`](#property-available) is `true` (has no [`conditions`](#option-conditions) or they are fulfilled).',
        private: false,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
      },
      isDisabled: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is disabled.',
        private: false,
      },
      fieldId: {
        types: [
          'string',
        ],
        description: 'The `id` of the <%field%>. If [`id`](#option-id) is not provided [`path`](#option-path) will be used.',
        private: false,
      },
      genericName: {
        types: [
          'string',
        ],
        description: 'The generic name of the element constructed from label / floating or element name.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`label`](#option-label) option, a [#label](#slot-label) slot or `Vueform` component&apos;s [`forceLabels`](vueform#option-force-labels) option is `true`.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      nullValue: {
        types: [
          'any',
        ],
        description: 'The null value of the element.',
        private: true,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
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
        description: 'The path of the element&apos;s data using dot `.` syntax.',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      inputName: {
        types: [
          'string',
        ],
        description: 'The `name` attribute of the element. If [`id`](#option-id) is not provided [`name`](#option-name) will be used.',
        private: false,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      Templates: {
        types: [
          'object',
        ],
        description: 'The list of templates available to the element.',
        private: true,
      },
      template: {
        types: [
          'object',
        ],
        description: 'The component&apos;s template.',
        private: false,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value was modified.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was already validated at least once.',
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
      busy: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is `pending`.',
        private: false,
      },
      errors: {
        types: [
          'array',
        ],
        description: 'All the errors of `MessageBag`.',
        private: false,
      },
      error: {
        types: [
          'string',
        ],
        description: 'The first error of `MessageBag`.',
        private: false,
      },
      validationRules: {
        types: [
          'string',
          'array',
        ],
        description: 'The element&apos;s validation rules.',
        private: true,
      },
      isDanger: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has errors.',
        private: false,
      },
      isSuccess: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has been filled in successfully.',
        private: false,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      model: {
        types: [
          'any',
        ],
        description: 'Intermediary value between element&apos;s value and field&apos;s `v-model`. It is required when we need to transform the value format between the element and its field.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
      Size: {
        types: [
          'string',
        ],
        description: 'The resolved size of the element and all of its child components.',
        private: false,
      },
      View: {
        types: [
          'string',
        ],
        description: 'The name of the resolved view for the component and the default view for its child components. Child component views can be overridden with [`views`](#option-views) option. This one should be used to determine the component&apos;s view in class functions.',
        private: false,
      },
      Views: {
        types: [
          'object',
        ],
        description: 'The name of the views for the components.',
        private: true,
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
      updateConditions: {
        description: 'Updates element conditions after they have been changed.',
        returns: 'void',
        private: true,
      },
      load: {
        description: 'Loads value to the element using optional [`formatLoad`](#option-format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`formatLoad`](#option-format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#method-load), only that it can\&apos;t format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`default`](#option-default) (or empty if `default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: 'Prepares the element.',
        returns: 'void',
        private: true,
      },
      disable: {
        description: 'Disables the element.',
        returns: 'void',
        private: false,
      },
      enable: {
        description: 'Enables the element even if it is disabled by [`disabled`](#disabled) option.',
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
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
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
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires and emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      check: {
        description: 'Checks the radio.',
        returns: 'void',
        private: false,
      },
      uncheck: {
        description: 'Unhecks the radio.',
        returns: 'void',
        private: false,
      },
      validate: {
        description: 'Checks each validation rule for the element (async).',
        returns: 'void',
        private: false,
      },
      dirt: {
        description: 'Flag the element as dirty.',
        returns: 'void',
        private: true,
      },
      clean: {
        description: 'Removes the element&apos;s `dirty` state.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Sets the validators to default state.',
        returns: 'void',
        private: false,
      },
      initMessageBag: {
        description: 'Initalizes MessageBag service.',
        returns: 'void',
        private: true,
      },
      initValidation: {
        description: 'Initalizes validators.',
        returns: 'void',
        private: true,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#method-hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form&apos;s component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default templates and classes.',
        private: false,
      },
    },
    events: {
      'change': {
        description: 'Triggered when the element&apos;s value is changed.',
        params: {
          newValue: {
            description: 'the new value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'the old value',
            types: [
              'string',
            ]
          },
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeCreate': {
        description: 'Triggered in beforeCreate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'created': {
        description: 'Triggered in created hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeMount': {
        description: 'Triggered in beforeMount hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'mounted': {
        description: 'Triggered in mounted hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUpdate': {
        description: 'Triggered in beforeUpdate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'updated': {
        description: 'Triggered in updated hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUnmount': {
        description: 'Triggered in beforeUnmount (or beforeDestroy in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'unmounted': {
        description: 'Triggered in unmounted (or destroyed in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
    },
    slots: {
      'default': {
        description: 'Renders a label for the radio.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
    },
    views: [],
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
        required: true,
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
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
        required: false,
        private: true,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      removeClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClass: {
        required: 'false',
        default: 'null',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      removeClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      presets: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      view: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      views: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      size: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      templates: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      infoPosition: {
        required: 'false',
        default: 'right',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      messages: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      fieldName: {
        required: 'false',
        default: 'name|label',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      type: {
        required: 'false',
        default: 'radiogroup',
        types: [
          'string',
        ],
        required: false,
        private: true,
      },
      default: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'number',
        ],
        required: false,
        private: false,
      },
      disabled: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      id: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      items: {
        required: 'false',
        default: '{}',
        types: [
          'object',
          'array',
          'function',
          'string',
        ],
        required: false,
        private: false,
      },
      disables: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      mounted: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has been already mounted.',
        default: 'true',
        private: false,
      },
      disabledItems: {
        types: [
          'array',
        ],
        description: 'List of option keys to be disabled.',
        default: '[]',
        private: true,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      state: {
        types: [
          'object',
        ],
        description: 'Helper property used to store the element states.',
        default: '{ dirty: false, validate: true }',
        private: true,
      },
      Validators: {
        types: [
          'array,Validator',
        ],
        description: 'An array containing all the validators of the element.',
        default: '[]',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Instance of MessageBag service. Custom errors and messages [can be added](/docs/1.x/validating-elements#custom-errors-and-messages).',
        default: 'MessageBag',
        private: false,
      },
      initialValue: {
        types: [
          'any',
        ],
        description: 'The initial value of the element.',
        private: true,
      },
      internalValue: {
        types: [
          'any',
        ],
        description: 'The store for the value of the element when we&apos;re not using external data (form&apos;s `v-model`).',
        private: true,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#method-show) or [`hide()`](#method-hide) methods.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      resolvedOptions: {
        types: [
          'array',
        ],
        description: 'Contains the available items. If [`items`](#option-items) are async this contains the resolved items.',
        private: false,
      },
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: true,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: true,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: true,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: true,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: true,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'The component&apos;s classes.',
        private: false,
      },
      classesInstance: {
        types: [
          'MergeClasses',
        ],
        description: 'The classes instance (for testing purpose).',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether no [`conditions`](#option-conditions) are defined or they are all fulfilled.',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of the element in `{[name]: value}` value format. This gets merged with the parent component&apos;s data.',
        private: false,
      },
      requestData: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`submit`](#option-submit) is not disabled and [`available`](#property-available) is `true` (has no [`conditions`](#option-conditions) or they are fulfilled).',
        private: false,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
      },
      isDisabled: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is disabled.',
        private: false,
      },
      fieldId: {
        types: [
          'string',
        ],
        description: 'The `id` of the <%field%>. If [`id`](#option-id) is not provided [`path`](#option-path) will be used.',
        private: false,
      },
      genericName: {
        types: [
          'string',
        ],
        description: 'The generic name of the element constructed from label / floating or element name.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`label`](#option-label) option, a [#label](#slot-label) slot or `Vueform` component&apos;s [`forceLabels`](vueform#option-force-labels) option is `true`.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      nullValue: {
        types: [
          'any',
        ],
        description: 'The null value of the element.',
        private: true,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
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
        description: 'The path of the element&apos;s data using dot `.` syntax.',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      Templates: {
        types: [
          'object',
        ],
        description: 'The list of templates available to the element.',
        private: true,
      },
      template: {
        types: [
          'object',
        ],
        description: 'The component&apos;s template.',
        private: false,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value was modified.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was already validated at least once.',
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
      busy: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is `pending`.',
        private: false,
      },
      errors: {
        types: [
          'array',
        ],
        description: 'All the errors of `MessageBag`.',
        private: false,
      },
      error: {
        types: [
          'string',
        ],
        description: 'The first error of `MessageBag`.',
        private: false,
      },
      validationRules: {
        types: [
          'string',
          'array',
        ],
        description: 'The element&apos;s validation rules.',
        private: true,
      },
      isDanger: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has errors.',
        private: false,
      },
      isSuccess: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has been filled in successfully.',
        private: false,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      model: {
        types: [
          'any',
        ],
        description: 'Intermediary value between element&apos;s value and field&apos;s `v-model`. It is required when we need to transform the value format between the element and its field.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
      Size: {
        types: [
          'string',
        ],
        description: 'The resolved size of the element and all of its child components.',
        private: false,
      },
      View: {
        types: [
          'string',
        ],
        description: 'The name of the resolved view for the component and the default view for its child components. Child component views can be overridden with [`views`](#option-views) option. This one should be used to determine the component&apos;s view in class functions.',
        private: false,
      },
      Views: {
        types: [
          'object',
        ],
        description: 'The name of the views for the components.',
        private: true,
      },
    },
    methods: {
      updateItems: {
        description: 'Fetches & updates items when using `async` items.',
        returns: 'void',
        params: {
          disable: {
            types: [
              'boolean',
            ],
            required: 'true',
            description: 'whether the input field should be disabled while fetching options',
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
      updateConditions: {
        description: 'Updates element conditions after they have been changed.',
        returns: 'void',
        private: true,
      },
      load: {
        description: 'Loads value to the element using optional [`formatLoad`](#option-format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`formatLoad`](#option-format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#method-load), only that it can\&apos;t format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`default`](#option-default) (or empty if `default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: 'Prepares the element.',
        returns: 'void',
        private: true,
      },
      disableAll: {
        description: 'Disables all items.',
        returns: 'void',
        private: false,
      },
      enableAll: {
        description: 'Enables all items.',
        returns: 'void',
        private: false,
      },
      disable: {
        description: 'Disables one item or more items.',
        returns: 'void',
        params: {
          values: {
            types: [
              'array',
              'string',
              'number',
            ],
            required: 'true',
            description: 'value(s) to disable',
          },
        },
        private: false,
      },
      enable: {
        description: 'Disables one item or more disabled items.',
        returns: 'void',
        params: {
          values: {
            types: [
              'array',
              'string',
              'number',
            ],
            required: 'true',
            description: 'value(s) to enable',
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
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
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
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires and emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      validate: {
        description: 'Checks each validation rule for the element (async).',
        returns: 'void',
        private: false,
      },
      dirt: {
        description: 'Flag the element as dirty.',
        returns: 'void',
        private: true,
      },
      clean: {
        description: 'Removes the element&apos;s `dirty` state.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Sets the validators to default state.',
        returns: 'void',
        private: false,
      },
      initMessageBag: {
        description: 'Initalizes MessageBag service.',
        returns: 'void',
        private: true,
      },
      initValidation: {
        description: 'Initalizes validators.',
        returns: 'void',
        private: true,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#method-hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form&apos;s component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default templates and classes.',
        private: false,
      },
    },
    events: {
      'change': {
        description: 'Triggered when the element&apos;s value is changed.',
        params: {
          newValue: {
            description: 'the new value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'the old value',
            types: [
              'string',
            ]
          },
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeCreate': {
        description: 'Triggered in beforeCreate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'created': {
        description: 'Triggered in created hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeMount': {
        description: 'Triggered in beforeMount hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'mounted': {
        description: 'Triggered in mounted hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUpdate': {
        description: 'Triggered in beforeUpdate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'updated': {
        description: 'Triggered in updated hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUnmount': {
        description: 'Triggered in beforeUnmount (or beforeDestroy in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'unmounted': {
        description: 'Triggered in unmounted (or destroyed in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
    },
    slots: {
      'radio': {
        description: 'Replaces the template for the radio input. Radio inputs are rendered by the [`RadiogroupRadio`](radiogroup-radio) component which has a default radio template. If the this slot is defined, the default template in [`RadiogroupRadio`](radiogroup-radio) component will be overridden with the content of this slot.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
          item: {
            description: 'the radio item',
            types: [
              'object',
            ],
          },
          value: {
            description: 'the radio value',
            types: [
              'string|number',
            ],
          },
          items: {
            description: 'the radio items',
            types: [
              'object',
            ],
          },
          index: {
            description: 'the index of current radio',
            types: [
              'number',
            ],
          },
          id: {
            description: 'the `id` attribute of the radio field used by the default template',
            types: [
              'string',
            ],
          },
          name: {
            description: 'the `name` attribute of the radio field used by the default template',
            types: [
              'string',
            ],
          },
          isDisabled: {
            description: 'whether the radio is disabled',
            types: [
              'boolean',
            ],
          },
          classes: {
            description: 'an object containing the classes of [`RadiogroupRadio`](radiogroup-radio) component',
            types: [
              'object',
            ],
          },
        },
      },
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
    },
    views: ['blocks', 'tabs'],
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
        required: true,
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
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
        required: false,
        private: true,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      removeClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClass: {
        required: 'false',
        default: 'null',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      removeClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      presets: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      view: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      views: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      size: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      templates: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      infoPosition: {
        required: 'false',
        default: 'right',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      messages: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      fieldName: {
        required: 'false',
        default: 'name|label',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      type: {
        required: 'false',
        default: 'select',
        types: [
          'string',
        ],
        required: false,
        private: true,
      },
      default: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'number',
          'object',
        ],
        required: false,
        private: false,
      },
      disabled: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      floating: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'boolean',
        ],
        required: false,
        private: false,
      },
      id: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      placeholder: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      attrs: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      onSelect: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onDeselect: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onSearchChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onOpen: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onClose: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onClear: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onPaste: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      native: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      items: {
        required: 'false',
        default: '{}',
        types: [
          'object',
          'array',
          'function',
          'string',
        ],
        required: false,
        private: false,
      },
      labelProp: {
        required: 'false',
        default: 'label',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      valueProp: {
        required: 'false',
        default: 'value',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      search: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        native: false,
        required: false,
        private: false,
      },
      trackBy: {
        required: 'false',
        default: 'label',
        types: [
          'string',
        ],
        native: false,
        required: false,
        private: false,
      },
      strict: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        native: false,
        required: false,
        private: false,
      },
      create: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        native: false,
        required: false,
        private: false,
      },
      appendNewOption: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        native: false,
        required: false,
        private: false,
      },
      addOptionOn: {
        required: 'false',
        default: '["enter"]',
        types: [
          'array',
        ],
        native: false,
        required: false,
        private: false,
      },
      object: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        native: false,
        required: false,
        private: false,
      },
      limit: {
        required: 'false',
        default: '-1',
        types: [
          'number',
        ],
        native: false,
        required: false,
        private: false,
      },
      groups: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        native: false,
        required: false,
        private: false,
      },
      groupLabel: {
        required: 'false',
        default: 'label',
        types: [
          'string',
        ],
        native: false,
        required: false,
        private: false,
      },
      groupOptions: {
        required: 'false',
        default: 'items',
        types: [
          'string',
        ],
        native: false,
        required: false,
        private: false,
      },
      groupHideEmpty: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        native: false,
        required: false,
        private: false,
      },
      openDirection: {
        required: 'false',
        default: 'bottom',
        types: [
          'string',
        ],
        native: false,
        required: false,
        private: false,
      },
      canDeselect: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        native: false,
        required: false,
        private: false,
      },
      canClear: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        native: false,
        required: false,
        private: false,
      },
      closeOnSelect: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        native: false,
        required: false,
        private: false,
      },
      delay: {
        required: 'false',
        default: '-1',
        types: [
          'number',
        ],
        native: false,
        required: false,
        private: false,
      },
      minChars: {
        required: 'false',
        default: '0',
        types: [
          'number',
        ],
        native: false,
        required: false,
        private: false,
      },
      resolveOnLoad: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        native: false,
        required: false,
        private: false,
      },
      filterResults: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        native: false,
        required: false,
        private: false,
      },
      clearOnSearch: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        native: false,
        required: false,
        private: false,
      },
      caret: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        native: false,
        required: false,
        private: false,
      },
      truncate: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        native: false,
        required: false,
        private: false,
      },
      loading: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        native: false,
        required: false,
        private: false,
      },
      noOptionsText: {
        required: 'false',
        default: 'locale.multiselect.noOptions',
        types: [
          'string',
        ],
        native: false,
        required: false,
        private: false,
      },
      noResultsText: {
        required: 'false',
        default: 'locale.multiselect.noResults',
        types: [
          'string',
        ],
        native: false,
        required: false,
        private: false,
      },
      autocomplete: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        native: false,
        required: false,
        private: false,
      },
      inputType: {
        required: 'false',
        default: 'text',
        types: [
          'string',
        ],
        native: false,
        required: false,
        private: false,
      },
      extendOptions: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      mounted: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has been already mounted.',
        default: 'true',
        private: false,
      },
      localDisabled: {
        types: [
          'boolean',
          'null',
        ],
        description: 'Helper to store whether the element is disabled via api (with .disable()).',
        default: 'null',
        private: true,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      focused: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is focused.',
        private: false,
      },
      input: {
        types: [
          'HTMLElement',
        ],
        description: 'The main input field of the element.',
        private: false,
      },
      state: {
        types: [
          'object',
        ],
        description: 'Helper property used to store the element states.',
        default: '{ dirty: false, validate: true }',
        private: true,
      },
      Validators: {
        types: [
          'array,Validator',
        ],
        description: 'An array containing all the validators of the element.',
        default: '[]',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Instance of MessageBag service. Custom errors and messages [can be added](/docs/1.x/validating-elements#custom-errors-and-messages).',
        default: 'MessageBag',
        private: false,
      },
      initialValue: {
        types: [
          'any',
        ],
        description: 'The initial value of the element.',
        private: true,
      },
      internalValue: {
        types: [
          'any',
        ],
        description: 'The store for the value of the element when we&apos;re not using external data (form&apos;s `v-model`).',
        private: true,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#method-show) or [`hide()`](#method-hide) methods.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      resolvedOptions: {
        types: [
          'array',
        ],
        description: 'Contains the resolved options.',
        private: false,
      },
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: true,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: true,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: true,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: true,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: true,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'The component&apos;s classes.',
        private: false,
      },
      classesInstance: {
        types: [
          'MergeClasses',
        ],
        description: 'The classes instance (for testing purpose).',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether no [`conditions`](#option-conditions) are defined or they are all fulfilled.',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of the element in `{[name]: value}` value format. This gets merged with the parent component&apos;s data.',
        private: false,
      },
      requestData: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`submit`](#option-submit) is not disabled and [`available`](#property-available) is `true` (has no [`conditions`](#option-conditions) or they are fulfilled).',
        private: false,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
      },
      isDisabled: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is disabled.',
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
        description: 'The `id` of the <%field%>. If [`id`](#option-id) is not provided [`path`](#option-path) will be used.',
        private: false,
      },
      hasFloating: {
        types: [
          'boolean',
        ],
        description: 'Whether the element floating label.',
        private: false,
      },
      genericName: {
        types: [
          'string',
        ],
        description: 'The generic name of the element constructed from label / floating or element name.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`label`](#option-label) option, a [#label](#slot-label) slot or `Vueform` component&apos;s [`forceLabels`](vueform#option-force-labels) option is `true`.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      isLoading: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is in loading state.',
        private: false,
      },
      nullValue: {
        types: [
          'any',
        ],
        description: 'The null value of the element.',
        private: true,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
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
        description: 'The path of the element&apos;s data using dot `.` syntax.',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      Templates: {
        types: [
          'object',
        ],
        description: 'The list of templates available to the element.',
        private: true,
      },
      template: {
        types: [
          'object',
        ],
        description: 'The component&apos;s template.',
        private: false,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value was modified.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was already validated at least once.',
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
      busy: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is `pending`.',
        private: false,
      },
      errors: {
        types: [
          'array',
        ],
        description: 'All the errors of `MessageBag`.',
        private: false,
      },
      error: {
        types: [
          'string',
        ],
        description: 'The first error of `MessageBag`.',
        private: false,
      },
      validationRules: {
        types: [
          'string',
          'array',
        ],
        description: 'The element&apos;s validation rules.',
        private: true,
      },
      isDanger: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has errors.',
        private: false,
      },
      isSuccess: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has been filled in successfully.',
        private: false,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      model: {
        types: [
          'any',
        ],
        description: 'Intermediary value between element&apos;s value and field&apos;s `v-model`. It is required when we need to transform the value format between the element and its field.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
      Size: {
        types: [
          'string',
        ],
        description: 'The resolved size of the element and all of its child components.',
        private: false,
      },
      View: {
        types: [
          'string',
        ],
        description: 'The name of the resolved view for the component and the default view for its child components. Child component views can be overridden with [`views`](#option-views) option. This one should be used to determine the component&apos;s view in class functions.',
        private: false,
      },
      Views: {
        types: [
          'object',
        ],
        description: 'The name of the views for the components.',
        private: true,
      },
    },
    methods: {
      updateItems: {
        description: 'Fetches & updates select options when using `async` options. Receives [`el$`](#property-el) as first param.',
        returns: 'void',
        params: {
          disable: {
            types: [
              'boolean',
            ],
            required: 'true',
            description: 'whether the input field should be disabled while fetching options',
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
      updateConditions: {
        description: 'Updates element conditions after they have been changed.',
        returns: 'void',
        private: true,
      },
      load: {
        description: 'Loads value to the element using optional [`formatLoad`](#option-format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`formatLoad`](#option-format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#method-load), only that it can\&apos;t format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`default`](#option-default) (or empty if `default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: 'Prepares the element.',
        returns: 'void',
        private: true,
      },
      disable: {
        description: 'Disables the element.',
        returns: 'void',
        private: false,
      },
      enable: {
        description: 'Enables the element even if it is disabled by [`disabled`](#disabled) option.',
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
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
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
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires and emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      handleSelect: {
        description: 'Handles `select` event.',
        returns: 'void',
        params: {
          option: {
            types: [
              'object',
            ],
            required: 'true',
            description: 'the selected option object',
          },
        },
        private: true,
      },
      handleDeselect: {
        description: 'Handles `deselect` event.',
        returns: 'void',
        params: {
          option: {
            types: [
              'object',
            ],
            required: 'true',
            description: 'the deselected option object',
          },
        },
        private: true,
      },
      handleSearchChange: {
        description: 'Handles `search-change` event.',
        returns: 'void',
        params: {
          searchQuery: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the current search query',
          },
        },
        private: true,
      },
      handleOpen: {
        description: 'Handles `open` event.',
        returns: 'void',
        private: true,
      },
      handleClose: {
        description: 'Handles `close` event.',
        returns: 'void',
        private: true,
      },
      handleClear: {
        description: 'Handles `clear` event.',
        returns: 'void',
        private: true,
      },
      handlePaste: {
        description: 'Handles `paste` event.',
        returns: 'void',
        params: {
          e: {
            types: [
              'Event',
            ],
            required: 'false',
            description: 'event',
          },
        },
        private: true,
      },
      handleTag: {
        description: 'Handles `tag` event.',
        returns: 'void',
        params: {
          searchQuery: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the current search query',
          },
        },
        private: true,
      },
      validate: {
        description: 'Checks each validation rule for the element (async).',
        returns: 'void',
        private: false,
      },
      dirt: {
        description: 'Flag the element as dirty.',
        returns: 'void',
        private: true,
      },
      clean: {
        description: 'Removes the element&apos;s `dirty` state.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Sets the validators to default state.',
        returns: 'void',
        private: false,
      },
      initMessageBag: {
        description: 'Initalizes MessageBag service.',
        returns: 'void',
        private: true,
      },
      initValidation: {
        description: 'Initalizes validators.',
        returns: 'void',
        private: true,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#method-hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form&apos;s component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default templates and classes.',
        private: false,
      },
    },
    events: {
      'change': {
        description: 'Triggered when the element&apos;s value is changed.',
        params: {
          newValue: {
            description: 'the new value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'the old value',
            types: [
              'string',
            ]
          },
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'select': {
        description: 'Triggered when an option is selected when using [`native: false`](#option-native).',
        params: {
          option: {
            description: 'the selected option',
            types: [
              'object',
            ]
          },
       },
      },
      'deselect': {
        description: 'Triggered when an option is deselected when using [`native: false`](#option-native).',
        params: {
          option: {
            description: 'the deselected option',
            types: [
              'object',
            ]
          },
       },
      },
      'search-change': {
        description: 'Triggered when the search query changes when using [`search: true`](#option-search).',
        params: {
          searchQuery: {
            description: 'the search value',
            types: [
              'string|null',
            ]
          },
       },
      },
      'open': {
        description: 'Triggered when the dropdown list is opened when using [`native: false`](#option-native).',
      },
      'close': {
        description: 'Triggered when the dropdown list is closed when using [`native: false`](#option-native).',
      },
      'clear': {
        description: 'Triggered when the value is cleared when using [`native: true`](#option-native).',
      },
      'paste': {
        description: 'Triggered when text is pasted to the search input when using [`search: true`](#option-search).',
        params: {
          event: {
            description: 'the paste Event',
            types: [
              'Event',
            ]
          },
       },
      },
      'beforeCreate': {
        description: 'Triggered in beforeCreate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'created': {
        description: 'Triggered in created hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeMount': {
        description: 'Triggered in beforeMount hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'mounted': {
        description: 'Triggered in mounted hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUpdate': {
        description: 'Triggered in beforeUpdate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'updated': {
        description: 'Triggered in updated hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUnmount': {
        description: 'Triggered in beforeUnmount (or beforeDestroy in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'unmounted': {
        description: 'Triggered in unmounted (or destroyed in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
    },
    slots: {
      'option': {
        description: 'Replaces the default option template.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
          option: {
            description: 'the option object',
            types: [
              'object',
            ],
          },
          search: {
            description: 'the current value of search input',
            types: [
              'string|null',
            ],
          },
        },
      },
      'single-label': {
        description: 'Replaces the input&apos;s inner label that is displayed when an option is selected.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
          value: {
            description: 'the selected option',
            types: [
              'object',
            ],
          },
        },
      },
      'placeholder': {
        description: 'Replaces the default template for the input&apos;s [`placeholder`](#option-placeholder).',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'group-label': {
        description: 'Replaces the default group header when [`groups`](#option-groups) is `true`.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
          group: {
            description: 'the group object',
            types: [
              'object',
            ],
          },
        },
      },
      'before-list': {
        description: 'Prepends the content of the slot to the option list.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after-list': {
        description: 'Appends the content of the slot to the option list.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'no-results': {
        description: 'Replaces the default template that is shown when the input has options, but the user search does not have any results. Can be also set without overriding the template with [`noResultsText`](#option-no-results-text) option.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'no-options': {
        description: 'Replaces the default template that is shown when the input has no options. Can be also set without overriding the template with [`noOptionsText`](#option-no-options-text) option.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'caret': {
        description: 'Replaces the small triangle displayed on the right of the input when [`caret`](#option-caret) is `true`.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'spinner': {
        description: 'Replaces the spinner shown when async options are loading or [`loading`](#option-loading) is `true`.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'clear': {
        description: 'Replaces the clear icon shown when the input has at least one selected options and [`canClear`](#option-can-clear) is `true`.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
          clear: {
            description: 'clears the input value',
            types: [
              'function',
            ],
          },
        },
      },
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
    },
    views: [],
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
        required: true,
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
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
        required: false,
        private: true,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      removeClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClass: {
        required: 'false',
        default: 'null',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      removeClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      presets: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      view: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      views: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      size: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      templates: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      infoPosition: {
        required: 'false',
        default: 'right',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      messages: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      fieldName: {
        required: 'false',
        default: 'name|label',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      type: {
        required: 'false',
        default: 'slider',
        types: [
          'string',
        ],
        required: false,
        private: true,
      },
      default: {
        required: 'false',
        default: '0',
        types: [
          'number',
          'array',
        ],
        required: false,
        private: false,
      },
      disabled: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      id: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      min: {
        required: 'false',
        default: '0',
        types: [
          'number',
        ],
        required: false,
        private: false,
      },
      max: {
        required: 'false',
        default: '100',
        types: [
          'number',
        ],
        required: false,
        private: false,
      },
      step: {
        required: 'false',
        default: '1',
        types: [
          'number',
        ],
        required: false,
        private: false,
      },
      tooltips: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      showTooltip: {
        required: 'false',
        default: 'always',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      tooltipPosition: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      merge: {
        required: 'false',
        default: '-1',
        types: [
          'number',
        ],
        required: false,
        private: false,
      },
      format: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'function',
        ],
        required: false,
        private: false,
      },
      orientation: {
        required: 'false',
        default: 'horizontal',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      direction: {
        required: 'false',
        default: 'ltr',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      lazy: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        required: false,
        private: true,
      },
      extendOptions: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      mounted: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has been already mounted.',
        default: 'true',
        private: false,
      },
      localDisabled: {
        types: [
          'boolean',
          'null',
        ],
        description: 'Helper to store whether the element is disabled via api (with .disable()).',
        default: 'null',
        private: true,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      input: {
        types: [
          'HTMLElement',
        ],
        description: 'The main input field of the element.',
        private: false,
      },
      state: {
        types: [
          'object',
        ],
        description: 'Helper property used to store the element states.',
        default: '{ dirty: false, validate: true }',
        private: true,
      },
      Validators: {
        types: [
          'array,Validator',
        ],
        description: 'An array containing all the validators of the element.',
        default: '[]',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Instance of MessageBag service. Custom errors and messages [can be added](/docs/1.x/validating-elements#custom-errors-and-messages).',
        default: 'MessageBag',
        private: false,
      },
      initialValue: {
        types: [
          'any',
        ],
        description: 'The initial value of the element.',
        private: true,
      },
      internalValue: {
        types: [
          'any',
        ],
        description: 'The store for the value of the element when we&apos;re not using external data (form&apos;s `v-model`).',
        private: true,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#method-show) or [`hide()`](#method-hide) methods.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: true,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: true,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: true,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: true,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: true,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'The component&apos;s classes.',
        private: false,
      },
      classesInstance: {
        types: [
          'MergeClasses',
        ],
        description: 'The classes instance (for testing purpose).',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether no [`conditions`](#option-conditions) are defined or they are all fulfilled.',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of the element in `{[name]: value}` value format. This gets merged with the parent component&apos;s data.',
        private: false,
      },
      requestData: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`submit`](#option-submit) is not disabled and [`available`](#property-available) is `true` (has no [`conditions`](#option-conditions) or they are fulfilled).',
        private: false,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
      },
      isDisabled: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is disabled.',
        private: false,
      },
      fieldId: {
        types: [
          'string',
        ],
        description: 'The `id` of the <%field%>. If [`id`](#option-id) is not provided [`path`](#option-path) will be used.',
        private: false,
      },
      genericName: {
        types: [
          'string',
        ],
        description: 'The generic name of the element constructed from label / floating or element name.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`label`](#option-label) option, a [#label](#slot-label) slot or `Vueform` component&apos;s [`forceLabels`](vueform#option-force-labels) option is `true`.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      nullValue: {
        types: [
          'any',
        ],
        description: 'The null value of the element.',
        private: true,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
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
        description: 'The path of the element&apos;s data using dot `.` syntax.',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      Templates: {
        types: [
          'object',
        ],
        description: 'The list of templates available to the element.',
        private: true,
      },
      template: {
        types: [
          'object',
        ],
        description: 'The component&apos;s template.',
        private: false,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value was modified.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was already validated at least once.',
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
      busy: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is `pending`.',
        private: false,
      },
      errors: {
        types: [
          'array',
        ],
        description: 'All the errors of `MessageBag`.',
        private: false,
      },
      error: {
        types: [
          'string',
        ],
        description: 'The first error of `MessageBag`.',
        private: false,
      },
      validationRules: {
        types: [
          'string',
          'array',
        ],
        description: 'The element&apos;s validation rules.',
        private: true,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      model: {
        types: [
          'any',
        ],
        description: 'Intermediary value between element&apos;s value and field&apos;s `v-model`. It is required when we need to transform the value format between the element and its field.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
      Size: {
        types: [
          'string',
        ],
        description: 'The resolved size of the element and all of its child components.',
        private: false,
      },
      View: {
        types: [
          'string',
        ],
        description: 'The name of the resolved view for the component and the default view for its child components. Child component views can be overridden with [`views`](#option-views) option. This one should be used to determine the component&apos;s view in class functions.',
        private: false,
      },
      Views: {
        types: [
          'object',
        ],
        description: 'The name of the views for the components.',
        private: true,
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
      updateConditions: {
        description: 'Updates element conditions after they have been changed.',
        returns: 'void',
        private: true,
      },
      load: {
        description: 'Loads value to the element using optional [`formatLoad`](#option-format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`formatLoad`](#option-format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#method-load), only that it can\&apos;t format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`default`](#option-default) (or empty if `default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: 'Prepares the element.',
        returns: 'void',
        private: true,
      },
      disable: {
        description: 'Disables the element.',
        returns: 'void',
        private: false,
      },
      enable: {
        description: 'Enables the element even if it is disabled by [`disabled`](#disabled) option.',
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
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
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
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires and emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      handleChange: {
        description: 'Handles `change` event.',
        returns: 'void',
        params: {
          val: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'value of the element',
          },
        },
        private: true,
      },
      handleUpdate: {
        description: 'Handles `update` event if not lazy.',
        returns: 'void',
        params: {
          val: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'value of the element',
          },
        },
        private: true,
      },
      validate: {
        description: 'Checks each validation rule for the element (async).',
        returns: 'void',
        private: false,
      },
      dirt: {
        description: 'Flag the element as dirty.',
        returns: 'void',
        private: true,
      },
      clean: {
        description: 'Removes the element&apos;s `dirty` state.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Sets the validators to default state.',
        returns: 'void',
        private: false,
      },
      initMessageBag: {
        description: 'Initalizes MessageBag service.',
        returns: 'void',
        private: true,
      },
      initValidation: {
        description: 'Initalizes validators.',
        returns: 'void',
        private: true,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#method-hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form&apos;s component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default templates and classes.',
        private: false,
      },
    },
    events: {
      'change': {
        description: 'Triggered when the element&apos;s value is changed.',
        params: {
          newValue: {
            description: 'the new value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'the old value',
            types: [
              'string',
            ]
          },
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeCreate': {
        description: 'Triggered in beforeCreate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'created': {
        description: 'Triggered in created hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeMount': {
        description: 'Triggered in beforeMount hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'mounted': {
        description: 'Triggered in mounted hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUpdate': {
        description: 'Triggered in beforeUpdate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'updated': {
        description: 'Triggered in updated hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUnmount': {
        description: 'Triggered in beforeUnmount (or beforeDestroy in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'unmounted': {
        description: 'Triggered in unmounted (or destroyed in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
    },
    slots: {
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
    },
    views: [],
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
        required: true,
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
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
        required: false,
        private: true,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      removeClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClass: {
        required: 'false',
        default: 'null',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      removeClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      presets: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      view: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      views: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      size: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      templates: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      infoPosition: {
        required: 'false',
        default: 'right',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      type: {
        required: 'false',
        default: 'static',
        types: [
          'string',
        ],
        required: false,
        private: true,
      },
      content: {
        required: 'false',
        default: '',
        types: [
          'string',
          'object',
        ],
        required: false,
        private: false,
      },
      wrap: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      mounted: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has been already mounted.',
        default: 'true',
        private: false,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#method-show) or [`hide()`](#method-hide) methods.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: true,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: true,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: true,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: true,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: true,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'The component&apos;s classes.',
        private: false,
      },
      classesInstance: {
        types: [
          'MergeClasses',
        ],
        description: 'The classes instance (for testing purpose).',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether no [`conditions`](#option-conditions) are defined or they are all fulfilled.',
        private: false,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`label`](#option-label) option, a [#label](#slot-label) slot or `Vueform` component&apos;s [`forceLabels`](vueform#option-force-labels) option is `true`.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      path: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax.',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      isHtml: {
        types: [
          'boolean',
        ],
        description: 'Determines if HTML content should be rendered for the element.',
        private: true,
      },
      Templates: {
        types: [
          'object',
        ],
        description: 'The list of templates available to the element.',
        private: true,
      },
      template: {
        types: [
          'object',
        ],
        description: 'The component&apos;s template.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
      Size: {
        types: [
          'string',
        ],
        description: 'The resolved size of the element and all of its child components.',
        private: false,
      },
      View: {
        types: [
          'string',
        ],
        description: 'The name of the resolved view for the component and the default view for its child components. Child component views can be overridden with [`views`](#option-views) option. This one should be used to determine the component&apos;s view in class functions.',
        private: false,
      },
      Views: {
        types: [
          'object',
        ],
        description: 'The name of the views for the components.',
        private: true,
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
      updateConditions: {
        description: 'Updates element conditions after they have been changed.',
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
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
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
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires and emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#method-hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form&apos;s component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default templates and classes.',
        private: false,
      },
    },
    events: {
      'beforeCreate': {
        description: 'Triggered in beforeCreate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'created': {
        description: 'Triggered in created hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeMount': {
        description: 'Triggered in beforeMount hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'mounted': {
        description: 'Triggered in mounted hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUpdate': {
        description: 'Triggered in beforeUpdate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'updated': {
        description: 'Triggered in updated hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUnmount': {
        description: 'Triggered in beforeUnmount (or beforeDestroy in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'unmounted': {
        description: 'Triggered in unmounted (or destroyed in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
    },
    slots: {
      'default': {
        description: 'Renders the content of the static element.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
    },
    views: [],
  },
  TEditorElement: {
    props: {
      name: {
        required: 'true',
        default: 'undefined',
        types: [
          'string',
          'number',
        ],
        required: true,
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
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
        required: false,
        private: true,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      removeClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClass: {
        required: 'false',
        default: 'null',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      removeClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      presets: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      view: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      views: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      size: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      templates: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      infoPosition: {
        required: 'false',
        default: 'right',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      messages: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      fieldName: {
        required: 'false',
        default: 'name|label',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      type: {
        required: 'false',
        default: 't-editor',
        types: [
          'string',
        ],
        required: false,
        private: true,
      },
      default: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        required: false,
        private: false,
      },
      debounce: {
        required: 'false',
        default: 'null',
        types: [
          'number',
        ],
        required: false,
        private: false,
      },
      disabled: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      id: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      placeholder: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      onError: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onAlert: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      accept: {
        required: 'false',
        default: 'null',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      acceptMimes: {
        required: 'false',
        default: 'null',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      endpoint: {
        required: 'false',
        default: 'config.endpoints.attachment.url',
        types: [
          'string',
          'function',
        ],
        required: false,
        private: false,
      },
      method: {
        required: 'false',
        default: 'config.endpoints.attachment.method',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      hideTools: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      mounted: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has been already mounted.',
        default: 'true',
        private: false,
      },
      localDisabled: {
        types: [
          'boolean',
          'null',
        ],
        description: 'Helper to store whether the element is disabled via api (with .disable()).',
        default: 'null',
        private: true,
      },
      focused: {
        types: [
          'boolean',
        ],
        description: 'Whether the editor is focused.',
        private: false,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      input: {
        types: [
          'HTMLElement',
        ],
        description: 'The main input field of the element.',
        private: false,
      },
      state: {
        types: [
          'object',
        ],
        description: 'Helper property used to store the element states.',
        default: '{ dirty: false, validate: true }',
        private: true,
      },
      Validators: {
        types: [
          'array,Validator',
        ],
        description: 'An array containing all the validators of the element.',
        default: '[]',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Instance of MessageBag service. Custom errors and messages [can be added](/docs/1.x/validating-elements#custom-errors-and-messages).',
        default: 'MessageBag',
        private: false,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#method-show) or [`hide()`](#method-hide) methods.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: true,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: true,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: true,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: true,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: true,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'The component&apos;s classes.',
        private: false,
      },
      classesInstance: {
        types: [
          'MergeClasses',
        ],
        description: 'The classes instance (for testing purpose).',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether no [`conditions`](#option-conditions) are defined or they are all fulfilled.',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of the element in `{[name]: value}` value format. This gets merged with the parent component&apos;s data.',
        private: false,
      },
      requestData: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`submit`](#option-submit) is not disabled and [`available`](#property-available) is `true` (has no [`conditions`](#option-conditions) or they are fulfilled).',
        private: false,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
      },
      isDisabled: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is disabled.',
        private: false,
      },
      editorEndpoint: {
        types: [
          'string',
        ],
        description: 'The endpoint that uploads attachment. Can be changed by setting [`endpoint`](#endpoint) option.',
        default: '`config.endpoints.attachment.url`',
        private: true,
      },
      editorMethod: {
        types: [
          'string',
        ],
        description: 'The method to use to upload attachment. Can be changed by setting [`method`](#method) option.',
        default: '`config.endpoints.attachment.method`',
        private: true,
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
        description: 'The `id` of the <%field%>. If [`id`](#option-id) is not provided [`path`](#option-path) will be used.',
        private: false,
      },
      genericName: {
        types: [
          'string',
        ],
        description: 'The generic name of the element constructed from label / floating or element name.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`label`](#option-label) option, a [#label](#slot-label) slot or `Vueform` component&apos;s [`forceLabels`](vueform#option-force-labels) option is `true`.',
        private: false,
      },
      language: {
        types: [
          'string',
        ],
        description: 'The language code of the currently selected language (2 letters).',
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
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      nullValue: {
        types: [
          'any',
        ],
        description: 'The null value of the element.',
        private: true,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
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
        description: 'The path of the element&apos;s data using dot `.` syntax.',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      Templates: {
        types: [
          'object',
        ],
        description: 'The list of templates available to the element.',
        private: true,
      },
      template: {
        types: [
          'object',
        ],
        description: 'The component&apos;s template.',
        private: false,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value has been modified in any language.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether all the languages have already been validated at least once.',
        private: false,
      },
      invalid: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has failing rules in any language.',
        private: false,
      },
      pending: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any async rules in progress in any language.',
        private: false,
      },
      debouncing: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a validation rule with pending debounce in any language.',
        private: false,
      },
      busy: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is `pending` or `debouncing` in any language.',
        private: false,
      },
      errors: {
        types: [
          'array',
        ],
        description: 'All the errors of `MessageBag`.',
        private: false,
      },
      error: {
        types: [
          'string',
        ],
        description: 'The first error of `MessageBag`.',
        private: false,
      },
      validationRules: {
        types: [
          'string',
          'array',
        ],
        description: 'The element&apos;s validation rules.',
        private: true,
      },
      isDanger: {
        types: [
          'boolean',
        ],
        description: 'Whether the field has errors.',
        private: false,
      },
      isSuccess: {
        types: [
          'boolean',
        ],
        description: 'Whether the field has been filled in successfully.',
        private: false,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      model: {
        types: [
          'any',
        ],
        description: 'Intermediary value between element&apos;s value and field&apos;s `v-model`. It is required when we need to transform the value format between the element and its field.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
      Size: {
        types: [
          'string',
        ],
        description: 'The resolved size of the element and all of its child components.',
        private: false,
      },
      View: {
        types: [
          'string',
        ],
        description: 'The name of the resolved view for the component and the default view for its child components. Child component views can be overridden with [`views`](#option-views) option. This one should be used to determine the component&apos;s view in class functions.',
        private: false,
      },
      Views: {
        types: [
          'object',
        ],
        description: 'The name of the views for the components.',
        private: true,
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
      updateConditions: {
        description: 'Updates element conditions after they have been changed.',
        returns: 'void',
        private: true,
      },
      load: {
        description: 'Loads value to the element using optional [`formatLoad`](#option-format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`formatLoad`](#option-format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#method-load), only that it can\&apos;t format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`default`](#option-default) (or empty if `default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: 'Prepares the element.',
        returns: 'void',
        private: true,
      },
      disable: {
        description: 'Disables the element.',
        returns: 'void',
        private: false,
      },
      enable: {
        description: 'Enables the element even if it is disabled by [`disabled`](#disabled) option.',
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
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
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
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires and emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      handleAlert: {
        description: 'Handles `alert` event.',
        returns: 'void',
        params: {
          message: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'alert message',
          },
        },
        private: true,
      },
      handleError: {
        description: 'Handles `error` event.',
        returns: 'void',
        params: {
          error: {
            types: [
              'Error',
            ],
            required: 'true',
            description: 'the error object',
          },
        },
        private: true,
      },
      handleInput: {
        description: 'Handles `input` event.',
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
      validate: {
        description: 'Checks each validation rule for the element in every language (async).',
        returns: 'void',
        private: false,
      },
      validateLanguage: {
        description: 'Checks each validation rule for the element in a specific language (async).',
        returns: 'void',
        params: {
          lang: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'the langauage to check (defaults to currently selected language)',
          },
        },
        private: false,
      },
      dirt: {
        description: 'Flag the element as dirty.',
        returns: 'void',
        private: true,
      },
      clean: {
        description: 'Removes the element&apos;s `dirty` state.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Sets the validators to default state.',
        returns: 'void',
        private: false,
      },
      initState: {
        description: 'Inits the default `state` object.',
        returns: 'void',
        private: true,
      },
      initMessageBag: {
        description: 'Initalizes MessageBag service.',
        returns: 'void',
        private: true,
      },
      initValidation: {
        description: 'Initalizes validators.',
        returns: 'void',
        private: true,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#method-hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form&apos;s component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default templates and classes.',
        private: false,
      },
    },
    events: {
      'change': {
        description: 'Triggered when the element&apos;s value is changed.',
        params: {
          newValue: {
            description: 'the new value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'the old value',
            types: [
              'string',
            ]
          },
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'alert': {
        description: 'Triggered when the user select a file/mime type that is not allowed. If the event does not have a listener the alert message will be displayed by `alert()`.',
        params: {
          message: {
            description: 'the alert message',
            types: [
              'string',
            ]
          },
       },
      },
      'error': {
        description: 'Triggered when file upload throws an error.',
        params: {
          error: {
            description: 'the Error object',
            types: [
              'Error',
            ]
          },
       },
      },
      'beforeCreate': {
        description: 'Triggered in beforeCreate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'created': {
        description: 'Triggered in created hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeMount': {
        description: 'Triggered in beforeMount hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'mounted': {
        description: 'Triggered in mounted hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUpdate': {
        description: 'Triggered in beforeUpdate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'updated': {
        description: 'Triggered in updated hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUnmount': {
        description: 'Triggered in beforeUnmount (or beforeDestroy in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'unmounted': {
        description: 'Triggered in unmounted (or destroyed in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
    },
    slots: {
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
    },
    views: [],
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
        required: true,
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
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
        required: false,
        private: true,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      removeClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClass: {
        required: 'false',
        default: 'null',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      removeClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      presets: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      view: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      views: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      size: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      templates: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      infoPosition: {
        required: 'false',
        default: 'right',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      messages: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      fieldName: {
        required: 'false',
        default: 'name|label',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      type: {
        required: 'false',
        default: 't-text',
        types: [
          'string',
        ],
        required: false,
        private: true,
      },
      default: {
        required: 'false',
        default: 'undefined',
        types: [
          'object',
          'string',
          'number',
        ],
        required: false,
        private: false,
      },
      addons: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      autocomplete: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'number',
        ],
        required: false,
        private: false,
      },
      debounce: {
        required: 'false',
        default: 'null',
        types: [
          'number',
        ],
        required: false,
        private: false,
      },
      disabled: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      floating: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'boolean',
        ],
        required: false,
        private: false,
      },
      id: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      inputType: {
        required: 'false',
        default: 'text',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      attrs: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      placeholder: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      readonly: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      loading: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      onBlur: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      mounted: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has been already mounted.',
        default: 'true',
        private: false,
      },
      localDisabled: {
        types: [
          'boolean',
          'null',
        ],
        description: 'Helper to store whether the element is disabled via api (with .disable()).',
        default: 'null',
        private: true,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      focused: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is focused.',
        private: false,
      },
      input: {
        types: [
          'HTMLElement',
        ],
        description: 'The main input field of the element.',
        private: false,
      },
      state: {
        types: [
          'object',
        ],
        description: 'Helper property used to store the element states.',
        default: '{ dirty: false, validate: true }',
        private: true,
      },
      Validators: {
        types: [
          'array,Validator',
        ],
        description: 'An array containing all the validators of the element.',
        default: '[]',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Instance of MessageBag service. Custom errors and messages [can be added](/docs/1.x/validating-elements#custom-errors-and-messages).',
        default: 'MessageBag',
        private: false,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#method-show) or [`hide()`](#method-hide) methods.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: true,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: true,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: true,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: true,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: true,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'The component&apos;s classes.',
        private: false,
      },
      classesInstance: {
        types: [
          'MergeClasses',
        ],
        description: 'The classes instance (for testing purpose).',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether no [`conditions`](#option-conditions) are defined or they are all fulfilled.',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of the element in `{[name]: value}` value format. This gets merged with the parent component&apos;s data.',
        private: false,
      },
      requestData: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`submit`](#option-submit) is not disabled and [`available`](#property-available) is `true` (has no [`conditions`](#option-conditions) or they are fulfilled).',
        private: false,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
      },
      isDisabled: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is disabled.',
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
        description: 'The `id` of the <%field%>. If [`id`](#option-id) is not provided [`path`](#option-path) will be used.',
        private: false,
      },
      hasFloating: {
        types: [
          'boolean',
        ],
        description: 'Whether the element floating label.',
        private: false,
      },
      genericName: {
        types: [
          'string',
        ],
        description: 'The generic name of the element constructed from label / floating or element name.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`label`](#option-label) option, a [#label](#slot-label) slot or `Vueform` component&apos;s [`forceLabels`](vueform#option-force-labels) option is `true`.',
        private: false,
      },
      language: {
        types: [
          'string',
        ],
        description: 'The language code of the currently selected language (2 letters).',
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
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      isLoading: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is in loading state.',
        private: false,
      },
      nullValue: {
        types: [
          'any',
        ],
        description: 'The null value of the element.',
        private: true,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
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
        description: 'The path of the element&apos;s data using dot `.` syntax.',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      Templates: {
        types: [
          'object',
        ],
        description: 'The list of templates available to the element.',
        private: true,
      },
      template: {
        types: [
          'object',
        ],
        description: 'The component&apos;s template.',
        private: false,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value has been modified in any language.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether all the languages have already been validated at least once.',
        private: false,
      },
      invalid: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has failing rules in any language.',
        private: false,
      },
      pending: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any async rules in progress in any language.',
        private: false,
      },
      debouncing: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a validation rule with pending debounce in any language.',
        private: false,
      },
      busy: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is `pending` or `debouncing` in any language.',
        private: false,
      },
      errors: {
        types: [
          'array',
        ],
        description: 'All the errors of `MessageBag`.',
        private: false,
      },
      error: {
        types: [
          'string',
        ],
        description: 'The first error of `MessageBag`.',
        private: false,
      },
      validationRules: {
        types: [
          'string',
          'array',
        ],
        description: 'The element&apos;s validation rules.',
        private: true,
      },
      isDanger: {
        types: [
          'boolean',
        ],
        description: 'Whether the field has errors.',
        private: false,
      },
      isSuccess: {
        types: [
          'boolean',
        ],
        description: 'Whether the field has been filled in successfully.',
        private: false,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      model: {
        types: [
          'any',
        ],
        description: 'Intermediary value between element&apos;s value and field&apos;s `v-model`. It is required when we need to transform the value format between the element and its field.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
      Size: {
        types: [
          'string',
        ],
        description: 'The resolved size of the element and all of its child components.',
        private: false,
      },
      View: {
        types: [
          'string',
        ],
        description: 'The name of the resolved view for the component and the default view for its child components. Child component views can be overridden with [`views`](#option-views) option. This one should be used to determine the component&apos;s view in class functions.',
        private: false,
      },
      Views: {
        types: [
          'object',
        ],
        description: 'The name of the views for the components.',
        private: true,
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
      updateConditions: {
        description: 'Updates element conditions after they have been changed.',
        returns: 'void',
        private: true,
      },
      load: {
        description: 'Loads value to the element using optional [`formatLoad`](#option-format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`formatLoad`](#option-format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#method-load), only that it can\&apos;t format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`default`](#option-default) (or empty if `default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: 'Prepares the element.',
        returns: 'void',
        private: true,
      },
      disable: {
        description: 'Disables the element.',
        returns: 'void',
        private: false,
      },
      enable: {
        description: 'Enables the element even if it is disabled by [`disabled`](#disabled) option.',
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
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
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
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires and emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      handleBlur: {
        description: 'Handles `blur` event.',
        returns: 'void',
        private: true,
      },
      handleInput: {
        description: 'Handles `input` event.',
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
      validate: {
        description: 'Checks each validation rule for the element in every language (async).',
        returns: 'void',
        private: false,
      },
      validateLanguage: {
        description: 'Checks each validation rule for the element in a specific language (async).',
        returns: 'void',
        params: {
          lang: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'the langauage to check (defaults to currently selected language)',
          },
        },
        private: false,
      },
      dirt: {
        description: 'Flag the element as dirty.',
        returns: 'void',
        private: true,
      },
      clean: {
        description: 'Removes the element&apos;s `dirty` state.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Sets the validators to default state.',
        returns: 'void',
        private: false,
      },
      initState: {
        description: 'Inits the default `state` object.',
        returns: 'void',
        private: true,
      },
      initMessageBag: {
        description: 'Initalizes MessageBag service.',
        returns: 'void',
        private: true,
      },
      initValidation: {
        description: 'Initalizes validators.',
        returns: 'void',
        private: true,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#method-hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form&apos;s component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default templates and classes.',
        private: false,
      },
    },
    events: {
      'change': {
        description: 'Triggered when the element&apos;s value is changed.',
        params: {
          newValue: {
            description: 'the new value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'the old value',
            types: [
              'string',
            ]
          },
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'blur': {
        description: 'Triggered when the input is blurred.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeCreate': {
        description: 'Triggered in beforeCreate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'created': {
        description: 'Triggered in created hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeMount': {
        description: 'Triggered in beforeMount hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'mounted': {
        description: 'Triggered in mounted hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUpdate': {
        description: 'Triggered in beforeUpdate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'updated': {
        description: 'Triggered in updated hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUnmount': {
        description: 'Triggered in beforeUnmount (or beforeDestroy in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'unmounted': {
        description: 'Triggered in unmounted (or destroyed in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
    },
    slots: {
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'addon-before': {
        description: 'Prepends an addon to the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'addon-after': {
        description: 'Appends an addon to the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
    },
    views: [],
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
        required: true,
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
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
        required: false,
        private: true,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      removeClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClass: {
        required: 'false',
        default: 'null',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      removeClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      presets: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      view: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      views: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      size: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      templates: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      infoPosition: {
        required: 'false',
        default: 'right',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      messages: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      fieldName: {
        required: 'false',
        default: 'name|label',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      type: {
        required: 'false',
        default: 't-textarea',
        types: [
          'string',
        ],
        required: false,
        private: true,
      },
      default: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        required: false,
        private: false,
      },
      addons: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      autogrow: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      rows: {
        required: 'false',
        default: '3',
        types: [
          'number',
        ],
        required: false,
        private: false,
      },
      debounce: {
        required: 'false',
        default: 'null',
        types: [
          'number',
        ],
        required: false,
        private: false,
      },
      disabled: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      floating: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'boolean',
        ],
        required: false,
        private: false,
      },
      id: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      placeholder: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      readonly: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      attrs: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      mounted: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has been already mounted.',
        default: 'true',
        private: false,
      },
      localDisabled: {
        types: [
          'boolean',
          'null',
        ],
        description: 'Helper to store whether the element is disabled via api (with .disable()).',
        default: 'null',
        private: true,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      focused: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is focused.',
        private: false,
      },
      input: {
        types: [
          'HTMLElement',
        ],
        description: 'The main input field of the element.',
        private: false,
      },
      state: {
        types: [
          'object',
        ],
        description: 'Helper property used to store the element states.',
        default: '{ dirty: false, validate: true }',
        private: true,
      },
      Validators: {
        types: [
          'array,Validator',
        ],
        description: 'An array containing all the validators of the element.',
        default: '[]',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Instance of MessageBag service. Custom errors and messages [can be added](/docs/1.x/validating-elements#custom-errors-and-messages).',
        default: 'MessageBag',
        private: false,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#method-show) or [`hide()`](#method-hide) methods.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: true,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: true,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: true,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: true,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: true,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'The component&apos;s classes.',
        private: false,
      },
      classesInstance: {
        types: [
          'MergeClasses',
        ],
        description: 'The classes instance (for testing purpose).',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether no [`conditions`](#option-conditions) are defined or they are all fulfilled.',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of the element in `{[name]: value}` value format. This gets merged with the parent component&apos;s data.',
        private: false,
      },
      requestData: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`submit`](#option-submit) is not disabled and [`available`](#property-available) is `true` (has no [`conditions`](#option-conditions) or they are fulfilled).',
        private: false,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
      },
      isDisabled: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is disabled.',
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
        description: 'The `id` of the <%field%>. If [`id`](#option-id) is not provided [`path`](#option-path) will be used.',
        private: false,
      },
      hasFloating: {
        types: [
          'boolean',
        ],
        description: 'Whether the element floating label.',
        private: false,
      },
      genericName: {
        types: [
          'string',
        ],
        description: 'The generic name of the element constructed from label / floating or element name.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`label`](#option-label) option, a [#label](#slot-label) slot or `Vueform` component&apos;s [`forceLabels`](vueform#option-force-labels) option is `true`.',
        private: false,
      },
      language: {
        types: [
          'string',
        ],
        description: 'The language code of the currently selected language (2 letters).',
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
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      nullValue: {
        types: [
          'any',
        ],
        description: 'The null value of the element.',
        private: true,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
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
        description: 'The path of the element&apos;s data using dot `.` syntax.',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      Templates: {
        types: [
          'object',
        ],
        description: 'The list of templates available to the element.',
        private: true,
      },
      template: {
        types: [
          'object',
        ],
        description: 'The component&apos;s template.',
        private: false,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value has been modified in any language.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether all the languages have already been validated at least once.',
        private: false,
      },
      invalid: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has failing rules in any language.',
        private: false,
      },
      pending: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any async rules in progress in any language.',
        private: false,
      },
      debouncing: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a validation rule with pending debounce in any language.',
        private: false,
      },
      busy: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is `pending` or `debouncing` in any language.',
        private: false,
      },
      errors: {
        types: [
          'array',
        ],
        description: 'All the errors of `MessageBag`.',
        private: false,
      },
      error: {
        types: [
          'string',
        ],
        description: 'The first error of `MessageBag`.',
        private: false,
      },
      validationRules: {
        types: [
          'string',
          'array',
        ],
        description: 'The element&apos;s validation rules.',
        private: true,
      },
      isDanger: {
        types: [
          'boolean',
        ],
        description: 'Whether the field has errors.',
        private: false,
      },
      isSuccess: {
        types: [
          'boolean',
        ],
        description: 'Whether the field has been filled in successfully.',
        private: false,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      model: {
        types: [
          'any',
        ],
        description: 'Intermediary value between element&apos;s value and field&apos;s `v-model`. It is required when we need to transform the value format between the element and its field.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
      Size: {
        types: [
          'string',
        ],
        description: 'The resolved size of the element and all of its child components.',
        private: false,
      },
      View: {
        types: [
          'string',
        ],
        description: 'The name of the resolved view for the component and the default view for its child components. Child component views can be overridden with [`views`](#option-views) option. This one should be used to determine the component&apos;s view in class functions.',
        private: false,
      },
      Views: {
        types: [
          'object',
        ],
        description: 'The name of the views for the components.',
        private: true,
      },
    },
    methods: {
      autosize: {
        description: 'Updates the height of the input based in its contents when [`autogrow`](#option-autogrow) is enabled.',
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
      updateConditions: {
        description: 'Updates element conditions after they have been changed.',
        returns: 'void',
        private: true,
      },
      load: {
        description: 'Loads value to the element using optional [`formatLoad`](#option-format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`formatLoad`](#option-format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#method-load), only that it can\&apos;t format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`default`](#option-default) (or empty if `default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: 'Prepares the element.',
        returns: 'void',
        private: true,
      },
      disable: {
        description: 'Disables the element.',
        returns: 'void',
        private: false,
      },
      enable: {
        description: 'Enables the element even if it is disabled by [`disabled`](#disabled) option.',
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
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
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
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires and emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      handleInput: {
        description: 'Handles `input` event.',
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
      validate: {
        description: 'Checks each validation rule for the element in every language (async).',
        returns: 'void',
        private: false,
      },
      validateLanguage: {
        description: 'Checks each validation rule for the element in a specific language (async).',
        returns: 'void',
        params: {
          lang: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'the langauage to check (defaults to currently selected language)',
          },
        },
        private: false,
      },
      dirt: {
        description: 'Flag the element as dirty.',
        returns: 'void',
        private: true,
      },
      clean: {
        description: 'Removes the element&apos;s `dirty` state.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Sets the validators to default state.',
        returns: 'void',
        private: false,
      },
      initState: {
        description: 'Inits the default `state` object.',
        returns: 'void',
        private: true,
      },
      initMessageBag: {
        description: 'Initalizes MessageBag service.',
        returns: 'void',
        private: true,
      },
      initValidation: {
        description: 'Initalizes validators.',
        returns: 'void',
        private: true,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#method-hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form&apos;s component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default templates and classes.',
        private: false,
      },
    },
    events: {
      'change': {
        description: 'Triggered when the element&apos;s value is changed.',
        params: {
          newValue: {
            description: 'the new value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'the old value',
            types: [
              'string',
            ]
          },
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeCreate': {
        description: 'Triggered in beforeCreate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'created': {
        description: 'Triggered in created hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeMount': {
        description: 'Triggered in beforeMount hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'mounted': {
        description: 'Triggered in mounted hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUpdate': {
        description: 'Triggered in beforeUpdate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'updated': {
        description: 'Triggered in updated hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUnmount': {
        description: 'Triggered in beforeUnmount (or beforeDestroy in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'unmounted': {
        description: 'Triggered in unmounted (or destroyed in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
    },
    slots: {
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'addon-before': {
        description: 'Prepends an addon to the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'addon-after': {
        description: 'Appends an addon to the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
    },
    views: [],
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
        required: true,
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
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
        required: false,
        private: true,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      removeClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClass: {
        required: 'false',
        default: 'null',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      removeClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      presets: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      view: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      views: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      size: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      templates: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      infoPosition: {
        required: 'false',
        default: 'right',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      messages: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      fieldName: {
        required: 'false',
        default: 'name|label',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      type: {
        required: 'false',
        default: 'tags',
        types: [
          'string',
        ],
        required: false,
        private: true,
      },
      default: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      disabled: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      floating: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'boolean',
        ],
        required: false,
        private: false,
      },
      id: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      placeholder: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      attrs: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      onSelect: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onDeselect: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onSearchChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onOpen: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onClose: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onTag: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onClear: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onPaste: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      items: {
        required: 'false',
        default: '{}',
        types: [
          'object',
          'array',
          'function',
          'string',
        ],
        required: false,
        private: false,
      },
      labelProp: {
        required: 'false',
        default: 'label',
        types: [
          'string',
        ],
        native: false,
        required: false,
        private: false,
      },
      valueProp: {
        required: 'false',
        default: 'value',
        types: [
          'string',
        ],
        native: false,
        required: false,
        private: false,
      },
      search: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        native: false,
        required: false,
        private: false,
      },
      trackBy: {
        required: 'false',
        default: 'label',
        types: [
          'string',
        ],
        native: false,
        required: false,
        private: false,
      },
      strict: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        native: false,
        required: false,
        private: false,
      },
      create: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      appendNewOption: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      addOptionOn: {
        required: 'false',
        default: '["enter"]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      object: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        native: false,
        required: false,
        private: false,
      },
      limit: {
        required: 'false',
        default: '-1',
        types: [
          'number',
        ],
        native: false,
        required: false,
        private: false,
      },
      max: {
        required: 'false',
        default: '-1',
        types: [
          'number',
        ],
        native: false,
        required: false,
        private: false,
      },
      groups: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        native: false,
        required: false,
        private: false,
      },
      groupLabel: {
        required: 'false',
        default: 'label',
        types: [
          'string',
        ],
        native: false,
        required: false,
        private: false,
      },
      groupOptions: {
        required: 'false',
        default: 'items',
        types: [
          'string',
        ],
        native: false,
        required: false,
        private: false,
      },
      groupHideEmpty: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        native: false,
        required: false,
        private: false,
      },
      groupSelect: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        native: false,
        required: false,
        private: false,
      },
      openDirection: {
        required: 'false',
        default: 'bottom',
        types: [
          'string',
        ],
        native: false,
        required: false,
        private: false,
      },
      canClear: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        native: false,
        required: false,
        private: false,
      },
      clearOnSelect: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        native: false,
        required: false,
        private: false,
      },
      closeOnSelect: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        native: false,
        required: false,
        private: false,
      },
      delay: {
        required: 'false',
        default: '-1',
        types: [
          'number',
        ],
        native: false,
        required: false,
        private: false,
      },
      minChars: {
        required: 'false',
        default: '0',
        types: [
          'number',
        ],
        native: false,
        required: false,
        private: false,
      },
      resolveOnLoad: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        native: false,
        required: false,
        private: false,
      },
      filterResults: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        native: false,
        required: false,
        private: false,
      },
      clearOnSearch: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        native: false,
        required: false,
        private: false,
      },
      hideSelected: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        native: false,
        required: false,
        private: false,
      },
      showOptions: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      caret: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        native: false,
        required: false,
        private: false,
      },
      loading: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        native: false,
        required: false,
        private: false,
      },
      noOptionsText: {
        required: 'false',
        default: 'locale.multiselect.noOptions',
        types: [
          'string',
        ],
        native: false,
        required: false,
        private: false,
      },
      noResultsText: {
        required: 'false',
        default: 'locale.multiselect.noResults',
        types: [
          'string',
        ],
        native: false,
        required: false,
        private: false,
      },
      autocomplete: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        native: false,
        required: false,
        private: false,
      },
      inputType: {
        required: 'false',
        default: 'text',
        types: [
          'string',
        ],
        native: false,
        required: false,
        private: false,
      },
      extendOptions: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      mounted: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has been already mounted.',
        default: 'true',
        private: false,
      },
      localDisabled: {
        types: [
          'boolean',
          'null',
        ],
        description: 'Helper to store whether the element is disabled via api (with .disable()).',
        default: 'null',
        private: true,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      focused: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is focused.',
        private: false,
      },
      input: {
        types: [
          'HTMLElement',
        ],
        description: 'The main input field of the element.',
        private: false,
      },
      state: {
        types: [
          'object',
        ],
        description: 'Helper property used to store the element states.',
        default: '{ dirty: false, validate: true }',
        private: true,
      },
      Validators: {
        types: [
          'array,Validator',
        ],
        description: 'An array containing all the validators of the element.',
        default: '[]',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Instance of MessageBag service. Custom errors and messages [can be added](/docs/1.x/validating-elements#custom-errors-and-messages).',
        default: 'MessageBag',
        private: false,
      },
      initialValue: {
        types: [
          'any',
        ],
        description: 'The initial value of the element.',
        private: true,
      },
      internalValue: {
        types: [
          'any',
        ],
        description: 'The store for the value of the element when we&apos;re not using external data (form&apos;s `v-model`).',
        private: true,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#method-show) or [`hide()`](#method-hide) methods.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      resolvedOptions: {
        types: [
          'array',
        ],
        description: 'Contains the resolved options.',
        private: false,
      },
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: true,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: true,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: true,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: true,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: true,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'The component&apos;s classes.',
        private: false,
      },
      classesInstance: {
        types: [
          'MergeClasses',
        ],
        description: 'The classes instance (for testing purpose).',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether no [`conditions`](#option-conditions) are defined or they are all fulfilled.',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of the element in `{[name]: value}` value format. This gets merged with the parent component&apos;s data.',
        private: false,
      },
      requestData: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`submit`](#option-submit) is not disabled and [`available`](#property-available) is `true` (has no [`conditions`](#option-conditions) or they are fulfilled).',
        private: false,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
      },
      isDisabled: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is disabled.',
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
        description: 'The `id` of the <%field%>. If [`id`](#option-id) is not provided [`path`](#option-path) will be used.',
        private: false,
      },
      hasFloating: {
        types: [
          'boolean',
        ],
        description: 'Whether the element floating label.',
        private: false,
      },
      genericName: {
        types: [
          'string',
        ],
        description: 'The generic name of the element constructed from label / floating or element name.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`label`](#option-label) option, a [#label](#slot-label) slot or `Vueform` component&apos;s [`forceLabels`](vueform#option-force-labels) option is `true`.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      isLoading: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is in loading state.',
        private: false,
      },
      nullValue: {
        types: [
          'any',
        ],
        description: 'The null value of the element.',
        private: true,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
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
        description: 'The path of the element&apos;s data using dot `.` syntax.',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      Templates: {
        types: [
          'object',
        ],
        description: 'The list of templates available to the element.',
        private: true,
      },
      template: {
        types: [
          'object',
        ],
        description: 'The component&apos;s template.',
        private: false,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value was modified.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was already validated at least once.',
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
      busy: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is `pending`.',
        private: false,
      },
      errors: {
        types: [
          'array',
        ],
        description: 'All the errors of `MessageBag`.',
        private: false,
      },
      error: {
        types: [
          'string',
        ],
        description: 'The first error of `MessageBag`.',
        private: false,
      },
      validationRules: {
        types: [
          'string',
          'array',
        ],
        description: 'The element&apos;s validation rules.',
        private: true,
      },
      isDanger: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has errors.',
        private: false,
      },
      isSuccess: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has been filled in successfully.',
        private: false,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      model: {
        types: [
          'any',
        ],
        description: 'Intermediary value between element&apos;s value and field&apos;s `v-model`. It is required when we need to transform the value format between the element and its field.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
      Size: {
        types: [
          'string',
        ],
        description: 'The resolved size of the element and all of its child components.',
        private: false,
      },
      View: {
        types: [
          'string',
        ],
        description: 'The name of the resolved view for the component and the default view for its child components. Child component views can be overridden with [`views`](#option-views) option. This one should be used to determine the component&apos;s view in class functions.',
        private: false,
      },
      Views: {
        types: [
          'object',
        ],
        description: 'The name of the views for the components.',
        private: true,
      },
    },
    methods: {
      updateItems: {
        description: 'Fetches & updates select options when using `async` options. Receives [`el$`](#property-el) as first param.',
        returns: 'void',
        params: {
          disable: {
            types: [
              'boolean',
            ],
            required: 'true',
            description: 'whether the input field should be disabled while fetching options',
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
      updateConditions: {
        description: 'Updates element conditions after they have been changed.',
        returns: 'void',
        private: true,
      },
      load: {
        description: 'Loads value to the element using optional [`formatLoad`](#option-format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`formatLoad`](#option-format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#method-load), only that it can\&apos;t format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`default`](#option-default) (or empty if `default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: 'Prepares the element.',
        returns: 'void',
        private: true,
      },
      disable: {
        description: 'Disables the element.',
        returns: 'void',
        private: false,
      },
      enable: {
        description: 'Enables the element even if it is disabled by [`disabled`](#disabled) option.',
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
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
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
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires and emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      handleSelect: {
        description: 'Handles `select` event.',
        returns: 'void',
        params: {
          option: {
            types: [
              'object',
            ],
            required: 'true',
            description: 'the selected option object',
          },
        },
        private: true,
      },
      handleDeselect: {
        description: 'Handles `deselect` event.',
        returns: 'void',
        params: {
          option: {
            types: [
              'object',
            ],
            required: 'true',
            description: 'the deselected option object',
          },
        },
        private: true,
      },
      handleSearchChange: {
        description: 'Handles `search-change` event.',
        returns: 'void',
        params: {
          searchQuery: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the current search query',
          },
        },
        private: true,
      },
      handleOpen: {
        description: 'Handles `open` event.',
        returns: 'void',
        private: true,
      },
      handleClose: {
        description: 'Handles `close` event.',
        returns: 'void',
        private: true,
      },
      handleClear: {
        description: 'Handles `clear` event.',
        returns: 'void',
        private: true,
      },
      handlePaste: {
        description: 'Handles `paste` event.',
        returns: 'void',
        params: {
          e: {
            types: [
              'Event',
            ],
            required: 'false',
            description: 'event',
          },
        },
        private: true,
      },
      handleTag: {
        description: 'Handles `tag` event.',
        returns: 'void',
        params: {
          searchQuery: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the current search query',
          },
        },
        private: true,
      },
      handleTag: {
        description: 'Handles `tag` event.',
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
        description: 'Selects one or more options.',
        returns: 'void',
        params: {
          options: {
            types: [
              'str',
              'array',
            ],
            required: 'true',
            description: 'value(s) of the option(s) to select',
          },
        },
        private: false,
      },
      deselect: {
        description: 'Deselects one or more options.',
        returns: 'void',
        params: {
          options: {
            types: [
              'str',
              'array',
            ],
            required: 'true',
            description: 'value(s) of the option(s) to deselect',
          },
        },
        private: false,
      },
      validate: {
        description: 'Checks each validation rule for the element (async).',
        returns: 'void',
        private: false,
      },
      dirt: {
        description: 'Flag the element as dirty.',
        returns: 'void',
        private: true,
      },
      clean: {
        description: 'Removes the element&apos;s `dirty` state.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Sets the validators to default state.',
        returns: 'void',
        private: false,
      },
      initMessageBag: {
        description: 'Initalizes MessageBag service.',
        returns: 'void',
        private: true,
      },
      initValidation: {
        description: 'Initalizes validators.',
        returns: 'void',
        private: true,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#method-hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form&apos;s component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default templates and classes.',
        private: false,
      },
    },
    events: {
      'change': {
        description: 'Triggered when the element&apos;s value is changed.',
        params: {
          newValue: {
            description: 'the new value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'the old value',
            types: [
              'string',
            ]
          },
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'select': {
        description: 'Triggered when an option is selected.',
        params: {
          option: {
            description: 'the selected option',
            types: [
              'object',
            ]
          },
       },
      },
      'deselect': {
        description: 'Triggered when an option is deselected.',
        params: {
          option: {
            description: 'the deselected option',
            types: [
              'object',
            ]
          },
       },
      },
      'search-change': {
        description: 'Triggered when the search query changes when using [`search: true`](#option-search).',
        params: {
          searchQuery: {
            description: 'the search value',
            types: [
              'string|null',
            ]
          },
       },
      },
      'open': {
        description: 'Triggered when the dropdown list is opened.',
      },
      'close': {
        description: 'Triggered when the dropdown list is closed.',
      },
      'tag': {
        description: 'Triggered when a new tag is created when using [`create: true`](#optons-create).',
        params: {
          tag: {
            description: 'the tag value',
            types: [
              'string',
            ]
          },
       },
      },
      'clear': {
        description: 'Triggered when the value is cleared.',
      },
      'paste': {
        description: 'Triggered when text is pasted to the search input when using [`search: true`](#option-search).',
        params: {
          event: {
            description: 'the paste Event',
            types: [
              'Event',
            ]
          },
       },
      },
      'beforeCreate': {
        description: 'Triggered in beforeCreate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'created': {
        description: 'Triggered in created hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeMount': {
        description: 'Triggered in beforeMount hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'mounted': {
        description: 'Triggered in mounted hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUpdate': {
        description: 'Triggered in beforeUpdate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'updated': {
        description: 'Triggered in updated hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUnmount': {
        description: 'Triggered in beforeUnmount (or beforeDestroy in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'unmounted': {
        description: 'Triggered in unmounted (or destroyed in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
    },
    slots: {
      'tag': {
        description: 'Replaces the default tag template.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
          option: {
            description: 'the option object',
            types: [
              'object',
            ],
          },
          disabled: {
            description: 'whether the option is disabled',
            types: [
              'boolean',
            ],
          },
          handleTagRemove: {
            description: 'removes the tag from the selected options',
            types: [
              'function',
            ],
          },
        },
      },
      'option': {
        description: 'Replaces the default option template.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
          option: {
            description: 'the option object',
            types: [
              'object',
            ],
          },
          search: {
            description: 'the current value of search input',
            types: [
              'string|null',
            ],
          },
        },
      },
      'placeholder': {
        description: 'Replaces the default template for the input&apos;s [`placeholder`](#option-placeholder).',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'group-label': {
        description: 'Replaces the default group header when [`groups`](#option-groups) is `true`.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
          group: {
            description: 'the group object',
            types: [
              'object',
            ],
          },
        },
      },
      'before-list': {
        description: 'Prepends the content of the slot to the option list.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after-list': {
        description: 'Appends the content of the slot to the option list.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'no-results': {
        description: 'Replaces the default template that is shown when the input has options, but the user search does not have any results. Can be also set without overriding the template with [`noResultsText`](#option-no-results-text) option.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'no-options': {
        description: 'Replaces the default template that is shown when the input has no options. Can be also set without overriding the template with [`noOptionsText`](#option-no-options-text) option.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'caret': {
        description: 'Replaces the small triangle displayed on the right of the input when [`caret`](#option-caret) is `true`.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'spinner': {
        description: 'Replaces the spinner shown when async options are loading or [`loading`](#option-loading) is `true`.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'clear': {
        description: 'Replaces the clear icon shown when the input has at least one selected options and [`canClear`](#option-can-clear) is `true`.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
          clear: {
            description: 'clears the input value',
            types: [
              'function',
            ],
          },
        },
      },
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
    },
    views: [],
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
        required: true,
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
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
        required: false,
        private: true,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      removeClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClass: {
        required: 'false',
        default: 'null',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      removeClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      presets: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      view: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      views: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      size: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      templates: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      infoPosition: {
        required: 'false',
        default: 'right',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      messages: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      fieldName: {
        required: 'false',
        default: 'name|label',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      type: {
        required: 'false',
        default: 'text',
        types: [
          'string',
        ],
        required: false,
        private: true,
      },
      default: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'number',
        ],
        required: false,
        private: false,
      },
      debounce: {
        required: 'false',
        default: 'null',
        types: [
          'number',
        ],
        required: false,
        private: false,
      },
      disabled: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      floating: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'boolean',
        ],
        required: false,
        private: false,
      },
      id: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      placeholder: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      readonly: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      inputType: {
        required: 'false',
        default: 'text',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      attrs: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      addons: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      autocomplete: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'number',
        ],
        required: false,
        private: false,
      },
      loading: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      onBlur: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      mounted: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has been already mounted.',
        default: 'true',
        private: false,
      },
      localDisabled: {
        types: [
          'boolean',
          'null',
        ],
        description: 'Helper to store whether the element is disabled via api (with .disable()).',
        default: 'null',
        private: true,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      focused: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is focused.',
        private: false,
      },
      input: {
        types: [
          'HTMLElement',
        ],
        description: 'The main input field of the element.',
        private: false,
      },
      state: {
        types: [
          'object',
        ],
        description: 'Helper property used to store the element states.',
        default: '{ dirty: false, validate: true }',
        private: true,
      },
      Validators: {
        types: [
          'array,Validator',
        ],
        description: 'An array containing all the validators of the element.',
        default: '[]',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Instance of MessageBag service. Custom errors and messages [can be added](/docs/1.x/validating-elements#custom-errors-and-messages).',
        default: 'MessageBag',
        private: false,
      },
      initialValue: {
        types: [
          'any',
        ],
        description: 'The initial value of the element.',
        private: true,
      },
      internalValue: {
        types: [
          'any',
        ],
        description: 'The store for the value of the element when we&apos;re not using external data (form&apos;s `v-model`).',
        private: true,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#method-show) or [`hide()`](#method-hide) methods.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: true,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: true,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: true,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: true,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: true,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'The component&apos;s classes.',
        private: false,
      },
      classesInstance: {
        types: [
          'MergeClasses',
        ],
        description: 'The classes instance (for testing purpose).',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether no [`conditions`](#option-conditions) are defined or they are all fulfilled.',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of the element in `{[name]: value}` value format. This gets merged with the parent component&apos;s data.',
        private: false,
      },
      requestData: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`submit`](#option-submit) is not disabled and [`available`](#property-available) is `true` (has no [`conditions`](#option-conditions) or they are fulfilled).',
        private: false,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
      },
      isDisabled: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is disabled.',
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
        description: 'The `id` of the <%field%>. If [`id`](#option-id) is not provided [`path`](#option-path) will be used.',
        private: false,
      },
      hasFloating: {
        types: [
          'boolean',
        ],
        description: 'Whether the element floating label.',
        private: false,
      },
      genericName: {
        types: [
          'string',
        ],
        description: 'The generic name of the element constructed from label / floating or element name.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`label`](#option-label) option, a [#label](#slot-label) slot or `Vueform` component&apos;s [`forceLabels`](vueform#option-force-labels) option is `true`.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      isLoading: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is in loading state.',
        private: false,
      },
      nullValue: {
        types: [
          'any',
        ],
        description: 'The null value of the element.',
        private: true,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
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
        description: 'The path of the element&apos;s data using dot `.` syntax.',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      Templates: {
        types: [
          'object',
        ],
        description: 'The list of templates available to the element.',
        private: true,
      },
      template: {
        types: [
          'object',
        ],
        description: 'The component&apos;s template.',
        private: false,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value was modified.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was already validated at least once.',
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
        description: 'Whether the element has a validation rule with pending debounce.',
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
        description: 'All the errors of `MessageBag`.',
        private: false,
      },
      error: {
        types: [
          'string',
        ],
        description: 'The first error of `MessageBag`.',
        private: false,
      },
      validationRules: {
        types: [
          'string',
          'array',
        ],
        description: 'The element&apos;s validation rules.',
        private: true,
      },
      isDanger: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has errors.',
        private: false,
      },
      isSuccess: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has been filled in successfully.',
        private: false,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      model: {
        types: [
          'any',
        ],
        description: 'Intermediary value between element&apos;s value and field&apos;s `v-model`. It is required when we need to transform the value format between the element and its field.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
      Size: {
        types: [
          'string',
        ],
        description: 'The resolved size of the element and all of its child components.',
        private: false,
      },
      View: {
        types: [
          'string',
        ],
        description: 'The name of the resolved view for the component and the default view for its child components. Child component views can be overridden with [`views`](#option-views) option. This one should be used to determine the component&apos;s view in class functions.',
        private: false,
      },
      Views: {
        types: [
          'object',
        ],
        description: 'The name of the views for the components.',
        private: true,
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
      updateConditions: {
        description: 'Updates element conditions after they have been changed.',
        returns: 'void',
        private: true,
      },
      load: {
        description: 'Loads value to the element using optional [`formatLoad`](#option-format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`formatLoad`](#option-format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#method-load), only that it can\&apos;t format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`default`](#option-default) (or empty if `default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: 'Prepares the element.',
        returns: 'void',
        private: true,
      },
      disable: {
        description: 'Disables the element.',
        returns: 'void',
        private: false,
      },
      enable: {
        description: 'Enables the element even if it is disabled by [`disabled`](#disabled) option.',
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
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
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
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires and emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      handleBlur: {
        description: 'Handles `blur` event.',
        returns: 'void',
        private: true,
      },
      handleInput: {
        description: 'Handles `input` event.',
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
      validate: {
        description: 'Checks each validation rule for the element (async).',
        returns: 'void',
        private: false,
      },
      dirt: {
        description: 'Flag the element as dirty.',
        returns: 'void',
        private: true,
      },
      clean: {
        description: 'Removes the element&apos;s `dirty` state.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Sets the validators to default state.',
        returns: 'void',
        private: false,
      },
      initMessageBag: {
        description: 'Initalizes MessageBag service.',
        returns: 'void',
        private: true,
      },
      initValidation: {
        description: 'Initalizes validators.',
        returns: 'void',
        private: true,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#method-hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form&apos;s component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default templates and classes.',
        private: false,
      },
    },
    events: {
      'change': {
        description: 'Triggered when the element&apos;s value is changed.',
        params: {
          newValue: {
            description: 'the new value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'the old value',
            types: [
              'string',
            ]
          },
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'blur': {
        description: 'Triggered when the input is blurred.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeCreate': {
        description: 'Triggered in beforeCreate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'created': {
        description: 'Triggered in created hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeMount': {
        description: 'Triggered in beforeMount hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'mounted': {
        description: 'Triggered in mounted hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUpdate': {
        description: 'Triggered in beforeUpdate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'updated': {
        description: 'Triggered in updated hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUnmount': {
        description: 'Triggered in beforeUnmount (or beforeDestroy in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'unmounted': {
        description: 'Triggered in unmounted (or destroyed in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
    },
    slots: {
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'addon-before': {
        description: 'Prepends an addon to the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'addon-after': {
        description: 'Appends an addon to the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
    },
    views: [],
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
        required: true,
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
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
        required: false,
        private: true,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      removeClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClass: {
        required: 'false',
        default: 'null',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      removeClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      presets: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      view: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      views: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      size: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      templates: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      infoPosition: {
        required: 'false',
        default: 'right',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      messages: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      fieldName: {
        required: 'false',
        default: 'name|label',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      type: {
        required: 'false',
        default: 'textarea',
        types: [
          'string',
        ],
        required: false,
        private: true,
      },
      default: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'number',
        ],
        required: false,
        private: false,
      },
      addons: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      autogrow: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      rows: {
        required: 'false',
        default: '3',
        types: [
          'number',
        ],
        required: false,
        private: false,
      },
      debounce: {
        required: 'false',
        default: 'null',
        types: [
          'number',
        ],
        required: false,
        private: false,
      },
      disabled: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      floating: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'boolean',
        ],
        required: false,
        private: false,
      },
      id: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      placeholder: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      readonly: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      attrs: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      mounted: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has been already mounted.',
        default: 'true',
        private: false,
      },
      localDisabled: {
        types: [
          'boolean',
          'null',
        ],
        description: 'Helper to store whether the element is disabled via api (with .disable()).',
        default: 'null',
        private: true,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      focused: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is focused.',
        private: false,
      },
      input: {
        types: [
          'HTMLElement',
        ],
        description: 'The main input field of the element.',
        private: false,
      },
      state: {
        types: [
          'object',
        ],
        description: 'Helper property used to store the element states.',
        default: '{ dirty: false, validate: true }',
        private: true,
      },
      Validators: {
        types: [
          'array,Validator',
        ],
        description: 'An array containing all the validators of the element.',
        default: '[]',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Instance of MessageBag service. Custom errors and messages [can be added](/docs/1.x/validating-elements#custom-errors-and-messages).',
        default: 'MessageBag',
        private: false,
      },
      initialValue: {
        types: [
          'any',
        ],
        description: 'The initial value of the element.',
        private: true,
      },
      internalValue: {
        types: [
          'any',
        ],
        description: 'The store for the value of the element when we&apos;re not using external data (form&apos;s `v-model`).',
        private: true,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#method-show) or [`hide()`](#method-hide) methods.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: true,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: true,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: true,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: true,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: true,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'The component&apos;s classes.',
        private: false,
      },
      classesInstance: {
        types: [
          'MergeClasses',
        ],
        description: 'The classes instance (for testing purpose).',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether no [`conditions`](#option-conditions) are defined or they are all fulfilled.',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of the element in `{[name]: value}` value format. This gets merged with the parent component&apos;s data.',
        private: false,
      },
      requestData: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`submit`](#option-submit) is not disabled and [`available`](#property-available) is `true` (has no [`conditions`](#option-conditions) or they are fulfilled).',
        private: false,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
      },
      isDisabled: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is disabled.',
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
        description: 'The `id` of the <%field%>. If [`id`](#option-id) is not provided [`path`](#option-path) will be used.',
        private: false,
      },
      hasFloating: {
        types: [
          'boolean',
        ],
        description: 'Whether the element floating label.',
        private: false,
      },
      genericName: {
        types: [
          'string',
        ],
        description: 'The generic name of the element constructed from label / floating or element name.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`label`](#option-label) option, a [#label](#slot-label) slot or `Vueform` component&apos;s [`forceLabels`](vueform#option-force-labels) option is `true`.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      nullValue: {
        types: [
          'any',
        ],
        description: 'The null value of the element.',
        private: true,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
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
        description: 'The path of the element&apos;s data using dot `.` syntax.',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      Templates: {
        types: [
          'object',
        ],
        description: 'The list of templates available to the element.',
        private: true,
      },
      template: {
        types: [
          'object',
        ],
        description: 'The component&apos;s template.',
        private: false,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value was modified.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was already validated at least once.',
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
        description: 'Whether the element has a validation rule with pending debounce.',
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
        description: 'All the errors of `MessageBag`.',
        private: false,
      },
      error: {
        types: [
          'string',
        ],
        description: 'The first error of `MessageBag`.',
        private: false,
      },
      validationRules: {
        types: [
          'string',
          'array',
        ],
        description: 'The element&apos;s validation rules.',
        private: true,
      },
      isDanger: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has errors.',
        private: false,
      },
      isSuccess: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has been filled in successfully.',
        private: false,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      model: {
        types: [
          'any',
        ],
        description: 'Intermediary value between element&apos;s value and field&apos;s `v-model`. It is required when we need to transform the value format between the element and its field.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
      Size: {
        types: [
          'string',
        ],
        description: 'The resolved size of the element and all of its child components.',
        private: false,
      },
      View: {
        types: [
          'string',
        ],
        description: 'The name of the resolved view for the component and the default view for its child components. Child component views can be overridden with [`views`](#option-views) option. This one should be used to determine the component&apos;s view in class functions.',
        private: false,
      },
      Views: {
        types: [
          'object',
        ],
        description: 'The name of the views for the components.',
        private: true,
      },
    },
    methods: {
      autosize: {
        description: 'Updates the height of the input based in its contents when [`autogrow`](#option-autogrow) is enabled.',
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
      updateConditions: {
        description: 'Updates element conditions after they have been changed.',
        returns: 'void',
        private: true,
      },
      load: {
        description: 'Loads value to the element using optional [`formatLoad`](#option-format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`formatLoad`](#option-format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#method-load), only that it can\&apos;t format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`default`](#option-default) (or empty if `default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: 'Prepares the element.',
        returns: 'void',
        private: true,
      },
      disable: {
        description: 'Disables the element.',
        returns: 'void',
        private: false,
      },
      enable: {
        description: 'Enables the element even if it is disabled by [`disabled`](#disabled) option.',
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
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
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
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires and emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      handleInput: {
        description: 'Handles `input` event.',
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
      validate: {
        description: 'Checks each validation rule for the element (async).',
        returns: 'void',
        private: false,
      },
      dirt: {
        description: 'Flag the element as dirty.',
        returns: 'void',
        private: true,
      },
      clean: {
        description: 'Removes the element&apos;s `dirty` state.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Sets the validators to default state.',
        returns: 'void',
        private: false,
      },
      initMessageBag: {
        description: 'Initalizes MessageBag service.',
        returns: 'void',
        private: true,
      },
      initValidation: {
        description: 'Initalizes validators.',
        returns: 'void',
        private: true,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#method-hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form&apos;s component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default templates and classes.',
        private: false,
      },
    },
    events: {
      'change': {
        description: 'Triggered when the element&apos;s value is changed.',
        params: {
          newValue: {
            description: 'the new value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'the old value',
            types: [
              'string',
            ]
          },
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeCreate': {
        description: 'Triggered in beforeCreate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'created': {
        description: 'Triggered in created hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeMount': {
        description: 'Triggered in beforeMount hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'mounted': {
        description: 'Triggered in mounted hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUpdate': {
        description: 'Triggered in beforeUpdate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'updated': {
        description: 'Triggered in updated hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUnmount': {
        description: 'Triggered in beforeUnmount (or beforeDestroy in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'unmounted': {
        description: 'Triggered in unmounted (or destroyed in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
    },
    slots: {
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'addon-before': {
        description: 'Prepends an addon to the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'addon-after': {
        description: 'Appends an addon to the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
    },
    views: [],
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
        required: true,
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
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
        required: false,
        private: true,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      removeClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClass: {
        required: 'false',
        default: 'null',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClass: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'object',
          'string',
        ],
        required: false,
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      replaceClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      removeClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      presets: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        required: false,
        private: false,
      },
      view: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      views: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      size: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      templates: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      infoPosition: {
        required: 'false',
        default: 'right',
        types: [
          'string',
        ],
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        required: false,
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        required: false,
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
        required: false,
        private: false,
      },
      messages: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
      fieldName: {
        required: 'false',
        default: 'name|label',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      type: {
        required: 'false',
        default: 'toggle',
        types: [
          'string',
        ],
        required: false,
        private: true,
      },
      default: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
          'number',
          'boolean',
        ],
        required: false,
        private: false,
      },
      disabled: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        required: false,
        private: false,
      },
      id: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      text: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        required: false,
        private: false,
      },
      labels: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
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
        required: false,
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
        required: false,
        private: false,
      },
      extendOptions: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        required: false,
        private: false,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      mounted: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has been already mounted.',
        default: 'true',
        private: false,
      },
      localDisabled: {
        types: [
          'boolean',
          'null',
        ],
        description: 'Helper to store whether the element is disabled via api (with .disable()).',
        default: 'null',
        private: true,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      input: {
        types: [
          'HTMLElement',
        ],
        description: 'The main input field of the element.',
        private: false,
      },
      state: {
        types: [
          'object',
        ],
        description: 'Helper property used to store the element states.',
        default: '{ dirty: false, validate: true }',
        private: true,
      },
      Validators: {
        types: [
          'array,Validator',
        ],
        description: 'An array containing all the validators of the element.',
        default: '[]',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Instance of MessageBag service. Custom errors and messages [can be added](/docs/1.x/validating-elements#custom-errors-and-messages).',
        default: 'MessageBag',
        private: false,
      },
      initialValue: {
        types: [
          'any',
        ],
        description: 'The initial value of the element.',
        private: true,
      },
      internalValue: {
        types: [
          'any',
        ],
        description: 'The store for the value of the element when we&apos;re not using external data (form&apos;s `v-model`).',
        private: true,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#method-show) or [`hide()`](#method-hide) methods.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: true,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: true,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: true,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: true,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: true,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'The component&apos;s classes.',
        private: false,
      },
      classesInstance: {
        types: [
          'MergeClasses',
        ],
        description: 'The classes instance (for testing purpose).',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether no [`conditions`](#option-conditions) are defined or they are all fulfilled.',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of the element in `{[name]: value}` value format. This gets merged with the parent component&apos;s data.',
        private: false,
      },
      requestData: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`submit`](#option-submit) is not disabled and [`available`](#property-available) is `true` (has no [`conditions`](#option-conditions) or they are fulfilled).',
        private: false,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
      },
      isDisabled: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is disabled.',
        private: false,
      },
      fieldId: {
        types: [
          'string',
        ],
        description: 'The `id` of the <%field%>. If [`id`](#option-id) is not provided [`path`](#option-path) will be used.',
        private: false,
      },
      genericName: {
        types: [
          'string',
        ],
        description: 'The generic name of the element constructed from label / floating or element name.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`label`](#option-label) option, a [#label](#slot-label) slot or `Vueform` component&apos;s [`forceLabels`](vueform#option-force-labels) option is `true`.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      nullValue: {
        types: [
          'any',
        ],
        description: 'The null value of the element.',
        private: true,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
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
        description: 'The path of the element&apos;s data using dot `.` syntax.',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      Templates: {
        types: [
          'object',
        ],
        description: 'The list of templates available to the element.',
        private: true,
      },
      template: {
        types: [
          'object',
        ],
        description: 'The component&apos;s template.',
        private: false,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value was modified.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was already validated at least once.',
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
      busy: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is `pending`.',
        private: false,
      },
      errors: {
        types: [
          'array',
        ],
        description: 'All the errors of `MessageBag`.',
        private: false,
      },
      error: {
        types: [
          'string',
        ],
        description: 'The first error of `MessageBag`.',
        private: false,
      },
      validationRules: {
        types: [
          'string',
          'array',
        ],
        description: 'The element&apos;s validation rules.',
        private: true,
      },
      isDanger: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has errors.',
        private: false,
      },
      isSuccess: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has been filled in successfully.',
        private: false,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      model: {
        types: [
          'any',
        ],
        description: 'Intermediary value between element&apos;s value and field&apos;s `v-model`. It is required when we need to transform the value format between the element and its field.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
      Size: {
        types: [
          'string',
        ],
        description: 'The resolved size of the element and all of its child components.',
        private: false,
      },
      View: {
        types: [
          'string',
        ],
        description: 'The name of the resolved view for the component and the default view for its child components. Child component views can be overridden with [`views`](#option-views) option. This one should be used to determine the component&apos;s view in class functions.',
        private: false,
      },
      Views: {
        types: [
          'object',
        ],
        description: 'The name of the views for the components.',
        private: true,
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
      updateConditions: {
        description: 'Updates element conditions after they have been changed.',
        returns: 'void',
        private: true,
      },
      load: {
        description: 'Loads value to the element using optional [`formatLoad`](#option-format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`formatLoad`](#option-format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#method-load), only that it can\&apos;t format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`default`](#option-default) (or empty if `default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: 'Prepares the element.',
        returns: 'void',
        private: true,
      },
      disable: {
        description: 'Disables the element.',
        returns: 'void',
        private: false,
      },
      enable: {
        description: 'Enables the element even if it is disabled by [`disabled`](#disabled) option.',
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
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
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
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires and emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      handleChange: {
        description: 'Handles `change` event.',
        returns: 'void',
        params: {
          val: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'value of the element',
          },
        },
        private: true,
      },
      check: {
        description: 'Sets the toggle to `on` ([`trueValue`](#option-true-value)).',
        returns: 'void',
        private: false,
      },
      uncheck: {
        description: 'Sets the toggle to `off` ([`falseValue`](#option-false-value)).',
        returns: 'void',
        private: false,
      },
      validate: {
        description: 'Checks each validation rule for the element (async).',
        returns: 'void',
        private: false,
      },
      dirt: {
        description: 'Flag the element as dirty.',
        returns: 'void',
        private: true,
      },
      clean: {
        description: 'Removes the element&apos;s `dirty` state.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Sets the validators to default state.',
        returns: 'void',
        private: false,
      },
      initMessageBag: {
        description: 'Initalizes MessageBag service.',
        returns: 'void',
        private: true,
      },
      initValidation: {
        description: 'Initalizes validators.',
        returns: 'void',
        private: true,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#method-hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form&apos;s component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default templates and classes.',
        private: false,
      },
    },
    events: {
      'change': {
        description: 'Triggered when the element&apos;s value is changed.',
        params: {
          newValue: {
            description: 'the new value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'the old value',
            types: [
              'string',
            ]
          },
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeCreate': {
        description: 'Triggered in beforeCreate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'created': {
        description: 'Triggered in created hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeMount': {
        description: 'Triggered in beforeMount hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'mounted': {
        description: 'Triggered in mounted hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUpdate': {
        description: 'Triggered in beforeUpdate hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'updated': {
        description: 'Triggered in updated hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'beforeUnmount': {
        description: 'Triggered in beforeUnmount (or beforeDestroy in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
      'unmounted': {
        description: 'Triggered in unmounted (or destroyed in Vue 2) hook.',
        params: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ]
          },
       },
      },
    },
    slots: {
      'default': {
        description: 'Renders a label for the toggle.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
    },
    views: [],
  },
}