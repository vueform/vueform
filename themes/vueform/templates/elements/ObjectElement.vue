<script>
  import ObjectElement from './../../../blank/templates/elements/ObjectElement.vue'

  export default {
    name: 'ObjectElement',
    render: ObjectElement.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: 'vf-row',
          wrapper_sm: 'vf-row-sm',
          wrapper_md: '',
          wrapper_lg: 'vf-row-lg',
          wrapper_embed: 'vf-row-embed',
          $wrapper: (classes, { Size, embed }) => ([
            classes.wrapper,
            classes[`wrapper_${Size}`],
            embed ? classes.wrapper_embed : null,
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
  /* Some styles are contained in Vueform.vue */
</style>