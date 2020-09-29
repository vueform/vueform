import { createLocalVue, mount } from '@vue/test-utils'
import { createForm, installLaraform, createLaraformInstaller } from './../../src/utils/testHelpers'
import { mergeComponentClasses } from './../../src/utils/mergeClasses'
import { Laraform } from './../../src/index'
import defaultTheme from './../../src/themes/default'
import { toBeVisible } from '@testing-library/jest-dom/matchers'
import flushPromises from 'flush-promises'

const Vue = createLocalVue()

expect.extend({toBeVisible})

describe('Element Props & Data', () => {
  it('should add `class` option to main class list', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          class: 'class-a'
        }
      }
    })

    expect(form.findComponent({ name: 'TextElement' }).classes()).toContain('class-a')
  })
})

describe('Element Computed', () => {
  it('should display `path` properly without parent', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text'
        }
      }
    })

    expect(form.findComponent({ name: 'TextElement' }).vm.path).toBe('name')
  })

  it('should update `model` on value change', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text'
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    name.get('input').setValue('aaa')

    expect(name.vm.model).toBe('aaa')
  })

  it('should have `data` as name => value', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text'
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    name.get('input').setValue('aaa')

    expect(name.vm.data).toStrictEqual({name: 'aaa'})
  })

  it('should have empty `filtered` when `submit` is false', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          submit: false
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    name.get('input').setValue('aaa')

    expect(name.vm.filtered).toStrictEqual({})
  })

  it('should have empty `filtered` when `submit` is true && `available` is true', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          submit: true
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    name.get('input').setValue('aaa')

    expect(name.vm.available).toBe(true)
    expect(name.vm.filtered).toStrictEqual({name: 'aaa'})
  })

  it('should have a `default` equal to null if otherwise defined', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text'
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    expect(name.vm.default).toBe(name.vm.null)
  })

  it('should have a `default` defined as `default`', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          default: 'aaa'
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    expect(name.vm.default).toBe('aaa')
  })

  it('should set `default` in schema', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text'
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    name.vm.default = 'aaa'

    expect(name.vm.schema.default).toBe('aaa')
  })

  it('should return `path` when nested', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'object',
          schema: {
            a: {
              type: 'text'
            }
          }
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    expect(name.vm.path).toBe('name.a')
  })

  it('should return `genericName` when label is defined', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          label: 'Name element'
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    expect(name.vm.genericName).toBe('Name element')
  })

  it('should return `genericName` when placeholder is defined', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          placeholder: 'Name element'
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    expect(name.vm.genericName).toBe('Name element')
  })

  it('should return `genericName` when no placeholder nor label is defined', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    expect(name.vm.genericName).toBe('Name')
  })

  it('should return `id` when set in schema', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          id: 'the-id'
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    expect(name.vm.id).toBe('the-id')
  })

  it('should return `id` when not set in schema', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    expect(name.vm.id).toBe('name')
  })

  it('should set `id` in schema', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    name.vm.id = 'the-id'

    expect(name.vm.schema.id).toBe('the-id')
    expect(name.vm.id).toBe('the-id')
  })

  it('should set `submit` in schema', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    expect(name.vm.submit).toBe(true)

    name.vm.submit = false

    expect(name.vm.schema.submit).toBe(false)
    expect(name.vm.submit).toBe(false)
  })

  it('should get `displayError` when set in schema', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          error: false,
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    expect(name.vm.displayError).toBe(false)
  })

  it('should get `displayError` when not set in schema', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    expect(name.vm.displayError).toBe(true)
  })

  it('should set `readonly` in schema', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    expect(name.vm.readonly).toBe(false)
    
    name.vm.readonly = true

    expect(name.vm.schema.readonly).toBe(true)
    expect(name.vm.readonly).toBe(true)
  })

  it('should set `error` in schema', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    expect(name.vm.displayError).toBe(true)
    
    name.vm.displayError = false

    expect(name.vm.schema.error).toBe(false)
    expect(name.vm.displayError).toBe(false)
  })

  it('should set `label` in schema', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    expect(name.vm.label).toBe(null)
    
    name.vm.label = 'Name'

    expect(name.vm.schema.label).toBe('Name')
    expect(name.vm.label).toBe('Name')
  })

  it('should get `description`', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          description: 'Name'
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    expect(name.vm.description).toBe('Name')
  })

  it('should set `description` in schema', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    expect(name.vm.description).toBe(null)
    
    name.vm.description = 'Name'

    expect(name.vm.schema.description).toBe('Name')
    expect(name.vm.description).toBe('Name')
  })

  it('should get `info`', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          info: 'Name'
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    expect(name.vm.info).toBe('Name')
  })

  it('should set `info` in schema', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    expect(name.vm.info).toBe(null)
    
    name.vm.info = 'Name'

    expect(name.vm.schema.info).toBe('Name')
    expect(name.vm.info).toBe('Name')
  })

  it('should get `messages`', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          messages: {
            required: 'Required'
          }
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    expect(name.vm.messages).toStrictEqual({
      required: 'Required'
    })
  })

  it('should set `messages` in schema', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          messages: {
            required: 'Required'
          }
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    expect(name.vm.messages).toStrictEqual({
      required: 'Required'
    })
    
    name.vm.messages = {
      min: 'Min'
    }

    expect(name.vm.schema.messages).toStrictEqual({
      min: 'Min'
    })
    expect(name.vm.messages).toStrictEqual({
      min: 'Min'
    })
  })

  it('should set `conditions`', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
        },
        b: {
          type: 'text',
        },
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)
    let b = form.findAllComponents({ name: 'TextElement' }).at(1)

    expect(b.vm.available).toBe(true)
    
    b.vm.conditions = [['a', 'aaa']]

    expect(b.vm.available).toBe(false)
    
    a.get('input').setValue('aaa')

    expect(b.vm.available).toBe(true)
  })

  it('should set `class`', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
        },
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    a.vm.class = 'class-a'

    await Vue.nextTick()
    
    let defaultClass = form.vm.selectedTheme.components.BaseElementLayout.data().defaultClasses.container

    expect(a.classes()).toContain('class-a')
    expect(a.classes()).toContain(defaultClass)
  })

  it('should set `classes`', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
        },
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    a.vm.classes = {
      BaseElementLayout: {
        container: 'class-a'
      }
    }

    await Vue.nextTick()
    
    let defaultClass = form.vm.selectedTheme.components.BaseElementLayout.data().defaultClasses.container

    expect(a.classes()).toContain('class-a')
    expect(a.classes()).not.toContain(defaultClass)
  })

  it('should set `addClasses`', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
        },
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    a.vm.addClasses = {
      BaseElementLayout: {
        container: 'class-a'
      }
    }

    await Vue.nextTick()
    
    let defaultClass = form.vm.selectedTheme.components.BaseElementLayout.data().defaultClasses.container

    expect(a.classes()).toContain('class-a')
    expect(a.classes()).toContain(defaultClass)
  })

  it('should get `before`', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          before: 'Name'
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    expect(name.vm.before).toBe('Name')
  })

  it('should set `before` in schema', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    expect(name.vm.before).toBe(null)
    
    name.vm.before = 'Name'

    expect(name.vm.schema.before).toBe('Name')
    expect(name.vm.before).toBe('Name')
  })

  it('should get `between`', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          between: 'Name'
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    expect(name.vm.between).toBe('Name')
  })

  it('should set `between` in schema', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    expect(name.vm.between).toBe(null)
    
    name.vm.between = 'Name'

    expect(name.vm.schema.between).toBe('Name')
    expect(name.vm.between).toBe('Name')
  })

  it('should get `after`', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          after: 'Name'
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    expect(name.vm.after).toBe('Name')
  })

  it('should set `after` in schema', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    expect(name.vm.after).toBe(null)
    
    name.vm.after = 'Name'

    expect(name.vm.schema.after).toBe('Name')
    expect(name.vm.after).toBe('Name')
  })

  it('should return false to `isFileType`, `isImageType`, `isArrayType`, `isMultilingual` by default', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    expect(name.vm.isFileType).toBe(false)
    expect(name.vm.isImageType).toBe(false)
    expect(name.vm.isArrayType).toBe(false)
    expect(name.vm.isMultilingual).toBe(false)
  })

  it('should overwrite classes if `classes` defined on element level', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          classes: {
            BaseElementLayout: {
              container: 'class-a'
            }
          }
        }
      },
    })

    let BaseElementLayout = form.findComponent({ name: 'BaseElementLayout' })

    expect(BaseElementLayout.classes()).toContain('class-a')
    expect(BaseElementLayout.classes()).not.toContain(BaseElementLayout.vm.defaultClasses.container)
  })

  it('should add classes if `addClasses` defined on element level', () => {
    let addClasses = {
      container: 'class-a',
    }

    let form = createForm({
      schema: {
        name: {
          type: 'text',
          addClasses: {
            BaseElementLayout: addClasses
          }
        }
      }
    })

    let BaseElementLayout = form.findComponent({ name: 'BaseElementLayout' })
    
    expect(BaseElementLayout.classes()).toContain('class-a')
  })

  it('should overwrite and add classes if `classes` and `addClasses` defined on element level', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          classes: {
            BaseElementLayout: {
              container: 'class-a'
            }
          },
          addClasses: {
            BaseElementLayout: {
              container: 'class-b',
            }
          }
        },
      },
    })

    let BaseElementLayout = form.findComponent({ name: 'BaseElementLayout' })
    
    expect(BaseElementLayout.classes()).toContain('class-a')
    expect(BaseElementLayout.classes()).toContain('class-b')
    expect(BaseElementLayout.classes()).not.toContain(BaseElementLayout.vm.defaultClasses.container)
  })

  it('should overwrite classes with element\'s `classes` if defined on form and element level', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          classes: {
            BaseElementLayout: {
              container: 'class-b'
            }
          }
        }
      },
      classes: {
        BaseElementLayout: {
          container: 'class-a'
        }
      }
    })

    let BaseElementLayout = form.findComponent({ name: 'BaseElementLayout' })

    expect(BaseElementLayout.classes()).toContain('class-b')
    expect(BaseElementLayout.classes()).not.toContain('class-a')
    expect(BaseElementLayout.classes()).not.toContain(BaseElementLayout.vm.defaultClasses.container)
  })

  it('should not add classes if `classes` defined on both level and `addClasses` defined on form level', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          classes: {
            BaseElementLayout: {
              container: 'class-b'
            }
          }
        }
      },
      classes: {
        BaseElementLayout: {
          container: 'class-a'
        }
      },
      addClasses: {
        BaseElementLayout: {
          container: 'class-c'
        }
      },
    })

    let BaseElementLayout = form.findComponent({ name: 'BaseElementLayout' })

    expect(BaseElementLayout.classes()).toContain('class-b')
    expect(BaseElementLayout.classes()).not.toContain('class-a')
    expect(BaseElementLayout.classes()).not.toContain('class-c')
    expect(BaseElementLayout.classes()).not.toContain(BaseElementLayout.vm.defaultClasses.container)
  })

  it('should add classes if `classes` defined on both level and `addClasses` defined on element level', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          classes: {
            BaseElementLayout: {
              container: 'class-b'
            }
          },
          addClasses: {
            BaseElementLayout: {
              container: 'class-c'
            }
          },
        }
      },
      classes: {
        BaseElementLayout: {
          container: 'class-a'
        }
      },
    })

    let BaseElementLayout = form.findComponent({ name: 'BaseElementLayout' })

    expect(BaseElementLayout.classes()).toContain('class-b')
    expect(BaseElementLayout.classes()).toContain('class-c')
    expect(BaseElementLayout.classes()).not.toContain('class-a')
    expect(BaseElementLayout.classes()).not.toContain(BaseElementLayout.vm.defaultClasses.container)
  })

  it('should add classes if `addClasses` defined on both level', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          addClasses: {
            BaseElementLayout: {
              container: 'class-b'
            }
          },
        }
      },
      addClasses: {
        BaseElementLayout: {
          container: 'class-a'
        }
      },
    })

    let BaseElementLayout = form.findComponent({ name: 'BaseElementLayout' })

    expect(BaseElementLayout.classes()).toContain('class-a')
    expect(BaseElementLayout.classes()).toContain('class-b')
  })

  it('should add only element\'s classes to if `classes` and `addClasses` defined on both level', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          classes: {
            BaseElementLayout: {
              container: 'class-b'
            }
          },
          addClasses: {
            BaseElementLayout: {
              container: 'class-d'
            }
          },
        }
      },
      classes: {
        BaseElementLayout: {
          container: 'class-a'
        }
      },
      addClasses: {
        BaseElementLayout: {
          container: 'class-c'
        }
      },
    })

    let BaseElementLayout = form.findComponent({ name: 'BaseElementLayout' })

    expect(BaseElementLayout.classes()).toContain('class-b')
    expect(BaseElementLayout.classes()).toContain('class-d')
    expect(BaseElementLayout.classes()).not.toContain('class-a')
    expect(BaseElementLayout.classes()).not.toContain('class-c')
    expect(BaseElementLayout.classes()).not.toContain(BaseElementLayout.vm.defaultClasses.container)
  })

  it('should set `formatData` to schema', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
        },
      },
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    a.vm.formatData = () => { return 'aaa' }

    expect(a.vm.formatData()).toBe('aaa')
  })

  it('should set `formatLoad` to schema', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
        },
      },
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    a.vm.formatLoad = () => { return 'aaa' }

    expect(a.vm.formatLoad()).toBe('aaa')
  })
})

