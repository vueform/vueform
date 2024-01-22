<script>
  import MultiselectElement from './../../../blank/templates/elements/MultiselectElement.vue'
  import Multiselect from '@vueform/multiselect/src/Multiselect.vue'

  export default {
    name: 'MultiselectElement',
    components: {
      Multiselect,
    },
    render: MultiselectElement.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-text-type',
          input: 'vf-input',
          input_enabled: '',
          input_disabled: '',
          input_success: 'vf-input-success',
          input_danger: 'vf-input-danger',
          input_sm: 'vf-input-sm',
          input_md: '',
          input_lg: 'vf-input-lg',
          inputWrapper: '',
          select: {
            multipleLabel: 'vf-multiselect-multiple-label',
            multipleLabel_sm: 'vf-multiselect-multiple-label-sm',
            multipleLabel_md: '',
            multipleLabel_lg: 'vf-multiselect-multiple-label-lg',
            multipleLabel_noClear: 'vf-multiselect-multiple-label-no-clear',
            multipleLabel_noCaret: 'vf-multiselect-multiple-label-no-caret',
            
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
            
            $multipleLabel: (classes, { Size, canClear, caret }) => ([
              classes.select.multipleLabel,
              classes.select[`multipleLabel_${Size}`],
              !canClear ? classes.select[`multipleLabel_noClear`] : null,
              !caret ? classes.select[`multipleLabel_noCaret`] : null,
            ]),
          },
          $input: (classes, { isDisabled, Size, isDanger, isSuccess }) => ([
            classes.input,
            classes[`input_${Size}`],
            isDisabled ? classes.input_disabled : null,
            !isDisabled && !isSuccess && !isDanger ? classes.input_enabled : null,
            !isDisabled && isDanger ? classes.input_danger : null,
            !isDisabled && isSuccess ? classes.input_success : null,
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
  /* Some styles are contained in Vueform.vue & SelectElement.vue */

  .vf-multiselect-multiple-label {
    display: flex;
    align-items: center;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    background: transparent;
    padding-left: var(--vf-px-input);
    padding-right: calc(var(--vf-px-input) * 2.5 + 20px);

    &.vf-multiselect-multiple-label-no-caret,
    &.vf-multiselect-multiple-label-no-clear {
      padding-right: calc(var(--vf-px-input) * 1.5 + 10px);
    }

    &.vf-multiselect-multiple-label-no-caret.vf-multiselect-multiple-label-no-clear {
      padding-right: var(--vf-px-input);
    }

    &.vf-multiselect-multiple-label-sm {
      padding-left: var(--vf-px-input-sm);
      padding-right: calc(var(--vf-px-input-sm) * 1.5 + 20px);

      &.vf-multiselect-multiple-label-no-caret,
      &.vf-multiselect-multiple-label-no-clear {
        padding-right: calc(var(--vf-px-input-sm) * 1.5 + 10px);
      }

      &.vf-multiselect-multiple-label-no-caret.vf-multiselect-multiple-label-no-clear {
        padding-right: var(--vf-px-input-sm);
      }
    }
    &.vf-multiselect-multiple-label-lg {
      padding-left: var(--vf-px-input-lg);
      padding-right: calc(var(--vf-px-input-lg) * 2.5 + 20px);

      &.vf-multiselect-multiple-label-no-caret,
      &.vf-multiselect-multiple-label-no-clear {
        padding-right: calc(var(--vf-px-input-lg) * 1.5 + 10px);
      }

      &.vf-multiselect-multiple-label-no-caret.vf-multiselect-multiple-label-no-clear {
        padding-right: var(--vf-px-input-lg);
      }
    }
  }

  .vf-floating-wrapper ~ .vf-multiselect-multiple-label,
  .vf-floating-wrapper ~ div .vf-multiselect-multiple-label {
    padding-top: calc(var(--vf-py-input) + (var(--vf-floating-top) / 2));
    padding-bottom: calc(var(--vf-py-input) - (var(--vf-floating-top) / 2));
  }

  .vf-floating-wrapper ~ .vf-multiselect-multiple-label-sm,
  .vf-floating-wrapper ~ div .vf-multiselect-multiple-label-sm {
    padding-top: calc(var(--vf-py-input-sm) + (var(--vf-floating-top-sm) / 2));
    padding-bottom: calc(var(--vf-py-input-sm) - (var(--vf-floating-top-sm) / 2));
  }

  .vf-floating-wrapper ~ .vf-multiselect-multiple-label-lg,
  .vf-floating-wrapper ~ div .vf-multiselect-multiple-label-lg{
    padding-top: calc(var(--vf-py-input-lg) + (var(--vf-floating-top-lg) / 2));
    padding-bottom: calc(var(--vf-py-input-lg) - (var(--vf-floating-top-lg) / 2));
  }
  
  [dir="rtl"] {
    .vf-multiselect-multiple-label {
      padding-left: calc(var(--vf-px-input) * 2.5 + 20px);
      padding-right: var(--vf-px-input);
      left: auto;
      right: 0;

      &.vf-multiselect-multiple-label-no-caret,
      &.vf-multiselect-multiple-label-no-clear {
        padding-left: calc(var(--vf-px-input) * 1.5 + 10px);
        padding-right: var(--vf-px-input);
      }

      &.vf-multiselect-multiple-label-no-caret.vf-multiselect-multiple-label-no-clear {
        padding-left: var(--vf-px-input);
        padding-right: var(--vf-px-input);
      }

      &.vf-multiselect-multiple-label-sm {
        padding-left: calc(var(--vf-px-input-sm) * 2.5 + 20px);
        padding-right: var(--vf-px-input-sm);

        &.vf-multiselect-multiple-label-no-caret,
        &.vf-multiselect-multiple-label-no-clear {
          padding-left: calc(var(--vf-px-input-sm) * 1.5 + 10px);
          padding-right: var(--vf-px-input-sm);
        }

        &.vf-multiselect-multiple-label-no-caret.vf-multiselect-multiple-label-no-clear {
          padding-left: var(--vf-px-input-sm);
          padding-right: var(--vf-px-input-sm);
        }
      }
      &.vf-multiselect-multiple-label-lg {
        padding-left: calc(var(--vf-px-input-lg) * 2.5 + 20px);
        padding-right: var(--vf-px-input-lg);

        &.vf-multiselect-multiple-label-no-caret,
        &.vf-multiselect-multiple-label-no-clear {
          padding-left: calc(var(--vf-px-input-lg) * 1.5 + 10px);
          padding-right: var(--vf-px-input-lg);
        }

        &.vf-multiselect-multiple-label-no-caret.vf-multiselect-multiple-label-no-clear {
          padding-left: var(--vf-px-input-lg);
          padding-right: var(--vf-px-input-lg);
        }
      }
    }
  }
</style>