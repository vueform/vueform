export default function tryInputValue (value, expected, el) {
  return new Promise((resolve, reject) => {
    change(el, value)

    setTimeout(() => {
      try {
        expect(el.vm.invalid).toBe(expected)
      } catch (e) {
        throw new Error(`Value: ${value}, Expected: ${expected}, Received: ${el.vm.invalid}`)
      }
      resolve()
    }, 1)
  })
}