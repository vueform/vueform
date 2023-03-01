import { createForm } from 'test-helpers'

export const handleInput = function (elementType, elementName, options) {
  it('should work', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    // destroy() // teardown
  })
}