export default function testNonNativeSelectModel (form, LocalVue, done, values = [0,1,2]) {
  let a = form.findAllComponents({ name: 'SelectElement' }).at(0)

  expect(a.vm.value).toBe(values[1])
  expect(a.vm.select$.value).toStrictEqual(a.vm.selectOptions[1])

  a.vm.value = values[2]

  expect(a.vm.value).toBe(values[2])

  LocalVue.nextTick(() => {
    expect(a.vm.select$.value).toStrictEqual(a.vm.selectOptions[2])

    a.vm.update(values[0])

    expect(a.vm.value).toBe(values[0])

    LocalVue.nextTick(() => {
      expect(a.vm.select$.value).toStrictEqual(a.vm.selectOptions[0])

      form.vm.load({
        a: values[1]
      })

      expect(a.vm.value).toBe(values[1])
      
      LocalVue.nextTick(() => {
        expect(a.vm.select$.value).toStrictEqual(a.vm.selectOptions[1])

        done()
      })
    })
  })
}