import flushPromises from 'flush-promises'
import change from './change'

export default async function tryInputValue (value, expected, el) {
  change(el, value)

  await flushPromises()

  try {
    expect(el.vm.invalid).toBe(expected)
  } catch (e) {
    throw new Error(`Value: ${value}, Expected: ${expected}, Received: ${el.vm.invalid}`)
  }
}