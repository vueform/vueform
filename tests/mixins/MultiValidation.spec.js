import { createLocalVue } from '@vue/test-utils'
import { createForm } from './../../src/utils/testHelpers'

describe('Multi Validation Mixin', () => {
  it('should be `dirty` if any child is dirty', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          initial: 1,
          element: {
            type: 'text'
          }
        }
      }
    })

    let list = form.findComponent({ name: 'ListElement' })

    expect(list.vm.dirty).toBe(false)

    LocalVue.nextTick(() => {
      form.findAllComponents({ name: 'TextElement' }).at(0).get('input').setValue('aaa')
      
      LocalVue.nextTick(() => {
        expect(list.vm.dirty).toBe(true)
        done()
      })
    })
  })

  it('should be `dirty` if number of elements changes', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          initial: 1,
          element: {
            type: 'text'
          }
        }
      }
    })

    let list = form.findComponent({ name: 'ListElement' })

    expect(list.vm.dirty).toBe(false)

    LocalVue.nextTick(() => {
      list.vm.add()
      
      LocalVue.nextTick(() => {
        expect(list.vm.dirty).toBe(true)
        done()
      })
    })
  })

  // it('should be `invalid` if any element is invalid', (done) => {
  //   const LocalVue = createLocalVue()

  //   LocalVue.config.errorHandler = done

  //   let form = createForm({
  //     schema: {
  //       a: {
  //         type: 'object',
  //         schema: {
  //           b: {
  //             type: 'text',
  //             rules: 'required'
  //           },
  //           c: {
  //             type: 'text',
  //           },
  //         }
  //       }
  //     }
  //   })

  //   let object = form.findComponent({ name: 'ObjectElement' })

  //   expect(object.vm.invalid).toBe(false)

  //   LocalVue.nextTick(() => {
  //     form.findAllComponents({ name: 'TextElement' }).at(0).vm.validate()
      
  //     LocalVue.nextTick(() => {
  //       expect(object.vm.invalid).toBe(true)
  //       done()
  //     })
  //   })
  // })

  // it('should be `debouncing` & `busy` if any element is debouncing', (done) => {
  //   const LocalVue = createLocalVue()

  //   LocalVue.config.errorHandler = done

  //   let form = createForm({
  //     schema: {
  //       a: {
  //         type: 'object',
  //         schema: {
  //           b: {
  //             type: 'text',
  //             rules: 'required:debounce=3000'
  //           },
  //           c: {
  //             type: 'text',
  //           },
  //         }
  //       }
  //     }
  //   })

  //   let object = form.findComponent({ name: 'ObjectElement' })

  //   expect(object.vm.debouncing).toBe(false)
  //   expect(object.vm.busy).toBe(false)

  //   LocalVue.nextTick(() => {
  //     form.findAllComponents({ name: 'TextElement' }).at(0).vm.validate()
      
  //     LocalVue.nextTick(() => {
  //       expect(object.vm.debouncing).toBe(true)
  //       expect(object.vm.busy).toBe(true)
  //       done()
  //     })
  //   })
  // })

  // it('should be `pending` and `busy` if any element is pending', (done) => {
  //   const LocalVue = createLocalVue()

  //   LocalVue.config.errorHandler = done

  //   let form = createForm({
  //     schema: {
  //       a: {
  //         type: 'object',
  //         schema: {
  //           b: {
  //             type: 'text',
  //             rules: 'unique'
  //           },
  //           c: {
  //             type: 'text',
  //           },
  //         }
  //       }
  //     }
  //   })

  //   let object = form.findComponent({ name: 'ObjectElement' })

  //   expect(object.vm.pending).toBe(false)
  //   expect(object.vm.busy).toBe(false)

  //   LocalVue.nextTick(() => {
  //     form.findAllComponents({ name: 'TextElement' }).at(0).vm.validate()
      
  //     LocalVue.nextTick(() => {
  //       expect(object.vm.pending).toBe(true)
  //       expect(object.vm.busy).toBe(true)
  //       done()
  //     })
  //   })
  // })

  // it('should be `validated` only if all elements are validated', (done) => {
  //   const LocalVue = createLocalVue()

  //   LocalVue.config.errorHandler = done

  //   let form = createForm({
  //     schema: {
  //       a: {
  //         type: 'object',
  //         schema: {
  //           b: {
  //             type: 'text',
  //             rules: 'required'
  //           },
  //           c: {
  //             type: 'text',
  //           },
  //         }
  //       }
  //     }
  //   })

  //   let object = form.findComponent({ name: 'ObjectElement' })

  //   expect(object.vm.validated).toBe(false)

  //   LocalVue.nextTick(() => {
  //     let b = form.findAllComponents({ name: 'TextElement' }).at(0)

  //     b.get('input').setValue('aaa')
  //     b.vm.validate()
      
  //     LocalVue.nextTick(() => {
  //       expect(object.vm.validated).toBe(true)
  //       done()
  //     })
  //   })
  // })

  // it('should collect element errors in `errors`', (done) => {
  //   const LocalVue = createLocalVue()

  //   LocalVue.config.errorHandler = done

  //   let form = createForm({
  //     schema: {
  //       a: {
  //         type: 'object',
  //         schema: {
  //           b: {
  //             type: 'text',
  //             rules: 'required'
  //           },
  //           c: {
  //             type: 'text',
  //           },
  //         }
  //       }
  //     }
  //   })

  //   let object = form.findComponent({ name: 'ObjectElement' })

  //   expect(object.vm.errors.length).toBe(0)

  //   LocalVue.nextTick(() => {
  //     let b = form.findAllComponents({ name: 'TextElement' }).at(0)

  //     b.vm.validate()
      
  //     LocalVue.nextTick(() => {
  //       expect(object.vm.errors.length).toBe(1)
  //       done()
  //     })
  //   })
  // })

  // it('should leave out unavailable element errors in `errors`', (done) => {
  //   const LocalVue = createLocalVue()

  //   LocalVue.config.errorHandler = done

  //   let form = createForm({
  //     schema: {
  //       a: {
  //         type: 'object',
  //         schema: {
  //           b: {
  //             type: 'text',
  //             rules: 'required',
  //           },
  //           c: {
  //             type: 'text',
  //             rules: 'required',
  //             conditions: [
  //               ['a.b', 'aaa']
  //             ]
  //           },
  //         }
  //       }
  //     }
  //   })

  //   let object = form.findComponent({ name: 'ObjectElement' })

  //   expect(object.vm.errors.length).toBe(0)

  //   LocalVue.nextTick(() => {
  //     let b = form.findAllComponents({ name: 'TextElement' }).at(0)
  //     let c = form.findAllComponents({ name: 'TextElement' }).at(1)

  //     b.vm.validate()
  //     c.vm.validate()
      
  //     LocalVue.nextTick(() => {
  //       expect(object.vm.errors.length).toBe(1)
  //       done()
  //     })
  //   })
  // })

  // it('should `validate` children', (done) => {
  //   const LocalVue = createLocalVue()

  //   LocalVue.config.errorHandler = done

  //   let form = createForm({
  //     schema: {
  //       a: {
  //         type: 'object',
  //         schema: {
  //           b: {
  //             type: 'text',
  //             rules: 'required',
  //           },
  //           c: {
  //             type: 'text',
  //             rules: 'required',
  //           },
  //         }
  //       }
  //     }
  //   })

  //   let object = form.findComponent({ name: 'ObjectElement' })

  //   expect(object.vm.errors.length).toBe(0)

  //   LocalVue.nextTick(() => {
  //     object.vm.validate()
      
  //     LocalVue.nextTick(() => {
  //       expect(object.vm.errors.length).toBe(2)
  //       done()
  //     })
  //   })
  // })

  // it('should not have `error`', (done) => {
  //   const LocalVue = createLocalVue()

  //   LocalVue.config.errorHandler = done

  //   let form = createForm({
  //     schema: {
  //       a: {
  //         type: 'object',
  //         schema: {
  //           b: {
  //             type: 'text',
  //             rules: 'required',
  //           },
  //           c: {
  //             type: 'text',
  //             rules: 'required',
  //           },
  //         }
  //       }
  //     }
  //   })

  //   let object = form.findComponent({ name: 'ObjectElement' })

  //   expect(object.vm.error).toBe(null)

  //   done()
  // })
})