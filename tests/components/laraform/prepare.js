import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set prepare with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.options.prepare()).toStrictEqual({ el: 1 })

    form.vm.options.prepare = () => ({ el: 2 })

    expect(form.vm.options.prepare()).toStrictEqual({ el: 2 })
  })
}