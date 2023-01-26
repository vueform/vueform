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
          container: 'vf-text-type',
          input: 'vf-input vf-native-select',
          input_enabled: '',
          input_disabled: '',
          input_success: 'vf-input-success',
          input_danger: 'vf-input-danger',
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
          inputCaret: 'vf-native-select-caret',
          inputCaret_sm: 'vf-native-select-caret-sm',
          inputCaret_md: '',
          inputCaret_lg: 'vf-native-select-caret-lg',
          select: {
            singleLabel: 'vf-multiselect-single-label',
            singleLabel_sm: 'vf-multiselect-single-label-sm',
            singleLabel_md: '',
            singleLabel_lg: 'vf-multiselect-single-label-lg',
            singleLabel_noClear: 'vf-multiselect-single-label-no-clear',
            singleLabel_noCaret: 'vf-multiselect-single-label-no-caret',
            singleLabelText: 'vf-multiselect-single-label-text',
            singleLabelText_truncate: 'vf-multiselect-single-label-text-truncate',
            
            container: 'vf-multiselect',
            container_enabled: '',
            container_disabled: 'vf-multiselect-disabled',
            container_success: 'vf-multiselect-success',
            container_danger: 'vf-multiselect-danger',
            container_sm: 'vf-multiselect-sm',
            container_md: '',
            container_lg: 'vf-multiselect-lg',
            containerDisabled: '',
            containerOpen: 'vf-multiselect-open',
            containerOpenTop: 'vf-multiselect-open-top',
            containerActive: 'vf-multiselect-active',
            containerActive_enabled: '',
            wrapper: 'vf-multiselect-wrapper',
            wrapper_sm: 'vf-multiselect-wrapper-sm',
            wrapper_md: '',
            wrapper_lg: 'vf-multiselect-wrapper-lg',
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
            infinite: 'vf-multiselect-infinite',
            infinite_sm: 'vf-multiselect-infinite-sm',
            infinite_md: '',
            infinite_lg: 'vf-multiselect-infinite-lg',
            infiniteSpinner: 'vf-multiselect-infinite-spinner',
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
            assist: 'vf-assistive-text',
            spacer: 'vf-multiselect-spacer',
            spacer_sm: 'vf-multiselect-spacer-sm',
            spacer_md: '',
            spacer_lg: 'vf-multiselect-spacer-lg',
            $container: (classes, { Size, isDanger, isSuccess, isDisabled }) => ([
              classes.select.container,
              classes.select[`container_${Size}`],
              isDisabled ? classes.select.container_disabled : null,
              !isDisabled && !isSuccess && !isDanger ? classes.select.container_enabled : null,
              !isDisabled && isDanger ? classes.select.container_danger : null,
              !isDisabled && isSuccess ? classes.select.container_success : null,
            ]),
            $containerActive: (classes, { Size, isDanger, isSuccess, isDisabled }) => ([
              classes.select.containerActive,
              classes.select[`container_${Size}`],
              !isDisabled && !isSuccess && !isDanger ? classes.select.containerActive_enabled : null,
            ]),
            $wrapper: (classes, { Size }) => ([
              classes.select.wrapper,
              classes.select[`wrapper_${Size}`],
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
            $infinite: (classes, { Size }) => ([
              classes.select.infinite,
              classes.select[`infinite_${Size}`],
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
            
            $singleLabel: (classes, { Size, canClear, caret }) => ([
              classes.select.singleLabel,
              classes.select[`singleLabel_${Size}`],
              !canClear ? classes.select[`singleLabel_noClear`] : null,
              !caret ? classes.select[`singleLabel_noCaret`] : null,
            ]),
            $singleLabelText: (classes, { truncate }) => ([
              classes.select.singleLabelText,
              truncate ? classes.select[`singleLabelText_truncate`] : null,
            ]),
          },
          $input: (classes, { isDisabled, Size, isDanger, isSuccess, caret }) => ([
            classes.input,
            classes[`input_${Size}`],
            isDisabled ? classes.input_disabled : null,
            !isDisabled && !isSuccess && !isDanger ? classes.input_enabled : null,
            !isDisabled && isDanger ? classes.input_danger : null,
            !isDisabled && isSuccess ? classes.input_success : null,
          ]),
          $inputWrapper: (classes, { Size }) => ([
            classes.inputWrapper,
            classes[`inputWrapper_${Size}`],
          ]),
          $inputPlaceholder: (classes, { Size }) => ([
            classes.inputPlaceholder,
            classes[`inputPlaceholder_${Size}`],
          ]),
          $inputCaret: (classes, { Size }) => ([
            classes.inputCaret,
            classes[`inputCaret_${Size}`],
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

  .vf-input.vf-native-select {
    padding-right: calc(var(--vf-px-input) * 2);
  }

  .vf-input-sm.vf-native-select {
    padding-right: calc(var(--vf-px-input-sm) * 2);
  }

  .vf-input-lg.vf-native-select {
    padding-right: calc(var(--vf-px-input-lg) * 2);
  }

  .vf-native-select-wrapper {
    position: relative;

    &.vf-native-select-wrapper-sm {
      &:before {
        width: var(--vf-min-height-input-sm);
        height: var(--vf-min-height-input-sm);
      }
    }

    &.vf-native-select-wrapper-lg {
      &:before {
        width: var(--vf-min-height-input-lg);
        height: var(--vf-min-height-input-lg);
      }
    }
  }

  .vf-native-select-placeholder {
    position: absolute;
    top: 0;
    left: var(--vf-px-input);
    bottom: 0;
    display: flex;
    align-items: center;
    margin-left: 1px;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    color: var(--vf-color-placeholder);
    cursor: default;
    pointer-events: none;

    &.vf-native-select-placeholder-sm {
      left: var(--vf-px-input-sm);
    }

    &.vf-native-select-placeholder-lg {
      left: var(--vf-px-input-lg);
    }
  }

  .vf-native-select-caret {
    mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'%3E%3C/path%3E%3C/svg%3E");
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'%3E%3C/path%3E%3C/svg%3E");
    mask-position: center center;
    -webkit-mask-position: center center;
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    background-color: var(--vf-bg-icon);
    position: absolute;
    right: 0;
    top: 50%;
    width: 0.625rem;
    height: 1rem;
    padding: 1px 0;
    box-sizing: content-box;
    display: inline-block;
    pointer-events: none;
    transform: translateY(-50%);
    transition: transform 150ms ease-in-out;
    margin-right: var(--vf-px-input);

    &.vf-native-select-caret-sm {
      margin-right: var(--vf-px-input-sm);
    }

    &.vf-native-select-caret-lg {
      margin-right: var(--vf-px-input-lg);
    }
  }
  
  // @vueform/multiselect styles
  .vf-multiselect {
    position: relative;
    display: flex;

    width: 100%;
    margin: 0 auto;
    align-items: center;
    justify-content: flex-end;
    box-sizing: border-box;
    cursor: pointer;
    outline: 0px solid var(--vf-ring-color);
    outline-offset: 0;
    transition: box-shadow .2s ease-in-out,
                color .2s ease-in-out,
                background-color .2s ease-in-out,
                border-color .2s ease-in-out;

    font-size: var(--vf-font-size);
    line-height: var(--vf-line-height);
    letter-spacing: var(--vf-letter-spacing);

    background-color: var(--vf-bg-input);
    color: var(--vf-color-input);
    border-color: var(--vf-border-color-input);
    box-shadow: var(--vf-shadow-input);

    min-height: var(--vf-min-height-input);
    border-radius: var(--vf-radius-input);
    border-width: var(--vf-border-width-input-t) var(--vf-border-width-input-r) var(--vf-border-width-input-b) var(--vf-border-width-input-l);
    border-style: solid;

    &.vf-multiselect-open {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    &.vf-multiselect-open-top {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }

    &.vf-multiselect-disabled {
      cursor: default;
      background-color: var(--vf-bg-disabled);
      color: var(--vf-color-disabled);
      pointer-events: none;
    }

    &.vf-multiselect-success {
      background-color: var(--vf-bg-input-success);
      color: var(--vf-color-input-success);
      border-color: var(--vf-border-color-input-success);
    }

    &.vf-multiselect-danger {
      background-color: var(--vf-bg-input-danger);
      color: var(--vf-color-input-danger);
      border-color: var(--vf-border-color-input-danger);
    }
    
    &:hover {
      box-shadow: var(--vf-shadow-input-hover);

      &:not(.vf-multiselect-success):not(.vf-multiselect-danger) {
        background-color: var(--vf-bg-input-hover);
        color: var(--vf-color-input-hover);
        border-color: var(--vf-border-color-input-hover);
      }
    }

    &.vf-multiselect-active {
      box-shadow: var(--vf-shadow-input-focus);
      outline: var(--vf-ring-width) solid var(--vf-ring-color);

      &:not(.vf-multiselect-success):not(.vf-multiselect-danger) {
        border-color: var(--vf-border-color-input-focus);
        background-color: var(--vf-bg-input-focus);
        color: var(--vf-color-input-focus);
      }
    }

    &.vf-multiselect-sm {
      min-height: var(--vf-min-height-input-sm);
      border-radius: var(--vf-radius-input-sm);
      font-size: var(--vf-font-size-sm);
      line-height: var(--vf-line-height-sm);
      letter-spacing: var(--vf-letter-spacing-sm);
    }

    &.vf-multiselect-lg {
      min-height: var(--vf-min-height-input-lg);
      border-radius: var(--vf-radius-input-lg);
      font-size: var(--vf-font-size-lg);
      line-height: var(--vf-line-height-lg);
      letter-spacing: var(--vf-letter-spacing-lg);
    }
  }

  .vf-multiselect-wrapper {
    position: relative;
    margin: 0 auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    box-sizing: border-box;
    cursor: pointer;
    outline: none;
    min-height: calc(var(--vf-min-height-input) - var(--vf-border-width-input-t) - var(--vf-border-width-input-b));

    &.vf-multiselect-wrapper-sm {
      min-height: calc(var(--vf-min-height-input-sm) - var(--vf-border-width-input-t) - var(--vf-border-width-input-b));
    }

    &.vf-multiselect-wrapper-lg {
      min-height: calc(var(--vf-min-height-input-lg) - var(--vf-border-width-input-t) - var(--vf-border-width-input-b));
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
    padding-left: var(--vf-px-input);
    padding-right: calc(var(--vf-px-input) * 2.5 + 20px);
  }

  .vf-multiselect-single-label {
    &.vf-multiselect-single-label-no-caret,
    &.vf-multiselect-single-label-no-clear {
      padding-right: calc(var(--vf-px-input) * 1.5 + 10px);
    }

    &.vf-multiselect-single-label-no-caret.vf-multiselect-single-label-no-clear {
      padding-right: var(--vf-px-input);
    }
    &.vf-multiselect-single-label-sm {
      padding-left: var(--vf-px-input-sm);
      padding-right: calc(var(--vf-px-input-sm) * 2.5 + 20px);

      &.vf-multiselect-single-label-no-caret,
      &.vf-multiselect-single-label-no-clear {
        padding-right: calc(var(--vf-px-input-sm) * 1.5 + 10px);
      }

      &.vf-multiselect-single-label-no-caret.vf-multiselect-single-label-no-clear {
        padding-right: var(--vf-px-input-sm);
      }
    }

    &.vf-multiselect-single-label-lg {
      padding-left: var(--vf-px-input-lg);
      padding-right: calc(var(--vf-px-input-lg) * 2.5 + 20px);

      &.vf-multiselect-single-label-no-caret,
      &.vf-multiselect-single-label-no-clear {
        padding-right: calc(var(--vf-px-input-lg) * 1.5 + 10px);
      }

      &.vf-multiselect-single-label-no-caret.vf-multiselect-single-label-no-clear {
        padding-right: var(--vf-px-input-lg);
      }
    }
  }

  .vf-floating-wrapper ~ .vf-multiselect-single-label,
  .vf-floating-wrapper ~ div .vf-multiselect-single-label {
    padding-top: calc(var(--vf-py-input) + (var(--vf-floating-top) / 2));
    padding-bottom: calc(var(--vf-py-input) - (var(--vf-floating-top) / 2));
  }

  .vf-floating-wrapper ~ .vf-multiselect-single-label-sm,
  .vf-floating-wrapper ~ div .vf-multiselect-single-label-sm {
    padding-top: calc(var(--vf-py-input-sm) + (var(--vf-floating-top-sm) / 2));
    padding-bottom: calc(var(--vf-py-input-sm) - (var(--vf-floating-top-sm) / 2));
  }

  .vf-floating-wrapper ~ .vf-multiselect-single-label-lg,
  .vf-floating-wrapper ~ div .vf-multiselect-single-label-lg {
    padding-top: calc(var(--vf-py-input-lg) + (var(--vf-floating-top-lg) / 2));
    padding-bottom: calc(var(--vf-py-input-lg) - (var(--vf-floating-top-lg) / 2));
  }

  .vf-multiselect-placeholder {
    color: var(--vf-color-placeholder);

    &.vf-multiselect-placeholder-sm {
      padding-left: var(--vf-px-input-sm);
      padding-right: calc(var(--vf-px-input-sm) * 2.5 + 20px);
    }
    
    &.vf-multiselect-placeholder-lg {
      padding-left: var(--vf-px-input-lg);
      padding-right: calc(var(--vf-px-input-lg) * 2.5 + 20px);
    }
  }

  .vf-multiselect-single-label-text {
    overflow: hidden;
    display: block;
    white-space: nowrap;
    max-width: 100%;
  }

  .vf-multiselect-single-label-text-truncate {
    text-overflow: ellipsis;
  }

  .vf-multiselect-search {
    width: 100%;
    height: 100%; // for FF
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    outline: none;
    box-sizing: border-box;
    border: 0;
    appearance: none;
    font-family: inherit;
    background: transparent;

    font-size: var(--vf-font-size);
    line-height: var(--vf-line-height);
    letter-spacing: var(--vf-letter-spacing);

    border-radius: var(--vf-radius-input);
    padding-left: var(--vf-px-input);
    padding-right: calc(var(--vf-px-input) * 2.5 + 20px);
    color: var(--vf-color-input);

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      -webkit-appearance:none;
    }

    &.vf-multiselect-search-sm {
      border-radius: var(--vf-radius-input-sm);
      padding-left: var(--vf-px-input-sm);
      padding-right: calc(var(--vf-px-input-sm) * 2.5 + 20px);
      font-size: var(--vf-font-size-sm);
      line-height: var(--vf-line-height-sm);
      letter-spacing: var(--vf-letter-spacing-sm);
    }

    &.vf-multiselect-search-lg {
      border-radius: var(--vf-radius-input-lg);
      padding-left: var(--vf-px-input-lg);
      padding-right: calc(var(--vf-px-input-lg) * 2.5 + 20px);
      font-size: var(--vf-font-size-lg);
      line-height: var(--vf-line-height-lg);
      letter-spacing: var(--vf-letter-spacing-lg);
    }
  }

  .vf-floating-wrapper ~ .vf-multiselect-search-lg,
  .vf-floating-wrapper ~ div .vf-multiselect-search-lg,
  .vf-floating-wrapper ~ span .vf-multiselect-search-lg {
    padding-left: var(--vf-px-input-lg);
    padding-right: var(--vf-px-input-lg);
    padding-top: calc(var(--vf-py-input-lg) + (var(--vf-floating-top-lg) / 2));
    padding-bottom: calc(var(--vf-py-input-lg) - (var(--vf-floating-top-lg) / 2));
  }

  .vf-multiselect-spinner {
    mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'%3E%3C/path%3E%3C/svg%3E");
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'%3E%3C/path%3E%3C/svg%3E");
    mask-position: center;
    -webkit-mask-position: center;
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    mask-size: contain;
    -webkit-mask-size: contain;
    background-color: var(--vf-primary);
    width: 1rem;
    height: 1rem;
    margin: 0 var(--vf-px-input) 0 0;
    animation: multiselect-spin 1s linear infinite;
    flex-shrink: 0;
    flex-grow: 0;

    &.vf-multiselect-spinner-sm {
      margin: 0 var(--vf-px-input-sm) 0 0;
    }

    &.vf-multiselect-spinner-lg {
      margin: 0 var(--vf-px-input-lg) 0 0;
    }
  }

  .vf-multiselect-inifite {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: var(--vf-min-height-input);

    &.vf-multiselect-inifite-sm {
      height: var(--vf-min-height-input-sm);
    }

    &.vf-multiselect-inifite-lg {
      height: var(--vf-min-height-input-lg);
    }
  }

  .vf-multiselect-inifite-spinner {
    mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'%3E%3C/path%3E%3C/svg%3E");
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'%3E%3C/path%3E%3C/svg%3E");
    mask-position: center;
    -webkit-mask-position: center;
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    mask-size: contain;
    -webkit-mask-size: contain;
    background-color: var(--vf-primary);
    width: 1rem;
    height: 1rem;
    animation: multiselect-spin 1s linear infinite;
    flex-shrink: 0;
    flex-grow: 0;
  }

  .vf-multiselect-clear {
    margin: 0 var(--vf-px-input) 0 0px;
    position: relative;
    opacity: 1;
    transition: .3s;
    flex-shrink: 0;
    flex-grow: 0;
    display: flex;

    &:hover .vf-multiselect-clear-icon {
      opacity: 1;
    }

    &.vf-multiselect-clear-sm {
      margin: 0 var(--vf-px-input-sm) 0 0px;
    }

    &.vf-multiselect-clear-lg {
      margin: 0 var(--vf-px-input-lg) 0 0px;
    }
  }

  .vf-multiselect-clear-icon {
    mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
    mask-position: center;
    -webkit-mask-position: center;
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    mask-size: contain;
    -webkit-mask-size: contain;
    background-color: var(--vf-bg-icon);
    width: 0.625rem;
    height: 1.125rem;
    display: inline-block;
    transition: .3s;
    opacity: 0.5;
  }

  .vf-multiselect-caret {
    transform: rotate(0deg);
    transition: .3s transform;
    mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'%3E%3C/path%3E%3C/svg%3E");
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'%3E%3C/path%3E%3C/svg%3E");
    mask-position: center;
    -webkit-mask-position: center;
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    mask-size: contain;
    -webkit-mask-size: contain;
    background-color: var(--vf-bg-icon);
    width: 0.625rem;
    height: 1.125rem;
    margin: 0 var(--vf-px-input) 0 0;
    position: relative;
    flex-shrink: 0;
    flex-grow: 0;
    pointer-events: none;

    &.vf-multiselect-caret-open {
      transform: rotate(180deg);
      pointer-events: auto;
    }

    &.vf-multiselect-caret-sm {
      margin: 0 var(--vf-px-input-sm) 0 0;
    }

    &.vf-multiselect-caret-lg {
      margin: 0 var(--vf-px-input-lg) 0 0;
    }
  }

  .vf-multiselect-dropdown {
    position: absolute;
    left: calc(var(--vf-border-width-input-l) * (-1));
    right: calc(var(--vf-border-width-input-r) * (-1));
    bottom: 0;
    transform: translateY(100%);
    border-width: var(--vf-border-width-dropdown);
    border-style: solid;
    border-color: var(--vf-border-color-input);
    margin-top: calc(var(--vf-border-width-input-t) * (-1));
    max-height: 15rem;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    z-index: 999;
    background: var(--vf-bg-input);
    display: flex;
    flex-direction: column;
    border-radius: var(--vf-radius-input);
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    outline: none;
    box-shadow: var(--vf-shadow-dropdown);

    &.vf-multiselect-dropdown-top {
      transform: translateY(-100%);
      top: 0;
      margin-top: 0;
      bottom: auto;
      border-radius: var(--vf-radius-input);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    &.vf-multiselect-dropdown-hidden {
      display: none;
    }v

    &.vf-multiselect-dropdown-sm {
      border-radius: var(--vf-radius-input-sm);
      border-top-left-radius: 0;
      border-top-right-radius: 0;

      &.vf-multiselect-dropdown-top-sm {
        border-radius: var(--vf-radius-input-sm);
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
    }

    &.vf-multiselect-dropdown-lg {
      border-radius: var(--vf-radius-input-lg);
      border-top-left-radius: 0;
      border-top-right-radius: 0;

      &.vf-multiselect-dropdown-top-lg {
        border-radius: var(--vf-radius-input-lg);
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
  }

  .vf-multiselect-options {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    color: var(--vf-color-input);
  }

  .vf-multiselect-group {
    padding: 0;
    margin: 0;
  }

  .vf-multiselect-group-label {
    font-weight: 600;
    color: #374151;
    cursor: default;
    display: flex;
    box-sizing: border-box;
    text-decoration: none;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    font-size: var(--vf-font-size-small);
    line-height: var(--vf-line-height-small);
    letter-spacing: var(--vf-letter-spacing-small);
    padding: calc(var(--vf-py-input) * 0.5) var(--vf-px-input);
    color: var(--vf-color-input);
    background: var(--vf-bg-selected);
    filter: brightness(0.9);

    &.vf-multiselect-group-label-pointable {
      cursor: pointer;
    }

    &.vf-multiselect-group-label-pointed {
      filter: brightness(0.95);
    }

    &.vf-multiselect-group-label-selected {
      background: var(--vf-primary-darker);
      color: var(--vf-color-on-primary);
      filter: brightness(1.0);
    }

    &.vf-multiselect-group-label-disabled {
      background: var(--vf-bg-disabled);
      color: var(--vf-color-disabled);
      cursor: not-allowed;
    }

    &.vf-multiselect-group-label-selected.vf-multiselect-group-label-pointed {
      opacity: 0.9;
    }

    &.vf-multiselect-group-label-selected.vf-multiselect-group-label-disabled {
      opacity: 0.5;
    }

    &.vf-multiselect-group-label-sm {
      font-size: var(--vf-font-size-small-sm);
      line-height: var(--vf-line-height-small-sm);
      letter-spacing: var(--vf-letter-spacing-small-sm);
      padding: calc(var(--vf-py-input-sm) * 0.5) var(--vf-px-input-sm);
    }

    &.vf-multiselect-group-label-lg {
      font-size: var(--vf-font-size-small-lg);
      line-height: var(--vf-line-height-small-lg);
      letter-spacing: var(--vf-letter-spacing-small-lg);
      padding: calc(var(--vf-py-input-lg) * 0.5) var(--vf-px-input-lg);
    }
  }

  .vf-multiselect-group-options {
    padding: 0;
    margin: 0;
  }

  .vf-multiselect-option {
    padding: calc(var(--vf-py-input) + var(--vf-border-width-input-t)) var(--vf-px-input) calc(var(--vf-py-input) + var(--vf-border-width-input-t));
    cursor: pointer;
    display: flex;
    box-sizing: border-box;
    text-decoration: none;
    align-items: center;
    justify-content: flex-start;
    text-align: left;

    &.vf-multiselect-option-pointed {
      background: var(--vf-bg-selected);
      color: var(--vf-color-input);
    }

    &.vf-multiselect-option-selected {
      background: var(--vf-primary);
      color: var(--vf-color-on-primary);
    }

    &.vf-multiselect-option-disabled {
      background: var(--vf-bg-disabled);
      color: var(--vf-color-disabled);
      cursor: not-allowed;
    }

    &.vf-multiselect-option-selected.vf-multiselect-option-pointed {
      opacity: 0.9;
    }

    &.vf-multiselect-option-selected.vf-multiselect-option-disabled {
      opacity: 0.5;
    }

    &.vf-multiselect-option-sm {
      padding: calc(var(--vf-py-input-sm) + var(--vf-border-width-input-t)) var(--vf-px-input-sm) calc(var(--vf-py-input-sm) + var(--vf-border-width-input-t));
    }

    &.vf-multiselect-option-lg {
      padding: calc(var(--vf-py-input-lg) + var(--vf-border-width-input-t)) var(--vf-px-input-lg) calc(var(--vf-py-input-lg) + var(--vf-border-width-input-t));
    }
  }

  .vf-multiselect-no-options,
  .vf-multiselect-no-results {
    padding: var(--vf-py-input) var(--vf-px-input);
    color: var(--vf-color-muted);
  }

  .vf-multiselect-no-options {
    &.vf-multiselect-no-options-sm {
      padding: var(--vf-py-input-sm) var(--vf-px-input-sm);
    }

    &.vf-multiselect-no-options-lg {
      padding: var(--vf-py-input-lg) var(--vf-px-input-lg);
    }
  }

  .vf-multiselect-no-results {
    &.vf-multiselect-no-results-sm {
      padding: var(--vf-py-input-sm) var(--vf-px-input-sm);
    }

    &.vf-multiselect-no-results-lg {
      padding: var(--vf-py-input-lg) var(--vf-px-input-lg);
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

[dir="rtl"] {
  .vf-input.vf-native-select {
    padding-right: var(--vf-px-input);
    padding-left: calc(var(--vf-px-input) * 2);
  }

  .vf-input-sm.vf-native-select {
    padding-right: var(--vf-px-input);
    padding-left: calc(var(--vf-px-input-sm) * 2);
  }

  .vf-input-lg.vf-native-select {
    padding-right: var(--vf-px-input);
    padding-left: calc(var(--vf-px-input-lg) * 2);
  }

  .vf-native-select-placeholder {
    left: auto;
    right: var(--vf-px-input);
  }

  .vf-native-select-caret {
    right: auto;
    left: 0;
    margin-right: 0;
    margin-left: var(--vf-px-input);

    &.vf-native-select-caret-sm {
      margin-right: 0;
      margin-left: var(--vf-px-input-sm);
    }

    &.vf-native-select-caret-lg {
      margin-right: 0;
      margin-left: var(--vf-px-input-lg);
    }
  }

  .vf-multiselect-single-label {
    padding-left: calc(var(--vf-px-input) * 4);
    padding-right: var(--vf-px-input);
    left: auto;
    right: 0;

    &.vf-multiselect-single-label-no-caret,
    &.vf-multiselect-single-label-no-clear {
      padding-left: calc(var(--vf-px-input) * 2);
      padding-right: var(--vf-px-input);
    }

    &.vf-multiselect-single-label-no-caret.vf-multiselect-single-label-no-clear {
      padding-left: var(--vf-px-input);
      padding-right: var(--vf-px-input);
    }

    &.vf-multiselect-single-label-sm {
      padding-left: calc(var(--vf-px-input-sm) * 4);
      padding-right: var(--vf-px-input-sm);

      &.vf-multiselect-single-label-no-caret,
      &.vf-multiselect-single-label-no-clear {
        padding-left: calc(var(--vf-px-input-sm) * 2);
        padding-right: var(--vf-px-input-sm);
      }

      &.vf-multiselect-single-label-no-caret.vf-multiselect-single-label-no-clear {
        padding-left: var(--vf-px-input-sm);
        padding-right: var(--vf-px-input-sm);
      }
    }

    &.vf-multiselect-single-label-lg {
      padding-left: calc(var(--vf-px-input-lg) * 4);
      padding-right: var(--vf-px-input-lg);

      &.vf-multiselect-single-label-no-caret,
      &.vf-multiselect-single-label-no-clear {
        padding-left: calc(var(--vf-px-input-lg) * 2);
        padding-right: var(--vf-px-input-lg);
      }

      &.vf-multiselect-single-label-no-caret.vf-multiselect-single-label-no-clear {
        padding-left: var(--vf-px-input-lg);
        padding-right: var(--vf-px-input-lg);
      }
    }
  }

  .vf-multiselect-placeholder {
    padding-left: var(--vf-min-height-input);
    padding-right: var(--vf-px-input);
    left: auto;
    right: 0;

    &.vf-multiselect-placeholder-sm {
      padding-left: calc(1.25rem + var(--vf-px-input-sm) * 3);
      padding-right: var(--vf-px-input-sm);
    }
    &.vf-multiselect-placeholder-lg {
      padding-left: calc(1.25rem + var(--vf-px-input-lg) * 3);
      padding-right: var(--vf-px-input-lg);
    }
  }

  .vf-multiselect-search {
    padding-left: 0;
    padding-right: var(--vf-px-input);

    &.vf-multiselect-search-sm {
      padding-left: 0;
      padding-right: var(--vf-px-input-sm);
    }

    &.vf-multiselect-search-lg {
      padding-left: 0;
      padding-right: var(--vf-px-input-lg);
    }
  }

  .vf-multiselect-spinner {
    margin: 0 0 0 var(--vf-px-input);
  }

  .vf-multiselect-caret {
    margin: 0 0 0 var(--vf-px-input);
  }

  .vf-multiselect-clear {
    padding: 0 0 0 var(--vf-px-input);
  }
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