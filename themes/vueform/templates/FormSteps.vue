<script>
  import FormSteps from './../../blank/templates/FormSteps.vue'

  export default {
    name: 'FormSteps',
    render: FormSteps.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-steps',
          container_sm: 'vf-steps-sm',
          container_md: '',
          container_lg: 'vf-steps-lg',
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
  .vf-steps {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-between;
    overflow-x: auto;
    padding-top: 1.25rem;
    margin: 0 0 var(--vf-gutter-lg) 0;
    font-size: var(--vf-font-size);
    line-height: var(--vf-line-height);
    letter-spacing: var(--vf-letter-spacing);

    &.vf-steps-sm {
      margin: 0 0 var(--vf-gutter) 0;
      font-size: var(--vf-font-size-sm);
      line-height: var(--vf-line-height-sm);
      letter-spacing: var(--vf-letter-spacing-sm);
    }

    &.vf-steps-lg {
      margin: 0 0 var(--vf-gutter-lg) 0;
      font-size: var(--vf-font-size-lg);
      line-height: var(--vf-line-height-lg);
      letter-spacing: var(--vf-letter-spacing-lg);
    }
  }
</style>