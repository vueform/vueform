import { createForm, findAllComponents, testComputedOption, createElement } from 'test-helpers'
import { defineComponent, markRaw, nextTick } from 'composition-api'

export const slots = function (elementType, elementName, options) {
  const defaultForm = createForm({
    schema: {
      el: {
        type: elementType,
      }
    }
  })

  const defaultSlots = findAllComponents(defaultForm, { name: elementName }).at(0).vm.slots
  const defaultSlotKeys = _.keys(defaultSlots)

  // Computed Options
  testComputedOption(it, elementType, 'before', null, 'before')
  testComputedOption(it, elementType, 'between', null, 'between')
  testComputedOption(it, elementType, 'after', null, 'after')
  
  // Computed Props
  it('should have default `slots` by default', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(_.keys(el.slots)).toStrictEqual(defaultSlotKeys)
  })

  it('should set `slots` from schema', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          slots: {
            custom: 'custom-slot'
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.slots).toStrictEqual(Object.assign({}, defaultSlots, {
      custom: 'custom-slot'
    }))
  })

  it('should set `slots` to schema', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.slots = {
      custom: 'custom-slot'
    }

    expect(el.slots).toStrictEqual(Object.assign({}, defaultSlots, {
      custom: 'custom-slot'
    }))
  })

  // Template
  it('should render `before`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          before: 'it is before'
        }
      }
    })

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    expect(elWrapper.html()).toContain('it is before')
  })

  it('should render `between`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          between: 'it is between'
        }
      }
    })

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    expect(elWrapper.html()).toContain('it is between')
  })

  it('should render `after`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          after: 'it is after'
        }
      }
    })

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    expect(elWrapper.html()).toContain('it is after')
  })

  // Slots
  _.each(_.keys(defaultSlots), (slot) => {
    testSchemaSlot(it, elementName, elementType, slot)
  })
  
  _.each(_.keys(defaultSlots), (slot) => {
    testDynamicSchemaSlot(it, elementName, elementType, slot)
  })

  _.each(_.keys(defaultSlots), (slot) => {
    testInlineSlot(it, elementName, elementType, slot)
  })
}

const testSchemaSlot = function(it, elementName, elementType, slot) {
  it('should replace `'+slot+'` slot from schema', async () => {
    let form
    let elWrapper
    let CustomSlot

    switch (slot) {
      case 'multiplelabel':
        form = createForm({
          schema: {
            el: {
              type: elementType,
              items: {
                1: 'value',
              },
              native: false,
              slots: {
                [slot]: markRaw({
                  name: 'CustomSlot',
                  props: ['el$', 'values'],
                  render(h) {
                    return createElement(h, 'div', 'from schema slot ' + this.values.length)
                  }
                })
              }
            }
          }
        })

        elWrapper = findAllComponents(form, { name: elementName }).at(0)
        elWrapper.vm.load([1])

        await nextTick()

        CustomSlot = findAllComponents(elWrapper, { name: 'CustomSlot' })

        expect(CustomSlot.length).toBe(1)
        expect(CustomSlot.at(0).html()).toContain('from schema slot 1')
        break

      case 'tag':
        form = createForm({
          schema: {
            el: {
              type: elementType,
              items: {
                1: 'value',
              },
              native: false,
              slots: {
                [slot]: markRaw(defineComponent({
                  name: 'CustomSlot',
                  props: ['el$', 'option'],
                  render(h) {
                    return createElement(h, 'div', 'from schema slot ' + this.option.label)
                  }
                }))
              }
            }
          }
        })

        elWrapper = findAllComponents(form, { name: elementName }).at(0)
        elWrapper.vm.load([1])

        await nextTick()

        CustomSlot = findAllComponents(elWrapper, { name: 'CustomSlot' })

        expect(CustomSlot.length).toBe(1)
        expect(CustomSlot.at(0).html()).toContain('from schema slot value')
        break

      case 'option':
        form = createForm({
          schema: {
            el: {
              type: elementType,
              items: {
                1: 'value'
              },
              native: false,
              slots: {
                [slot]: markRaw(defineComponent({
                  name: 'CustomSlot',
                  props: ['el$', 'option'],
                  render(h) {
                    return createElement(h, 'div', 'from schema slot ' + this.option.label)
                  }
                }))
              }
            }
          }
        })

        elWrapper = findAllComponents(form, { name: elementName }).at(0)
        CustomSlot = findAllComponents(elWrapper, { name: 'CustomSlot' })

        expect(CustomSlot.length).toBe(1)
        expect(CustomSlot.at(0).html()).toContain('from schema slot value')
        break

      case 'singlelabel':
        form = createForm({
          schema: {
            el: {
              type: elementType,
              items: {
                1: 'value',
              },
              native: false,
              slots: {
                [slot]: markRaw(defineComponent({
                  name: 'CustomSlot',
                  props: ['el$', 'value'],
                  render(h) {
                    return createElement(h, 'div', 'from schema slot ' + this.value.label)
                  }
                }))
              }
            }
          }
        })

        elWrapper = findAllComponents(form, { name: elementName }).at(0)
        elWrapper.vm.load(1)

        await nextTick()
        await nextTick()

        CustomSlot = findAllComponents(elWrapper, { name: 'CustomSlot' })

        expect(CustomSlot.length).toBe(1)
        expect(CustomSlot.at(0).html()).toContain('from schema slot value')
        break

      default:
        form = createForm({
          schema: {
            el: {
              type: elementType,
              label: 'label',
              info: 'info',
              items: {
                1: 'value',
              },
              native: false,
              slots: {
                [slot]: markRaw(defineComponent({
                  name: 'CustomSlot',
                  props: ['el$'],
                  render(h) {
                    return createElement(h, 'div', 'from schema slot')
                  }
                }))
              }
            }
          }
        })

        elWrapper = findAllComponents(form, { name: elementName }).at(0)
        CustomSlot = findAllComponents(elWrapper, { name: 'CustomSlot' })

        expect(CustomSlot.length).toBe(1)
    }

  })
}

