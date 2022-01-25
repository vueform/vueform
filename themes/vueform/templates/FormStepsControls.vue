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
          container_sm: '',
          container_md: '',
          container_lg: '',
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
    margin-top: var(--vf-gutter);
  }
</style>