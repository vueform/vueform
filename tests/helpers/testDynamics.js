import { createLocalVue } from '@vue/test-utils'

export default function testDynamics (done, options, type) {
  let LocalVue = createLocalVue()

  LocalVue.config.errorHandler = done

  let variables = type === 'wizard'
    ? {
        block: 'step',
        blocksSelector: 'FormWizard',
        blockSelector: 'FormWizardStep',
        controlSelectors: {
          previous: 'FormWizardPrevious',
          next: 'FormWizardNext',
          finish: 'FormWizardFinish',
        }
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
    let current = form.findComponent({ name: variables.blocksSelector }).vm.current$.name

    return first === current
  }

  let currentBlock = () => {
    return options[variables.block] || _.keys(blocks)[0]
  }

  let form = createForm({
    schema: existingElements,
    wizard: existingSteps,
    tabs: existingTabs,
  })

  if (!_.isEmpty(addedElements)) {
    form.setData({
      schema: addedElements
    })
  }

  LocalVue.nextTick(() => {
    if (!_.isEmpty(addedSteps)) {
      form.setData({
        wizard: addedSteps
      })
    }

    if (!_.isEmpty(addedTabs)) {
      form.setData({
        tabs: addedTabs
      })
    }

    LocalVue.nextTick(() => {
    LocalVue.nextTick(() => {
      if (options[variables.block]) {
        form.findComponent({ name: variables.blocksSelector }).vm.goTo(options[variables.block])
      }

      let i = 0
      _.each(blocks, (block) => {
        let blockComponent = form.findAllComponents({ name: variables.blockSelector }).at(i)

        expect(blockComponent.exists()).toBe(true)
        expect(blockComponent.html()).toContain(block.label)

        if (block.name === currentBlock()) {
          expect(blockComponent.vm.active).toBe(true)
        }
        i++
      })

      _.each(collectElements(), (name, index) => {
        let e = form.findAllComponents({ name: 'TextElement' }).at(index)

        expect(e.exists()).toBe(true)
        expect(e.vm.name).toBe(name)

        LocalVue.nextTick(() => {
          expect(e.vm.visible).toBe(elementShouldBeVisible(name, currentBlock()))
        })
      })

      LocalVue.nextTick(() => {
        LocalVue.nextTick(() => {
          if (variables.controlSelectors) {
            expect(form.findComponent({ name: variables.controlSelectors.previous }).vm.visible).toBe(true)

            if (_.keys(steps).length == 1) {
              expect(form.findComponent({ name: variables.controlSelectors.next }).vm.visible).toBe(false)
              expect(form.findComponent({ name: variables.controlSelectors.finish }).vm.visible).toBe(true)
              expect(form.findComponent({ name: variables.controlSelectors.previous }).vm.disabled).toBe(true)
              expect(form.findComponent({ name: variables.controlSelectors.finish }).vm.disabled).toBe(false)
            } else if (_.keys(steps).length > 1 && isAtFirstBlock(form)) {
              expect(form.findComponent({ name: variables.controlSelectors.next }).vm.visible).toBe(true)
              expect(form.findComponent({ name: variables.controlSelectors.finish }).vm.visible).toBe(false)
              expect(form.findComponent({ name: variables.controlSelectors.previous }).vm.disabled).toBe(true)
            }
          }

          done()
        })
      })
    })
    })
  })
}