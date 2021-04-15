export default class Columns
{
  defaultBreakpoint = 'default'

  constructor (columns, formColumns, configColumns) {
    this.columns = this.serialize(columns)
    this.formColumns = this.serialize(formColumns)
    this.configColumns = this.serialize(configColumns)
  }

  get columnsObject () {
    return {
      classes: {
        element: ['col-8'],
        label: ['col-12'],
        field: ['col-12'],
      },
      columns: {
        element: { default: 8 },
        label: { default: 12 },
        field: { default: 12 },
      }
    }
  }

  serialize(c) {
    if (['number', 'string'].indexOf(typeof c) !== -1) {
      return { element: { [this.defaultBreakpoint]: c } }
    }
  }
}