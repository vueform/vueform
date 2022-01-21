import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set removeClass with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.options.removeClass).toStrictEqual(['form-1'])

    form.vm.options.removeClass = ['not-form-1']

    expect(form.vm.options.removeClass).toStrictEqual(['not-form-1'])
  })
}