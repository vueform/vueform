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
      config: { columns: { element: 12, label: 12, field: 12, } },
    })
    
    let el = form.vm.el$('el')

    expect(el.columnsClasses).toStrictEqual({
      element: ['vf-col-8'],
      label: ['vf-col-12'],
      field: ['vf-col-12'],
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
      config: { columns: { default: { element: 12, label: 12, field: 12, }, lg: 10 } },
    })
    
    let el = form.vm.el$('el')

    expect(el.columnsClasses).toStrictEqual({
      element: ['vf-col-8', 'vf-col-lg-10'],
      label: ['vf-col-12'],
      field: ['vf-col-12'],
    })
  })

  it('should set element if element is defined', async () => {
     let form = createForm({
      schema: {
        el: {
          type: 'text',
          label: 'El',
          columns: {
            element: 8,
          }
        },
      }
    }, {
      config: { columns: { element: 12, label: 12, field: 12, } },
    })
    
    let el = form.vm.el$('el')

    expect(el.columnsClasses).toStrictEqual({
      element: ['vf-col-8'],
      label: ['vf-col-12'],
      field: ['vf-col-12'],
    })
  })

  it('should merge element if element is defined', async () => {
     let form = createForm({
      schema: {
        el: {
          type: 'text',
          label: 'El',
          columns: {
            element: 8,
          }
        },
      }
    }, {
      config: { columns: { default: { element: 12, label: 12, field: 12, }, lg: 10 } },
    })
    
    let el = form.vm.el$('el')

    expect(el.columnsClasses).toStrictEqual({
      element: ['vf-col-8', 'vf-col-lg-10'],
      label: ['vf-col-12'],
      field: ['vf-col-12'],
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
            field: 8,
          }
        },
      }
    }, {
      config: { columns: { element: 12, label: 12, field: 12, } },
    })
    
    let el = form.vm.el$('el')

    expect(el.columnsClasses).toStrictEqual({
      element: ['vf-col-12'],
      label: ['vf-col-4'],
      field: ['vf-col-8'],
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
            field: 8,
          }
        },
      }
    }, {
      config: { columns: { default: { element: 12, label: 12, field: 12 }, lg: { label: 4, field: 8 } } },
    })
    
    let el = form.vm.el$('el')

    expect(el.columnsClasses).toStrictEqual({
      element: ['vf-col-12'],
      label: ['vf-col-4', 'vf-col-lg-4'],
      field: ['vf-col-8', 'vf-col-lg-8'],
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
      config: { columns: { element: 12, label: 12, field: 12, } },
    })
    
    let el = form.vm.el$('el')

    expect(el.columnsClasses).toStrictEqual({
      element: ['vf-col-12', 'vf-col-lg-10', 'vf-col-md-8'],
      label: ['vf-col-12'],
      field: ['vf-col-12'],
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
      config: { columns: { default: { element: 12, label: 12, field: 12, }, lg: 10, md: 8 } },
    })
    
    let el = form.vm.el$('el')

    expect(el.columnsClasses).toStrictEqual({
      element: ['vf-col-10', 'vf-col-lg-8', 'vf-col-md-8'],
      label: ['vf-col-12'],
      field: ['vf-col-12'],
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
              element: 8,
            }
          }
        },
      }
    }, {
      config: { columns: { element: 12, label: 12, field: 12, } },
    })
    
    let el = form.vm.el$('el')

    expect(el.columnsClasses).toStrictEqual({
      element: ['vf-col-12', 'vf-col-md-8'],
      label: ['vf-col-12'],
      field: ['vf-col-12'],
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
              element: 8,
            }
          }
        },
      }
    }, {
      config: { columns: { default: { element: 12, label: 12, field: 12, }, lg: 10 } },
    })
    
    let el = form.vm.el$('el')

    expect(el.columnsClasses).toStrictEqual({
      element: ['vf-col-12', 'vf-col-lg-10', 'vf-col-md-8'],
      label: ['vf-col-12'],
      field: ['vf-col-12'],
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
              field: 8,
            }
          }
        },
      }
    }, {
      config: { columns: { element: 12, label: 12, field: 12, } },
    })
    
    let el = form.vm.el$('el')

    expect(el.columnsClasses).toStrictEqual({
      element: ['vf-col-12'],
      label: ['vf-col-12', 'vf-col-md-4'],
      field: ['vf-col-12', 'vf-col-md-8'],
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
              field: 8,
            }
          }
        },
      }
    }, {
      config: { columns: { default: { element: 12, label: 12, field: 12 }, lg: { label: 2, field: 10 }, md: { label: 3, field: 9 } } },
    })
    
    let el = form.vm.el$('el')

    expect(el.columnsClasses).toStrictEqual({
      element: ['vf-col-12'],
      label: ['vf-col-12', 'vf-col-lg-2', 'vf-col-md-4'],
      field: ['vf-col-12', 'vf-col-lg-10', 'vf-col-md-8'],
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
              field: 8,
            },
            lg: {
              label: 2,
              field: 10
            },
            md: {
              element: 6,
              label: 3,
              field: 9
            },
          }
        },
      }
    }, {
      config: { columns: { element: 12, label: 12, field: 12, } },
    })
    
    let el = form.vm.el$('el')

    expect(el.columnsClasses).toStrictEqual({
      element: ['vf-col-12', 'vf-col-md-6'],
      label: ['vf-col-4', 'vf-col-lg-2', 'vf-col-md-3'],
      field: ['vf-col-8', 'vf-col-lg-10', 'vf-col-md-9'],
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
              field: 8,
            },
            lg: {
              label: 2,
              field: 10
            },
            md: {
              element: 6,
              label: 3,
              field: 9
            },
          }
        },
      }
    }, {
      config: { columns: { default: { element: 12, label: 12, field: 12 }, lg: { element: 12, label: 4, field: 8 }, md: { label: 6, field: 6 }, sm: { label: 12, field: 12 } } },
    })
    
    let el = form.vm.el$('el')

    expect(el.columnsClasses).toStrictEqual({
      element: ['vf-col-12', 'vf-col-lg-12', 'vf-col-md-6'],
      label: ['vf-col-4', 'vf-col-lg-2', 'vf-col-md-3', 'vf-col-sm-12'],
      field: ['vf-col-8', 'vf-col-lg-10', 'vf-col-md-9', 'vf-col-sm-12'],
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
      element: ['vf-col-12'],
      label: ['vf-col-12'],
      field: ['vf-col-12'],
    })
  })

  it('should merge form breakpoints to config', async () => {
     let form = createForm({
      columns: {
        element: 12,
        label: 2,
        field: 10,
      },
      schema: {
        el: {
          type: 'text',
          label: 'El',
        },
      }
    }, {
      config: { columns: { element: 12, label: 12, field: 12 } },
    })
    
    let el = form.vm.el$('el')

    expect(el.columnsClasses).toStrictEqual({
      element: ['vf-col-12'],
      label: ['vf-col-2'],
      field: ['vf-col-10'],
    })
  })

  it('should merge element breakpoints to form breakpoints', async () => {
     let form = createForm({
      columns: {
        element: { default: 12, lg: 12, md: 6 },
        label: { default: 2, lg: 2, md: 6 },
        field: { default: 10, lg: 10, md: 6 },
      },
      schema: {
        el: {
          type: 'text',
          label: 'El',
          columns: {
            default: { element: 6, label: 6, field: 6 },
            lg: { element: 6 }
          },
        },
      }
    }, {
      config: { columns: { element: 12, label: 12, field: 12 } },
    })
    
    let el = form.vm.el$('el')

    expect(el.columnsClasses).toStrictEqual({
      element: ['vf-col-6', 'vf-col-lg-6', 'vf-col-md-6'],
      label: ['vf-col-6', 'vf-col-lg-2', 'vf-col-md-6'],
      field: ['vf-col-6', 'vf-col-lg-10', 'vf-col-md-6'],
    })
  })

  it('should merge element breakpoints to form breakpoints when does not have label', async () => {
     let form = createForm({
      columns: {
        element: { default: 12, lg: 12, md: 6 },
        label: { default: 2, lg: 2, md: 6, sm: 12 },
        field: { default: 10, lg: 10, md: 6, sm: 12 },
      },
      schema: {
        el: {
          type: 'text',
          columns: {
            default: { element: 6, label: 6, field: 6 },
            lg: { element: 6 }
          },
        },
      }
    }, {
      config: { columns: { element: 12, label: 12, field: 12 } },
    })
    
    let el = form.vm.el$('el')

    expect(el.columnsClasses).toStrictEqual({
      element: ['vf-col-6', 'vf-col-lg-6', 'vf-col-md-6'],
      label: ['vf-col-0', 'vf-col-lg-0', 'vf-col-md-0', 'vf-col-sm-0'],
      field: ['vf-col-12', 'vf-col-lg-12', 'vf-col-md-12', 'vf-col-sm-12'],
    })
  })
})