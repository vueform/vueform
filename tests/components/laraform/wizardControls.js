import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set wizardControls with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.wizardControls).toBe(false)

    form.vm.wizardControls = true

    expect(form.vm.wizardControls).toBe(true)
  })
}