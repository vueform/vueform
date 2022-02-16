<script>
  import FormElements from './../../blank/templates/FormElements.vue'

  export default {
    name: 'FormElements',
    render: FormElements.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-row vf-rowset',
          container_sm: 'vf-row-sm vf-rowset-sm',
          container_md: '',
          container_lg: 'vf-row-lg vf-rowset-lg',
          $container: (classes, { type }) => ([
            classes.container,
            classes[`container_${type}`]
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in Vueform.vue
</style>