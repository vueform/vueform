<script>
  import FormSteps from './../../blank/templates/FormSteps.vue'

  export default {
    name: 'FormSteps',
    render: FormSteps.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-steps-container',
          container_sm: 'vf-steps-container-sm',
          container_md: '',
          container_lg: 'vf-steps-container-lg',
          wrapper: 'vf-steps-wrapper',
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
  .vf-steps-container {
    width: 100%;
    position: relative;
    margin: 0 0 var(--vf-gutter-lg) 0;
    font-size: var(--vf-font-size);
    line-height: var(--vf-line-height);
    letter-spacing: var(--vf-letter-spacing);

    &:before {
      content: " ";
      display: inline-block;
      background: var(--vf-bg-passive);
      position: absolute;
      top: 0.375rem;
      left: 0.125rem;
      right: 0.125rem;
      height: 0.25rem;
    }

    &.vf-steps-container-sm {
      margin: 0 0 var(--vf-gutter) 0;
      font-size: var(--vf-font-size-sm);
      line-height: var(--vf-line-height-sm);
      letter-spacing: var(--vf-letter-spacing-sm);
    }

    &.vf-steps-container-lg {
      margin: 0 0 var(--vf-gutter-lg) 0;
      font-size: var(--vf-font-size-lg);
      line-height: var(--vf-line-height-lg);
      letter-spacing: var(--vf-letter-spacing-lg);
    }
  }

  .vf-steps-wrapper {
    list-style: none;
    display: flex;
    justify-content: space-between;
    padding: 0;
    overflow-x: auto;
  }
</style>