import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set formKey with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.options.formKey).toBe('1234')

    form.vm.options.formKey = '12345'

    expect(form.vm.options.formKey).toBe('12345')
  })
}