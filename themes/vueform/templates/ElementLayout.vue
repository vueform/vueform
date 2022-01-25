<script>
  import ElementLayout from './../../blank/templates/ElementLayout.vue'

  export default {
    name: 'ElementLayout',
    render: ElementLayout.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          container_error: 'has-error',
          outerWrapper: 'vf-row',
          outerWrapper_single: 'vf-group',
          outerWrapper_single_sm: '',
          outerWrapper_single_md: '',
          outerWrapper_single_lg: '',
          outerWrapper_multiple: '',
          outerWrapper_multiple_sm: '',
          outerWrapper_multiple_md: '',
          outerWrapper_multiple_lg: '',
          innerContainer: 'vf-layout-inner-container',
          innerWrapperBefore: 'vf-layout-inner-wrapper-before',
          innerWrapper: 'vf-layout-inner-wrapper',
          innerWrapperAfter: 'vf-layout-inner-wrapper-after',
          $container: (classes, { el$ }) => ([
            classes.container,
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
            multiple.value ? classes.outerWrapper_multiple : classes.outerWrapper_single,
            multiple.value ? classes[`outerWrapper_multiple_${Size}`] : classes[`outerWrapper_single_${Size}`],
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in Vueform.vue

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