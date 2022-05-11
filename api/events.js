export default {
  change: {
    default: {
      description: 'Triggered when the element\'s value is changed.',
      params: {
        newValue: {
          description: 'the new value',
          types: ['string']
        },
        oldValue: {
          description: 'the old value',
          types: ['string']
        },
      }
    },
    Vueform: {
      description: 'Triggered when the forms data is changed.',
      params: {
        newValue: {
          description: 'the new value',
          types: ['string']
        },
        oldValue: {
          description: 'the old value',
          types: ['string']
        },
      }
    },
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
  blur: {
    default: {
      description: 'Triggered when the input is blurred.',
      params: {
        el$: {
          description: 'the element\'s component',
          types: ['component']
        },
      }
    }
  },
  reset: {
    Vueform: {
      description: 'Triggered when the form is reseted using [`reset()`](#method-reset).'
    }
  },
  submit: {
    Vueform: {
      description: 'Triggered when the form is being submitted, after validation is checked and elements are prepared.',
      params: {
        form$: {
          description: 'the form\'s component',
          types: ['component'],
        }
      }
    }
  },
  success: {
    Vueform: {
      description: 'Triggered when the server returns 2XX response after submitting the form.',
      params: {
        response: {
          description: 'axios [Response](https://axios-http.com/docs/res_schema) object',
          types: ['Response']
        }
      }
    }
  },
  response: {
    Vueform: {
      description: 'Triggered when the server returns a response after submitting the form.',
      params: {
        response: {
          description: 'axios [Response](https://axios-http.com/docs/res_schema) object',
          types: ['Response']
        }
      }
    }
  },
  language: {
    Vueform: {
      description: 'Triggered when a language is selected.',
      params: {
        language: {
          description: 'the selected language',
          types: ['string'],
        }
      }
    }
  },
  alert: {
    default: {
      description: '',
    },
    EditorElement: {
      description: 'Triggered when the user select a file/mime type that is not allowed. If the event does not have a listener the alert message will be displayed by `alert()`.',
      params: {
        message: {
          description: 'the alert message',
          types: ['string']
        },
      }
    },
    TEditorElement: {
      description: 'Triggered when the user select a file/mime type that is not allowed. If the event does not have a listener the alert message will be displayed by `alert()`.',
      params: {
        message: {
          description: 'the alert message',
          types: ['string']
        },
      }
    },
    EditorWrapper: {
      description: 'Triggered when the user select a file/mime type that is not allowed.',
      params: {
        message: {
          description: 'the alert message',
          types: ['string']
        },
      }
    },
  },
  error: {
    default: {
      description: '',
    },
    EditorElement: {
      description: 'Triggered when file upload throws an error.',
      params: {
        error: {
          description: 'the Error object',
          types: ['Error']
        },
      }
    },
    TEditorElement: {
      description: 'Triggered when file upload throws an error.',
      params: {
        error: {
          description: 'the Error object',
          types: ['Error']
        },
      }
    },
    FileElement: {
      description: 'Triggered when temporary upload or file remove throws an error.',
      params: {
        type: {
          description: 'the type of the error, possible values: `\'upload\|remove\'`',
          types: ['string']
        },
        error: {
          description: 'the Error object',
          types: ['Error']
        },
      }
    },
    Vueform: {
      description: 'Triggered when an error is thrown when preparing elements or submitting the form.',
      params: {
        error: {
          description: 'the Error object',
          types: ['Error']
        },
        details: {
          description: 'additional information for the error, including `stage` property (`"prepare\|submit"`) which indicates when the error was thrown.',
          types: ['object']
        },
      }
    },
    EditorWrapper: {
      description: 'Triggered when file upload throws an error.',
      params: {
        error: {
          description: 'the Error object',
          types: ['Error']
        },
      }
    }
  },
  add: {
    default: {
      description: 'Triggered when a new item is added to the list.',
      params: {
        index: {
          description: 'the index of the added item',
          types: ['number']
        },
        addedValue: {
          description: 'the added value',
          types: ['any']
        },
        newValue: {
          description: 'the element value after the item is added',
          types: ['array']
        },
      }
    },
    MultifileElement: {
      description: 'Triggered when a new item is added to the list.',
      params: {
        index: {
          description: 'the index of the added item',
          types: ['number']
        },
        addedValue: {
          description: 'the added value',
          types: ['File|object|string']
        },
        value: {
          description: 'the element\'s value after the item is added',
          types: ['array']
        },
      }
    },
  },
  remove: {
    default: {
      description: 'Triggered when a new item is added to the list.',
      params: {
        index: {
          description: 'the index of the removed item',
          types: ['number']
        },
        value: {
          description: 'the element\'s value after the item is removed',
          types: ['array']
        },
      }
    },
    ObjectElement: {
      description: '',
      private: true,
    },
    FileElement: {
      description: 'Triggered after the file is removed.',
    },
  },
  sort: {
    default: {
      description: 'Triggered when items are being sorted by the user, when [`sort: true`](#option-sort).',
      params: {
        value: {
          description: 'the element\'s value after sorting',
          types: ['array']
        },
      }
    },
  },
  select: {
    default: {
      description: 'Triggered when an option is selected when using [`native: false`](#option-native).',
      params: {
        option: {
          description: 'the selected option',
          types: ['object'],
        }
      }
    },
    TagsElement: {
      description: 'Triggered when an option is selected.',
      params: {
        option: {
          description: 'the selected option',
          types: ['object'],
        }
      }
    },
    FormLanguage: {
      description: 'Triggered when the language is selected by the user.',
      params: {
        language: {
          description: 'the selected language',
          types: ['string'],
        }
      }
    },
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
  deselect: {
    default: {
      description: 'Triggered when an option is deselected when using [`native: false`](#option-native).',
      params: {
        option: {
          description: 'the deselected option',
          types: ['object'],
        }
      }
    },
    TagsElement: {
      description: 'Triggered when an option is deselected.',
      params: {
        option: {
          description: 'the deselected option',
          types: ['object'],
        }
      }
    },
  },
  'search-change': {
    default: {
      description: 'Triggered when the search query changes when using [`search: true`](#option-search).',
      params: {
        searchQuery: {
          description: 'the search value',
          types: ['string|null'],
        }
      }
    },
  },
  open: {
    default: {
      description: 'Triggered when the dropdown list is opened when using [`native: false`](#option-native).',
    },
    TagsElement: {
      description: 'Triggered when the dropdown list is opened.',
    },
  },
  close: {
    default: {
      description: 'Triggered when the dropdown list is closed when using [`native: false`](#option-native).',
    },
    TagsElement: {
      description: 'Triggered when the dropdown list is closed.',
    },
  },
  tag: {
    default: {
      description: 'Triggered when a new tag is created when using [`create: true`](#optons-create).',
      params: {
        tag: {
          description: 'the tag value',
          types: ['string'],
        }
      }
    }
  },
  paste: {
    default: {
      description: 'Triggered when text is pasted to the search input when using [`search: true`](#option-search).',
      params: {
        event: {
          description: 'the paste Event',
          types: ['Event'],
        },
      }
    }
  },
  clear: {
    default: {
      description: 'Triggered when the value is cleared when using [`native: true`](#option-native).',
    },
    TagsElement: {
      description: 'Triggered when the value is cleared.',
    },
    Vueform: {
      description: 'Triggered when the form is cleared using [`clear()`](#method-clear).',
    }
  },
  beforeCreate: {
    default: {
      description: 'Triggered in beforeCreate hook.',
      params: {
        el$: {
          description: 'the element\'s component',
          types: ['component']
        },
      }
    },
    Vueform: {
      description: 'Triggered in beforeCreate hook.',
      params: {
        form$: {
          description: 'the form\'s component',
          types: ['component']
        },
      }
    },
  },
  created: {
    default: {
      description: 'Triggered in created hook.',
      params: {
        el$: {
          description: 'the element\'s component',
          types: ['component']
        },
      }
    },
    Vueform: {
      description: 'Triggered in created hook.',
      params: {
        form$: {
          description: 'the form\'s component',
          types: ['component']
        },
      }
    },
  },
  beforeMount: {
    default: {
      description: 'Triggered in beforeMount hook.',
      params: {
        el$: {
          description: 'the element\'s component',
          types: ['component']
        },
      }
    },
    Vueform: {
      description: 'Triggered in beforeMount hook.',
      params: {
        form$: {
          description: 'the form\'s component',
          types: ['component']
        },
      }
    },
  },
  mounted: {
    default: {
      description: 'Triggered in mounted hook.',
      params: {
        el$: {
          description: 'the element\'s component',
          types: ['component']
        },
      }
    },
    Vueform: {
      description: 'Triggered in mounted hook.',
      params: {
        form$: {
          description: 'the form\'s component',
          types: ['component']
        },
      }
    },
  },
  beforeUpdate: {
    default: {
      description: 'Triggered in beforeUpdate hook.',
      params: {
        el$: {
          description: 'the element\'s component',
          types: ['component']
        },
      }
    },
    Vueform: {
      description: 'Triggered in beforeUpdate hook.',
      params: {
        form$: {
          description: 'the form\'s component',
          types: ['component']
        },
      }
    },
  },
  updated: {
    default: {
      description: 'Triggered in updated hook.',
      params: {
        el$: {
          description: 'the element\'s component',
          types: ['component']
        },
      }
    },
    Vueform: {
      description: 'Triggered in updated hook.',
      params: {
        form$: {
          description: 'the form\'s component',
          types: ['component']
        },
      }
    },
  },
  beforeUnmount: {
    default: {
      description: 'Triggered in beforeUnmount (or beforeDestroy in Vue 2) hook.',
      params: {
        el$: {
          description: 'the element\'s component',
          types: ['component']
        },
      }
    },
    Vueform: {
      description: 'Triggered in beforeUnmount (or beforeDestroy in Vue 2) hook.',
      params: {
        form$: {
          description: 'the form\'s component',
          types: ['component']
        },
      }
    },
  },
  unmounted: {
    default: {
      description: 'Triggered in unmounted (or destroyed in Vue 2) hook.',
      params: {
        el$: {
          description: 'the element\'s component',
          types: ['component']
        },
      }
    },
    Vueform: {
      description: 'Triggered in unmounted (or destroyed in Vue 2) hook.',
      params: {
        form$: {
          description: 'the form\'s component',
          types: ['component']
        },
      }
    },
  },
  input: {
    Vueform: {
      description: 'Triggered when the form data is changed. (This event is used by `v-model` in Vue 2)',
      params: {
        value: {
          description: 'the new form value',
          types: ['object']
        }
      },
      private: true,
    },
    EditorWrapper: {
      description: 'Triggered when the editor\'s value is changed.',
      params: {
        value: {
          description: 'the new value of the element contained in an object: `value.target.value`',
          types: ['object']
        },
      },
    },
  },
  'update:modelValue': {
    Vueform: {
      description: 'Triggered when the form data is changed. (This event is used by `v-model` in Vue 3)',
      params: {
        value: {
          description: 'the new form value',
          types: ['object']
        }
      },
      private: true,
    }
  },
  click: {
    DragAndDrop: {
      description: 'Triggered when the drag and drop area is clicked.',
    },
  },
  drop: {
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
  next: {
    FormSteps: {
      description: 'Triggered before moves to the next step.',
      params: {
        step$: {
          description: 'the next [`FormStep`](form-step) component',
          types: ['component'],
        }
      }
    },
    
  },
  previous: {
    FormSteps: {
      description: 'Triggered before moves to the previous step.',
      params: {
        step$: {
          description: 'the previous [`FormStep`](form-step) component',
          types: ['component'],
        }
      }
    }
  },
  finish: {
    FormSteps: {
      description: 'Triggered when finish button is clicked, before validating and submitting the form.',
    }
  },
  activate: {
    FormStep: {
      description: 'Triggered when the step becomes active.'
    },
    FormTab: {
      description: 'Triggered when the tab becomes active.'
    },
  },
  inactivate: {
    FormStep: {
      description: 'Triggered when the step becomes inactive.'
    },
    FormTab: {
      description: 'Triggered when the tab becomes inactive.'
    },
  },
  enable: {
    FormStep: {
      description: 'Triggered when the step becomes enabled.'
    },
  },
  disable: {
    FormStep: {
      description: 'Triggered when the step becomes disabled.'
    },
  },
  complete: {
    FormStep: {
      description: 'Triggered when the step becomes [`completed`](#property-completed).'
    },
  }
}