import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set key with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.key).toBe('1234')

    form.vm.key = '12345'

    expect(form.vm.key).toBe('12345')
  })
}