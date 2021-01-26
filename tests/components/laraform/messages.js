import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set messages with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.messages).toStrictEqual({ required: 'Required' })

    form.vm.messages = { required: 'Is required' }

    expect(form.vm.messages).toStrictEqual({ required: 'Is required' })
  })
}