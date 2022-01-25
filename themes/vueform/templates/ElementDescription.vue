<script>
  import ElementDescription from './../../blank/templates/ElementDescription.vue'

  export default {
    name: 'ElementDescription',
    render: ElementDescription.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-description',
          container_sm: '',
          container_md: '',
          container_lg: '',
          $container: (classes, { Size }) => ([
            classes.container,
            classes[`container_${Size}`],
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-description {
    font-size: var(--vf-element-text-font-size);
    line-height: var(--vf-element-text-line-height);
    color: var(--vf-element-description-color);
    margin-top: 0.25rem;
  }
</style>