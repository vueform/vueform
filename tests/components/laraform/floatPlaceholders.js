import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set floatPlaceholders with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.options.floatPlaceholders).toBe(true)

    form.vm.options.floatPlaceholders = false

    expect(form.vm.options.floatPlaceholders).toBe(false)
  })
}