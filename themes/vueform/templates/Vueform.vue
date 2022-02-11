<script>
  import Vueform from './../../blank/templates/Vueform.vue'

  export default {
    name: 'Vueform',
    render: Vueform.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          form: '',
        }
      }
    },
  }
</script>

<style lang="scss">
  /*
   * Default variables
   *
   * Variables used across different templates.
   */
  *, :before, :after, :root {
    --vf-primary: #07BF9B;
    --vf-primary-darker: rgba(6,172,139,1);
    --vf-danger: #ef4444;
    --vf-danger-lighter: rgba(239, 68, 68, 0.2);
    --vf-success: #10b981;
    --vf-success-lighter: rgba(16, 185, 129, 0.2);

    --vf-ring-color: rgba(7, 191, 155, 0.4);
    --vf-ring-width: 2px;

    --vf-gray-50: #f9fafb;
    --vf-gray-100: #f3f4f6;
    --vf-gray-200: #e5e7eb;
    --vf-gray-300: #d1d5db;
    --vf-gray-400: #9ca3af;
    --vf-gray-500: #6b7280;
    --vf-gray-600: #4b5563;
    --vf-gray-700: #374151;
    --vf-gray-800: #1f2937;
    --vf-gray-900: #111827;

    --vf-font-size: 1rem;
    --vf-font-size-sm: 0.875rem;
    --vf-font-size-lg: 1rem;

    --vf-font-size-small: 0.875rem;
    --vf-font-size-small-sm: 0.8125rem;
    --vf-font-size-small-lg: 0.875rem;

    --vf-line-height: 1.5rem;
    --vf-line-height-sm: 1.25rem;
    --vf-line-height-lg: 1.5rem;

    --vf-line-height-small: 1.5rem;
    --vf-line-height-small-sm: 1.125rem;
    --vf-line-height-small-lg: 1.5rem;

    --vf-letter-spacing: 0;
    --vf-letter-spacing-sm: 0;
    --vf-letter-spacing-lg: 0;

    --vf-letter-spacing-small: 0;
    --vf-letter-spacing-small-sm: 0;
    --vf-letter-spacing-small-lg: 0;

    --vf-gutter: 1rem;
    --vf-gutter-sm: 0.5rem;
    --vf-gutter-lg: 1.25rem;

    --vf-min-height-input: 2.375rem;
    --vf-min-height-input-sm: 2.125rem;
    --vf-min-height-input-lg: 2.875rem;

    --vf-py-input: 0.375rem;
    --vf-py-input-sm: 0.375rem;
    --vf-py-input-lg: 0.625rem;

    --vf-px-input: 0.75rem;
    --vf-px-input-sm: 0.5rem;
    --vf-px-input-lg: 0.875rem;

    --vf-py-btn: var(--vf-py-input);
    --vf-py-btn-sm: var(--vf-py-input-sm);
    --vf-py-btn-lg: var(--vf-py-input-lg);

    --vf-px-btn: var(--vf-px-input);
    --vf-px-btn-sm: var(--vf-px-input-sm);
    --vf-px-btn-lg: var(--vf-px-input-lg);

    --vf-py-btn-small: 0.25rem;
    --vf-py-btn-small-sm: 0.25rem;
    --vf-py-btn-small-lg: 0.375rem;

    --vf-px-btn-small: 0.625rem;
    --vf-px-btn-small-sm: 0.625rem;
    --vf-px-btn-small-lg: 0.75rem;

    --vf-py-tag: 0;
    --vf-py-tag-sm: var(--vf-py-tag);
    --vf-py-tag-lg: var(--vf-py-tag);

    --vf-px-tag: 0.4375rem;
    --vf-px-tag-sm: var(--vf-px-tag);
    --vf-px-tag-lg: var(--vf-px-tag);

    --vf-py-slider-tooltip: 0.125rem;
    --vf-py-slider-tooltip-sm: var(--vf-py-slider-tooltip);
    --vf-py-slider-tooltip-lg: var(--vf-py-slider-tooltip);

    --vf-px-slider-tooltip: 0.5rem;
    --vf-px-slider-tooltip-sm: var(--vf-px-slider-tooltip);
    --vf-px-slider-tooltip-lg: var(--vf-px-slider-tooltip);
    
    --vf-bg-input: #ffffff;
    --vf-bg-input-focus: var(--vf-bg-input);
    --vf-bg-input-hover: var(--vf-bg-input);
    --vf-bg-input-danger: var(--vf-bg-input);
    --vf-bg-input-success: var(--vf-bg-input);
    --vf-bg-disabled: var(--vf-gray-200);
    --vf-bg-selected: rgba(17,24,39,0.05);
    --vf-bg-passive: var(--vf-gray-300);
    --vf-bg-icon: var(--vf-gray-500);
    --vf-bg-danger: var(--vf-danger-lighter);
    --vf-bg-success: var(--vf-success-lighter);
    --vf-bg-tag: var(--vf-primary);
    --vf-bg-slider-handle: #ffffff;
    --vf-bg-toggle-handle: #ffffff;
    --vf-bg-date-head: var(--vf-gray-100);
    --vf-bg-addon: var(--vf-gray-100);
    --vf-bg-btn: var(--vf-primary);
    --vf-bg-btn-danger: var(--vf-danger);
    --vf-bg-btn-secondary: var(--vf-gray-200);

    --vf-color-input: var(--vf-gray-800);
    --vf-color-input-focus: var(--vf-color-input);
    --vf-color-input-hover: var(--vf-color-input);
    --vf-color-input-danger: var(--vf-color-input);
    --vf-color-input-success: var(--vf-color-input);
    --vf-color-placeholder: var(--vf-gray-300);
    --vf-color-disabled: var(--vf-gray-400);
    --vf-color-passive: var(--vf-gray-700);
    --vf-color-muted: var(--vf-gray-500);
    --vf-color-on-primary: #ffffff;
    --vf-color-danger: var(--vf-danger);
    --vf-color-success: var(--vf-success);
    --vf-color-tag: #ffffff;
    --vf-color-addon: var(--vf-gray-100);
    --vf-color-date-head: var(--vf-gray-700);
    --vf-color-btn: #ffffff;
    --vf-color-btn-danger: #ffffff;
    --vf-color-btn-secondary: var(--vf-gray-700);

    --vf-border-color-input: var(--vf-gray-300);
    --vf-border-color-input-focus: var(--vf-primary);
    --vf-border-color-input-hover: var(--vf-border-color-input);
    --vf-border-color-input-danger: var(--vf-border-color-input);
    --vf-border-color-input-success: var(--vf-border-color-input);
    --vf-border-color-checked: var(--vf-primary);
    --vf-border-color-passive: var(--vf-gray-300);
    --vf-border-color-slider-tooltip: var(--vf-primary);
    --vf-border-color-tag: var(--vf-primary);
    --vf-border-color-btn: var(--vf-primary);
    --vf-border-color-btn-danger: var(--vf-danger);
    --vf-border-color-btn-secondary: var(--vf-gray-200);

    --vf-border-width-input-t: 1px;
    --vf-border-width-input-r: 1px;
    --vf-border-width-input-b: 1px;
    --vf-border-width-input-l: 1px;
    --vf-border-width-input: var(--vf-border-width-input-t) var(--vf-border-width-input-r) var(--vf-border-width-input-b) var(--vf-border-width-input-l);
    --vf-border-width-dropdown: var(--vf-border-width-input);
    --vf-border-width-radio: var(--vf-border-width-input);
    --vf-border-width-checkbox: var(--vf-border-width-input);
    --vf-border-width-btn: var(--vf-border-width-input);
    --vf-border-width-tag: var(--vf-border-width-input);

    --vf-shadow-input: 0px 0px 0px 0px rgba(0,0,0,0);
    --vf-shadow-input-hover: 0px 0px 0px 0px rgba(0,0,0,0);
    --vf-shadow-input-focus: 0px 0px 0px 0px rgba(0,0,0,0);
    --vf-shadow-btn: 0px 0px 0px 0px rgba(0,0,0,0);
    --vf-shadow-slider-handle: 0.5px 0.5px 2px 1px rgba(0,0,0,.32);

    --vf-radius: 0.25rem;
    --vf-radius-sm: var(--vf-radius);
    --vf-radius-lg: var(--vf-radius);

    --vf-radius-btn: var(--vf-radius);
    --vf-radius-btn-sm: var(--vf-radius-sm);
    --vf-radius-btn-lg: var(--vf-radius);

    --vf-radius-small: var(--vf-radius);
    --vf-radius-small-sm: var(--vf-radius-sm);
    --vf-radius-small-lg: var(--vf-radius);

    --vf-radius-large: var(--vf-radius);
    --vf-radius-large-sm: var(--vf-radius-sm);
    --vf-radius-large-lg: var(--vf-radius);

    --vf-radius-tag: var(--vf-radius);
    --vf-radius-tag-sm: var(--vf-radius-sm);
    --vf-radius-tag-lg: var(--vf-radius);

    --vf-radius-checkbox: var(--vf-radius);
    --vf-radius-checkbox-sm: var(--vf-radius-sm);
    --vf-radius-checkbox-lg: var(--vf-radius);

    --vf-radius-slider: var(--vf-radius);
    --vf-radius-slider-sm: var(--vf-radius-sm);
    --vf-radius-slider-lg: var(--vf-radius);

    --vf-radius-image: var(--vf-radius);
    --vf-radius-image-sm: var(--vf-radius-sm);
    --vf-radius-image-lg: var(--vf-radius);

    --vf-radius-gallery: var(--vf-radius);
    --vf-radius-gallery-sm: var(--vf-radius-sm);
    --vf-radius-gallery-lg: var(--vf-radius);

    --vf-shadow-input: 0px 0px 0px 0px rgba(0,0,0,0);
    --vf-shadow-input-hover: var(--vf-shadow-input);
    --vf-shadow-input-focus: var(--vf-shadow-input);
    --vf-shadow-btn: var(--vf-shadow-input);
    --vf-shadow-slider-handle: 0.5px 0.5px 2px 1px rgba(0,0,0,.32);

    --vf-checkbox-size: 1rem;
    --vf-checkbox-size-sm: 0.875rem;
    --vf-checkbox-size-lg: 1rem;

    --vf-gallery-size: 6rem;
    --vf-gallery-size-sm: 5rem;
    --vf-gallery-size-lg: 7rem;

    --vf-toggle-width: 3rem;
    --vf-toggle-width-sm: 2.75rem;
    --vf-toggle-width-lg: 3.5rem;

    --vf-toggle-height: 1.25rem;
    --vf-toggle-height-sm: 1.125rem;
    --vf-toggle-height-lg: 1.5rem;

    --vf-slider-height: 0.375rem;
    --vf-slider-height-sm: var(--vf-slider-height);
    --vf-slider-height-lg: var(--vf-slider-height);

    --vf-slider-height-vertical: 20rem;
    --vf-slider-height-vertical-sm: var(--vf-slider-height-vertical);
    --vf-slider-height-vertical-lg: var(--vf-slider-height-vertical);

    --vf-slider-handle-size: 1rem;
    --vf-slider-handle-size-sm: var(--vf-slider-handle-size);
    --vf-slider-handle-size-lg: var(--vf-slider-handle-size);

    --vf-slider-tooltip-distance: 0.5rem;
    --vf-slider-tooltip-distance-sm: var(--vf-slider-tooltip-distance);
    --vf-slider-tooltip-distance-lg: var(--vf-slider-tooltip-distance);
    
    --vf-slider-tooltip-arrow-size: 0.3125rem;
    --vf-slider-tooltip-arrow-size-sm: var(--vf-slider-tooltip-arrow-size);
    --vf-slider-tooltip-arrow-size-lg: var(--vf-slider-tooltip-arrow-size);
  }

  /*
   * Global styles
   *
   * Global base styles. 
   */
  form {
    * {
      box-sizing: border-box;
    }

    label {
      margin: 0;
    }
  }

  ::placeholder {
    color: var(--vf-color-placeholder);
  }

  /*
   * General styles
   *
   * Reusable general style definitions.
   */
  .vf-row {
    display: flex;
    flex-wrap: wrap;
    margin-left: calc(var(--vf-gutter) * -1);
    margin-right: calc(var(--vf-gutter) * -1);
  }

  .vf-row-group {
    display: flex;
    flex-wrap: wrap;
    margin-left: calc(var(--vf-gutter) * -0.5);
    margin-right: calc(var(--vf-gutter) * -0.5);

    & > [class*="vf-col"] {
      padding-left: calc(var(--vf-gutter) / 2);
      padding-right: calc(var(--vf-gutter) / 2);
    }
  }

  .vf-group {
    margin-bottom: var(--vf-gutter);

    &.vf-group-sm {
      margin-bottom: var(--vf-gutter-sm);
    }

    &.vf-group-lg {
      margin-bottom: var(--vf-gutter-lg);
    }
  }

  // General input
  .vf-input-group {
    width: 100%;
    display: flex;

    &.vf-input-group-sm {
      
    }

    &.vf-input-group-lg {
      
    }
  }

  .vf-input {
    width: 100%;
    margin: 0;
    appearance: none;
    font-family: inherit;
    z-index: 1;
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

    padding: var(--vf-py-input) var(--vf-px-input);
    min-height: var(--vf-min-height-input);
    border-radius: var(--vf-radius);
    border-width: var(--vf-border-width-input);
    border-style: solid;

    &[disabled] {
      background-color: var(--vf-bg-disabled);
      color: var(--vf-color-disabled);
    }

    &.vf-input-success {
      background-color: var(--vf-bg-input-success);
      color: var(--vf-color-input-success);
      border-color: var(--vf-border-color-input-success);
    }

    &.vf-input-danger {
      background-color: var(--vf-bg-input-danger);
      color: var(--vf-color-input-danger);
      border-color: var(--vf-border-color-input-danger);
    }

    &:hover:not([disabled]) {
      box-shadow: var(--vf-shadow-input-hover);
    }

    &:hover:not([disabled]):not(.vf-input-success):not(.vf-input-danger) {
      background-color: var(--vf-bg-input-hover);
      color: var(--vf-color-input-hover);
      border-color: var(--vf-border-color-input-hover);
    }

    &:focus {
      box-shadow: var(--vf-shadow-input-focus);
      outline: var(--vf-ring-width) solid var(--vf-ring-color);
    }

    &:focus:not(.vf-input-success):not(.vf-input-danger),
    &:focus:not([disabled]):not(.vf-input-success):not(.vf-input-danger) {
      background-color: var(--vf-bg-input-focus);
      color: var(--vf-color-input-focus);
      border-color: var(--vf-border-color-input-focus);
    }

    &.vf-input-sm {
      padding: var(--vf-py-input-sm) var(--vf-px-input-sm);
      border-radius: var(--vf-radius-sm);
      min-height: var(--vf-min-height-input-sm);
      font-size: var(--vf-font-size-sm);
      line-height: var(--vf-line-height-sm);
      letter-spacing: var(--vf-letter-spacing-sm);
    }

    &.vf-input-lg {
      padding: var(--vf-py-input-lg) var(--vf-px-input-lg);
      border-radius: var(--vf-radius-lg);
      min-height: var(--vf-min-height-input-lg);
      font-size: var(--vf-font-size-lg);
      line-height: var(--vf-line-height-lg);
      letter-spacing: var(--vf-letter-spacing-lg);
    }

    &.vf-textarea {
      border-radius: var(--vf-radius-large);

      &.vf-input-sm {
        border-radius: var(--vf-radius-large-sm);
      }

      &.vf-input-lg {
        border-radius: var(--vf-radius-large-lg);
      }
    }
  }

  .vf-floating-wrapper ~ .vf-input-lg,
  .vf-floating-wrapper ~ div .vf-input-lg,
  .vf-floating-wrapper ~ span .vf-input-lg {
    padding-left: var(--vf-px-input-lg);
    padding-right: var(--vf-px-input-lg);
    padding-top: calc(var(--vf-py-input-lg) + (0.875rem / 2));
    padding-bottom: calc(var(--vf-py-input-lg) - (0.875rem / 2));
  }

  // Checkbox
  .vf-checkbox-container,
  .vf-checkbox-wrapper {
    display: flex;
    align-items: flex-start;
    width: 100%;
    padding-top: calc(var(--vf-py-input) + var(--vf-border-width));
  }

  .vf-checkbox-wrapper {
    &.vf-checkbox-wrapper-sm {
      padding-top: calc(var(--vf-py-input-sm) + var(--vf-border-width));
    }

    &.vf-checkbox-wrapper-lg {
      padding-top: calc(var(--vf-py-input-lg) + var(--vf-border-width));
    }
  }
  
  .vf-checkbox {
    appearance: none;
    transition: box-shadow .2s ease-in-out,
                color .2s ease-in-out,
                background-color .2s ease-in-out,
                border-color .2s ease-in-out;
    cursor: pointer;
    margin: 0.25rem 0.375rem 0 0;
    flex-shrink: 0;
    border-style: solid;
    outline: 0px solid var(--vf-ring-color);
    outline-offset: 0;

    border-color: var(--vf-border-color-input);
    box-shadow: inset 0 0 0 0 var(--vf-primary), var(--vf-shadow-input);
    background-color: var(--vf-bg-input);

    width: var(--vf-checkbox-size);
    height: var(--vf-checkbox-size);
    border-radius: var(--vf-radius-checkbox);
    border-width: var(--vf-border-width-checkbox);

    &[disabled] {
      background-color: var(--vf-bg-disabled);
      border-color: var(--vf-border-color-input);
    }

    &.vf-checkbox-danger:not(:checked) {
      border-color: var(--vf-border-color-input-danger);
      background-color: var(--vf-bg-input-danger);
    }

    &:hover:not([disabled]) {
      box-shadow: var(--vf-shadow-input-hover);
    }

    &:hover:not([disabled]):not(.vf-checkbox-danger):not(:checked) {
      background-color: var(--vf-bg-input-hover);
      border-color: var(--vf-border-color-input-hover);
    }

    &:focus {
      box-shadow: var(--vf-shadow-input-focus);
      outline: var(--vf-ring-width) solid var(--vf-ring-color);
    }

    &:focus:not([disabled]):not(.vf-checkbox-danger):not(:checked) {
      background-color: var(--vf-bg-input-focus);
      border-color: var(--vf-border-color-input-focus);
    }

    &:checked {
      background-color: var(--vf-primary);
      border-color: var(--vf-border-color-checked);

      &:after {
        content: " ";
        mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 399' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19.0982946,271.314063 C12.7710159,264.986784 -19.5640449,226.028684 17.5157021,188.948937 C54.5954492,151.869189 93.8002056,183.954281 100.125569,190.280783 L170.333604,260.487679 L411.436495,19.3859275 C417.154189,13.6670939 456.071057,-20.2835775 494.205994,17.8513602 C532.340932,55.9862978 498.18569,94.6972864 492.466202,100.416774 L209.646939,383.237176 C189.916526,402.965616 152.615587,404.508998 130.297151,382.512919 L19.0982946,271.314063 Z'%3E%3C/path%3E%3C/svg%3E");
        mask-position: center center;
        mask-size: contain;
        mask-repeat: no-repeat;
        background-color: var(--vf-color-on-primary);
        display: block;
        width: 66.666%;
        height: 66.666%;
        margin-top: 16.666%;
        margin-left: 16.666%;
      }

      &[disabled] {
        background-color: var(--vf-bg-disabled);
        border-color: var(--vf-border-color-input);
      }
    }

    &.vf-checkbox-sm {
      width: var(--vf-checkbox-size-sm);
      height: var(--vf-checkbox-size-sm);
      border-radius: var(--vf-radius-checkbox-sm);
      margin-top: 0.1875rem;
    }

    &.vf-checkbox-lg {
      width: var(--vf-checkbox-size-lg);
      height: var(--vf-checkbox-size-lg);
      border-radius: var(--vf-radius-checkbox-lg);
    }
  }

  .vf-checkbox-text {
    cursor: pointer;
  }

  // Radio
  .vf-radio-container,
  .vf-radio-wrapper {
    display: flex;
    align-items: flex-start;
    width: 100%;
    padding-top: calc(var(--vf-py-input) + var(--vf-border-width));
  }

  .vf-radio-wrapper {
    &.vf-radio-wrapper-sm {
      padding-top: calc(var(--vf-py-input-sm) + var(--vf-border-width));
    }
    
    &.vf-radio-wrapper-lg {
      padding-top: calc(var(--vf-py-input-lg) + var(--vf-border-width));
    }
  }

  .vf-radio {
    appearance: none;
    transition: box-shadow .2s ease-in-out,
                color .2s ease-in-out,
                background-color .2s ease-in-out,
                border-color .2s ease-in-out;
    cursor: pointer;
    margin: 0.25rem 0.375rem 0 0;
    flex-shrink: 0;
    border-style: solid;
    outline: 0px solid var(--vf-ring-color);
    outline-offset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;

    border-color: var(--vf-border-color-input);
    box-shadow: inset 0 0 0 0 var(--vf-primary), var(--vf-shadow-input);
    background-color: var(--vf-bg-input);

    width: var(--vf-checkbox-size);
    height: var(--vf-checkbox-size);
    border-width: var(--vf-border-width-radio);

    &[disabled] {
      background-color: var(--vf-bg-disabled);
      border-color: var(--vf-border-color-input);
    }

    &.vf-radio-danger:not(:checked) {
      border-color: var(--vf-border-color-input-danger);
      background-color: var(--vf-bg-input-danger);
    }

    &:hover:not([disabled]) {
      box-shadow: var(--vf-shadow-input-hover);
    }

    &:hover:not([disabled]):not(.vf-radio-danger):not(:checked) {
      background-color: var(--vf-bg-input-hover);
      border-color: var(--vf-border-color-input-hover);
    }

    &:focus {
      box-shadow: var(--vf-shadow-input-focus);
      outline: var(--vf-ring-width) solid var(--vf-ring-color);
    }

    &:focus:not([disabled]):not(.vf-radio-danger):not(:checked) {
      background-color: var(--vf-bg-input-focus);
      border-color: var(--vf-border-color-input-focus);
    }

    &:checked {
      background-color: var(--vf-primary);
      border-color: var(--vf-border-color-checked);

      &:after {
        content: " ";
        background: var(--vf-color-on-primary);
        width: 48%;
        height: 48%;
        border-radius: 50%;
        opacity: 0;
        transition: all .2s ease-in-out .1s;
        transform: scale(.2);
        display: inline-block;
        opacity: 1;
        transform: scale(1);
      }

      &[disabled] {
        background-color: var(--vf-bg-disabled);
        border-color: var(--vf-border-color-input);
      }
    }

    &.vf-radio-sm {
      width: var(--vf-checkbox-size-sm);
      height: var(--vf-checkbox-size-sm);
      margin-top: 0.1875rem;
    }

    &.vf-radio-lg {
      width: var(--vf-checkbox-size-lg);
      height: var(--vf-checkbox-size-lg);
    }
  }

  .vf-radio-text {
    cursor: pointer;
  }

  // Button
  .vf-btn {
    transition: .15s;
    cursor: pointer;
    border: 0;
    appearance: none;
    font-size: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    display: inline-block;
    outline: 0px solid var(--vf-ring-color);
    outline-offset: 0;
    font-size: var(--vf-font-size);
    line-height: var(--vf-line-height);
    letter-spacing: var(--vf-letter-spacing);
    padding: var(--vf-py-btn) var(--vf-px-btn);
    border-radius: var(--vf-radius-btn);
    box-shadow: var(--vf-shadow-btn);

    &:focus {
      box-shadow: 0px 0px 0px var(--vf-ring-width) var(--vf-ring-color);
    }

    &:hover:not(:disabled):not(.vf-btn-loading) {
      text-decoration: none;
      transform: scale(1.05);
    }

    &.vf-btn-sm {
      padding: var(--vf-py-btn-sm) var(--vf-px-btn-sm);
      border-radius: var(--vf-radius-btn-sm);
    }

    &.vf-btn-lg {
      padding: var(--vf-py-btn-lg) var(--vf-px-btn-lg);
      border-radius: var(--vf-radius-btn-lg);
    }

    &.vf-btn-small {
      font-size: var(--vf-font-size-small);
      line-height: var(--vf-line-height-small);
      letter-spacing: var(--vf-letter-spacing-small);
      padding: var(--vf-py-btn-small) var(--vf-px-btn-small);
      border-radius: var(--vf-radius-small);

      &.vf-btn-small-sm {
        padding: var(--vf-py-btn-small-sm) var(--vf-px-btn-small-sm);
        border-radius: var(--vf-radius-small-sm);
      }

      &.vf-btn-small-lg {
        padding: var(--vf-py-btn-small-lg) var(--vf-px-btn-small-lg);
        border-radius: var(--vf-radius-small-lg);
      }
    }

    &[disabled],
    &.vf-btn-disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &.vf-btn-primary {
      background-color: var(--vf-primary);
      color: var(--vf-color-on-primary);
    }

    &.vf-btn-secondary {
      background-color: var(--vf-bg-btn-secondary);
      color: var(--vf-color-btn-secondary);
    }

    &.vf-btn-danger {
      background-color: var(--vf-bg-btn-danger);
      color: var(--vf-color-btn-danger);
    }

    &.vf-btn-loading {
      position: relative;
      color: transparent !important;
      opacity: 0.6;
      pointer-events: none;
      cursor: not-allowed;

      &:after {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        display: inline-block;
        width: 1rem;
        height: 1rem;
        margin-left: -0.5rem;
        margin-top: -0.5rem;
        -webkit-animation: button-spinner 1s linear infinite;
        animation: button-spinner 1s linear infinite;
        mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'%3e%3c/path%3e%3c/svg%3e");
        mask-repeat: no-repeat;
        mask-size: contain;
        mask-position: center center;
      }

      &.vf-btn-loading-primary {
        &:after {
          background-color: var(--vf-color-on-primary);
        }
      }

      &.vf-btn-loading-secondary {
        &:after {
          background-color: var(--vf-color-btn-secondary);
        }
      }

      &.vf-btn-loading-danger {
        &:after {
          background-color: var(--vf-color-btn-danger);
        }
      }
    }
  }

  @keyframes button-spinner {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(1turn);
    }
  }

  /*
   * Grid system
   *
   * Creating the vf-col-* grid system.
   */
  $grid-breakpoints: (
    xs: 0,
    sm: 576px,
    md: 768px,
    lg: 992px,
    xl: 1200px
  ) !default;
  $grid-columns:                12 !default;
  $grid-gutter-width:           2rem !default;
  $grid-row-columns:            6 !default;

  @function breakpoint-min($name, $breakpoints: $grid-breakpoints) {
    $min: map-get($breakpoints, $name);
    @return if($min != 0, $min, null);
  }

  @function breakpoint-infix($name, $breakpoints: $grid-breakpoints) {
    @return if(breakpoint-min($name, $breakpoints) == null, "", "-#{$name}");
  }

  @mixin media-breakpoint-up($name, $breakpoints: $grid-breakpoints) {
    $min: breakpoint-min($name, $breakpoints);
    @if $min {
      @media (min-width: $min) {
        @content;
      }
    } @else {
      @content;
    }
  }
  
  @mixin make-col($size, $columns: $grid-columns) {
    flex: 0 0 calc((#{$size} / #{$columns}) * 100%);
    max-width: calc((#{$size} / #{$columns}) * 100%);
  }
  
  @mixin make-grid-columns($columns: $grid-columns, $gutter: $grid-gutter-width, $breakpoints: $grid-breakpoints) {
    %grid-column {
      position: relative;
      width: 100%;
      padding-left: var(--vf-gutter);
      padding-right: var(--vf-gutter);
    }

    @each $breakpoint in map-keys($breakpoints) {
      $infix: breakpoint-infix($breakpoint, $breakpoints);

      @if $columns > 0 {
        @for $i from 1 through $columns {
          .vf-col#{$infix}-#{$i} {
            @extend %grid-column;
          }
        }
      }

      .vf-col#{$infix} {
        @extend %grid-column;
      }

      @include media-breakpoint-up($breakpoint, $breakpoints) {
        .vf-col#{$infix} {
          flex-basis: 0;
          flex-grow: 1;
          max-width: 100%;
        }

        @if $columns > 0 {
          @for $i from 1 through $columns {
            .vf-col#{$infix}-#{$i} {
              @include make-col($i, $columns);
            }
          }
        }
      }
    }
  }

  @include make-grid-columns();
</style>