import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set components with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.options.components).toStrictEqual({ FormButton: {} })

    form.vm.options.components = { FormButton: {name:'NotButton'} }

    expect(form.vm.options.components).toStrictEqual({ FormButton: {name:'NotButton'} })
  })
}