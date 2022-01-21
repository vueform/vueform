import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set size with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.options.size).toStrictEqual('sm')

    form.vm.options.size = 'md'

    expect(form.vm.options.size).toStrictEqual('md')
  })
}