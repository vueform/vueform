import MergeFormClasses from './../../src/utils/mergeFormClasses'
import { computed, ref } from 'composition-api'

const $input = (classes, el$) => ([
  classes.input,
  { [classes.input_enabled]: !el$.isDisabled() },
  { [classes.input_disabled]: el$.isDisabled() },
])

const $input2 = (classes, el$) => ([
  classes.input,
  { [classes.input_enabled]: !el$.isDisabled() },
  { [classes.input_disabled]: el$.isDisabled() },
  'extra-class'
])

const preset1 = {
  addClasses: {
    TextElement: {
      container: ['text-container-preset1', 'text-container-preset1-2'],
    },
  },
  removeClasses: {
    TextElement: {
      input: ['text-input'],
    },
  },
  replaceClasses: {
    TextElement: {
      input_enabled: {
        'text-input-enabled': 'not-text-input-enabled'
      },
    },
  },
  overrideClasses: {
    TextElement: {
      input_disabled: 'text-input-disabled-preset1',
    },
  },
}

const preset2 = {
  addClasses: {
    TextElement: {
      container: ['text-container-preset2'],
    },
  },
  removeClasses: {
    TextElement: {
      container: ['text-container-preset1-2'],
    },
  },
  replaceClasses: {
    TextElement: {
      input_enabled: {
        'not-text-input-enabled': 'not-not-text-input-enabled'
      },
    },
  },
  overrideClasses: {
    TextElement: {
      input_disabled: 'text-input-disabled-preset2',
    },
  },
}

const theme = {
  TextElement: {
    container: 'text-container w-full',
    input: ['text-input', 'form-border', { inputConditional: true }],
    input_enabled: 'text-input-enabled',
    input_disabled: 'text-input-disabled',
    $input,
  },
  SelectElement: {
    container: 'select-container w-full',
    select: {
      container: 'select-select-container form-border',
      options: 'select-select-options form-input-padding',
    },
    deep: {
      deeper: {
        deep_select: 'deep-select',
        deep_caret: 'deep-caret'
      }
    }
  }
}

