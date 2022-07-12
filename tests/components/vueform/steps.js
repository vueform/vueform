import { createForm, findAllComponents } from 'test-helpers'
import { nextTick } from 'vue'

export default function (data, options, name) {
  it(`should render steps when defined with ${name}`, async () => {
    let form = createForm(data, options || {})

    // Render
    let stepWrapper = findAllComponents(form, { name: 'FormStep' }).at(0)
    let step2Wrapper = findAllComponents(form, { name: 'FormStep' }).at(1)
    let step3Wrapper
    let stepWrappers

    expect(stepWrapper.exists()).toBe(true)
    expect(step2Wrapper.exists()).toBe(true)

    // Do not run change tests when using :props options
    if (!form.vm.vueform) {
      return
    }

    // Add
    form.vm.$set(form.vm.vueform, 'steps', {
      first: { label: 'First', elements: ['el'], },
      second: { label: 'Second', elements: ['el2'] },
      third: { label: 'Third', elements: ['el3'] },
    })

    await nextTick()

    stepWrapper = findAllComponents(form, { name: 'FormStep' }).at(0)
    step2Wrapper = findAllComponents(form, { name: 'FormStep' }).at(1)
    step3Wrapper = findAllComponents(form, { name: 'FormStep' }).at(2)

    expect(stepWrapper.vm.name).toBe('first')
    expect(step2Wrapper.vm.name).toBe('second')
    expect(step3Wrapper.vm.name).toBe('third')

    // Reorder
    form.vm.$set(form.vm.vueform, 'steps', {
      third: { label: 'Third', elements: ['el3'] },
      first: { label: 'First', elements: ['el'], },
      second: { label: 'Second', elements: ['el2'] },
    })

    await nextTick()

    stepWrapper = findAllComponents(form, { name: 'FormStep' }).at(0)
    step2Wrapper = findAllComponents(form, { name: 'FormStep' }).at(1)
    step3Wrapper = findAllComponents(form, { name: 'FormStep' }).at(2)

    expect(stepWrapper.vm.name).toBe('third')
    expect(step2Wrapper.vm.name).toBe('first')
    expect(step3Wrapper.vm.name).toBe('second')

    // Remove
    form.vm.$set(form.vm.vueform, 'steps', {
      third: { label: 'Third', elements: ['el3'] },
      second: { label: 'Second', elements: ['el2'] },
    })

    await nextTick()

    stepWrappers = findAllComponents(form, { name: 'FormStep' })
    stepWrapper = findAllComponents(form, { name: 'FormStep' }).at(0)
    step2Wrapper = findAllComponents(form, { name: 'FormStep' }).at(1)

    expect(stepWrapper.vm.name).toBe('third')
    expect(step2Wrapper.vm.name).toBe('second')
    expect(stepWrappers.length).toBe(2)
  })
}