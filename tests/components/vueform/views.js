import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set views with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.options.views).toStrictEqual({FormErrors:'dark'})

    form.vm.options.views = {FormErrors:'not-dark'}

    expect(form.vm.options.views).toStrictEqual({FormErrors:'not-dark'})
  })
}