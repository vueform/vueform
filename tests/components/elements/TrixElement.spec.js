import { createLocalVue, mount } from '@vue/test-utils'
import { createForm, createTrix } from './../../../src/utils/testHelpers'

describe('Trix Element Rendering', () => {
  it('should render Trix', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createTrix({
      schema: {
        a: {
          type: 'trix',
        }
      }
    }, {
      attach: true
    })

    let a = form.findAllComponents({ name: 'TrixElement' }).at(0)
    let trix = a.findAllComponents({ name: 'Trix' }).at(0)

    expect(a.exists()).toBe(true)
    expect(trix.exists()).toBe(true)

    done()
  })

  it('should render placeholder', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createTrix({
      schema: {
        a: {
          type: 'trix',
          placeholder: 'Trix'
        }
      }
    })

    let a = form.findAllComponents({ name: 'TrixElement' }).at(0)
    let trix = a.get('trix-editor')

    expect(trix.attributes().placeholder).toBe('Trix')

    done()
  })
})

describe('Trix Element Props', () => {
  it('should have empty array as default `accept`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createTrix({
      schema: {
        a: {
          type: 'trix',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TrixElement' }).at(0)

    expect(a.vm.accept).toStrictEqual([])

    done()
  })

  it('should set `accept` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createTrix({
      schema: {
        a: {
          type: 'trix',
          accept: ['jpeg', 'png', 'gif']
        }
      }
    })

    let a = form.findAllComponents({ name: 'TrixElement' }).at(0)

    expect(a.vm.accept).toStrictEqual(['jpeg', 'png', 'gif'])

    done()
  })

  it('should set `accept` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createTrix({
      schema: {
        a: {
          type: 'trix',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TrixElement' }).at(0)

    expect(a.vm.accept).toStrictEqual([])

    a.vm.accept = ['jpeg', 'png', 'gif']

    expect(a.vm.accept).toStrictEqual(['jpeg', 'png', 'gif'])

    done()
  })

  it('should have empty array as default `acceptMimes`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createTrix({
      schema: {
        a: {
          type: 'trix',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TrixElement' }).at(0)

    expect(a.vm.acceptMimes).toStrictEqual([])

    done()
  })

  it('should set `acceptMimes` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createTrix({
      schema: {
        a: {
          type: 'trix',
          acceptMimes: ['image/jpeg', 'image/png', 'image/gif']
        }
      }
    })

    let a = form.findAllComponents({ name: 'TrixElement' }).at(0)

    expect(a.vm.acceptMimes).toStrictEqual(['image/jpeg', 'image/png', 'image/gif'])

    done()
  })

  it('should set `accept` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createTrix({
      schema: {
        a: {
          type: 'trix',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TrixElement' }).at(0)

    expect(a.vm.acceptMimes).toStrictEqual([])

    a.vm.acceptMimes = ['image/jpeg', 'image/png', 'image/gif']

    expect(a.vm.acceptMimes).toStrictEqual(['image/jpeg', 'image/png', 'image/gif'])

    done()
  })

  it('should have config value default `endpoint`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createTrix({
      schema: {
        a: {
          type: 'trix',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TrixElement' }).at(0)

    expect(a.vm.endpoint).toStrictEqual(a.vm.$laraform.config.endpoints.elements.trix.attachment)

    done()
  })

  it('should set `endpoint` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createTrix({
      schema: {
        a: {
          type: 'trix',
          endpoint: '/trix'
        }
      }
    })

    let a = form.findAllComponents({ name: 'TrixElement' }).at(0)

    expect(a.vm.endpoint).toBe('/trix')

    done()
  })

  it('should set `endpoint` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createTrix({
      schema: {
        a: {
          type: 'trix',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TrixElement' }).at(0)

    a.vm.endpoint = '/trix'

    expect(a.vm.endpoint).toBe('/trix')

    done()
  })

  it('should have null as default `placeholder`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createTrix({
      schema: {
        a: {
          type: 'trix',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TrixElement' }).at(0)

    expect(a.vm.placeholder).toBe(null)

    done()
  })

  it('should set `placeholder` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createTrix({
      schema: {
        a: {
          type: 'trix',
          placeholder: 'Trix'
        }
      }
    })

    let a = form.findAllComponents({ name: 'TrixElement' }).at(0)

    expect(a.vm.placeholder).toBe('Trix')

    done()
  })

  it('should set `placeholder` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createTrix({
      schema: {
        a: {
          type: 'trix',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TrixElement' }).at(0)

    a.vm.placeholder = 'Trix'

    expect(a.vm.placeholder).toBe('Trix')

    done()
  })
})

