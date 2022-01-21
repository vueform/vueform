<script>
  import SelectElement from './../../../blank/templates/elements/SelectElement.vue'
  import Multiselect from '@vueform/multiselect/src/Multiselect.vue'

  export default {
    name: 'SelectElement',
    render: SelectElement.render,
    components: {
      Multiselect: Multiselect,
    },
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          input: 'vf-input vf-native-select',
          input_enabled: '',
          input_disabled: '',
          inputWrapper: 'vf-native-select-wrapper',
          inputPlaceholder: 'vf-native-select-placeholder',
          select: {},
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-native-select-wrapper {
    position: relative;

    &:before {
      content: "";
      mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'%3e%3c/path%3e%3c/svg%3e");
      mask-position: center center;
      mask-repeat: no-repeat;
      mask-size: 0.625rem;
      background-color: var(--vf-gray-500);
      position: absolute;
      right: 0;
      top: 0;
      width: var(--vf-input-min-height);
      height: var(--vf-input-min-height);
      display: inline-block;
      pointer-events: none;
    }
  }

  .vf-native-select-placeholder {
    position: absolute;
    top: var(--vf-input-py);
    left: var(--vf-input-px);
    margin-left: 1px;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    color: var(--vf-placeholder-color);
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
    border: var(--vf-select-border-width) solid var(--vf-select-border-color);
    border-radius: var(--vf-select-radius);
    background: var(--vf-select-bg);
    font-size: var(--vf-select-font-size);
    min-height: var(--vf-input-min-height);

    &.is-open {
      border-radius: var(--vf-select-radius) var(--vf-select-radius) 0 0;
    }

    &.is-open-top {
      border-radius: 0 0 var(--vf-select-radius) var(--vf-select-radius);
    }

    &.is-disabled {
      cursor: default;
      background: var(--vf-select-bg-disabled);
    }

    &.is-active {
      box-shadow: 0 0 0 var(--vf-select-ring-width) var(--vf-select-ring-color);
    }
  }

  .multiselect-single-label,
  .multiselect-placeholder {
    display: flex;
    align-items: center;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    background: transparent;
    line-height: var(--vf-select-line-height);
    padding-left: var(--vf-select-px);
    padding-right: calc(1.25rem + var(--vf-select-px) * 3);
    box-sizing: border-box;
    max-width: 100%;
  }

  .multiselect-placeholder {
    color: var(--vf-select-placeholder-color);
  }

  .multiselect-single-label-text {
    overflow: hidden;
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 100%;
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
    background: var(--vf-select-bg);
    border-radius: var(--vf-select-radius);
    padding-left: var(--vf-select-px);

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      -webkit-appearance:none;
    }
  }

  .multiselect-spinner {
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'%3E%3C/path%3E%3C/svg%3E");
            mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'%3E%3C/path%3E%3C/svg%3E");
    -webkit-mask-position: center;
            mask-position: center;
    -webkit-mask-repeat: no-repeat;
            mask-repeat: no-repeat;
    -webkit-mask-size: contain;
            mask-size: contain;
    background-color: var(--vf-primary);
    width: 1rem;
    height: 1rem;
    z-index: 10;
    margin: 0 var(--vf-select-px) 0 0;
    animation: multiselect-spin 1s linear infinite;
    flex-shrink: 0;
    flex-grow: 0;
  }

  .multiselect-clear {
    padding: 0 var(--vf-select-px) 0 0px;
    position: relative;
    z-index: 10;
    opacity: 1;
    transition: .3s;
    flex-shrink: 0;
    flex-grow: 0;
    display: flex;

    &:hover .multiselect-clear-icon {
      background-color: var(--vf-select-clear-color-hover);
    }
  }

  .multiselect-clear-icon {
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
            mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
    -webkit-mask-position: center;
            mask-position: center;
    -webkit-mask-repeat: no-repeat;
            mask-repeat: no-repeat;
    -webkit-mask-size: contain;
            mask-size: contain;
    background-color: var(--vf-select-clear-color);
    width: 0.625rem;
    height: 1.125rem;
    display: inline-block;
    transition: .3s;
  }

  .multiselect-caret {
    transform: rotate(0deg);
    transition: .3s transform;
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'%3E%3C/path%3E%3C/svg%3E");
            mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'%3E%3C/path%3E%3C/svg%3E");
    -webkit-mask-position: center;
            mask-position: center;
    -webkit-mask-repeat: no-repeat;
            mask-repeat: no-repeat;
    -webkit-mask-size: contain;
            mask-size: contain;
    background-color: var(--vf-select-caret-color);
    width: 0.625rem;
    height: 1.125rem;
    margin: 0 var(--vf-select-px) 0 0;
    position: relative;
    z-index: 10;
    flex-shrink: 0;
    flex-grow: 0;
    pointer-events: none;

    &.is-open {
      transform: rotate(180deg);
      pointer-events: auto;
    }
  }

  .multiselect-dropdown {
    position: absolute;
    left: calc(var(--vf-select-border-width) * -1);
    right: calc(var(--vf-select-border-width) * -1);
    bottom: 0;
    transform: translateY(100%);
    border: var(--vf-select-dropdown-border-width) solid var(--vf-select-dropdown-border-color);
    margin-top: calc(var(--vf-select-border-width) * -1);
    max-height: 15rem;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    z-index: 100;
    background: var(--vf-select-dropdown-bg);
    display: flex;
    flex-direction: column;
    border-radius: 0 0 var(--vf-select-dropdown-radius) var(--vf-select-dropdown-radius);
    outline: none;

    &.is-top {
      transform: translateY(-100%);
      top: var(--vf-select-border-width);
      bottom: auto;
      flex-direction: column-reverse;
      border-radius: var(--vf-select-dropdown-radius) var(--vf-select-dropdown-radius) 0 0;
    }

    &.is-hidden {
      display: none;
    }
  }

  .multiselect-options {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    max-height: var(--vf-select-max-height);

    &.is-top {
      flex-direction: column-reverse;
    }
  }

  .multiselect-group {
    padding: 0;
    margin: 0;

    @apply p-0 m-0;
  }

  .multiselect-group-label {
    padding: var(--vf-select-group-label-py) var(--vf-select-group-label-px);
    font-size: 0.875rem;
    font-weight: 600;
    background: #E5E7EB;
    color: #374151;
    cursor: default;
    line-height: var(--vf-select-group-label-line-height);
    display: flex;
    box-sizing: border-box;
    text-decoration: none;
    align-items: center;
    justify-content: flex-start;
    text-align: left;

    &.is-pointable {
      cursor: pointer;
    }

    &.is-pointed {
      background: var(--vf-select-group-label-bg-pointed);
      color: var(--vf-select-group-label-color-pointed);
    }

    &.is-selected {
      background: var(--vf-select-group-label-bg-selected);
      color: var(--vf-select-group-label-color-selected);
    }

    &.is-disabled {
      background: var(--vf-select-group-label-bg-disabled);
      color: var(--vf-select-group-label-color-disabled);
      cursor: not-allowed;
    }

    &.is-selected.is-pointed {
      background: var(--vf-select-group-label-bg-selected-pointed);
      color: var(--vf-select-group-label-color-selected-pointed);
      opacity: var(--vf-select-group-label-opacity-selected-pointed);
    }

    &.is-selected.is-disabled {
      background: var(--vf-select-group-label-bg-selected-disabled);
      color: var(--vf-select-group-label-color-selected-disabled);
      opacity: var(--vf-select-group-label-opacity-selected-disabled);
    }
  }

  .multiselect-group-options {
    padding: 0;
    margin: 0;
  }

  .multiselect-option {
    padding: var(--vf-select-option-py) var(--vf-select-option-px);
    font-size: var(--vf-select-option-font-size);
    line-height: var(--vf-select-option-line-height);
    cursor: pointer;
    display: flex;
    box-sizing: border-box;
    text-decoration: none;
    align-items: center;
    justify-content: flex-start;
    text-align: left;

    &.is-pointed {
      background: var(--vf-select-option-bg-pointed);
      color: var(--vf-select-option-color-pointed);
    }

    &.is-selected {
      background: var(--vf-select-option-bg-selected);
      color: var(--vf-select-option-color-selected);
    }

    &.is-disabled {
      background: var(--vf-select-option-bg-disabled);
      color: var(--vf-select-option-color-disabled);
      cursor: not-allowed;
    }

    &.is-selected.is-pointed {
      background: var(--vf-select-option-bg-selected-pointed);
      color: var(--vf-select-option-color-selected-pointed);
      opacity: var(--vf-select-option-opacity-selected-pointed);
    }

    &.is-selected.is-disabled {
      background: var(--vf-select-option-bg-selected-disabled);
      color: var(--vf-select-option-color-selected-disabled);
      opacity: var(--vf-select-option-opacity-selected-disabled);
    }
  }

  .multiselect-no-options,
  .multiselect-no-results {
    padding: var(--vf-select-option-py) var(--vf-select-option-px);
    color: var(--vf-select-empty-color);
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