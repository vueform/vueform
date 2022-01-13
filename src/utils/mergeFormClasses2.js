import _ from 'lodash'

const KEYS = ['presets', 'usePresets', 'addClasses', 'removeClasses', 'replaceClasses', 'overrideClasses']

export default class MergeFormClasses
{
  component = null
  componentClasses = {}
  presets = {}

  constructor(options = {}) {
    this.component = options.component

    console.log(options)

    let templateData = options.templates[this.component].data()
    let themeClasses = _.cloneDeep(this.toArray(options.theme.classes[this.component]))
    console.log(themeClasses)
    let templateClasses = _.cloneDeep(this.toArray(templateData.defaultClasses))
    console.log(templateClasses)
    let templateMerge = templateData.merge !== undefined ? templateData.merge : true

    this.componentClasses = templateMerge ? templateClasses : themeClasses
    console.log(1, this.componentClasses)
    this.merge({
      overrideClasses: {
        [this.component]: templateMerge ? themeClasses : templateClasses
      }
    })

    console.log(2, this.componentClasses)
    this.presets = options.config.presets

    _.each(options.merge, (merge) => {
      this.merge(merge)
    })

  }

  get classes () {
    return this.componentClasses
  }

  merge(merge) {
    _.each(_.pick(merge, KEYS), (components, key) => {
      let componentClasses = components[this.component]

      switch (key) {
        case 'addClasses':
        case 'overrideClasses':
          this.mergeComponentClasses(this.toArray(componentClasses), key)
          break

        case 'removeClasses':
        case 'replaceClasses':
          this.mergeComponentClasses(componentClasses, key)
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
  
  mergeComponentClasses(componentClasses, key) {
    _.each(componentClasses, (classes, className) => {
      this[key](classes, [className])
    })
  }

  addClasses(add, levels) {
    let base = _.get(this.componentClasses, levels.join('.'))

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
}