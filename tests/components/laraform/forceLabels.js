import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set forceLabels with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.options.forceLabels).toBe(true)

    form.vm.options.forceLabels = false

    expect(form.vm.options.forceLabels).toBe(false)
  })
}