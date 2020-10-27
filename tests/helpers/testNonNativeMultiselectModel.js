export default function testNonNativeMultiselectModel (form, LocalVue, done, values = [0,1,2]) {
  let a = form.findAllComponents({ name: 'MultiselectElement' }).at(0)

  expect(a.vm.value).toStrictEqual([values[1]])
  expect(a.vm.select$.value).toStrictEqual([a.vm.selectOptions[1]])

  a.vm.value = [values[0], values[2]]

  expect(a.vm.value).toStrictEqual([values[0], values[2]])

  LocalVue.nextTick(() => {
    expect(a.vm.select$.value).toStrictEqual([a.vm.selectOptions[0],a.vm.selectOptions[2]])

    a.vm.update([values[1]])

    expect(a.vm.value).toStrictEqual([values[1]])

    LocalVue.nextTick(() => {
      expect(a.vm.select$.value).toStrictEqual([a.vm.selectOptions[1]])

      form.vm.load({
        a: [values[2]]
      })

      expect(a.vm.value).toStrictEqual([values[2]])
      
      LocalVue.nextTick(() => {
        expect(a.vm.select$.value).toStrictEqual([a.vm.selectOptions[2]])

        done()
      })
    })
  })
}