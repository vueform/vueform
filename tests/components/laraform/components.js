import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set components with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.components).toStrictEqual({ FormButton: {} })

    form.vm.components = { FormButton: {name:'NotButton'} }

    expect(form.vm.components).toStrictEqual({ FormButton: {name:'NotButton'} })
  })
}