import { createForm, findAllComponents, testPropDefault, destroy } from 'test-helpers'

export const Text = function (elementType, elementName, options) {

  it('should return localized `Text`', async () => {
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          text: 'Element Text'
        }
      }
    })
    
    const el = form.vm.el$('el')
    
    expect(el.Text).toBe('Element Text')
  })
}


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
    
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    expect(elWrapper.html()).toContain('Element Text')

    // destroy() // teardown
  })
}