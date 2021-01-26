import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set columns with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.columns).toStrictEqual({ element: 9, label: 3, field: 9 })

    form.vm.columns = { element: 12, label: 3, field: 9 }

    expect(form.vm.columns).toStrictEqual({ element: 12, label: 3, field: 9 })
  })
}