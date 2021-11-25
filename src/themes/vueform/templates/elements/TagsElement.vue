<script>
  import TagsElement from './../../../blank/templates/elements/TagsElement.vue'
  import Multiselect from '@vueform/multiselect/src/Multiselect.vue'

  export default {
    name: 'TagsElement',
    render: TagsElement.render,
    components: {
      Multiselect,
    },
    data() {
      return {
        defaultClasses: {
          container: '',
          select: {},
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in SelectElement.vue

  .multiselect-tags {
    flex-grow: 1;
    flex-shrink: 1;
    display: flex;
    flex-wrap: wrap;
    margin: var(--vf-select-tag-my) 0 0;
    padding-left: var(--vf-select-py);
    align-items: center;
  }

  .multiselect-tag {
    background: var(--vf-select-tag-bg);
    color: var(--vf-select-tag-color);
    font-size: var(--vf-select-tag-font-size);
    line-height: var(--vf-select-tag-line-height);
    font-weight: var(--vf-select-tag-font-weight);
    padding: var(--vf-select-tag-py) 0 var(--vf-select-tag-py) var(--vf-select-tag-px);
    border-radius: var(--vf-select-tag-radius);
    margin-right: var(--vf-select-tag-mx);
    margin-bottom: var(--vf-select-tag-my);
    display: flex;
    align-items: center;
    white-space: nowrap;

    &.is-disabled {
      padding-right: var(--vf-select-tag-px);
      background: var(--vf-select-tag-bg-disabled);
      color: var(--vf-select-tag-color-disabled);
    }
  }

  .multiselect-tag-remove {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--vf-select-tag-remove-pyx) var(--vf-select-tag-remove-pxx);
    margin: var(--vf-select-tag-remove-my) var(--vf-select-tag-remove-mx);
    border-radius: var(--vf-select-tag-remove-radius);
    
    &:hover {
      background: #00000010;
    }
  }

  .multiselect-tag-remove-icon {
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
            mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
    -webkit-mask-position: center;
            mask-position: center;
    -webkit-mask-repeat: no-repeat;
            mask-repeat: no-repeat;
    -webkit-mask-size: contain;
            mask-size: contain;
    background-color: currentColor;
    opacity: 0.8;
    display: inline-block;
    width: 0.75rem;
    height: 0.75rem;
  }

  .multiselect-tags-search-wrapper {
    display: inline-block;
    position: relative;
    margin: 0 var(--vf-select-tag-mx) var(--vf-select-tag-my);
    flex-grow: 1;
    flex-shrink: 1;
    height: 100%;
  }

  .multiselect-tags-search-copy {
    visibility: hidden;
    white-space: pre-wrap;
    display: inline-block;
    height: 1px;
    width: 100%;
  }

  .multiselect-tags-search {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border: 0;
    appearance: none;
    outline: none;
    padding: 0;
    font-size: inherit;
    font-family: inherit;
    box-sizing: border-box;
    width: 100%;
    appearance: none;

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      -webkit-appearance:none;
    }
  }
</style>