import _ from 'lodash'
export default class Columns
{
  defaultBreakpoint = 'default'

  constructor (columns, formColumns, configColumns, hasLabel, getClass) {
    this.columns = this.serialize(columns || {})
    this.formColumns = this.serialize(formColumns || {})
    this.configColumns = this.serialize(configColumns || {})
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

    // columns: { container: 8, container: { default: 8, lg: 8 } }
    if (typeof columns === 'object' && ['container', 'label', 'wrapper'].indexOf(Object.keys(columns)[0]) !== -1) {
      let serialized = {}

      _.each(columns, (size, type) => {
        // columns: { container: 8 }
        if (['number', 'string'].indexOf(typeof size) !== -1) {
          if (serialized[this.defaultBreakpoint] === undefined) {
            serialized[this.defaultBreakpoint] = {}
          }

          serialized[this.defaultBreakpoint][type] = size
        }

        // columns: { container: { default: 8, lg: 8 } }
        else {
          _.each(size, (s, breakpoint) => {
            if (serialized[breakpoint] === undefined) {
              serialized[breakpoint] = {}
            }

            serialized[breakpoint][type] = s
          })
        }
      })

      return serialized
    }

    // columns: { lg: 8, lg: { container: 8 } }
    else {
      let serialized = {}

      _.each(columns, (size, breakpoint) => {
        // columns: { lg: 8 }
        if (['number', 'string'].indexOf(typeof size) !== -1) {
          if (serialized[breakpoint] === undefined) {
            serialized[breakpoint] = {}
          }
          
          serialized[breakpoint].container = size
        }
        
        // columns: { lg: { container: 8 } }
        else {
          serialized[breakpoint] = size
        }
      })

      return serialized
    }
  }

  getNullClass () {
    return [this.getClass(this.defaultBreakpoint, 0)]
  }

  getClasses (type) {
    const classes = []

    Object.keys(this.cols).forEach((breakpoint) => {
      if (type === 'innerContainer') {
        let size = this.cols[breakpoint].label
        size = size >= 12 || !this.hasLabel ? 12 : 12 - size

        classes.push(this.getClass(breakpoint, size))
      } else {
        let size = this.cols[breakpoint][type]

        if (type === 'label' && !this.hasLabel) {
          size = 0
        }

        if (type === 'wrapper' && !this.hasLabel) {
          size += this.cols[breakpoint].label || 0

          if (size > 12) {
            size = 12
          }
        }
        
        if (size !== undefined) {
          classes.push(this.getClass(breakpoint, size))
        }
      }
    })

    return classes
  }

  getCols() {
    return _.merge({},
      { [this.defaultBreakpoint]: { container: 12, label: 12, wrapper: 12 } },
      this.configColumns || {},
      this.formColumns || {},
      this.columns || {}
    )
  }
}