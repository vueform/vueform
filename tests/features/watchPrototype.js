import { createForm, findAllComponents, testValue, setValue } from 'test-helpers'
import { nextTick } from 'vue'

export const watcher = function (elementType, elementName, options) {
  const prototypes = options.prototypes

  it('should update instance schemas when `prototype` changes using element', async () => {
    let form = createForm({
      schema: {
        el: Object.assign({}, {
          type: elementType,
          initial: 1,
        }, prototypes[0])
      }
    })

    let el = form.vm.el$('el')
    let child = form.vm.el$('el.0')

    expect(child.label).toBe(prototypes[0].label || '')

    el.$set(el.schema.element, 'label', 'new label')

    await nextTick()

    expect(child.label).toBe('new label')
  })

  it('should update instance schemas when `prototype` changes using object', async () => {
    let form = createForm({
      schema: {
        el: Object.assign({}, {
          type: elementType,
          initial: 1,
        }, prototypes[1])
      }
    })

    let el = form.vm.el$('el')
    let child = form.vm.el$('el.0')

    expect(child.label).toBe(prototypes[0].label || '')

    el.$set(el.schema.object, 'label', 'new label')

    await nextTick()
    await nextTick()

    expect(child.label).toBe('new label')
  })
}

export default function (elementType, options) {
  const elementName = `${_.upperFirst(elementType)}Element`

  return () => {
    _.each(exports, (suite) => {
      suite(elementType, elementName, options)
    })
  }
}