const testDynamicSchemaSlot = function(it, elementName, elementType, slot) {
  it('should replace `'+slot+'` slot from schema when changes', async () => {
    let form
    let el
    let elWrapper
    let CustomSlot

    switch (slot) {
      case 'multiplelabel':
        form = createForm({
          schema: {
            el: {
              type: elementType,
              items: {
                1: 'value',
              },
              native: false,
            }
          }
        })

        el = form.vm.el$('el')
        elWrapper = findAllComponents(form, { name: elementName }).at(0)

        el.slots = {
          [slot]: markRaw(defineComponent({
            name: 'CustomSlot',
            props: ['el$', 'values'],
            render(h) {
              return createElement(h, 'div', 'from schema slot ' + this.values.length)
            }
          }))
        }

        await nextTick()
        el.load([1])
        await nextTick()

        CustomSlot = findAllComponents(elWrapper, { name: 'CustomSlot' })
        expect(CustomSlot.length).toBe(1)
        expect(CustomSlot.at(0).html()).toContain('from schema slot 1')
        break

      case 'tag':
        form = createForm({
          schema: {
            el: {
              type: elementType,
              items: {
                1: 'value',
              },
              native: false,
            }
          }
        })

        el = form.vm.el$('el')
        elWrapper = findAllComponents(form, { name: elementName }).at(0)

        el.slots = {
          [slot]: markRaw(defineComponent({
            name: 'CustomSlot',
            props: ['el$', 'option'],
            render(h) {
              return createElement(h, 'div', 'from schema slot ' + this.option.label)
            }
          }))
        }

        await nextTick()
        el.load([1])
        await nextTick()

        CustomSlot = findAllComponents(elWrapper, { name: 'CustomSlot' })
        expect(CustomSlot.length).toBe(1)
        expect(CustomSlot.at(0).html()).toContain('from schema slot value')
        break

      case 'option':
        form = createForm({
          schema: {
            el: {
              type: elementType,
              items: {
                1: 'value',
              },
              native: false,
            }
          }
        })

        el = form.vm.el$('el')
        elWrapper = findAllComponents(form, { name: elementName }).at(0)

        el.slots = {
          [slot]: markRaw(defineComponent({
            name: 'CustomSlot',
            props: ['el$', 'option'],
            render(h) {
              return createElement(h, 'div', 'from schema slot ' + this.option.label)
            }
          }))
        }
        
        await nextTick()

        CustomSlot = findAllComponents(elWrapper, { name: 'CustomSlot' })
        expect(CustomSlot.length).toBe(1)
        expect(CustomSlot.at(0).html()).toContain('from schema slot value')
        break

      case 'singlelabel':
        form = createForm({
          schema: {
            el: {
              type: elementType,
              items: {
                1: 'value',
              },
              native: false,
            }
          }
        })

        el = form.vm.el$('el')
        elWrapper = findAllComponents(form, { name: elementName }).at(0)

        el.slots = {
          [slot]: markRaw(defineComponent({
            name: 'CustomSlot',
            props: ['el$', 'value'],
            render(h) {
              return createElement(h, 'div', 'from schema slot ' + this.value.label)
            }
          }))
        }

        await nextTick()
        el.load(1)
        await nextTick()

        CustomSlot = findAllComponents(elWrapper, { name: 'CustomSlot' })
        expect(CustomSlot.length).toBe(1)
        expect(CustomSlot.at(0).html()).toContain('from schema slot value')
        break

      default:
        form = createForm({
          schema: {
            el: {
              type: elementType,
              label: 'label',
              info: 'info',
              items: {
                1: 'value',
              },
              native: false,
            }
          }
        })

        el = form.vm.el$('el')
        elWrapper = findAllComponents(form, { name: elementName }).at(0)

        el.slots = {
          [slot]: markRaw(defineComponent({
            name: 'CustomSlot',
            props: ['el$'],
            render(h) {
              return createElement(h, 'div', 'from schema slot')
            }
          }))
        }

        await nextTick()

        CustomSlot = findAllComponents(elWrapper, { name: 'CustomSlot' })
        expect(CustomSlot.length).toBe(1)
    }

  })
}

