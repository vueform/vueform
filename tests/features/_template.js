import { createForm, findAllComponents, testComputedOption } from 'test-helpers'

export default function(elementType) {
  const elementName = `${_.upperFirst(elementType)}Element`

  return () => {
    testComputedOption(it, elementType, '_____', defaultValue, testValue)
    
    it('should ', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)
    })
  }
}