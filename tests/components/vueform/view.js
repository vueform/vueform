import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set view with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.options.view).toStrictEqual('dark')

    form.vm.options.view = 'red'

    expect(form.vm.options.view).toStrictEqual('red')
  })
}