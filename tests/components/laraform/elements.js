import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set elements with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.elements).toStrictEqual({ TextElement: {} })

    form.vm.elements = { TextElement: {name:'NotText'} }

    expect(form.vm.elements).toStrictEqual({ TextElement: {name:'NotText'} })
  })
}