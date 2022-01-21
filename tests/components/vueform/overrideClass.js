import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set overrideClass with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.options.overrideClass).toStrictEqual('form-1')

    form.vm.options.overrideClass = 'not-form-1'

    expect(form.vm.options.overrideClass).toStrictEqual('not-form-1')
  })
}