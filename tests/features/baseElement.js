import { createForm, destroy } from 'test-helpers'
import { nextTick } from 'vue'

export const isStatic = function (elementType, elementName, options) {
  it('should return `isStatic` false', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.isStatic).toBe(false)

    // destroy(form) // teardown

    // destroy() // teardown
  })
}

export const isFileType = function (elementType, elementName, options) {
  it('should return `isFileType` false', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.isFileType).toBe(false)

    // destroy(form) // teardown

    // destroy() // teardown
  })
}

export const isImageType = function (elementType, elementName, options) {
  it('should return `isImageType` false', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.isImageType).toBe(false)

    // destroy(form) // teardown

    // destroy() // teardown
  })
}

export const isArrayType = function (elementType, elementName, options) {
  it('should return `isArrayType` false', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.isArrayType).toBe(false)

    // destroy(form) // teardown

    // destroy() // teardown
  })
}

export const isActive = function (elementType, elementName, options) {

  it('should return `isActive` true', () => {

    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.isActive).toBe(true)

    // destroy(form) // teardown

    // destroy() // teardown
  })
}

export const el$ = function (elementType, elementName, options) {
  // @todo
}


export const activate = function (elementType, elementNAme, options) {

  it('should activate element', () => {

    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.isActive).toBe(true)

    el.deactivate()

    expect(el.isActive).toBe(false)

    el.activate()

    expect(el.isActive).toBe(true)

    // destroy(form) // teardown

    // destroy() // teardown
  })
}

export const deactivate = function (elementType, elementNAme, options) {

  it('should deactivate element', () => {

    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.isActive).toBe(true)

    el.deactivate()

    expect(el.isActive).toBe(false)

    // destroy(form) // teardown

    // destroy() // teardown
  })
}


export const hooks = function (elementType, elementName, options) {
  it('should have onBeforeCreate hook', () => {
    let hookMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          onBeforeCreate: hookMock,
        }
      }
    })

    expect(hookMock).toHaveBeenCalledTimes(1)

    // destroy(form) // teardown
  })

  it('should have onCreated hook', () => {
    let hookMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          onCreated: hookMock,
        }
      }
    })

    expect(hookMock).toHaveBeenCalledTimes(1)

    // destroy(form) // teardown
  })

  it('should have onBeforeMount hook', () => {
    let hookMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          onBeforeMount: hookMock,
        }
      }
    })

    expect(hookMock).toHaveBeenCalledTimes(1)

    // destroy(form) // teardown
  })

  it('should have onMounted hook', async () => {
    let hookMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          onMounted: hookMock,
        }
      }
    })

    expect(hookMock).toHaveBeenCalledTimes(1)

    // destroy(form) // teardown
  })

  it('should have onBeforeUpdate hook', async () => {
    let hookMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          onBeforeUpdate: hookMock,
        }
      }
    })

    let el = form.vm.el$('el')

    el.$forceUpdate()

    await nextTick()

    expect(hookMock).toHaveBeenCalledTimes(1)

    // destroy(form) // teardown
  })

  it('should have onUpdated hook', async () => {
    let hookMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          onUpdated: hookMock,
        }
      }
    })

    let el = form.vm.el$('el')

    el.$forceUpdate()

    await nextTick()

    expect(hookMock).toHaveBeenCalledTimes(1)

    // destroy(form) // teardown
  })

  it('should have onBeforeUnmount hook', async () => {
    let hookMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          onBeforeUnmount: hookMock,
        }
      }
    })

    form.vm.vueform.schema.el.type = elementType === 'text' ? 'textarea' : 'text'

    await nextTick()

    expect(hookMock).toHaveBeenCalledTimes(1)

    // destroy(form) // teardown
  })

  it('should have onUnmounted hook', async () => {
    let hookMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          onUnmounted: hookMock,
        }
      }
    })

    form.vm.vueform.schema.el.type = elementType === 'text' ? 'textarea' : 'text'

    await nextTick()

    expect(hookMock).toHaveBeenCalledTimes(1)

    // destroy(form) // teardown
  })
}