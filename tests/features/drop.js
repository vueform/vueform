import { createForm, testPropDefault, findAllComponents, destroy } from 'test-helpers'
import { nextTick } from 'vue'
import flushPromises from 'flush-promises'

export const canDrop = function (elementType, elementName, options) {
  it('should return true for `canDrop` if browser supports dragging', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.canDrop).toBe(true)

    // destroy() // teardown
  })
}

export const handleDrop = function (elementType, elementName, options) {
  it('should update file with on `handleDrop`', () => {
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

    el.handleDrop({
      dataTransfer: {
        files: [file]
      }
    })

    expect(el.value).toStrictEqual(file)
    
    // destroy(form) // teardown
  })

  it('should trigger `handleDrop` when a file is being dropped', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
          drop: true,
        }
      }
    })

    let el = form.vm.el$('el')
    let DragAndDrop = findAllComponents(form, { name: 'DragAndDrop' }).at(0)

    let file = new File([''], 'filename.jpg')

    DragAndDrop.vm.$emit('drop', {
      dataTransfer: {
        files: [file]
      }
    })

    expect(el.value).toStrictEqual(file)
    
    // destroy(form) // teardown
  })

  it('should not update file on `handleDrop` when disabled', () => {
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

    el.handleDrop({
      dataTransfer: {
        files: [file]
      }
    })

    expect(el.value).toStrictEqual(el.nullValue)
    expect(el.dirty).toBe(false)
    
    // destroy(form) // teardown
  })

  it('should not update file on `handleDrop` when file type is not among accept', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
          accept: ['.png']
        }
      }
    })

    let el = form.vm.el$('el')

    let file = new File([''], 'filename.jpg')

    el.handleDrop({
      dataTransfer: {
        files: [file]
      }
    })

    expect(el.value).toStrictEqual(el.nullValue)
    expect(el.dirty).toBe(false)

    // destroy() // teardown
  })

  it('should call axios when auto=true', async () => {

    let requestMock = jest.fn(() => ({}))

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          drop: true,
          auto: true,
          onBeforeCreate(el$) {
            el$.$vueform.services.axios.request = requestMock
          }
        }
      }
    })

    let el = form.vm.el$('el')

    el.handleDrop({
      dataTransfer: {
        files: [new File([''], 'filename.jpg')]
      }
    })

    await flushPromises()
    
    expect(requestMock).toHaveBeenCalledTimes(1)

    // destroy(form) // teardown
  })

  it('should not call axios when auto=false', () => {

    let requestMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
          onBeforeCreate(el$) {
            el$.$vueform.services.axios.get = requestMock
          }
        }
      }
    })

    let el = form.vm.el$('el')

    el.handleDrop({
      dataTransfer: {
        files: [new File([''], 'filename.jpg')]
      }
    })

    expect(requestMock).toHaveBeenCalledTimes(0)

    // destroy(form) // teardown
  })
}

export const rendering = function (elementType, elementName, options) {
  it('should render DragAndDrop if "drop", "canDrop" and "canSelect" are "true"', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    let DragAndDrop = findAllComponents(form, { name: 'DragAndDrop' })

    expect(DragAndDrop.length).toBe(0)

    el.$set(form.vm.vueform.schema.el, 'drop', true)

    await nextTick()

    DragAndDrop = findAllComponents(form, { name: 'DragAndDrop' })
    expect(DragAndDrop.length).toBe(1)
    
    // destroy(form) // teardown
  })

  it('should not render upload button if `drop` is true', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          drop: true,
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    expect(elWrapper.html()).not.toContain(el.template.data().defaultClasses.button)
  })
  
  it('should render DragAndDrop with title and description from locale', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          drop: true,
        }
      }
    })

    let el = form.vm.el$('el')
    let DragAndDrop = findAllComponents(form, { name: 'DragAndDrop' }).at(0)

    expect(DragAndDrop.props('title')).toBe(el.__(`vueform.elements.${el.type}.dndTitle`))
    expect(DragAndDrop.props('description')).toBe(el.__(`vueform.elements.${el.type}.dndDescription`))
  })
  
  it('should click input element when DragAndDrop is clicked', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          drop: true,
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let DragAndDrop = findAllComponents(form, { name: 'DragAndDrop' }).at(0)

    let clickMock = jest.fn()

    el.input = {
      click: clickMock
    }

    expect(clickMock).not.toHaveBeenCalled()

    DragAndDrop.trigger('click')

    await nextTick()

    expect(clickMock).toHaveBeenCalled()

    // destroy() // teardown
  })
}