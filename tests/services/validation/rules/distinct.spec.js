import { createLocalVue } from '@vue/test-utils'
import { createForm, change } from './../../../../src/utils/testHelpers'

describe('Distinct Rule', () => {
  it('should validate if array values are unique', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done
    
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

    let a = form.findAllComponents({ name: 'ListElement' }).at(0)

    form.vm.load({
      a: [1,1,1]
    })

    LocalVue.nextTick(() => {
      a.vm.validate()
      expect(a.vm.invalid).toBe(true)

      form.vm.load({
        a: [1,2,3]
      })

      LocalVue.nextTick(() => {
        a.vm.validate()
        expect(a.vm.invalid).toBe(false)

        done()
      })
    })
  })

  it('should validate if array values are unique in multi level array', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done
    
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

    let a = form.findAllComponents({ name: 'ListElement' }).at(0)

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

    LocalVue.nextTick(() => {
      a.vm.validate()
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
      expect(a.vm.invalid).toBe(false)

      done()
    })
  })
})