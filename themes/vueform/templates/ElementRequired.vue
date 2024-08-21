<script>
  import ElementRequired from './../../blank/templates/ElementRequired.vue'

  export default {
    name: 'ElementRequired',
    render: ElementRequired.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-element-required',
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-element-required {
  }
</style>