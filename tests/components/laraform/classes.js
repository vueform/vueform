import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set classes with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.classes).toStrictEqual({ TextElement: { container: 'text' } })

    form.vm.classes = { TextElement: { container: 'not-text' } }

    expect(form.vm.classes).toStrictEqual({ TextElement: { container: 'not-text' } })
  })
}