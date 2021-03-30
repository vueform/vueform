import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set labels with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.options.labels).toBe(true)

    form.vm.options.labels = false

    expect(form.vm.options.labels).toBe(false)
  })
}