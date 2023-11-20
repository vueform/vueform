import each from 'lodash/each'
import cloneDeep from 'lodash/cloneDeep'
import isPlainObject from 'lodash/isPlainObject'
import get from 'lodash/get'
import set from 'lodash/set'
import union from 'lodash/union'
import flattenDeep from 'lodash/flattenDeep'

const MERGE_KEYS = [
  'presets', 'usePresets', 'addClasses', 'prependClasses', 'removeClasses',
   'replaceClasses', 'overrideClasses'
]

const LOCALS_KEYS = [
  'addClass', 'removeClass', 'replaceClass', 'overrideClass'
]

export default class MergeClasses
{
  constructor(options = {}) {
    this.options = options

    if (this.shouldMergeTemplateClasses) {
      this.componentClasses = this.templateClasses

      this.merge({
        overrideClasses: {
          [this.component]: this.themeClasses
        }
      })
    } else {
      this.componentClasses = this.templateClasses
    }

    this.merge(this.config)

    each(options.merge, (merge) => {
      this.merge(merge)
    })

    this.merge(this.locals || this.component$.value, true)

    if (this.config.classHelpers && this.config.env !== 'production') {
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
        if (typeof prop !== 'string') {
          return target[prop]
        }

        return this.getDynamicClasses(target, prop)
      }
    })
  }

  get config () {
    return this.options.config || {}
  }

  get component () {
    return this.options.component
  }
  
  get component$ () {
    return this.options.component$
  }

  get locals () {
    return this.options.locals
  }

  get view () {
    return this.options.view
  }

  get theme () {
    return this.options.theme
  }

  get presets () {
    return this.config.presets
  }

  get templates () {
    return this.options.templates || {}
  }

  get template () {
    return this.view && this.templates[`${this.component}_${this.view}`]
      ? this.templates[`${this.component}_${this.view}`]
      : (this.templates[this.component] || {})
  }

  get themeClasses () {
    return cloneDeep(this.toArray(this.view && this.theme.classes[`${this.component}_${this.view}`]
      ? this.theme.classes[`${this.component}_${this.view}`]
      : this.theme.classes[this.component]))
  }

  get templateClasses () {
     return cloneDeep(this.toArray(this.defaultClasses))
  }

  get shouldMergeTemplateClasses () {
    let merge = typeof this.template.data === 'function' && this.template.data().merge !== undefined
      ? this.template.data().merge
      : this.component$.value.merge

    return merge !== undefined ? merge : false
  }

  get defaultClasses () {
    return typeof this.template.data === 'function' && this.template.data().defaultClasses
      ? this.template.data().defaultClasses
      : this.component$.value.defaultClasses
  }

  get mainClass () {
    let defaultClasses = typeof this.template.data === 'function' && this.template.data().defaultClasses
      ? this.template.data().defaultClasses
      : this.component$.value.defaultClasses

    return Object.keys(defaultClasses)[0]
  }

  merge(merge, locals = false) {
    each(this.pick(merge, locals ? LOCALS_KEYS : MERGE_KEYS), (mergables, key) => {
      switch (key) {
        case 'addClasses':
        case 'prependClasses':
        case 'overrideClasses':
          if (!mergables || mergables[this.component] === undefined) {
            return
          }

          this.mergeComponentClasses(this.toArray(mergables[this.component]), key)
          break

        case 'removeClasses':
        case 'replaceClasses':
          if (!mergables || mergables[this.component] === undefined) {
            return
          }

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
          } else if (key === 'replaceClass') {
              this.mergeComponentClasses(mergables, `${key}es`)
          } else if (isPlainObject(mergables)) {
            this.mergeComponentClasses(this.toArray(mergables), `${key}es`)
          } else {
          }
          break

        case 'presets':
        case 'usePresets':
          if (!Array.isArray(mergables)) {
            return
          }

          each(mergables, (presetName) => {
            this.merge(this.presets[presetName])
          })
          break
      }
    })
  }
  
  mergeComponentClasses(componentClasses, key) {
    each(componentClasses, (classes, className) => {
      this[key](classes, [className])
    })
  }

  addClasses(add, levels) {
    let base = get(this.componentClasses, levels.join('.'))

    if (add.length == 1 && !add[0]) {
      return
    }

    if (isPlainObject(base)) {
      each(add, (subclasses, subclassName) => {
        this.addClasses(subclasses, levels.concat(subclassName))
      })
    } else {
      set(this.componentClasses, levels.join('.'), union(
        base,
        add
      ))
    }
  }

  prependClasses(prepend, levels) {
    let base = get(this.componentClasses, levels.join('.'))

    if (prepend.length == 1 && !prepend[0]) {
      return
    }

    if (isPlainObject(base)) {
      each(prepend, (subclasses, subclassName) => {
        this.prependClasses(subclasses, levels.concat(subclassName))
      })
    } else {
      set(this.componentClasses, levels.join('.'), union(
        prepend,
        base
      ))
    }
  }

  removeClasses(remove, levels) {
    let base = get(this.componentClasses, levels.join('.'))

    if (isPlainObject(base)) {
      each(remove, (subclasses, subclassName) => {
        this.removeClasses(subclasses, levels.concat(subclassName))
      })
    } else if (Array.isArray(base)) {
      set(this.componentClasses, levels.join('.'), base.filter((c) => {
        return typeof c !== 'string' || remove.indexOf(c) === -1
      }))
    }
  }

  replaceClasses(replace, levels) {
    let base = get(this.componentClasses, levels.join('.'))

    if (Array.isArray(replace)) {
      let tempReplace = {}

      replace.forEach((r) => {
        tempReplace = {
          ...tempReplace,
          ...r,
        }
      })

      replace = tempReplace
    }

    if (isPlainObject(base)) {
      each(replace, (subclasses, subclassName) => {
        this.replaceClasses(subclasses, levels.concat(subclassName))
      })
    } else if (Array.isArray(base)) {
      set(this.componentClasses, levels.join('.'), base.map((c) => {
        return typeof c !== 'string' || Object.keys(replace).indexOf(c) === -1
          ? c
          : replace[c]
      }))
    }
  }

  overrideClasses(override, levels) {
    let base = get(this.componentClasses, levels.join('.'))

    if (isPlainObject(base)) {
      each(override, (subclasses, subclassName) => {
        this.overrideClasses(subclasses, levels.concat(subclassName))
      })
    } else {
      set(this.componentClasses, levels.join('.'), override)
    }
  }

  toArray(componentClasses) {
    let arrayClasses = {}

    each(componentClasses, (classes, className) => {
      arrayClasses[className] = this.classesToArray(classes, [className])
    })

    return arrayClasses
  }

  classesToArray(classes, path) {
    let arrayClasses = classes
    let base = path ? get(this.componentClasses, path.join('.')) : undefined

    if (typeof classes === 'string') {
      arrayClasses = classes.length > 0 ? classes.split(' ') : []
    } else if (isPlainObject(classes)) {
      if (base && Array.isArray(base)) {
        arrayClasses = [classes]
      } else if (!base || isPlainObject(base)) {
        arrayClasses = {}

        each(classes, (subclasses, subclassName) => {
          arrayClasses[subclassName] = this.classesToArray(subclasses, path.concat([subclassName]))
        })
      }
    } else if (typeof classes === 'boolean' || (typeof classes === 'object' && [
      'ComputedRefImpl', 'RefImpl'
    ].indexOf(classes?.constructor?.name) !== -1)) {
      throw Error(`Cannot add conditional class to ${this.component}: '${path.join('.')}'`)
    }

    return arrayClasses
  }

  getDynamicClasses(target, prop, mainTarget) {
    if (!mainTarget) {
      mainTarget = target
    }

    let classes = Array.isArray(target[prop]) ? flattenDeep(target[prop]) : target[prop]

    if (target[`$${prop}`]) {
      return flattenDeep(target[`$${prop}`](mainTarget, this.component$.value))
    }

    if (isPlainObject(classes)) {
      classes = cloneDeep(classes)

      each(classes, (classList, className) => {
        classes[className] = this.getDynamicClasses(classes, className, target)
      })
    }

    return classes
  }

  getClassHelpers (componentClasses, path) {
    let classHelpers = {}

    each(componentClasses, (classes, className) => {
      if (className.match(/[$]/)) {
        return
      }

      // let name = componentClasses[`$${className}`] !== undefined ? `$${className}` : className

      if (isPlainObject(classes)) {
        classHelpers[className] = this.getClassHelpers(componentClasses[className], path.concat([className]))
      } else {
        classHelpers[className] = [`${path.join('.')}.${className}-->`]
      }
    })

    return classHelpers
  }

  pick(from, picks) {
    let picked = {}

    if (!from) {
      return picked
    }

    each(picks, (pick) => {
      if (pick in from) {
        picked[pick] = from[pick]
      }
    })

    return picked
  }
}