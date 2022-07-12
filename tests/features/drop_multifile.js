import { createForm, testPropDefault, findAllComponents, destroy } from 'test-helpers'
import { nextTick } from 'vue'

export { canDrop, rendering } from './drop'

export const handleDrop = function (elementType, elementName, options) {
  it('should add files on `handleDrop` when it is a single element', async () => {
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

    el.handleDrop({
      dataTransfer: {
        files: [file, file2]
      }
    })

    await nextTick()

    expect(el.value).toStrictEqual([file, file2])
    
    // destroy(form) // teardown
  })

  it('should add files on `handleDrop` when it is an object element', async () => {
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

    el.handleDrop({
      dataTransfer: {
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

  it('should not add files on `handleDrop` when disabled', async () => {
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

    el.handleDrop({
      dataTransfer: {
        files: [file, file2]
      }
    })

    await nextTick()

    expect(el.value).toStrictEqual(el.nullValue)
    
    // destroy(form) // teardown
  })

  it('should not add files on `handleDrop` when not in accept', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
          accept: ['.png'],
        }
      }
    })

    let el = form.vm.el$('el')

    let file = new File([''], 'filename.png')
    let file2 = new File([''], 'filename2.jpg')

    el.handleDrop({
      dataTransfer: {
        files: [file, file2]
      }
    })

    await nextTick()

    expect(el.value).toStrictEqual([file])

    // destroy() // teardown
  })
}