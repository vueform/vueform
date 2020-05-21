import { createForm } from './../../utils/testHelpers'
import { mergeComponentClasses } from './../../utils/mergeClasses'
import defaultTheme from './../../themes/default'

describe('Laraform component', () => {
  it('should render text element', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text'
        }
      }
    })

    expect(form.findComponent({ name: 'TextElement' }).exists()).toBe(true)
  })
})

describe('selectedTheme', () => {
  it('should return what is defined at config', () => {
    let form = createForm({}, {
      config: {
        themes: {
          default: defaultTheme,
        },
        theme: 'default'
      }
    })

    expect(form.vm.selectedTheme).toMatchObject(defaultTheme)
  })

  it('should return what is defined at form prop', () => {
    let customTheme = Object.assign({}, defaultTheme, {
      a: 'b'
    })

    let form = createForm({}, {
      config: {
        themes: {
          custom: customTheme,
          default: defaultTheme,
        },
        theme: 'default'
      },
      propsData: {
        form: {
          theme: 'custom'
        }
      }
    })

    expect(form.vm.selectedTheme).toMatchObject(customTheme)
  })

  it('should return what is defined at form data', () => {
    let customTheme = Object.assign({}, defaultTheme, {
      a: 'b'
    })

    let form = createForm({
      theme: 'custom'
    }, {
      config: {
        themes: {
          custom: customTheme,
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

    expect(form.vm.selectedTheme).toMatchObject(customTheme)
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