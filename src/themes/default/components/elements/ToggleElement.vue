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
          wrapper: 'vf-toggle-wrapper',
          toggle: {},
          text: 'vf-toggle-text',
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-toggle-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    padding-top: calc(var(--vf-input-py) + var(--vf-border-width));
  }

  .vf-toggle-text {
    margin-left: 0.5rem;
  }

  // @vueform/toggle styles
  .toggle-container {
    display: inline-block;
    outline: none;
    border-radius: 9999px;

    &:focus {
      box-shadow: 0px 0px 0px var(--vf-ring-width) var(--vf-ring-color);
    }
  }

  .toggle {
    display: flex;
    width: var(--vf-toggle-width);
    height: var(--vf-toggle-height);
    border-radius: 999px;
    position: relative;
    cursor: pointer;
    transition: .3s all;
    align-items: center;
    box-sizing: content-box;
    border: var(--vf-toggle-border) solid;
    font-size: var(--vf-toggle-font-size);
    line-height: 1;
  }

  .toggle-on {
    background: var(--vf-toggle-bg-on);
    border-color: var(--vf-toggle-border-on);
    justify-content: flex-start;
    color: var(--vf-toggle-text-on);
  }

  .toggle-off {
    background: var(--vf-toggle-bg-off);
    border-color: var(--vf-toggle-border-off);
    justify-content: flex-end;
    color: var(--vf-toggle-text-off);
  }

  .toggle-on-disabled {
    background: var(--vf-toggle-bg-on-disabled);
    border-color: var(--vf-toggle-border-on-disabled);
    justify-content: flex-start;
    color: var(--vf-toggle-text-on-disabled);
    cursor: not-allowed;
    opacity: var(--vf-toggle-opacity-on-disabled);
  }

  .toggle-off-disabled {
    background: var(--vf-toggle-bg-off-disabled);
    border-color: var(--vf-toggle-border-off-disabled);
    justify-content: flex-end;
    color: var(--vf-toggle-text-off-disabled);
    cursor: not-allowed;
    opacity: var(--vf-toggle-opacity-off-disabled);
  }

  .toggle-handle {
    display: inline-block;
    background: var(--vf-toggle-handle-enabled);
    width: 1.25rem;
    height: 1.25rem;
    top: 0;
    border-radius: 50%;
    position: absolute;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: var(--vf-toggle-duration);
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
    background: var(--vf-toggle-handle-disabled);
  }

  .toggle-handle-off-disabled {
    left: 0%;
    background: var(--vf-toggle-handle-disabled);
  }

  .toggle-label {
    text-align: center;
    width: calc(var(--vf-toggle-width) - var(--vf-toggle-height));
    box-sizing: border-box;
    white-space: nowrap;
    user-select: none;
  }
</style>