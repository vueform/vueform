import { createForm, destroy } from 'test-helpers'
import { nextTick } from 'vue'

export const children$Array = function (elementType, elementName) {
  it('should have `children$Array` as an empty array by default', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.children$Array).toStrictEqual([])    
    
    // destroy(form) // teardown
  })

  it('should collect elements to `children$Array`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          buttons: [
            {
              label: 'Button',
            },
            {
              label: 'Button2',
            },
          ]
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.children$Array.length).toBe(2)
    
    // destroy(form) // teardown

    // destroy() // teardown
  })
}

export const children = function (elementType, elementName) {
  it('should have `children` equal to buttons object', () => {
    let childrenSchema = [
      {
        label: 'Button',
      },
      {
        label: 'Button2',
      },
    ]

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          buttons: childrenSchema,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.children).toStrictEqual(childrenSchema)
    
    // destroy(form) // teardown

    // destroy() // teardown
  })
}

export const children$ = function (elementType, elementName) {
  it('should have `children$` equal to an object of child element components', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          buttons: [
            {
              label: 'Button',
            },
            {
              label: 'Button2',
            },
          ]
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.children$[0].name).toBe(0)
    expect(el.children$[1].name).toBe(1)    
    
    // destroy(form) // teardown
  })

  it('should add new child to `children$`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          buttons: [
            {
              label: 'Button',
            },
            {
              label: 'Button2',
            },
          ]
        }
      }
    })

    let el = form.vm.el$('el')

    el.children.push({
      label: 'Button3'
    })

    await nextTick()

    expect(el.children$[0].name).toBe(0)
    expect(el.children$[1].name).toBe(1)
    expect(el.children$[2].name).toBe(2)    
    
    // destroy(form) // teardown
  })

  it('should remove child from `children$`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          buttons: [
            {
              label: 'Button',
            },
            {
              label: 'Button2',
            },
          ]
        }
      }
    })

    let el = form.vm.el$('el')

    el.children = [
      {
        label: 'Button2',
      },
    ]

    await nextTick()

    expect(_.keys(el.children$).length).toBe(1)
    expect(el.children$[0].label).toBe('Button2')    
    
    // destroy(form) // teardown
  })

  it('should reorder `children$`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          buttons: [
            {
              label: 'Button',
            },
            {
              label: 'Button2',
            },
          ]
        }
      }
    })

    let el = form.vm.el$('el')

    el.children = [
      {
        label: 'Button2',
      },
      {
        label: 'Button',
      },
    ]

    await nextTick()

    expect(el.children$[0].label).toBe('Button2')
    expect(el.children$[1].label).toBe('Button')
    
    // destroy(form) // teardown
  })
}