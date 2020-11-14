export default function testNativeSelectModel (form, LocalVue, done, values = [0,1,2]) {
  let a = form.findAllComponents({ name: 'SelectElement' }).at(0)

  expect(a.vm.value).toBe(values[1])
  expect(a.get('select').findAll('option').at(1).element.selected).toBe(true)

  a.vm.value = values[2]

  expect(a.vm.value).toBe(values[2])

  LocalVue.nextTick(() => {
    expect(a.get('select').findAll('option').at(2).element.selected).toBe(true)

    a.vm.update(values[0])

    expect(a.vm.value).toBe(values[0])

    LocalVue.nextTick(() => {
      expect(a.get('select').findAll('option').at(0).element.selected).toBe(true)

      form.vm.load({
        a: values[1]
      })

      expect(a.vm.value).toBe(values[1])
      
      LocalVue.nextTick(() => {
        expect(a.get('select').findAll('option').at(1).element.selected).toBe(true)

        done()
      })
    })
  })
}