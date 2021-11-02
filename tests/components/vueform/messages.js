import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set messages with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.options.messages).toStrictEqual({ required: 'Required' })

    form.vm.options.messages = { required: 'Is required' }

    expect(form.vm.options.messages).toStrictEqual({ required: 'Is required' })
  })
}