import _ from 'lodash'

const KEYS = ['addClasses', 'removeClasses', 'replaceClasses', 'overrideClasses']

export default class MergeFormClasses
{
  theme = {}

  constructor(options) {
    this.theme = _.cloneDeep(this.toArray(options.theme))

    if (options.config) {
      this.merge(options.config)
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
          this.addThemeClasses(components)
          break
      }
    })
  }
  
  addThemeClasses(components) {
    components = this.toArray(components)

    _.each(components, (componentClasses, componentName) => {
      _.each(componentClasses, (classes, className) => {
        this.addClasses(classes, [componentName, className])
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