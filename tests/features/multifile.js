import { createForm, findAllComponents, testPropDefault, destroy } from 'test-helpers'
import { nextTick } from 'vue'

export const accept = function (elementType, elementName, options) {
  testPropDefault(it, elementType, 'accept', null, ['.jpg', '.png'])
}

//@todo:adam preparing is not implemented but used in code
// export const preparing = function (elementType, elementName, options) {
//
//   it('should set `preparing` to true when `prepare` and set to false after', async () => {
//
//     let requestMock = jest.fn(() => {
//       return [{ file : {
//           data: {
//             tmp: 'tmp123',
//             originalName: 'filename.jpg'
//           }
//         }
//       }]
//     })
//
//     let form = createForm({
//       method: 'submit',
//       schema: {
//         el: {
//           type: elementType,
//           auto: false,
//           onBeforeCreate(el$) {
//             el$.$vueform.services.axios.request = requestMock
//           }
//         }
//       }
//     })
//
//     let el = form.vm.el$('el')
//
//     let file = [{ file: new File([''], 'filename') }]
//
//     el.load(file)
//
//     el.prepare()
//
//     expect(el.preparing).toBe(true) // @todo bug: useData.js prepare function is empty
//
//     // destroy(form) // teardown
//   })
// }

export const hasUploading = function (elementType, elementName, options) {

}


export const handleChange = function (elementType, elementName, options) {
  it('should add files on `handleChange` when it is a single element', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
        }
      }
    })

    let el = form.vm.el$('el')

    let file = new File([''], 'filename.jpg')
    let file2 = new File([''], 'filename2.jpg')

    await el.handleChange({
      target: {
        files: [file, file2]
      }
    })

    await nextTick()

    expect(el.value).toStrictEqual([file, file2])
    
    // destroy(form) // teardown
  })

  it('should add files on `handleChange` when it is an object element', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
          object: true,
        }
      }
    })

    let el = form.vm.el$('el')

    let file = new File([''], 'filename.jpg')
    let file2 = new File([''], 'filename2.jpg')

    await el.handleChange({
      target: {
        files: [file, file2]
      }
    })

    await nextTick()

    expect(el.value).toStrictEqual([
      { file: file },
      { file: file2 }
    ])
    
    // destroy(form) // teardown
  })

  it('should not add files on `handleChange` when disabled', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
          disabled: true,
        }
      }
    })

    let el = form.vm.el$('el')

    let file = new File([''], 'filename.jpg')
    let file2 = new File([''], 'filename2.jpg')

    await el.handleChange({
      target: {
        files: [file, file2]
      }
    })

    await nextTick()

    expect(el.value).toStrictEqual(el.nullValue)

    // destroy() // teardown
  })
}

export const handleClick = function (elementType, elementName, options) {
  it('should click input element when upload button is clicked in `handleClick`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    let clickMock = jest.fn()

    el.input = {
      click: clickMock
    }

    expect(clickMock).not.toHaveBeenCalled()

    elWrapper.find(`[class="${el.template.data().defaultClasses.button}"]`).trigger('click')

    await nextTick()

    expect(clickMock).toHaveBeenCalled()
    
    // destroy(form) // teardown
  })

  it('should not click input element when upload button is clicked & disabled in `handleClick`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
          disabled: true
        }
      }
    })

    let el = form.vm.el$('el')

    let clickMock = jest.fn()

    el.input = {
      click: clickMock
    }

    expect(clickMock).not.toHaveBeenCalled()

    el.handleClick()

    await nextTick()

    expect(clickMock).not.toHaveBeenCalled()

    // destroy() // teardown
  })
}