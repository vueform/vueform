import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set replaceTemplates with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.options.replaceTemplates).toStrictEqual({ FormButton: {} })

    form.vm.options.replaceTemplates = { FormButton: {name:'NotButton'} }

    expect(form.vm.options.replaceTemplates).toStrictEqual({ FormButton: {name:'NotButton'} })
  })
}