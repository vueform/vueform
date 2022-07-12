import { nextTick } from 'vue'

export default async function testNonNativeSelectModel (form, values = [0,1,2]) {
  let el = form.findAllComponents({ name: 'SelectElement' }).at(0)

  expect(el.vm.value).toBe(values[1])
  expect(el.vm.input.value).toStrictEqual(el.vm.selectOptions[1])

  el.vm.value = values[2]

  expect(el.vm.model).toBe(values[2])

  await nextTick()

  expect(el.vm.input.value).toStrictEqual(el.vm.selectOptions[2])

  el.vm.update(values[0])

  expect(el.vm.model).toBe(values[0])

  await nextTick()

  expect(el.vm.input.value).toStrictEqual(el.vm.selectOptions[0])

  el.vm.load(values[1])

  expect(el.vm.model).toBe(values[1])
      
  await nextTick()

  expect(el.vm.input.value).toStrictEqual(el.vm.selectOptions[1])
}