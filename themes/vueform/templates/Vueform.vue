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
  :root {
    --vf-primary: #10B981;

    --vf-bg-danger: #FEE2E2;
    --vf-color-danger: #EF4444;
    --vf-bg-success: #D1FAE5;
    --vf-color-success: #10B981;
    --vf-bg-disabled: var(--vf-gray-200);
    --vf-color-disabled: var(--vf-gray-400);

    --vf-gray-100: #F3F4F6;
    --vf-gray-200: #E5E7EB;
    --vf-gray-300: #D1D5DB;
    --vf-gray-400: #9CA3AF;
    --vf-gray-500: #6B7280;
    --vf-gray-600: #4B5563;
    --vf-gray-700: #374151;
    --vf-gray-800: #1F2937;
    --vf-gray-900: #111827;

    --vf-gutter: 1rem;
    --vf-gutter-sm: 0.5rem;
    --vf-gutter-lg: 1.25rem;

    --vf-font-size: 1rem;
    --vf-font-size-sm: 0.875rem;
    --vf-font-size-lg: 1rem;
    --vf-line-height: 1.5rem;
    --vf-line-height-sm: 1.25rem;
    --vf-line-height-lg: 1.5rem;

    --vf-input-min-height: 2.375rem;
    --vf-input-min-height-sm: 2.125rem;
    --vf-input-min-height-lg: 2.875rem;

    --vf-border-width: 1px;
    --vf-border-color: var(--vf-gray-300);
    --vf-border-radius: 0.25rem;
    --vf-border-radius-sm: 0.25rem;
    --vf-border-radius-lg: 0.25rem;

    --vf-ring-width: 0.125rem;
    --vf-ring-color: rgba(16, 185, 129, 0.4);

    --vf-input-py: 0.375rem;
    --vf-input-py-sm: 0.375rem;
    --vf-input-py-lg: 0.625rem;
    --vf-input-px: 0.75rem;
    --vf-input-px-sm: 0.5rem;
    --vf-input-px-lg: 0.875rem;
    --vf-button-py: 0.4375rem;
    --vf-button-py-sm: 0.4375rem;
    --vf-button-py-lg: 0.6875rem;
    --vf-button-px: 1rem;
    --vf-button-px-sm: 0.75rem;
    --vf-button-px-lg: 1.25rem;
    
    --vf-element-text-font-size: 0.875rem;
    --vf-element-text-font-size-sm: 0.75rem;
    --vf-element-text-font-size-lg: 0.875rem;
    --vf-element-text-line-height: 1.25rem;
    --vf-element-text-line-height-sm: 1rem;
    --vf-element-text-line-height-lg: 1.25rem;

    --vf-checkbox-size: 1rem;
    --vf-checkbox-size-sm: 0.875rem;
    --vf-checkbox-size-lg: 1rem;
    --vf-gallery-size: 6rem;
    --vf-gallery-size-sm: 5rem;
    --vf-gallery-size-lg: 7rem;

    --vf-placeholder-color: var(--vf-gray-400);
    --vf-placeholder-opacity: 1;

    --vf-element-description-color: var(--vf-gray-500);
      
    --vf-addon-bg: var(--vf-gray-100);
    --vf-addon-color: inherit;

    --vf-date-head-bg: var(--vf-gray-100);
    --vf-date-head-color: var(--vf-gray-700);

    --vf-toggle-width: 3rem;
    --vf-toggle-width-sm: 2.75rem;
    --vf-toggle-width-lg: 3.5rem;
    --vf-toggle-height: 1.25rem;
    --vf-toggle-height-sm: 1.125rem;
    --vf-toggle-height-lg: 1.6rem;

    --vf-toggle-font-size: 0.75rem;
    --vf-toggle-font-size-sm: 0.75rem;
    --vf-toggle-font-size-lg: 0.8125rem;

    --vf-toggle-border: 0.125rem;
    --vf-toggle-duration: 150ms;
    --vf-toggle-bg-on: var(--vf-primary);
    --vf-toggle-bg-off: var(--vf-gray-300);
    --vf-toggle-bg-on-disabled: var(--vf-primary);
    --vf-toggle-bg-off-disabled: var(--vf-gray-300);
    --vf-toggle-opacity-on-disabled: 0.5;
    --vf-toggle-opacity-off-disabled: 0.5;
    --vf-toggle-border-on: var(--vf-primary);
    --vf-toggle-border-off: var(--vf-gray-300);
    --vf-toggle-border-on-disabled: var(--vf-primary);
    --vf-toggle-border-off-disabled: var(--vf-gray-300);
    --vf-toggle-ring-width: var(--vf-ring-width);
    --vf-toggle-ring-color: var(--vf-ring-color);
    --vf-toggle-text-on: #FFFFFF;
    --vf-toggle-text-off: var(--vf-gray-700);
    --vf-toggle-text-on-disabled: #FFFFFF;
    --vf-toggle-text-off-disabled: var(--vf-gray-700);
    --vf-toggle-handle-enabled: #FFFFFF;
    --vf-toggle-handle-disabled: #FFFFFF;

    --vf-slider-bg: var(--vf-gray-300);
    --vf-slider-connect-bg: var(--vf-primary);
    --vf-slider-connect-bg-disabled: var(--vf-gray-400);
    --vf-slider-height: 0.375rem;
    --vf-slider-vertical-height: 18.75rem;
    --vf-slider-radius: 9999px;

    --vf-slider-handle-bg: #FFFFFF;
    --vf-slider-handle-border: 0;
    --vf-slider-handle-width: 1rem;
    --vf-slider-handle-height: 1rem;
    --vf-slider-handle-radius: 9999px;
    --vf-slider-handle-shadow: 0.5px 0.5px 2px 1px rgba(0,0,0,.32);
    --vf-slider-handle-shadow-active: 0.5px 0.5px 2px 1px rgba(0,0,0,.42);
    --vf-slider-handle-ring-width: var(--vf-ring-width);
    --vf-slider-handle-ring-color: var(--vf-ring-color);

    --vf-slider-tooltip-font-size: 0.875rem;
    --vf-slider-tooltip-line-height: 1.25rem;
    --vf-slider-tooltip-font-weight: 600;
    --vf-slider-tooltip-min-width: 1.25rem;
    --vf-slider-tooltip-bg: var(--vf-primary);
    --vf-slider-tooltip-bg-disabled: var(--vf-gray-400);
    --vf-slider-tooltip-color: #FFFFFF;
    --vf-slider-tooltip-radius: var(--vf-border-radius);
    --vf-slider-tooltip-py: 0.125rem;
    --vf-slider-tooltip-px: 0.375rem;
    --vf-slider-tooltip-arrow-size: 0.3125rem;
    --vf-slider-tooltip-distance: 0.1875rem;

    // Select
    --vf-select-bg: #FFFFFF;
    --vf-select-bg-disabled: var(--vf-bg-disabled);
    --vf-select-border-color: var(--vf-border-color);
    --vf-select-border-width: var(--vf-border-width);
    --vf-select-ring-width: var(--vf-ring-width);
    --vf-select-ring-color: var(--vf-ring-color);
    --vf-select-placeholder-color: var(--vf-placeholder-color);
    --vf-select-max-height: 10rem;

    --vf-select-py: var(--vf-input-py);
    --vf-select-py-sm: var(--vf-input-py-sm);
    --vf-select-py-lg: var(--vf-input-py-lg);
    --vf-select-px: var(--vf-input-px);
    --vf-select-px-sm: var(--vf-input-px-sm);
    --vf-select-px-lg: var(--vf-input-px-lg);
    --vf-select-radius: var(--vf-border-radius);
    --vf-select-radius-sm: var(--vf-border-radius-sm);
    --vf-select-radius-lg: var(--vf-border-radius-lg);

    --vf-select-spinner-color: var(--vf-primary);
    --vf-select-caret-color: var(--vf-gray-400);
    --vf-select-clear-color: var(--vf-gray-400);
    --vf-select-clear-color-hover: #000000;

    --vf-select-tag-py: 0.0625rem;
    --vf-select-tag-py-sm: 0.0625rem;
    --vf-select-tag-py-lg: 0.0625rem;
    --vf-select-tag-px: 0.5rem;
    --vf-select-tag-px-sm: 0.5rem;
    --vf-select-tag-px-lg: 0.5rem;
    --vf-select-tag-my: 0.25rem;
    --vf-select-tag-my-sm: 0.25rem;
    --vf-select-tag-my-lg: 0.25rem;
    --vf-select-tag-mx: 0.25rem;
    --vf-select-tag-mx-sm: 0.25rem;
    --vf-select-tag-mx-lg: 0.25rem;
    --vf-select-tag-radius: var(--vf-border-radius);
    --vf-select-tag-radius-sm: var(--vf-border-radius-sm);
    --vf-select-tag-radius-lg: var(--vf-border-radius-lg);
      
    --vf-select-tag-font-size: 0.875rem;
    --vf-select-tag-font-size-sm: 0.75rem;
    --vf-select-tag-font-size-lg: 0.875rem;
    --vf-select-tag-line-height: 1.25rem;
    --vf-select-tag-line-heigh-sm: 1rem;
    --vf-select-tag-line-height-lg: 1.25rem;
    
    --vf-select-tag-font-weight: 600;
    --vf-select-tag-bg: var(--vf-primary);
    --vf-select-tag-bg-disabled: var(--vf-color-disabled);
    --vf-select-tag-color: #FFFFFF;
    --vf-select-tag-color-disabled: #FFFFFF;

    --vf-select-tag-remove-py: 0.25rem;
    --vf-select-tag-remove-py-sm: 0.25rem;
    --vf-select-tag-remove-py-lg: 0.25rem;
    --vf-select-tag-remove-px: 0.25rem;
    --vf-select-tag-remove-px-sm: 0.25rem;
    --vf-select-tag-remove-px-lg: 0.25rem;
    --vf-select-tag-remove-my: 0rem;
    --vf-select-tag-remove-my-sm: 0rem;
    --vf-select-tag-remove-my-lg: 0rem;
    --vf-select-tag-remove-mx: 0.125rem;
    --vf-select-tag-remove-mx-sm: 0.125rem;
    --vf-select-tag-remove-mx-lg: 0.125rem;
    --vf-select-tag-remove-radius: var(--vf-border-radius);
    --vf-select-tag-remove-radius-sm: var(--vf-border-radius-sm);
    --vf-select-tag-remove-radius-lg: var(--vf-border-radius-lg);

    --vf-select-dropdown-bg: #FFFFFF;
    --vf-select-dropdown-border-color: var(--vf-border-color);
    --vf-select-dropdown-border-width: var(--vf-border-width);
    --vf-select-dropdown-radius: var(--vf-border-radius);
    --vf-select-dropdown-radius-sm: var(--vf-border-radius-sm);
    --vf-select-dropdown-radius-lg: var(--vf-border-radius-lg);

    --vf-select-group-label-py: calc(var(--vf-input-py) * 0.75);
    --vf-select-group-label-py-sm: calc(var(--vf-input-py-sm) * 0.75);
    --vf-select-group-label-py-lg: calc(var(--vf-input-py-lg) * 0.75);
    --vf-select-group-label-px: var(--vf-input-px);
    --vf-select-group-label-px-sm: var(--vf-input-px-sm);
    --vf-select-group-label-px-lg: var(--vf-input-px-lg);
    
    --vf-select-group-label-font-size: 87.5%;
    --vf-select-group-label-font-size-sm: 87.5%;
    --vf-select-group-label-font-size-lg: 87.5%;
    --vf-select-group-label-line-height: 1.375;
    --vf-select-group-label-line-height-sm: 1.375;
    --vf-select-group-label-line-height-lg: 1.375;

    --vf-select-group-label-bg: var(--vf-gray-200);
    --vf-select-group-label-color: var(--vf-gray-700);
    --vf-select-group-label-bg-pointed: var(--vf-gray-300);
    --vf-select-group-label-color-pointed: var(--vf-gray-700);
    --vf-select-group-label-bg-disabled: var(--vf-gray-100);
    --vf-select-group-label-color-disabled: var(--vf-gray-300);
    --vf-select-group-label-bg-selected: var(--vf-primary);
    --vf-select-group-label-color-selected: #FFFFFF;
    --vf-select-group-label-bg-selected-pointed: var(--vf-primary);
    --vf-select-group-label-color-selected-pointed: #FFFFFF;
    --vf-select-group-label-opacity-selected-pointed: 0.85;
    --vf-select-group-label-bg-selected-disabled: var(--vf-primary);
    --vf-select-group-label-color-selected-disabled: #FFFFFF;
    --vf-select-group-label-opacity-selected-disabled: 0.5;

    --vf-select-option-py: calc(var(--vf-input-py) + var(--vf-border-width));
    --vf-select-option-py-sm: calc(var(--vf-input-py-sm) + var(--vf-border-width));
    --vf-select-option-py-lg: calc(var(--vf-input-py-lg) + var(--vf-border-width));
    --vf-select-option-px: var(--vf-input-px);
    --vf-select-option-px-sm: var(--vf-input-px-sm);
    --vf-select-option-px-lg: var(--vf-input-px-lg);

    --vf-select-option-bg-pointed: var(--vf-gray-100);
    --vf-select-option-color-pointed: var(--vf-gray-800);
    --vf-select-option-bg-selected: var(--vf-primary);
    --vf-select-option-color-selected: #FFFFFF;
    --vf-select-option-bg-disabled: #FFFFFF;
    --vf-select-option-color-disabled: var(--vf-gray-300);
    --vf-select-option-bg-selected-pointed: var(--vf-primary);
    --vf-select-option-color-selected-pointed: #FFFFFF;
    --vf-select-option-opacity-selected-pointed: 0.85;
    --vf-select-option-bg-selected-disabled: var(--vf-primary);
    --vf-select-option-color-selected-disabled: #FFFFFF;
    --vf-select-option-opacity-selected-disabled: 0.5;

    --vf-select-empty-color: var(--vf-gray-600);
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
    color: var(--vf-placeholder-color);
    opacity: var(--vf-placeholder-opacity);
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
  }

  .vf-input {
    appearance: none;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    font-family: inherit;
    margin: 0;
    width: 100%;
    border: var(--vf-border-width) solid var(--vf-border-color);
    outline: none;
    padding: var(--vf-input-py) var(--vf-input-px);
    border-radius: var(--vf-border-radius);
    min-height: var(--vf-input-min-height);
    font-size: var(--vf-font-size);
    line-height: var(--vf-line-height);
    z-index: 1;

    &:focus {
      box-shadow: 0px 0px 0px var(--vf-ring-width) var(--vf-ring-color);
      border-color: var(--vf-primary);
    }

    &[disabled] {
      background-color: var(--vf-bg-disabled);
      color: var(--vf-color-disabled);
    }

    &.vf-input-sm {
      padding: var(--vf-input-py-sm) var(--vf-input-px-sm);
      border-radius: var(--vf-border-radius-sm);
      min-height: var(--vf-input-min-height-sm);
      font-size: var(--vf-font-size-sm);
      line-height: var(--vf-line-height-sm);
    }

    &.vf-input-lg {
      padding: var(--vf-input-py-lg) var(--vf-input-px-lg);
      border-radius: var(--vf-border-radius-lg);
      min-height: var(--vf-input-min-height-lg);
      font-size: var(--vf-font-size-lg);
      line-height: var(--vf-line-height-lg);
    }
  }

  .vf-floating-wrapper ~ .vf-input-lg,
  .vf-floating-wrapper ~ div .vf-input-lg,
  .vf-floating-wrapper ~ span .vf-input-lg {
    padding: calc(var(--vf-input-py-lg) + var(--vf-font-size-lg) * 0.35) var(--vf-input-px-lg) calc(var(--vf-input-py-lg) - var(--vf-font-size-lg) * 0.35);
  }

  // Checkbox
  .vf-checkbox-container,
  .vf-checkbox-wrapper {
    display: flex;
    align-items: flex-start;
    width: 100%;
    padding-top: calc(var(--vf-input-py) + var(--vf-border-width));
  }

  .vf-checkbox-wrapper {
    &.vf-checkbox-wrapper-sm {
      padding-top: calc(var(--vf-input-py-sm) + var(--vf-border-width));
    }

    &.vf-checkbox-wrapper-lg {
      padding-top: calc(var(--vf-input-py-lg) + var(--vf-border-width));
    }
  }
  
  .vf-checkbox {
    appearance: none;
    transition: all .2s ease-in-out;
    cursor: pointer;
    width: var(--vf-checkbox-size);
    height: var(--vf-checkbox-size);
    border-radius: var(--vf-border-radius);
    border: 1px solid var(--vf-border-color);
    outline: none;
    margin: 0.25rem 0.375rem 0 0;
    position: relative;
    flex-shrink: 0;

    &:focus {
      box-shadow: inset 0 0 0 0 var(--vf-primary), 0px 0px 0px var(--vf-ring-width) var(--vf-ring-color);
    }

    &:disabled {
      background: var(--vf-bg-disabled);
    }

    &:checked {
      box-shadow: inset 0 0 0 0.5625rem var(--vf-primary), 0px 0px 0px 0px var(--vf-ring-color);
      border: 0;

      &:focus {
        box-shadow: inset 0 0 0 0.5625rem var(--vf-primary), 0px 0px 0px var(--vf-ring-width) var(--vf-ring-color);
      }

      &:after {
        content: " ";
        width: calc(var(--vf-checkbox-size) - 0.375rem);
        height: calc(var(--vf-checkbox-size) - 0.375rem);
        display: inline-block;
        background: url('data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="white" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>');
        background-size: calc(var(--vf-checkbox-size) - 0.375rem) calc(var(--vf-checkbox-size) - 0.375rem);
        background-position: 50%;
        background-repeat: no-repeat;
        position: absolute;
        top: 0.1875rem;
        left: 0.1875rem;
        box-sizing: border-box;
      }

      &:disabled {
        box-shadow: inset 0 0 0 9px var(--vf-bg-disabled);
        border: 1px solid var(--vf-border-color);

        &:after {
          left: calc(0.1875rem - 1px);
          top: calc(0.1875rem - 1px);
        }
      }
    }

    &.vf-checkbox-sm {
      width: var(--vf-checkbox-size-sm);
      height: var(--vf-checkbox-size-sm);
      border-radius: var(--vf-border-radius-sm);
      margin-top: 0.1875rem;

      &:checked {
        &:after {
          content: " ";
          width: calc(var(--vf-checkbox-size-sm) - 0.25rem);
          height: calc(var(--vf-checkbox-size-sm) - 0.25rem);
          top: 0.125rem;
          left: 0.125rem;
        }
      }
    }

    &.vf-checkbox-lg {
      width: var(--vf-checkbox-size-lg);
      height: var(--vf-checkbox-size-lg);
      border-radius: var(--vf-border-radius-lg);

      &:checked {
        &:after {
          content: " ";
          width: calc(var(--vf-checkbox-size-lg) - 0.375rem);
          height: calc(var(--vf-checkbox-size-lg) - 0.375rem);
          top: 0.1875rem;
          left: 0.1875rem;
        }
      }
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
    padding-top: calc(var(--vf-input-py) + var(--vf-border-width));
  }

  .vf-radio-wrapper {
    &.vf-radio-wrapper-sm {
      padding-top: calc(var(--vf-input-py-sm) + var(--vf-border-width));
    }
    
    &.vf-radio-wrapper-lg {
      padding-top: calc(var(--vf-input-py-lg) + var(--vf-border-width));
    }
  }

  .vf-radio {
    position: relative;
    appearance: none;
    transition: all .2s ease-in-out;
    cursor: pointer;
    width: var(--vf-checkbox-size);
    height: var(--vf-checkbox-size);
    border-radius: var(--vf-border-radius);
    border: 1px solid var(--vf-border-color);
    outline: none;
    border-radius: 50%;
    margin: 0.25rem 0.375rem 0 0;
    flex-shrink: 0;

    &:focus {
      box-shadow: inset 0 0 0 0 var(--vf-primary), 0px 0px 0px var(--vf-ring-width) var(--vf-ring-color);
    }

    &[disabled] ~ .vf-check-label,
    &:disabled ~ .vf-check-label {
      color: var(--vf-color-disabled);
    }

    &:disabled {
      background: var(--vf-bg-disabled);
    }

    &:checked {
      box-shadow: inset 0 0 0 0.5625rem var(--vf-primary), 0px 0px 0px 0px var(--vf-ring-color);
      border: 0;

      &:focus {
        box-shadow: inset 0 0 0 0.5625rem var(--vf-primary), 0px 0px 0px var(--vf-ring-width) var(--vf-ring-color);
      }

      &:after {
        content: " ";
        position: absolute;
        background: #FFFFFF;
        width: calc(var(--vf-checkbox-size) - 0.625rem);
        height: calc(var(--vf-checkbox-size) - 0.625rem);
        left: 0.3125rem;
        top: 0.3125rem;
        border-radius: 50%;
        opacity: 0;
        transition: all .2s ease-in-out .1s;
        transform: scale(.2);
        display: inline-block;
        opacity: 1;
        transform: scale(1);
      }

      &:disabled {
        box-shadow: inset 0 0 0 9px var(--vf-bg-disabled);
        border: 1px solid var(--vf-border-color);
      }
    }

    &:disabled:checked:after {
      left: calc(0.3125rem - 1px);
      top: calc(0.3125rem - 1px);
    }

    &.vf-radio-sm {
      width: var(--vf-checkbox-size-sm);
      height: var(--vf-checkbox-size-sm);
      margin-top: 0.1875rem;

      &:checked {
        &:after {
          width: calc(var(--vf-checkbox-size-sm) - 0.5rem);
          height: calc(var(--vf-checkbox-size-sm) - 0.5rem);
          left: 0.25rem;
          top: 0.25rem;
        }
      }
    }

    &.vf-radio-lg {
      width: var(--vf-checkbox-size-lg);
      height: var(--vf-checkbox-size-lg);

      &:checked {
        &:after {
          width: calc(var(--vf-checkbox-size-lg) - 0.625rem);
          height: calc(var(--vf-checkbox-size-lg) - 0.625rem);
        }
      }
    }
  }

  .vf-radio-text {
    cursor: pointer;
  }

  // Button
  .vf-btn,
  .vf-small-btn {
    padding: var(--vf-button-py) var(--vf-button-px);
    border-radius: var(--vf-border-radius);
    transition: .15s;
    cursor: pointer;
    border: 0;
    appearance: none;
    font-size: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    display: inline-block;
    outline: none;

    &:focus {
      box-shadow: 0px 0px 0px var(--vf-ring-width) var(--vf-ring-color);
    }

    &:hover {
      text-decoration: none;
    }

    &[disabled],
    &.vf-btn-disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &.vf-btn-loading {
      position: relative;
      color: transparent !important;
      opacity: 0.6;
      pointer-events: none;

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
        background-color: #FFFFFF;
      }
    }
  }
  
  .vf-btn {
    &.vf-btn-sm {
      padding: var(--vf-button-py-sm) var(--vf-button-px-sm);
      border-radius: var(--vf-border-radius-sm);
    }

    &.vf-btn-lg {
      padding: var(--vf-button-py-lg) var(--vf-button-px-lg);
      border-radius: var(--vf-border-radius-lg);
    }
  }

  .vf-small-btn {
    padding: calc(var(--vf-button-py) * 0.5) calc(var(--vf-button-px) * 0.625);
    font-size: 82.5%;

    &.vf-small-btn-sm {
      padding: calc(var(--vf-button-py-sm) * 0.5) calc(var(--vf-button-px-sm) * 0.625);
    }

    &.vf-small-btn-lg {
      padding: calc(var(--vf-button-py-lg) * 0.5) calc(var(--vf-button-px-lg) * 0.625);
    }
  }

  .vf-btn-primary {
    color: #FFFFFF;
    background: var(--vf-primary);

    &:not([disabled]):hover {
      opacity: 0.9;
      color: #FFFFFF;
    }
  }

  .vf-btn-secondary {
    background: var(--vf-gray-200);
    color: var(--vf-gray-700);

    &:not([disabled]):hover {
      background: var(--vf-gray-300);
      color: var(--vf-gray-700);
    }
  }

  .vf-btn-light {
    background: var(--vf-gray-100);
    color: inherit;

    &:not([disabled]):hover {
      background: var(--vf-gray-200);
      color: inherit;
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