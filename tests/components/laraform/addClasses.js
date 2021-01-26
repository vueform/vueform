import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set addClasses with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.addClasses).toStrictEqual({ TextElement: { container: 'text' } })

    form.vm.addClasses = { TextElement: { container: 'not-text' } }

    expect(form.vm.addClasses).toStrictEqual({ TextElement: { container: 'not-text' } })
  })
}