describe('mergeFormClasses', () => {
  it('should convert theme to array', () => {
    let classes = new MergeFormClasses({ theme })

    expect(classes.classes).toEqual({
      TextElement: {
        container: ['text-container', 'w-full'],
        input: ['text-input', 'form-border', { inputConditional: true }],
        input_enabled: ['text-input-enabled'],
        input_disabled: ['text-input-disabled'],
        $input,
      },
      SelectElement: {
        container: ['select-container', 'w-full'],
        select: {
          container: ['select-select-container', 'form-border'],
          options: ['select-select-options', 'form-input-padding'],
        },
        deep: {
          deeper: {
            deep_select: ['deep-select'],
            deep_caret: ['deep-caret'],
          }
        }
      }
    })
  })

  it('should add classes', () => {
    let classes = new MergeFormClasses({
      theme,
    })

    classes.merge({
      addClasses: {
        TextElement: {
          container: 'text-container-added',
          input: 'text-input-added',
          input_enabled: ['text-input-enabled-added'],
          input_disabled: { 'text-input-disabled-added': true },
        },
        SelectElement: {
          select: {
            container: 'select-container-added',
            options: ['select-options-added'],
          },
          deep: {
            deeperAdd: 'deep-select-add',
            deeper: {
              deep_select: ['deeper-select-add'],
            },
          }
        }
      }
    })

    expect(classes.classes).toEqual({
      TextElement: {
        container: ['text-container', 'w-full', 'text-container-added'],
        input: ['text-input', 'form-border', { inputConditional: true }, 'text-input-added'],
        input_enabled: ['text-input-enabled', 'text-input-enabled-added'],
        input_disabled: ['text-input-disabled', { 'text-input-disabled-added': true }],
        $input,
      },
      SelectElement: {
        container: ['select-container', 'w-full'],
        select: {
          container: ['select-select-container', 'form-border', 'select-container-added'],
          options: ['select-select-options', 'form-input-padding', 'select-options-added'],
        },
        deep: {
          deeper: {
            deep_select: ['deep-select', 'deeper-select-add'],
            deep_caret: ['deep-caret'],
          },
          deeperAdd: ['deep-select-add']
        }
      }
    })

    classes.merge({
      addClasses: {
        TextElement: {
          container: 'text-container-added',
          input: 'text-input-added-2',
          input_enabled: ['text-input-enabled-added-2'],
          input_disabled: { 'text-input-disabled-added': true },
        },
        SelectElement: {
          select: {
            container: 'select-container-added',
            options: ['select-options-added-2'],
          },
          deep: {
            deeper: {
              deep_select: ['deeper-select-add-2']
            },
          }
        }
      }
    })

    expect(classes.classes).toEqual({
      TextElement: {
        container: ['text-container', 'w-full', 'text-container-added'],
        input: ['text-input', 'form-border', { inputConditional: true }, 'text-input-added', 'text-input-added-2'],
        input_enabled: ['text-input-enabled', 'text-input-enabled-added', 'text-input-enabled-added-2'],
        input_disabled: ['text-input-disabled', { 'text-input-disabled-added': true }, { 'text-input-disabled-added': true }],
        $input,
      },
      SelectElement: {
        container: ['select-container', 'w-full'],
        select: {
          container: ['select-select-container', 'form-border', 'select-container-added'],
          options: ['select-select-options', 'form-input-padding', 'select-options-added', 'select-options-added-2'],
        },
        deep: {
          deeper: {
            deep_select: ['deep-select', 'deeper-select-add', 'deeper-select-add-2'],
            deep_caret: ['deep-caret'],
          },
          deeperAdd: ['deep-select-add']
        }
      }
    })
  })

  it('should remove classes', () => {
    let classes = new MergeFormClasses({
      theme,
    })

    classes.merge({
      removeClasses: {
        TextElement: {
          container: ['text-container'],
          input: ['text-input'],
          input_enabled: ['text-input-enabled'],
          input_disabled: ['text-input-disabled'],
          $input,
        },
        SelectElement: {
          container: ['select-container'],
          select: {
            container: ['select-select-container'],
            options: ['select-select-options'],
          },
          deep: {
            deeper: {
              deep_select: ['deep-select']
            }
          }
        }
      }
    })

    expect(classes.classes).toEqual({
      TextElement: {
        container: ['w-full'],
        input: ['form-border', { inputConditional: true }],
        input_enabled: [],
        input_disabled: [],
        $input,
      },
      SelectElement: {
        container: ['w-full'],
        select: {
          container: ['form-border'],
          options: ['form-input-padding'],
        },
        deep: {
          deeper: {
            deep_select: [],
            deep_caret: ['deep-caret']
          }
        }
      }
    })
  })

  it('should replace classes', () => {
    let classes = new MergeFormClasses({
      theme,
    })

    classes.merge({
      replaceClasses: {
        TextElement: {
          container: {'text-container': 'not-text-container'},
          input: {'text-input': 'not-text-input'},
          input_enabled: {'text-input-enabled': 'not-text-input-enabled'},
          input_disabled: {'text-input-disabled': 'not-text-input-disabled'},
        },
        SelectElement: {
          container: {'select-container':'not-select-container'},
          select: {
            container: {'select-select-container':'not-select-select-container'},
            options: {'select-select-options':'not-select-select-options'},
          },
          deep: {
            deeper: {
              deep_select: {'deep-select':'not-deep-select'}
            }
          }
        }
      }
    })

    expect(classes.classes).toEqual({
      TextElement: {
        container: ['not-text-container', 'w-full'],
        input: ['not-text-input', 'form-border', { inputConditional: true }],
        input_enabled: ['not-text-input-enabled'],
        input_disabled: ['not-text-input-disabled'],
        $input,
      },
      SelectElement: {
        container: ['not-select-container', 'w-full'],
        select: {
          container: ['not-select-select-container', 'form-border'],
          options: ['not-select-select-options', 'form-input-padding'],
        },
        deep: {
          deeper: {
            deep_select: ['not-deep-select'],
            deep_caret: ['deep-caret'],
          }
        }
      }
    })
  })

  it('should override classes', () => {
    let classes = new MergeFormClasses({
      theme,
    })

    classes.merge({
      overrideClasses: {
        TextElement: {
          container: 'not-text-container',
          input: ['not-text-input'],
          input_enabled: '',
          input_disabled: [],
          $input: $input2,
        },
        SelectElement: {
          select: {
            container: 'not-select-select-container',
            options: ['not-select-select-options'],
          },
          deep: {
            deeper: {
              deep_select: 'not-deep-select',
              deep_caret: ['not-deep-caret'],
            }
          }
        }
      }
    })

    expect(classes.classes).toEqual({
      TextElement: {
        container: ['not-text-container'],
        input: ['not-text-input'],
        input_enabled: [],
        input_disabled: [],
        $input: $input2,
      },
      SelectElement: {
        container: ['select-container', 'w-full'],
        select: {
          container: ['not-select-select-container'],
          options: ['not-select-select-options'],
        },
        deep: {
          deeper: {
            deep_select: ['not-deep-select'],
            deep_caret: ['not-deep-caret'],
          }
        }
      }
    })
  })

  it('should merge presets', () => {
    let classes = new MergeFormClasses({
      theme,
      presets: {
        preset1,
        preset2,
      }
    })

    classes.merge({
      presets: ['preset1'],
    })

    expect(classes.classes).toEqual({
      TextElement: {
        container: ['text-container', 'w-full', 'text-container-preset1', 'text-container-preset1-2'],
        input: ['form-border', { inputConditional: true }],
        input_enabled: ['not-text-input-enabled'],
        input_disabled: ['text-input-disabled-preset1'],
        $input,
      },
      SelectElement: {
        container: ['select-container', 'w-full'],
        select: {
          container: ['select-select-container', 'form-border'],
          options: ['select-select-options', 'form-input-padding'],
        },
        deep: {
          deeper: {
            deep_select: ['deep-select'],
            deep_caret: ['deep-caret'],
          }
        }
      }
    })
    
    classes = new MergeFormClasses({
      theme,
      presets: {
        preset1,
        preset2,
      }
    })

    classes.merge({
      presets: ['preset1', 'preset2'],
    })

    expect(classes.classes).toEqual({
      TextElement: {
        container: ['text-container', 'w-full', 'text-container-preset1', 'text-container-preset2'],
        input: ['form-border', { inputConditional: true }],
        input_enabled: ['not-not-text-input-enabled'],
        input_disabled: ['text-input-disabled-preset2'],
        $input,
      },
      SelectElement: {
        container: ['select-container', 'w-full'],
        select: {
          container: ['select-select-container', 'form-border'],
          options: ['select-select-options', 'form-input-padding'],
        },
        deep: {
          deeper: {
            deep_select: ['deep-select'],
            deep_caret: ['deep-caret'],
          }
        }
      }
    })
  })

  it('should merge presets first', () => {
    let classes = new MergeFormClasses({
      theme,
      presets: {
        preset: {
          addClasses: {
            TextElement: {
              container: ['text-container-preset', 'text-container-preset-2']
            }
          },
          removeClasses: {
            TextElement: {
              container: ['text-container-add']
            }
          },
          replaceClasses: {
            TextElement: {
              input_enabled: {
                'text-input-enabled': 'text-input-enabled-preset',
              }
            }
          },
          overrideClasses: {
            TextElement: {
              input_disabled: 'text-input-disabled-preset'
            }
          },
        }
      }
    })

    classes.merge({
      addClasses: {
        TextElement: {
          container: 'text-container-add'
        }
      },
      removeClasses: {
        TextElement: {
          container: ['text-container-preset-2']
        }
      },
      replaceClasses: {
        TextElement: {
          input_enabled: {
            'text-input-enabled-preset': 'text-input-enabled-replace',
          }
        }
      },
      overrideClasses: {
        TextElement: {
          input_disabled: 'text-input-disabled-override'
        }
      },
      presets: ['preset'],
    })

    expect(classes.classes).toEqual({
      TextElement: {
        container: ['text-container', 'w-full', 'text-container-preset', 'text-container-add'],
        input: ['text-input', 'form-border', { inputConditional: true }],
        input_enabled: ['text-input-enabled-replace'],
        input_disabled: ['text-input-disabled-override'],
        $input,
      },
      SelectElement: {
        container: ['select-container', 'w-full'],
        select: {
          container: ['select-select-container', 'form-border'],
          options: ['select-select-options', 'form-input-padding'],
        },
        deep: {
          deeper: {
            deep_select: ['deep-select'],
            deep_caret: ['deep-caret'],
          }
        }
      }
    })
  })

  it('should throw an error on addClasses when conditional classes are merged to an object class', () => {
    expect(() => {
      let classes = new MergeFormClasses({
        theme,
      })

      classes.merge({
        addClasses: {
          SelectElement: {
            conditional: computed(() => {
              return true
            })
          }
        }
      })
    }).toThrowError('Cannot add conditional class to SelectElement.conditional')

    expect(() => {
      let classes = new MergeFormClasses({
        theme,
      })

      classes.merge({
        addClasses: {
          SelectElement: {
            deep: {
              conditional: ref(true)
            },
          }
        }
      })
    }).toThrowError('Cannot add conditional class to SelectElement.deep.conditional')

    expect(() => {
      let classes = new MergeFormClasses({
        theme,
      })

      classes.merge({
        addClasses: {
          SelectElement: {
            deep: {
              deeper: {
                conditional: true
              }
            }
          }
        }
      })
    }).toThrowError('Cannot add conditional class to SelectElement.deep.deeper.conditional')
  })

  it('should not throw an error on addClasses when conditional classes are merged to class list', () => {
    let computedTrue = computed(() => { return true })
    let refTrue = ref(true)

    let classes = new MergeFormClasses({
      theme,
    })

    classes.merge({
      addClasses: {
        SelectElement: {
          container: { conditional: computedTrue },
          select: {
            container: { conditional: refTrue },
          },
          deep: {
            deeper: {
              deep_select: { conditional: true }
            }
          }
        }
      }
    })

    expect(classes.classes).toEqual({
      TextElement: {
        container: ['text-container', 'w-full'],
        input: ['text-input', 'form-border', { inputConditional: true }],
        input_enabled: ['text-input-enabled'],
        input_disabled: ['text-input-disabled'],
        $input,
      },
      SelectElement: {
        container: ['select-container', 'w-full', { conditional: computedTrue }],
        select: {
          container: ['select-select-container', 'form-border', { conditional: refTrue }],
          options: ['select-select-options', 'form-input-padding'],
        },
        deep: {
          deeper: {
            deep_select: ['deep-select', { conditional: true }],
            deep_caret: ['deep-caret'],
          }
        }
      }
    })
  })
})