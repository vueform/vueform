import MergeFormClasses from './../../src/utils/mergeFormClasses'
import { computed, ref } from 'composition-api'

const $input = (classes, el$) => ([
  classes.input,
  { [classes.input_enabled]: !el$.isDisabled() },
  { [classes.input_disabled]: el$.isDisabled() },
])

const theme = {
  TextElement: {
    container: 'text-container w-full',
    input: ['text-input', 'form-border'],
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
        deep_select: 'deep-select'
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
        input: ['text-input', 'form-border'],
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
            deep_select: ['deep-select']
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
              deep_select: ['deeper-select-add']
            },
          }
        }
      }
    })

    expect(classes.classes).toEqual({
      TextElement: {
        container: ['text-container', 'w-full', 'text-container-added'],
        input: ['text-input', 'form-border', 'text-input-added'],
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
            deep_select: ['deep-select', 'deeper-select-add']
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
        input: ['text-input', 'form-border', 'text-input-added', 'text-input-added-2'],
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
            deep_select: ['deep-select', 'deeper-select-add', 'deeper-select-add-2']
          },
          deeperAdd: ['deep-select-add']
        }
      }
    })
  })

  it('should throw an error on addClasses when conditional classes are merged to an object class', () => {
    expect(() => {
      new MergeFormClasses({
        theme,
        config: {
          addClasses: {
            SelectElement: {
              conditional: computed(() => {
                return true
              })
            }
          }
        }
      })
    }).toThrowError('Cannot add conditional class to SelectElement.conditional')

    expect(() => {
      new MergeFormClasses({
        theme,
        config: {
          addClasses: {
            SelectElement: {
              deep: {
                conditional: ref(true)
              },
            }
          }
        }
      })
    }).toThrowError('Cannot add conditional class to SelectElement.deep.conditional')

    expect(() => {
      new MergeFormClasses({
        theme,
        config: {
          addClasses: {
            SelectElement: {
              deep: {
                deeper: {
                  conditional: true
                }
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
      config: {
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
      }
    })

    expect(classes.classes).toEqual({
      TextElement: {
        container: ['text-container', 'w-full'],
        input: ['text-input', 'form-border'],
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
            deep_select: ['deep-select', { conditional: true }]
          }
        }
      }
    })
  })
})