/**
 * Testing actual Trix component does not work, because
 * it does not get mounted. The only solution does not work:
 * https://stackoverflow.com/questions/55907211/why-wont-trix-editor-mount-in-vue-component-when-running-tests-with-jest
 */

// describe('Trix Element Model', () => {
//   it('should `update` via form API', (done) => {
//     const LocalVue = createLocalVue()

//     LocalVue.config.errorHandler = done

//     let form = createTrix({
//       schema: {
//         a: {
//           type: 'trix',
//         }
//       }
//     })

//     let a = form.findAllComponents({ name: 'TrixElement' }).at(0)
//     let trix = a.findAllComponents({ name: 'Trix' }).at(0)
//     let trix$ = trix.vm.$refs.trix$

//     a.vm.update('aaa')

//     LocalVue.nextTick(() => {
//       expect(trix$.value).toBe('aaa')
//       done()
//     })
//   })
// })

describe('Trix Element Model', () => {
  it('should call trix update on `update`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createTrix({
      schema: {
        a: {
          type: 'trix',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TrixElement' }).at(0)
    
    let trixUpdateMock = jest.fn(() => {})

    a.vm.trix$ = {
      update: trixUpdateMock
    }

    expect(trixUpdateMock.mock.calls.length).toBe(0)

    a.vm.update('aaa')

    expect(trixUpdateMock.mock.calls.length).toBe(1)
    expect(trixUpdateMock.mock.calls[0][0]).toBe('aaa')

    done()
  })

  it('should call trix update on `load`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createTrix({
      schema: {
        a: {
          type: 'trix',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TrixElement' }).at(0)
    
    let trixUpdateMock = jest.fn(() => {})

    a.vm.trix$ = {
      update: trixUpdateMock
    }

    expect(trixUpdateMock.mock.calls.length).toBe(0)

    form.vm.load({
      a: 'aaa'
    })

    expect(trixUpdateMock.mock.calls.length).toBe(1)
    expect(trixUpdateMock.mock.calls[0][0]).toBe('aaa')

    done()
  })

  it('should call trix update on `reset`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createTrix({
      schema: {
        a: {
          type: 'trix',
          default: 'aaa'
        }
      }
    })

    let a = form.findAllComponents({ name: 'TrixElement' }).at(0)
    
    let trixUpdateMock = jest.fn(() => {})

    a.vm.trix$ = {
      update: trixUpdateMock
    }

    expect(trixUpdateMock.mock.calls.length).toBe(0)

    a.vm.reset()

    expect(trixUpdateMock.mock.calls.length).toBe(1)
    expect(trixUpdateMock.mock.calls[0][0]).toBe(a.vm.default)

    done()
  })

  it('should call trix update on `clear`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createTrix({
      schema: {
        a: {
          type: 'trix',
          default: 'aaa'
        }
      }
    })

    let a = form.findAllComponents({ name: 'TrixElement' }).at(0)
    
    let trixUpdateMock = jest.fn(() => {})

    a.vm.trix$ = {
      update: trixUpdateMock
    }

    expect(trixUpdateMock.mock.calls.length).toBe(0)

    a.vm.clear()

    expect(trixUpdateMock.mock.calls.length).toBe(1)
    expect(trixUpdateMock.mock.calls[0][0]).toBe(a.vm.null)

    done()
  })
})

describe('Trix Element Events', () => {
  it('should fire `error` event on `handleError`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let errorMock = jest.fn(() => {})

    let form = createTrix({
      schema: {
        a: {
          type: 'trix',
          onError: errorMock
        }
      }
    })

    let a = form.findAllComponents({ name: 'TrixElement' }).at(0)
    
    expect(errorMock.mock.calls.length).toBe(0)

    a.vm.handleError('aaa')

    expect(errorMock.mock.calls.length).toBe(1)
    expect(errorMock.mock.calls[0][0]).toBe('aaa')

    done()
  })
})