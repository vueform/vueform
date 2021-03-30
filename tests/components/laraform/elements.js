import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set elements with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.options.elements).toStrictEqual({ TextElement: {} })

    form.vm.options.elements = { TextElement: {name:'NotText'} }

    expect(form.vm.options.elements).toStrictEqual({ TextElement: {name:'NotText'} })
  })
}