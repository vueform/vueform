import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set theme with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.options.theme).toBe('bootstrap')

    form.vm.options.theme = 'default'

    expect(form.vm.options.theme).toBe('default')
  })
}