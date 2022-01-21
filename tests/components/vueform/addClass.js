import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set addClass with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.options.addClass).toStrictEqual('form-1')

    form.vm.options.addClass = 'not-form-1'

    expect(form.vm.options.addClass).toStrictEqual('not-form-1')
  })
}