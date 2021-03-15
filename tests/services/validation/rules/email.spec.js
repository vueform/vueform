import flushPromises from 'flush-promises'
import { createForm, findAllComponents, change } from 'test-helpers'

describe('Email Rule', () => {
  it('should check if string is email', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'email'
        }
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    change(a, 'asdf')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, '1234')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, 'email@')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, 'email@domain')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, 'email@domain.com')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, 'email@domain.commfdasgtrs')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, 'email.name@domain.com')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, 'email_name@domain.com')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, 'email-name@domain.com')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, 'email1name@domain.com')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, 'email%/!name@domain.com')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, 'email%/!name@doma%/_in.com')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, 'email%/!name@domain.co%/!m')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)
  })
})