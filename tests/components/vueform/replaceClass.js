import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set replaceClass with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.options.replaceClass).toStrictEqual({'form':'form-1'})

    form.vm.options.replaceClass = {'form':'not-form-1'}

    expect(form.vm.options.replaceClass).toStrictEqual({'form':'not-form-1'})
  })
}