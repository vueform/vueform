import { createForm } from './../../../src/utils/testHelpers'

describe('Validation Service', () => {
  it('should set one validator from `rules`', (done) => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required'
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(a.vm.Validators[0].name).toBe('required')

    done()
  })

  it('should set `invalid` if validator fails', (done) => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required'
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    a.vm.validate()

    expect(a.vm.invalid).toBe(true)

    a.get('input').setValue('aaa')
    a.vm.validate()

    expect(a.vm.invalid).toBe(false)

    done()
  })

  it('should render error message of failed validator with params', (done) => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required'
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    a.vm.validate()

    expect(a.vm.error).toBe(form.vm.$laraform.locales[form.vm.selectedLocale].validation.required.replace(':attribute', 'A'))

    done()
  })

  it('should add validators separated by pipes in `rules`', (done) => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required|email'
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(a.vm.Validators[0].name).toBe('required')
    expect(a.vm.Validators[1].name).toBe('email')

    done()
  })

  it('should add validators from array of `rules`', (done) => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: ['required', 'email']
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(a.vm.Validators[0].name).toBe('required')
    expect(a.vm.Validators[1].name).toBe('email')

    done()
  })

  it('should add validator with a single param', (done) => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'min:3'
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    a.get('input').setValue('aa')
    a.vm.validate()

    expect(a.vm.invalid).toBe(true)

    a.get('input').setValue('aaaa')
    a.vm.validate()

    expect(a.vm.invalid).toBe(false)

    done()
  })

  it('should add validator with a multiple params', (done) => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'between:3,5'
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    a.get('input').setValue('aa')
    a.vm.validate()

    expect(a.vm.invalid).toBe(true)

    a.get('input').setValue('aaaa')
    a.vm.validate()

    expect(a.vm.invalid).toBe(false)

    done()
  })
})