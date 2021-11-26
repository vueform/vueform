<script>
  import StaticElement from './../../../blank/templates/elements/StaticElement.vue'

  export default {
    name: 'StaticElement',
    render: StaticElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          content: 'vf-static-element-content',
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-static-element-content {
    padding-top: calc(var(--vf-input-py) + var(--vf-border-width));
  }
</style>