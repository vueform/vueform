import { createLocalVue } from '@vue/test-utils'
import { createForm, createTrix } from './../../../src/utils/testHelpers'

describe('TTrix Element Mixin', () => {
  it('should `load` value and keep it clean', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createTrix({
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
          type: 't-trix',
        }
      }
    })

    let text = form.findAllComponents({ name: 'TTrixElement' }).at(0)

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

    let form = createTrix({
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
          type: 't-trix',
          default: {
            hu: 'HU',
            en: 'EN'
          }
        }
      }
    })

    let text = form.findAllComponents({ name: 'TTrixElement' }).at(0)

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

    let form = createTrix({
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
          type: 't-trix',
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

    let form = createTrix({
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
          type: 't-trix',
        }
      }
    })

    let text = form.findAllComponents({ name: 'TTrixElement' }).at(0)

    text.vm.update({
      hu: 'HU',
    })

    expect(text.vm.value).toStrictEqual({ hu: 'HU', en: null })

    done()   
  })

  it('should `reset` to default & reset validators', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createTrix({
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
          type: 't-trix',
          default: {
            hu: 'HU',
            en: 'EN'
          }
        }
      }
    })

    let text = form.findAllComponents({ name: 'TTrixElement' }).at(0)

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

    let form = createTrix({
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
          type: 't-trix',
          default: {
            hu: 'HU',
            en: 'EN'
          }
        }
      }
    })

    let text = form.findAllComponents({ name: 'TTrixElement' }).at(0)

    text.vm.clear()

    expect(text.vm.value).toStrictEqual({ hu: null, en: null })
    expect(text.vm.validated).toBe(true)

    done()   
  })

  it('should `refresh` when languages changes', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createTrix({
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
          type: 't-trix',
          default: {
            hu: 'HU',
            en: 'EN'
          }
        }
      }
    })

    let text = form.findAllComponents({ name: 'TTrixElement' }).at(0)

    let trixUpdateMock = jest.fn()

    text.vm.trix$ = {
      update: trixUpdateMock
    }

    expect(trixUpdateMock.mock.calls.length).toBe(0)

    form.vm.setLanguage('hu')

    LocalVue.nextTick(() => {
      expect(trixUpdateMock.mock.calls.length).toBe(1)

      done()
    })
  })
})