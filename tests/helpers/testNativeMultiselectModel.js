export default function testNativeMultiselectModel (form, LocalVue, done, values = [0,1,2]) {
  let a = form.findAllComponents({ name: 'MultiselectElement' }).at(0)

  expect(a.vm.value).toStrictEqual([values[1]])
  expect(a.get('select').findAll('option').at(1).element.selected).toBe(true)

  a.vm.value = [values[0], values[2]]

  expect(a.vm.value).toStrictEqual([values[0], values[2]])

  LocalVue.nextTick(() => {
    expect(a.get('select').findAll('option').at(0).element.selected).toBe(true)
    expect(a.get('select').findAll('option').at(2).element.selected).toBe(true)

    a.vm.update([values[1]])

    expect(a.vm.value).toStrictEqual([values[1]])

    LocalVue.nextTick(() => {
      expect(a.get('select').findAll('option').at(0).element.selected).toBe(false)
      expect(a.get('select').findAll('option').at(1).element.selected).toBe(true)
      expect(a.get('select').findAll('option').at(2).element.selected).toBe(false)

      form.vm.load({
        a: [values[2]]
      })

      expect(a.vm.value).toStrictEqual([values[2]])
      
      LocalVue.nextTick(() => {
      expect(a.get('select').findAll('option').at(0).element.selected).toBe(false)
      expect(a.get('select').findAll('option').at(1).element.selected).toBe(false)
      expect(a.get('select').findAll('option').at(2).element.selected).toBe(true)

        done()
      })
    })
  })
}