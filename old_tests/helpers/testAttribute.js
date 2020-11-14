export default function testAttribute (el, fieldType, attribute, expectedValue) {
  
  if (!_.isArray(expectedValue)) {
    expectedValue = [expectedValue]
  }

  switch (fieldType) {
    case 'input':
      expect(expectedValue.indexOf(el.find('input').attributes(attribute)) !== -1).toBeTruthy()
      break
  }
} 