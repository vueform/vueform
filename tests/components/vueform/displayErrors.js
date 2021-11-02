import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set displayErrors with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.options.displayErrors).toBe(false)

    form.vm.options.displayErrors = true

    expect(form.vm.options.displayErrors).toBe(true)
  })
}