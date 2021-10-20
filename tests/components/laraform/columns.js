import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set columns with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.options.columns).toStrictEqual({ container: 9, label: 3, wrapper: 9 })

    form.vm.options.columns = { container: 12, label: 3, wrapper: 9 }

    expect(form.vm.options.columns).toStrictEqual({ container: 12, label: 3, wrapper: 9 })
  })
}