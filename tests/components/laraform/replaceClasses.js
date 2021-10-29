import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set replaceClasses with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.options.replaceClasses).toStrictEqual({ TextElement: { container: 'text' } })

    form.vm.options.replaceClasses = { TextElement: { container: 'not-text' } }

    expect(form.vm.options.replaceClasses).toStrictEqual({ TextElement: { container: 'not-text' } })
  })
}