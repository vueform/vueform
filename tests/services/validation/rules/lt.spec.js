import { createLocalVue } from '@vue/test-utils'
import { createForm, change, setInstances } from './../../../../src/utils/testHelpers'

describe('Lower Than Rule', () => {
  it('should validate if the element\'s value is lower than an other field\'s if value is string', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'lt:b'
        },
        b: {
          type: 'text',
        },
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)
    let b = form.findAllComponents({ name: 'TextElement' }).at(1)

    change(a, 'aa')
    change(b, 'aa')

    expect(a.vm.invalid).toBe(true)

    change(a, 'a')

    expect(a.vm.invalid).toBe(false)

    done()
  })

  it('should validate if the element\'s value is lower than an other field\'s if value is numeric', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'numeric|lt:b'
        },
        b: {
          type: 'text',
          rules: 'numeric'
        },
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)
    let b = form.findAllComponents({ name: 'TextElement' }).at(1)

    change(a, '3')
    change(b, '3')

    setTimeout(() => {
      expect(a.vm.invalid).toBe(true)

      change(a, '2')

      setTimeout(() => {
        expect(a.vm.invalid).toBe(false)

        done()
      }, 1)
    }, 1)
  })

  it('should validate if the element\'s value is lower than an other field\'s if value is array', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          rules: 'array|lt:b',
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

    let a = form.findAllComponents({ name: 'ListElement' }).at(0)
    let b = form.findAllComponents({ name: 'ListElement' }).at(1)

    setInstances(a, 3)
    setInstances(b, 3)

    LocalVue.nextTick(() => {
      a.vm.validate()

      expect(a.vm.invalid).toBe(true)

      setInstances(a, 2)

      LocalVue.nextTick(() => {
        a.vm.validate()

        expect(a.vm.invalid).toBe(false)

        done()
      })
    })
  })
})