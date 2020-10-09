import { createLocalVue } from '@vue/test-utils'
import { createForm, findAllComponents, change, setInstances } from './.test-helpers'

describe('Greater Than Equal Rule', () => {
  it('should validate if the element\'s value is greater than or equal an other field\'s if value is string', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'gte:b'
        },
        b: {
          type: 'text',
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    let b = findAllComponents(form, { name: 'TextElement' }).at(1)

    change(a, 'aa')
    change(b, 'aa')

    expect(a.vm.invalid).toBe(false)

    change(a, 'a')

    expect(a.vm.invalid).toBe(true)

    done()
  })

  it('should validate if the element\'s value is greater than or equal an other field\'s if value is numeric', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'numeric|gte:b'
        },
        b: {
          type: 'text',
          rules: 'numeric'
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    let b = findAllComponents(form, { name: 'TextElement' }).at(1)

    change(a, '3')
    change(b, '3')


    setTimeout(() => {
      expect(a.vm.invalid).toBe(false)

      change(a, '2')

      setTimeout(() => {
        expect(a.vm.invalid).toBe(true)

        done()
      }, 1)
    }, 1)
  })

  it('should validate if the element\'s value is greater than or equal an other field\'s if value is array', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          rules: 'array|gte:b',
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

    setInstances(a, 3)
    setInstances(b, 3)

    LocalVue.nextTick(() => {
      a.vm.validate()

      expect(a.vm.invalid).toBe(false)

      setInstances(a, 2)

      LocalVue.nextTick(() => {
        a.vm.validate()

        expect(a.vm.invalid).toBe(true)

        done()
      })
    })
  })
})