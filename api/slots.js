export default {
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
    Vueform: {
      description: `@require content/reference/1.x/examples/slots/default/vueform`,
    },
  },
  'empty': {
    Vueform: {
      description: `@require content/reference/1.x/examples/slots/empty/vueform`,
    },
  },
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
      description: 'Renders description for the element in [`ElementDescription`](element-description) component.',
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
        item: {
          description: 'the checkbox item',
          types: ['object'],
        },
        value: {
          description: 'the checkbox value',
          types: ['string|number'],
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
        item: {
          description: 'the radio item',
          types: ['object'],
        },
        value: {
          description: 'the radio value',
          types: ['string|number'],
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
  'placeholder': {
    default: {
      description: 'Replaces the default template for the input\'s [`placeholder`](#option-placeholder).',
      props: {
        el$: {
          description: 'the element\'s component',
          types: ['component'],
        },
      },
    },
  },
  'after-list': {
    default: {
      description: 'Appends the content of the slot to the option list.',
      props: {
        el$: {
          description: 'the element\'s component',
          types: ['component'],
        },
      },
    },
  },
  'before-list': {
    default: {
      description: 'Prepends the content of the slot to the option list.',
      props: {
        el$: {
          description: 'the element\'s component',
          types: ['component'],
        },
      },
    },
  },
  'multiple-label': {
    default: {
      description: 'Replaces the input\'s inner label that is displayed when at least one option is selected.',
      props: {
        el$: {
          description: 'the element\'s component',
          types: ['component'],
        },
        values: {
          description: 'the list of selected options',
          types: ['array<object>'],
        },
      },
    },
  },
  'no-options': {
    default: {
      description: 'Replaces the default template that is shown when the input has no options. Can be also set without overriding the template with [`noOptionsText`](#option-no-options-text) option.',
      props: {
        el$: {
          description: 'the element\'s component',
          types: ['component'],
        },
      },
    },
  },
  'no-results': {
    default: {
      description: 'Replaces the default template that is shown when the input has options, but the user search does not have any results. Can be also set without overriding the template with [`noResultsText`](#option-no-results-text) option.',
      props: {
        el$: {
          description: 'the element\'s component',
          types: ['component'],
        },
      },
    },
  },
  'group-label': {
    default: {
      description: 'Replaces the default group header when [`groups`](#option-groups) is `true`.',
      props: {
        el$: {
          description: 'the element\'s component',
          types: ['component'],
        },
        group: {
          description: 'the group object',
          types: ['object'],
        },
      },
    },
  },
  'option': {
    default: {
      description: 'Replaces the default option template.',
      props: {
        el$: {
          description: 'the element\'s component',
          types: ['component'],
        },
        option: {
          description: 'the option object',
          types: ['object'],
        },
        search: {
          description: 'the current value of search input',
          types: ['string|null'],
        },
      },
    },
  },
  'single-label': {
    default: {
      description: 'Replaces the input\'s inner label that is displayed when an option is selected.',
      props: {
        el$: {
          description: 'the element\'s component',
          types: ['component'],
        },
        value: {
          description: 'the selected option',
          types: ['object'],
        },
      },
    },
  },
  'tag': {
    default: {
      description: 'Replaces the default tag template.',
      props: {
        el$: {
          description: 'the element\'s component',
          types: ['component'],
        },
        option: {
          description: 'the option object',
          types: ['object'],
        },
        disabled: {
          description: 'whether the option is disabled',
          types: ['boolean'],
        },
        handleTagRemove: {
          description: 'removes the tag from the selected options',
          types: ['function'],
        },
      },
    },
  },
  'caret': {
    default: {
      description: 'Replaces the small triangle displayed on the right of the input when [`caret`](#option-caret) is `true`.',
      props: {
        el$: {
          description: 'the element\'s component',
          types: ['component'],
        },
      }
    },
  },
  'clear': {
    default: {
      description: 'Replaces the clear icon shown when the input has at least one selected options and [`canClear`](#option-can-clear) is `true`.',
      props: {
        el$: {
          description: 'the element\'s component',
          types: ['component'],
        },
        clear: {
          description: 'clears the input value',
          types: ['function'],
        },
      },
    },
  },
  'spinner': {
    default: {
      description: 'Replaces the spinner shown when async options are loading or [`loading`](#option-loading) is `true`.',
      props: {
        el$: {
          description: 'the element\'s component',
          types: ['component'],
        },
      },
    },
  },
}