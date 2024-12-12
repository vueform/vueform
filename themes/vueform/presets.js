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
  },
  'grid-table': {
    addClasses: {
      GridElement: {
        container: 'vf-grid-table',
      },
      ToggleElement: {
        wrapper_sm: 'vf-toggle-wrapper-sm',
        wrapper_md: '',
        wrapper_lg: 'vf-toggle-wrapper-lg',
      }
    },
    overrideClasses: {
      GridElement: {
        $cell: (classes, { colHeader, rowHeader }) => ({ colStart, rowStart }) => [
          classes.cell,
          (rowHeader && colStart === 0) || (colHeader && rowStart === 0) ? 'form-bg-table-header form-color-table-header' : null,
        ],
      },
      ToggleElement: {
        $wrapper: (classes, { align, Size }) => ([
          classes.wrapper,
          classes[`wrapper_${Size}`],
          align === 'left' ? classes.wrapper_left : null,
          align === 'right' ? classes.wrapper_right : null,
        ]),
      }
    }
  }
}