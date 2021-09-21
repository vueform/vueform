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
  },
  alert: {
    default: {
      description: '',
    },
    TrixElement: {
      description: 'Triggered when the user select a file/mime type that is not allowed. If the event does not have a listener the alert message will be displayed by `alert()`.',
      params: {
        message: {
          description: 'the alert message',
          types: ['string']
        },
      }
    }
  },
  error: {
    default: {
      description: '',
    },
    TrixElement: {
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
      description: 'Triggered when an option is selected, using [`native: false`](#option-native).',
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
  },
  deselect: {
    default: {
      description: 'Triggered when an option is deselected, using [`native: false`](#option-native).',
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
      description: 'Triggered when the search query changes, using [`search: true`](#option-search).',
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
      description: 'Triggered when the dropdown list is opened, using [`native: false`](#option-native).',
    },
    TagsElement: {
      description: 'Triggered when the dropdown list is closed.',
    },
  },
  close: {
    default: {
      description: 'Triggered when the dropdown list is closed, using [`native: false`](#option-native).',
    },
    TagsElement: {
      description: 'Triggered when the dropdown list is closed.',
    },
  },
  tag: {
    default: {
      description: 'Triggered when a new tag is created, using [`create: true`](#optons-create).',
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
      description: 'Triggered when text is pasted to the search input, using [`search: true`](#option-search).',
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
      description: 'Triggered when the value is cleared, using [`native: true`](#option-native).',
    },
    TagsElement: {
      description: 'Triggered when the value is cleared.',
    },
  },


  // click: {
  //   default: {
  //     description: '',
  //   }
  // },
  // drop: {
  //   default: {
  //     description: '',
  //   }
  // },
  // changeLanguage: {
  //   default: {
  //     description: '',
  //   }
  // },
  // active: {
  //   default: {
  //     description: '',
  //   }
  // },
  // inactive: {
  //   default: {
  //     description: '',
  //   }
  // },
  // enable: {
  //   default: {
  //     description: '',
  //   }
  // },
  // disable: {
  //   default: {
  //     description: '',
  //   }
  // },
  // complete: {
  //   default: {
  //     description: '',
  //   }
  // },
  // next: {
  //   default: {
  //     description: '',
  //   }
  // },
  // previous: {
  //   default: {
  //     description: '',
  //   }
  // },
  // finish: {
  //   default: {
  //     description: '',
  //   }
  // },
  // input: {
  //   default: {
  //     description: '',
  //   }
  // },
  // 'update:modelValue': {
  //   default: {
  //     description: '',
  //   }
  // },
  // language: {
  //   default: {
  //     description: '',
  //   }
  // },
  // submit: {
  //   default: {
  //     description: '',
  //   }
  // },
  // success: {
  //   default: {
  //     description: '',
  //   }
  // },
  // fail: {
  //   default: {
  //     description: '',
  //   }
  // },
  // reset: {
  //   default: {
  //     description: '',
  //   }
  // },
}