import MergeClasses from './../../src/utils/mergeClasses'

const $container = (classes, { Size }) => ([
  classes.container,
  classes[`container_${Size}`],
])

const $container2 = (classes, { $size2 }) => ([
  classes.container,
  classes[`container_${$size2}`],
])

const $options = (classes, { open }) => ([
  classes.select.options,
  classes.select[`options_${open ? 'open' : 'closed'}`],
])

const $options2 = (classes, { open }) => ([
  classes.select.options,
  classes.select[`options_${open ? 'closed' : 'open'}`],
])

const $placeholder = (classes, { placeholder }) => ([
  classes.placeholder,
  classes[`placeholder_${placeholder ? 'visible' : 'invisible'}`],
])

const $placeholder2 = (classes, { placeholder }) => ([
  classes.placeholder,
  classes[`placeholder_${placeholder ? 'invisible' : 'visible'}`],
])

const preset1 = {
  addClasses: {
    SelectElement: {
      container: ['select-container-preset1', 'select-container-preset1-2'],
    },
  },
  removeClasses: {
    SelectElement: {
      select: {
        wrapper: ['select-select-wrapper']
      },
    },
  },
  replaceClasses: {
    SelectElement: {
      select: {
        options_closed: {
          'select-select-options-closed': 'select-select-options-closed-preset1'
        }
      },
    },
  },
  overrideClasses: {
    SelectElement: {
      deep: {
        deeper: {
          deep_select: 'deep-select-preset1'
        }
      }
    },
  },
}

const preset2 = {
  addClasses: {
    SelectElement: {
      container: ['select-container-preset2'],
    },
  },
  removeClasses: {
    SelectElement: {
      container: ['select-container-preset1-2'],
    },
  },
  replaceClasses: {
    SelectElement: {
      select: {
        options_closed: {
          'select-select-options-closed-preset1': 'select-select-options-closed-preset2'
        }
      },
    },
  },
  overrideClasses: {
    SelectElement: {
      deep: {
        deeper: {
          deep_caret: 'deep-caret-preset2'
        }
      }
    },
  },
}

const defaultClasses = {
  container: 'select-container w-full',
  container_sm: 'text-sm',
  container_md: 'text-md',
  container_lg: 'text-lg',
  placeholder: ['select-placeholder', { conditional: true }],
  placeholder_visible: [[{'select-placeholder-visible': true }]],
  placeholder_invisible: [{'select-placeholder-invisible': true }],
  $placeholder,
  select: {
    wrapper: 'select-select-wrapper',
    options: 'select-select-options',
    options_closed: 'select-select-options-closed',
    options_open: 'select-select-options-open',
    $options,
  },
  deep: {
    deeper: {
      deep_select: 'deep-select',
      deep_caret: 'deep-caret',
      deep_clear: 'deep-clear',
    }
  },
  $container,
}

const component$ = {
  value: {
    Size: 'md',
    $size2: 'sm',
    merge: false,
    open: false,
    placeholder: true,
    defaultClasses,
  }
}

