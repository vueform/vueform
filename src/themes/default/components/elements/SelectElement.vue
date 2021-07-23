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
          inputWrapper: 'form-native-select-wrapper',
          inputPlaceholder: 'form-native-select-placeholder',
          select: {},
        }
      }
    }
  }
</script>

<style lang="scss">
  .form-native-select-wrapper {
    position: relative;

    &:before {
      content: "";
      mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'%3e%3c/path%3e%3c/svg%3e");
      mask-position: center center;
      mask-repeat: no-repeat;
      mask-size: 0.625rem;
      background-color: var(--form-gray-500);
      position: absolute;
      right: 0;
      top: 0;
      width: var(--form-input-min-height);
      height: var(--form-input-min-height);
      display: inline-block;
      pointer-events: none;
    }
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
    border: var(--form-select-border-width) solid var(--form-select-border-color);
    border-radius: var(--form-select-radius);
    background: var(--form-select-bg);
    font-size: var(--form-select-font-size);
    min-height: var(--form-input-min-height);

    &.is-open {
      border-radius: var(--form-select-radius) var(--form-select-radius) 0 0;
    }

    &.is-open-top {
      border-radius: 0 0 var(--form-select-radius) var(--form-select-radius);
    }

    &.is-disabled {
      cursor: default;
      background: var(--form-select-bg-disabled);
      color: var(--form-color-disabled);
    }

    &.is-active {
      box-shadow: 0 0 0 var(--form-select-ring-width) var(--form-select-ring-color);
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
    line-height: var(--form-select-line-height);
    padding-left: var(--form-select-px);
  }

  .multiselect-placeholder {
    color: var(--form-select-placeholder-color);
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
    background: var(--form-select-bg);
    border-radius: var(--form-select-radius);
    padding-left: var(--form-select-px);
  }

  .multiselect-tags {
    flex-grow: 1;
    flex-shrink: 1;
    display: flex;
    flex-wrap: wrap;
    margin: var(--form-select-tag-my) 0 0;
    padding-left: var(--form-select-py);
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
    margin: 0 var(--form-select-tag-mx) var(--form-select-tag-my);
    box-sizing: border-box;
    flex-grow: 1;
    flex-shrink: 1;
  }

  .multiselect-spinner {
    mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'%3E%3C/path%3E%3C/svg%3E");
    mask-position: center;
    mask-repeat: no-repeat;
    background-color: var(--form-primary);
    width: 1rem;
    height: 1rem;
    z-index: 10;
    margin: 0 var(--form-select-px) 0 0;
    animation: multiselect-spin 1s linear infinite;
    flex-shrink: 0;
    flex-grow: 0;
  }

  .multiselect-clear {
    padding: 0 var(--form-select-px) 0 0px;
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
    mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
    mask-position: center;
    mask-repeat: no-repeat;
    background-color: currentColor;
    width: 0.625rem;
    height: 1.125rem;
    display: inline-block;
  }

  .multiselect-caret {
    transform: rotate(0deg);
    transition: .3s transform;
    mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'%3E%3C/path%3E%3C/svg%3E");
    mask-position: center;
    mask-repeat: no-repeat;
    background-color: var(--form-gray-500);
    width: 0.625rem;
    height: 1.125rem;
    margin: 0 var(--form-select-px) 0 0;
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
    left: calc(var(--form-select-border-width) * -1);
    right: calc(var(--form-select-border-width) * -1);
    bottom: 0;
    transform: translateY(100%);
    border: var(--form-select-dropdown-border-width) solid var(--form-select-dropdown-border-color);
    margin-top: calc(var(--form-select-border-width) * -1);
    max-height: 10rem;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    z-index: 100;
    background: var(--form-select-dropdown-bg);
    display: flex;
    flex-direction: column;
    border-radius: 0 0 var(--form-select-dropdown-radius) var(--form-select-dropdown-radius);

    &.is-top {
      transform: translateY(-100%);
      top: var(--form-select-border-width);
      bottom: auto;
      flex-direction: column-reverse;
      border-radius: var(--form-select-dropdown-radius) var(--form-select-dropdown-radius) 0 0;
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
    font-size: var(--form-select-option-font-size);
    line-height: var(--form-select-option-line-height);
    padding: var(--form-select-option-py) var(--form-select-option-px);

    &.is-pointed {
      background: var(--form-select-option-bg-pointed);
      color: var(--form-select-option-color-pointed);
    }

    &.is-disabled {
      background: var(--form-select-option-bg-disabled);
      color: var(--form-select-option-color-disabled);
      cursor: not-allowed;
    }

    &.is-selected {
      background: var(--form-select-option-bg-selected);
      color: var(--form-select-option-color-selected);
    }

    &.is-selected.is-pointed {
      background: var(--form-select-option-bg-selected-pointed);
      color: var(--form-select-option-color-selected-pointed);
      opacity: var(--form-select-option-opacity-selected-pointed);
    }

    &.is-selected.is-disabled {
      background: var(--form-select-option-bg-selected-disabled);
      color: var(--form-select-option-color-selected-disabled);
      opacity: var(--form-select-option-opacity-selected-disabled);
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