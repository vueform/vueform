import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set addClass with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.options.addClass).toBe('form-class')

    form.vm.options.addClass = 'not-form-class'

    expect(form.vm.options.addClass).toBe('not-form-class')
  })
}