import { nextTick } from 'vue'

export default async function testNativeSelectModel(form, values = [0,1,2]) {
  let el = form.findAllComponents({ name: 'SelectElement' }).at(0)

  expect(el.vm.value).toBe(values[1])
  expect(el.get('select').findAll('option').at(1).element.selected).toBe(true)

  el.vm.value = values[2]

  expect(el.vm.model).toBe(values[2])

  await nextTick()

  expect(el.get('select').findAll('option').at(2).element.selected).toBe(true)

  el.vm.update(values[0])

  expect(el.vm.model).toBe(values[0])

  await nextTick()
  
  expect(el.get('select').findAll('option').at(0).element.selected).toBe(true)

  el.vm.load(values[1])

  expect(el.vm.model).toBe(values[1])
      
  await nextTick()

  expect(el.get('select').findAll('option').at(1).element.selected).toBe(true)
}