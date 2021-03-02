import { createForm } from 'test-helpers'

export const check = function (elementType, elementName, options) {
  it('should add single and multiple values to value on `check`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.check(1)
    expect(el.value).toStrictEqual([1])

    el.check(['2',3])
    expect(el.value).toStrictEqual([1,'2',3])
  })
}

export const uncheck = function (elementType, elementName, options) {
  it('should remove single and multiple values from value on `uncheck`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: [1,2,3]
        }
      }
    })

    let el = form.vm.el$('el')

    el.uncheck(1)
    expect(el.value).toStrictEqual([2,3])

    el.uncheck(['2',3])
    expect(el.value).toStrictEqual([])
  })
}

export const checkAll = function (elementType, elementName, options) {
  it('should `checkAll`', () => {
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
  })
}