const testInlineSlot = function(it, elementName, elementType, slot) {
  it('should replace `'+slot+'` slot inline', async () => {
    let form
    let elWrapper
    let el

    switch (slot) {
      case 'multiplelabel':
        form = createForm({
          schema: {
            el: {
              type: elementType
            }
          }
        }, {}, function(h) {
          return createElement(h, 'form', [
            createElement(h, this.extendedTheme.elements[elementName], {
              props: {
                schema: {
                  type: elementType,
                  items: {
                    1: 'value',
                  },
                  native: false,
                },
                name: 'el',
              },
              scopedSlots: {
                [slot]: (props) => {
                  return createElement(h, 'div', 'from inline slot ' + props.values.length)
                }
              }
            })
          ])
        })

        el = form.vm.el$('el')
        el.load([1])

        await nextTick()

        elWrapper = findAllComponents(form, { name: elementName }).at(0)
        
        expect(elWrapper.html()).toContain('from inline slot 1')
        break

      case 'tag':
        form = createForm({
          schema: {
            el: {
              type: elementType
            }
          }
        }, {}, function(h) {
          return createElement(h, 'form', [
            createElement(h, this.extendedTheme.elements[elementName], {
              props: {
                schema: {
                  type: elementType,
                  items: {
                    1: 'value',
                  },
                  native: false,
                },
                name: 'el',
              },
              scopedSlots: {
                [slot]: (props) => {
                  return createElement(h, 'div', 'from inline slot ' + props.option.label)
                }
              }
            })
          ])
        })

        el = form.vm.el$('el')
        el.load([1])

        await nextTick()

        elWrapper = findAllComponents(form, { name: elementName }).at(0)
        
        expect(elWrapper.html()).toContain('from inline slot value')
        break

      case 'option':
        form = createForm({
          schema: {
            el: {
              type: elementType
            }
          }
        }, {}, function(h) {
          return createElement(h, 'form', [
            createElement(h, this.extendedTheme.elements[elementName], {
              props: {
                schema: {
                  type: elementType,
                  items: {
                    1: 'value',
                  },
                  native: false,
                },
                name: 'el',
              },
              scopedSlots: {
                [slot]: (props) => {
                  return createElement(h, 'div', 'from inline slot ' + props.option.label)
                }
              }
            })
          ])
        })

        await nextTick()

        el = form.vm.el$('el')
        elWrapper = findAllComponents(form, { name: elementName }).at(0)
        
        expect(elWrapper.html()).toContain('from inline slot value')
        break

      case 'singlelabel':
        form = createForm({
          schema: {
            el: {
              type: elementType
            }
          }
        }, {}, function(h) {
          return createElement(h, 'form', [
            createElement(h, this.extendedTheme.elements[elementName], {
              props: {
                schema: {
                  type: elementType,
                  items: {
                    1: 'value',
                  },
                  native: false,
                },
                name: 'el',
              },
              scopedSlots: {
                [slot]: (props) => {
                  return createElement(h, 'div', 'from inline slot ' + props.value.label)
                }
              }
            })
          ])
        })

        el = form.vm.el$('el')
        el.load(1)

        await nextTick()

        elWrapper = findAllComponents(form, { name: elementName }).at(0)
        
        expect(elWrapper.html()).toContain('from inline slot value')
        break

      default:
        form = createForm({
          schema: {
            el: {
              type: elementType
            }
          }
        }, {}, function(h) {
          return createElement(h, 'form', [
            createElement(h, this.extendedTheme.elements[elementName], {
              props: {
                schema: {
                  type: elementType,
                  label: 'label',
                  info: 'info',
                  items: {
                    1: 'value',
                  },
                  native: false,
                },
                name: 'el',
              },
              scopedSlots: {
                [slot]: (props) => {
                  return createElement(h, 'div', 'from inline slot')
                }
              }
            })
          ])
        })

        elWrapper = findAllComponents(form, { name: elementName }).at(0)
        
        expect(elWrapper.html()).toContain('from inline slot')
    }
  })
}