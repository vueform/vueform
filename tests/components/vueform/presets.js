import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set presets with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.options.presets).toStrictEqual(['preset'])

    form.vm.options.presets = ['preset2']

    expect(form.vm.options.presets).toStrictEqual(['preset2'])
  })
}