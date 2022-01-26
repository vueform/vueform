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
          container: '',
          select: {
            container: 'vf-multiselect',
            container_sm: 'vf-multiselect-sm',
            container_md: '',
            container_lg: 'vf-multiselect-lg',
            containerDisabled: 'vf-multiselect-disabled',
            containerOpen: 'vf-multiselect-open',
            containerOpenTop: 'vf-multiselect-open-top',
            containerActive: 'vf-multiselect-active',
            search: 'vf-multiselect-search',
            search_sm: 'vf-multiselect-search-sm',
            search_md: '',
            search_lg: 'vf-multiselect-search-lg',
            tags: 'vf-multiselect-tags',
            tags_sm: 'vf-multiselect-tags-sm',
            tags_md: '',
            tags_lg: 'vf-multiselect-tags-lg',
            tag: 'vf-multiselect-tag',
            tag_sm: 'vf-multiselect-tag-sm',
            tag_md: '',
            tag_lg: 'vf-multiselect-tag-lg',
            tagDisabled: 'vf-multiselect-tag-disabled',
            tagRemove: 'vf-multiselect-tag-remove',
            tagRemoveIcon: 'vf-multiselect-tag-remove-icon',
            tagsSearchWrapper: 'vf-multiselect-tags-search-wrapper',
            tagsSearch: 'vf-multiselect-tags-search',
            tagsSearchCopy: 'vf-multiselect-tags-search-copy',
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
            $tags: (classes, { Size }) => ([
              classes.select.tags,
              classes.select[`tags_${Size}`],
            ]),
            $tag: (classes, { Size }) => ([
              classes.select.tag,
              classes.select[`tag_${Size}`],
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
    margin: var(--vf-select-tag-my) 0 0;
    padding-left: var(--vf-select-py);
    align-items: center;

    &.vf-multiselect-tags-sm {
      margin: var(--vf-select-tag-my-sm) 0 0;
      padding-left: var(--vf-select-py-sm);
    }

    &.vf-multiselect-tags-lg {
      margin: var(--vf-select-tag-my-lg) 0 0;
      padding-left: var(--vf-select-py-lg);
    }
  }

  .vf-floating-wrapper ~ .vf-multiselect-tags-lg,
  .vf-floating-wrapper ~ div .vf-multiselect-tags-lg,
  .vf-floating-wrapper ~ span .vf-multiselect-tags-lg {
    padding: calc(var(--vf-input-py-lg) + var(--vf-font-size-lg) * 0.35 - 0.25rem) var(--vf-input-px-lg) calc(var(--vf-input-py-lg) - var(--vf-font-size-lg) * 0.35 - 0.25rem);
  }

  .vf-multiselect-tag {
    background: var(--vf-select-tag-bg);
    color: var(--vf-select-tag-color);
    font-size: var(--vf-select-tag-font-size);
    line-height: var(--vf-select-tag-line-height);
    font-weight: var(--vf-select-tag-font-weight);
    padding: var(--vf-select-tag-py) 0 var(--vf-select-tag-py) var(--vf-select-tag-px);
    border-radius: var(--vf-select-tag-radius);
    margin-right: var(--vf-select-tag-mx);
    margin-bottom: var(--vf-select-tag-my);
    display: flex;
    align-items: center;
    white-space: nowrap;

    &.vf-multiselect-tag-disabled {
      padding-right: var(--vf-select-tag-px);
      background: var(--vf-select-tag-bg-disabled);
      color: var(--vf-select-tag-color-disabled);
    }

    &.vf-multiselect-tag-sm {
      font-size: var(--vf-select-tag-font-size-sm);
      line-height: var(--vf-select-tag-line-height-sm);
      font-weight: var(--vf-select-tag-font-weight-sm);
      padding: var(--vf-select-tag-py-sm) 0 var(--vf-select-tag-py-sm) var(--vf-select-tag-px-sm);
      border-radius: var(--vf-select-tag-radius-sm);
      margin-right: var(--vf-select-tag-mx-sm);
      margin-bottom: var(--vf-select-tag-my-sm);
    }

    &.vf-multiselect-tag-lg {
      font-size: var(--vf-select-tag-font-size-lg);
      line-height: var(--vf-select-tag-line-height-lg);
      font-weight: var(--vf-select-tag-font-weight-lg);
      padding: var(--vf-select-tag-py-lg) 0 var(--vf-select-tag-py-lg) var(--vf-select-tag-px-lg);
      border-radius: var(--vf-select-tag-radius-lg);
      margin-right: var(--vf-select-tag-mx-lg);
      margin-bottom: var(--vf-select-tag-my-lg);
    }
  }

  .vf-multiselect-tag-remove {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--vf-select-tag-remove-py) var(--vf-select-tag-remove-px);
    margin: var(--vf-select-tag-remove-my) var(--vf-select-tag-remove-mx);
    border-radius: var(--vf-select-tag-remove-radius);
    
    &:hover {
      background: #00000010;
    }
  }

  .vf-multiselect-tag-remove-icon {
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
            mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
    -webkit-mask-position: center;
            mask-position: center;
    -webkit-mask-repeat: no-repeat;
            mask-repeat: no-repeat;
    -webkit-mask-size: contain;
            mask-size: contain;
    background-color: currentColor;
    opacity: 0.8;
    display: inline-block;
    width: 0.75rem;
    height: 0.75rem;
  }

  .vf-multiselect-tags-search-wrapper {
    display: inline-block;
    position: relative;
    margin: 0 var(--vf-select-tag-mx) var(--vf-select-tag-my);
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

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      -webkit-appearance:none;
    }
  }
</style>