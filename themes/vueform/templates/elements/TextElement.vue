<script>
  import TextElement from './../../../blank/templates/elements/TextElement.vue'

  export default {
    name: 'TextElement',
    render: TextElement.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          inputContainer: 'vf-input-group',
          input: (el$) => ([
            'vf-input',
            { 'vf-input-enabled': !el$.isDisabled },
            { 'vf-input-disabled': el$.isDisabled },
          ])
        }
      }
    },
  }
</script>

<style lang="scss">
  // Some styles are contained in Vueform.vue
</style>