import { createLocalVue } from '@vue/test-utils'
import { createForm, findAllComponents } from 'test-helpers'

jest.mock("axios", () => ({
  get: () => Promise.resolve({ data: 'value' }),
  post: () => Promise.resolve({ data: 'value' }),
}))

let setLanguage = function(code, form) {
  _.each(findAllComponents(form, { name: 'FormLanguage' }).wrappers, (tab$) => {
    if (tab$.vm.code == code) {
      tab$.get('a').trigger('click')
    }
  })
}

describe('Multilingual Validation Mixin', () => {
  it('should be `dirty` if any language is changed', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      multilingual: true,
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
        es: {
          label: 'Spanish',
          code: 'es'
        },
      },
      schema: {
        name: {
          type: 't-text',
        }
      }
    })

    let text = findAllComponents(form, { name: 'TTextElement' }).at(0)

    expect(text.vm.dirty).toBe(false)

    text.get('input').setValue('en')

    LocalVue.nextTick(() => {
      expect(text.vm.dirty).toBe(true)

      done()
    })
  })

  it('should not be `dirty` if no language is changed', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      multilingual: true,
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
        es: {
          label: 'Spanish',
          code: 'es'
        },
      },
      schema: {
        name: {
          type: 't-text',
        }
      }
    })

    let text = findAllComponents(form, { name: 'TTextElement' }).at(0)

    expect(text.vm.dirty).toBe(false)

    LocalVue.nextTick(() => {
      expect(text.vm.dirty).toBe(false)

      done()
    })
  })

  it('should be `validated` if all languages validated', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      multilingual: true,
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
        es: {
          label: 'Spanish',
          code: 'es'
        },
      },
      schema: {
        name: {
          type: 't-text',
          rules: 'required'
        }
      }
    })

    let text = findAllComponents(form, { name: 'TTextElement' }).at(0)

    expect(text.vm.validated).toBe(false)

    text.vm.validate()
      
    expect(text.vm.validated).toBe(true)

    done()
  })

  it('should not be `validated` if any language is not validated', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      multilingual: true,
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
        es: {
          label: 'Spanish',
          code: 'es'
        },
      },
      schema: {
        name: {
          type: 't-text',
          rules: 'required'
        }
      }
    })

    let text = findAllComponents(form, { name: 'TTextElement' }).at(0)

    expect(text.vm.validated).toBe(false)

    text.get('input').trigger('keyup')

    expect(text.vm.validated).toBe(false)

    setLanguage('fr', form)
    text.get('input').trigger('keyup')

    expect(text.vm.validated).toBe(false)

    setLanguage('es', form)
    text.get('input').trigger('keyup')

    expect(text.vm.validated).toBe(true)

    done()
  })

  it('should be `invalid` if any language is invalid', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      multilingual: true,
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
        es: {
          label: 'Spanish',
          code: 'es'
        },
      },
      schema: {
        name: {
          type: 't-text',
          rules: 'required'
        }
      }
    })

    let text = findAllComponents(form, { name: 'TTextElement' }).at(0)

    expect(text.vm.invalid).toBe(false)

    text.get('input').trigger('keyup')

    expect(text.vm.invalid).toBe(true)

    done()
  })

  it('should not be `invalid` if no language is invalid', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      multilingual: true,
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
        es: {
          label: 'Spanish',
          code: 'es'
        },
      },
      schema: {
        name: {
          type: 't-text',
          rules: 'required'
        }
      }
    })

    let text = findAllComponents(form, { name: 'TTextElement' }).at(0)

    expect(text.vm.invalid).toBe(false)

    text.get('input').setValue('en')
    text.get('input').trigger('keyup')

    expect(text.vm.invalid).toBe(false)

    done()
  })

  it('should be `pending` if any language is pending', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      multilingual: true,
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
        es: {
          label: 'Spanish',
          code: 'es'
        },
      },
      schema: {
        name: {
          type: 't-text',
          rules: 'unique'
        }
      }
    })

    let text = findAllComponents(form, { name: 'TTextElement' }).at(0)

    expect(text.vm.pending).toBe(false)

    text.get('input').trigger('keyup')

    expect(text.vm.pending).toBe(true)

    done()
  })

  it('should not be `pending` if no language is pending', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      multilingual: true,
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
        es: {
          label: 'Spanish',
          code: 'es'
        },
      },
      schema: {
        name: {
          type: 't-text',
          rules: 'unique'
        }
      }
    })

    let text = findAllComponents(form, { name: 'TTextElement' }).at(0)

    expect(text.vm.pending).toBe(false)

    done()
  })

  it('should be `debouncing` if any language is debouncing', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      multilingual: true,
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
        es: {
          label: 'Spanish',
          code: 'es'
        },
      },
      schema: {
        name: {
          type: 't-text',
          rules: 'required:debounce=1000'
        }
      }
    })

    let text = findAllComponents(form, { name: 'TTextElement' }).at(0)

    expect(text.vm.debouncing).toBe(false)

    text.get('input').trigger('keyup')

    expect(text.vm.debouncing).toBe(true)

    done()
  })

  it('should not be `debouncing` if no language is debouncing', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      multilingual: true,
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
        es: {
          label: 'Spanish',
          code: 'es'
        },
      },
      schema: {
        name: {
          type: 't-text',
          rules: 'required:debounce=1000'
        }
      }
    })

    let text = findAllComponents(form, { name: 'TTextElement' }).at(0)

    expect(text.vm.debouncing).toBe(false)

    done()
  })

  it('should be `busy` if pending', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      multilingual: true,
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
        es: {
          label: 'Spanish',
          code: 'es'
        },
      },
      schema: {
        name: {
          type: 't-text',
          rules: 'unique'
        }
      }
    })

    let text = findAllComponents(form, { name: 'TTextElement' }).at(0)

    expect(text.vm.busy).toBe(false)

    text.get('input').trigger('keyup')

    expect(text.vm.busy).toBe(true)

    done()
  })

  it('should be `busy` if debouncing', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      multilingual: true,
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
        es: {
          label: 'Spanish',
          code: 'es'
        },
      },
      schema: {
        name: {
          type: 't-text',
          rules: 'required:debounce=1000'
        }
      }
    })

    let text = findAllComponents(form, { name: 'TTextElement' }).at(0)

    expect(text.vm.busy).toBe(false)

    text.get('input').trigger('keyup')

    expect(text.vm.busy).toBe(true)

    done()
  })

  it('should have empty object as `rules` if no rules provided', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      multilingual: true,
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
        es: {
          label: 'Spanish',
          code: 'es'
        },
      },
      schema: {
        name: {
          type: 't-text',
        }
      }
    })

    let text = findAllComponents(form, { name: 'TTextElement' }).at(0)

    expect(text.vm.rules).toStrictEqual({})

    done()
  })

  it('should have validators for each language according to `rules`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      multilingual: true,
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
        es: {
          label: 'Spanish',
          code: 'es'
        },
      },
      schema: {
        name: {
          type: 't-text',
          rules: 'required'
        }
      }
    })

    let text = findAllComponents(form, { name: 'TTextElement' }).at(0)

    expect(text.vm.Validators.en.length).toBe(1)
    expect(text.vm.Validators.en[0].name).toBe('required')
    expect(text.vm.Validators.fr.length).toBe(1)
    expect(text.vm.Validators.fr[0].name).toBe('required')
    expect(text.vm.Validators.es.length).toBe(1)
    expect(text.vm.Validators.es[0].name).toBe('required')

    done()
  })

  it('should have different validators for languages if `rules` is an object', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      multilingual: true,
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
        es: {
          label: 'Spanish',
          code: 'es'
        },
      },
      schema: {
        name: {
          type: 't-text',
          rules: {
            en: 'required',
            fr: 'email',
            es: 'max:2'
          }
        }
      }
    })

    let text = findAllComponents(form, { name: 'TTextElement' }).at(0)

    expect(text.vm.Validators.en.length).toBe(1)
    expect(text.vm.Validators.en[0].name).toBe('required')
    expect(text.vm.Validators.fr.length).toBe(1)
    expect(text.vm.Validators.fr[0].name).toBe('email')
    expect(text.vm.Validators.es.length).toBe(1)
    expect(text.vm.Validators.es[0].name).toBe('max')

    done()
  })

  it('should not add validators for a language if `rules` is an object but language does not exist', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      multilingual: true,
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
        es: {
          label: 'Spanish',
          code: 'es'
        },
      },
      schema: {
        name: {
          type: 't-text',
          rules: {
            en: 'required',
          }
        }
      }
    })

    let text = findAllComponents(form, { name: 'TTextElement' }).at(0)

    expect(text.vm.Validators.en.length).toBe(1)
    expect(text.vm.Validators.en[0].name).toBe('required')
    expect(text.vm.Validators.fr).toBeFalsy()
    expect(text.vm.Validators.es).toBeFalsy()

    done()
  })

  it('should collect `errors` from all languages', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      multilingual: true,
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
        es: {
          label: 'Spanish',
          code: 'es'
        },
      },
      schema: {
        name: {
          type: 't-text',
          rules: 'required'
        }
      }
    })

    let text = findAllComponents(form, { name: 'TTextElement' }).at(0)

    text.vm.validate()

    expect(text.vm.errors.length).toBe(3)
    done()
  })

  it('should return the first `error` of currently selected language', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      multilingual: true,
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
        es: {
          label: 'Spanish',
          code: 'es'
        },
      },
      schema: {
        name: {
          type: 't-text',
          rules: 'required'
        }
      }
    })

    let text = findAllComponents(form, { name: 'TTextElement' }).at(0)

    text.get('input').trigger('keyup')
    expect(text.vm.error).toBe(text.vm.Validators.en[0].message)

    done()
  })

  it('should prepend `error`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      multilingual: true,
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
        es: {
          label: 'Spanish',
          code: 'es'
        },
      },
      schema: {
        name: {
          type: 't-text',
          rules: 'required'
        }
      }
    })

    let text = findAllComponents(form, { name: 'TTextElement' }).at(0)

    text.get('input').trigger('keyup')

    text.vm.messageBag.prepend('aaa')

    expect(text.vm.error).toBe('aaa')

    done()
  })

  it('should append `error`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      multilingual: true,
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
        es: {
          label: 'Spanish',
          code: 'es'
        },
      },
      schema: {
        name: {
          type: 't-text',
          rules: 'required'
        }
      }
    })

    let text = findAllComponents(form, { name: 'TTextElement' }).at(0)

    text.get('input').trigger('keyup')
    text.vm.messageBag.append('aaa')

    expect(text.vm.error).toBe(text.vm.Validators.en[0].message)

    text.get('input').setValue('a')
    text.get('input').trigger('keyup')

    expect(text.vm.error).toBe('aaa')

    done()
  })

  it('should `validate` all languages', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      multilingual: true,
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
        es: {
          label: 'Spanish',
          code: 'es'
        },
      },
      schema: {
        name: {
          type: 't-text',
          rules: 'required'
        }
      }
    })

    let text = findAllComponents(form, { name: 'TTextElement' }).at(0)

    setLanguage('en', form)
    expect(text.vm.validated).toBe(false)

    setLanguage('fr', form)
    expect(text.vm.validated).toBe(false)

    setLanguage('es', form)
    expect(text.vm.validated).toBe(false)

    text.vm.validate()

    setLanguage('en', form)
    expect(text.vm.validated).toBe(true)

    setLanguage('fr', form)
    expect(text.vm.validated).toBe(true)

    setLanguage('es', form)
    expect(text.vm.validated).toBe(true)

    done()
  })

  it('should `validateLanguage` not validate if form validation is turned off', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      multilingual: true,
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
        es: {
          label: 'Spanish',
          code: 'es'
        },
      },
      schema: {
        name: {
          type: 't-text',
          rules: 'required'
        }
      }
    })

    let text = findAllComponents(form, { name: 'TTextElement' }).at(0)

    expect(text.vm.validated).toBe(false)

    form.vm.disableValidation()

    text.vm.validateLanguage()

    expect(text.vm.validated).toBe(false)

    done()
  })

  it('should `validateLanguage` not validate if rules does not exist', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      multilingual: true,
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
        es: {
          label: 'Spanish',
          code: 'es'
        },
      },
      schema: {
        name: {
          type: 't-text',
        }
      }
    })

    let text = findAllComponents(form, { name: 'TTextElement' }).at(0)

    expect(text.vm.validated).toBe(true)

    text.vm.validateLanguage()
    
    expect(text.vm.validated).toBe(true)

    done()
  })

  it('should `validateLanguage` validate the current language if no language is passed as a parameter', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      multilingual: true,
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
        es: {
          label: 'Spanish',
          code: 'es'
        },
      },
      schema: {
        name: {
          type: 't-text',
          rules: 'required'
        }
      }
    })

    let text = findAllComponents(form, { name: 'TTextElement' }).at(0)

    expect(text.vm.validated).toBe(false)

    setLanguage('en', form)
    text.vm.validateLanguage()

    expect(text.vm.state.validated.en).toBe(true)

    done()
  })

  it('should `validateLanguage` validate only the language passed as a parameter', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      multilingual: true,
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
        es: {
          label: 'Spanish',
          code: 'es'
        },
      },
      schema: {
        name: {
          type: 't-text',
          rules: 'required'
        }
      }
    })

    let text = findAllComponents(form, { name: 'TTextElement' }).at(0)

    expect(text.vm.validated).toBe(false)

    text.vm.validateLanguage('es')

    expect(text.vm.state.validated.en).toBe(false)
    expect(text.vm.state.validated.fr).toBe(false)
    expect(text.vm.state.validated.es).toBe(true)

    done()
  })

  it('should `dirt` current language', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      multilingual: true,
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
        es: {
          label: 'Spanish',
          code: 'es'
        },
      },
      schema: {
        name: {
          type: 't-text',
          rules: 'required'
        }
      }
    })

    let text = findAllComponents(form, { name: 'TTextElement' }).at(0)

    setLanguage('en', form)
    text.vm.dirt()

    expect(text.vm.state.dirty.en).toBe(true)
    expect(text.vm.state.dirty.fr).toBe(false)
    expect(text.vm.state.dirty.es).toBe(false)

    done()
  })

  it('should `clean` current language', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      multilingual: true,
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
        es: {
          label: 'Spanish',
          code: 'es'
        },
      },
      schema: {
        name: {
          type: 't-text',
          rules: 'required'
        }
      }
    })

    let text = findAllComponents(form, { name: 'TTextElement' }).at(0)

    setLanguage('en', form)
    text.vm.dirt()

    setLanguage('fr', form)
    text.vm.dirt()

    setLanguage('es', form)
    text.vm.dirt()

    setLanguage('en', form)
    text.vm.clean()

    expect(text.vm.state.dirty.en).toBe(false)
    expect(text.vm.state.dirty.fr).toBe(true)
    expect(text.vm.state.dirty.es).toBe(true)

    done()
  })

  it('should `resetValidators` in all languages', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      multilingual: true,
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
        es: {
          label: 'Spanish',
          code: 'es'
        },
      },
      schema: {
        name: {
          type: 't-text',
          rules: 'required'
        }
      }
    })

    let text = findAllComponents(form, { name: 'TTextElement' }).at(0)

    setLanguage('en', form)
    text.vm.validate()
    setLanguage('fr', form)
    text.vm.validate()
    setLanguage('es', form)
    text.vm.validate()

    setLanguage('en', form)
    text.vm.resetValidators()

    expect(text.vm.state.dirty.en).toBe(false)
    expect(text.vm.state.validated.en).toBe(false)
    expect(_.some(text.vm.Validators.en, { invalid: true })).toBe(false)

    expect(text.vm.state.dirty.fr).toBe(false)
    expect(text.vm.state.validated.fr).toBe(false)
    expect(_.some(text.vm.Validators.fr, { invalid: true })).toBe(false)

    expect(text.vm.state.dirty.es).toBe(false)
    expect(text.vm.state.validated.es).toBe(false)
    expect(_.some(text.vm.Validators.es, { invalid: true })).toBe(false)

    done()
  })

  it('should not be `dirty` by default', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      multilingual: true,
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
        es: {
          label: 'Spanish',
          code: 'es'
        },
      },
      schema: {
        name: {
          type: 't-text',
          rules: 'required'
        }
      }
    })

    let text = findAllComponents(form, { name: 'TTextElement' }).at(0)

    expect(text.vm.dirty).toBe(false)

    done()
  })

  it('should be `validated` by default if no rules are provided', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      multilingual: true,
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
        es: {
          label: 'Spanish',
          code: 'es'
        },
      },
      schema: {
        name: {
          type: 't-text',
        }
      }
    })

    let text = findAllComponents(form, { name: 'TTextElement' }).at(0)

    expect(text.vm.validated).toBe(true)

    done()
  })

  it('should not be `validated` by default if rules are provided', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      multilingual: true,
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
        es: {
          label: 'Spanish',
          code: 'es'
        },
      },
      schema: {
        name: {
          type: 't-text',
          rules: 'required'
        }
      }
    })

    let text = findAllComponents(form, { name: 'TTextElement' }).at(0)

    expect(text.vm.validated).toBe(false)

    done()
  })
})