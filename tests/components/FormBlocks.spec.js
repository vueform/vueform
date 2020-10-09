import { createForm, testDynamics } from 'test-helpers'
import { createLocalVue } from '@vue/test-utils'

describe('Form Blocks', () => {
  it('helper spec to test wizard & tabs collectively', () => {

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
    controlSelectors,
  } = options

  describe(suiteName, () => {
    it('should add a new element', (done) => {
      testDynamics(done, {
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

    it('should create new ' + blocksKeyword + ' with existing element', (done) => {
      testDynamics(done, {
        existingElements: ['a'],
        [addedBlocks]: {
          first: {
            label: 'First',
            elements: ['a']
          }
        },
      }, blocksKeyword)
    })

    it('should create new ' + blocksKeyword + ' with 3 existing elements in different order', (done) => {
      testDynamics(done, {
        existingElements: ['a', 'b', 'c', 'd'],
        [addedBlocks]: {
          first: {
            label: 'First',
            elements: ['c', 'a', 'b']
          }
        },
      }, blocksKeyword)
    })

    it('should create new ' + blocksKeyword + ' with 1 existing element while adding a new one', (done) => {
      testDynamics(done, {
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

    it('should create new ' + blocksKeyword + ' containing a new element', (done) => {
      testDynamics(done, {
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

    it('should create new ' + blocksKeyword + ' containing an existing and a new element', (done) => {
      testDynamics(done, {
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

    it('should create new ' + blocksKeyword + ' containing 3 existing element in different order and a new one', (done) => {
      testDynamics(done, {
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

    it('should create new ' + blocksKeyword + ' containing 3 new elements in a different order', (done) => {
      testDynamics(done, {
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

    it('should create new ' + blocksKeyword + ' containing 3 new and 3 existing elements, all in different order', (done) => {
      testDynamics(done, {
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
    
    it('should remove element', (done) => {
      let LocalVue = createLocalVue()

      LocalVue.config.errorHandler = done

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

      LocalVue.nextTick(() => {
        form.vm.$delete(form.vm.schema, 'b')

        LocalVue.nextTick(() => {
          let a = form.findAllComponents({ name: 'TextElement' }).at(0)
          let c = form.findAllComponents({ name: 'TextElement' }).at(1)
          
          expect(form.findComponent({ name: blockSelector }).exists()).toBe(true)
          expect(form.findComponent({ name: blockSelector }).html()).toContain('First')

          expect(a.exists()).toBe(true)
          expect(c.exists()).toBe(true)

          expect(a.vm.name).toBe('a')
          expect(c.vm.name).toBe('c')

          LocalVue.nextTick(() => {
            expect(a.vm.visible).toBe(true)
            expect(c.vm.visible).toBe(true)

            LocalVue.nextTick(() => {
              if (controlSelectors) {
                expect(form.findComponent({ name: controlSelectors.previous }).vm.visible).toBe(true)
                expect(form.findComponent({ name: controlSelectors.next }).vm.visible).toBe(false)
                expect(form.findComponent({ name: controlSelectors.finish }).vm.visible).toBe(true)
                expect(form.findComponent({ name: controlSelectors.previous }).vm.disabled).toBe(true)
                expect(form.findComponent({ name: controlSelectors.finish }).vm.disabled).toBe(false)
              }
              done()
            })
          })
        })
      })
    })

    it('should add a new ' + blockKeyword + ' with one existing element', (done) => {
      testDynamics(done, {
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

    it('should add a new ' + blockKeyword + ' with one existing and one new element', (done) => {
      testDynamics(done, {
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

    it('should add two new steps with one-one existing elements', (done) => {
      testDynamics(done, {
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

      testDynamics(done, {
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
    
    it('should remove first ' + blockKeyword + 'while on first', (done) => {
      let LocalVue = createLocalVue()

      LocalVue.config.errorHandler = done

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

      LocalVue.nextTick(() => {
        let blocksComponent = form.findComponent({ name: blocksSelector })

        expect(blocksComponent.vm.current$.name).toBe('first')

        form.vm.$delete(form.vm[blocks], 'first')

        LocalVue.nextTick(() => {
        LocalVue.nextTick(() => {
        LocalVue.nextTick(() => {
          expect(blocksComponent.vm.current$.name).toBe('second')
          done()
        })
        })
        })
      })
    })
    
    it('should remove second ' + blockKeyword + 'while on first', (done) => {
      let LocalVue = createLocalVue()

      LocalVue.config.errorHandler = done

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

      LocalVue.nextTick(() => {
        let blocksComponent = form.findComponent({ name: blocksSelector })

        expect(blocksComponent.vm.next$.name).toBe('second')

        form.vm.$delete(form.vm[blocks], 'second')

        LocalVue.nextTick(() => {
        LocalVue.nextTick(() => {
        LocalVue.nextTick(() => {
          expect(blocksComponent.vm.next$.name).toBe('third')
          done()
        })
        })
        })
      })
    })
    
    it('should remove first ' + blockKeyword + 'while on second', (done) => {
      let LocalVue = createLocalVue()

      LocalVue.config.errorHandler = done

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

      LocalVue.nextTick(() => {
        let blocksComponent = form.findComponent({ name: blocksSelector })

        expect(blocksComponent.vm.previous$).toBe(undefined)

        blocksComponent.vm.goTo('second')

        LocalVue.nextTick(() => {
          expect(blocksComponent.vm.previous$.name).toBe('first')

          form.vm.$delete(form.vm[blocks], 'first')

          LocalVue.nextTick(() => {
          LocalVue.nextTick(() => {
          LocalVue.nextTick(() => {
            expect(blocksComponent.vm.previous$).toBe(undefined)
            done()
          })
          })
          })
        })
      })
    })
    
    it('should remove second ' + blockKeyword + 'while on second', (done) => {
      let LocalVue = createLocalVue()

      LocalVue.config.errorHandler = done

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

      LocalVue.nextTick(() => {
        let blocksComponent = form.findComponent({ name: blocksSelector })

        expect(blocksComponent.vm.current$.name).toBe('first')

        blocksComponent.vm.goTo('second')

        LocalVue.nextTick(() => {
          expect(blocksComponent.vm.current$.name).toBe('second')

          form.vm.$delete(form.vm[blocks], 'second')

          LocalVue.nextTick(() => {
          LocalVue.nextTick(() => {
          LocalVue.nextTick(() => {
            expect(blocksComponent.vm.current$.name).toBe('first')
            expect(blocksComponent.vm.previous$).toBe(undefined)
            done()
          })
          })
          })
        })
      })
    })
    
    it('should remove third ' + blockKeyword + 'while on second', (done) => {
      let LocalVue = createLocalVue()

      LocalVue.config.errorHandler = done

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

      LocalVue.nextTick(() => {
        let blocksComponent =form.findComponent({ name: blocksSelector })

        expect(blocksComponent.vm.next$.name).toBe('second')

        blocksComponent.vm.goTo('second', true)

        LocalVue.nextTick(() => {
          expect(blocksComponent.vm.next$.name).toBe('third')

          form.vm.$delete(form.vm[blocks], 'third')

          LocalVue.nextTick(() => {
          LocalVue.nextTick(() => {
          LocalVue.nextTick(() => {
            expect(blocksComponent.vm.next$).toBe(undefined)
            done()
          })
          })
          })
        })
      })
    })

    it('should remove second ' + blockKeyword + 'while on third', (done) => {
      let LocalVue = createLocalVue()

      LocalVue.config.errorHandler = done

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

      LocalVue.nextTick(() => {
        let blocksComponent =form.findComponent({ name: blocksSelector })

        expect(blocksComponent.vm.previous$).toBe(undefined)

        blocksComponent.vm.goTo('third')

        LocalVue.nextTick(() => {
          expect(blocksComponent.vm.previous$.name).toBe('second')

          form.vm.$delete(form.vm[blocks], 'second')

          LocalVue.nextTick(() => {
          LocalVue.nextTick(() => {
          LocalVue.nextTick(() => {
            expect(blocksComponent.vm.previous$.name).toBe('first')
            done()
          })
          })
          })
        })
      })
    })

    it('should remove third ' + blockKeyword + 'while on third', (done) => {
      let LocalVue = createLocalVue()

      LocalVue.config.errorHandler = done

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

      LocalVue.nextTick(() => {
        let blocksComponent =form.findComponent({ name: blocksSelector })

        expect(blocksComponent.vm.previous$).toBe(undefined)

        blocksComponent.vm.goTo('third', true)

        LocalVue.nextTick(() => {
          expect(blocksComponent.vm.previous$.name).toBe('second')

          form.vm.$delete(form.vm[blocks], 'third')

          LocalVue.nextTick(() => {
          LocalVue.nextTick(() => {
          LocalVue.nextTick(() => {
            expect(blocksComponent.vm.previous$).toBe(undefined)
            done()
          })
          })
          })
        })
      })
    })
  })
}

export {
  dynamicsTesting,
}