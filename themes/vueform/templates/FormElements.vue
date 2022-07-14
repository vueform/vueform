<script>
  import FormElements from './../../blank/templates/FormElements.vue'

  export default {
    name: 'FormElements',
    render: FormElements.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-row',
          container_sm: 'vf-row-sm',
          container_md: '',
          container_lg: 'vf-row-lg',
          $container: (classes, { Size }) => ([
            classes.container,
            classes[`container_${Size}`]
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in Vueform.vue
</style>