describe('Element Methods', () => {
  it('should `update` value', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    name.vm.update('aaa')

    expect(name.vm.value).toBe('aaa')
  })
  it('should `update` and validate value', async () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          rules: 'required'
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    expect(name.vm.validated).toBe(false)

    name.vm.update('aaa', true)
    await flushPromises()

    expect(name.vm.value).toBe('aaa')
    expect(name.vm.validated).toBe(true)
  })

  it('should reset value to default when calling `reset()`', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          default: 'aaa'
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    name.get('input').setValue('bbb')

    expect(name.vm.value).toBe('bbb')

    name.vm.reset()

    expect(name.vm.value).toBe('aaa')
  })

  it('should reset value to `null` when calling `clear()`', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          default: 'aaa'
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    name.get('input').setValue('bbb')

    expect(name.vm.value).toBe('bbb')

    name.vm.clear()

    expect(name.vm.value).toBe(name.vm.null)
  })

  it('should load value when available', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text'
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    name.vm.load({
      name: 'aaa'
    })

    expect(name.vm.available).toBe(true)
    expect(name.vm.value).toBe('aaa')
  })

  it('should clear value when `available` false and being loaded', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          conditions: [
            ['condition', 1]
          ]
        },
        condition: {
          type: 'text'
        },
      }
    })
    
    let name = form.findComponent({ name: 'TextElement' })

    expect(name.vm.available).toBe(false)
    
    name.vm.load({
      name: 'aaa'
    })

    expect(name.vm.value).toBe(name.vm.null)
  })

  it('should clear value when the element\'s name is not presented in loaded data', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text'
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    name.vm.load({
      email: 'aaa'
    })

    expect(name.vm.value).toBe(name.vm.null)
  })

  it('should `hide` element', async () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text'
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    expect(name.vm.$el).toBeVisible()

    name.vm.hide()
    
    await Vue.nextTick()
    
    expect(name.vm.$el).not.toBeVisible()
  })

  it('should `show` element', async () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text'
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    expect(name.vm.$el).toBeVisible()

    name.vm.hide()
    
    await Vue.nextTick()
    
    expect(name.vm.$el).not.toBeVisible()
      
    name.vm.show()

    await Vue.nextTick()

    expect(name.vm.$el).toBeVisible()
  })
})

