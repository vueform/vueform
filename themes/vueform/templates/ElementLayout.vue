<script>
  import ElementLayout from './../../blank/templates/ElementLayout.vue'

  export default {
    name: 'ElementLayout',
    render: ElementLayout.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-element-layout',
          container_sm: 'vf-element-layout-sm',
          container_md: '',
          container_lg: 'vf-element-layout-lg',
          container_error: 'vf-element-layout-error',
          outerWrapper: 'vf-element-layout-outer-wrapper',
          innerContainer: 'vf-layout-inner-container',
          innerWrapperBefore: 'vf-layout-inner-wrapper-before',
          innerWrapper: 'vf-layout-inner-wrapper',
          innerWrapperAfter: 'vf-layout-inner-wrapper-after',
          $container: (classes, { el$, Size }) => ([
            classes.container,
            classes[`container_${Size}`],
            el$.columnsClasses.container,
            el$.classes.container,
            !el$.isStatic && el$.errors && !!el$.errors.length ? classes.container_error : null
          ]),
          $innerContainer:  (classes, { el$ }) => ([
            classes.innerContainer,
            el$.columnsClasses.innerContainer,
          ]),
          $innerWrapper:  (classes, { el$ }) => ([
            classes.innerWrapper,
            el$.columnsClasses.wrapper,
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in Vueform.vue

  .vf-element-layout {
    font-size: var(--vf-font-size);
    line-height: var(--vf-line-height);
    letter-spacing: var(--vf-letter-spacing);

    &.vf-element-layout-sm {
      font-size: var(--vf-font-size-sm);
      line-height: var(--vf-line-height-sm);
      letter-spacing: var(--vf-letter-spacing-sm);
    }

    &.vf-element-layout-lg {
      font-size: var(--vf-font-size-lg);
      line-height: var(--vf-line-height-lg);
      letter-spacing: var(--vf-letter-spacing-lg);
    }
  }

  .vf-layout-inner-container {
    flex: 1 1 0%;
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    
    .vf-layout-inner-wrapper,
    .vf-layout-inner-wrapper-before,
    .vf-layout-inner-wrapper-after {
      padding-left: 0;
      padding-right: 0;
    }
  }


  .vf-layout-inner-wrapper-before,
  .vf-layout-inner-wrapper-after {
    grid-column: span 12 / span 12;
    padding-left: var(--vf-gutter);
    padding-right: var(--vf-gutter);
  }

  .vf-element-layout-outer-wrapper {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }

</style>