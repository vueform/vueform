import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set stepsControls with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.stepsControls).toBe(false)

    form.vm.stepsControls = true

    expect(form.vm.stepsControls).toBe(true)
  })
}