describe('Element Model', () => {
  it('should return plain value for `data` if `formatData` is not set', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    a.vm.update('aaa')

    expect(a.vm.data).toStrictEqual({a:'aaa'})
  })

  it('should return formatted value for `value` if `formatData` is set', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          formatData(name, value) {
            return {
              [name]: value + 'bbb'
            }
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    a.vm.update('aaa')

    expect(a.vm.data).toStrictEqual({a:'aaabbb'})
  })

  it('should `load` plain data if `formatLoad` is not set', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    a.vm.load({
      a: 'aaa'
    })

    expect(a.vm.data).toStrictEqual({a:'aaa'})
  })

  it('should return formatted value for `value` if `formatLoad` is set', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          formatLoad(data) {
            return data + 'bbb'
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    a.vm.load({
      a: 'aaa'
    })

    expect(a.vm.data).toStrictEqual({a:'aaabbb'})
  })
})

describe('Element Components', () => {
  it('should overwrite existing component', () => {
    const LocalVue = createLocalVue()

    const form = createForm({
      schema: {
        custom: {
          type: 'text',
          label: 'a',
          components: {
            BaseElementLayout: LocalVue.extend({
              name: 'BaseElementLayout',
              render(h) {
                return h('div', 'Base Layout')
              }
            })
          }
        },
      },
    })

    expect(form.findComponent({name: 'TextElement'}).html()).toContain('Base Layout')
  })
})

