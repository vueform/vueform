import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set languages with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.options.languages).toStrictEqual({ en: 'English', de: 'German' })

    form.vm.options.languages = { en: 'English' }

    expect(form.vm.options.languages).toStrictEqual({ en: 'English' })
  })
}