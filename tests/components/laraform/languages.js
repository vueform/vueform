import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set languages with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.languages).toStrictEqual({ en: { code: 'en', label: 'English' }, de: { code: 'de', label: 'German' } })

    form.vm.languages = { en: { code: 'en', label: 'English' } }

    expect(form.vm.languages).toStrictEqual({ en: { code: 'en', label: 'English' } })
  })
}