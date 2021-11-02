import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set language with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.options.language).toStrictEqual('de')

    form.vm.options.language = 'en'

    expect(form.vm.options.language).toStrictEqual('en')
  })
}