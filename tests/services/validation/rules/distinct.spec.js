import flushPromises from 'flush-promises'
import { createForm, findAllComponents, change } from 'test-helpers'

describe('Distinct Rule', () => {
  it('should validate if array values are unique', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'list',
          element: {
            type: 'text',
            rules: 'distinct',
          }
        },
      }
    })

    let a = findAllComponents(form, { name: 'ListElement' }).at(0)

    form.vm.load({
      a: [1,1,1]
    })

    a.vm.validate()
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    form.vm.load({
      a: [1,2,3]
    })

    a.vm.validate()
    await flushPromises()
    expect(a.vm.invalid).toBe(false)
  })

  it('should validate if array values are unique in multi level array', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'list',
          object: {
            schema: {
              b: {
                type: 'list',
                object: {
                  schema: {
                    c: {
                      type: 'list',
                      object: {
                        schema: {
                          d: {
                            type: 'list',
                            object: {
                              schema: {
                                e: {
                                  type: 'text',
                                  rules: 'distinct'
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
      }
    })

    let a = findAllComponents(form, { name: 'ListElement' }).at(0)

    form.vm.load({
      a: [
        {
          b: [
            {
              c: [
                {
                  d: [
                    {
                      e: 'aaa'
                    }
                  ]
                }
              ]
            }
          ] 
        },
        {
          b: [
            {
              c: [
                {
                  d: [
                    {
                      e: 'aaa'
                    }
                  ]
                }
              ]
            }
          ] 
        },
      ]
    })

    a.vm.validate()
    await flushPromises()

    expect(a.vm.invalid).toBe(true)

    form.vm.update({
      a: [
        {
          b: [
            {
              c: [
                {
                  d: [
                    {
                      e: 'aaa'
                    }
                  ]
                }
              ]
            }
          ] 
        },
        {
          b: [
            {
              c: [
                {
                  d: [
                    {
                      e: 'bbb'
                    }
                  ]
                }
              ]
            }
          ] 
        },
      ]
    })

    a.vm.validate()
    await flushPromises()
    expect(a.vm.invalid).toBe(false)
  })
})