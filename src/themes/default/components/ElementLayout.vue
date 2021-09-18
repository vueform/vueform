<script>
  import ElementLayout from './../../blank/components/ElementLayout'

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
          fieldContainer: 'vf-field-container',
          fieldWrapperBefore: 'vf-field-wrapper-before',
          fieldWrapper: '',
          fieldWrapperAfter: 'vf-field-wrapper-after',
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in Laraform.vue

  .vf-field-container {
    flex: 1 1 auto;
  }

  .vf-field-wrapper-before,
  .vf-field-wrapper-after {
    width: 100%;
    padding-left: var(--vf-gutter);
    padding-right: var(--vf-gutter);
  }
</style>