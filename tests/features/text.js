import { createForm, findAllComponents, testPropDefault, destroy } from 'test-helpers'
import { nextTick } from 'vue'

export const text = function (elementType, elementName, options) {
  testPropDefault(it, elementType, 'text', null, 'Element text')

  it('should render `text`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          text: 'Element Text'
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    expect(elWrapper.html()).toContain('Element Text')

    // destroy() // teardown
  })
}