import { createForm, testComputedOption } from 'test-helpers'
import { nextTick } from 'composition-api'

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
    expect(el.value).toStrictEqual(['1'])

    el.check(['2',3])
    expect(el.value).toStrictEqual(['1','2','3'])
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
    expect(el.value).toStrictEqual(['2','3'])

    el.uncheck(['2',3])
    expect(el.value).toStrictEqual([])
  })
}
