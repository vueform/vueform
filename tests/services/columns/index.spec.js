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

  it('should merge form breakpoints to config', async () => {
     let form = createForm({
      columns: {
        container: 12,
        label: 2,
        wrapper: 10,
      },
      schema: {
        el: {
          type: 'text',
          label: 'El',
        },
      }
    }, {
      config: { columns: { container: 12, label: 12, wrapper: 12 } },
    })
    
    let el = form.vm.el$('el')

    expect(el.columnsClasses).toStrictEqual({
      container: ['vf-col-12'],
      innerContainer: ['vf-col-10'],
      label: ['vf-col-2'],
      wrapper: ['vf-col-10'],
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
      wrapper: ['vf-col-12', 'vf-col-lg-12', 'vf-col-md-12', 'vf-col-sm-12'],
    })
  })
})