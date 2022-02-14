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
    font-size: var(--vf-font-size-small);
    line-height: var(--vf-line-height-small);
    letter-spacing: var(--vf-letter-spacing-small);
    color: var(--vf-color-muted);
    margin-top: 0.25rem;

    &.vf-description-sm {
      font-size: var(--vf-font-size-small-sm);
      line-height: var(--vf-line-height-small-sm);
      letter-spacing: var(--vf-letter-spacing-small-sm);
      margin-top: 0.125rem;
    }

    &.vf-description-lg {
      font-size: var(--vf-font-size-small-lg);
      line-height: var(--vf-line-height-small-lg);
      letter-spacing: var(--vf-letter-spacing-small-lg);
    }
  }
</style>