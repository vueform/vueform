export default {
  change: {
    base: {
      description: 'Change event',
      params: {
        newValue: {
          description: 'New value',
          types: ['string']
        },
        oldValue: {
          description: 'Old value',
          types: ['string']
        },
      }
    }
  },
  remove: {
    base: {
      description: 'Remove event',
    }
  },
  error: {
    base: {
      description: 'Error event',
      params: {
        message: {
          description: 'Message',
          types: ['string']
        },
        e: {
          description: 'Event',
          types: ['Event']
        },
      }
    }
  },
  add: {
    base: {
      description: 'Add event',
      params: {
        addedValue: {
          description: 'Added value',
          types: ['any']
        },
        index: {
          description: 'Index',
          types: ['number']
        },
        value: {
          description: 'Value',
          types: ['array']
        },
      }
    }
  },
  remove: {
    base: {
      description: 'Remove event',
      params: {
        index: {
          description: 'Index',
          types: ['number']
        },
        value: {
          description: 'Value',
          types: ['array']
        },
      }
    }
  },
  sort: {
    base: {
      description: 'Sort event',
      params: {
        value: {
          description: 'Value',
          types: ['array']
        },
      }
    }
  },
  select: {
    base: {
      description: 'Select event',
    }
  },
  deselect: {
    base: {
      description: 'Select event',
    }
  },
  searchChange: {
    base: {
      description: 'searchChange event',
    }
  },
  open: {
    base: {
      description: 'Open event',
    }
  },
  close: {
    base: {
      description: 'Close event',
    }
  },
  tag: {
    base: {
      description: 'Tag event',
    }
  },
}