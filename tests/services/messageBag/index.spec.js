import { createLocalVue } from '@vue/test-utils'
import { createForm } from './../../../src/utils/testHelpers'

describe('Message Bag Service', () => {
  it('should render component `errors`', (done) => {
     let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required|email'
        },
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    a.vm.validate()

    expect(a.vm.messageBag.errors.length).toBe(2)

    done()
  })

  it('should prepend `errors`', (done) => {
     let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required|email'
        },
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    a.vm.validate()

    a.vm.messageBag.prepend('aaa')
    a.vm.messageBag.prepend('bbb')

    expect(a.vm.messageBag.errors.length).toBe(4)
    expect(a.vm.messageBag.errors[0]).toBe('bbb')
    expect(a.vm.messageBag.errors[1]).toBe('aaa')

    done()
  })

  it('should append `errors`', (done) => {
     let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required|email'
        },
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    a.vm.validate()

    a.vm.messageBag.append('aaa')
    a.vm.messageBag.append('bbb')

    expect(a.vm.messageBag.errors.length).toBe(4)
    expect(a.vm.messageBag.errors[2]).toBe('aaa')
    expect(a.vm.messageBag.errors[3]).toBe('bbb')

    done()
  })

  it('should prepend `messages`', (done) => {
     let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required|email'
        },
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    a.vm.messageBag.prepend('aaa', 'message')
    a.vm.messageBag.prepend('bbb', 'message')

    expect(a.vm.messageBag.messages.length).toBe(2)
    expect(a.vm.messageBag.messages[0]).toBe('bbb')
    expect(a.vm.messageBag.messages[1]).toBe('aaa')

    done()
  })

  it('should append `messages`', (done) => {
     let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required|email'
        },
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    a.vm.messageBag.append('aaa', 'message')
    a.vm.messageBag.append('bbb', 'message')

    expect(a.vm.messageBag.messages.length).toBe(2)
    expect(a.vm.messageBag.messages[0]).toBe('aaa')
    expect(a.vm.messageBag.messages[1]).toBe('bbb')

    done()
  })

  it('should render first `error`', (done) => {
     let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required|email'
        },
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    a.vm.validate()

    expect(a.vm.messageBag.error).toBe(a.vm.Validators[0].message)

    done()
  })

  it('should render first `message`', (done) => {
     let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required|email'
        },
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    a.vm.messageBag.append('aaa', 'message')
    a.vm.messageBag.append('bbb', 'message')

    expect(a.vm.messageBag.message).toBe('aaa')

    done()
  })

  it('should `clear` all', (done) => {
     let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required|email'
        },
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    a.vm.messageBag.append('aaa')
    a.vm.messageBag.append('aaa', 'message')

    expect(a.vm.messageBag.errors.length).toBe(1)
    expect(a.vm.messageBag.messages.length).toBe(1)

    a.vm.messageBag.clear()

    expect(a.vm.messageBag.errors.length).toBe(0)
    expect(a.vm.messageBag.messages.length).toBe(0)

    done()
  })

  it('should `clear` errors', (done) => {
     let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required|email'
        },
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    a.vm.messageBag.append('aaa')
    a.vm.messageBag.append('aaa', 'message')

    expect(a.vm.messageBag.errors.length).toBe(1)
    expect(a.vm.messageBag.messages.length).toBe(1)

    a.vm.messageBag.clear('errors')

    expect(a.vm.messageBag.errors.length).toBe(0)
    expect(a.vm.messageBag.messages.length).toBe(1)

    done()
  })

  it('should `clear` messages', (done) => {
     let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required|email'
        },
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    a.vm.messageBag.append('aaa')
    a.vm.messageBag.append('aaa', 'message')

    expect(a.vm.messageBag.errors.length).toBe(1)
    expect(a.vm.messageBag.messages.length).toBe(1)

    a.vm.messageBag.clear('messages')

    expect(a.vm.messageBag.errors.length).toBe(1)
    expect(a.vm.messageBag.messages.length).toBe(0)

    done()
  })

  it('should `clearBefore` all', (done) => {
     let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required|email'
        },
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    a.vm.messageBag.prepend('aaa')
    a.vm.messageBag.prepend('aaa', 'message')

    expect(a.vm.messageBag.prepends.errors.length).toBe(1)
    expect(a.vm.messageBag.prepends.messages.length).toBe(1)

    a.vm.messageBag.clearBefore()

    expect(a.vm.messageBag.prepends.errors.length).toBe(0)
    expect(a.vm.messageBag.prepends.messages.length).toBe(0)

    done()
  })

  it('should `clearBefore` errors', (done) => {
     let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required|email'
        },
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    a.vm.messageBag.prepend('aaa')
    a.vm.messageBag.prepend('aaa', 'message')

    expect(a.vm.messageBag.prepends.errors.length).toBe(1)
    expect(a.vm.messageBag.prepends.messages.length).toBe(1)

    a.vm.messageBag.clearBefore('errors')

    expect(a.vm.messageBag.prepends.errors.length).toBe(0)
    expect(a.vm.messageBag.prepends.messages.length).toBe(1)

    done()
  })

  it('should `clearBefore` messages', (done) => {
     let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required|email'
        },
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    a.vm.messageBag.prepend('aaa')
    a.vm.messageBag.prepend('aaa', 'message')

    expect(a.vm.messageBag.prepends.errors.length).toBe(1)
    expect(a.vm.messageBag.prepends.messages.length).toBe(1)

    a.vm.messageBag.clearBefore('messages')

    expect(a.vm.messageBag.prepends.errors.length).toBe(1)
    expect(a.vm.messageBag.prepends.messages.length).toBe(0)

    done()
  })

  it('should `clearAfter` all', (done) => {
     let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required|email'
        },
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    a.vm.messageBag.append('bbb')
    a.vm.messageBag.append('bbb', 'message')

    expect(a.vm.messageBag.appends.errors.length).toBe(1)
    expect(a.vm.messageBag.appends.messages.length).toBe(1)

    a.vm.messageBag.clearAfter()

    expect(a.vm.messageBag.appends.errors.length).toBe(0)
    expect(a.vm.messageBag.appends.messages.length).toBe(0)

    done()
  })

  it('should `clearAfter` errors', (done) => {
     let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required|email'
        },
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    a.vm.messageBag.append('bbb')
    a.vm.messageBag.append('bbb', 'message')

    expect(a.vm.messageBag.appends.errors.length).toBe(1)
    expect(a.vm.messageBag.appends.messages.length).toBe(1)

    a.vm.messageBag.clearAfter('errors')

    expect(a.vm.messageBag.appends.errors.length).toBe(0)
    expect(a.vm.messageBag.appends.messages.length).toBe(1)

    done()
  })

  it('should `clearAfter` messages', (done) => {
     let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required|email'
        },
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    a.vm.messageBag.append('bbb')
    a.vm.messageBag.append('bbb', 'message')

    expect(a.vm.messageBag.appends.errors.length).toBe(1)
    expect(a.vm.messageBag.appends.messages.length).toBe(1)

    a.vm.messageBag.clearAfter('errors')

    expect(a.vm.messageBag.appends.errors.length).toBe(0)
    expect(a.vm.messageBag.appends.messages.length).toBe(1)

    done()
  })

  it('should `clearAfter` errors', (done) => {
     let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required|email'
        },
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    a.vm.messageBag.append('bbb')
    a.vm.messageBag.append('bbb', 'message')

    expect(a.vm.messageBag.appends.errors.length).toBe(1)
    expect(a.vm.messageBag.appends.messages.length).toBe(1)

    a.vm.messageBag.clearAfter('messages')

    expect(a.vm.messageBag.appends.errors.length).toBe(1)
    expect(a.vm.messageBag.appends.messages.length).toBe(0)

    done()
  })
})