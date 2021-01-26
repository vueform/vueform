import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set validateOn with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.validateOn).toBe('submit')

    form.vm.validateOn = 'submit|change'

    expect(form.vm.validateOn).toBe('submit|change')
  })
}