<script>
  import GridElement from './../../../blank/templates/elements/GridElement.vue'

  export default {
    name: 'GridElement',
    render: GridElement.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-grid-container',
          container_scrollable: 'vf-grid-container-scrollable',
          grid: 'vf-grid',
          grid_sm: 'vf-grid-sm',
          grid_md: '',
          grid_lg: 'vf-grid-lg',
          cell: 'vf-grid-cell',
          fieldWrapper: 'vf-grid-field-wrapper',
          fieldWrapper_sm: 'vf-grid-field-wrapper-sm',
          fieldWrapper_md: '',
          fieldWrapper_lg: 'vf-grid-field-wrapper-lg',
          fieldWrapper_left: 'vf-grid-field-wrapper-left',
          fieldWrapper_center: 'vf-grid-field-wrapper-center',
          fieldWrapper_right: 'vf-grid-field-wrapper-right',
          fieldWrapper_top: 'vf-grid-field-wrapper-top',
          fieldWrapper_middle: 'vf-grid-field-wrapper-middle',
          fieldWrapper_bottom: 'vf-grid-field-wrapper-bottom',
          fieldWrapper_baseline: 'vf-grid-field-wrapper-baseline',
          textWrapper: 'vf-grid-text-wrapper',
          textWrapper_sm: 'vf-grid-text-wrapper-sm',
          textWrapper_md: '',
          textWrapper_lg: 'vf-grid-text-wrapper-lg',
          textWrapper_left: 'vf-grid-text-wrapper-left',
          textWrapper_center: 'vf-grid-text-wrapper-center',
          textWrapper_right: 'vf-grid-text-wrapper-right',
          textWrapper_justify: 'vf-grid-text-wrapper-justify',
          textWrapper_top: 'vf-grid-text-wrapper-top',
          textWrapper_middle: 'vf-grid-text-wrapper-middle',
          textWrapper_bottom: 'vf-grid-text-wrapper-bottom',
          textWrapper_baseline: 'vf-grid-text-wrapper-baseline',
          text: 'vf-grid-text',
          $container: (classes, { scrollable }) => ([
            classes.container,
            scrollable ? classes.container_scrollable : null,
          ]),
          $grid: (classes, { Size, align }) => ([
            classes.grid,
            classes[`grid_${Size}`],
          ]),
          $cell: (classes, {  }) => () => ([
            classes.cell,
          ]),
          $fieldWrapper: (classes, { Size }) => ({ schema, align, valign, rowIndex, colIndex }) => ([
            classes.fieldWrapper,
            classes[`fieldWrapper_${Size}`],
            classes[`fieldWrapper_${align}`],
            classes[`fieldWrapper_${valign}`],
          ]),
          $textWrapper: (classes, { Size }) => ({ align, valign, rowIndex, colIndex }) => ([
            classes.textWrapper,
            classes[`textWrapper_${Size}`],
            classes[`textWrapper_${align}`],
            classes[`textWrapper_${valign}`],
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
  /* Some styles are contained in _table.scss */
  
.vf-grid-container-scrollable {
  overflow-x: auto;
  overflow-y: visible;
}

.vf-grid {
  display: grid;
  column-gap: min(calc(100% / 12), var(--vf-gutter));
  row-gap: var(--vf-gutter);
}

.vf-grid-sm {
  column-gap: min(calc(100% / 12), var(--vf-gutter-sm));
  row-gap: var(--vf-gutter-sm);
}

.vf-grid-lg {
  column-gap: min(calc(100% / 12), var(--vf-gutter-lg));
  row-gap: var(--vf-gutter-lg);
}

.vf-grid-cell {
  position: relative;
}

.vf-grid-field-wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  min-height: var(--vf-min-height-input);
}

.vf-grid-field-wrapper-sm {
  min-height: var(--vf-min-height-input-sm);
}

.vf-grid-field-wrapper-lg {
  min-height: var(--vf-min-height-input-lg);
}

.vf-grid-field-wrapper-left {
  text-align: left;
}

.vf-grid-field-wrapper-center {
  text-align: center;
}

.vf-grid-field-wrapper-right {
  text-align: right;
}

.vf-grid-field-wrapper-top {
  align-items: flex-start;
}

.vf-grid-field-wrapper-middle {
  align-items: center;
}

.vf-grid-field-wrapper-bottom {
  align-items: flex-end;
}

.vf-grid-field-wrapper-baseline {
  align-items: stretch;
}

.vf-grid-text-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  min-height: var(--vf-min-height-input);
  padding: var(--vf-py-input) var(--vf-px-input);
  overflow-wrap: break-word;
}

.vf-grid-text-wrapper-sm {
  min-height: var(--vf-min-height-input-sm);
  padding: var(--vf-py-input-sm) var(--vf-px-input-sm);
}

.vf-grid-text-wrapper-lg {
  min-height: var(--vf-min-height-input-lg);
  padding: var(--vf-py-input-lg) var(--vf-px-input-lg);
}

.vf-grid-text-wrapper-left {
  justify-content: flex-start;
  text-align: left;
}

.vf-grid-text-wrapper-center {
  justify-content: center;
  text-align: center;
}

.vf-grid-text-wrapper-right {
  justify-content: flex-end;
  text-align: right;
}

.vf-grid-text-wrapper-justify {
  justify-content: stretch;
  text-align: justify;
}

.vf-grid-text-wrapper-top {
  align-items: start;
}

.vf-grid-text-wrapper-middle {
  align-items: center;
}

.vf-grid-text-wrapper-bottom {
  align-items: end;
}

.vf-grid-text-wrapper-baseline {
  align-items: stretch;
}

.vf-grid-text {
  width: 100%;
}
</style>