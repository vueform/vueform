import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set validateOn with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.options.validateOn).toBe('submit')

    form.vm.options.validateOn = 'submit|change'

    expect(form.vm.options.validateOn).toBe('submit|change')
  })
}