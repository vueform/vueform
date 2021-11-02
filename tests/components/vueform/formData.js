import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set formData with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.options.formData(form.vm)).toStrictEqual(form.vm.data)

    form.vm.options.formData = () => ({ el: 2 })

    expect(form.vm.options.formData()).toStrictEqual({ el: 2 })
  })
}