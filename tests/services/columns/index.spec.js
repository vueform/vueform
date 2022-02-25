import { createForm } from 'test-helpers'

describe('Bootstrap Columns Util', () => {
  it('should set element column if integer', async () => {
     let form = createForm({
      schema: {
        el: {
          type: 'text',
          label: 'El',
          columns: 8
        },
      }
    }, {
      config: { columns: { container: 12, label: 12, wrapper: 12, } },
    })
    
    let el = form.vm.el$('el')

    expect(el.columnsClasses).toStrictEqual({
      container: ['vf-col-8'],
      innerContainer: ['vf-col-12'],
      label: ['vf-col-12'],
      wrapper: ['vf-col-12'],
    })
  })

  it('should merge element column if integer', async () => {
     let form = createForm({
      schema: {
        el: {
          type: 'text',
          label: 'El',
          columns: 8
        },
      }
    }, {
      config: { columns: { default: { container: 12, label: 12, wrapper: 12, }, lg: 10 } },
    })
    
    let el = form.vm.el$('el')

    expect(el.columnsClasses).toStrictEqual({
      container: ['vf-col-8', 'vf-col-lg-10'],
      innerContainer: ['vf-col-12'],
      label: ['vf-col-12'],
      wrapper: ['vf-col-12'],
    })
  })

  it('should set element if element is defined', async () => {
     let form = createForm({
      schema: {
        el: {
          type: 'text',
          label: 'El',
          columns: {
            container: 8,
          }
        },
      }
    }, {
      config: { columns: { container: 12, label: 12, wrapper: 12, } },
    })
    
    let el = form.vm.el$('el')

    expect(el.columnsClasses).toStrictEqual({
      container: ['vf-col-8'],
      innerContainer: ['vf-col-12'],
      label: ['vf-col-12'],
      wrapper: ['vf-col-12'],
    })
  })

  it('should merge element if element is defined', async () => {
     let form = createForm({
      schema: {
        el: {
          type: 'text',
          label: 'El',
          columns: {
            container: 8,
          }
        },
      }
    }, {
      config: { columns: { default: { container: 12, label: 12, wrapper: 12, }, lg: 10 } },
    })
    
    let el = form.vm.el$('el')

    expect(el.columnsClasses).toStrictEqual({
      container: ['vf-col-8', 'vf-col-lg-10'],
      innerContainer: ['vf-col-12'],
      label: ['vf-col-12'],
      wrapper: ['vf-col-12'],
    })
  })

  it('should set label and field if defined', async () => {
     let form = createForm({
      schema: {
        el: {
          type: 'text',
          label: 'El',
          columns: {
            label: 4,
            wrapper: 8,
          }
        },
      }
    }, {
      config: { columns: { container: 12, label: 12, wrapper: 12, } },
    })
    
    let el = form.vm.el$('el')

    expect(el.columnsClasses).toStrictEqual({
      container: ['vf-col-12'],
      innerContainer: ['vf-col-8'],
      label: ['vf-col-4'],
      wrapper: ['vf-col-8'],
    })
  })

  it('should merge label and field if defined', async () => {
     let form = createForm({
      schema: {
        el: {
          type: 'text',
          label: 'El',
          columns: {
            label: 4,
            wrapper: 8,
          }
        },
      }
    }, {
      config: { columns: { default: { container: 12, label: 12, wrapper: 12 }, lg: { label: 4, wrapper: 8 } } },
    })
    
    let el = form.vm.el$('el')

    expect(el.columnsClasses).toStrictEqual({
      container: ['vf-col-12'],
      innerContainer: ['vf-col-8', 'vf-col-lg-8'],
      label: ['vf-col-4', 'vf-col-lg-4'],
      wrapper: ['vf-col-8', 'vf-col-lg-8'],
    })
  })

  it('should set element breakpoint if breakpoint is integer', async () => {
     let form = createForm({
      schema: {
        el: {
          type: 'text',
          label: 'El',
          columns: {
            lg: 10,
            md: 8,
          }
        },
      }
    }, {
      config: { columns: { container: 12, label: 12, wrapper: 12, } },
    })
    
    let el = form.vm.el$('el')

    expect(el.columnsClasses).toStrictEqual({
      container: ['vf-col-12', 'vf-col-lg-10', 'vf-col-md-8'],
      innerContainer: ['vf-col-12'],
      label: ['vf-col-12'],
      wrapper: ['vf-col-12'],
    })
  })

  it('should merge element breakpoint if breakpoint is integer', async () => {
     let form = createForm({
      schema: {
        el: {
          type: 'text',
          label: 'El',
          columns: {
            default: 10,
            lg: 8,
          }
        },
      }
    }, {
      config: { columns: { default: { container: 12, label: 12, wrapper: 12, }, lg: 10, md: 8 } },
    })
    
    let el = form.vm.el$('el')

    expect(el.columnsClasses).toStrictEqual({
      container: ['vf-col-10', 'vf-col-lg-8', 'vf-col-md-8'],
      innerContainer: ['vf-col-12'],
      label: ['vf-col-12'],
      wrapper: ['vf-col-12'],
    })
  })

  it('should set element if breakpoint element is defined', async () => {
     let form = createForm({
      schema: {
        el: {
          type: 'text',
          label: 'El',
          columns: {
            md: {
              container: 8,
            }
          }
        },
      }
    }, {
      config: { columns: { container: 12, label: 12, wrapper: 12, } },
    })
    
    let el = form.vm.el$('el')

    expect(el.columnsClasses).toStrictEqual({
      container: ['vf-col-12', 'vf-col-md-8'],
      innerContainer: ['vf-col-12'],
      label: ['vf-col-12'],
      wrapper: ['vf-col-12'],
    })
  })

  it('should merge element if breakpoint element is defined', async () => {
     let form = createForm({
      schema: {
        el: {
          type: 'text',
          label: 'El',
          columns: {
            md: {
              container: 8,
            }
          }
        },
      }
    }, {
      config: { columns: { default: { container: 12, label: 12, wrapper: 12, }, lg: 10 } },
    })
    
    let el = form.vm.el$('el')

    expect(el.columnsClasses).toStrictEqual({
      container: ['vf-col-12', 'vf-col-lg-10', 'vf-col-md-8'],
      innerContainer: ['vf-col-12'],
      label: ['vf-col-12'],
      wrapper: ['vf-col-12'],
    })
  })

  it('should set label and field if their breakpoints are defined', async () => {
     let form = createForm({
      schema: {
        el: {
          type: 'text',
          label: 'El',
          columns: {
            md: {
              label: 4,
              wrapper: 8,
            }
          }
        },
      }
    }, {
      config: { columns: { container: 12, label: 12, wrapper: 12, } },
    })
    
    let el = form.vm.el$('el')

    expect(el.columnsClasses).toStrictEqual({
      container: ['vf-col-12'],
      innerContainer: ['vf-col-12', 'vf-col-md-8'],
      label: ['vf-col-12', 'vf-col-md-4'],
      wrapper: ['vf-col-12', 'vf-col-md-8'],
    })
  })

  it('should merge label and field if their breakpoints are defined', async () => {
     let form = createForm({
      schema: {
        el: {
          type: 'text',
          label: 'El',
          columns: {
            md: {
              label: 4,
              wrapper: 8,
            }
          }
        },
      }
    }, {
      config: { columns: { default: { container: 12, label: 12, wrapper: 12 }, lg: { label: 2, wrapper: 10 }, md: { label: 3, wrapper: 9 } } },
    })
    
    let el = form.vm.el$('el')

    expect(el.columnsClasses).toStrictEqual({
      container: ['vf-col-12'],
      innerContainer: ['vf-col-12', 'vf-col-lg-10', 'vf-col-md-8'],
      label: ['vf-col-12', 'vf-col-lg-2', 'vf-col-md-4'],
      wrapper: ['vf-col-12', 'vf-col-lg-10', 'vf-col-md-8'],
    })
  })

  it('should set all for breakpoints', async () => {
     let form = createForm({
      schema: {
        el: {
          type: 'text',
          label: 'El',
          columns: {
            default: {
              label: 4,
              wrapper: 8,
            },
            lg: {
              label: 2,
              wrapper: 10
            },
            md: {
              container: 6,
              label: 3,
              wrapper: 9
            },
          }
        },
      }
    }, {
      config: { columns: { container: 12, label: 12, wrapper: 12, } },
    })
    
    let el = form.vm.el$('el')

    expect(el.columnsClasses).toStrictEqual({
      container: ['vf-col-12', 'vf-col-md-6'],
      innerContainer: ['vf-col-8', 'vf-col-lg-10', 'vf-col-md-9'],
      label: ['vf-col-4', 'vf-col-lg-2', 'vf-col-md-3'],
      wrapper: ['vf-col-8', 'vf-col-lg-10', 'vf-col-md-9'],
    })
  })

  it('should merge all for breakpoints', async () => {
     let form = createForm({
      schema: {
        el: {
          type: 'text',
          label: 'El',
          columns: {
            default: {
              label: 4,
              wrapper: 8,
            },
            lg: {
              label: 2,
              wrapper: 10
            },
            md: {
              container: 6,
              label: 3,
              wrapper: 9
            },
          }
        },
      }
    }, {
      config: { columns: { default: { container: 12, label: 12, wrapper: 12 }, lg: { container: 12, label: 4, wrapper: 8 }, md: { label: 6, wrapper: 6 }, sm: { label: 12, wrapper: 12 } } },
    })
    
    let el = form.vm.el$('el')

    expect(el.columnsClasses).toStrictEqual({
      container: ['vf-col-12', 'vf-col-lg-12', 'vf-col-md-6'],
      innerContainer: ['vf-col-8', 'vf-col-lg-10', 'vf-col-md-9', 'vf-col-sm-12'],
      label: ['vf-col-4', 'vf-col-lg-2', 'vf-col-md-3', 'vf-col-sm-12'],
      wrapper: ['vf-col-8', 'vf-col-lg-10', 'vf-col-md-9', 'vf-col-sm-12'],
    })
  })

  it('should have default breakpoints', async () => {
     let form = createForm({
      schema: {
        el: {
          type: 'text',
          label: 'El',
        },
      }
    }, {
      config: { columns: {} },
    })
    
    let el = form.vm.el$('el')

    expect(el.columnsClasses).toStrictEqual({
      container: ['vf-col-12'],
      innerContainer: ['vf-col-12'],
      label: ['vf-col-12'],
      wrapper: ['vf-col-12'],
    })
  })

  it('should merge breakpoints from config presets', async () => {
     let form = createForm({
      schema: {
        el: {
          type: 'text',
          label: 'El',
        },
      }
    }, {
      config: {
        presets: {
          preset: {
            columns: {
              container: 1, label: 1, wrapper: 1
            },
          }
        },
        usePresets: ['preset'],
      },
    })
    
    let el = form.vm.el$('el')

    expect(el.columnsClasses).toStrictEqual({
      container: ['vf-col-1'],
      innerContainer: ['vf-col-11'],
      label: ['vf-col-1'],
      wrapper: ['vf-col-1'],
    })
  })

  it('should merge breakpoints from config', async () => {
     let form = createForm({
      schema: {
        el: {
          type: 'text',
          label: 'El',
        },
      }
    }, {
      config: {
        columns: {
          container: 2, label: 2, wrapper: 2
        },
        presets: {
          preset: {
            columns: {
              container: 1, label: 1, wrapper: 1
            },
          }
        },
        usePresets: ['preset'],
      },
    })
    
    let el = form.vm.el$('el')

    expect(el.columnsClasses).toStrictEqual({
      container: ['vf-col-2'],
      innerContainer: ['vf-col-10'],
      label: ['vf-col-2'],
      wrapper: ['vf-col-2'],
    })
  })

  it('should merge breakpoints from form presets', async () => {
     let form = createForm({
      schema: {
        el: {
          type: 'text',
          label: 'El',
        },
      },
      presets: ['preset2'],
    }, {
      config: {
        columns: {
          container: 2, label: 2, wrapper: 2
        },
        presets: {
          preset: {
            columns: {
              container: 1, label: 1, wrapper: 1
            },
          },
          preset2: {
            columns: {
              container: 3, label: 3, wrapper: 3
            },
          },
        },
        usePresets: ['preset'],
      },
    })
    
    let el = form.vm.el$('el')

    expect(el.columnsClasses).toStrictEqual({
      container: ['vf-col-3'],
      innerContainer: ['vf-col-9'],
      label: ['vf-col-3'],
      wrapper: ['vf-col-3'],
    })
  })

  it('should merge breakpoints from form', async () => {
     let form = createForm({
      schema: {
        el: {
          type: 'text',
          label: 'El',
        },
      },
      presets: ['preset2'],
      columns: {
        container: 4, label: 4, wrapper: 4
      },
    }, {
      config: {
        columns: {
          container: 2, label: 2, wrapper: 2
        },
        presets: {
          preset: {
            columns: {
              container: 1, label: 1, wrapper: 1
            },
          },
          preset2: {
            columns: {
              container: 3, label: 3, wrapper: 3
            },
          },
        },
        usePresets: ['preset'],
      },
    })
    
    let el = form.vm.el$('el')

    expect(el.columnsClasses).toStrictEqual({
      container: ['vf-col-4'],
      innerContainer: ['vf-col-8'],
      label: ['vf-col-4'],
      wrapper: ['vf-col-4'],
    })
  })

  it('should merge breakpoints from element presets', async () => {
     let form = createForm({
      schema: {
        el: {
          type: 'text',
          label: 'El',
          presets: ['preset3'],
        },
      },
      presets: ['preset2'],
      columns: {
        container: 4, label: 4, wrapper: 4
      },
    }, {
      config: {
        columns: {
          container: 2, label: 2, wrapper: 2
        },
        presets: {
          preset: {
            columns: {
              container: 1, label: 1, wrapper: 1
            },
          },
          preset2: {
            columns: {
              container: 3, label: 3, wrapper: 3
            },
          },
          preset3: {
            columns: {
              container: 5, label: 5, wrapper: 5
            },
          },
        },
        usePresets: ['preset'],
      },
    })
    
    let el = form.vm.el$('el')

    expect(el.columnsClasses).toStrictEqual({
      container: ['vf-col-5'],
      innerContainer: ['vf-col-7'],
      label: ['vf-col-5'],
      wrapper: ['vf-col-5'],
    })
  })

  it('should merge breakpoints from element', async () => {
     let form = createForm({
      schema: {
        el: {
          type: 'text',
          label: 'El',
          presets: ['preset3'],
          columns: {
            container: 6, label: 6, wrapper: 6
          },
        },
      },
      presets: ['preset2'],
      columns: {
        container: 4, label: 4, wrapper: 4
      },
    }, {
      config: {
        columns: {
          container: 2, label: 2, wrapper: 2
        },
        presets: {
          preset: {
            columns: {
              container: 1, label: 1, wrapper: 1
            },
          },
          preset2: {
            columns: {
              container: 3, label: 3, wrapper: 3
            },
          },
          preset3: {
            columns: {
              container: 5, label: 5, wrapper: 5
            },
          },
        },
        usePresets: ['preset'],
      },
    })
    
    let el = form.vm.el$('el')

    expect(el.columnsClasses).toStrictEqual({
      container: ['vf-col-6'],
      innerContainer: ['vf-col-6'],
      label: ['vf-col-6'],
      wrapper: ['vf-col-6'],
    })
  })

  it('should merge element breakpoints to form breakpoints', async () => {
     let form = createForm({
      columns: {
        container: { default: 12, lg: 12, md: 6 },
        label: { default: 2, lg: 2, md: 6 },
        wrapper: { default: 10, lg: 10, md: 6 },
      },
      schema: {
        el: {
          type: 'text',
          label: 'El',
          columns: {
            default: { container: 6, label: 6, wrapper: 6 },
            lg: { container: 6 }
          },
        },
      }
    }, {
      config: { columns: { container: 12, label: 12, wrapper: 12 } },
    })
    
    let el = form.vm.el$('el')

    expect(el.columnsClasses).toStrictEqual({
      container: ['vf-col-6', 'vf-col-lg-6', 'vf-col-md-6'],
      innerContainer: ['vf-col-6', 'vf-col-lg-10', 'vf-col-md-6'],
      label: ['vf-col-6', 'vf-col-lg-2', 'vf-col-md-6'],
      wrapper: ['vf-col-6', 'vf-col-lg-10', 'vf-col-md-6'],
    })
  })

  it('should merge element breakpoints to form breakpoints when does not have label', async () => {
    let form = createForm({
      columns: {
        container: { default: 12, lg: 12, md: 6 },
        label: { default: 2, lg: 2, md: 6, sm: 12 },
        wrapper: { default: 10, lg: 10, md: 6, sm: 12 },
      },
      schema: {
        el: {
          type: 'text',
          columns: {
            default: { container: 6, label: 6, wrapper: 6 },
            lg: { container: 6 }
          },
        },
      }
    }, {
      config: { columns: { container: 12, label: 12, wrapper: 12 } },
    })
    
    let el = form.vm.el$('el')

    expect(el.columnsClasses).toStrictEqual({
      container: ['vf-col-6', 'vf-col-lg-6', 'vf-col-md-6'],
      innerContainer: ['vf-col-12', 'vf-col-lg-12', 'vf-col-md-12', 'vf-col-sm-12'],
      label: ['vf-col-0', 'vf-col-lg-0', 'vf-col-md-0', 'vf-col-sm-0'],
      wrapper: ['vf-col-6', 'vf-col-lg-10', 'vf-col-md-6', 'vf-col-sm-12'],
    })
  })
})