<script>
  import ElementDescription from './../../blank/components/ElementDescription'

  export default {
    name: 'ElementDescription',
    render: ElementDescription.render,
    data() {
      return {
        defaultClasses: {
          container: 'vf-description',
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