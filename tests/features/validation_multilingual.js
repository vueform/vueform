import flushPromises from 'flush-promises'
import { createForm } from 'test-helpers'
import { nextTick } from 'composition-api'

export { messageBag, } from './validation'

jest.useFakeTimers()

export const state = function (elementType, elementName, options) {
  it('should have `state` "dirty" and "validated" for each language', async () => {
    let form = createForm({
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
      },
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.state).toStrictEqual({
      dirty: {
        en: false,
        fr: false,
      },
      validated: {
        en: true,
        fr: true,
      },
    })
  })
}

export const validationRules = function (elementType, elementName, options) {
  it('should return empty object is `rules` are not defined', async () => {
    let form = createForm({
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
      },
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    
    expect(el.validationRules).toStrictEqual({})
  })

  it('should return same `rules` for each language', async () => {
    let form = createForm({
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
      },
      schema: {
        el: {
          type: elementType,
          rules: 'required'
        }
      }
    })

    let el = form.vm.el$('el')
    
    expect(el.validationRules).toStrictEqual({
      en: 'required',
      fr: 'required'
    })
  })

  it('should return different `rules` languages if rules is defined on a language level', async () => {
    let form = createForm({
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
      },
      schema: {
        el: {
          type: elementType,
          rules: {
            en: 'required',
          }
        }
      }
    })

    let el = form.vm.el$('el')
    
    expect(el.validationRules).toStrictEqual({
      en: 'required',
      fr: null,
    })
  })
}

export const dirty = function (elementType, elementName, options) {
  it('should be dirty if any of the language values is dirty', async () => {
    let form = createForm({
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
      },
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.dirty).toBe(false)

    el.dirt()

    expect(el.dirty).toBe(true)
  })
}

export const validated = function (elementType, elementName, options) {
  it('should be validated if all of the language values are validated', async () => {
    let form = createForm({
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
      },
      schema: {
        el: {
          type: elementType,
          rules: 'required',
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.validated).toBe(false)

    el.validateLanguage()

    await flushPromises()

    expect(el.validated).toBe(false)

    el.validate()

    await flushPromises()

    expect(el.validated).toBe(true)
  })
}

export const invalid = function (elementType, elementName, options) {
  it('should be invalid if any of the language values is invalid', async () => {
    let form = createForm({
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
      },
      schema: {
        el: {
          type: elementType,
          rules: 'required',
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.invalid).toBe(false)

    el.validateLanguage()

    await flushPromises()

    expect(el.invalid).toBe(true)
  })
}

export const pending = function (elementType, elementName, options) {
  it('should be pending if any of the language values is pending', async () => {
    let axiosPostMock = jest.fn(() => Promise.resolve({ data: {} }))

    let form = createForm({
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
      },
      schema: {
        el: {
          type: elementType,
          rules: 'unique:param'
        }
      }
    })

    let el = form.vm.el$('el')

    el.$laraform.services.axios.post = axiosPostMock

    el.validateLanguage()

    expect(el.pending).toBe(true)

    await flushPromises()

    expect(el.pending).toBe(false)
  })
}

export const debouncing = function (elementType, elementName, options) {
  it('should be `debouncing` if any validator is debouncing', async () => {
    let form = createForm({
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
      },
      schema: {
        el: {
          type: elementType,
          debounce: 1,
          rules: 'required',
        }
      }
    })

    let el = form.vm.el$('el')

    el.validateLanguage()

    expect(el.debouncing).toBe(true)

    await flushPromises()

    jest.advanceTimersByTime(1)

    expect(el.debouncing).toBe(false)      
  })
}

export const busy = function (elementType, elementName, options) {
  it('should be `busy` if pending', async () => {
    let axiosPostMock = jest.fn(() => Promise.resolve({ data: {} }))

    let form = createForm({
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
      },
      schema: {
        el: {
          type: elementType,
          rules: 'unique:param'
        }
      }
    })

    let el = form.vm.el$('el')

    el.$laraform.services.axios.post = axiosPostMock

    el.validateLanguage()

    expect(el.busy).toBe(true)

    await flushPromises()

    expect(el.busy).toBe(false)
  })

  it('should `busy` if debouncing', async () => {
    let form = createForm({
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
      },
      schema: {
        el: {
          type: elementType,
          debounce: 1,
          rules: 'required',
        }
      }
    })

    let el = form.vm.el$('el')

    el.validateLanguage()

    expect(el.busy).toBe(true)

    await flushPromises()

    jest.advanceTimersByTime(1)
    expect(el.busy).toBe(false)
  })
}

export const errors = function (elementType, elementName, options) {
  it('should collect errors from all languages with language code suffic', async () => {
    let form = createForm({
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
      },
      schema: {
        el: {
          type: elementType,
          rules: 'required|email',
          default: {
            en: null,
            fr: 'value'
          }
        }
      }
    })

    let el = form.vm.el$('el')

    el.validate()

    await flushPromises()

    expect(el.errors.length).toBe(3)
    expect(el.errors[0].substr(el.errors[0].length - 4)).toBe('(en)')
    expect(el.errors[1].substr(el.errors[1].length - 4)).toBe('(en)')
    expect(el.errors[2].substr(el.errors[2].length - 4)).toBe('(fr)')
  })
}

