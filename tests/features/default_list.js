import { createInlineForm, destroy } from 'test-helpers'
import { nextTick } from 'vue'

import { defaultValue as baseDefaultValue } from './default'

export const defaultValue = function (elementType, elementName, options) {
  baseDefaultValue(elementType, elementName, options)

  it('should set default on multiple level', async () => {
    let form = createForm({
      default: {
        el: [
          {
            child: [
              { subchild: 'form-a', subchild2: 'form-b' },
              { subchild: 'form-b', subchild2: 'form-c' },
            ],
            child2: [
              { subchild3: 'form-d', subchild4: 'form-e' },
              { subchild3: 'form-f', subchild4: 'form-g' },
            ],
          },
          {
            child: [
              { subchild: 'form-h', subchild2: 'form-i' },
              { subchild: 'form-j', subchild2: 'form-k' },
            ],
            child2: [
              { subchild3: 'form-l', subchild4: 'form-m' },
              { subchild3: 'form-n', subchild4: 'form-o' },
            ],
          },
        ],
        el2: [
          {
            child3: [
              { subchild5: 'form-a2', subchild6: 'form-b2' },
              { subchild5: 'form-b2', subchild6: 'form-c2' },
            ],
            child4: [
              { subchild7: 'form-d2', subchild8: 'form-e2' },
              { subchild7: 'form-f2', subchild8: 'form-g2' },
            ],
          },
          {
            child3: [
              { subchild5: 'form-h2', subchild6: 'form-i2' },
              { subchild5: 'form-j2', subchild6: 'form-k2' },
            ],
            child4: [
              { subchild7: 'form-l2', subchild8: 'form-m2' },
              { subchild7: 'form-n2', subchild8: 'form-o2' },
            ],
          },
        ]
      },
      schema: {
        el: {
          type: 'list',
          object: {
            schema: {
              child: {
                type: 'list',
                object: {
                  schema: {
                    subchild: {
                      type: 'text'
                    },
                    subchild2: {
                      type: 'text'
                    },
                  },
                }
              },
              child2: {
                type: 'list',
                object: {
                  schema: {
                    subchild3: {
                      type: 'text'
                    },
                    subchild4: {
                      type: 'text'
                    },
                  },
                }
              },
            }
          }
        },
        el2: {
          type: 'list',
          object: {
            schema: {
              child3: {
                type: 'list',
                object: {
                  schema: {
                    subchild5: {
                      type: 'text'
                    },
                    subchild6: {
                      type: 'text'
                    },
                  }
                }
              },
              child4: {
                type: 'list',
                object: {
                  schema: {
                    subchild7: {
                      type: 'text'
                    },
                    subchild8: {
                      type: 'text'
                    },
                  }
                }
              },
            }
          }
        }
      }
    })

    let el = form.vm.el$('el')
    let el2 = form.vm.el$('el2')

    expect(el.data).toStrictEqual({
      el: [
        {
          child: [
            { subchild: 'form-a', subchild2: 'form-b' },
            { subchild: 'form-b', subchild2: 'form-c' },
          ],
          child2: [
            { subchild3: 'form-d', subchild4: 'form-e' },
            { subchild3: 'form-f', subchild4: 'form-g' },
          ],
        },
        {
          child: [
            { subchild: 'form-h', subchild2: 'form-i' },
            { subchild: 'form-j', subchild2: 'form-k' },
          ],
          child2: [
            { subchild3: 'form-l', subchild4: 'form-m' },
            { subchild3: 'form-n', subchild4: 'form-o' },
          ],
        },
      ]
    })

    expect(el2.data).toStrictEqual({
      el2: [
        {
          child3: [
            { subchild5: 'form-a2', subchild6: 'form-b2' },
            { subchild5: 'form-b2', subchild6: 'form-c2' },
          ],
          child4: [
            { subchild7: 'form-d2', subchild8: 'form-e2' },
            { subchild7: 'form-f2', subchild8: 'form-g2' },
          ],
        },
        {
          child3: [
            { subchild5: 'form-h2', subchild6: 'form-i2' },
            { subchild5: 'form-j2', subchild6: 'form-k2' },
          ],
          child4: [
            { subchild7: 'form-l2', subchild8: 'form-m2' },
            { subchild7: 'form-n2', subchild8: 'form-o2' },
          ],
        },
      ]
    })
    
    // destroy(form) // teardown
  })

  it('should set default on multiple level with no higher preference', async () => {
    let form = createForm({
      schema: {
        el: {
          type: 'list',
          object: {
            schema: {
              child: {
                type: 'list',
                object: {
                  schema: {
                    subchild: {
                      type: 'text',
                      default: 'value'
                    },
                  },
                }
              },
            }
          }
        },
      }
    })

    let el = form.vm.el$('el')

    expect(el.data).toStrictEqual({
      el: [
        {
          child: [
            { subchild: 'value' },
          ],
        },
      ]
    })
    
    // destroy(form) // teardown
  })

  it('should set default on multiple level with direct parent preference', async () => {
    let form = createForm({
      schema: {
        el: {
          type: 'list',
          object: {
            schema: {
              child: {
                type: 'list',
                object: {
                  default: {
                    subchild: 'value2',
                  },
                  schema: {
                    subchild: {
                      type: 'text',
                      default: 'value'
                    },
                  },
                }
              },
            }
          }
        },
      }
    })

    let el = form.vm.el$('el')

    expect(el.data).toStrictEqual({
      el: [
        {
          child: [
            { subchild: 'value2' },
          ],
        },
      ]
    })
    
    // destroy(form) // teardown
  })

  it('should set default on multiple level with list parent preference', async () => {
    let form = createForm({
      schema: {
        el: {
          type: 'list',
          object: {
            schema: {
              child: {
                type: 'list',
                default: [{
                  subchild: 'value3',
                }],
                object: {
                  default: {
                    subchild: 'value2',
                  },
                  schema: {
                    subchild: {
                      type: 'text',
                      default: 'value'
                    },
                  },
                }
              },
            }
          }
        },
      }
    })

    let el = form.vm.el$('el')

    expect(el.data).toStrictEqual({
      el: [
        {
          child: [
            { subchild: 'value3' },
          ],
        },
      ]
    })
    
    // destroy(form) // teardown
  })

  it('should set default on multiple level with list parent parent preference', async () => {
    let form = createForm({
      schema: {
        el: {
          type: 'list',
          object: {
            default: {
              child: [{subchild:'value4'}]
            },
            schema: {
              child: {
                type: 'list',
                default: [{
                  subchild: 'value3',
                }],
                object: {
                  default: {
                    subchild: 'value2',
                  },
                  schema: {
                    subchild: {
                      type: 'text',
                      default: 'value'
                    },
                  },
                }
              },
            }
          }
        },
      }
    })

    let el = form.vm.el$('el')

    expect(el.data).toStrictEqual({
      el: [
        {
          child: [
            { subchild: 'value4' },
          ],
        },
      ]
    })
    
    // destroy(form) // teardown
  })

  it('should set default on multiple level with list parent list parent preference', async () => {
    let form = createForm({
      schema: {
        el: {
          type: 'list',
          default: [{
            child: [{subchild:'value5'}]
          }],
          object: {
            default: {
              child: [{subchild:'value4'}]
            },
            schema: {
              child: {
                type: 'list',
                default: [{
                  subchild: 'value3',
                }],
                object: {
                  default: {
                    subchild: 'value2',
                  },
                  schema: {
                    subchild: {
                      type: 'text',
                      default: 'value'
                    },
                  },
                }
              },
            }
          }
        },
      }
    })

    let el = form.vm.el$('el')

    expect(el.data).toStrictEqual({
      el: [
        {
          child: [
            { subchild: 'value5' },
          ],
        },
      ]
    })
    
    // destroy(form) // teardown
  })

  it('should set default on multiple level with form default preference', async () => {
    let form = createForm({
      default: {
        el: [{
          child: [{subchild:'value6'}]
        }]
      },
      schema: {
        el: {
          type: 'list',
          default: [{
            child: [{subchild:'value5'}]
          }],
          object: {
            default: {
              child: [{subchild:'value4'}]
            },
            schema: {
              child: {
                type: 'list',
                default: [{
                  subchild: 'value3',
                }],
                object: {
                  default: {
                    subchild: 'value2',
                  },
                  schema: {
                    subchild: {
                      type: 'text',
                      default: 'value'
                    },
                  },
                }
              },
            }
          }
        },
      }
    })

    let el = form.vm.el$('el')

    expect(el.data).toStrictEqual({
      el: [
        {
          child: [
            { subchild: 'value6' },
          ],
        },
      ]
    })
    
    // destroy(form) // teardown
  })

  it('should set default on multiple level with v-model preference', async () => {
    let { form } = createInlineForm({
      model: {
        el: [{
          child: [{subchild:'value7'}]
        }]
      },
      props: {
        sync: true,
        default: {
          el: [{
            child: [{subchild:'value6'}]
          }]
        },
        schema: {
          el: {
            type: 'list',
            default: [{
              child: [{subchild:'value5'}]
            }],
            object: {
              default: {
                child: [{subchild:'value4'}]
              },
              schema: {
                child: {
                  type: 'list',
                  default: [{
                    subchild: 'value3',
                  }],
                  object: {
                    default: {
                      subchild: 'value2',
                    },
                    schema: {
                      subchild: {
                        type: 'text',
                        default: 'value'
                      },
                    },
                  }
                },
              }
            }
          },
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.data).toStrictEqual({
      el: [
        {
          child: [
            { subchild: 'value7' },
          ],
        },
      ]
    })

    // destroy() // teardown
  })
}