import { createForm, findAllComponents } from 'test-helpers'
import Validator from './../../../src/services/validation/validator'
import en from './../../../src/locales/en'
import flushPromises from 'flush-promises'
import { nextTick } from 'composition-api'

jest.useFakeTimers()

jest.mock("axios", () => ({
  get: () => Promise.resolve({ data: 'value' }),
  post: () => Promise.resolve({ data: 'value' }),
  request: () => Promise.resolve({ data: 'value' }),
  interceptors: {
    response: {
      use: () => {},
    }
  }
}))

let Uppercase = class extends Validator {
  get defaultMessage() {
    return 'Should only contain uppercase letters'
  }

  check(value) {
    return value.toUpperCase(value) === value
  }
}

describe('Validation Service', () => {
  it('should add validators separated by pipes in `rules`', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required|email'
        }
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    expect(a.vm.Validators[0].name).toBe('required')
    expect(a.vm.Validators[1].name).toBe('email')
  })

  it('should add validators from array of `rules`', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: ['required', 'email']
        }
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    expect(a.vm.Validators[0].name).toBe('required')
    expect(a.vm.Validators[1].name).toBe('email')
  })

  it('should add validator with a single param', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'min:3'
        }
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    a.vm.update('aa')
    a.vm.validate()

    expect(a.vm.invalid).toBe(true)

    a.vm.update('aaaa')
    a.vm.validate()

    expect(a.vm.invalid).toBe(false)
  })

  it('should add validator with a single param which contains :', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'date_format:YYYY-MM-DD HH:mm:ss'
        }
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    a.vm.update('2020-12-30 23:59:59')
    a.vm.validate()

    expect(a.vm.invalid).toBe(false)
  })

  it('should add validator with a multiple params', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'between:3,5'
        }
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    a.vm.update('aa')
    a.vm.validate()

    expect(a.vm.invalid).toBe(true)

    a.vm.update('aaaa')
    a.vm.validate()

    expect(a.vm.invalid).toBe(false)
  })

  it('should watch for change on a dependent field', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
        },
        b: {
          type: 'text',
          rules: 'same:a'
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    let b = findAllComponents(form, { name: 'TextElement' }).at(1)

    await nextTick()

    a.vm.update('aaa')

    b.vm.update('bbb')
    await flushPromises()

    expect(b.vm.invalid).toBe(true)

    b.vm.update('aaa')
    await flushPromises()

    expect(b.vm.invalid).toBe(false)

    a.vm.update('aaaa')
    await flushPromises()

    await nextTick()

    expect(b.vm.invalid).toBe(true)
  })

  it('should be able to use wildcards in dependent field\'s path', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'list',
          object: {
            schema: {
              b: {
                type: 'text'
              },
              c: {
                type: 'text',
                rules: 'same:a.*.b'
              },
            }
          }
        },
      }
    })

    let b = findAllComponents(form, { name: 'TextElement' }).at(0)
    let c = findAllComponents(form, { name: 'TextElement' }).at(1)

    await nextTick()

    b.vm.update('aaa')

    c.vm.update('bbb')
    await flushPromises()

    expect(c.vm.invalid).toBe(true)

    c.vm.update('aaa')
    await flushPromises()

    expect(c.vm.invalid).toBe(false)

    b.vm.update('aaaa')
    await flushPromises()

    await nextTick()

    expect(c.vm.invalid).toBe(true)
  })

  it('should have a rule ignored if nullable is present and the value is unfilled', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'nullable|email'
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    a.vm.validate()

    expect(a.vm.invalid).toBe(false)

    a.vm.update('hello')
    await flushPromises()

    expect(a.vm.invalid).toBe(true)

    a.vm.update('')
    await flushPromises()

    expect(a.vm.invalid).toBe(false)
  })

  it('should validate with element debounce', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          debounce: 1,
          rules: 'email',
          default: 'value'
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    a.vm.validate()

    expect(a.vm.debouncing).toBe(true)
    expect(a.vm.invalid).toBe(false)

    jest.advanceTimersByTime(1)
    await flushPromises()

    expect(a.vm.debouncing).toBe(false)
    expect(a.vm.invalid).toBe(true)
  })

  it('should validate with rule debounce', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'email:debounce=1',
          default: 'value',
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    a.vm.validate()

    expect(a.vm.debouncing).toBe(true)
    expect(a.vm.invalid).toBe(false)

    jest.advanceTimersByTime(1)
    await flushPromises()

    expect(a.vm.debouncing).toBe(false)
    expect(a.vm.invalid).toBe(true)
  })

  it('should validate async', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'unique'
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    a.vm.validate()

    expect(a.vm.pending).toBe(true)

    await flushPromises()
    jest.advanceTimersByTime(1)

    expect(a.vm.pending).toBe(false)
  })

  it('should add rule conditionally based on condition object', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
        },
        b: {
          type: 'text',
          rules: [
            { required: ['a', 'aaa'] }
          ]
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    let b = findAllComponents(form, { name: 'TextElement' }).at(1)

    b.vm.validate()
    await flushPromises()

    expect(b.vm.invalid).toBe(false)

    a.vm.update('aaa')
    await nextTick()
    await flushPromises()

    expect(b.vm.invalid).toBe(true)
  })

  it('should watch rule condition change based on condition object', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'list',
          object: {
            schema: {
              b: {
                type: 'list',
                object: {
                  schema: {
                    c: {
                      type: 'text'
                    }
                  }
                }
              }
            }
          }
        },
        d: {
          type: 'text',
          rules: [
            { required: ['a.0.b.0.c', 'aaa'] }
          ]
        },
      }
    })

    let c = findAllComponents(form, { name: 'TextElement' }).at(0)
    let d = findAllComponents(form, { name: 'TextElement' }).at(1)

    d.vm.validate()
    await flushPromises()

    expect(d.vm.invalid).toBe(false)

    c.vm.update('aaa')
    await flushPromises()

    await nextTick()

    expect(d.vm.invalid).toBe(true)
  })

  it('should have nullable as conditional', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
        },
        b: {
          type: 'text',
          rules: [
            { nullable: ['a', 'aaa'] },
            'required',
          ]
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    let b = findAllComponents(form, { name: 'TextElement' }).at(1)

    b.vm.validate()

    await flushPromises()

    expect(b.vm.invalid).toBe(true)

    a.vm.update('aaa')

    b.vm.validate()

    await flushPromises()

    expect(b.vm.invalid).toBe(false)
  })

  it('should watch nullable as conditional', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
        },
        b: {
          type: 'text',
          rules: [
            { nullable: ['a', 'aaa'] },
            'required',
          ]
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    let b = findAllComponents(form, { name: 'TextElement' }).at(1)

    b.vm.validate()

    await flushPromises()

    expect(b.vm.invalid).toBe(true)

    a.vm.update('aaa')
    await flushPromises()

    await nextTick()

    expect(b.vm.invalid).toBe(false)
  })

  it('should add conditional rule with operator', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
        },
        b: {
          type: 'text',
          rules: [
            'numeric',
            { 'min:2': ['a', '!=', 'aaa'] }
          ]
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    let b = findAllComponents(form, { name: 'TextElement' }).at(1)

    b.vm.update(1)

    await flushPromises()

    expect(b.vm.invalid).toBe(true)

    a.vm.update('aaa')

    b.vm.validate()

    await flushPromises()

    expect(b.vm.invalid).toBe(false)
  })

  it('should add conditional rule with multiple accepted values', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
        },
        b: {
          type: 'text',
          rules: [
            { required: ['a', ['aaa', 'bbb']] }
          ]
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    let b = findAllComponents(form, { name: 'TextElement' }).at(1)

    b.vm.validate()
    await flushPromises()

    expect(b.vm.invalid).toBe(false)

    a.vm.update('aaa')
    await flushPromises()

    expect(b.vm.invalid).toBe(true)

    a.vm.update('ccc')
    await flushPromises()

    expect(b.vm.invalid).toBe(false)

    a.vm.update('bbb')
    await flushPromises()

    expect(b.vm.invalid).toBe(true)
  })

  it('should be able to use function condition for rule', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
        },
        b: {
          type: 'text',
          rules: [
            {
              required: (form$, Validator) => {
                return form$.el$('a').value == 'aaa'
              }
            }
          ]
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    let b = findAllComponents(form, { name: 'TextElement' }).at(1)

    b.vm.validate()
    await flushPromises()

    expect(b.vm.invalid).toBe(false)

    a.vm.update('aaa')
    b.vm.validate()
    await flushPromises()

    expect(b.vm.invalid).toBe(true)
  })

  it('should watch for custom condition function change', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
        },
        b: {
          type: 'text',
          rules: [
            {
              required: (form$, Validator) => {
                Validator.watch('a')

                return form$.el$('a').value == 'aaa'
              }
            }
          ]
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    let b = findAllComponents(form, { name: 'TextElement' }).at(1)

    b.vm.validate()
    await flushPromises()

    expect(b.vm.invalid).toBe(false)

    a.vm.update('aaa')
    await flushPromises()

    expect(b.vm.invalid).toBe(true)
  })

  it('should separate rules by languages', async () => {
    let form = createForm({
      multilingual: true,
      languages: {
        en: 'English',
        hu: 'Hungarian',
      },
      schema: {
        a: {
          type: 't-text',
          rules: {
            en: ['min:3'],
            hu: ['required'],
          }
        },
      }
    })

    let a = findAllComponents(form, { name: 'TTextElement' }).at(0)

    a.vm.update('aa')
    await flushPromises()

    expect(a.vm.error).toBe(a.vm.Validators.en[0].message)

    form.vm.setLanguage('hu')

    a.vm.update('aa')
    await flushPromises()

    expect(a.vm.error).toBeFalsy()

    a.vm.update('')
    await flushPromises()

    expect(a.vm.error).toBe(a.vm.Validators.hu[0].message)
  })

  it('should overwrite rule message on element level', async () => {
    let form = createForm({
      messages: {
        required: 'Form required messages'
      },
      schema: {
        a: {
          type: 'text',
          rules: 'required',
          messages: {
            required: 'This is required'
          }
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    a.vm.validate()
    await flushPromises()

    expect(a.vm.error).toBe('This is required')
  })

  it('should overwrite rule message on form level', async () => {
    let form = createForm({
      messages: {
        required: 'This is required'
      },
      schema: {
        a: {
          type: 'text',
          rules: 'required',
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    a.vm.validate()
    await flushPromises()

    expect(a.vm.error).toBe('This is required')
  })

  it('should be able to register new rule and use default message', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'uppercase',
        },
      }
    }, {
      rules: {
        uppercase: Uppercase
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    a.vm.update('aaa')
    a.vm.validate()
    await flushPromises()

    expect(a.vm.error).toBe('Should only contain uppercase letters')

    a.vm.update('AAA')
    a.vm.validate()
    await flushPromises()

    expect(a.vm.error).toBeFalsy()
  })

  it('should be able to register new rule and use element level message', async () => {
    let form = createForm({
      messages: {
        uppercase: 'Should be uppercase please'
      },
      schema: {
        a: {
          type: 'text',
          rules: 'uppercase',
          messages: {
            uppercase: 'Should be uppercase'
          },
        },
      }
    }, {
      rules: {
        uppercase: Uppercase
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    a.vm.update('aaa')
    a.vm.validate()
    await flushPromises()

    expect(a.vm.error).toBe('Should be uppercase')
  })

  it('should be able to register new rule and use form level message', async () => {
    let form = createForm({
      messages: {
        uppercase: 'Should be uppercase'
      },
      schema: {
        a: {
          type: 'text',
          rules: 'uppercase',
        },
      }
    }, {
      rules: {
        uppercase: Uppercase
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    a.vm.update('aaa')
    a.vm.validate()
    await flushPromises()

    expect(a.vm.error).toBe('Should be uppercase')
  })

  it('should be able to register new rule and use generic message', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'uppercase',
        },
      }
    }, {
      rules: {
        uppercase: Uppercase
      },
      locales: {
        en: Object.assign({}, en, {
          validation: {
            uppercase: 'Should be uppercase'
          }
        })
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    a.vm.update('aaa')
    a.vm.validate()
    await flushPromises()

    expect(a.vm.error).toBe('Should be uppercase')
  })

  it('should be able to use inline rule', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: ['required', class extends Validator {
            get message() {
              return 'Should use uppercase'
            }

            check(value) {
              return value.toUpperCase(value) === value
            }
          }],
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    a.vm.update('aaa')
    a.vm.validate()
    await flushPromises()

    expect(a.vm.error).toBe('Should use uppercase')
  })

  it('should validate regex', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'regex:/^[a-z]*$/',
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    a.vm.update('aaa')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    a.vm.update('AAA')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)
  })

  it('should validate regex with pipe in array rules', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: ['regex:/^[a-z|]*$/'],
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    a.vm.update('aaa|aa')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    a.vm.update('AAA')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)
  })
})