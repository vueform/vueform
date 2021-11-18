export default {
  DragAndDrop: {
    // click: {
    DragAndDrop: {
      description: '',
    },
    // drop: {
    DragAndDrop: {
      description: '',
      params: {
        e: {
          description: '',
          types: ['Event'],
        }
      }
    },
  },
  EditorWrapper: {
    // input: {
    // EditorWrapper: {
    //   description: 'Triggered when the editor\'s value is changed.',
    //   params: {
    //     value: {
    //       description: 'the new value of the element contained in an object: `value.target.value`',
    //       types: ['object']
    //     },
    //   },
    // },
    // alert: {
    EditorWrapper: {
    //   description: 'Triggered when the user select a file/mime type that is not allowed.',
    //   params: {
    //     message: {
    //       description: 'the alert message',
    //       types: ['string']
    //     },
    //   }
    // },
    // errors: {
    // EditorWrapper: {
    //   description: 'Triggered when file upload throws an error.',
    //   params: {
    //     error: {
    //       description: 'the Error object',
    //       types: ['Error']
    //     },
    //   }
    // }
  },
  FlatpickrWrapper: {
    // change: {
    FlatpickrWrapper: {
      description: 'Triggered when then value is changed.',
      params: {
        value: {
          description: 'the new value',
          types: ['Date|array<Date>']
        }
      }
    },
  },
  DragAndDrop: {
    // click: {
    DragAndDrop: {
      description: 'Triggered when the drag and drop area is clicked.',
    },
    // drop: {
    DragAndDrop: {
      description: 'Triggered when a file is dropped.',
      params: {
        event: {
          description: 'the drop Event',
          types: ['Event'],
        }
      }
    },
  },
  FormLanguage: {
    // select: {
    FormLanguage: {
      description: 'Triggered when the language is selected by the user.',
      params: {
        language: {
          description: 'the selected language',
          types: ['string'],
        }
      }
    },
  },
  FormStep: {
    // active: {
    FormStep: {
      description: 'Triggered when the step becomes active.'
    },
    // inactive: {
    FormStep: {
      description: 'Triggered when the step becomes inactive.'
    },
    // enable: {
    FormStep: {
      description: 'Triggered when the step becomes enabled.'
    },
    // disable: {
    FormStep: {
      description: 'Triggered when the step becomes disabled.'
    },
    // complete: {
    FormStep: {
      description: 'Triggered when the step becomes [`complete`](#property-complete).'
    },
  },
  FormSteps: {
    // select: {
    FormSteps: {
      description: 'Triggered when a step becomes active.',
      params: {
        activeStep$: {
          description: 'the active step',
          types: ['component'],
        },
        previousStep$: {
          description: 'the previously active step',
          types: ['component'],
        },
      }
    },
    // next: {
    FormSteps: {
      description: 'Triggered when steps to the next step.',
      params: {
        activeStep$: {
          description: 'the active step',
          types: ['component'],
        },
      }
    },
    // previous: {
    FormSteps: {
      description: 'Triggered when steps to the previous step.',
      params: {
        activeStep$: {
          description: 'the active step',
          types: ['component'],
        },
      }
    },
    // finish: {
    FormSteps: {
      description: 'Triggered when the form finishes, before the last step becomes [`complete`](#property-complete) and the form\'s [`submit`](laraform#method-submit) method gets called.',
    },
  },
  FormTab: {
    // active: {
    Formtab: {
      description: 'Triggered when the tab becomes active.'
    },
    // inactive: {
    FormTab: {
      description: 'Triggered when the tab becomes inactive.'
    },
  },
  FormTabs: {
    // select: {
    FormTabs: {
      description: 'Triggered when a tab becomes active.',
      params: {
        activeTab$: {
          description: 'the active tab',
          types: ['component'],
        },
        previousTab$: {
          description: 'the previously active tab',
          types: ['component'],
        },
      }
    },
  },
  Vueform: {
    // input: {
    Vueform: {
      description: 'Emitted when the form\'s data is changed (used by `v-model` in Vue 2).',
      params: {
        data: {
          description: 'the form\'s data after the change',
          types: ['object'],
        }
      }
    },
    // 'update:modelvalue': {
    Vueform: {
      description: 'Emmitted when the form\'s data is changed (used by `v-model` in Vue 3).',
      params: {
        data: {
          description: 'the form\'s data after the change',
          types: ['object'],
        }
      }
    },
    // change: {
    Vueform: {
      description: 'Triggered when the form\'s data is changed (intended for watching data changes).',
      params: {
        newData: {
          description: 'the form\'s data after the change',
          types: ['object'],
        },
        oldData: {
          description: 'the form\'s data before the change',
          types: ['object'],
        },
      }
    },
    // language: {
    Vueform: {
      description: 'Triggered when a language is selected',
      params: {
        language: {
          description: 'the selected language',
          types: ['string'],
        }
      }
    }
  }
}