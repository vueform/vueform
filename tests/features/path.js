import { createForm } from 'test-helpers'

export const path = function (elementType, elementName) {
  it('should have `path` equal to name if parent is not provided', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.path).toBe(el.name)
  })

  // it('should have `path` equal to name with parent if parent is provided', () => {
  //   let form = createForm({
  //     schema: {
  //       parent: {
  //         type: 'object',
  //         schema: {
  //           el: {
  //             type: elementType,
  //           }
  //         }
  //       }
  //     }
  //   })

  //   let el = form.vm.el$('parent.el')

  //   expect(el.path).toBe('parent.el')
  // })
}

export const flat = function (elementType, elementName) {
  it('should have `flat` equal to "false"', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.flat).toBe(false)
  })
}