<script>
  import StaticElement from './../../../blank/templates/elements/StaticElement.vue'

  export default {
    name: 'StaticElement',
    render: StaticElement.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          content: 'vf-static',
          content_sm: 'vf-static-sm',
          content_md: '',
          content_lg: 'vf-static-lg',
          $content: (classes, { Size }) => ([
            classes.content,
            classes[`content_${Size}`],
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
</style>