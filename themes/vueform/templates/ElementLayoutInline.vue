<script>
  import ElementLayoutInline from './../../blank/templates/ElementLayoutInline.vue'

  export default {
    name: 'ElementLayoutInline',
    render: ElementLayoutInline.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-inline-layout',
          container_error: 'has-error',
          $container: (classes, { el$ }) => ([
            classes.container,
            !el$.isStatic && el$.errors && !!el$.errors.length ? classes.container_error : null
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-inline-layout {
    display: flex;
  }
</style>