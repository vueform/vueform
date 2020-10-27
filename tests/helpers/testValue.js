export default function testValue (el, fieldType, expectedValue) {
  switch (fieldType) {
    case 'input':
      expect(el.get('input').element.value).toBe(expectedValue)
      break
  }
}