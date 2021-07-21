<script>
  import SelectElement from './../../../blank/components/elements/SelectElement'
  import Multiselect from '@vueform/multiselect/src/Multiselect'

  export default {
    name: 'SelectElement',
    render: SelectElement.render,
    components: {
      Multiselect: Multiselect,
    },
    data() {
      return {
        defaultClasses: {
          container: '',
          input: 'form-input form-native-select',
          input_enabled: '',
          input_disabled: '',
          inputWrapper: '',
          inputPlaceholder: 'form-native-select-placeholder',
          select: {},
        }
      }
    }
  }
</script>

<style lang="scss">
  .form-native-select {
    position: relative;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 320 512' fill='%236b7280' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'%3e%3c/path%3e%3c/svg%3e");
    background-position: right var(--form-input-px) center;
    background-repeat: no-repeat;
    background-size: 10px;
    color-adjust: exact;
  }

  .form-native-select-placeholder {
    position: absolute;
    top: var(--form-input-py);
    left: var(--form-input-px);
    margin-left: 1px;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    color: var(--form-placeholder-color);
    cursor: default;
    pointer-events: none;
  }

  // @vueform/multiselect styles
  .multiselect {
    position: relative;
    margin: 0 auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    box-sizing: border-box;
    cursor: pointer;
    outline: none;
    border: var(--ms-border-width, var(--form-border-width)) solid var(--ms-border-color, var(--form-border-color));
    border-radius: var(--ms-radius, var(--form-border-radius));
    background: var(--ms-bg, #FFFFFF);
    font-size: var(--ms-font-size, inherit);
    min-height: var(--form-input-min-height);

    &.is-open {
      border-radius: var(--ms-radius, var(--form-border-radius)) var(--ms-radius, var(--form-border-radius)) 0 0;
    }

    &.is-open-top {
      border-radius: 0 0 var(--ms-radius, var(--form-border-radius)) var(--ms-radius, var(--form-border-radius));
    }

    &.is-disabled {
      cursor: default;
      background: var(--ms-bg-disabled, var(--form-bg-disabled));
      color: var(--form-color-disabled);
    }

    &.is-active {
      box-shadow: 0 0 0 var(--ms-ring-width, var(--form-ring-width)) var(--ms-ring-color, var(--form-ring-color));
    }
  }

  .multiselect-multiple-label,
  .multiselect-placeholder {
    display: flex;
    align-items: center;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    background: transparent;
    line-height: var(--ms-line-height, inherit);
    padding-left: var(--ms-px, var(--form-input-px));
  }

  .multiselect-placeholder {
    color: var(--ms-placeholder-color, var(--form-placeholder-color));
  }

  .multiselect-search {
    width: 100%;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    outline: none;
    box-sizing: border-box;
    border: 0;
    appearance: none;
    font-size: inherit;
    font-family: inherit;
    background: var(--ms-bg, #FFFFFF);
    border-radius: var(--ms-radius, var(--form-border-radius));
    padding-left: var(--ms-px, var(--form-input-px));
  }

  .multiselect-tags {
    flex-grow: 1;
    flex-shrink: 1;
    display: flex;
    flex-wrap: wrap;
    margin: var(--ms-tag-my, 0.25rem) 0 0;
    padding-left: var(--ms-py, var(--form-input-py));
    align-items: center;
  }

  .multiselect-tags-search {
    height: 100%;
    border: 0;
    appearance: none;
    outline: none;
    padding: 0;
    font-size: inherit;
    font-family: inherit;
    margin: 0 var(--ms-tag-mx, 4px) var(--ms-tag-my, 4px);
    box-sizing: border-box;
    flex-grow: 1;
    flex-shrink: 1;
  }

  .multiselect-spinner {
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='%2310B981' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'%3E%3C/path%3E%3C/svg%3E");
    background-position: center;
    background-repeat: no-repeat;
    width: 1rem;
    height: 1rem;
    z-index: 10;
    margin: 0 var(--ms-px, 0.875rem) 0 0;
    animation: multiselect-spin 1s linear infinite;
    flex-shrink: 0;
    flex-grow: 0;
  }

  .multiselect-clear {
    padding: 0 var(--ms-px, var(--form-input-px)) 0 0px;
    position: relative;
    z-index: 10;
    opacity: 0.4;
    transition: .3s;
    flex-shrink: 0;
    flex-grow: 0;
    display: flex;

    &:hover {
      opacity: 1;
    }
  }

  .multiselect-clear-icon {
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
    background-position: center;
    background-repeat: no-repeat;
    width: 0.625rem;
    height: 1.125rem;
    display: inline-block;
  }

  .multiselect-caret {
    transform: rotate(0deg);
    transition: .3s transform;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='%236b7280' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'%3E%3C/path%3E%3C/svg%3E");
    background-position: center;
    background-repeat: no-repeat;
    width: 0.625rem;
    height: 1.125rem;
    margin: 0 var(--ms-px, var(--form-input-px)) 0 0;
    position: relative;
    z-index: 10;
    flex-shrink: 0;
    flex-grow: 0;

    &.is-open {
      transform: rotate(180deg);
    }
  }

  .multiselect-dropdown {
    position: absolute;
    left: calc(var(--ms-border-width, var(--form-border-width)) * -1);
    right: calc(var(--ms-border-width, var(--form-border-width)) * -1);
    bottom: 0;
    transform: translateY(100%);
    border: var(--ms-dropdown-border-width, var(--form-border-width)) solid var(--ms-dropdown-border-color, var(--form-border-color));
    margin-top: calc(var(--ms-border-width, var(--form-border-width)) * -1);
    max-height: 10rem;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    z-index: 100;
    background: var(--ms-dropdown-bg, #FFFFFF);
    display: flex;
    flex-direction: column;
    border-radius: 0 0 var(--ms-dropdown-radius, var(--form-border-radiu)) var(--ms-dropdown-radius, var(--form-border-radiu));

    &.is-top {
      transform: translateY(-100%);
      top: var(--ms-border-width, 1px);
      bottom: auto;
      flex-direction: column-reverse;
      border-radius: var(--ms-dropdown-radius, var(--form-border-radiu)) var(--ms-dropdown-radius, var(--form-border-radiu)) 0 0;
    }
  }

  .multiselect-options {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: column;

    &.is-top {
      flex-direction: column-reverse;
    }
  }

  .multiselect-option {
    display: flex;
    box-sizing: border-box;
    text-decoration: none;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    cursor: pointer;
    font-size: var(--ms-option-font-size, inherit);
    line-height: var(--ms-option-line-height, inherit);
    padding: var(--ms-option-py, calc(var(--form-input-py) + var(--form-border-width))) var(--ms-option-px, var(--form-input-px));

    &.is-pointed {
      background: var(--ms-option-bg-pointed, #F3F4F6);
      color: var(--ms-option-color-pointed, #1F2937);
    }

    &.is-disabled {
      background: var(--ms-option-bg-disabled, #FFFFFF);
      color: var(--ms-option-color-disabled, #D1D5DB);
      cursor: not-allowed;
    }

    &.is-selected {
      background: var(--ms-option-bg-selected, var(--form-primary));
      color: var(--ms-option-color-selected, #FFFFFF);
    }

    &.is-selected.is-pointed {
      background: var(--ms-option-bg-selected-pointed, var(--form-primary-lighter));
      color: var(--ms-option-color-selected-pointed, #FFFFFF);
    }

    &.is-selected.is-disabled {
      background: var(--ms-option-bg-selected-disabled, var(--form-primary-light));
      color: var(--ms-option-color-selected-disabled, #D1FAE5);
    }
  }

  .multiselect-fake-input {
    background: transparent;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
    width: 100%;
    height: 1px;
    border: 0;
    padding: 0;
    font-size: 0;
    outline: none;

    &:active, &:focus {
      outline: none;
    }
  }

  .multiselect-spacer {
    display: none;
  }

  @keyframes multiselect-spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>