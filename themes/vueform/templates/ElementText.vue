<script>
  import ElementText from './../../blank/templates/ElementText.vue'

  export default {
    name: 'ElementText',
    render: ElementText.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          container_before: '',
          container_between: '',
          container_after: '',
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
</style>