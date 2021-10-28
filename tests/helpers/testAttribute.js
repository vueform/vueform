import { findAllComponents, findAll } from 'test-helpers'

export default function testAttribute (el, fieldType, attribute, expectedValue) {
  
  if (!_.isArray(expectedValue)) {
    expectedValue = [expectedValue]
  }

  switch (fieldType) {
    case 'input':
      expect(expectedValue.indexOf(el.find('input').attributes(attribute)) !== -1).toBeTruthy()
      break

    case 'checkbox':
      expect(expectedValue.indexOf(el.find('input[type="checkbox"]').attributes(attribute)) !== -1).toBeTruthy()
      break

    case 'radio':
      expect(expectedValue.indexOf(el.find('input[type="radio"]').attributes(attribute)) !== -1).toBeTruthy()
      break

    case 'textarea':
      expect(expectedValue.indexOf(el.find('textarea').attributes(attribute)) !== -1).toBeTruthy()
      break

    case 'editor':
      expect(expectedValue.indexOf(findAllComponents(el, { name: 'EditorWrapper' }).at(0).props(attribute)) !== -1).toBeTruthy()
      break
  }
} 