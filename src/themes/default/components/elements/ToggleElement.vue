<script>
  import ToggleElement from './../../../blank/components/elements/ToggleElement'
  import Toggle from '@vueform/toggle/src/Toggle'

  export default {
    name: 'ToggleElement',
    render: ToggleElement.render,
    components: {
      Toggle,
    },
    data() {
      return {
        defaultClasses: {
          container: '',
          wrapper: 'form-toggle-wrapper',
          toggle: {},
          text: 'form-toggle-text',
        }
      }
    }
  }
</script>

<style lang="scss">
  .form-toggle-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    padding-top: calc(var(--form-input-py) + var(--form-border-width));
  }

  .form-toggle-text {
    margin-left: 0.5rem;
  }

  // @vueform/toggle styles
  .toggle-container {
    display: inline-block;
    outline: none;
    border-radius: 9999px;

    &:focus {
      box-shadow: 0px 0px 0px var(--form-ring-width) var(--form-ring-color);
    }
  }

  .toggle {
    display: flex;
    width: var(--toggle-width, 3rem);
    height: var(--toggle-height, 1.25rem);
    border-radius: 999px;
    position: relative;
    cursor: pointer;
    transition: .3s all;
    align-items: center;
    box-sizing: content-box;
    border: var(--toggle-border, 0.125rem) solid;
    font-size: var(--toggle-font-size, 0.75rem);
    line-height: 1;
  }

  .toggle-on {
    background: var(--toggle-bg-on, var(--form-primary));
    border-color: var(--toggle-border-on, var(--form-primary));
    justify-content: flex-start;
    color: var(--toggle-text-on, #ffffff);
  }

  .toggle-off {
    background: var(--toggle-bg-off, #d1d5db);
    border-color: var(--toggle-border-off, #d1d5db);
    justify-content: flex-end;
    color: var(--toggle-text-off, #374151);
  }

  .toggle-on-disabled {
    background: var(--toggle-bg-on-disabled, var(--form-primary));
    border-color: var(--toggle-border-on-disabled, var(--form-primary));
    justify-content: flex-start;
    color: var(--toggle-text-on-disabled, #ffffff);
    cursor: not-allowed;
    opacity: var(--toggle-opacity-on-disabled, 0.5);
  }

  .toggle-off-disabled {
    background: var(--toggle-bg-off-disabled, #d1d5db);
    border-color: var(--toggle-border-off-disabled, #d1d5db);
    justify-content: flex-end;
    color: var(--toggle-text-off-disabled, #374151);
    cursor: not-allowed;
    opacity: var(--toggle-opacity-off-disabled, 0.5);
  }

  .toggle-handle {
    display: inline-block;
    background: var(--toggle-handle-enabled, #ffffff);
    width: 20px;
    height: 20px;
    top: 0;
    border-radius: 50%;
    position: absolute;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: var(--toggle-duration, 150ms);
  }

  .toggle-handle-on {
    left: 100%;
    transform: translateX(-100%);
  }

  .toggle-handle-off {
    left: 0%;
  }

  .toggle-handle-on-disabled {
    left: 100%;
    transform: translateX(-100%);
    background: var(--toggle-handle-disabled, #ffffff);
  }

  .toggle-handle-off-disabled {
    left: 0%;
    background: var(--toggle-handle-disabled, #ffffff);
  }

  .toggle-label {
    text-align: center;
    width: calc(var(--toggle-width, 3.25rem) - var(--toggle-height, 1.25rem));
    box-sizing: border-box;
    white-space: nowrap;
    user-select: none;
  }
</style>