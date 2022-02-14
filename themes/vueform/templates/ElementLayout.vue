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
          outerWrapper: 'vf-row',
          outerWrapper_single: 'vf-group',
          outerWrapper_single_sm: 'vf-group-sm',
          outerWrapper_single_md: '',
          outerWrapper_single_lg: 'vf-group-lg',
          outerWrapper_multiple: '',
          outerWrapper_multiple_sm: '',
          outerWrapper_multiple_md: '',
          outerWrapper_multiple_lg: '',
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
          $outerWrapper:  (classes, { multiple, Size }) => ([
            classes.outerWrapper,
            multiple ? classes.outerWrapper_multiple : classes.outerWrapper_single,
            multiple ? classes[`outerWrapper_multiple_${Size}`] : classes[`outerWrapper_single_${Size}`],
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
    
    .vf-layout-inner-wrapper,
    .vf-layout-inner-wrapper-before,
    .vf-layout-inner-wrapper-after {
      padding-left: 0;
      padding-right: 0;
    }
  }


  .vf-layout-inner-wrapper-before,
  .vf-layout-inner-wrapper-after {
    width: 100%;
    padding-left: var(--vf-gutter);
    padding-right: var(--vf-gutter);
  }
</style>