describe('mergeClasses', () => {
  it('should convert template classes to array', () => {
    let classes = new MergeClasses({
      component: 'SelectElement',
      component$,
    })

    expect(classes.classes).toEqual({
      container: ['select-container', 'w-full', 'text-md'],
      container_sm: ['text-sm'],
      container_md: ['text-md'],
      container_lg: ['text-lg'],
      placeholder: ['select-placeholder', { conditional: true }, {'select-placeholder-visible': true }],
      placeholder_visible: [{'select-placeholder-visible': true }],
      placeholder_invisible: [{'select-placeholder-invisible': true }],
      $placeholder,
      select: {
        wrapper: ['select-select-wrapper'],
        options: ['select-select-options', 'select-select-options-closed'],
        options_closed: ['select-select-options-closed'],
        options_open: ['select-select-options-open'],
        $options,
      },
      deep: {
        deeper: {
          deep_select: ['deep-select'],
          deep_caret: ['deep-caret'],
          deep_clear: ['deep-clear'],
        }
      },
      $container,
    })
  })

  it('should convert theme classes to array', () => {
    let classes = new MergeClasses({
      component: 'SelectElement',
      component$: {
        value: {
          ...component$.value,
          merge: true,
          defaultClasses: {
            container: '',
            container_sm: '',
            container_md: '',
            container_lg: '',
            placeholder: '',
            placeholder_visible: '',
            placeholder_invisible: '',
            $placeholder,
            select: {
              wrapper: '',
              options: '',
              options_closed: '',
              options_open: '',
              $options,
            },
            deep: {
              deeper: {
                deep_select: '',
                deep_caret: '',
                deep_clear: '',
              }
            },
            $container,
          }
        }
      },
      theme: {
        classes: {
          SelectElement: {
            ...defaultClasses,
          }
        }
      }
    })

    expect(classes.classes).toEqual({
      container: ['select-container', 'w-full', 'text-md'],
      container_sm: ['text-sm'],
      container_md: ['text-md'],
      container_lg: ['text-lg'],
      placeholder: ['select-placeholder', { conditional: true }, {'select-placeholder-visible': true }],
      placeholder_visible: [{'select-placeholder-visible': true }],
      placeholder_invisible: [{'select-placeholder-invisible': true }],
      $placeholder,
      select: {
        wrapper: ['select-select-wrapper'],
        options: ['select-select-options', 'select-select-options-closed'],
        options_closed: ['select-select-options-closed'],
        options_open: ['select-select-options-open'],
        $options,
      },
      deep: {
        deeper: {
          deep_select: ['deep-select'],
          deep_caret: ['deep-caret'],
          deep_clear: ['deep-clear'],
        }
      },
      $container,
    })
    
    classes = new MergeClasses({
      component: 'SelectElement',
      component$: {
        value: {
          ...component$.value,
          merge: true,
          defaultClasses: {}
        }
      },
      theme: {
        classes: {
          SelectElement: {
            ...defaultClasses,
          }
        }
      }
    })

    expect(classes.classes).toEqual({
      container: ['select-container', 'w-full', 'text-md'],
      container_sm: ['text-sm'],
      container_md: ['text-md'],
      container_lg: ['text-lg'],
      placeholder: ['select-placeholder', { conditional: true }, {'select-placeholder-visible': true }],
      placeholder_visible: [{'select-placeholder-visible': true }],
      placeholder_invisible: [{'select-placeholder-invisible': true }],
      $placeholder,
      select: {
        wrapper: ['select-select-wrapper'],
        options: ['select-select-options', 'select-select-options-closed'],
        options_closed: ['select-select-options-closed'],
        options_open: ['select-select-options-open'],
        $options,
      },
      deep: {
        deeper: {
          deep_select: ['deep-select'],
          deep_caret: ['deep-caret'],
          deep_clear: ['deep-clear'],
        }
      },
      $container,
    })
  })

  it('should return dynamic classes', () => {
    let classes = new MergeClasses({
      component: 'SelectElement',
      component$,
    })

    expect(classes.classes.container).toEqual(['select-container', 'w-full', 'text-md'])
    expect(classes.classes.placeholder).toEqual(['select-placeholder', { conditional: true }, {'select-placeholder-visible': true }])
    expect(classes.classes.select.options).toEqual(['select-select-options', 'select-select-options-closed'])
  })

  it('should addClasses', () => {
    let classes = new MergeClasses({
      component: 'SelectElement',
      component$,
      merge: [
        {
          addClasses: {
            SelectElement: {
              container: 'select-container-add',
              container_md: ['select-container-md-add'],
              placeholder: [{'select-placeholder-add': true}],
              select: {
                wrapper: 'select-select-wrapper-add',
                options: ['select-select-options-add'],
                options_closed: [{'select-select-options-closed': true}],
              },
              deep: {
                deeper: {
                  deep_select: 'deep-select-add',
                  deep_caret: ['deep-caret-add'],
                  deep_clear: [{'deep-clear-add':true}],
                }
              },
            }
          }
        }
      ]
    })

    expect(classes.classes.container).toEqual(
      ['select-container', 'w-full', 'select-container-add', 'text-md', 'select-container-md-add']
    )
    expect(classes.classes.placeholder).toEqual(
      ['select-placeholder', { conditional: true }, {'select-placeholder-add': true}, { 'select-placeholder-visible': true }]
    )
    expect(classes.classes.select.wrapper).toEqual(
      ['select-select-wrapper', 'select-select-wrapper-add']
    )
    expect(classes.classes.select.options).toEqual(
      ['select-select-options', 'select-select-options-add', 'select-select-options-closed', {'select-select-options-closed': true}]
    )
    expect(classes.classes.deep.deeper.deep_select).toEqual(
      ['deep-select', 'deep-select-add']
    )
    expect(classes.classes.deep.deeper.deep_caret).toEqual(
      ['deep-caret', 'deep-caret-add']
    )
    expect(classes.classes.deep.deeper.deep_clear).toEqual(
      ['deep-clear', {'deep-clear-add':true}]
    )
  })

  it('should addClass', () => {
    let classes = new MergeClasses({
      component: 'SelectElement',
      component$: {
        value: {
          ...component$.value,
          addClass: {
            container: 'select-container-add',
            container_md: ['select-container-md-add'],
            placeholder: [{'select-placeholder-add': true}],
            select: {
              wrapper: 'select-select-wrapper-add',
              options: ['select-select-options-add'],
              options_closed: [{'select-select-options-closed': true}],
            },
            deep: {
              deeper: {
                deep_select: 'deep-select-add',
                deep_caret: ['deep-caret-add'],
                deep_clear: [{'deep-clear-add':true}],
              }
            },
          }
        }
      },
    })

    expect(classes.classes.container).toEqual(
      ['select-container', 'w-full', 'select-container-add', 'text-md', 'select-container-md-add']
    )
    expect(classes.classes.placeholder).toEqual(
      ['select-placeholder', { conditional: true }, {'select-placeholder-add': true}, { 'select-placeholder-visible': true }]
    )
    expect(classes.classes.select.wrapper).toEqual(
      ['select-select-wrapper', 'select-select-wrapper-add']
    )
    expect(classes.classes.select.options).toEqual(
      ['select-select-options', 'select-select-options-add', 'select-select-options-closed', {'select-select-options-closed': true}]
    )
    expect(classes.classes.deep.deeper.deep_select).toEqual(
      ['deep-select', 'deep-select-add']
    )
    expect(classes.classes.deep.deeper.deep_caret).toEqual(
      ['deep-caret', 'deep-caret-add']
    )
    expect(classes.classes.deep.deeper.deep_clear).toEqual(
      ['deep-clear', {'deep-clear-add':true}]
    )

    classes = new MergeClasses({
      component: 'SelectElement',
      component$: {
        value: {
          ...component$.value,
          addClass: 'select-container-add'
        }
      },
    })

    expect(classes.classes).toEqual({
      container: ['select-container', 'w-full', 'select-container-add', 'text-md'],
      container_sm: ['text-sm'],
      container_md: ['text-md'],
      container_lg: ['text-lg'],
      placeholder: ['select-placeholder', { conditional: true }, {'select-placeholder-visible': true }],
      placeholder_visible: [{'select-placeholder-visible': true }],
      placeholder_invisible: [{'select-placeholder-invisible': true }],
      $placeholder,
      select: {
        wrapper: ['select-select-wrapper'],
        options: ['select-select-options', 'select-select-options-closed'],
        options_closed: ['select-select-options-closed'],
        options_open: ['select-select-options-open'],
        $options,
      },
      deep: {
        deeper: {
          deep_select: ['deep-select'],
          deep_caret: ['deep-caret'],
          deep_clear: ['deep-clear'],
        }
      },
      $container,
    })  
  })

  it('should removeClasses', () => {
    let classes = new MergeClasses({
      component: 'SelectElement',
      component$,
      merge: [
        {
          removeClasses: {
            SelectElement: {
              container: ['select-container', 'w-full'],
              container_md: 'text-md',
              select: {
                wrapper: ['select-select-wrapper'],
                options: 'select-select-options',
                options_closed: ['select-select-options-closed'],
              },
              deep: {
                deeper: {
                  deep_select: 'deep-select',
                  deep_caret: ['deep-caret'],
                }
              },
            }
          }
        }
      ]
    })

    expect(classes.classes).toEqual({
      container: [],
      container_sm: ['text-sm'],
      container_md: [],
      container_lg: ['text-lg'],
      placeholder: ['select-placeholder', { conditional: true }, {'select-placeholder-visible': true }],
      placeholder_visible: [{'select-placeholder-visible': true }],
      placeholder_invisible: [{'select-placeholder-invisible': true }],
      $placeholder,
      select: {
        wrapper: [],
        options: [],
        options_closed: [],
        options_open: ['select-select-options-open'],
        $options,
      },
      deep: {
        deeper: {
          deep_select: [],
          deep_caret: [],
          deep_clear: ['deep-clear'],
        }
      },
      $container,
    })
  })

  it('should removeClass', () => {
    let classes = new MergeClasses({
      component: 'SelectElement',
      component$: {
        value: {
          ...component$.value,
          removeClass: {
            container: ['select-container', 'w-full'],
            container_md: 'text-md',
            select: {
              options: ['select-select-options'],
              options_closed: ['select-select-options-closed'],
            },
            deep: {
              deeper: {
                deep_select: ['deep-select'],
              }
            },
          }
        }
      }
    })

    expect(classes.classes).toEqual({
      container: [],
      container_sm: ['text-sm'],
      container_md: [],
      container_lg: ['text-lg'],
      placeholder: ['select-placeholder', { conditional: true }, {'select-placeholder-visible': true }],
      placeholder_visible: [{'select-placeholder-visible': true }],
      placeholder_invisible: [{'select-placeholder-invisible': true }],
      $placeholder,
      select: {
        wrapper: ['select-select-wrapper'],
        options: [],
        options_closed: [],
        options_open: ['select-select-options-open'],
        $options,
      },
      deep: {
        deeper: {
          deep_select: [],
          deep_caret: ['deep-caret'],
          deep_clear: ['deep-clear'],
        }
      },
      $container,
    })

    classes = new MergeClasses({
      component: 'SelectElement',
      component$: {
        value: {
          ...component$.value,
          removeClass: 'w-full'
        }
      }
    })

    expect(classes.classes).toEqual({
      container: ['select-container', 'text-md'],
      container_sm: ['text-sm'],
      container_md: ['text-md'],
      container_lg: ['text-lg'],
      placeholder: ['select-placeholder', { conditional: true }, {'select-placeholder-visible': true }],
      placeholder_visible: [{'select-placeholder-visible': true }],
      placeholder_invisible: [{'select-placeholder-invisible': true }],
      $placeholder,
      select: {
        wrapper: ['select-select-wrapper'],
        options: ['select-select-options', 'select-select-options-closed'],
        options_closed: ['select-select-options-closed'],
        options_open: ['select-select-options-open'],
        $options,
      },
      deep: {
        deeper: {
          deep_select: ['deep-select'],
          deep_caret: ['deep-caret'],
          deep_clear: ['deep-clear'],
        }
      },
      $container,
    })
  })

  it('should replaceClasses', () => {
    let classes = new MergeClasses({
      component: 'SelectElement',
      component$,
      merge: [
        {
          replaceClasses: {
            SelectElement: {
              container: { 'select-container': 'select-container-2' },
              container_md: { 'text-md': 'text-md-2' },
              placeholder: { 'select-placeholder': 'select-placeholder-2' },
              select: {
                options: { 'select-select-options': 'select-select-options-2' },
                options_closed: { 'select-select-options-closed': 'select-select-options-closed-2' },
              },
              deep: {
                deeper: {
                  deep_select: { 'deep-select': 'deep-select-2' }
                }
              }
            }
          }
        }
      ]
    })

    expect(classes.classes).toEqual({
      container: ['select-container-2', 'w-full', 'text-md-2'],
      container_sm: ['text-sm'],
      container_md: ['text-md-2'],
      container_lg: ['text-lg'],
      placeholder: ['select-placeholder-2', { conditional: true }, {'select-placeholder-visible': true }],
      placeholder_visible: [{'select-placeholder-visible': true }],
      placeholder_invisible: [{'select-placeholder-invisible': true }],
      $placeholder,
      select: {
        wrapper: ['select-select-wrapper'],
        options: ['select-select-options-2', 'select-select-options-closed-2'],
        options_closed: ['select-select-options-closed-2'],
        options_open: ['select-select-options-open'],
        $options,
      },
      deep: {
        deeper: {
          deep_select: ['deep-select-2'],
          deep_caret: ['deep-caret'],
          deep_clear: ['deep-clear'],
        }
      },
      $container,
    })
  })

  it('should replaceClass', () => {
    let classes = new MergeClasses({
      component: 'SelectElement',
      component$: {
        value: {
          ...component$.value,
          replaceClass: {
            container: { 'select-container': 'select-container-2' },
            container_md: { 'text-md': 'text-md-2' },
            placeholder: [{ 'select-placeholder': 'select-placeholder-2' }],
            select: {
              options: { 'select-select-options': 'select-select-options-2' },
              options_closed: [{ 'select-select-options-closed': 'select-select-options-closed-2' }],
            },
            deep: {
              deeper: {
                deep_select: { 'deep-select': 'deep-select-2' }
              }
            }
          }
        }
      }
    })

    expect(classes.classes).toEqual({
      container: ['select-container-2', 'w-full', 'text-md-2'],
      container_sm: ['text-sm'],
      container_md: ['text-md-2'],
      container_lg: ['text-lg'],
      placeholder: ['select-placeholder-2', { conditional: true }, {'select-placeholder-visible': true }],
      placeholder_visible: [{'select-placeholder-visible': true }],
      placeholder_invisible: [{'select-placeholder-invisible': true }],
      $placeholder,
      select: {
        wrapper: ['select-select-wrapper'],
        options: ['select-select-options-2', 'select-select-options-closed-2'],
        options_closed: ['select-select-options-closed-2'],
        options_open: ['select-select-options-open'],
        $options,
      },
      deep: {
        deeper: {
          deep_select: ['deep-select-2'],
          deep_caret: ['deep-caret'],
          deep_clear: ['deep-clear'],
        }
      },
      $container,
    })

    classes = new MergeClasses({
      component: 'SelectElement',
      component$: {
        value: {
          ...component$.value,
          replaceClass: [{ 'select-container': 'select-container-2' }]
        }
      }
    })

    expect(classes.classes).toEqual({
      container: ['select-container-2', 'w-full', 'text-md'],
      container_sm: ['text-sm'],
      container_md: ['text-md'],
      container_lg: ['text-lg'],
      placeholder: ['select-placeholder', { conditional: true }, {'select-placeholder-visible': true }],
      placeholder_visible: [{'select-placeholder-visible': true }],
      placeholder_invisible: [{'select-placeholder-invisible': true }],
      $placeholder,
      select: {
        wrapper: ['select-select-wrapper'],
        options: ['select-select-options', 'select-select-options-closed'],
        options_closed: ['select-select-options-closed'],
        options_open: ['select-select-options-open'],
        $options,
      },
      deep: {
        deeper: {
          deep_select: ['deep-select'],
          deep_caret: ['deep-caret'],
          deep_clear: ['deep-clear'],
        }
      },
      $container,
    })
  })

  it('should overrideClasses', () => {
    let classes = new MergeClasses({
      component: 'SelectElement',
      component$,
      merge: [
        {
          overrideClasses: {
            SelectElement: {
              container: 'not-select-container not-w-full',
              container_sm: 'not-text-sm',
              container_md: 'not-text-md',
              container_lg: 'not-text-lg',
              placeholder: ['not-select-placeholder', { 'not-conditional': true }],
              placeholder_visible: [[{'not-select-placeholder-visible': true }]],
              placeholder_invisible: [{'not-select-placeholder-invisible': true }],
              $placeholder: $placeholder2,
              select: {
                wrapper: 'not-select-select-wrapper',
                options: 'not-select-select-options',
                options_closed: 'not-select-select-options-closed',
                options_open: 'not-select-select-options-open',
                $options: $options2,
              },
              deep: {
                deeper: {
                  deep_select: 'not-deep-select',
                  deep_caret: 'not-deep-caret',
                  deep_clear: {'not-deep-clear': true},
                }
              },
              $container: $container2,
            }
          }
        }
      ]
    })

    expect(classes.classes).toEqual({
      container: ['not-select-container', 'not-w-full', 'not-text-sm'],
      container_sm: ['not-text-sm'],
      container_md: ['not-text-md'],
      container_lg: ['not-text-lg'],
      placeholder: ['not-select-placeholder', { 'not-conditional': true }, {'not-select-placeholder-invisible': true }],
      placeholder_visible: [{'not-select-placeholder-visible': true }],
      placeholder_invisible: [{'not-select-placeholder-invisible': true }],
      $placeholder: $placeholder2,
      select: {
        wrapper: ['not-select-select-wrapper'],
        options: ['not-select-select-options', 'not-select-select-options-open'],
        options_closed: ['not-select-select-options-closed'],
        options_open: ['not-select-select-options-open'],
        $options: $options2,
      },
      deep: {
        deeper: {
          deep_select: ['not-deep-select'],
          deep_caret: ['not-deep-caret'],
          deep_clear: [{'not-deep-clear':true}],
        }
      },
      $container: $container2,
    })
  })

  it('should overrideClass', () => {
    let classes = new MergeClasses({
      component: 'SelectElement',
      component$: {
        value: {
          ...component$.value,
          overrideClass: {
            container: 'not-select-container not-w-full',
            container_sm: 'not-text-sm',
            container_md: 'not-text-md',
            container_lg: 'not-text-lg',
            placeholder: ['not-select-placeholder', { 'not-conditional': true }],
            placeholder_visible: [[{'not-select-placeholder-visible': true }]],
            placeholder_invisible: [{'not-select-placeholder-invisible': true }],
            $placeholder: $placeholder2,
            select: {
              wrapper: 'not-select-select-wrapper',
              options: 'not-select-select-options',
              options_closed: 'not-select-select-options-closed',
              options_open: 'not-select-select-options-open',
              $options: $options2,
            },
            deep: {
              deeper: {
                deep_select: 'not-deep-select',
                deep_caret: 'not-deep-caret',
                deep_clear: {'not-deep-clear': true},
              }
            },
            $container: $container2,
          }
        }
      }
    })

    expect(classes.classes).toEqual({
      container: ['not-select-container', 'not-w-full', 'not-text-sm'],
      container_sm: ['not-text-sm'],
      container_md: ['not-text-md'],
      container_lg: ['not-text-lg'],
      placeholder: ['not-select-placeholder', { 'not-conditional': true }, {'not-select-placeholder-invisible': true }],
      placeholder_visible: [{'not-select-placeholder-visible': true }],
      placeholder_invisible: [{'not-select-placeholder-invisible': true }],
      $placeholder: $placeholder2,
      select: {
        wrapper: ['not-select-select-wrapper'],
        options: ['not-select-select-options', 'not-select-select-options-open'],
        options_closed: ['not-select-select-options-closed'],
        options_open: ['not-select-select-options-open'],
        $options: $options2,
      },
      deep: {
        deeper: {
          deep_select: ['not-deep-select'],
          deep_caret: ['not-deep-caret'],
          deep_clear: [{'not-deep-clear':true}],
        }
      },
      $container: $container2,
    })
  })

  it('should merge presets', () => {
    let classes = new MergeClasses({
      component: 'SelectElement',
      component$,
      config: {
        presets: {
          preset1,
          preset2,
        },
      },
      merge: [
        {
          presets: ['preset1']
        },
        {
          presets: ['preset2']
        },
      ]
    })

    expect(classes.classes).toEqual({
      container: ['select-container', 'w-full', 'select-container-preset1', 'select-container-preset2', 'text-md'],
      container_sm: ['text-sm'],
      container_md: ['text-md'],
      container_lg: ['text-lg'],
      placeholder: ['select-placeholder', { conditional: true }, {'select-placeholder-visible': true }],
      placeholder_visible: [{'select-placeholder-visible': true }],
      placeholder_invisible: [{'select-placeholder-invisible': true }],
      $placeholder,
      select: {
        wrapper: [],
        options: ['select-select-options', 'select-select-options-closed-preset2'],
        options_closed: ['select-select-options-closed-preset2'],
        options_open: ['select-select-options-open'],
        $options,
      },
      deep: {
        deeper: {
          deep_select: ['deep-select-preset1'],
          deep_caret: ['deep-caret-preset2'],
          deep_clear: ['deep-clear'],
        }
      },
      $container,
    })
  })

  it('should add class helpers', () => {
    let classes = new MergeClasses({
      component: 'SelectElement',
      component$,
      config: {
        classHelpers: true,
      }
    })

    expect(classes.classes).toEqual({
      container: ['SelectElement.container-->', 'select-container', 'w-full', 'SelectElement.container_md-->', 'text-md'],
      container_sm: ['SelectElement.container_sm-->', 'text-sm'],
      container_md: ['SelectElement.container_md-->', 'text-md'],
      container_lg: ['SelectElement.container_lg-->', 'text-lg'],
      placeholder: ['SelectElement.placeholder-->', 'select-placeholder', { conditional: true }, 'SelectElement.placeholder_visible-->', {'select-placeholder-visible': true }],
      placeholder_visible: [ 'SelectElement.placeholder_visible-->', {'select-placeholder-visible': true }],
      placeholder_invisible: [ 'SelectElement.placeholder_invisible-->', {'select-placeholder-invisible': true }],
      $placeholder,
      select: {
        wrapper: ['SelectElement.select.wrapper-->', 'select-select-wrapper'],
        options: ['SelectElement.select.options-->', 'select-select-options', 'SelectElement.select.options_closed-->', 'select-select-options-closed'],
        options_closed: ['SelectElement.select.options_closed-->','select-select-options-closed'],
        options_open: ['SelectElement.select.options_open-->', 'select-select-options-open'],
        $options,
      },
      deep: {
        deeper: {
          deep_select: ['SelectElement.deep.deeper.deep_select-->', 'deep-select'],
          deep_caret: ['SelectElement.deep.deeper.deep_caret-->','deep-caret'],
          deep_clear: ['SelectElement.deep.deeper.deep_clear-->','deep-clear'],
        }
      },
      $container,
    })
  })

  it('should template & theme classes', () => {
    let classes = new MergeClasses({
      component: 'SelectElement',
      component$: {
        value: {
          ...component$.value,
          merge: true,
          defaultClasses: {
            container: 'select-container w-full',
            container_sm: 'text-sm',
            container_md: 'text-md',
            container_lg: 'text-lg',
            placeholder: ['select-placeholder', { conditional: true }],
            placeholder_visible: [[{'select-placeholder-visible': true }]],
            placeholder_invisible: [{'select-placeholder-invisible': true }],
            $placeholder,
            select: {
              wrapper: 'select-select-wrapper',
              options: 'select-select-options',
              options_closed: 'select-select-options-closed',
              options_open: 'select-select-options-open',
              $options,
            },
            deep: {
              deeper: {
                deep_select: 'deep-select',
                deep_caret: 'deep-caret',
                deep_clear: 'deep-clear',
              }
            },
            $container,
          }
        }
      },
      theme: {
        classes: {
          SelectElement: {
            container_md: 'theme-text-md',
            placeholder: ['theme-select-placeholder'],
            $placeholder: $placeholder2,
            select: {
              wrapper: 'theme-select-select-wrapper',
            },
            deep: {
              deeper: {
                deep_select: 'theme-deep-select',
              }
            },
          }
        }
      }
    })

    expect(classes.classes).toEqual({
      container: ['select-container', 'w-full', 'theme-text-md'],
      container_sm: ['text-sm'],
      container_md: ['theme-text-md'],
      container_lg: ['text-lg'],
      placeholder: ['theme-select-placeholder', {'select-placeholder-invisible': true }],
      placeholder_visible: [{'select-placeholder-visible': true }],
      placeholder_invisible: [{'select-placeholder-invisible': true }],
      $placeholder: $placeholder2,
      select: {
        wrapper: ['theme-select-select-wrapper'],
        options: ['select-select-options', 'select-select-options-closed'],
        options_closed: ['select-select-options-closed'],
        options_open: ['select-select-options-open'],
        $options,
      },
      deep: {
        deeper: {
          deep_select: ['theme-deep-select'],
          deep_caret: ['deep-caret'],
          deep_clear: ['deep-clear'],
        }
      },
      $container,
    })
  })

  it('should merge add/remove/replace/overrideClasses & usePresets from config', () => {
    let classes = new MergeClasses({
      component: 'SelectElement',
      component$,
      config: {
        presets: {
          preset: {
            addClasses: {
              SelectElement: {
                placeholder: 'config-select-placeholder'
              },
            }
          }
        },
        usePresets: ['preset'],
        addClasses: {
          SelectElement: {
            container: 'config-select-container'
          },
        },
        removeClasses: {
          SelectElement: {
            container_sm: 'text-sm'
          },
        },
        replaceClasses: {
          SelectElement: {
            container_md: { 'text-md': 'config-text-md' }
          },
        },
        overrideClasses: {
          SelectElement: {
            container_lg: 'config-text-lg'
          },
        },
      }
    })

    expect(classes.classes).toEqual({
      container: ['select-container', 'w-full', 'config-select-container', 'config-text-md'],
      container_sm: [],
      container_md: ['config-text-md'],
      container_lg: ['config-text-lg'],
      placeholder: ['select-placeholder', { conditional: true }, 'config-select-placeholder', {'select-placeholder-visible': true }],
      placeholder_visible: [{'select-placeholder-visible': true }],
      placeholder_invisible: [{'select-placeholder-invisible': true }],
      $placeholder,
      select: {
        wrapper: ['select-select-wrapper'],
        options: ['select-select-options', 'select-select-options-closed'],
        options_closed: ['select-select-options-closed'],
        options_open: ['select-select-options-open'],
        $options,
      },
      deep: {
        deeper: {
          deep_select: ['deep-select'],
          deep_caret: ['deep-caret'],
          deep_clear: ['deep-clear'],
        }
      },
      $container,
    })
  })

  it('should throw an error on addClasses when conditional classes are merged to an object class', () => {
    expect(() => {
      new MergeClasses({
        component: 'SelectElement',
        component$,
        merge: [
          {
            addClasses: {
              SelectElement: {
                conditional: new function ComputedRefImpl() {}
              }
            }
          }
        ]
      })
    }).toThrowError('Cannot add conditional class to SelectElement: \'conditional\'')

    expect(() => {
      new MergeClasses({
        component: 'SelectElement',
        component$,
        merge: [
          {
            addClasses: {
              SelectElement: {
                deep: {
                  conditional: new function RefImpl() {}
                },
              }
            }
          }
        ]
      })
    }).toThrowError('Cannot add conditional class to SelectElement: \'deep.conditional\'')

    expect(() => {
      new MergeClasses({
        component: 'SelectElement',
        component$,
        merge: [
          {
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
        ]
      })
    }).toThrowError('Cannot add conditional class to SelectElement: \'deep.deeper.conditional\'')
  })

  it('should not throw an error on addClasses when conditional classes are merged to class list', () => {
    let computedTrue = new function ComputedRefImpl() {}
    let refTrue = new function RefImpl() {}

    let classes = new MergeClasses({
      component: 'SelectElement',
      component$,
      merge: [
        {
          addClasses: {
            SelectElement: {
              container: { conditional: computedTrue },
              select: {
                wrapper: { conditional: refTrue },
              },
              deep: {
                deeper: {
                  deep_select: { conditional: true }
                }
              }
            }
          }
        }
      ]
    })

    expect(classes.classes).toEqual({
      container: ['select-container', 'w-full', { conditional: computedTrue }, 'text-md'],
      container_sm: ['text-sm'],
      container_md: ['text-md'],
      container_lg: ['text-lg'],
      placeholder: ['select-placeholder', { conditional: true }, {'select-placeholder-visible': true }],
      placeholder_visible: [{'select-placeholder-visible': true }],
      placeholder_invisible: [{'select-placeholder-invisible': true }],
      $placeholder,
      select: {
        wrapper: ['select-select-wrapper', { conditional: refTrue }],
        options: ['select-select-options', 'select-select-options-closed'],
        options_closed: ['select-select-options-closed'],
        options_open: ['select-select-options-open'],
        $options,
      },
      deep: {
        deeper: {
          deep_select: ['deep-select', { conditional: true }],
          deep_caret: ['deep-caret'],
          deep_clear: ['deep-clear'],
        }
      },
      $container,
    })
  })
  
  it('should use view classes from theme if available', () => {
    let classes = new MergeClasses({
      component: 'SelectElement',
      view: 'alt',
      component$: {
        value: {
          ...component$.value,
          merge: true,
          defaultClasses: {}
        }
      },
      templates: {
        SelectElement: {
          data() {
            return {
              defaultClasses: {
                container: 'container-template'
              }
            }
          }
        },
        SelectElement_alt: {
          data() {
            return {
              defaultClasses: {
                container: 'container-template-alt'
              }
            }
          }
        }
      },
      theme: {
        classes: {
          SelectElement: {
            container: 'container-theme'
          },
          SelectElement_alt: {
            container: 'container-theme-alt'
          }
        },
      }
    })

    expect(classes.classes).toEqual({
      container: ['container-theme-alt']
    })

    classes = new MergeClasses({
      component: 'SelectElement',
      view: 'alt2',
      component$: {
        value: {
          ...component$.value,
          merge: true,
          defaultClasses: {}
        }
      },
      templates: {
        SelectElement: {
          data() {
            return {
              defaultClasses: {
                container: 'container-template'
              }
            }
          }
        },
        SelectElement_alt: {
          data() {
            return {
              defaultClasses: {
                container: 'container-template-alt'
              }
            }
          }
        }
      },
      theme: {
        classes: {
          SelectElement: {
            container: 'container-theme'
          },
          SelectElement_alt: {
            container: 'container-theme-alt'
          }
        },
      }
    })

    expect(classes.classes).toEqual({
      container: ['container-theme']
    })
  })
  
  it('should use view classes from template if available', () => {
    let classes = new MergeClasses({
      component: 'SelectElement',
      view: 'alt',
      templates: {
        SelectElement: {
          data() {
            return {
              defaultClasses: {
                container: 'container-template'
              }
            }
          }
        },
        SelectElement_alt: {
          data() {
            return {
              defaultClasses: {
                container: 'container-template-alt'
              }
            }
          }
        }
      },
      component$: {
        value: {
          ...component$.value,
          merge: false,
          defaultClasses: {}
        }
      },
    })

    expect(classes.classes).toEqual({
      container: ['container-template-alt']
    })

    classes = new MergeClasses({
      component: 'SelectElement',
      view: 'alt2',
      component$: {
        value: {
          ...component$.value,
          merge: false,
          defaultClasses: {}
        }
      },
      templates: {
        SelectElement: {
          data() {
            return {
              defaultClasses: {
                container: 'container-template'
              }
            }
          }
        },
        SelectElement_alt: {
          data() {
            return {
              defaultClasses: {
                container: 'container-template-alt'
              }
            }
          }
        }
      },
    })

    expect(classes.classes).toEqual({
      container: ['container-template']
    })
  })
})