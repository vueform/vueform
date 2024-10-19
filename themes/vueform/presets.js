export default {
  'matrix-table': {
    addClasses: {
      MatrixElement: {
        container: 'vf-matrix-table',
        cellWrapper_stretch: 'is-stretch'
      }
    },
    overrideClasses: {
      MatrixElement: {
        $cellWrapper: (classes, { padding, centered, cells$ }) => (type, name) => {
          const isStandalone = ['radio', 'checkbox', 'toggle'].includes(type)
          
          return [
            classes.cellWrapper,
            padding ? classes.cellWrapper_padding : null,
            isStandalone ? classes.cellWrapper_centered : null,
            !isStandalone ? classes.cellWrapper_stretch : null,
            cells$[name]?.error ? classes.cellWrapper_error : null,
            cells$[name]?.isSuccess ? classes.cellWrapper_success : null,
          ]
        },
      }
    }
  }
}