<script>
  import FormLanguages from './../../blank/templates/FormLanguages.vue'

  export default {
    name: 'FormLanguages',
    render: FormLanguages.render,
    data() {
      return {
        defaultClasses: {
          container: 'vf-languages',
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-languages {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    margin: 0 0 calc(var(--vf-gutter) * 2) 0;
  }
</style>