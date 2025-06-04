<script>
  import MatrixElement from './../../../blank/templates/elements/MatrixElement.vue'

  export default {
    name: 'MatrixElement',
    render: MatrixElement.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-matrix-container',
          grid: 'vf-matrix-grid',
          grid_scrollable: 'is-scrollable',
          headerFirst: 'vf-matrix-header-first',
          header: 'vf-matrix-header',
          header_padding: 'has-padding',
          header_sticky: 'is-sticky',
          header_not_sticky: 'is-not-sticky',
          header_wrap: 'is-wrap',
          header_nowrap: 'is-nowrap',
          header_sm: 'vf-matrix-header-sm',
          header_md: '',
          header_lg: 'vf-matrix-header-lg',
          headerRemove: 'vf-matrix-header-remove',
          rowLabel: 'vf-matrix-row-label',
          rowLabel_sticky: 'is-sticky',
          rowLabel_not_sticky: 'is-not-sticky',
          rowLabel_wrap: 'is-wrap',
          rowLabel_nowrap: 'is-nowrap',
          cell: 'vf-matrix-cell',
          cell_sm: 'vf-matrix-cell-sm',
          cell_md: '',
          cell_lg: 'vf-matrix-cell-lg',
          cellWrapper: 'vf-matrix-cell-wrapper',
          cellWrapper_padding: 'has-padding',
          cellWrapper_centered: 'is-centered',
          cellWrapper_error: 'has-error',
          cellWrapper_success: 'has-success',
          rowRemove: 'vf-matrix-row-remove',
          remove: 'vf-matrix-remove',
          removeIcon: 'vf-matrix-remove-icon',
          add: 'vf-btn vf-btn-primary vf-btn-small vf-matrix-add',
          add_sm: 'vf-btn-small-sm vf-matrix-add-sm',
          add_md: '',
          add_lg: 'vf-btn-small-lg vf-matrix-add-lg',
          $grid: (classes, { scrollable }) => ([
            classes.grid,
            scrollable ? classes.grid_scrollable : null,
          ]),
          $header: (classes, { Size, padding, stickyCols, colWrap }) => ([
            classes.header,
            classes[`header_${Size}`],
            padding ? classes.header_padding : null,
            stickyCols ? classes.header_sticky : null,
            colWrap ? classes.header_wrap : classes.header_nowrap,
          ]),
          $rowLabel: (classes, { stickyRows, rowWrap }) => ([
            classes.rowLabel,
            stickyRows ? classes.rowLabel_sticky : null,
            rowWrap ? classes.rowLabel_wrap : classes.rowLabel_nowrap,
          ]),
          $cell: (classes, { Size }) => ([
            classes.cell,
            classes[`cell_${Size}`],
          ]),
          $cellWrapper: (classes, { padding, centered, cells$ }) => (type, name) => ([
            classes.cellWrapper,
            padding ? classes.cellWrapper_padding : null,
            ['radio', 'checkbox', 'toggle'].includes(type) ? classes.cellWrapper_centered : null,
            cells$[name]?.error ? classes.cellWrapper_error : null,
            cells$[name]?.isSuccess ? classes.cellWrapper_success : null,
          ]),
          $add: (classes, { Size }) => ([
            classes.add,
            classes[`add_${Size}`],
          ]),
          $remove: (classes, { removeHover }) => ([
            classes.remove,
            removeHover ? classes.remove_hover : null
          ]),
        }
      }
    },
  }
</script>

<style lang="scss">
  /* Some styles are contained in _table.scss */

  .vf-matrix-container {
    
  }

  .vf-matrix-grid {
    display: grid;

    &.is-scrollable {
      overflow: auto;
    }
  }

  .vf-matrix-header-first {
    
  }

  .vf-matrix-header {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-height: var(--vf-min-height-input);

    &.has-padding {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }

    &.is-sticky {
      position: sticky;
      top: 0;
      backdrop-filter: blur(64px);
      z-index: 1;
    }

    &.is-wrap {

    }

    &.is-nowrap {
      white-space: nowrap;
    }

    &.vf-matrix-header-sm {
      min-height: var(--vf-min-height-input-sm);
    }

    &.vf-matrix-header-lg {
      min-height: var(--vf-min-height-input-lg);
    }
  }

  .vf-matrix-header-remove {
    
  }

  .vf-matrix-row-label {
    display: flex;
    align-items: center;
    padding-right: 0.5rem;

    &.is-sticky {
      position: sticky;
      left: 0;
      backdrop-filter: blur(64px);
      z-index: 1;
    }

    &.is-wrap {

    }

    &.is-nowrap {
      white-space: nowrap;
    }
  }

  .vf-matrix-cell {
    display: grid;
    align-items: center;
    min-height: var(--vf-min-height-input);

    &.vf-matrix-cell-sm {
      min-height: var(--vf-min-height-input-sm);
    }

    &.vf-matrix-cell-lg {
      min-height: var(--vf-min-height-input-lg);
    }
  }

  .vf-matrix-cell-wrapper {
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center;

    &.has-padding {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }

    &.is-centered {
      justify-content: center;
    }

    &.has-error {

    }

    &.has-success {

    }
  }

  .vf-matrix-row-remove {
    position: sticky;
    right: 0;
    backdrop-filter: blur(64px);
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
  }

  .vf-matrix-remove {
    width: 1rem;
    height: 1rem;
    padding: 0.125rem;
    box-sizing: content-box !important;
    background-color: var(--vf-bg-passive);
    border-radius: 999px;
    transition: .15s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  .vf-matrix-remove-icon {
    display: flex;
    width: 100%;
    height: 100%;
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