describe('Element Slots', () => {
  it('can assign from element schema', async () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          label: 'Name',
          slots: {
            label: Vue.extend({
              props: ['el$'],
              render(h) {
                return h('div', this.el$.label + ' from slot')
              }
            })
          }
        }
      }
    })

    await Vue.nextTick()
    
    expect(form.findComponent({name: 'TextElement'}).html()).toContain('Name from slot')
  })

  it('can assign from form template', () => {
    let { LocalVue } = installLaraform({})

    let component = LocalVue.extend({
      mixins: [Laraform],
      data() {
        return {
          schema: {
            name: {
              type: 'text',
              label: 'Name'
            }
          }
        }
      },
      render(h) {
        return h('form', [
          h(this.extendedTheme.elements.TextElement, {
            props: {
              schema: this.schema.name,
              name: 'name'
            },
            directives: [
              {
                name: 'ref',
                arg: 'elements$'
              }
            ],
            scopedSlots: {
              label: (props) => {
                return h('div', props.el$.label + ' from slot')
              }
            }
          })
        ])
      }
    })

    let form = mount(component, {
      LocalVue,
      mocks: {
        $laraform: {
          config: {},
          services: {
            messageBag: jest.fn()
          }
        }
      }
    })

    expect(form.findComponent({name: 'TextElement'}).html()).toContain('Name from slot')
  })

  it('gets rerendered when schema changes', async () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          label: 'Name',
          slots: {
            label: Vue.extend({
              props: ['el$'],
              render(h) {
                return h('div', this.el$.label + ' from slot')
              }
            })
          }
        }
      }
    })

    await Vue.nextTick()
    
    expect(form.findComponent({name: 'TextElement'}).html()).toContain('Name from slot')

    form.vm.schema.name.label = 'Name2'

    await Vue.nextTick()
  
    expect(form.findComponent({name: 'TextElement'}).html()).toContain('Name2 from slot')
  })
})


