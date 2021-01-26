import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set method with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.method).toBe('GET')

    form.vm.method = 'POST'

    expect(form.vm.method).toBe('POST')
  })
}