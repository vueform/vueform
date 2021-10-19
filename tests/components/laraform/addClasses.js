import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set extendClasses with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.options.extendClasses).toStrictEqual({ TextElement: { container: 'text' } })

    form.vm.options.extendClasses = { TextElement: { container: 'not-text' } }

    expect(form.vm.options.extendClasses).toStrictEqual({ TextElement: { container: 'not-text' } })
  })
}