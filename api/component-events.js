export default {
  DragAndDrop: {
    click: {
      description: '',
    },
    drop: {
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
    input: {
      description: 'Triggered when the editor\'s value is changed.',
      params: {
        value: {
          description: 'the new value of the element contained in an object: `value.target.value`',
          types: ['object']
        },
      },
    },
    alert: {
      description: 'Triggered when the user select a file/mime type that is not allowed.',
      params: {
        message: {
          description: 'the alert message',
          types: ['string']
        },
      }
    },
    errors: {
      description: 'Triggered when file upload throws an error.',
      params: {
        error: {
          description: 'the Error object',
          types: ['Error']
        },
      }
    }
  },
  FlatpickrWrapper: {
    change: {
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
    click: {
      description: 'Triggered when the drag and drop area is clicked.',
    },
    drop: {
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
    select: {
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
    active: {
      description: 'Triggered when the step becomes active.'
    },
    inactive: {
      description: 'Triggered when the step becomes inactive.'
    },
    enable: {
      description: 'Triggered when the step becomes enabled.'
    },
    disable: {
      description: 'Triggered when the step becomes disabled.'
    },
    complete: {
      description: 'Triggered when the step becomes [`complete`](#property-complete).'
    },
  },
  FormSteps: {
    select: {
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
    next: {
      description: 'Triggered when steps to the next step.',
      params: {
        activeStep$: {
          description: 'the active step',
          types: ['component'],
        },
      }
    },
    previous: {
      description: 'Triggered when steps to the previous step.',
      params: {
        activeStep$: {
          description: 'the active step',
          types: ['component'],
        },
      }
    },
    finish: {
      description: 'Triggered when the form finishes, before the last step becomes [`complete`](#property-complete) and the form\'s [`submit`](laraform#method-submit) method gets called.',
    },
  },
  FormTab: {
    active: {
      description: 'Triggered when the tab becomes active.'
    },
    inactive: {
      description: 'Triggered when the tab becomes inactive.'
    },
  },
  FormTabs: {
    select: {
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
    input: {
      description: 'Emitted when the form\'s data is changed (used by `v-model` in Vue 2).',
      params: {
        data: {
          description: 'the form\'s data after the change',
          types: ['object'],
        }
      }
    },
    'update:modelvalue': {
      description: 'Emmitted when the form\'s data is changed (used by `v-model` in Vue 3).',
      params: {
        data: {
          description: 'the form\'s data after the change',
          types: ['object'],
        }
      }
    },
    change: {
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
    // reset: {
    //   description: 'Triggered when the form is reseted using [`reset()`](#method-reset).'
    // },
    // clear: {
    //   description: 'Triggered when the form is cleared using [`clear()`](#method-clear).'
    // },
    // submit: {
    //   description: 'Triggered when the form is being submitted, after validation is checked and elements are prepared.',
    //   params: {
    //     form$: {
    //       description: 'the form\'s component',
    //       types: ['component'],
    //     }
    //   }
    // },
    // success: {
    //   description: 'Triggered when the server returns with 2XX response code after submitting the form.',
    //   params: {
    //     response: {
    //       description: 'the Response object',
    //       types: ['Response']
    //     }
    //   }
    // },
    // error: {
    //   description: 'Triggered when an error is thrown when preparing elements or submitting the form.',
    //   params: {
    //     state: {
    //       description: 'the stage the error was thrown: `"prepare\|submit"`',
    //       types: ['string']
    //     },
    //     error: {
    //       description: 'the Error object',
    //       types: ['Error']
    //     },
    //   }
    // },
    language: {
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