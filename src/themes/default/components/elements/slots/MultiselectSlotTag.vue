<script>
  import MultiselectSlotTag from './../../../../blank/components/elements/slots/MultiselectSlotTag'

  export default {
    name: 'MultiselectSlotTag',
    render: MultiselectSlotTag.render,
    data() {
      return {
        defaultClasses: {
          container: 'multiselect-tag',
          container_disabled: 'is-disabled',
          remove: 'multiselect-tag-remove',
          removeIcon: 'multiselect-tag-remove-icon',
        }
      }
    }
  }
</script>

<style lang="scss">
  .multiselect-tag {
    background: var(--form-select-tag-bg);
    color: var(--form-select-tag-color);
    font-size: var(--form-select-tag-font-size);
    line-height: var(--form-select-tag-line-height);
    font-weight: var(--form-select-tag-font-weight);
    padding: var(--form-select-tag-py) 0 var(--form-select-tag-py) var(--form-select-tag-px);
    border-radius: var(--form-select-tag-radius);
    margin-right: var(--form-select-tag-mx);
    margin-bottom: var(--form-select-tag-my);
    display: flex;
    align-items: center;
    white-space: nowrap;

    &.is-disabled {
      padding-right: var(--form-select-tag-px);
      background: var(--form-select-tag-bg-disabled);
      color: var(--form-select-tag-color-disabled);
    }
  }

  .multiselect-tag-remove {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--form-select-tag-remove-py) var(--form-select-tag-remove-px);
    margin: var(--form-select-tag-remove-my) var(--form-select-tag-remove-mx);
    border-radius: var(--form-select-tag-remove-radius);
    
    &:hover {
      background: var(--form-select-tag-remove-bg-hover);
    }
  }

  .multiselect-tag-remove-icon {
    mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
    mask-position: center;
    mask-repeat: no-repeat;
    mask-size: contain;
    background-color: currentColor;
    display: inline-block;
    opacity: 0.7;
    width: 0.75rem;
    height: 0.75rem;
  }
</style>