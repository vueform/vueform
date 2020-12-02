import { createForm, testComputedOption, findAllComponents } from 'test-helpers'
import { nextTick } from 'composition-api'

export const drop = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'drop', false, true)
}

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
    expect(el.dirty).toBe(true)
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
    expect(el.dirty).toBe(true)
  })

  it('should not update file on `handleDrop` when disbled', () => {
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

    expect(el.value).toStrictEqual(el.null)
    expect(el.dirty).toBe(false)
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

    el.drop = true

    await nextTick()

    DragAndDrop = findAllComponents(form, { name: 'DragAndDrop' })
    expect(DragAndDrop.length).toBe(1)

    el.disable()
    
    await nextTick()

    DragAndDrop = findAllComponents(form, { name: 'DragAndDrop' })
    expect(DragAndDrop.length).toBe(0)
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

    expect(elWrapper.html()).not.toContain(el.classes.selectButton)
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

    expect(DragAndDrop.props('title')).toBe(el.__(`laraform.elements.${el.type}.dndTitle`))
    expect(DragAndDrop.props('description')).toBe(el.__(`laraform.elements.${el.type}.dndDescription`))
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
  })
}