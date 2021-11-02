import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set multilingual with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.options.multilingual).toBe(true)

    form.vm.options.multilingual = false

    expect(form.vm.options.multilingual).toBe(false)
  })
}