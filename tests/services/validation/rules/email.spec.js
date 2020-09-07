import { createLocalVue } from '@vue/test-utils'
import { createForm, change } from './../../../../src/utils/testHelpers'

describe('Email Rule', () => {
  it('should check if string is email', (done) => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'email'
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    change(a, 'asdf')
    expect(a.vm.invalid).toBe(true)

    change(a, '1234')
    expect(a.vm.invalid).toBe(true)

    change(a, 'email@')
    expect(a.vm.invalid).toBe(true)

    change(a, 'email@domain')
    expect(a.vm.invalid).toBe(true)

    change(a, 'email@domain.com')
    expect(a.vm.invalid).toBe(false)

    change(a, 'email@domain.commfdasgtrs')
    expect(a.vm.invalid).toBe(false)

    change(a, 'email.name@domain.com')
    expect(a.vm.invalid).toBe(false)

    change(a, 'email_name@domain.com')
    expect(a.vm.invalid).toBe(false)

    change(a, 'email-name@domain.com')
    expect(a.vm.invalid).toBe(false)

    change(a, 'email1name@domain.com')
    expect(a.vm.invalid).toBe(false)

    change(a, 'email%/!name@domain.com')
    expect(a.vm.invalid).toBe(false)

    change(a, 'email%/!name@doma%/_in.com')
    expect(a.vm.invalid).toBe(true)

    change(a, 'email%/!name@domain.co%/!m')
    expect(a.vm.invalid).toBe(true)

    done()
  })
})