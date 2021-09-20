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