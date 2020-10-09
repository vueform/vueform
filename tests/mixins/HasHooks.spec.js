import { createLocalVue } from '@vue/test-utils'
import { createForm } from 'test-helpers'

describe('Has Hooks Mixin', () => {
  it('should set `beforeUpdate`, `updated`, `beforeDestroy`, `destroyed` hooks in schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let beforeUpdateMock = jest.fn(() => {})
    let updatedMock = jest.fn(() => {})
    let beforeDestroyMock = jest.fn(() => {})
    let destroyedMock = jest.fn(() => {})

    let form = createForm({
      schema: {
        a: {
          type: 'text',
        }
      }
    })

    let a = form.findComponent({ name: 'TextElement' })

    a.vm.beforeUpdate = beforeUpdateMock
    a.vm.updated = updatedMock
    a.vm.beforeDestroy = beforeDestroyMock
    a.vm.destroyed = destroyedMock

    expect(beforeUpdateMock.mock.calls.length).toBe(0)
    expect(updatedMock.mock.calls.length).toBe(0)
    expect(beforeDestroyMock.mock.calls.length).toBe(0)
    expect(destroyedMock.mock.calls.length).toBe(0)

    a.vm.label = 'Aaaa'

    LocalVue.nextTick(() => {
      expect(beforeUpdateMock.mock.calls.length).toBe(1)
      expect(updatedMock.mock.calls.length).toBe(1)

      a.vm.$destroy()

      expect(beforeDestroyMock.mock.calls.length).toBe(1)
      expect(destroyedMock.mock.calls.length).toBe(1)

      done()
    })
  })
})