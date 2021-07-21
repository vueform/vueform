<script>
  import StaticElement from './../../../blank/components/elements/StaticElement'

  export default {
    name: 'StaticElement',
    render: StaticElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          content: 'form-static-element-content',
        }
      }
    }
  }
</script>

<style lang="scss">
  .form-static-element-content {
    padding-top: calc(var(--form-input-py) + var(--form-border-width));
  }
</style>