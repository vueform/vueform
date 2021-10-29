<script>
  import ElementLayout from './../../blank/templates/ElementLayout'

  export default {
    name: 'ElementLayout',
    render: ElementLayout.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          container_error: 'has-error',
          outerWrapper: 'vf-row',
          outerWrapper_single: 'vf-group',
          outerWrapper_multiple: '',
          innerContainer: 'vf-layout-inner-container',
          innerWrapperBefore: 'vf-layout-inner-wrapper-before',
          innerWrapper: 'vf-layout-inner-wrapper',
          innerWrapperAfter: 'vf-layout-inner-wrapper-after',
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in Laraform.vue

  .vf-layout-inner-container {
    flex: 1 1 0%;
  }

  .vf-layout-inner-wrapper {
    padding-left: 0;
    padding-right: 0;
  }

  .vf-layout-inner-wrapper-before,
  .vf-layout-inner-wrapper-after {
    width: 100%;
    padding-left: var(--vf-gutter);
    padding-right: var(--vf-gutter);
  }
</style>