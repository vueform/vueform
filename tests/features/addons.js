import { createForm, findAllComponents, testPropDefault, destroy } from 'test-helpers'

export const rendering = function(elementType, elementName, options) {
  // Template
  it('should not have ElementAddon if not defined', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let ElementAddon = findAllComponents(elWrapper, { name: 'ElementAddon' })

    expect(ElementAddon.length).toBe(0)    
    
    // destroy(form) // teardown
  })

  it('should render ElementAddon "before" if it is defined', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          addons: {
            before: '$'
          }
        }
      }
    })

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let ElementAddon = findAllComponents(elWrapper, { name: 'ElementAddon' }).at(0)

    expect(ElementAddon.vm.type).toBe('before')    
    
    // destroy(form) // teardown
  })

  it('should render ElementAddon "after" if it is defined', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          addons: {
            after: '%'
          }
        }
      }
    })

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let ElementAddon = findAllComponents(elWrapper, { name: 'ElementAddon' }).at(0)

    expect(ElementAddon.vm.type).toBe('after')
    
    // destroy(form) // teardown
  })
}