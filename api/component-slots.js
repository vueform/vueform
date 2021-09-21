export default {
  ElementAddon: {
    default: {
      description: 'Renders the content of the addon if the [`type`](#option-type) is not defined in the parent element\'s the `addons` option.',
    }
  },
  ElementDescription: {
    default: {
      description: 'Renders the content of the description if the parent element has no `description`.',
    }
  },
  ElementInfo: {
    default: {
      description: 'Renders the content of the info when the info icon is hovered, if the parent element has no `info`.',
    }
  },
  ElementLabel: {
    default: {
      description: 'Renders the content of the label if the parent element has no `label`.',
    },
    info: {
      description: 'Passes its content to [`ElementInfo`](element-info)\'s `default` slot.',
    },
  },
  ElementLayout: {
    field: {
      description: 'Replaces the layout\'s element field. This is the slot used by each element to render their content.',
    },
    label: {
      description: 'Passes its content to the [`ElementLabel`](element-label)\'s `default` slot.',
    },
    info: {
      description: 'Passes its content to the [`ElementLabel`](element-label)\'s `info` slot. It will only be rendered if `label` is defined as well.',
    },
    description: {
      description: 'Passes its content to the [`ElementDescription`](element-description)\'s `default` slot.',
    },
    before: {
      description: 'Passes its content to the [`ElementText`](element-text)\'s `default` slot with `type: "before"`.',
    },
    between: {
      description: 'Passes its content to the [`ElementText`](element-text)\'s `default` slot with `type: "between"`.',
    },
    after: {
      description: 'Passes its content to the [`ElementText`](element-text)\'s `default` slot with `type: "after"`.',
    },
  },
  ElementLayoutInline: {
    field: {
      description: 'Replaces the layout\'s element field. This is the slot used by each element to render their content.',
    },
    label: {
      description: 'Passes its content to the [`ElementLabel`](element-label)\'s `default` slot.',
    },
    info: {
      description: 'Passes its content to the [`ElementLabel`](element-label)\'s `info` slot. It will only be rendered if `label` is defined as well.',
    },
    description: {
      description: 'Passes its content to the [`ElementDescription`](element-description)\'s `default` slot.',
    },
    before: {
      description: 'Passes its content to the [`ElementText`](element-text)\'s `default` slot with `type: "before"`.',
    },
    between: {
      description: 'Passes its content to the [`ElementText`](element-text)\'s `default` slot with `type: "between"`.',
    },
    after: {
      description: 'Passes its content to the [`ElementText`](element-text)\'s `default` slot with `type: "after"`.',
    },
  },
  ElementText: {
    default: {
      description: 'Renders the text if the parent element has no [`type`](#option-type) defined as option (`before|between|after`).',
    }
  },
  FormElements: {
    default: {
      description: 'Renders the elements.'
    },
  },
  FormStep: {
    default: {
      description: 'Replaces the label for the step.',
      params: {
        classes: {
          description: 'the step\'s [classes](#property-classes) object',
          types: ['object'],
        },
        select: {
          description: 'selects the step if it is not [`disabled`](#property-disabled)',
          types: ['function'],
        },
        disabled: {
          description: 'whether the step is disabled',
          types: ['boolean'],
        },
      }
    }
  },
  FormSteps: {
    default: {
      description: 'Renders the form steps. Must contain a [`FormStep`](#form-step) component for each step.'
    }
  },
  FormStepsControl: {
    default: {
      description: 'Renders the text of the control button.'
    }
  },
  FormStepsControls: {
    previous: {
      description: 'Renders the text of the previous button in [`FormStepsControl`](form-steps-control) component if [`labels`](#option-labels) does not contain `previous`.'
    },
    next: {
      description: 'Renders the text of the next button in [`FormStepsControl`](form-steps-control) component if [`labels`](#option-labels) does not contain `next`.'
    },
    finish: {
      description: 'Renders the text of the previous button in [`FormStepsControl`](form-steps-control) component if [`labels`](#option-labels) does not contain `finish`.'
    },
  },
  FormTab: {
    default: {
      description: 'Replaces the label for the tab.',
      params: {
        classes: {
          description: 'the tab\'s [classes](#property-classes) object',
          types: ['object'],
        },
        select: {
          description: 'selects the tab',
          types: ['function'],
        },
      }
    }
  },
  FormTabs: {
    default: {
      description: 'Renders the form tabs. Must contain a [`FormTab`](#form-tab) component for each tab.'
    }
  },
  Laraform: {
    default: {
      description: 'Renders the elements of the form in [`FormElements`](#form-elements) component, while keeping all the other form components. Should only contain elements and custom tags.'
    },
    empty: {
      description: 'Renders the content of the form. Removes all other form components. Can contain elements or form components including steps, tabs and language selector.'
    },
  },
}