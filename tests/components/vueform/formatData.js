import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set formatData with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.options.formatData()).toStrictEqual({ el: 1 })

    form.vm.options.formatData = () => ({ el: 2 })

    expect(form.vm.options.formatData()).toStrictEqual({ el: 2 })
  })
}