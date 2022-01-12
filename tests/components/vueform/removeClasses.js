import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set removeClasses with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.options.removeClasses).toStrictEqual({ TextElement: { container: 'text' } })

    form.vm.options.removeClasses = { TextElement: { container: 'not-text' } }

    expect(form.vm.options.removeClasses).toStrictEqual({ TextElement: { container: 'not-text' } })
  })
}