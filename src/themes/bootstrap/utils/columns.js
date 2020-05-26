const toDefaultBreakpoint = (columns, grid) => {
  return {
    [grid.defaultBreakpoint]: columns
  }
}

const transformToObject = (definition, grid) => {
  let transformNumber = (number) => {
    return {
      element: number
    }
  }

  let transformSizes = (sizes) => {
    return {
      element: sizes
    }
  }

  let definitionHasOnlySizes = () => {
    return !_.isEmpty(definition) &&
      definition.element === undefined &&
      definition.label === undefined &&
      definition.field === undefined
  }

  let isNum = (input) => {
    return /^\d+$/.test(input)
  }

  // if definition is number transform it into
  // an object with the element having that size
  // 12 >> { element: 12 }
  if (isNum(definition)) {
    definition = transformNumber(definition)
  }

  // if definition has only sizes make 
  // the element has those sizes
  // { lg: 12 } >> { element: { lg: 12 } }
  if (definitionHasOnlySizes()) {
    definition = transformSizes(definition)
  }

  // if element is defined and it is a number
  // transform it to an object with the value
  // being the default breakpoint size
  // { element: 2 } >> { element: { lg: 2 } }
  if (definition.element !== undefined && isNum(definition.element)) {
    definition.element = toDefaultBreakpoint(definition.element, grid)
  }

  if (definition.label !== undefined && isNum(definition.label)) {
    definition.label = toDefaultBreakpoint(definition.label, grid)
  }

  if (definition.field !== undefined && isNum(definition.field)) {
    definition.field = toDefaultBreakpoint(definition.field, grid)
  }

  return definition
}

const correctLabel = (form, element, grid, hasLabel) => {
  if (!hasLabel) {
    return toDefaultBreakpoint(0, grid)
  }

  if (element.label) {
    return element.label
  }
  
  if (form.label) {
    return form.label
  }

  return toDefaultBreakpoint(grid.columns, grid)
}

const correctField = (form, element, grid, hasLabel) => {
  if (element.field) {
    return element.field
  }

  if (form.field) {
    return form.field
  }

  return toDefaultBreakpoint(grid.columns, grid)
}

const createClasses = (cols, template) => {
  var classes = {}

  _.each(['element', 'label', 'field'], (type) => {
    classes[type] = []

    _.each(cols[type], (size, breakpoint) => {
      classes[type].push(template
        .replace(':size', size)
        .replace(':breakpoint', breakpoint)
      )
    })

    classes[type] = classes[type].join(' ')
  })

  return classes
}

const emptyResponse = () => {
  return {
    columns: {
      element: {},
      label: {},
      field: {},
    },
    classes: {
      element: '',
      label: '',
      field: '',
    }
  }
}

const columns = (element$) => {
  let form = element$.form$.columns
  let element = element$.schema.columns
  let grid = element$.theme.grid
  let options = {
    hasLabel: element$.hasLabel
  }

  if (_.isEmpty(grid)) {
    return emptyResponse()
  }

  if (element === undefined) {
    element = {}
  }

  // create a final object from the form's columns settings
  form = transformToObject(form, grid)

  // create a final object from the element's columns settings
  element = transformToObject(element, grid)

  // merge defaults with definition
  let cols = Object.assign({}, form, element)

  // calculate label size
  cols.label = correctLabel(form, element, grid, options.hasLabel)

  // calculate field size
  cols.field = correctField(form, element, grid, options.hasLabel)

  return {
    cols: cols,
    classes: createClasses(cols, grid.column)
  }
}

export default columns