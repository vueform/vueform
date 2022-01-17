import _ from 'lodash'

const MERGE_KEYS = [
  'presets', 'usePresets', 'addClasses', 'prependClasses', 'removeClasses',
   'replaceClasses', 'overrideClasses'
]

const LOCALS_KEYS = [
  'addClass', 'removeClass', 'replaceClass', 'overrideClass'
]

export default class MergeFormClasses
{
  component = null
  component$ = {}
  componentClasses = {}
  presets = {}
  template = {}

  constructor(options = {}) {
    this.component = options.component
    this.component$ = options.component$
    this.template = options.templates[this.component]

    let templateData = options.templates[this.component].data()
    let themeClasses = _.cloneDeep(this.toArray(options.theme.classes[this.component]))
    let templateClasses = _.cloneDeep(this.toArray(templateData.defaultClasses))
    let templateMerge = templateData.merge !== undefined ? templateData.merge : true

    this.componentClasses = templateMerge ? templateClasses : themeClasses
    this.merge({ overrideClasses: {
      [this.component]: templateMerge ? themeClasses : templateClasses
    }})

    this.presets = options.config.presets

    _.each(options.merge, (merge) => {
      this.merge(merge)
    })

    this.merge(this.component$.value, true)

    if (options.config.classHelpers) {
      this.merge({
        prependClasses: {
          [this.component]: this.getClassHelpers(this.componentClasses, [this.component])
        }
      })
    }
  }

  get classes () {
    return new Proxy(this.componentClasses, {
      get: (target, prop) => {
        let classes = target[prop]

        if (typeof prop !== 'string') {
          return classes
        }

        if (target[`$${prop}`]) {
          return target[`$${prop}`](target, this.component$.value)
        }

        if (_.isPlainObject(classes)) {
          classes = _.cloneDeep(classes)

          _.each(classes, (classList, className) => {
            classes[className] = classes[`$${className}`]
              ? classes[`$${className}`](target, this.component$.value)
              : classList
          })
        }

        return classes
      }
    })
  }

  get mainClass () {
    return Object.keys(this.template.data().defaultClasses)[0]
  }

  merge(merge, locals = false) {
    _.each(_.pick(merge, locals ? LOCALS_KEYS : MERGE_KEYS), (mergables, key) => {
      switch (key) {
        case 'addClasses':
        case 'prependClasses':
        case 'overrideClasses':
          this.mergeComponentClasses(this.toArray(mergables[this.component]), key)
          break

        case 'removeClasses':
        case 'replaceClasses':
          this.mergeComponentClasses(mergables[this.component], key)
          break

        case 'addClass':
        case 'removeClass':
        case 'replaceClass':
        case 'overrideClass':
          if (!mergables) {
            return
          } 

          if (typeof mergables === 'string' || Array.isArray(mergables)) {
            if (!Array.isArray(mergables)) {
              mergables = mergables.length > 0 ? mergables.split(' ') : []
            }

            this.mergeComponentClasses({
              [this.mainClass]: mergables
            }, `${key}es`)
          } else if (_.isPlainObject(mergables)) {
            this.mergeComponentClasses(this.toArray(mergables), `${key}es`)
          } else {
          }
          break

        case 'presets':
        case 'usePresets':
          if (!Array.isArray(mergables)) {
            return
          }

          _.each(mergables, (presetName) => {
            this.merge(this.presets[presetName])
          })
          break
      }
    })
  }
  
  mergeComponentClasses(componentClasses, key) {
    _.each(componentClasses, (classes, className) => {
      this[key](classes, [className])
    })
  }

  addClasses(add, levels) {
    let base = _.get(this.componentClasses, levels.join('.'))

    if (add.length == 1 && !add[0]) {
      return
    }

    if (_.isPlainObject(base)) {
      _.each(add, (subclasses, subclassName) => {
        this.addClasses(subclasses, levels.concat(subclassName))
      })
    } else {
      _.set(this.componentClasses, levels.join('.'), _.union(
        base,
        add
      ))
    }
  }

  prependClasses(prepend, levels) {
    let base = _.get(this.componentClasses, levels.join('.'))

    if (prepend.length == 1 && !prepend[0]) {
      return
    }

    if (_.isPlainObject(base)) {
      _.each(prepend, (subclasses, subclassName) => {
        this.prependClasses(subclasses, levels.concat(subclassName))
      })
    } else {
      _.set(this.componentClasses, levels.join('.'), _.union(
        prepend,
        base
      ))
    }
  }

  removeClasses(remove, levels) {
    let base = _.get(this.componentClasses, levels.join('.'))

    if (_.isPlainObject(base)) {
      _.each(remove, (subclasses, subclassName) => {
        this.removeClasses(subclasses, levels.concat(subclassName))
      })
    } else if (Array.isArray(base)) {
      _.set(this.componentClasses, levels.join('.'), base.filter((c) => {
        return typeof c !== 'string' || remove.indexOf(c) === -1
      }))
    }
  }

  replaceClasses(replace, levels) {
    let base = _.get(this.componentClasses, levels.join('.'))

    if (_.isPlainObject(base)) {
      _.each(replace, (subclasses, subclassName) => {
        this.replaceClasses(subclasses, levels.concat(subclassName))
      })
    } else if (Array.isArray(base)) {
      _.set(this.componentClasses, levels.join('.'), base.map((c) => {
        return typeof c !== 'string' || Object.keys(replace).indexOf(c) === -1
          ? c
          : replace[c]
      }))
    }
  }

  overrideClasses(override, levels) {
    let base = _.get(this.componentClasses, levels.join('.'))

    if (_.isPlainObject(base)) {
      _.each(override, (subclasses, subclassName) => {
        this.overrideClasses(subclasses, levels.concat(subclassName))
      })
    } else {
      _.set(this.componentClasses, levels.join('.'), override)
    }
  }

  toArray(componentClasses) {
    let arrayClasses = {}

    _.each(componentClasses, (classes, className) => {
      arrayClasses[className] = this.classesToArray(classes, [className])
    })

    return arrayClasses
  }

  classesToArray(classes, path) {
    let arrayClasses = classes
    let base = path ? _.get(this.componentClasses, path.join('.')) : undefined

    if (typeof classes === 'string') {
      arrayClasses = classes.length > 0 ? classes.split(' ') : []
    } else if (_.isPlainObject(classes)) {

      if (base && Array.isArray(base)) {
        arrayClasses = [classes]
      } else if (!base || _.isPlainObject(base)) {
        arrayClasses = {}

        _.each(classes, (subclasses, subclassName) => {
          arrayClasses[subclassName] = this.classesToArray(subclasses, path.concat([subclassName]))
        })
      }
    } else if (typeof classes === 'boolean' || (typeof classes === 'object' && [
      'ComputedRefImpl', 'RefImpl'
    ].indexOf(classes?.constructor?.name) !== -1)) {
      throw Error(`Cannot add conditional class to ${path.join('.')}`)
    }

    return arrayClasses
  }

  getClassHelpers (componentClasses, path) {
    let classHelpers = {}

    _.each(componentClasses, (classes, className) => {
      if (className.match(/[$]/)) {
        return
      }

      // let name = componentClasses[`$${className}`] !== undefined ? `$${className}` : className

      if (_.isPlainObject(classes)) {
        classHelpers[className] = this.getClassHelpers(componentClasses[className], path.concat([className]))
      } else {
        classHelpers[className] = [`${path.join('.')}.${className}-->`]
      }
    })

    return classHelpers
  }
}