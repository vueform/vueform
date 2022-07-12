import { createForm, findAllComponents } from 'test-helpers'
import { nextTick } from 'vue'

export default function (data, options, name) {
  it(`should render tabs when defined with ${name}`, async () => {
    let form = createForm(data, options || {})

    // Render
    let tabWrapper = findAllComponents(form, { name: 'FormTab' }).at(0)
    let tab2Wrapper = findAllComponents(form, { name: 'FormTab' }).at(1)
    let tab3Wrapper
    let tabWrappers

    expect(tabWrapper.exists()).toBe(true)
    expect(tab2Wrapper.exists()).toBe(true)

    // Do not run change tests when using :props options
    if (!form.vm.vueform) {
      return
    }

    // Add
    form.vm.$set(form.vm.vueform, 'tabs', {
      first: { label: 'First', elements: ['el'], },
      second: { label: 'Second', elements: ['el2'] },
      third: { label: 'Third', elements: ['el3'] },
    })

    await nextTick()

    tabWrapper = findAllComponents(form, { name: 'FormTab' }).at(0)
    tab2Wrapper = findAllComponents(form, { name: 'FormTab' }).at(1)
    tab3Wrapper = findAllComponents(form, { name: 'FormTab' }).at(2)

    expect(tabWrapper.vm.name).toBe('first')
    expect(tab2Wrapper.vm.name).toBe('second')
    expect(tab3Wrapper.vm.name).toBe('third')

    // Reorder
    form.vm.$set(form.vm.vueform, 'tabs', {
      third: { label: 'Third', elements: ['el3'] },
      first: { label: 'First', elements: ['el'], },
      second: { label: 'Second', elements: ['el2'] },
    })

    await nextTick()

    tabWrapper = findAllComponents(form, { name: 'FormTab' }).at(0)
    tab2Wrapper = findAllComponents(form, { name: 'FormTab' }).at(1)
    tab3Wrapper = findAllComponents(form, { name: 'FormTab' }).at(2)

    expect(tabWrapper.vm.name).toBe('third')
    expect(tab2Wrapper.vm.name).toBe('first')
    expect(tab3Wrapper.vm.name).toBe('second')

    // Remove
    form.vm.$set(form.vm.vueform, 'tabs', {
      third: { label: 'Third', elements: ['el3'] },
      second: { label: 'Second', elements: ['el2'] },
    })

    await nextTick()

    tabWrappers = findAllComponents(form, { name: 'FormTab' })
    tabWrapper = findAllComponents(form, { name: 'FormTab' }).at(0)
    tab2Wrapper = findAllComponents(form, { name: 'FormTab' }).at(1)

    expect(tabWrapper.vm.name).toBe('third')
    expect(tab2Wrapper.vm.name).toBe('second')
    expect(tabWrappers.length).toBe(2)
  })
}