describe('Element Events', () => {
  it('should trigger `change` when value changes and validate', async () => {
    let changeMock = jest.fn(() => {})

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required',
          onChange: changeMock
        }
      }
    })

    expect(changeMock.mock.calls.length).toBe(0)

    let a = form.findComponent({ name: 'TextElement' })

    expect(a.vm.validated).toBe(false)

    a.get('input').setValue('aaa')
    a.get('input').trigger('keyup')
    await flushPromises()

    expect(a.vm.validated).toBe(true)
    expect(a.vm.value).toBe('aaa')
    expect(changeMock.mock.calls.length).toBe(1)
    expect(changeMock.mock.calls[0][0]).toBe('aaa')
    expect(changeMock.mock.calls[0][1]).toBe(null)
  })

  it('should not trigger `change` when value changes if readonly', async () => {
    let changeMock = jest.fn(() => {})

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required',
          readonly: true,
          onChange: changeMock
        }
      }
    })

    expect(changeMock.mock.calls.length).toBe(0)

    let a = form.findComponent({ name: 'TextElement' })

    expect(a.vm.validated).toBe(false)

    a.get('input').setValue('aaa')
    a.get('input').trigger('keyup')
    await flushPromises()

    expect(a.vm.validated).toBe(false)
    expect(a.vm.value).toBe('aaa')
    expect(changeMock.mock.calls.length).toBe(0)
  })

  it('should not validate elements if `change` event returns `false`', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required',
          onChange() {
            return false
          }
        }
      }
    })

    let a = form.findComponent({ name: 'TextElement' })

    expect(a.vm.validated).toBe(false)

    a.get('input').setValue('aaa')
    a.get('input').trigger('keyup')
    await flushPromises()

    expect(a.vm.validated).toBe(false)
    expect(a.vm.value).toBe('aaa')
  })
})

describe('Element Hooks', () => {
  it('should call all lifecycle hooks', async () => {
    let beforeCreateMock = jest.fn(() => {})
    let createdMock = jest.fn(() => {})
    let beforeMountMock = jest.fn(() => {})
    let mountedMock = jest.fn(() => {})
    let beforeUpdateMock = jest.fn(() => {})
    let updatedMock = jest.fn(() => {})
    let beforeDestroyMock = jest.fn(() => {})
    let destroyedMock = jest.fn(() => {})

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          beforeCreate: beforeCreateMock,
          created: createdMock,
          beforeMount: beforeMountMock,
          mounted: mountedMock,
          beforeUpdate: beforeUpdateMock,
          updated: updatedMock,
          beforeDestroy: beforeDestroyMock,
          destroyed: destroyedMock,
        }
      }
    })

    expect(beforeCreateMock.mock.calls.length).toBe(1)
    expect(createdMock.mock.calls.length).toBe(1)
    expect(beforeMountMock.mock.calls.length).toBe(1)
    expect(mountedMock.mock.calls.length).toBe(1)

    expect(beforeUpdateMock.mock.calls.length).toBe(0)
    expect(updatedMock.mock.calls.length).toBe(0)
    expect(beforeDestroyMock.mock.calls.length).toBe(0)
    expect(destroyedMock.mock.calls.length).toBe(0)

    let a = form.findComponent({ name: 'TextElement' })

    a.vm.label = 'AAA'

    await Vue.nextTick()
    
    expect(beforeUpdateMock.mock.calls.length).toBe(1)
    expect(updatedMock.mock.calls.length).toBe(1)

    a.vm.$destroy()

    await Vue.nextTick()
  
    expect(beforeDestroyMock.mock.calls.length).toBe(1)
    expect(destroyedMock.mock.calls.length).toBe(1)
  })
})