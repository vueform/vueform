import { createForm } from './../../utils/testHelpers'
import { mergeComponentClasses } from './../../utils/mergeClasses'
import defaultTheme from './../../themes/default'
import bootstrapTheme from './../../themes/bootstrap'

describe('Laraform component', () => {
  it('should render element from schema', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text'
        }
      }
    })

    expect(form.findComponent({ name: 'TextElement' }).exists()).toBe(true)
  })

  it('should set class from `class` data', () => {
    let form = createForm({
      class: 'a'
    })
    
    expect(form.classes()).toContain('a')
  })

  it('should set class from `class` form prop', () => {
    let form = createForm({}, {
      propsData: {
        form: {
          class: 'a'
        }
      }
    })

    expect(form.classes()).toContain('a')
  })

  it('should set class from `class` data even if form prop is present', () => {
    let form = createForm({
      class: 'a'
    }, {
      propsData: {
        form: {
          class: 'b'
        }
      }
    })

    expect(form.classes()).toContain('a')
    expect(form.classes()).not.toContain('b')
  })
})

describe('Selecting theme', () => {
  it('should select what is defined in config', () => {
    let form = createForm({}, {
      config: {
        themes: {
          default: defaultTheme,
        },
        theme: 'default'
      }
    })

    let LaraformClasses = defaultTheme.components.Laraform.data().defaultClasses

    expect(form.classes()).toMatchObject([LaraformClasses.form])
  })

  it('should select what is defined in form prop', () => {
    let form = createForm({}, {
      config: {
        themes: {
          bootstrap: bootstrapTheme,
          default: defaultTheme,
        },
        theme: 'default'
      },
      propsData: {
        form: {
          theme: 'bootstrap'
        }
      }
    })

    let LaraformClasses = bootstrapTheme.components.Laraform.data().defaultClasses

    expect(form.classes()).toMatchObject([LaraformClasses.form])
  })

  it('should select what is defined in form data', () => {
    let form = createForm({
      theme: 'bootstrap'
    }, {
      config: {
        themes: {
          bootstrap: bootstrapTheme,
          default: defaultTheme,
        },
        theme: 'default'
      }
    }, {
      propsData: {
        form: {
          theme: 'default'
        }
      }
    })

    let LaraformClasses = bootstrapTheme.components.Laraform.data().defaultClasses

    expect(form.classes()).toMatchObject([LaraformClasses.form])
  })
})

