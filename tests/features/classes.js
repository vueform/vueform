import { createForm, findAllComponents, testPropDefault, destroy, classesToArray } from 'test-helpers'
import defaultTheme from './../../themes/vueform'
import tailwindTheme from './../../themes/tailwind'

export const classes = function (elementType, elementName, options) {
  // it('should merge template, theme, config presets, config, form presets, form, local preset, local singular, local plural classes', () => {})

  let form = createForm({
    schema: { el: { type: elementType } },
  })

  let el = form.vm.el$('el')

  let mainClass = Object.keys(el.classesInstance.componentClasses)[0]

  it('should have template classes by default', () => {
    let form = createForm({
      schema: { el: { type: elementType } },
    }, {
      config: {
        classHelpers: false,
        theme: defaultTheme,
      }
    })

    let el = form.vm.el$('el')
    _.each(el.classesInstance.componentClasses, (c, k) => {
      if (!k.match(/^\$/) && !_.isPlainObject(c)) {
        expect(c).toEqual(classesToArray(defaultTheme.templates[elementName].data().defaultClasses)[k])
      }
    })
  })

  it('should override template classes with theme classes', () => {
    let form = createForm({
      schema: { el: { type: elementType } },
      theme: tailwindTheme,
    }, {
      config: {
        classHelpers: false,
      }
    })
    
    let el = form.vm.el$('el')

    expect(el.classesInstance.componentClasses).toEqual(classesToArray(tailwindTheme.classes[elementName]))
  })

  it('should merge base classes with config preset classes', () => {
    let form = createForm({
      schema: { el: { type: elementType } },
      theme: tailwindTheme,
    }, {
      config: {
        classHelpers: false,
        presets: {
          preset: {
            overrideClasses: {
              [elementName]: {
                [mainClass]: 'not-empty'
              }
            }
          }
        },
        usePresets: ['preset'],
      }
    })
    
    let el = form.vm.el$('el')

     expect(el.classesInstance.componentClasses).toEqual(classesToArray({
      ...tailwindTheme.classes[elementName],
      [mainClass]: 'not-empty'
    }))
  })

  it('should merge base classes with config classes', () => {
    let form = createForm({
      schema: { el: { type: elementType } },
      theme: tailwindTheme,
    }, {
      config: {
        classHelpers: false,
        presets: {
          preset: {
            overrideClasses: {
              [elementName]: {
                [mainClass]: 'not-empty'
              }
            }
          }
        },
        usePresets: ['preset'],
        overrideClasses: {
          [elementName]: {
            [mainClass]: 'not-empty2'
          }
        }
      }
    })
    
    let el = form.vm.el$('el')

     expect(el.classesInstance.componentClasses).toEqual(classesToArray({
      ...tailwindTheme.classes[elementName],
      [mainClass]: 'not-empty2'
    }))
  })

  it('should merge base classes with form preset classes', () => {
    let form = createForm({
      schema: { el: { type: elementType } },
      theme: tailwindTheme,
      presets: ['preset2']
    }, {
      config: {
        classHelpers: false,
        presets: {
          preset: {
            overrideClasses: {
              [elementName]: {
                [mainClass]: 'not-empty'
              }
            }
          },
          preset2: {
            overrideClasses: {
              [elementName]: {
                [mainClass]: 'not-empty3'
              }
            }
          }
        },
        usePresets: ['preset'],
        overrideClasses: {
          [elementName]: {
            [mainClass]: 'not-empty2'
          }
        }
      }
    })
    
    let el = form.vm.el$('el')

     expect(el.classesInstance.componentClasses).toEqual(classesToArray({
      ...tailwindTheme.classes[elementName],
      [mainClass]: 'not-empty3'
    }))
  })

  it('should merge base classes with form classes', () => {
    let form = createForm({
      schema: { el: { type: elementType } },
      theme: tailwindTheme,
      presets: ['preset2'],
      overrideClasses: {
        [elementName]: {
          [mainClass]: 'not-empty4'
        }
      }
    }, {
      config: {
        classHelpers: false,
        presets: {
          preset: {
            overrideClasses: {
              [elementName]: {
                [mainClass]: 'not-empty'
              }
            }
          },
          preset2: {
            overrideClasses: {
              [elementName]: {
                [mainClass]: 'not-empty3'
              }
            }
          }
        },
        usePresets: ['preset'],
        overrideClasses: {
          [elementName]: {
            [mainClass]: 'not-empty2'
          }
        }
      }
    })
    
    let el = form.vm.el$('el')

     expect(el.classesInstance.componentClasses).toEqual(classesToArray({
      ...tailwindTheme.classes[elementName],
      [mainClass]: 'not-empty4'
    }))
  })

  it('should merge base classes with local preset classes', () => {
    let form = createForm({
      schema: { el: { type: elementType, presets: ['preset3'], } },
      theme: tailwindTheme,
      presets: ['preset2'],
      overrideClasses: {
        [elementName]: {
          [mainClass]: 'not-empty4'
        }
      }
    }, {
      config: {
        classHelpers: false,
        presets: {
          preset: {
            overrideClasses: {
              [elementName]: {
                [mainClass]: 'not-empty'
              }
            }
          },
          preset2: {
            overrideClasses: {
              [elementName]: {
                [mainClass]: 'not-empty3'
              }
            }
          },
          preset3: {
            overrideClasses: {
              [elementName]: {
                [mainClass]: 'not-empty5'
              }
            }
          },
        },
        usePresets: ['preset'],
        overrideClasses: {
          [elementName]: {
            [mainClass]: 'not-empty2'
          }
        }
      }
    })
    
    let el = form.vm.el$('el')

     expect(el.classesInstance.componentClasses).toEqual(classesToArray({
      ...tailwindTheme.classes[elementName],
      [mainClass]: 'not-empty5'
    }))
  })

  it('should merge base classes with local plural classes', () => {
    let form = createForm({
      schema: { el: {
        type: elementType,
        presets: ['preset3'],
        overrideClasses: {
          [elementName]: {
            [mainClass]: 'not-empty6'
          } 
        }
      } },
      theme: tailwindTheme,
      presets: ['preset2'],
      overrideClasses: {
        [elementName]: {
          [mainClass]: 'not-empty4'
        }
      }
    }, {
      config: {
        classHelpers: false,
        presets: {
          preset: {
            overrideClasses: {
              [elementName]: {
                [mainClass]: 'not-empty'
              }
            }
          },
          preset2: {
            overrideClasses: {
              [elementName]: {
                [mainClass]: 'not-empty3'
              }
            }
          },
          preset3: {
            overrideClasses: {
              [elementName]: {
                [mainClass]: 'not-empty5'
              }
            }
          },
        },
        usePresets: ['preset'],
        overrideClasses: {
          [elementName]: {
            [mainClass]: 'not-empty2'
          }
        }
      }
    })
    
    let el = form.vm.el$('el')

     expect(el.classesInstance.componentClasses).toEqual(classesToArray({
      ...tailwindTheme.classes[elementName],
      [mainClass]: 'not-empty6'
    }))
  })

  it('should merge base classes with local plural classes', () => {
    let form = createForm({
      schema: { el: {
        type: elementType,
        presets: ['preset3'],
        overrideClass: 'not-empty7',
        overrideClasses: {
          [elementName]: {
            [mainClass]: 'not-empty6'
          } 
        }
      } },
      theme: tailwindTheme,
      presets: ['preset2'],
      overrideClasses: {
        [elementName]: {
          [mainClass]: 'not-empty4'
        }
      }
    }, {
      config: {
        classHelpers: false,
        presets: {
          preset: {
            overrideClasses: {
              [elementName]: {
                [mainClass]: 'not-empty'
              }
            }
          },
          preset2: {
            overrideClasses: {
              [elementName]: {
                [mainClass]: 'not-empty3'
              }
            }
          },
          preset3: {
            overrideClasses: {
              [elementName]: {
                [mainClass]: 'not-empty5'
              }
            }
          },
        },
        usePresets: ['preset'],
        overrideClasses: {
          [elementName]: {
            [mainClass]: 'not-empty2'
          }
        }
      }
    })
    
    let el = form.vm.el$('el')

     expect(el.classesInstance.componentClasses).toEqual(classesToArray({
      ...tailwindTheme.classes[elementName],
      [mainClass]: 'not-empty7'
    }))
  })
}