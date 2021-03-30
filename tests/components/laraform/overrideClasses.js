import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set overrideClasses with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.options.overrideClasses).toStrictEqual({ TextElement: { container: 'text' } })

    form.vm.options.overrideClasses = { TextElement: { container: 'not-text' } }

    expect(form.vm.options.overrideClasses).toStrictEqual({ TextElement: { container: 'not-text' } })
  })
}