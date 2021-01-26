import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set class with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.class).toBe('form-class')

    form.vm.class = 'not-form-class'

    expect(form.vm.class).toBe('not-form-class')
  })
}