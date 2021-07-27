<script>
  import TTrixElement from './../../../blank/components/elements/TTrixElement'

  export default {
    name: 'TTrixElement',
    render: TTrixElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          input: 'vf-trix',
          input_enabled: '',
          input_disabled: 'is-disabled',
          input_focused: 'is-focused',
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in TrixElement.vue
</style>