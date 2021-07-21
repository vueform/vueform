<script>
  import FormLanguages from './../../blank/components/FormLanguages'

  export default {
    name: 'FormLanguages',
    render: FormLanguages.render,
    data() {
      return {
        defaultClasses: {
          container: 'form-languages',
        }
      }
    }
  }
</script>

<style lang="scss">
  .form-languages {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    margin: 0 0 calc(var(--form-gutter) * 2) 0;
  }
</style>