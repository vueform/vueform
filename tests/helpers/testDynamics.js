import { createForm, findAllComponents } from 'test-helpers'
import { nextTick } from 'vue'
import asyncForEach from './../../src/utils/asyncForEach'

export default async function testDynamics (options, type) {
  let variables = type === 'steps'
    ? {
        block: 'step',
        blocksSelector: 'FormSteps',
        blockSelector: 'FormStep',
        controlSelectors: 'FormStepsControl'
      }
    : {
        block: 'tab',
        blocksSelector: 'FormTabs',
        blockSelector: 'FormTab',
        controlSelectors: false
      }

  let existingElements = {}
  _.each(options.existingElements || {}, (name) => {
    existingElements[name] = {
      type: 'text',
      label: 'Text' + name.toUpperCase()
    }
  })

  let addedElements = {}
  _.each(options.addedElements || {}, (name) => {
    addedElements[name] = {
      type: 'text',
      label: 'Text' + name.toUpperCase()
    }
  })

  let existingSteps = {}
  _.each(options.existingSteps || {}, (step, name) => {
    existingSteps[name] = step
  })

  let addedSteps = {}
  _.each(options.addedSteps || {}, (step, name) => {
    addedSteps[name] = step
  })

  let existingTabs = {}
  _.each(options.existingTabs || {}, (step, name) => {
    existingTabs[name] = step
  })

  let addedTabs = {}
  _.each(options.addedTabs || {}, (step, name) => {
    addedTabs[name] = step
  })

  let steps = Object.assign({}, existingSteps, addedSteps)
  let tabs = Object.assign({}, existingTabs, addedTabs)
  let blocks = !_.isEmpty(steps) ? steps : tabs

  let collectElements = () => {
    let elements = []
    let all = _.concat(options.existingElements || [], options.addedElements || [])

    _.each(blocks, (block) => {
      _.each(block.elements, (element) => {
        elements.push(element)
      })
    })

    _.each(all, (element) => {
      if (elements.indexOf(element) === -1) {
        elements.push(element)
      }
    })

    return elements
  }

  let elementShouldBeVisible = (elementName, blockName) => {
    return blocks[blockName].elements.indexOf(elementName) !== -1
  }

  let isAtFirstBlock = (form) => {
    let first = _.keys(variables.block)[0]
    let current = findAllComponents(form, { name: variables.blocksSelector }).at(0).vm.current$.name

    return first === current
  }

  let currentBlock = () => {
    return options[variables.block] || _.keys(blocks)[0]
  }

  let form = createForm({
    schema: existingElements,
    steps: existingSteps,
    tabs: existingTabs,
  })

  if (!_.isEmpty(addedElements)) {
    form.vm.$set(form.vm.vueform, 'schema', Object.assign({}, existingElements, addedElements))
  }

  if (!_.isEmpty(addedSteps)) {
    form.vm.$set(form.vm.vueform, 'steps', Object.assign({}, existingSteps, addedSteps))
  }

  if (!_.isEmpty(addedTabs)) {
    form.vm.$set(form.vm.vueform, 'tabs', Object.assign({}, existingTabs, addedTabs))
  }

  await nextTick()
  await nextTick()
  await nextTick()

  if (options[variables.block]) {
    findAllComponents(form, { name: variables.blocksSelector }).at(0).vm.goTo(options[variables.block])
  }

  let i = 0
  _.each(blocks, (block) => {
    let blockComponent = findAllComponents(form, { name: variables.blockSelector }).at(i)

    expect(blockComponent.exists()).toBe(true)
    expect(blockComponent.html()).toContain(block.label)

    if (block.name === currentBlock()) {
      expect(blockComponent.vm.active).toBe(true)
    }
    i++
  })

  await asyncForEach(collectElements(), async (name, index) => {
    let e = findAllComponents(form, { name: 'TextElement' }).at(index)

    expect(e.exists()).toBe(true)
    expect(e.vm.name).toBe(name)

    await nextTick()
    
    expect(e.vm.visible).toBe(elementShouldBeVisible(name, currentBlock()))
  })

  await nextTick()
  await nextTick()

  if (variables.controlSelectors) {
    expect(findAllComponents(form, { name: variables.controlSelectors }).at(0).vm.visible).toBe(true)

    if (_.keys(steps).length == 1) {
      expect(findAllComponents(form, { name: variables.controlSelectors }).at(1).vm.visible).toBe(false)
      expect(findAllComponents(form, { name: variables.controlSelectors }).at(2).vm.visible).toBe(true)
      expect(findAllComponents(form, { name: variables.controlSelectors }).at(0).vm.isDisabled).toBe(true)
      expect(findAllComponents(form, { name: variables.controlSelectors }).at(2).vm.isDisabled).toBe(false)
    } else if (_.keys(steps).length > 1 && isAtFirstBlock(form)) {
      expect(findAllComponents(form, { name: variables.controlSelectors }).at(1).vm.visible).toBe(true)
      expect(findAllComponents(form, { name: variables.controlSelectors }).at(2).vm.visible).toBe(false)
      expect(findAllComponents(form, { name: variables.controlSelectors }).at(0).vm.isDisabled).toBe(true)
    }
  }
}