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
    ElementAddon: {
      description: 'Renders the content of the addon if the [`type`](#option-type) is not defined in the parent element\'s the `addons` option.',
    },
    ElementDescription: {
      description: 'Renders the content of the description if the parent element has no `description`.',
    },
    ElementInfo: {
      description: 'Renders the content of the info when the info icon is hovered, if the parent element has no `info`.',
    },
    ElementLabel: {
      description: 'Renders the content of the label if the parent element has no `label`.',
    },
    ElementText: {
      description: 'Renders the text if the parent element has no [`type`](#option-type) defined as option (`before|between|after`).',
    },
    FormElements: {
      description: 'Renders the elements.'
    },
    FormStep: {
      description: 'Renders the label for the step.',
      props: {
        classes: {
          description: 'the step\'s [`classes`](#property-classes) object',
          types: ['object'],
        },
        select: {
          description: 'selects the step if not [`isDisabled`](#property-is-disabled)',
          types: ['function'],
        },
        disabled: {
          description: 'whether the step is disabled',
          types: ['boolean'],
        },
      }
    },
    FormSteps: {
      description: 'Renders the form steps. Must contain a [`FormStep`](#form-step) component for each step.'
    },
    FormStepsControl: {
      description: 'Renders the text of the control button.'
    },
    FormTab: {
      description: 'Renders the label for the tab.',
      props: {
        classes: {
          description: 'the tab\'s [`classes`](#property-classes) object',
          types: ['object'],
        },
        select: {
          description: 'selects the tab',
          types: ['function'],
        },
      }
    },
    FormTabs: {
      description: 'Renders the form tabs. Must contain a [`FormTab`](#form-tab) component for each tab.'
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
    },
    ElementLayout: {
      description: 'Passes its content to the `ElementLabel`\'s [`default`](element-label#slot-default) slot.',
    },
    ElementLayoutInline: {
      description: 'Passes its content to the `ElementLabel`\'s [`default`](element-label#slot-default) slot.',
    },
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
    },
    ElementLayout: {
      description: 'Passes its content to the `ElementLabel`\'s [`info`](element-info#slot-default) slot. It will only be rendered if `label` is defined as well.',
    },
    ElementLayoutInline: {
      description: 'Passes its content to the `ElementLabel`\'s [`info`](element-info#slot-default) slot. It will only be rendered if `label` is defined as well.',
    },
    ElementLabel: {
      description: 'Passes its content to `ElementInfo`\'s [`default`](element-info#slot-default) slot.',
    },
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
    },
    ElementLayout: {
      description: 'Passes its content to the `ElementDescription`\'s [`default`](element-description#slot-default) slot.',
    },
    ElementLayoutInline: {
      description: 'Passes its content to the `ElementDescription`\'s [`default`](element-description#slot-default) slot.',
    },
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
    },
    ElementLayout: {
      description: 'Passes its content to the `ElementText`\'s [`default`]](element-text#slot-default) slot with `type: "before"`.',
    },
    ElementLayoutInline: {
      description: 'Passes its content to the `ElementText`\'s [`default`]](element-text#slot-default) slot with `type: "before"`.',
    },
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
    },
    ElementLayout: {
      description: 'Passes its content to the `ElementText`\'s [`default`]](element-text#slot-default) slot with `type: "between"`.',
    },
    ElementLayoutInline: {
      description: 'Passes its content to the `ElementText`\'s [`default`]](element-text#slot-default) slot with `type: "between"`.',
    },
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
    },
    ElementLayout: {
      description: 'Passes its content to the `ElementText`\'s [`default`]](element-text#slot-default) slot with `type: "after"`.',
    },
    ElementLayoutInline: {
      description: 'Passes its content to the `ElementText`\'s [`default`]](element-text#slot-default) slot with `type: "after"`.',
    },
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
  'previous': {
    FormStepsControls: {
      description: 'Renders the text of the previous button in [`FormStepsControl`](form-steps-control) component if the current `FormStep`\'s [`labels`](form-step#option-labels) does not contain `previous`. `FormStepsControls` need to have [`labels: false`](#option-labels) in order to use this slot.'
    },
  },
  'next': {
    FormStepsControls: {
      description: 'Renders the text of the next button in [`FormStepsControl`](form-steps-control) component if the current `FormStep`\'s [`labels`](form-step#option-labels) does not contain `next`. `FormStepsControls` need to have [`labels: false`](#option-labels) in order to use this slot.'
    },
  },
  'finish': {
    FormStepsControls: {
      description: 'Renders the text of the previous button in [`FormStepsControl`](form-steps-control) component if the current `FormStep`\'s [`labels`](form-step#option-labels) does not contain `finish`. `FormStepsControls` need to have [`labels: false`](#option-labels) in order to use this slot.'
    },
  },
  'field': {
    default: {
      description: 'Replaces the layout\'s element field. This is the slot used by each element to render their content.',
    },
  },
}