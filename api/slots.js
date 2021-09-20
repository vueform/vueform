export default {
  'label': {
    default: {
      props: {
        el$: {
          description: 'the element\'s component',
          types: ['component'],
        }
      },
      description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
    }
  },
  'info': {
    default: {
      props: {
        el$: {
          description: 'the element\'s component',
          types: ['component'],
        }
      },
      description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
    }
  },
  'description': {
    default: {
      props: {
        el$: {
          description: 'the element\'s component',
          types: ['component'],
        }
      },
      description: 'Renders description for the element in [`ElementDescription`](element-description) component',
    }
  },
  'before': {
    default: {
      props: {
        el$: {
          description: 'the element\'s component',
          types: ['component'],
        }
      },
      description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
    }
  },
  'between': {
    default: {
      props: {
        el$: {
          description: 'the element\'s component',
          types: ['component'],
        }
      },
      description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
    }
  },
  'after': {
    default: {
      props: {
        el$: {
          description: 'the element\'s component',
          types: ['component'],
        }
      },
      description: 'Renders an [`ElementText`](element-text) component after the description and error.',
    }
  },
  'addon-before': {
    default: {
      props: {
        el$: {
          description: 'the element\'s component',
          types: ['component'],
        }
      },
      description: 'Prepends an addon to the <%field%>.',
    }
  },
  'addon-after': {
    default: {
      props: {
        el$: {
          description: 'the element\'s component',
          types: ['component'],
        }
      },
      description: 'Appends an addon to the <%field%>.',
    }
  },
  'checkbox': {
    default: {
      description: 'Replaces the template for the checkbox field. Checkboxes are rendered by the [`CheckboxgroupCheckbox`](checkboxgroup-checkbox) component which has a default checkbox template. If the this slot is defined, the default template in [`CheckboxgroupCheckbox`](checkboxgroup-checkbox) component will be overridden with the content of this slot.',
      props: {
        el$: {
          description: 'the element\'s component',
          types: ['component'],
        },
        id: {
          description: 'the `id` attribute of the checkbox field used by the default template',
          types: ['string'],
        },
        name: {
          description: 'the `name` attribute of the checkbox field used by the default template',
          types: ['string'],
        },
        isDisabled: {
          description: 'whether the checkbox is disabled',
          types: ['boolean'],
        },
        classes: {
          description: 'an object containing the classes of [`CheckboxgroupCheckbox`](checkboxgroup-checkbox) component',
          types: ['object'],
        },
      },
    },
  },
  'radio': {
    default: {
      description: 'Replaces the template for the radio input. Radio inputs are rendered by the [`RadiogroupRadio`](radiogroup-radio) component which has a default radio template. If the this slot is defined, the default template in [`RadiogroupRadio`](radiogroup-radio) component will be overridden with the content of this slot.',
      props: {
        el$: {
          description: 'the element\'s component',
          types: ['component'],
        },
        id: {
          description: 'the `id` attribute of the radio field used by the default template',
          types: ['string'],
        },
        name: {
          description: 'the `name` attribute of the radio field used by the default template',
          types: ['string'],
        },
        isDisabled: {
          description: 'whether the radio is disabled',
          types: ['boolean'],
        },
        classes: {
          description: 'an object containing the classes of [`RadiogroupRadio`](radiogroup-radio) component',
          types: ['object'],
        },
      },
    },
  },
  'default': {
    CheckboxElement: {
      props: {
        el$: {
          description: 'the element\'s component',
          types: ['component'],
        }
      },
      description: 'Renders a label for the checkbox.',
    },
    RadioElement: {
      props: {
        el$: {
          description: 'the element\'s component',
          types: ['component'],
        }
      },
      description: 'Renders a label for the radio.',
    },
    ToggleElement: {
      props: {
        el$: {
          description: 'the element\'s component',
          types: ['component'],
        }
      },
      description: 'Renders a label for the toggle.',
    },
    ButtonElement: {
      props: {
        el$: {
          description: 'the element\'s component',
          types: ['component'],
        }
      },
      description: 'Renders the button\'s label.',
    },
    StaticElement: {
      props: {
        el$: {
          description: 'the element\'s component',
          types: ['component'],
        }
      },
      description: 'Renders the content of the static element.',
    },
  },
}