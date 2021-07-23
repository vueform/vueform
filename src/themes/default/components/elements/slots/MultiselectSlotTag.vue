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
    background: var(--ms-tag-bg, var(--form-primary));
    color: var(--ms-tag-color, #FFFFFF);
    font-size: var(--ms-tag-font-size, 0.875rem);
    line-height: var(--ms-tag-line-height, 1.25rem);
    font-weight: var(--ms-tag-font-weight, 600);
    padding: var(--ms-tag-py, 0.0625rem) 0 var(--ms-tag-py, 0.0625rem) var(--ms-tag-px, 0.5rem);
    border-radius: var(--ms-tag-radius, var(--form-border-radius));
    margin-right: var(--ms-tag-mx, 0.25rem);
    margin-bottom: var(--ms-tag-my, 0.25rem);
    display: flex;
    align-items: center;
    white-space: nowrap;

    &.is-disabled {
      padding-right: var(--ms-tag-px, 0.5rem);
      background: var(--ms-tag-bg-disabled, var(--form-bg-disabled-darker));
      color: var(--ms-tag-color-disabled, #FFFFFF);
    }
  }

  .multiselect-tag-remove {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--ms-tag-remove-py, 0.25rem) var(--ms-tag-remove-px, 0.25rem);
    margin: var(--ms-tag-remove-my, 0rem) var(--ms-tag-remove-mx, 0.125rem);
    border-radius: var(--ms-tag-remove-radius, var(--form-border-radius));
    
    &:hover {
      background: #00000010;
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