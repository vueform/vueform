import flushPromises from 'flush-promises'
import { createForm, findAllComponents, change, setInstances } from 'test-helpers'

describe('Lower Than Equal Rule', () => {
  it('should validate if the element\'s value is lower than or equal an other field\'s if value is string', async () => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'lte:b'
        },
        b: {
          type: 'text',
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    let b = findAllComponents(form, { name: 'TextElement' }).at(1)

    change(a, 'aaa')
    change(b, 'aa')

    expect(a.vm.invalid).toBe(true)

    change(a, 'aa')

    expect(a.vm.invalid).toBe(false)
  })

  it('should validate if the element\'s value is lower than or equal an other field\'s if value is numeric', async () => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'numeric|lte:b'
        },
        b: {
          type: 'text',
          rules: 'numeric'
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    let b = findAllComponents(form, { name: 'TextElement' }).at(1)

    change(a, '4')
    change(b, '3')

    setTimeout(() => {
      expect(a.vm.invalid).toBe(true)

      change(a, '3')

      setTimeout(() => {
        expect(a.vm.invalid).toBe(false)

        done()
      }, 1)
    }, 1)
  })

  it('should validate if the element\'s value is lower than or equal an other field\'s if value is array', async () => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          rules: 'array|lte:b',
          element: {
            type: 'text'
          }
        },
        b: {
          type: 'list',
          rules: 'array',
          element: {
            type: 'text'
          }
        },
      }
    })

    let a = findAllComponents(form, { name: 'ListElement' }).at(0)
    let b = findAllComponents(form, { name: 'ListElement' }).at(1)

    setInstances(a, 4)
    setInstances(b, 3)

    LocalVue.nextTick(() => {
      a.vm.validate()

      expect(a.vm.invalid).toBe(true)

      setInstances(a, 3)

      LocalVue.nextTick(() => {
        a.vm.validate()

        expect(a.vm.invalid).toBe(false)

        done()
      })
    })
  })
})