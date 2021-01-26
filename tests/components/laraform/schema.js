import { createForm, findAllComponents } from 'test-helpers'
import { nextTick } from 'composition-api'

export default function (data, options, name) {
  it(`should render schema when defined with ${name}`, async () => {
    let form = createForm(data, options || {})

    // Render
    let elWrapper = findAllComponents(form, { name: 'TextElement' }).at(0)
    let el2Wrapper

    expect(elWrapper.exists()).toBe(true)

    // Add
    form.vm.schema = {
      el: {
        type: 'text',
      },
      el2: {
        type: 'text',
      },
    }

    await nextTick()

    elWrapper = findAllComponents(form, { name: 'TextElement' }).at(0)
    el2Wrapper = findAllComponents(form, { name: 'TextElement' }).at(1)

    expect(elWrapper.vm.name).toBe('el')
    expect(el2Wrapper.vm.name).toBe('el2')

    // Reorder
    form.vm.schema = {
      el2: {
        type: 'text',
      },
      el: {
        type: 'text',
      },
    }

    await nextTick()

    elWrapper = findAllComponents(form, { name: 'TextElement' }).at(0)
    el2Wrapper = findAllComponents(form, { name: 'TextElement' }).at(1)

    expect(elWrapper.vm.name).toBe('el2')
    expect(el2Wrapper.vm.name).toBe('el')

    // Remove
    form.vm.schema = {
      el: {
        type: 'text',
      },
    }

    await nextTick()

    let elWrappers = findAllComponents(form, { name: 'TextElement' })
    elWrapper = findAllComponents(form, { name: 'TextElement' }).at(0)

    expect(elWrapper.vm.name).toBe('el')
    expect(elWrappers.length).toBe(1)
  })
}