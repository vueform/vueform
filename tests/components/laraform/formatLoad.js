import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set formatLoad with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.options.formatLoad()).toStrictEqual({ el: 1 })

    form.vm.options.formatLoad = () => ({ el: 2 })

    expect(form.vm.options.formatLoad()).toStrictEqual({ el: 2 })
  })
}