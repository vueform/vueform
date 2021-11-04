<script>
  import FormElements from './../../blank/templates/FormElements.vue'

  export default {
    name: 'FormElements',
    render: FormElements.render,
    data() {
      return {
        defaultClasses: {
          container: 'vf-row',
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in Vueform.vue
</style>