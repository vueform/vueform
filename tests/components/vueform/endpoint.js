import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set endpoint with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.options.endpoint).toBe('/my/process')

    form.vm.options.endpoint = '/not/my/process'

    expect(form.vm.options.endpoint).toBe('/not/my/process')
  })
}