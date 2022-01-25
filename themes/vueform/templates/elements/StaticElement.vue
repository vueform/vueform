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
          content: 'vf-static-element-content',
          content_sm: '',
          content_md: '',
          content_lg: '',
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
  .vf-static-element-content {
    padding-top: calc(var(--vf-input-py) + var(--vf-border-width));
  }
</style>