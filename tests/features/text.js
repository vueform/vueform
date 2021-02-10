import { createForm, findAllComponents, testPropDefault } from 'test-helpers'
import { nextTick } from 'vue'

export const text = function (elementType, elementName, options) {
  testPropDefault(it, elementType, 'text', '', 'Element text')

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

    el.text = '<div>Element HTML Text</div>'

    await nextTick()

    expect(elWrapper.html()).toContain('<div>Element HTML Text</div>')
  })
}