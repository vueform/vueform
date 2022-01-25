import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set templates with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.options.templates).toStrictEqual({ FormButton: {} })

    form.vm.options.templates = { FormButton: {name:'NotButton'} }

    expect(form.vm.options.templates).toStrictEqual({ FormButton: {name:'NotButton'} })
  })
}