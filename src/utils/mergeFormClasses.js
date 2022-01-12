import _ from 'lodash'

const KEYS = ['presets', 'usePresets', 'addClasses', 'removeClasses', 'replaceClasses', 'overrideClasses']

export default class MergeFormClasses
{
  theme = {}
  presets = {}

  constructor(options = {}) {
    this.theme = _.cloneDeep(this.toArray(options.theme))

    if (options.presets) {
      this.presets = options.presets
    }

    if (options?.config?.config) {
      this.merge(options.config.config)
    }

    if (options.form) {
      this.merge(options.form)
    }
  }

  get classes () {
    return this.theme
  }

  merge(merge) {
    _.each(_.pick(merge, KEYS), (components, key) => {
      switch (key) {
        case 'addClasses':
        case 'overrideClasses':
          this.mergeThemeClasses(this.toArray(components), key)
          break

        case 'removeClasses':
        case 'replaceClasses':
          this.mergeThemeClasses(components, key)
          break

        case 'presets':
        case 'usePresets':
          if (!Array.isArray(components)) {
            return
          }

          _.each(components, (presetName) => {
            this.merge(this.presets[presetName])
          })
          break
      }
    })
  }
  
  mergeThemeClasses(components, key) {
    _.each(components, (componentClasses, componentName) => {
      _.each(componentClasses, (classes, className) => {
        this[key](classes, [componentName, className])
      })
    })
  }

  addClasses(add, levels) {
    let base = _.get(this.theme, levels.join('.'))

    if (_.isPlainObject(base)) {
      _.each(add, (subclasses, subclassName) => {
        this.addClasses(subclasses, levels.concat(subclassName))
      })
    } else {
      _.set(this.theme, levels.join('.'), _.union(
        base,
        add
      ))
    }
  }

  removeClasses(remove, levels) {
    let base = _.get(this.theme, levels.join('.'))

    if (_.isPlainObject(base)) {
      _.each(remove, (subclasses, subclassName) => {
        this.removeClasses(subclasses, levels.concat(subclassName))
      })
    } else if (Array.isArray(base)) {
      _.set(this.theme, levels.join('.'), base.filter((c) => {
        return typeof c !== 'string' || remove.indexOf(c) === -1
      }))
    }
  }

  replaceClasses(replace, levels) {
    let base = _.get(this.theme, levels.join('.'))

    if (_.isPlainObject(base)) {
      _.each(replace, (subclasses, subclassName) => {
        this.replaceClasses(subclasses, levels.concat(subclassName))
      })
    } else if (Array.isArray(base)) {
      _.set(this.theme, levels.join('.'), base.map((c) => {
        return typeof c !== 'string' || Object.keys(replace).indexOf(c) === -1
          ? c
          : replace[c]
      }))
    }
  }

  overrideClasses(override, levels) {
    let base = _.get(this.theme, levels.join('.'))

    if (_.isPlainObject(base)) {
      _.each(override, (subclasses, subclassName) => {
        this.overrideClasses(subclasses, levels.concat(subclassName))
      })
    } else {
      _.set(this.theme, levels.join('.'), override)
    }
  }

  toArray(components) {
    let arrayClasses = {}

    _.each(components, (componentClasses, componentName) => {
      arrayClasses[componentName] = {}

      _.each(componentClasses, (classes, className) => {
        arrayClasses[componentName][className] = this.classesToArray(classes, [componentName, className])
      })
    })

    return arrayClasses
  }

  classesToArray(classes, path) {
    let arrayClasses = classes
    let base = path ? _.get(this.theme, path.join('.')) : undefined

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
}