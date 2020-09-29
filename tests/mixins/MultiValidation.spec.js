import { createLocalVue } from '@vue/test-utils'
import { createForm } from './../../src/utils/testHelpers'
import flushPromises from 'flush-promises'

const Vue = createLocalVue()

jest.mock("axios", () => ({
  get: () => Promise.resolve({ data: 'value' }),
  post: () => Promise.resolve({ data: 'value' }),
}))

describe('Multi Validation Mixin', () => {
  it('should be `dirty` if any child is dirty', async () => {
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

    await Vue.nextTick()

    form.findAllComponents({ name: 'TextElement' }).at(0).get('input').setValue('aaa')
      
    await Vue.nextTick()

    expect(list.vm.dirty).toBe(true)
  })

  it('should be `dirty` if the element\'s value is changed', async () => {
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

    await Vue.nextTick()

    list.vm.add()
      
    await Vue.nextTick()

    expect(list.vm.dirty).toBe(true)
  })

  it('should not be `validated` if children are but element is not validated', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'list',
          initial: 2,
          rules: 'required',
          element: {
            type: 'text',
            rules: 'required',
          }
        }
      }
    })

    let text0 = form.findAllComponents({ name: 'TextElement' }).at(0)
    let text1 = form.findAllComponents({ name: 'TextElement' }).at(1)

    let list = form.findComponent({ name: 'ListElement' })

    expect(list.vm.validated).toBe(false)
    expect(text0.vm.validated).toBe(false)
    expect(text1.vm.validated).toBe(false)

    await Vue.nextTick()

    text0.vm.validate()
    text1.vm.validate()

    await flushPromises()

    expect(list.vm.validated).toBe(false)
    expect(text0.vm.validated).toBe(true)
    expect(text1.vm.validated).toBe(true)
  })

  it('should not be `validated` if children and element are all validated', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'list',
          initial: 2,
          rules: 'required',
          element: {
            type: 'text',
            rules: 'required',
          }
        }
      }
    })

    let text0 = form.findAllComponents({ name: 'TextElement' }).at(0)
    let text1 = form.findAllComponents({ name: 'TextElement' }).at(1)

    let list = form.findComponent({ name: 'ListElement' })

    expect(list.vm.validated).toBe(false)
    expect(text0.vm.validated).toBe(false)
    expect(text1.vm.validated).toBe(false)

    await Vue.nextTick()

    list.vm.validate()
    text0.vm.validate()
    text1.vm.validate()

    await flushPromises()

    expect(list.vm.validated).toBe(true)
    expect(text0.vm.validated).toBe(true)
    expect(text1.vm.validated).toBe(true)
  })

  it('should be `invalid` if any child is invalid', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'list',
          initial: 2,
          element: {
            type: 'text',
            rules: 'required',
          }
        }
      }
    })

    let text0 = form.findAllComponents({ name: 'TextElement' }).at(0)
    let text1 = form.findAllComponents({ name: 'TextElement' }).at(1)

    let list = form.findComponent({ name: 'ListElement' })

    expect(list.vm.invalid).toBe(false)

    await Vue.nextTick()

    text1.vm.validate()

    expect(list.vm.invalid).toBe(true)
  })

  it('should be `invalid` if element has failed validation rules', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'list',
          initial: 0,
          rules: 'required',
          element: {
            type: 'text',
          }
        }
      }
    })

    let list = form.findComponent({ name: 'ListElement' })

    expect(list.vm.invalid).toBe(false)

    await Vue.nextTick()

    list.vm.validate()

    expect(list.vm.invalid).toBe(true)
  })

  it('should be `pending` if any child is pending', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'list',
          initial: 2,
          element: {
            type: 'text',
            rules: 'unique',
          }
        }
      }
    })

    let text1 = form.findAllComponents({ name: 'TextElement' }).at(1)

    let list = form.findComponent({ name: 'ListElement' })

    expect(list.vm.pending).toBe(false)

    await Vue.nextTick()

    text1.vm.validate()

    expect(list.vm.pending).toBe(true)
  })

  it('should be `pending` if the element is pending', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'list',
          initial: 2,
          rules: 'unique',
          element: {
            type: 'text',
          }
        }
      }
    })

    let list = form.findComponent({ name: 'ListElement' })

    expect(list.vm.pending).toBe(false)

    await Vue.nextTick()

    list.vm.validate()

    expect(list.vm.pending).toBe(true)
  })

  it('should be `debouncing` if any child is debouncing', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'list',
          initial: 2,
          element: {
            type: 'text',
            rules: 'required:debounce=300',
          }
        }
      }
    })

    let text1 = form.findAllComponents({ name: 'TextElement' }).at(1)

    let list = form.findComponent({ name: 'ListElement' })

    expect(list.vm.debouncing).toBe(false)

    await Vue.nextTick()

    text1.vm.validate()

    expect(list.vm.debouncing).toBe(true)
  })

  it('should be `debouncing` if the element is debouncing', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'list',
          initial: 2,
          rules: 'required:debounce=300',
          element: {
            type: 'text',
          }
        }
      }
    })

    let list = form.findComponent({ name: 'ListElement' })

    expect(list.vm.debouncing).toBe(false)

    await Vue.nextTick()

    list.vm.validate()

    expect(list.vm.debouncing).toBe(true)
  })

  it('should be `busy` if pending', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'list',
          initial: 2,
          rules: 'unique',
          element: {
            type: 'text',
          }
        }
      }
    })

    let list = form.findComponent({ name: 'ListElement' })

    expect(list.vm.pending).toBe(false)

    await Vue.nextTick()
    
    list.vm.validate()

    expect(list.vm.pending).toBe(true)
  })

  it('should be `busy` if debouncing', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'list',
          initial: 2,
          rules: 'required:debounce=300',
          element: {
            type: 'text',
          }
        }
      }
    })

    let list = form.findComponent({ name: 'ListElement' })

    expect(list.vm.busy).toBe(false)

    await Vue.nextTick()

    list.vm.validate()

    expect(list.vm.busy).toBe(true)
  })

  it('should merge `errors` with children\'s', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'list',
          initial: 2,
          rules: 'max:1',
          element: {
            type: 'text',
            rules: 'required',
          }
        }
      }
    })

    let list = form.findComponent({ name: 'ListElement' })

    expect(list.vm.errors.length).toBe(0)

    await Vue.nextTick()

    list.vm.validate()

    expect(list.vm.errors.length).toBe(3)
  })

  it('should skip child `errors` if they are unavailable', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'list',
          initial: 2,
          rules: 'max:1',
          element: {
            type: 'text',
            rules: 'required',
            conditions: [
              ['b', 'bbb']
            ]
          }
        },
        b: {
          type: 'text'
        }
      }
    })

    let list = form.findComponent({ name: 'ListElement' })

    expect(list.vm.errors.length).toBe(0)

    await Vue.nextTick()

    list.vm.validate()

    expect(list.vm.errors.length).toBe(1)
  })

  it('`error` should be the first message of `errors`', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'list',
          initial: 2,
          rules: 'max:1',
          element: {
            type: 'text',
            rules: 'required',
          }
        },
      }
    })

    let list = form.findComponent({ name: 'ListElement' })

    await Vue.nextTick()

    list.vm.validate()

    expect(list.vm.error).toBe(list.vm.errors[0])
  })

  // it('should be `debouncing` & `busy` if any element is debouncing', (done) => {
  //   const Vue = createLocalVue()

  //   Vue.config.errorHandler = done

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

  //   Vue.nextTick(() => {
  //     form.findAllComponents({ name: 'TextElement' }).at(0).vm.validate()
      
  //     Vue.nextTick(() => {
  //       expect(object.vm.debouncing).toBe(true)
  //       expect(object.vm.busy).toBe(true)
  //       done()
  //     })
  //   })
  // })

  // it('should be `pending` and `busy` if any element is pending', (done) => {
  //   const Vue = createLocalVue()

  //   Vue.config.errorHandler = done

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

  //   Vue.nextTick(() => {
  //     form.findAllComponents({ name: 'TextElement' }).at(0).vm.validate()
      
  //     Vue.nextTick(() => {
  //       expect(object.vm.pending).toBe(true)
  //       expect(object.vm.busy).toBe(true)
  //       done()
  //     })
  //   })
  // })

  // it('should be `validated` only if all elements are validated', (done) => {
  //   const Vue = createLocalVue()

  //   Vue.config.errorHandler = done

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

  //   Vue.nextTick(() => {
  //     let b = form.findAllComponents({ name: 'TextElement' }).at(0)

  //     b.get('input').setValue('aaa')
  //     b.vm.validate()
      
  //     Vue.nextTick(() => {
  //       expect(object.vm.validated).toBe(true)
  //       done()
  //     })
  //   })
  // })

  // it('should collect element errors in `errors`', (done) => {
  //   const Vue = createLocalVue()

  //   Vue.config.errorHandler = done

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

  //   Vue.nextTick(() => {
  //     let b = form.findAllComponents({ name: 'TextElement' }).at(0)

  //     b.vm.validate()
      
  //     Vue.nextTick(() => {
  //       expect(object.vm.errors.length).toBe(1)
  //       done()
  //     })
  //   })
  // })

  // it('should leave out unavailable element errors in `errors`', (done) => {
  //   const Vue = createLocalVue()

  //   Vue.config.errorHandler = done

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

  //   Vue.nextTick(() => {
  //     let b = form.findAllComponents({ name: 'TextElement' }).at(0)
  //     let c = form.findAllComponents({ name: 'TextElement' }).at(1)

  //     b.vm.validate()
  //     c.vm.validate()
      
  //     Vue.nextTick(() => {
  //       expect(object.vm.errors.length).toBe(1)
  //       done()
  //     })
  //   })
  // })

  // it('should `validate` children', (done) => {
  //   const Vue = createLocalVue()

  //   Vue.config.errorHandler = done

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

  //   Vue.nextTick(() => {
  //     object.vm.validate()
      
  //     Vue.nextTick(() => {
  //       expect(object.vm.errors.length).toBe(2)
  //       done()
  //     })
  //   })
  // })

  // it('should not have `error`', (done) => {
  //   const Vue = createLocalVue()

  //   Vue.config.errorHandler = done

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