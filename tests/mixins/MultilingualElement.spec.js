import { createLocalVue } from '@vue/test-utils'
import { createForm, findAllComponents } from 'test-helpers'

describe('Multilingual Element Mixin', () => {
  it('should set `model` according to current language', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      multilingual: true,
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        hu: {
          label: 'Hungarian',
          code: 'hu'
        },
      },
      schema: {
        name: {
          type: 't-text',
        }
      }
    })

    let text = findAllComponents(form, { name: 'TTextElement' }).at(0)

    text.get('input').setValue('en')

    let hu = findAllComponents(form, { name: 'FormLanguageSelectorTab' }).at(1)

    hu.get('a').trigger('click')

    text.get('input').setValue('hu')

    expect(text.vm.value).toStrictEqual({ en: 'en', hu: 'hu' })

    done()
  })

  it('should throw error for non-object `default` value', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    const originalConsoleError = console.error

    console.error = () => {}

    expect(() => {
      let form = createForm({
        multilingual: true,
        languages: {
          en: {
            label: 'English',
            code: 'en'
          },
          hu: {
            label: 'Hungarian',
            code: 'hu'
          },
        },
        schema: {
          name: {
            type: 't-text',
            default: 'en'
          }
        }
      })
    }).toThrowError()
    
    console.error = originalConsoleError

    done()
  })

  it('should set `default` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      multilingual: true,
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        hu: {
          label: 'Hungarian',
          code: 'hu'
        },
      },
      schema: {
        name: {
          type: 't-text',
          default: {
            en: 'en1',
            hu: 'hu1'
          }
        }
      }
    })

    let text = findAllComponents(form, { name: 'TTextElement' }).at(0)

    expect(text.vm.value).toStrictEqual({ en: 'en1', hu: 'hu1' })

    done()
  })

  it('should set `default` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      multilingual: true,
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        hu: {
          label: 'Hungarian',
          code: 'hu'
        },
      },
      schema: {
        name: {
          type: 't-text',
        }
      }
    })

    let text = findAllComponents(form, { name: 'TTextElement' }).at(0)

    text.vm.default = {
      en: 'en1',
      hu: 'hu1'
    }

    expect(form.vm.schema.name.default).toStrictEqual({ en: 'en1', hu: 'hu1' })

    done()
  })

  it('`isMultilingual` should be true', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      multilingual: true,
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        hu: {
          label: 'Hungarian',
          code: 'hu'
        },
      },
      schema: {
        name: {
          type: 't-text',
        }
      }
    })

    let text = findAllComponents(form, { name: 'TTextElement' }).at(0)

    expect(text.vm.isMultilingual).toBe(true)

    done()
  })

  it('should `load` value and keep it clean', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      multilingual: true,
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        hu: {
          label: 'Hungarian',
          code: 'hu'
        },
      },
      schema: {
        name: {
          type: 't-text',
        }
      }
    })

    let text = findAllComponents(form, { name: 'TTextElement' }).at(0)

    form.vm.load({
      name: {
        hu: 'HU',
        en: 'EN'
      }
    })
    
    expect(text.vm.value).toStrictEqual({
      hu: 'HU',
      en: 'EN'
    })

    expect(text.vm.dirty).toBe(false)

    done()   
  })

  it('should clear when `load` without data', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      multilingual: true,
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        hu: {
          label: 'Hungarian',
          code: 'hu'
        },
      },
      schema: {
        name: {
          type: 't-text',
          default: {
            hu: 'HU',
            en: 'EN'
          }
        }
      }
    })

    let text = findAllComponents(form, { name: 'TTextElement' }).at(0)

    text.vm.load({
      a: 1
    })
    
    expect(text.vm.value).toStrictEqual({
      hu: null,
      en: null
    })

    expect(text.vm.dirty).toBe(false)

    done()   
  })

  it('should throw error when not object passed to `load`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      multilingual: true,
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        hu: {
          label: 'Hungarian',
          code: 'hu'
        },
      },
      schema: {
        name: {
          type: 't-text',
          default: {
            hu: 'HU',
            en: 'EN'
          }
        }
      }
    })

    const originalConsoleError = console.error

    console.error = () => {}

    expect(() => {
      form.vm.load({
        name: 'asdf'
      })
    }).toThrowError()
    
    console.error = originalConsoleError

    done()   
  })

  it('should `update` value', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      multilingual: true,
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        hu: {
          label: 'Hungarian',
          code: 'hu'
        },
      },
      schema: {
        name: {
          type: 't-text',
        }
      }
    })

    let text = findAllComponents(form, { name: 'TTextElement' }).at(0)

    text.vm.update({
      hu: 'HU',
    })

    expect(text.vm.value).toStrictEqual({ hu: 'HU', en: null })

    done()   
  })

  it('should `reset` to default & reset validators', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      multilingual: true,
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        hu: {
          label: 'Hungarian',
          code: 'hu'
        },
      },
      schema: {
        name: {
          type: 't-text',
          default: {
            hu: 'HU',
            en: 'EN'
          }
        }
      }
    })

    let text = findAllComponents(form, { name: 'TTextElement' }).at(0)

    text.vm.update({
      hu: 'HU1',
      en: 'EN1'
    }, true)

    expect(text.vm.value).toStrictEqual({ hu: 'HU1', en: 'EN1' })
    expect(text.vm.validated).toBe(true)

    text.vm.reset()

    expect(text.vm.value).toStrictEqual({ hu: 'HU', en: 'EN' })
    expect(text.vm.validated).toBe(true)

    done()   
  })

  it('should `clear` value', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      multilingual: true,
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        hu: {
          label: 'Hungarian',
          code: 'hu'
        },
      },
      schema: {
        name: {
          type: 't-text',
          default: {
            hu: 'HU',
            en: 'EN'
          }
        }
      }
    })

    let text = findAllComponents(form, { name: 'TTextElement' }).at(0)

    text.vm.clear()

    expect(text.vm.value).toStrictEqual({ hu: null, en: null })
    expect(text.vm.validated).toBe(true)

    done()   
  })

  it('should fire change event on `keyup`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let onChangeMock = jest.fn()

    let form = createForm({
      multilingual: true,
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        hu: {
          label: 'Hungarian',
          code: 'hu'
        },
      },
      schema: {
        name: {
          type: 't-text',
          onChange: onChangeMock,
        }
      }
    })

    let text = findAllComponents(form, { name: 'TTextElement' }).at(0)

    expect(onChangeMock.mock.calls.length).toBe(0)

    text.get('input').setValue('aaa')
    text.get('input').trigger('keyup', 'aaa')
    
    expect(onChangeMock.mock.calls.length).toBe(1)
    expect(onChangeMock.mock.calls[0][0]).toStrictEqual({en:null,hu:null})
    expect(onChangeMock.mock.calls[0][1]).toStrictEqual({en:'aaa',hu:null})

    done()   
  })

  it('should not fire change event on `keyup` if readonly', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let onChangeMock = jest.fn()

    let form = createForm({
      multilingual: true,
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        hu: {
          label: 'Hungarian',
          code: 'hu'
        },
      },
      schema: {
        name: {
          type: 't-text',
          readonly: true,
          onChange: onChangeMock,
        }
      }
    })

    let text = findAllComponents(form, { name: 'TTextElement' }).at(0)

    expect(onChangeMock.mock.calls.length).toBe(0)

    text.get('input').setValue('aaa')
    text.get('input').trigger('keyup', 'aaa')
    
    expect(onChangeMock.mock.calls.length).toBe(0)

    done()   
  })

  it('should fire change event on `change`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let onChangeMock = jest.fn()

    let form = createForm({
      multilingual: true,
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        hu: {
          label: 'Hungarian',
          code: 'hu'
        },
      },
      schema: {
        name: {
          type: 't-text',
          onChange: onChangeMock,
        }
      }
    })

    let text = findAllComponents(form, { name: 'TTextElement' }).at(0)

    expect(onChangeMock.mock.calls.length).toBe(0)

    text.get('input').setValue('aaa')
    text.vm.handleChange()
    
    expect(onChangeMock.mock.calls.length).toBe(1)
    expect(onChangeMock.mock.calls[0][0]).toStrictEqual({en:null,hu:null})
    expect(onChangeMock.mock.calls[0][1]).toStrictEqual({en:'aaa',hu:null})

    done()   
  })

  it('should validate on `change`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let onChangeMock = jest.fn()

    let form = createForm({
      multilingual: true,
      validateOn: 'change',
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        hu: {
          label: 'Hungarian',
          code: 'hu'
        },
      },
      schema: {
        name: {
          type: 't-text',
          rules: 'required',
          onChange: onChangeMock,
        }
      }
    })

    let text = findAllComponents(form, { name: 'TTextElement' }).at(0)

    expect(onChangeMock.mock.calls.length).toBe(0)

    expect(text.vm.state.validated.en).toBe(false)

    text.get('input').setValue('aaa')
    text.vm.handleChange()
    
    expect(text.vm.state.validated.en).toBe(true)

    done()   
  })

  it('should not validate on `change` if listener returns false', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let onChangeMock = jest.fn(() => {
      return false
    })

    let form = createForm({
      multilingual: true,
      validateOn: 'change',
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        hu: {
          label: 'Hungarian',
          code: 'hu'
        },
      },
      schema: {
        name: {
          type: 't-text',
          rules: 'required',
          onChange: onChangeMock,
        }
      }
    })

    let text = findAllComponents(form, { name: 'TTextElement' }).at(0)

    expect(onChangeMock.mock.calls.length).toBe(0)

    expect(text.vm.state.validated.en).toBe(false)

    text.get('input').setValue('aaa')
    text.vm.handleChange()
    
    expect(text.vm.state.validated.en).toBe(false)

    done()   
  })
})