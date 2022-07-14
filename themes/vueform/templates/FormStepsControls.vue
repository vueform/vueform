<script>
  import FormStepsControls from './../../blank/templates/FormStepsControls.vue'

  export default {
    name: 'FormStepsControls',
    render: FormStepsControls.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-steps-controls',
          container_sm: 'vf-steps-controls-sm',
          container_md: '',
          container_lg: 'vf-steps-controls-lg',
          $container: (classes, { Size }) => ([
            classes.container,
            classes[`container_${Size}`],
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-steps-controls {
    display: flex;
    justify-content: space-between;
    margin: var(--vf-gutter-lg) 0 0 0;
    font-size: var(--vf-font-size);
    line-height: var(--vf-line-height);
    letter-spacing: var(--vf-letter-spacing);

    &.vf-steps-controls-sm {
      margin: var(--vf-gutter) 0 0 0;
      font-size: var(--vf-font-size-sm);
      line-height: var(--vf-line-height-sm);
      letter-spacing: var(--vf-letter-spacing-md);
    }

    &.vf-steps-controls-lg {
      margin: var(--vf-gutter-lg) 0 0 0;
      font-size: var(--vf-font-size-lg);
      line-height: var(--vf-line-height-lg);
      letter-spacing: var(--vf-letter-spacing-lg);
    }
  }
</style>