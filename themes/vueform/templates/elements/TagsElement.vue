<script>
  import TagsElement from './../../../blank/templates/elements/TagsElement.vue'
  import Multiselect from '@vueform/multiselect/src/Multiselect.vue'

  export default {
    name: 'TagsElement',
    render: TagsElement.render,
    components: {
      Multiselect,
    },
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-text-type',
          select: {
            tags: 'vf-multiselect-tags',
            tags_sm: 'vf-multiselect-tags-sm',
            tags_md: '',
            tags_lg: 'vf-multiselect-tags-lg',
            tag: 'vf-multiselect-tag',
            tag_sm: 'vf-multiselect-tag-sm',
            tag_md: '',
            tag_lg: 'vf-multiselect-tag-lg',
            tagDisabled: 'vf-multiselect-tag-disabled',
            tagDisabled_sm: '',
            tagDisabled_md: '',
            tagDisabled_lg: '',
            tagWrapper: 'vf-multiselect-tag-wrapper',
            tagWrapperBreak: 'vf-multiselect-tag-wrapper-break',
            tagRemove: 'vf-multiselect-tag-remove',
            tagRemove_sm: 'vf-multiselect-tag-remove-sm',
            tagRemove_md: '',
            tagRemove_lg: 'vf-multiselect-tag-remove-lg',
            tagRemoveIcon: 'vf-multiselect-tag-remove-icon',
            tagsSearchWrapper: 'vf-multiselect-tags-search-wrapper',
            tagsSearchWrapper_sm: '',
            tagsSearchWrapper_md: '',
            tagsSearchWrapper_lg: '',
            tagsSearch: 'vf-multiselect-tags-search',
            tagsSearch_sm: 'vf-multiselect-tags-search-sm',
            tagsSearch_md: '',
            tagsSearch_lg: 'vf-multiselect-tags-search-lg',
            tagsSearchCopy: 'vf-multiselect-tags-search-copy',

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
            
            $tags: (classes, { Size }) => ([
              classes.select.tags,
              classes.select[`tags_${Size}`],
            ]),
            $tag: (classes, { Size }) => ([
              classes.select.tag,
              classes.select[`tag_${Size}`],
            ]),
            $tagDisabled: (classes, { Size }) => ([
              classes.select.tagDisabled,
              classes.select[`tagDisabled_${Size}`],
            ]),
            $tagRemove: (classes, { Size }) => ([
              classes.select.tagRemove,
              classes.select[`tagRemove_${Size}`],
            ]),
            $tagsSearchWrapper: (classes, { Size }) => ([
              classes.select.tagsSearchWrapper,
              classes.select[`tagsSearchWrapper_${Size}`],
            ]),
            $tagsSearch: (classes, { Size }) => ([
              classes.select.tagsSearch,
              classes.select[`tagsSearch_${Size}`],
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
          $inputWrapper: (classes, { Size }) => ([
            classes.inputWrapper,
            classes[`inputWrapper_${Size}`],
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in SelectElement.vue

  .vf-multiselect-tags {
    flex-grow: 1;
    flex-shrink: 1;
    display: flex;
    flex-wrap: wrap;
    margin: var(--vf-space-tags) 0 0;
    padding-left: var(--vf-py-input);
    align-items: center;
    min-width: 0;

    &.vf-multiselect-tags-sm {
      padding-left: var(--vf-py-input-sm);
    }

    &.vf-multiselect-tags-lg {
      padding-left: var(--vf-py-input-lg);
    }
  }

  .vf-floating-wrapper ~ .vf-multiselect-tags,
  .vf-floating-wrapper ~ div .vf-multiselect-tags {
    padding-left: var(--vf-px-input);
    margin: calc(var(--vf-space-tags) + var(--vf-floating-top) + 0.34375rem - 1px) 0 0;
  }

  .vf-floating-wrapper ~ .vf-multiselect-tags-sm,
  .vf-floating-wrapper ~ div .vf-multiselect-tags-sm {
    padding-left: var(--vf-px-input-sm);
    margin: calc(var(--vf-space-tags-sm) + var(--vf-floating-top-sm) + 0.34375rem - 1px) 0 0;
  }

  .vf-floating-wrapper ~ .vf-multiselect-tags-lg,
  .vf-floating-wrapper ~ div .vf-multiselect-tags-lg{
    padding-left: var(--vf-px-input-lg);
    margin: calc(var(--vf-space-tags-lg) + var(--vf-floating-top-lg) + 0.34375rem - 1px) 0 0;
  }

  .vf-multiselect-tag {
    background: var(--vf-bg-tag);
    color: var(--vf-color-tag);
    border-style: solid;
    border-width: var(--vf-border-width-tag);
    border-color: var(--vf-border-color-tag);
    font-size: var(--vf-font-size-small);
    line-height: var(--vf-line-height-small);
    letter-spacing: var(--vf-letter-spacing-small);
    font-weight: 600;
    padding: var(--vf-py-tag) 0 var(--vf-py-tag) var(--vf-px-tag);
    border-radius: var(--vf-radius-tag);
    margin-right: var(--vf-space-tags);
    margin-bottom: var(--vf-space-tags);
    display: flex;
    align-items: center;
    white-space: nowrap;
    min-width: 0;

    &.vf-multiselect-tag-disabled {
      padding-right: var(--vf-px-tag);
      opacity: 0.5;
    }

    &.vf-multiselect-tag-sm {
      font-size: var(--vf-font-size-small-sm);
      line-height: var(--vf-line-height-small-sm);
      letter-spacing: var(--vf-letter-spacing-small-sm);
      border-radius: var(--vf-radius-tag-sm);
      padding: var(--vf-py-tag-sm) 0 var(--vf-py-tag-sm) var(--vf-px-tag-sm);

      &.vf-multiselect-tag-disabled {
        padding-right: var(--vf-px-tag-sm);
      }
    }

    &.vf-multiselect-tag-lg {
      font-size: var(--vf-font-size-small-lg);
      line-height: var(--vf-line-height-small-lg);
      letter-spacing: var(--vf-letter-spacing-small-lg);
      border-radius: var(--vf-radius-tag-lg);
      padding: var(--vf-py-tag-lg) 0 var(--vf-py-tag-lg) var(--vf-px-tag-lg);

      &.vf-multiselect-tag-disabled {
        padding-right: var(--vf-px-tag-lg);
      }
    }
  }

  .vf-multiselect-tag-wrapper {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .vf-multiselect-tag-wrapper-break {
    white-space: normal;
    word-break: break-all;
  }

  .vf-multiselect-tag-remove {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.25rem;
    margin: 0 0.125rem;
    border-radius: var(--vf-radius-tag);
    
    &:hover {
      background: rgba(0,0,0,0.1);
    }

    &.vf-multiselect-tag-remove-sm {
      border-radius: var(--vf-radius-tag-sm);
    }

    &.vf-multiselect-tag-remove-lg {
      border-radius: var(--vf-radius-tag-lg);
    }
  }

  .vf-multiselect-tag-remove-icon {
    mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
    mask-position: center;
    -webkit-mask-position: center;
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    mask-size: contain;
    -webkit-mask-size: contain;
    background-color: currentColor;
    display: inline-block;
    width: 0.75rem;
    height: 0.75rem;
  }

  .vf-multiselect-tags-search-wrapper {
    display: inline-block;
    position: relative;
    margin: 0 var(--vf-space-tags) var(--vf-space-tags);
    flex-grow: 1;
    flex-shrink: 1;
    height: 100%;
  }

  .vf-multiselect-tags-search-copy {
    visibility: hidden;
    white-space: pre-wrap;
    display: inline-block;
    height: 1px;
    width: 100%;
  }

  .vf-multiselect-tags-search {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border: 0;
    appearance: none;
    outline: none;
    padding: 0;
    font-size: inherit;
    font-family: inherit;
    box-sizing: border-box;
    width: 100%;
    appearance: none;
    font-size: var(--vf-font-size);
    line-height: var(--vf-line-height);
    letter-spacing: var(--vf-letter-spacing);
    background-color: transparent;

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      -webkit-appearance:none;
    }

    &.vf-multiselect-tags-search-sm {
      font-size: var(--vf-font-size-sm);
      line-height: var(--vf-line-height-sm);
      letter-spacing: var(--vf-letter-spacing-sm);
    }

    &.vf-multiselect-tags-search-lg {
      font-size: var(--vf-font-size-lg);
      line-height: var(--vf-line-height-lg);
      letter-spacing: var(--vf-letter-spacing-lg);
    }
  }

  [dir="rtl"] {
    .vf-multiselect-tags {
      padding-left: 0;
      padding-right: var(--vf-py-input);

      &.vf-multiselect-tags-sm {
        padding-right: var(--vf-py-input-sm);
      }

      &.vf-multiselect-tags-lg {
        padding-right: var(--vf-py-input-lg);
      }
    }

    .vf-floating-wrapper ~ .vf-multiselect-tags,
    .vf-floating-wrapper ~ div .vf-multiselect-tags {
      padding-left: 0;
      padding-right: var(--vf-px-input);
    }

    .vf-floating-wrapper ~ .vf-multiselect-tags-sm,
    .vf-floating-wrapper ~ div .vf-multiselect-tags-sm {
      padding-left: 0;
      padding-right: var(--vf-px-input-sm);
    }

    .vf-floating-wrapper ~ .vf-multiselect-tags-lg,
    .vf-floating-wrapper ~ div .vf-multiselect-tags-lg{
      padding-left: 0;
      padding-right: var(--vf-px-input-lg);
    }

    .vf-multiselect-tag {
      padding: var(--vf-py-tag) var(--vf-px-tag) var(--vf-py-tag) 0;
      margin-right: 0;
      margin-left: var(--vf-space-tags);

      &.is-disabled {
        padding-left: ar(--vf-px-tag);
      }
    }
  }
</style>