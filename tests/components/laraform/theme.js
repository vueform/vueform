import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set theme with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.theme).toBe('bootstrap')

    form.vm.theme = 'default'

    expect(form.vm.theme).toBe('default')
  })
}