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
    box-sizing: content-box;
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

  .vf-matrix-table {
    &.is-stretch {
      align-items: stretch;
    }

    .vf-matrix-container {
      
    }

    .vf-matrix-grid {
      border-right: var(--vf-border-width-table) solid var(--vf-border-color-table);
      border-bottom: var(--vf-border-width-table) solid var(--vf-border-color-table);
      gap: 0 !important;
    }

    .vf-matrix-header-first,
    .vf-matrix-header,
    .vf-matrix-header-remove,
    .vf-matrix-row-label,
    .vf-matrix-cell,
    .vf-matrix-row-remove {
      border-left: var(--vf-border-width-table) solid var(--vf-border-color-table);
      border-top: var(--vf-border-width-table) solid var(--vf-border-color-table);
    }

    .vf-matrix-header {
      &.is-sticky {
        border-bottom: var(--vf-border-width-table) solid var(--vf-border-color-table);
      }
    }

    .vf-matrix-row-label {
      &.is-sticky {
        border-right: var(--vf-border-width-table) solid var(--vf-border-color-table);
      }
    }

    .vf-matrix-header-first,
    .vf-matrix-header,
    .vf-matrix-header-remove,
    .vf-matrix-row-label,
    .vf-matrix-row-remove {
      background: var(--vf-bg-table-header);
      color: var(--vf-color-table-header);
    }

    .vf-matrix-cell {
      background: var(--vf-bg-input);
    }

    .vf-matrix-header {
      &.is-sticky {
        margin-bottom: calc(var(--vf-border-width-table) * -1);
      }

      &.is-not-sticky {
        border-bottom-width: 0;
      }
    }

    .vf-matrix-row-label {
      
      &.is-sticky {
        margin-right: calc(var(--vf-border-width-table) * -1);
      }
      
      &.is-not-sticky {
        border-right-width: 0;
      }
    }

    .vf-matrix-cell-wrapper {
      &.has-padding {
        padding-left: 0;
        padding-right: 0;
      }

      &.is-stretch {
        align-items: stretch;
      }

      &.has-error {
        position: relative;

        &:after {
          content: '';
          position: absolute;
          inset: -1px;
          box-shadow: inset 0 0 0 1px var(--vf-danger);
          pointer-events: none;
        }
      }
    }

    .vf-matrix-remove-icon {
      
    }

    .vf-matrix-header-first {
      
    }

    .vf-matrix-row-label {
      padding-left: 0.5rem;
    }

    /* Layout */

    .vf-matrix-cell-wrapper > .vf-element-layout > .vf-element-layout-outer-wrapper > .vf-layout-inner-container {
      & > .vf-layout-inner-wrapper-before,
      & > .vf-layout-inner-wrapper-after {
        display: none;
      }
    }
    
    .vf-layout-inner-wrapper,
    .vf-element-layout-outer-wrapper {
      height: 100%;
    }
    
    /* Text inputs */

    .vf-input-group {
      border: 0;
      border-radius: 0;
      height: 100%;

      &.vf-input-group-focused {
        position: relative;
        z-index: 1;
      }

      &.vf-input-group-sm {
        height: 100%;
      }
    }

    .vf-input {
      height: 100%;
    }

    /* Native select */

    .vf-native-select {
      height: 100%;
      border: 0;
      border-radius: 0;

      &:focus {
        position: relative;
        z-index: 1;
      }
    }

    .vf-native-select-wrapper {
      height: 100%;
    }

    .vf-native-select-caret {
      z-index: 2;
    }

    /* Select */

    .vf-multiselect {
      height: 100%;
      border: 0;
      border-radius: 0;
    }

    /* Native multiselect */

    .vf-multiselect-active {
      position: relative;
      z-index: 1;
    }

    .vf-multiselect-wrapper {
      height: 100%;
    }

    .vf-native-multiselect {
      height: 100%;
      border: 0;
      border-radius: 0;

      &:focus {
        position: relative;
        z-index: 1;
      }
    }

    .vf-native-multiselect-wrapper {
      height: 100%;
    }

    /* Editor */

    .vf-editor {
      height: 100%;
      display: flex;
      flex-direction: column;
      border: 0;
      border-radius: 0;

      &.vf-editor-focused {
        position: relative;
        z-index: 1;
      }
    }

    trix-editor {
      height: 100%;
    }

    /* Tabs */

    .vf-checkboxgroup-view-default,
    .vf-radiogroup-view-default {
      padding: 0.25rem 0.5rem;
    }

    .vf-checkboxgroup-tabs-wrapper,
    .vf-radiogroup-tabs-wrapper {
      height: 100%;
      border-radius: 0;
    }

    .vf-checkbox-tabs,
    .vf-radio-tabs {
      border-width: 0;
      border-left-width: var(--vf-border-width-input-t);
    }

    .vf-checkbox-tabs.vf-checkbox-tabs-first,
    .vf-radio-tabs.vf-radio-tabs-first {
      border: 0;
    }

    .vf-checkbox-tabs.vf-checkbox-tabs-first,
    .vf-checkbox-tabs.vf-checkbox-tabs-last,
    .vf-radio-tabs.vf-radio-tabs-first,
    .vf-radio-tabs.vf-radio-tabs-last {
      border-radius: 0;
    }

    /* Blocks */

    .vf-checkbox-blocks,
    .vf-radio-blocks {
      border-width: 0;
      min-height: 100%;
    }

    .vf-checkbox-blocks:not(.vf-checkbox-blocks-first),
    .vf-radio-blocks:not(.vf-radio-blocks-first) {
      border-top-width: var(--vf-border-width-input-t);
    }

    .vf-checkboxgroup-blocks-wrapper,
    .vf-radiogroup-blocks-wrapper {
      height: 100%;
      border-radius: 0;
    }

    .vf-checkbox-blocks-container,
    .vf-radio-blocks-container {
      flex: 1;
    }

    .vf-checkbox-blocks.vf-checkbox-blocks-first,
    .vf-checkbox-blocks.vf-checkbox-blocks-last,
    .vf-radio-blocks.vf-radio-blocks-first,
    .vf-radio-blocks.vf-radio-blocks-last {
      border-radius: 0;
    }

    /* Slider */

    .vf-slider-wrapper {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 0;
    }

    .vf-slider-target {
      width: 100%;
      margin-left: 1rem;
      margin-right: 1rem;
    }

    /* Slider */

    .vf-matrix-grid {
      .vf-btn {
        width: 100%;
        border-radius: 0;

        &:hover:not(:disabled):not(.vf-btn-loading) {
          transform: none;
          filter: brightness(0.95);
        }

        &:focus {
          position: relative;
          z-index: 1;
        }
      }
    }

    /* Static */

    .vf-static {
      height: 100%;
    }

    /* File previews */

    .vf-file-preview-wrapper,
    .vf-file-preview-image-wrapper,
    .vf-file-preview-gallery-wrapper {
      padding: 0.25rem;
    }

    .vf-multifile-list {
      margin-top: 0;
    }
  }
</style>