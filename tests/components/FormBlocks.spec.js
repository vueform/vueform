import { createForm, findAllComponents, testDynamics } from 'test-helpers'
import { nextTick } from 'vue'

describe('Form Blocks', () => {
  it('helper spec to test steps & tabs collectively', async () => {

  })
})

const dynamicsTesting = (options) => {
  let {
    suiteName,
    existingBlocks,
    addedBlocks,
    blocks,
    block,
    blocksKeyword,
    blockKeyword,
    blocksSelector,
    blockSelector,
    controls,
  } = options

  describe(suiteName, () => {
    it('should add a new element', async () => {
      await testDynamics({
        existingElements: ['a'],
        addedElements: ['b'],
        [existingBlocks]: {
          first: {
            label: 'First',
            elements: ['a']
          }
        },
      }, blocksKeyword)
    })

    it('should create new ' + blocksKeyword + ' with existing element', async () => {
      await testDynamics({
        existingElements: ['a'],
        [addedBlocks]: {
          first: {
            label: 'First',
            elements: ['a']
          }
        },
      }, blocksKeyword)
    })

    it('should create new ' + blocksKeyword + ' with 3 existing elements in different order', async () => {
      await testDynamics({
        existingElements: ['a', 'b', 'c', 'd'],
        [addedBlocks]: {
          first: {
            label: 'First',
            elements: ['c', 'a', 'b']
          }
        },
      }, blocksKeyword)
    })

    it('should create new ' + blocksKeyword + ' with 1 existing element while adding a new one', async () => {
      await testDynamics({
        existingElements: ['a', 'b'],
        addedElements: ['c'],
        [addedBlocks]: {
          first: {
            label: 'First',
            elements: ['a']
          }
        },
      }, blocksKeyword)
    })

    it('should create new ' + blocksKeyword + ' containing a new element', async () => {
      await testDynamics({
        existingElements: ['a', 'b'],
        addedElements: ['c'],
        [addedBlocks]: {
          first: {
            label: 'First',
            elements: ['c']
          }
        },
      }, blocksKeyword)
    })

    it('should create new ' + blocksKeyword + ' containing an existing and a new element', async () => {
      await testDynamics({
        existingElements: ['a', 'b'],
        addedElements: ['c'],
        [addedBlocks]: {
          first: {
            label: 'First',
            elements: ['c', 'b']
          }
        },
      }, blocksKeyword)
    })

    it('should create new ' + blocksKeyword + ' containing 3 existing element in different order and a new one', async () => {
      await testDynamics({
        existingElements: ['a', 'b', 'c'],
        addedElements: ['d'],
        [addedBlocks]: {
          first: {
            label: 'First',
            elements: ['c', 'b', 'd', 'a']
          }
        },
      }, blocksKeyword)
    })

    it('should create new ' + blocksKeyword + ' containing 3 new elements in a different order', async () => {
      await testDynamics({
        existingElements: ['a'],
        addedElements: ['b', 'c', 'd'],
        [addedBlocks]: {
          first: {
            label: 'First',
            elements: ['c', 'b', 'd']
          }
        },
      }, blocksKeyword)
    })

    it('should create new ' + blocksKeyword + ' containing 3 new and 3 existing elements, all in different order', async () => {
      await testDynamics({
        existingElements: ['a', 'b', 'c'],
        addedElements: ['d', 'e', 'f'],
        [addedBlocks]: {
          first: {
            label: 'First',
            elements: ['c', 'a', 'd', 'b', 'f', 'e']
          }
        },
      }, blocksKeyword)
    })
    
    it('should remove element', async () => {
      let form = createForm({
        [blocks]: {
          first: {
            label: 'First',
            elements: ['a', 'b', 'c']
          }
        },
        schema: {
          a: {
            type: 'text',
            label: 'TextA'
          },
          b: {
            type: 'text',
            label: 'TextB'
          },
          c: {
            type: 'text',
            label: 'TextC'
          },
        }
      })

      await nextTick()

      form.vm.$delete(form.vm.vueform.schema, 'b')

      await nextTick()
      await nextTick()
      await nextTick()

      let a = findAllComponents(form, { name: 'TextElement' }).at(0)
      let c = findAllComponents(form, { name: 'TextElement' }).at(1)
      
      expect(form.findComponent({ name: blockSelector }).exists()).toBe(true)
      expect(form.findComponent({ name: blockSelector }).html()).toContain('First')

      expect(a.exists()).toBe(true)
      expect(c.exists()).toBe(true)

      expect(a.vm.name).toBe('a')
      expect(c.vm.name).toBe('c')

      await nextTick()

      expect(a.vm.visible).toBe(true)
      expect(c.vm.visible).toBe(true)

      await nextTick()
      
      if (controls) {
        expect(findAllComponents(form, { name: controls }).at(0).vm.visible).toBe(true)
        expect(findAllComponents(form, { name: controls }).at(1).vm.visible).toBe(false)
        expect(findAllComponents(form, { name: controls }).at(2).vm.visible).toBe(true)
        expect(findAllComponents(form, { name: controls }).at(0).vm.isDisabled).toBe(true)
        expect(findAllComponents(form, { name: controls }).at(2).vm.isDisabled).toBe(false)
      }
    })

    it('should add a new ' + blockKeyword + ' with one existing element', async () => {
      await testDynamics({
        existingElements: ['a', 'b', 'c'],
        [existingBlocks]: {
          first: {
            label: 'First',
            elements: ['a', 'b']
          }
        },
        [addedBlocks]: {
          second: {
            label: 'Second',
            elements: ['c']
          }
        },
        [block]: 'second'
      }, blocksKeyword)
    })

    it('should add a new ' + blockKeyword + ' with one existing and one new element', async () => {
      await testDynamics({
        existingElements: ['a', 'b', 'c'],
        addedElements: ['d'],
        [existingBlocks]: {
          first: {
            label: 'First',
            elements: ['a', 'b']
          }
        },
        [addedBlocks]: {
          second: {
            label: 'Second',
            elements: ['c', 'd']
          }
        },
        [block]: 'second'
      }, blocksKeyword)
    })

    it('should add two new steps with one-one existing elements', async () => {
      await testDynamics({
        existingElements: ['a', 'b', 'c'],
        [existingBlocks]: {
          first: {
            label: 'First',
            elements: ['a']
          }
        },
        [addedBlocks]: {
          second: {
            label: 'Second',
            elements: ['b']
          },
          third: {
            label: 'Third',
            elements: ['c']
          },
        },
        [block]: 'second'
      }, blocksKeyword)

      await testDynamics({
        existingElements: ['a', 'b', 'c'],
        [existingBlocks]: {
          first: {
            label: 'First',
            elements: ['a']
          }
        },
        [addedBlocks]: {
          second: {
            label: 'Second',
            elements: ['b']
          },
          third: {
            label: 'Third',
            elements: ['c']
          },
        },
        [block]: 'third'
      }, blocksKeyword)
    })
    
    it('should remove first ' + blockKeyword + ' while on first', async () => {
      let form = createForm({
        [blocks]: {
          first: {
            label: 'First',
            elements: ['a']
          },
          second: {
            label: 'Second',
            elements: ['b']
          },
          third: {
            label: 'Third',
            elements: ['c']
          },
        },
        schema: {
          a: {
            type: 'text',
            label: 'TextA'
          },
          b: {
            type: 'text',
            label: 'TextB'
          },
          c: {
            type: 'text',
            label: 'TextC'
          },
        }
      })

      await nextTick()

      let blocksComponent = form.findComponent({ name: blocksSelector })

      expect(blocksComponent.vm.current$.name).toBe('first')

      form.vm.$delete(form.vm.vueform[blocks], 'first')

      await nextTick()
      await nextTick()
      await nextTick()
      
      expect(blocksComponent.vm.current$.name).toBe('second')
    })
    
    it('should remove second ' + blockKeyword + ' while on first', async () => {
      let form = createForm({
        [blocks]: {
          first: {
            label: 'First',
            elements: ['a']
          },
          second: {
            label: 'Second',
            elements: ['b']
          },
          third: {
            label: 'Third',
            elements: ['c']
          },
        },
        schema: {
          a: {
            type: 'text',
            label: 'TextA'
          },
          b: {
            type: 'text',
            label: 'TextB'
          },
          c: {
            type: 'text',
            label: 'TextC'
          },
        }
      })

      await nextTick()

      let blocksComponent = form.findComponent({ name: blocksSelector })

      expect(blocksComponent.vm.next$.name).toBe('second')

      form.vm.$delete(form.vm.vueform[blocks], 'second')

      await nextTick()
      await nextTick()
      await nextTick()
      
      expect(blocksComponent.vm.next$.name).toBe('third')
    })
    
    it('should remove first ' + blockKeyword + ' while on second', async () => {
      let form = createForm({
        [blocks]: {
          first: {
            label: 'First',
            elements: ['a']
          },
          second: {
            label: 'Second',
            elements: ['b']
          },
          third: {
            label: 'Third',
            elements: ['c']
          },
        },
        schema: {
          a: {
            type: 'text',
            label: 'TextA'
          },
          b: {
            type: 'text',
            label: 'TextB'
          },
          c: {
            type: 'text',
            label: 'TextC'
          },
        }
      })

      await nextTick()

      let blocksComponent = form.findComponent({ name: blocksSelector })

      expect(blocksComponent.vm.previous$).toBe(undefined)

      blocksComponent.vm.goTo('second')

      await nextTick()
      
      expect(blocksComponent.vm.previous$.name).toBe('first')

      form.vm.$delete(form.vm.vueform[blocks], 'first')

      await nextTick()
      await nextTick()
      await nextTick()
      
      expect(blocksComponent.vm.previous$).toBe(undefined)
    })
    
    it('should remove second ' + blockKeyword + ' while on second', async () => {
      let form = createForm({
        [blocks]: {
          first: {
            label: 'First',
            elements: ['a']
          },
          second: {
            label: 'Second',
            elements: ['b']
          },
          third: {
            label: 'Third',
            elements: ['c']
          },
        },
        schema: {
          a: {
            type: 'text',
            label: 'TextA'
          },
          b: {
            type: 'text',
            label: 'TextB'
          },
          c: {
            type: 'text',
            label: 'TextC'
          },
        }
      })

      await nextTick()

      let blocksComponent = form.findComponent({ name: blocksSelector })

      expect(blocksComponent.vm.current$.name).toBe('first')

      blocksComponent.vm.goTo('second')

      await nextTick()

      expect(blocksComponent.vm.current$.name).toBe('second')

      form.vm.$delete(form.vm.vueform[blocks], 'second')

      await nextTick()
      await nextTick()
      await nextTick()

      expect(blocksComponent.vm.current$.name).toBe('first')
      expect(blocksComponent.vm.previous$).toBe(undefined)
    })
    
    it('should remove third ' + blockKeyword + ' while on second', async () => {
      let form = createForm({
        [blocks]: {
          first: {
            label: 'First',
            elements: ['a']
          },
          second: {
            label: 'Second',
            elements: ['b']
          },
          third: {
            label: 'Third',
            elements: ['c']
          },
        },
        schema: {
          a: {
            type: 'text',
            label: 'TextA'
          },
          b: {
            type: 'text',
            label: 'TextB'
          },
          c: {
            type: 'text',
            label: 'TextC'
          },
        }
      })

      await nextTick()

      let blocksComponent =form.findComponent({ name: blocksSelector })

      expect(blocksComponent.vm.next$.name).toBe('second')

      blocksComponent.vm.goTo('second', true)

      await nextTick()

      expect(blocksComponent.vm.next$.name).toBe('third')

      form.vm.$delete(form.vm.vueform[blocks], 'third')

      await nextTick()
      await nextTick()
      await nextTick()

      expect(blocksComponent.vm.next$).toBe(undefined)
    })

    it('should remove second ' + blockKeyword + ' while on third', async () => {
      let form = createForm({
        [blocks]: {
          first: {
            label: 'First',
            elements: ['a']
          },
          second: {
            label: 'Second',
            elements: ['b']
          },
          third: {
            label: 'Third',
            elements: ['c']
          },
        },
        schema: {
          a: {
            type: 'text',
            label: 'TextA'
          },
          b: {
            type: 'text',
            label: 'TextB'
          },
          c: {
            type: 'text',
            label: 'TextC'
          },
        }
      })

      await nextTick()

      let blocksComponent =form.findComponent({ name: blocksSelector })

      expect(blocksComponent.vm.previous$).toBe(undefined)

      blocksComponent.vm.goTo('third')

      await nextTick()

      expect(blocksComponent.vm.previous$.name).toBe('second')

      form.vm.$delete(form.vm.vueform[blocks], 'second')

      await nextTick()
      await nextTick()
      await nextTick()
      
      expect(blocksComponent.vm.previous$.name).toBe('first')
    })

    it('should remove third ' + blockKeyword + ' while on third', async () => {
      let form = createForm({
        [blocks]: {
          first: {
            label: 'First',
            elements: ['a']
          },
          second: {
            label: 'Second',
            elements: ['b']
          },
          third: {
            label: 'Third',
            elements: ['c']
          },
        },
        schema: {
          a: {
            type: 'text',
            label: 'TextA'
          },
          b: {
            type: 'text',
            label: 'TextB'
          },
          c: {
            type: 'text',
            label: 'TextC'
          },
        }
      })

      await nextTick()
      let blocksComponent =form.findComponent({ name: blocksSelector })

      expect(blocksComponent.vm.previous$).toBe(undefined)

      blocksComponent.vm.goTo('third', true)

      await nextTick()

      expect(blocksComponent.vm.previous$.name).toBe('second')

      form.vm.$delete(form.vm.vueform[blocks], 'third')

      await nextTick()
      await nextTick()
      await nextTick()
      
      expect(blocksComponent.vm.previous$).toBe(undefined)
    })
  })
}

export {
  dynamicsTesting,
}