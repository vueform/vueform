<script>
  import FormSteps from './../../blank/templates/FormSteps.vue'

  export default {
    name: 'FormSteps',
    render: FormSteps.render,
    data() {
      return {
        defaultClasses: {
          container: 'vf-steps',
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-steps {
    list-style: none;
    margin-bottom: calc(var(--vf-gutter) * 1);
    padding: 0;
    display: flex;
    justify-content: space-between;
    overflow-x: auto;
    padding-top: 1.25rem;
  }
</style>