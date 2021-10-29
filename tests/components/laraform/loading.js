import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set loading with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.options.loading).toBe(false)

    form.vm.options.loading = true

    expect(form.vm.options.loading).toBe(true)
  })
}