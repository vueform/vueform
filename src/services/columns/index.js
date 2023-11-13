import each from 'lodash-es/each'
import merge from 'lodash-es/merge'
export default class Columns
{
  defaultBreakpoint = 'default'

  constructor (options, hasLabel, getClass, presets) {
    this.presets = presets

    this.configPresetColumns = this.serialize(this.columnsFromPresets(options.configPresetColumns) || {})
    this.configColumns = this.serialize(options.configColumns || {})
    this.formPresetColumns = this.serialize(this.columnsFromPresets(options.formPresetColumns) || {})
    this.formColumns = this.serialize(options.formColumns || {})
    this.presetColumns = this.serialize(this.columnsFromPresets(options.elementPresetColumns) || {})
    this.columns = this.serialize(options.elementColumns || {})

    this.hasLabel = hasLabel
    this.getClass = getClass

    this.cols = this.getCols()
  }

  get classes () {
    return {
      container: this.getClasses('container'),
      label: this.getClasses('label'),
      innerContainer: this.getClasses('innerContainer'),
      wrapper: this.getClasses('wrapper'),
    }
  }

  serialize(columns) {
    // columns: 8
    if (['number', 'string'].indexOf(typeof columns) !== -1) {
      return { [this.defaultBreakpoint]: { container: columns } }
    }

    // columns: { container: 8, wrapper: { default: 8, lg: 8 } }
    if (typeof columns === 'object' && ['container', 'label', 'wrapper'].indexOf(Object.keys(columns)[0]) !== -1) {
      let serialized = {}

      each(columns, (size, type) => {
        // columns: { container: 8 }
        if (['number', 'string'].indexOf(typeof size) !== -1) {
          if (serialized[this.defaultBreakpoint] === undefined) {
            serialized[this.defaultBreakpoint] = {}
          }

          serialized[this.defaultBreakpoint][type] = size
        }

        // columns: { container: { default: 8, lg: 8 } }
        else {
          each(size, (s, breakpoint) => {
            if (serialized[breakpoint] === undefined) {
              serialized[breakpoint] = {}
            }

            serialized[breakpoint][type] = s
          })
        }
      })

      return serialized
    }

    // columns: { lg: 8, md: { container: 8 } }
    else {
      let serialized = {}

      each(columns, (size, breakpoint) => {
        // columns: { lg: 8 }
        if (['number', 'string'].indexOf(typeof size) !== -1) {
          if (serialized[breakpoint] === undefined) {
            serialized[breakpoint] = {}
          }
          
          serialized[breakpoint].container = size
        }
        
        // columns: { md: { container: 8 } }
        else {
          serialized[breakpoint] = size
        }
      })

      return serialized
    }
  }

  columnsFromPresets(presets) {
    let columns

    each(presets, (presetName) => {
      let preset = this.presets[presetName]

      if (!preset || !preset.columns) {
        return
      }

      columns = preset.columns
    })

    return columns
  } 

  getNullClass () {
    return [this.getClass(this.defaultBreakpoint, 0)]
  }

  getClasses (type) {
    const classes = []

    Object.keys(this.cols).forEach((breakpoint) => {
      let size

      if (type === 'innerContainer') {
        size = this.cols[breakpoint].label
        size = size >= 12 || !this.hasLabel ? 12 : 12 - size
      } else {
        size = this.cols[breakpoint][type]

        if (type === 'label' && !this.hasLabel) {
          size = 0
        }

        // if (type === 'wrapper' && !this.hasLabel) {
        //   size += this.cols[breakpoint].label || 0

        //   if (size > 12) {
        //     size = 12
        //   }
        // }
      }
        
      if (size !== undefined && !isNaN(size)) {
        classes.push(this.getClass(breakpoint, size))
      }
    })

    return classes
  }

  getCols() {
    return merge({},
      { [this.defaultBreakpoint]: { container: 12, label: 12, wrapper: 12 } },
      this.configPresetColumns || {},
      this.configColumns || {},
      this.formPresetColumns || {},
      this.formColumns || {},
      this.presetColumns || {},
      this.columns || {},
    )
  }
}