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
          input_sm: 'vf-input-sm',
          input_md: '',
          input_lg: 'vf-input-lg',
          inputWrapper: 'vf-native-select-wrapper',
          inputWrapper_sm: 'vf-native-select-wrapper-sm',
          inputWrapper_md: '',
          inputWrapper_lg: 'vf-native-select-wrapper-lg',
          inputPlaceholder: 'vf-native-select-placeholder',
          inputPlaceholder_sm: 'vf-native-select-placeholder-sm',
          inputPlaceholder_md: '',
          inputPlaceholder_lg: 'vf-native-select-placeholder-lg',
          select: {
            container: 'vf-multiselect',
            container_sm: 'vf-multiselect-sm',
            container_md: '',
            container_lg: 'vf-multiselect-lg',
            containerDisabled: 'vf-multiselect-disabled',
            containerOpen: 'vf-multiselect-open',
            containerOpenTop: 'vf-multiselect-open-top',
            containerActive: 'vf-multiselect-active',
            singleLabel: 'vf-multiselect-single-label',
            singleLabel_sm: 'vf-multiselect-single-label-sm',
            singleLabel_md: '',
            singleLabel_lg: 'vf-multiselect-single-label-lg',
            singleLabelText: 'vf-multiselect-single-label-text',
            search: 'vf-multiselect-search',
            search_sm: 'vf-multiselect-search-sm',
            search_md: '',
            search_lg: 'vf-multiselect-search-lg',
            placeholder: 'vf-multiselect-placeholder',
            placeholder_sm: 'vf-multiselect-placeholder-sm',
            placeholder_md: '',
            placeholder_lg: 'vf-multiselect-placeholder-lg',
            caret: 'vf-multiselect-caret',
            caret_sm: 'vf-multiselect-caret-sm',
            caret_md: '',
            caret_lg: 'vf-multiselect-caret-lg',
            caretOpen: 'vf-multiselect-caret-open',
            clear: 'vf-multiselect-clear',
            clear_sm: 'vf-multiselect-clear-sm',
            clear_md: '',
            clear_lg: 'vf-multiselect-clear-lg',
            clearIcon: 'vf-multiselect-clear-icon',
            spinner: 'vf-multiselect-spinner',
            spinner_sm: 'vf-multiselect-spinner-sm',
            spinner_md: '',
            spinner_lg: 'vf-multiselect-spinner-lg',
            dropdown: 'vf-multiselect-dropdown',
            dropdown_sm: 'vf-multiselect-dropdown-sm',
            dropdown_md: '',
            dropdown_lg: 'vf-multiselect-dropdown-lg',
            dropdownTop: 'vf-multiselect-dropdown-top',
            dropdownTop_sm: 'vf-multiselect-dropdown-top-sm',
            dropdownTop_md: '',
            dropdownTop_lg: 'vf-multiselect-dropdown-top-lg',
            dropdownHidden: 'vf-multiselect-dropdown-hidden',
            options: 'vf-multiselect-options',
            optionsTop: 'vf-multiselect-options-top',
            group: 'vf-multiselect-group',
            groupLabel: 'vf-multiselect-group-label',
            groupLabel_sm: 'vf-multiselect-group-label-sm',
            groupLabel_md: '',
            groupLabel_lg: 'vf-multiselect-group-label-lg',
            groupLabelPointable: 'vf-multiselect-group-label-pointable',
            groupLabelPointed: 'vf-multiselect-group-label-pointed',
            groupLabelSelected: 'vf-multiselect-group-label-selected',
            groupLabelDisabled: 'vf-multiselect-group-label-disabled',
            groupLabelSelectedPointed: 'vf-multiselect-group-label-selected vf-multiselect-group-label-pointed',
            groupLabelSelectedDisabled: 'vf-multiselect-group-label-selected vf-multiselect-group-label-disabled',
            groupOptions: 'vf-multiselect-group-options',
            option: 'vf-multiselect-option',
            option_sm: 'vf-multiselect-option-sm',
            option_md: '',
            option_lg: 'vf-multiselect-option-lg',
            optionPointed: 'vf-multiselect-option-pointed',
            optionSelected: 'vf-multiselect-option-selected',
            optionDisabled: 'vf-multiselect-option-disabled',
            optionSelectedPointed: 'vf-multiselect-option-selected vf-multiselect-option-pointed',
            optionSelectedDisabled: 'vf-multiselect-option-selected vf-multiselect-option-disabled',
            noOptions: 'vf-multiselect-no-options',
            noOptions_sm: 'vf-multiselect-no-options-sm',
            noOptions_md: '',
            noOptions_lg: 'vf-multiselect-no-options-lg',
            noResults: 'vf-multiselect-no-results',
            noResults_sm: 'vf-multiselect-no-results-sm',
            noResults_md: '',
            noResults_lg: 'vf-multiselect-no-results-lg',
            fakeInput: 'vf-multiselect-fake-input',
            spacer: 'vf-multiselect-spacer',
            spacer_sm: 'vf-multiselect-spacer-sm',
            spacer_md: '',
            spacer_lg: 'vf-multiselect-spacer-lg',
            $container: (classes, { Size }) => ([
              classes.select.container,
              classes.select[`container_${Size}`],
            ]),
            $search: (classes, { Size }) => ([
              classes.select.search,
              classes.select[`search_${Size}`],
            ]),
            $placeholder: (classes, { Size }) => ([
              classes.select.placeholder,
              classes.select[`placeholder_${Size}`],
            ]),
            $caret: (classes, { Size }) => ([
              classes.select.caret,
              classes.select[`caret_${Size}`],
            ]),
            $clear: (classes, { Size }) => ([
              classes.select.clear,
              classes.select[`clear_${Size}`],
            ]),
            $spinner: (classes, { Size }) => ([
              classes.select.spinner,
              classes.select[`spinner_${Size}`],
            ]),
            $dropdown: (classes, { Size }) => ([
              classes.select.dropdown,
              classes.select[`dropdown_${Size}`],
            ]),
            $dropdownTop: (classes, { Size }) => ([
              classes.select.dropdownTop,
              classes.select[`dropdownTop_${Size}`],
            ]),
            $groupLabel: (classes, { Size }) => ([
              classes.select.groupLabel,
              classes.select[`groupLabel_${Size}`],
            ]),
            $option: (classes, { Size }) => ([
              classes.select.option,
              classes.select[`option_${Size}`],
            ]),
            $spacer: (classes, { Size }) => ([
              classes.select.spacer,
              classes.select[`spacer_${Size}`],
            ]),
            $noOptions: (classes, { Size }) => ([
              classes.select.noOptions,
              classes.select[`noOptions_${Size}`],
            ]),
            $noResults: (classes, { Size }) => ([
              classes.select.noResults,
              classes.select[`noResults_${Size}`],
            ]),
            $singleLabel: (classes, { Size }) => ([
              classes.select.singleLabel,
              classes.select[`singleLabel_${Size}`],
            ]),
          },
          $input: (classes, { isDisabled, Size }) => ([
            classes.input,
            classes[`input_${Size}`],
            isDisabled ? classes.input_disabled : classes.input_enabled,
          ]),
          $inputWrapper: (classes, { Size }) => ([
            classes.inputWrapper,
            classes[`inputWrapper_${Size}`],
          ]),
          $inputPlaceholder: (classes, { Size }) => ([
            classes.inputPlaceholder,
            classes[`inputPlaceholder_${Size}`],
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-native-select {
    appearance: none;
    
    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      -webkit-appearance: none;
    }
  }

  .vf-native-select-wrapper {
    position: relative;

    // It's here because select won't display :before
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

    &.vf-native-select-wrapper-sm {
      &:before {
        width: var(--vf-input-min-height-sm);
        height: var(--vf-input-min-height-sm);
      }
    }

    &.vf-native-select-wrapper-lg {
      &:before {
        width: var(--vf-input-min-height-lg);
        height: var(--vf-input-min-height-lg);
      }
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

    &.vf-native-select-placeholder-sm {
      top: var(--vf-input-py-sm);
      left: var(--vf-input-px-sm);
    }

    &.vf-native-select-placeholder-lg {
      top: var(--vf-input-py-lg);
      left: var(--vf-input-px-lg);
    }
  }
  
  // @vueform/multiselect styles
  .vf-multiselect {
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
    background: var(--vf-select-bg);
    border-radius: var(--vf-select-radius);
    min-height: var(--vf-input-min-height);

    &.vf-multiselect-open {
      border-radius: var(--vf-select-radius) var(--vf-select-radius) 0 0;
    }

    &.vf-multiselect-open-top {
      border-radius: 0 0 var(--vf-select-radius) var(--vf-select-radius);
    }

    &.vf-multiselect-disabled {
      cursor: default;
      background: var(--vf-select-bg-disabled);
    }

    &.vf-multiselect-active {
      box-shadow: 0 0 0 var(--vf-select-ring-width) var(--vf-select-ring-color);
    }

    &.vf-multiselect-sm {
      min-height: var(--vf-input-min-height-sm);
      border-radius: var(--vf-select-radius-sm);
    }

    &.vf-multiselect-lg {
      min-height: var(--vf-input-min-height-lg);
      border-radius: var(--vf-select-radius-lg);
    }
  }

  .vf-multiselect-single-label,
  .vf-multiselect-placeholder {
    display: flex;
    align-items: center;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    background: transparent;
    box-sizing: border-box;
    max-width: 100%;
    padding-left: var(--vf-select-px);
    padding-right: calc(1.25rem + var(--vf-select-px) * 3);
  }

  .vf-multiselect-single-label {
    &.vf-multiselect-single-label-sm {
      padding-left: var(--vf-select-px-sm);
      padding-right: calc(1rem + var(--vf-select-px-sm) * 3);
    }
    &.vf-multiselect-single-label-lg {
      padding-left: var(--vf-select-px-lg);
      padding-right: calc(1.5rem + var(--vf-select-px-lg) * 3);
    }
  }

  .vf-floating-wrapper ~ .vf-multiselect-single-label-lg,
  .vf-floating-wrapper ~ div .vf-multiselect-single-label-lg,
  .vf-floating-wrapper ~ span .vf-multiselect-single-label-lg {
    padding: calc(var(--vf-input-py-lg) + var(--vf-font-size-lg) * 0.35) var(--vf-input-px-lg) calc(var(--vf-input-py-lg) - var(--vf-font-size-lg) * 0.35);
  }

  .vf-multiselect-placeholder {
    color: var(--vf-select-placeholder-color);

    &.vf-multiselect-placeholder-sm {
      padding-left: var(--vf-select-px-sm);
      padding-right: calc(1rem + var(--vf-select-px-sm) * 3);
    }
    &.vf-multiselect-placeholder-lg {
      padding-left: var(--vf-select-px-lg);
      padding-right: calc(1.5rem + var(--vf-select-px-lg) * 3);
    }
  }

  .vf-multiselect-single-label-text {
    overflow: hidden;
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  .vf-multiselect-search {
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

    &.vf-multiselect-search-sm {
      border-radius: var(--vf-select-radius-sm);
      padding-left: var(--vf-select-px-sm);
    }

    &.vf-multiselect-search-lg {
      border-radius: var(--vf-select-radius-lg);
      padding-left: var(--vf-select-px-lg);
    }
  }

  .vf-floating-wrapper ~ .vf-multiselect-search-lg,
  .vf-floating-wrapper ~ div .vf-multiselect-search-lg,
  .vf-floating-wrapper ~ span .vf-multiselect-search-lg {
    padding: calc(var(--vf-input-py-lg) + var(--vf-font-size-lg) * 0.35) var(--vf-input-px-lg) calc(var(--vf-input-py-lg) - var(--vf-font-size-lg) * 0.35);
  }


  .vf-multiselect-spinner {
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

    &.vf-multiselect-spinner-sm {
      margin: 0 var(--vf-select-px-sm) 0 0;
    }

    &.vf-multiselect-spinner-lg {
      margin: 0 var(--vf-select-px-lg) 0 0;
    }
  }

  .vf-multiselect-clear {
    padding: 0 var(--vf-select-px) 0 0px;
    position: relative;
    z-index: 10;
    opacity: 1;
    transition: .3s;
    flex-shrink: 0;
    flex-grow: 0;
    display: flex;

    &:hover .vf-multiselect-clear-icon {
      background-color: var(--vf-select-clear-color-hover);
    }

    &.vf-multiselect-clear-sm {
      padding: 0 var(--vf-select-px-sm) 0 0px;
    }

    &.vf-multiselect-clear-lg {
      padding: 0 var(--vf-select-px-lg) 0 0px;
    }
  }

  .vf-multiselect-clear-icon {
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

  .vf-multiselect-caret {
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

    &.vf-multiselect-caret-open {
      transform: rotate(180deg);
      pointer-events: auto;
    }

    &.vf-multiselect-caret-sm {
      margin: 0 var(--vf-select-px-sm) 0 0;
    }

    &.vf-multiselect-caret-lg {
      margin: 0 var(--vf-select-px-lg) 0 0;
    }
  }

  .vf-multiselect-dropdown {
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

    &.vf-multiselect-dropdown-top {
      transform: translateY(-100%);
      top: var(--vf-select-border-width);
      bottom: auto;
      flex-direction: column-reverse;
      border-radius: var(--vf-select-dropdown-radius) var(--vf-select-dropdown-radius) 0 0;
    }

    &.vf-multiselect-dropdown-hidden {
      display: none;
    }v

    &.vf-multiselect-dropdown-sm {
      border-radius: 0 0 var(--vf-select-dropdown-radius-sm) var(--vf-select-dropdown-radius-sm);

      &.vf-multiselect-dropdown-top-sm {
        border-radius: var(--vf-select-dropdown-radius-sm) var(--vf-select-dropdown-radius-sm) 0 0;
      }
    }

    &.vf-multiselect-dropdown-lg {
      border-radius: 0 0 var(--vf-select-dropdown-radius-lg) var(--vf-select-dropdown-radius-lg);

      &.vf-multiselect-dropdown-top-lg {
        border-radius: var(--vf-select-dropdown-radius-lg) var(--vf-select-dropdown-radius-lg) 0 0;
      }
    }
  }

  .vf-multiselect-options {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    max-height: var(--vf-select-max-height);

    &.vf-multiselect-options-top {
      flex-direction: column-reverse;
    }
  }

  .vf-multiselect-group {
    padding: 0;
    margin: 0;
  }

  .vf-multiselect-group-label {
    font-weight: 600;
    background: #E5E7EB;
    color: #374151;
    cursor: default;
    font-size: var(--vf-select-group-label-font-size);
    line-height: var(--vf-select-group-label-line-height);
    padding: var(--vf-select-group-label-py) var(--vf-select-group-label-px);
    display: flex;
    box-sizing: border-box;
    text-decoration: none;
    align-items: center;
    justify-content: flex-start;
    text-align: left;

    &.vf-multiselect-group-label-pointable {
      cursor: pointer;
    }

    &.vf-multiselect-group-label-pointed {
      background: var(--vf-select-group-label-bg-pointed);
      color: var(--vf-select-group-label-color-pointed);
    }

    &.vf-multiselect-group-label-selected {
      background: var(--vf-select-group-label-bg-selected);
      color: var(--vf-select-group-label-color-selected);
    }

    &.vf-multiselect-group-label-disabled {
      background: var(--vf-select-group-label-bg-disabled);
      color: var(--vf-select-group-label-color-disabled);
      cursor: not-allowed;
    }

    &.vf-multiselect-group-label-selected.vf-multiselect-group-label-pointed {
      background: var(--vf-select-group-label-bg-selected-pointed);
      color: var(--vf-select-group-label-color-selected-pointed);
      opacity: var(--vf-select-group-label-opacity-selected-pointed);
    }

    &.vf-multiselect-group-label-selected.vf-multiselect-group-label-disabled {
      background: var(--vf-select-group-label-bg-selected-disabled);
      color: var(--vf-select-group-label-color-selected-disabled);
      opacity: var(--vf-select-group-label-opacity-selected-disabled);
    }

    &.vf-multiselect-group-label-sm {
      font-size: var(--vf-select-group-label-font-size-sm);
      line-height: var(--vf-select-group-label-line-height-sm);
      padding: var(--vf-select-group-label-py-sm) var(--vf-select-group-label-px-sm);
    }

    &.vf-multiselect-group-label-lg {
      font-size: var(--vf-select-group-label-font-size-lg);
      line-height: var(--vf-select-group-label-line-height-lg);
      padding: var(--vf-select-group-label-py-lg) var(--vf-select-group-label-px-lg);
    }
  }

  .vf-multiselect-group-options {
    padding: 0;
    margin: 0;
  }

  .vf-multiselect-option {
    padding: var(--vf-select-option-py) var(--vf-select-option-px);
    cursor: pointer;
    display: flex;
    box-sizing: border-box;
    text-decoration: none;
    align-items: center;
    justify-content: flex-start;
    text-align: left;

    &.vf-multiselect-option-pointed {
      background: var(--vf-select-option-bg-pointed);
      color: var(--vf-select-option-color-pointed);
    }

    &.vf-multiselect-option-selected {
      background: var(--vf-select-option-bg-selected);
      color: var(--vf-select-option-color-selected);
    }

    &.vf-multiselect-option-disabled {
      background: var(--vf-select-option-bg-disabled);
      color: var(--vf-select-option-color-disabled);
      cursor: not-allowed;
    }

    &.vf-multiselect-option-selected.vf-multiselect-option-pointed {
      background: var(--vf-select-option-bg-selected-pointed);
      color: var(--vf-select-option-color-selected-pointed);
      opacity: var(--vf-select-option-opacity-selected-pointed);
    }

    &.vf-multiselect-option-selected.vf-multiselect-option-disabled {
      background: var(--vf-select-option-bg-selected-disabled);
      color: var(--vf-select-option-color-selected-disabled);
      opacity: var(--vf-select-option-opacity-selected-disabled);
    }

    &.vf-multiselect-option-sm {
      padding: var(--vf-select-option-py-sm) var(--vf-select-option-px-sm);
    }

    &.vf-multiselect-option-lg {
      padding: var(--vf-select-option-py-lg) var(--vf-select-option-px-lg);
    }
  }

  .vf-multiselect-no-options,
  .vf-multiselect-no-results {
    padding: var(--vf-select-option-py) var(--vf-select-option-px);
    color: var(--vf-select-empty-color);
  }

  .vf-multiselect-no-options {
    &.vf-multiselect-no-options-sm {
      padding: var(--vf-select-option-py-sm) var(--vf-select-option-px-sm);
    }

    &.vf-multiselect-no-options-lg {
      padding: var(--vf-select-option-py-lg) var(--vf-select-option-px-lg);
    }
  }

  .vf-multiselect-no-results {
    &.vf-multiselect-no-results-sm {
      padding: var(--vf-select-option-py-sm) var(--vf-select-option-px-sm);
    }

    &.vf-multiselect-no-results-lg {
      padding: var(--vf-select-option-py-lg) var(--vf-select-option-px-lg);
    }
  }

  .vf-multiselect-fake-input {
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

  .vf-multiselect-spacer {
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