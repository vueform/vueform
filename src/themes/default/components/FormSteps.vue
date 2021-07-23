<script>
  import FormSteps from './../../blank/components/FormSteps'

  export default {
    name: 'FormSteps',
    render: FormSteps.render,
    data() {
      return {
        defaultClasses: {
          container: 'form-steps',
        }
      }
    }
  }
</script>

<style lang="scss">
  .form-steps {
    list-style: none;
    margin-bottom: calc(var(--form-gutter) * 2);
    padding: 0;
    display: flex;
    justify-content: space-between;
    overflow-x: auto;
    padding-top: 1.25rem;
  }
</style>