export const error = function (elementType, elementName, options) {
  it('should return the first `error` message for current language', async () => {
    let form = createForm({
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
      },
      schema: {
        el: {
          type: elementType,
          rules: 'required|email',
          default: {
            en: null,
            fr: 'value',
          }
        }
      }
    })

    let el = form.vm.el$('el')

    el.validate()

    await flushPromises()

    expect(el.error).toBe(el.Validators.en[0].message)
  })

  it('should return prepended `error` message for each languages', async () => {
    let form = createForm({
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
      },
      schema: {
        el: {
          type: elementType,
          rules: 'required|email',
          default: {
            en: null,
            fr: 'value',
          }
        }
      }
    })

    let el = form.vm.el$('el')

    el.validate()

    await flushPromises()

    el.messageBag.prepend('Error message')

    expect(el.error).toBe('Error message')

    el.form$.setLanguage('fr')

    await nextTick()

    expect(el.error).toBe('Error message')
  })
}

export const validate = function (elementType, elementName, options) {
  it('should `validate` all languages', async () => {
    let form = createForm({
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
      },
      schema: {
        el: {
          type: elementType,
          rules: 'required',
        }
      }
    })

    let el = form.vm.el$('el')

    el.validate()

    await flushPromises()

    expect(el.validated).toBe(true)
  })
}

export const validateLanguage = function (elementType, elementName, options) {
  it('should `validateLanguage` and set "validated" to "true"', async () => {
    let form = createForm({
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
      },
      schema: {
        el: {
          type: elementType,
          rules: 'required',
        }
      }
    })

    let el = form.vm.el$('el')

    el.validateLanguage('en')

    await flushPromises()

    expect(el.state.validated.en).toBe(true)
    expect(el.Validators.en[0].invalid).toBe(true)

    el.load({ en: 'value' })
    el.validateLanguage('en')

    await flushPromises()
    
    expect(el.Validators.en[0].invalid).toBe(false)
  })

  it('should not `validateLanguage` if has no "rules"', async () => {
    let form = createForm({
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
      },
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.validateLanguage('en')

    expect(el.state.validated.en).toBe(true)
    
    await flushPromises()

    expect(el.state.validated.en).toBe(true)
  })

  it('should not `validateLanguage` form validation is disabled', async () => {
    let form = createForm({
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
      },
      schema: {
        el: {
          type: elementType,
          rules: 'required',
        }
      }
    })

    let el = form.vm.el$('el')

    form.vm.disableValidation()

    el.validateLanguage('en')
    
    await flushPromises()

    expect(el.state.validated.en).toBe(false)
  })
}

export const resetValidators = function (elementType, elementName, options) {
  it('should `resetValidators` and set validated to "false" in each language', async () => {
    let form = createForm({
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
      },
      schema: {
        el: {
          type: elementType,
          rules: 'required',
        }
      }
    })

    let el = form.vm.el$('el')

    el.validate()

    await flushPromises()

    expect(el.validated).toBe(true)
    expect(el.invalid).toBe(true)

    el.resetValidators()

    expect(el.validated).toBe(false)
    expect(el.invalid).toBe(false)
  })
}

export const dirt = function (elementType, elementName, options) {
  it('should `dirt` in current language', async () => {
    let form = createForm({
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
      },
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.dirt()

    expect(el.state.dirty.en).toBe(true)
  })
}

export const clean = function (elementType, elementName, options) {
  it('should `dirt` in current language', async () => {
    let form = createForm({
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
      },
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.dirt()

    expect(el.state.dirty.en).toBe(true)

    el.clean()

    expect(el.state.dirty.en).toBe(false)
  })
}

export const Validators = function (elementType, elementName, options) {
  it('should set "validated" "false" only for language which has "rules"', async () => {
    let form = createForm({
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
      },
      schema: {
        el: {
          type: elementType,
          rules: {
            en: 'required'
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.state.validated).toStrictEqual({
      en: false,
      fr: true,
    })
  })

  it('should set the same validators for each language if rules is not an object', async () => {
    let form = createForm({
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
      },
      schema: {
        el: {
          type: elementType,
          rules: 'required|email'
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.Validators.en[0].name).toBe('required')
    expect(el.Validators.en[1].name).toBe('email')
    expect(el.Validators.fr[0].name).toBe('required')
    expect(el.Validators.fr[1].name).toBe('email')
  })

  it('should set the different validators for each language if rules is an object', async () => {
    let form = createForm({
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
      },
      schema: {
        el: {
          type: elementType,
          rules: {
            en: 'required|email',
            fr: 'min:5'
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.Validators.en[0].name).toBe('required')
    expect(el.Validators.en[1].name).toBe('email')
    expect(el.Validators.fr[0].name).toBe('min')
  })
}