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
      element: this.getClasses('element'),
      label: this.getClasses('label'),
      field: this.getClasses('field'),
    }
  }

  serialize(columns) {
    // columns: 8
    if (['number', 'string'].indexOf(typeof columns) !== -1) {
      return { [this.defaultBreakpoint]: { element: columns } }
    }

    // columns: { element: 8, element: { default: 8, lg: 8 } }
    if (typeof columns === 'object' && ['element', 'label', 'field'].indexOf(Object.keys(columns)[0]) !== -1) {
      let serialized = {}

      _.each(columns, (size, type) => {
        // columns: { element: 8 }
        if (['number', 'string'].indexOf(typeof size) !== -1) {
          if (serialized[this.defaultBreakpoint] === undefined) {
            serialized[this.defaultBreakpoint] = {}
          }

          serialized[this.defaultBreakpoint][type] = size
        }

        // columns: { element: { default: 8, lg: 8 } }
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

    // columns: { lg: 8, lg: { element: 8 } }
    else {
      let serialized = {}

      _.each(columns, (size, breakpoint) => {
        // columns: { lg: 8 }
        if (['number', 'string'].indexOf(typeof size) !== -1) {
          if (serialized[breakpoint] === undefined) {
            serialized[breakpoint] = {}
          }
          
          serialized[breakpoint].element = size
        }
        
        // columns: { lg: { element: 8 } }
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
      let size = this.cols[breakpoint][type]

      if (type === 'label' && !this.hasLabel) {
        size = 0
      }

      if (type === 'field' && !this.hasLabel) {
        size += this.cols[breakpoint].label || 0

        if (size > 12) {
          size = 12
        }
      }
      
      if (size !== undefined) {
        classes.push(this.getClass(breakpoint, size))
      }
    })

    return classes
  }

  getCols() {
    return _.merge({},
      { [this.defaultBreakpoint]: { element: 12, label: 12, field: 12 } },
      this.configColumns || {},
      this.formColumns || {},
      this.columns || {}
    )
  }
}