<script>
  import MatrixElement from './../../../blank/templates/elements/MatrixElement.vue'

  export default {
    name: 'MatrixElement',
    render: MatrixElement.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-matrix',
          wrapper: 'vf-matrix-wrapper',
          grid: 'vf-matrix-grid',
          row: 'vf-matrix-row',
          rowTitle: 'vf-matrix-row-title',
          rowTitle_wrap: 'vf-matrix-wra',
          rowTitle_nowrap: 'vf-matrix-nowrap',
          colTitle: 'vf-matrix-col-title',
          colTitle_wrap: 'vf-matrix-col-wrap',
          colTitle_nowrap: 'vf-matrix-col-no-wrap',
          cell: 'vf-matrix-cell',
          cell_padding: 'vf-matrix-cell-padding',
          cellWrapper: 'vf-matrix-cell-wrapper',
          cellWrapper_sm: 'vf-matrix-cell-wrapper-sm',
          cellWrapper_md: '',
          cellWrapper_lg: 'vf-matrix-cell-wrapper-lg',
          remove: 'vf-matrix-remove',
          removeIcon: 'vf-matrix-remove-icon',
          add: 'vf-btn vf-btn-primary vf-btn-small vf-matrix-add',
          add_sm: 'vf-btn-small-sm vf-matrix-add-sm',
          add_md: '',
          add_lg: 'vf-btn-small-lg vf-matrix-add-lg',
          $cell: (classes, { padding }) => (column) => ([
            classes.cell,
            (padding && column?.padding !== false) || column?.padding ? classes.cell_padding : null,
          ]),
          $rowTitle: (classes, { rowWrap }) => ([
            classes.rowTitle,
            rowWrap ? classes.rowTitle_wrap : classes.rowTitle_nowrap,
          ]),
          $colTitle: (classes, { colWrap }) => ([
            classes.colTitle,
            colWrap ? classes.colTitle_wrap : classes.colTitle_nowrap,
          ]),
          $cellWrapper: (classes, { Size }) => ([
            classes.cellWrapper,
            classes[`cellWrapper_${Size}`],
          ]),
          $add: (classes, { Size }) => ([
            classes.add,
            classes[`add_${Size}`],
          ]),
        }
      }
    },
  }
</script>

<style lang="scss">
  /* Some styles are contained in Vueform.vue */

  .vf-matrix-wrapper {
    overflow-x: auto;
    background: var(--vf-bg-input);
  }

  .vf-matrix-grid {
    min-width: 100%;
  }

  .vf-matrix-row {
    position: relative;
  }

  .vf-matrix-row-title {
    padding: 0 0.75rem 0 0;
    position: sticky;
    left: 0;
    background: var(--vf-bg-input);
  }

  .vf-matrix-nowrap {
    white-space: nowrap;
  }

  .vf-matrix-col-title {
    font-weight: normal;
    text-align: center;
    padding: 0 0.75rem;
  }

  .vf-matrix-col-no-wrap {
    white-space: nowrap;
  }

  .vf-matrix-cell-padding {
    padding: 0 0.75rem;
  }

  .vf-matrix-cell-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    min-height: var(--vf-min-height-input);

    .vf-matrix-cell-wrapper-sm {
      min-height: var(--vf-min-height-input-sm);
    }

    .vf-matrix-cell-wrapper-lg {
      min-height: var(--vf-min-height-input-lg);
    }
  }

  .vf-matrix-remove {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 999;
    background-color: var(--vf-bg-passive);
    border-radius: 999px;
    transition: .15s;
    opacity: 0;

    &:hover {
      filter: brightness(0.9);
    }

    &:focus {
      opacity: 1;
    }
  }

  .vf-matrix-remove-icon {
    display: flex;
    width: 1.125rem;
    height: 1.125rem;
    align-items: center;
    justify-content: center;
    mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
    mask-size: 0.75rem 0.75rem;
    -webkit-mask-size: 0.75rem 0.75rem;
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    mask-position: center center;
    -webkit-mask-position: center center;
    background-color: var(--vf-color-passive);
  }

  .vf-matrix-row {
    &:hover {
      .vf-matrix-remove {
        visibility: visible;
        opacity: 1;
      }
    }
  }

  .vf-matrix-add {
    margin-top: var(--vf-gutter);

    &.vf-matrix-add-sm {
      margin-top: var(--vf-gutter-sm);
    }

    &.vf-matrix-add-lg {
      margin-top: var(--vf-gutter-lg);
    }
  }
</style>