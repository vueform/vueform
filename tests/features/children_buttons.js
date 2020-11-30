import { createForm } from 'test-helpers'
import { nextTick } from 'vue'

export const child$ = function (elementType, elementName) {
  it('should have `child$` as an empty array by default', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.child$).toStrictEqual([])
  })

  it('should collect elements to `child$`', async () => {
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

    expect(el.child$.length).toBe(2)
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
  })
}