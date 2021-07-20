<script>
  import ElementDescription from './../../blank/components/ElementDescription'

  export default {
    name: 'ElementDescription',
    render: ElementDescription.render,
    data() {
      return {
        defaultClasses: {
          container: 'form-description',
        }
      }
    }
  }
</script>

<style lang="scss">
  .form-description {
    font-size: var(--form-element-text-font-size);
    line-height: var(--form-element-text-line-height);
    color: var(--form-element-description-color);
    margin-top: 0.25rem;
  }
</style>