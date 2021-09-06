export default {
  label: {
    base: {
      props: {
        el$: {
          description: 'The element\'s component',
          types: ['component'],
        }
      },
      description: 'The label of the element',
    }
  },
  description: {
    base: {
      props: {
        el$: {
          description: 'The element\'s component',
          types: ['component'],
        }
      },
      description: 'The description of the element',
    }
  },
  before: {
    base: {
      props: {
        el$: {
          description: 'The element\'s component',
          types: ['component'],
        }
      },
      description: 'Text to be rendered before the field',
    }
  },
  between: {
    base: {
      props: {
        el$: {
          description: 'The element\'s component',
          types: ['component'],
        }
      },
      description: 'Text to be rendered after the field and before description & error',
    }
  },
  after: {
    base: {
      props: {
        el$: {
          description: 'The element\'s component',
          types: ['component'],
        }
      },
      description: 'Text to be rendered the description & error',
    }
  },
  addonBefore: {
    base: {
      props: {
        el$: {
          description: 'The element\'s component',
          types: ['component'],
        }
      },
      description: 'The addon to be rendered before the field',
    }
  },
  addonAfter: {
    base: {
      props: {
        el$: {
          description: 'The element\'s component',
          types: ['component'],
        }
      },
      description: 'The addon to be rendered after the field',
    }
  },
}