import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set validateOn with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.options.validateOn).toBe('change')

    form.vm.options.validateOn = 'step'

    expect(form.vm.options.validateOn).toBe('step')
  })
}