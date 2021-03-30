import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set default with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.options.default).toStrictEqual({ el: 1 })

    form.vm.options.default = { el: 2 }

    expect(form.vm.options.default).toStrictEqual({ el: 2 })
  })
}