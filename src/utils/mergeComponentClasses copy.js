import _ from 'lodash'

export default class MergeComponentClasses
{
  componentClasses = {}
  componentName = null
  component$ = {}

  constructor(componentClasses, themeClasses, component$) {
    this.componentClasses = componentClasses
    this.themeClasses = themeClasses
    this.component$ = component$
  }

  get classes () {
    return new Proxy(this.componentClasses, {
      get: (target, prop) => {
        return typeof prop === 'string' && target[`$${prop}`] ? target[`$${prop}`](target, this.size.value, this.el$.value) : target[prop]
      }
    })
  }

  merge(merge) {
    _.each(merge, (components, key) => {
      if (['addClasses', 'overrideClasses', 'replaceClasses', 'removeClasses'].indexOf(key) === -1) {
        return
      }

      let componentClasses = components[this.componentName]

      if (['addClasses', 'overrideClasses'].indexOf(key) !== -1) {
        componentClasses = this.componentClassesToArray(componentClasses)
      }

      _.each(componentClasses, (classes, className) => {
        if (className.startsWith('$') && key !== 'overrideClasses') {
          return
        }

        this[key](classes, className)
      })
    })
  }

  mergeComponent(merge) {
    _.each(merge, (componentClasses, key) => {
      if (['addClasses', 'overrideClasses', 'replaceClasses', 'removeClasses'].indexOf(key) === -1) {
        return
      }

      if (['addClasses', 'overrideClasses'].indexOf(key) !== -1) {
        componentClasses = this.componentClassesToArray(componentClasses)
      }

      _.each(componentClasses, (classes, className) => {
        this[key](classes, className)
      })
    })
  }

  /**
   * Merge two list of classes, eg:
   * base = 'a'
   * add = 'b'
   * -> ['a', 'b']
   */
  addClasses(add, className) {
    if (!add.length) {
      return
    }

    this.componentClasses[className] = this.componentClasses[className].concat(this.classesToArray(add))
  }

  /**
   * Override classes, eg:
   * base = 'a'
   * override = 'b'
   * -> ['b']
   */
  overrideClasses(override, className) {
    this.componentClasses[className] = this.classesToArray(override)
  }

  /**
   * Remove classes, eg:
   * base = ['a', 'b']
   * remove = ['b']
   * -> ['a']
   */
  removeClasses(remove, className) {
    this.componentClasses[className] = this.componentClasses[className].filter((c) => {
      if (typeof c === 'string') {
        return remove.indexOf(c) === -1
      }
    })
  }

  /**
   * Replace classes, eg:
   * base = ['a', 'b']
   * replace = { b: c }
   * -> ['a', 'c']
   */
  replaceClasses(replace, className) {
    this.componentClasses[className] = this.componentClasses[className].map((c) => {
      if (typeof c === 'string') {
        return Object.keys(replace).indexOf(c) !== -1
          ? replace[c]
          : c
      }
    })
  }

  componentClassesToArray (componentClasses) {
    let arrayClasses = {}

    _.each(componentClasses, (c, className) => {
      arrayClasses[className] = this.classesToArray(c)
    })

    return arrayClasses
  }

  classesToArray (classes) {
    let arrayClasses = classes

    if (!classes) {
      arrayClasses = []
    } else if (_.isPlainObject(classes)) {
      arrayClasses = [classes]
    } else if (typeof classes === 'string') {
      arrayClasses = classes.length > 0 ? classes.split(' ') : []
    }

    return arrayClasses
  }
}