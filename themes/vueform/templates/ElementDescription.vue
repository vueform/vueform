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
          container_sm: 'vf-description-sm',
          container_md: '',
          container_lg: 'vf-description-lg',
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

    &.vf-description-sm {
      font-size: var(--vf-element-text-font-size-sm);
      line-height: var(--vf-element-text-line-height-sm);
      margin-top: 0.125rem;
    }

    &.vf-description-lg {
      font-size: var(--vf-element-text-font-size-lg);
      line-height: var(--vf-element-text-line-height-lg);
    }
  }
</style>