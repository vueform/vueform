import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set stepsControls with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.options.stepsControls).toBe(false)

    form.vm.options.stepsControls = true

    expect(form.vm.options.stepsControls).toBe(true)
  })
}