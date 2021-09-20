<script>
  import Laraform from './../../blank/components/Laraform'

  export default {
    name: 'Laraform',
    render: Laraform.render,
    data() {
      return {
        defaultClasses: {
          form: '',
        }
      }
    }
  }
</script>

<style lang="scss">
  /*
   * Default variables
   *
   * Variables used across different components.
   */
  :root {
    --vf-primary: #10B981;

    --vf-primary-100: #D1FAE5;
    --vf-primary-200: #A7F3D0;
    --vf-primary-300: #6EE7B7;
    --vf-primary-400: #34D399;
    --vf-primary-500: #10B981;
    --vf-primary-600: #059669;
    --vf-primary-700: #047857;
    --vf-primary-800: #065F46;
    --vf-primary-900: #064E3B;

    --vf-error-bg: #FEE2E2;
    --vf-error-color: #EF4444;
    --vf-success-bg: #D1FAE5;
    --vf-success-color: #10B981;

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
    --vf-input-min-height: 2.375rem;

    --vf-bg-disabled: var(--vf-gray-200);
    --vf-color-disabled: var(--vf-gray-400);

    --vf-placeholder-color: var(--vf-gray-400);
    --vf-placeholder-opacity: 1;

    --vf-border-width: 1px;
    --vf-border-color: var(--vf-gray-300);
    --vf-border-radius: 0.25rem;

    --vf-ring-width: 0.125rem;
    --vf-ring-color: rgba(16, 185, 129, 0.4);

    --vf-input-py: 0.375rem;
    --vf-input-px: 0.75rem;
    --vf-button-py: 0.4375rem;
    --vf-button-px: 1rem;
    
    --vf-addon-bg: var(--vf-gray-100);
    --vf-addon-color: inherit;
    
    --vf-element-text-font-size: 0.875rem;
    --vf-element-text-line-height: 1.25rem;
    --vf-element-description-color: var(--vf-gray-500);

    --vf-checkbox-size: 1rem;
    --vf-gallery-size: 6rem;

    --vf-date-head-bg: var(--vf-gray-100);
    --vf-date-head-color: var(--vf-gray-700);

    --vf-toggle-width: 3rem;
    --vf-toggle-height: 1.25rem;
    --vf-toggle-border: 0.125rem;
    --vf-toggle-font-size: 0.75rem;
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

    --vf-select-font-size: inherit;
    --vf-select-line-height: inherit;
    --vf-select-bg: #FFFFFF;
    --vf-select-bg-disabled: var(--vf-bg-disabled);
    --vf-select-border-color: var(--vf-border-color);
    --vf-select-border-width: var(--vf-border-width);
    --vf-select-radius: var(--vf-border-radius);
    --vf-select-py: var(--vf-input-py);
    --vf-select-px: var(--vf-input-px);
    --vf-select-ring-width: var(--vf-ring-width);
    --vf-select-ring-color: var(--vf-ring-color);
    --vf-select-placeholder-color: var(--vf-placeholder-color);
    --vf-select-max-height: 10rem;

    --vf-select-spinner-color: var(--vf-primary);
    --vf-select-caret-color: var(--vf-gray-400);
    --vf-select-clear-color: var(--vf-gray-400);
    --vf-select-clear-color-hover: #000000;
      
    --vf-select-tag-font-size: 0.875rem;
    --vf-select-tag-line-height: 1.25rem;
    --vf-select-tag-font-weight: 600;
    --vf-select-tag-bg: var(--vf-primary);
    --vf-select-tag-bg-disabled: var(--vf-color-disabled);
    --vf-select-tag-color: #FFFFFF;
    --vf-select-tag-color-disabled: #FFFFFF;
    --vf-select-tag-radius: var(--vf-border-radius);
    --vf-select-tag-py: 0.0625rem;
    --vf-select-tag-px: 0.5rem;
    --vf-select-tag-my: 0.25rem;
    --vf-select-tag-mx: 0.25rem;

    --vf-select-tag-remove-radius: var(--vf-border-radius);
    --vf-select-tag-remove-py: 0.25rem;
    --vf-select-tag-remove-px: 0.25rem;
    --vf-select-tag-remove-my: 0rem;
    --vf-select-tag-remove-mx: 0.125rem;

    --vf-select-dropdown-bg: #FFFFFF;
    --vf-select-dropdown-border-color: var(--vf-border-color);
    --vf-select-dropdown-border-width: var(--vf-border-width);
    --vf-select-dropdown-radius: var(--vf-border-radius);

    --vf-select-group-label-py: inherit;
    --vf-select-group-label-px: inherit;
    --vf-select-group-label-line-height: 1.375;
    --vf-select-group-label-bg: var(--vf-gray-200);
    --vf-select-group-label-color: var(--vf-gray-700);
    --vf-select-group-label-bg-pointed: var(--vf-gray-300);
    --vf-select-group-label-color-pointed: var(--vf-gray-700);
    --vf-select-group-label-bg-disabled: var(--vf-gray-100);
    --vf-select-group-label-color-disabled: var(--vf-gray-300);
    --vf-select-group-label-bg-selected: var(--vf-primary-600);
    --vf-select-group-label-color-selected: #FFFFFF;
    --vf-select-group-label-bg-selected-pointed: var(--vf-primary-600);
    --vf-select-group-label-color-selected-pointed: #FFFFFF;
    --vf-select-group-label-opacity-selected-pointed: 0.85;
    --vf-select-group-label-bg-selected-disabled: var(--vf-primary-600);
    --vf-select-group-label-color-selected-disabled: #FFFFFF;
    --vf-select-group-label-opacity-selected-disabled: 0.5;

    --vf-select-option-font-size: inherit;
    --vf-select-option-line-height: inherit;
    --vf-select-option-bg-pointed: var(--vf-gray-100);
    --vf-select-option-color-pointed: var(--vf-gray-800);
    --vf-select-option-bg-selected: var(--vf-primary);
    --vf-select-option-color-selected: #FFFFFF;
    --vf-select-option-bg-disabled: #FFFFFF;
    --vf-select-option-color-disabled: var(--vf-gray-300);
    --vf-select-option-bg-selected-pointed: #var(--vf-primary);
    --vf-select-option-color-selected-pointed: #FFFFFF;
    --vf-select-select-option-opacity-selected-pointed: 0.85;
    --vf-select-option-bg-selected-disabled: var(--vf-primary);
    --vf-select-option-color-selected-disabled: #FFFFFF;
    --vf-select-select-option-opacity-selected-disabled: 0.5;
    --vf-select-option-py: calc(var(--vf-input-py) + var(--vf-border-width));
    --vf-select-option-px: var(--vf-input-px);

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
    padding: var(--vf-input-py) var(--vf-input-px);
    border: var(--vf-border-width) solid var(--vf-border-color);
    outline: none;
    border-radius: var(--vf-border-radius);

    &:focus {
      box-shadow: 0px 0px 0px var(--vf-ring-width) var(--vf-ring-color);
      border-color: var(--vf-primary);
    }

    &[disabled] {
      background-color: var(--vf-bg-disabled);
      color: var(--vf-color-disabled);
    }
  }

  // Checkbox
  .vf-checkbox {
    appearance: none;
    transition: all .2s ease-in-out;
    cursor: pointer;
    width: var(--vf-checkbox-size);
    height: var(--vf-checkbox-size);
    border-radius: var(--vf-border-radius);
    border: 1px solid var(--vf-border-color);
    outline: none;
    margin: 0 0.375rem 0 0;
    position: relative;

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
  }

  .vf-checkbox-container {
    display: flex;
    align-items: center;
    width: 100%;
    padding-top: calc(var(--vf-input-py) + var(--vf-border-width));
  }

  .vf-checkbox-label {
    cursor: pointer;
  }

  // Radio
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
    margin: 0 0.375rem 0 0;

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
  }

  .vf-radio-container {
    display: flex;
    align-items: center;
    width: 100%;
    padding-top: calc(var(--vf-input-py) + var(--vf-border-width));
  }

  .vf-radio-label {
    cursor: pointer;
  }

  // Button
  .vf-btn {
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
    &.is-disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &.is-loading {
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

  .vf-btn-sm {
    padding: calc(var(--vf-button-py) * 0.625) calc(var(--vf-button-px) * 0.625);
    font-size: 0.875rem;
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
    flex: 0 0 percentage($size / $columns);
    max-width: percentage($size / $columns);
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