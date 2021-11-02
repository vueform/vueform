import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set disabled with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.options.disabled).toBe(true)

    form.vm.options.disabled = false

    expect(form.vm.options.disabled).toBe(false)
  })
}