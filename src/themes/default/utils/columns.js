import _ from 'lodash'
/*
  columns: 12,

  columns: {
    element: 12,
    field: 12,
    label: 12,
  }

  columns: {
    md: 6,
    sm: 8,
    xs: 12,
  }

  columns: {
    md: {
      element: 12,
      label: 12,
      field: 12,
    },
    sm: {
      element: 12,
      label: 2,
      field: 10,
    },
  }

  columns: {
    element: {
      md: 12,
      sm: 12
    },
    field: {
      md: 12,
      sm: 2
    },
    field: {
      md: 12,
      sm: 10
    },
  }
*/

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
  return emptyResponse()
}

export default columns