describe('Theme classes', () => {
  it('should use defaults if otherwise set', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text'
        }
      }
    })

    let BaseElementLayout = form.findComponent({ name: 'BaseElementLayout' })

    expect(BaseElementLayout.vm.classes).toMatchObject(BaseElementLayout.vm.defaultClasses)
  })

  it('should overwrite if `classes` defined on form level', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text'
        }
      },
      classes: {
        BaseElementLayout: {
          container: 'a'
        }
      }
    })

    let BaseElementLayout = form.findComponent({ name: 'BaseElementLayout' })

    expect(BaseElementLayout.vm.classes.container).toBe('a')
  })

  it('should add if `addClasses` defined on form level', () => {
    let addClasses = {
      container: 'a',
      b: 'c'
    }

    let form = createForm({
      schema: {
        name: {
          type: 'text'
        }
      },
      addClasses: {
        BaseElementLayout: addClasses
      }
    })

    let BaseElementLayout = form.findComponent({ name: 'BaseElementLayout' })
    
    expect(BaseElementLayout.vm.classes).toMatchObject(mergeComponentClasses(
      BaseElementLayout.vm.defaultClasses,
      addClasses,
    ))
  })

  it('should overwrite and add if `classes` and `addClasses` defined on form level', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text'
        }
      },
      classes: {
        BaseElementLayout: {
          container: 'a'
        }
      },
      addClasses: {
        BaseElementLayout: {
          container: 'b',
        }
      }
    })

    let BaseElementLayout = form.findComponent({ name: 'BaseElementLayout' })
    
    expect(BaseElementLayout.vm.classes.container).toBe('a b')
  })

  it('should overwrite if `classes` defined on element level', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          classes: {
            BaseElementLayout: {
              container: 'a'
            }
          }
        }
      },
    })

    let BaseElementLayout = form.findComponent({ name: 'BaseElementLayout' })

    expect(BaseElementLayout.vm.classes.container).toBe('a')
  })

  it('should add if `addClasses` defined on element level', () => {
    let addClasses = {
      container: 'a',
      b: 'c'
    }

    let form = createForm({
      schema: {
        name: {
          type: 'text',
          addClasses: {
            BaseElementLayout: addClasses
          }
        }
      }
    })

    let BaseElementLayout = form.findComponent({ name: 'BaseElementLayout' })
    
    expect(BaseElementLayout.vm.classes).toMatchObject(mergeComponentClasses(
      BaseElementLayout.vm.defaultClasses,
      addClasses,
    ))
  })

  it('should overwrite and add if `classes` and `addClasses` defined on element level', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          classes: {
            BaseElementLayout: {
              container: 'a'
            }
          },
          addClasses: {
            BaseElementLayout: {
              container: 'b',
            }
          }
        },
      },
    })

    let BaseElementLayout = form.findComponent({ name: 'BaseElementLayout' })
    
    expect(BaseElementLayout.vm.classes.container).toBe('a b')
  })

  it('should overwrite with element\'s `classes` if defined on form and element level', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          classes: {
            BaseElementLayout: {
              container: 'b'
            }
          }
        }
      },
      classes: {
        BaseElementLayout: {
          container: 'a'
        }
      }
    })

    let BaseElementLayout = form.findComponent({ name: 'BaseElementLayout' })

    expect(BaseElementLayout.vm.classes.container).toBe('b')
  })

  it('should not add if `classes` defined on both level and `addClasses` defined on form level', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          classes: {
            BaseElementLayout: {
              container: 'b'
            }
          }
        }
      },
      classes: {
        BaseElementLayout: {
          container: 'a'
        }
      },
      addClasses: {
        BaseElementLayout: {
          container: 'c'
        }
      },
    })

    let BaseElementLayout = form.findComponent({ name: 'BaseElementLayout' })

    expect(BaseElementLayout.vm.classes.container).toBe('b')
  })

  it('should add if `classes` defined on both level and `addClasses` defined on element level', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          classes: {
            BaseElementLayout: {
              container: 'b'
            }
          },
          addClasses: {
            BaseElementLayout: {
              container: 'c'
            }
          },
        }
      },
      classes: {
        BaseElementLayout: {
          container: 'a'
        }
      },
    })

    let BaseElementLayout = form.findComponent({ name: 'BaseElementLayout' })

    expect(BaseElementLayout.vm.classes.container).toBe('b c')
  })

  it('should add if `addClasses` defined on both level', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          addClasses: {
            BaseElementLayout: {
              container: 'b'
            }
          },
        }
      },
      addClasses: {
        BaseElementLayout: {
          container: 'a'
        }
      },
    })

    let BaseElementLayout = form.findComponent({ name: 'BaseElementLayout' })

    expect(BaseElementLayout.vm.classes.container).toBe(BaseElementLayout.vm.defaultClasses.container + ' a b')
  })

  it('should add only element\'s classes if `classes` and `addClasses` defined on both level', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          classes: {
            BaseElementLayout: {
              container: 'b'
            }
          },
          addClasses: {
            BaseElementLayout: {
              container: 'd'
            }
          },
        }
      },
      classes: {
        BaseElementLayout: {
          container: 'a'
        }
      },
      addClasses: {
        BaseElementLayout: {
          container: 'c'
        }
      },
    })

    let BaseElementLayout = form.findComponent({ name: 'BaseElementLayout' })

    expect(BaseElementLayout.vm.classes.container).toBe('b d')
  })
})