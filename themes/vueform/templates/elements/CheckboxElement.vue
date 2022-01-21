<script>
  import CheckboxElement from './../../../blank/templates/elements/CheckboxElement.vue'

  export default {
    name: 'CheckboxElement',
    render: CheckboxElement.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: 'vf-checkbox-wrapper',
          input: 'vf-checkbox',
          input_enabled: '',
          input_disabled: '',
          text: 'vf-checkbox-text',
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in Vueform.vue
</style>