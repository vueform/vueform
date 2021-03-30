import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set method with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.options.method).toBe('GET')

    form.vm.options.method = 'POST'

    expect(form.vm.options.method).toBe('POST')
  })
}