import { createForm, destroy } from 'test-helpers'

export const toggle = function (elementType, elementName, options) {
  it('should `toggle` selected element', () => {

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: [1,'2',3],
        }
      }
    })

    let el = form.vm.el$('el')

    el.toggle(1)
    expect(el.value).toStrictEqual([1])

    el.toggle(1)
    el.toggle('2')
    el.toggle(3)
    expect(el.value).toStrictEqual(['2',3])

    // destroy(form) // teardown

    // destroy() // teardown
  })
}

export const check = function (elementType, elementName, options) {
  it('should add single and multiple values to value on `check`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: [1,'2',3],
        }
      }
    })

    let el = form.vm.el$('el')

    el.check(1)
    expect(el.value).toStrictEqual([1])

    el.check(['2',3])
    expect(el.value).toStrictEqual([1,'2',3])

    // destroy(form) // teardown

    // destroy() // teardown
  })
}

export const uncheck = function (elementType, elementName, options) {
  it('should remove single and multiple values from value on `uncheck`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: [1,2,3],
          default: [1,2,3]
        }
      }
    })

    let el = form.vm.el$('el')

    el.uncheck(1)
    expect(el.value).toStrictEqual([2,3])

    el.uncheck(['2',3])
    expect(el.value).toStrictEqual([])

    // destroy(form) // teardown

    // destroy() // teardown
  })
}

export const checkAll = function (elementType, elementName, options) {
  it('should `checkAll` when plain object', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: {
            1: 'value',
            2: 'value2',
            3: 'value3'
          }
        }
      }
    })

    let el = form.vm.el$('el')

    el.checkAll()

    expect(el.value).toStrictEqual(['1','2','3'])

    // destroy(form) // teardown

    // destroy() // teardown
  })

  it('should `checkAll` when array', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: [1,2,3]
        }
      }
    })

    let el = form.vm.el$('el')

    el.checkAll()

    expect(el.value).toStrictEqual([1,2,3])

    // destroy(form) // teardown

    // destroy() // teardown
  })

  it('should `checkAll` when array of objects', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: [
            { value: 1, label: 'value', },
            { value: 2, label: 'value2', },
            { value: 3, label: 'value3', },
          ]
        }
      }
    })

    let el = form.vm.el$('el')

    el.checkAll()

    expect(el.value).toStrictEqual([1,2,3])

    // destroy(form) // teardown

    // destroy() // teardown
  })
}

export const uncheckAll = function (elementType, elementName, options) {
  it('should `uncheckAll`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: {
            '1': 'value',
            '2': 'value2',
            '3': 'value3'
          },
          default: [1,2,3],
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.value).toStrictEqual([1,2,3])

    el.uncheckAll()

    expect(el.value).toStrictEqual([])

    // destroy(form) // teardown
  })

  it('should `uncheckAll` when array', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: [1,2,3]
        }
      }
    })

    let el = form.vm.el$('el')

    el.checkAll()

    expect(el.value).toStrictEqual([1,2,3])

    el.uncheckAll()

    expect(el.value).toStrictEqual([])

    // destroy(form) // teardown

    // destroy() // teardown
  })

  it('should `uncheckAll` when array of objects', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: [
            { value: 1, label: 'value', },
            { value: 2, label: 'value2', },
            { value: 3, label: 'value3', },
          ]
        }
      }
    })

    let el = form.vm.el$('el')

    el.checkAll()

    expect(el.value).toStrictEqual([1,2,3])

    el.uncheckAll()

    expect(el.value).toStrictEqual([])

    // destroy(form) // teardown

    // destroy() // teardown
  })
}