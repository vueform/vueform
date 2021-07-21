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
    --form-primary: #10B981;
    --form-primary-darker: #0EA774;
    --form-gutter: 1rem;
    --form-input-min-height: 2.375rem;

    --form-bg-disabled: #E5E7EB;
    --form-color-disabled: #9CA3AF;

    --form-error-bg: #FEE2E2;
    --form-error-color: #EF4444;
    --form-message-bg: #D1FAE5;
    --form-message-color: #10B981;

    --form-placeholder-color: #6B7280;
    --form-placeholder-opacity: 1;

    --form-border-width: 1px;
    --form-border-color: #D1D5DB;
    --form-border-radius: 0.25rem;

    --form-checkbox-size: 1rem;

    --form-ring-width: 2px;
    --form-ring-color: rgba(16, 185, 129, 0.4);

    --form-input-py: 0.375rem;
    --form-input-px: 0.75rem;
    --form-button-py: 0.4375rem;
    --form-button-px: 1rem;

    --form-date-head-bg: #F3F4F6;
    --form-date-head-color: #374151;
    
    --form-addon-bg: #F3F4F6;
    --form-addon-color: inherit;
    
    --form-element-text-font-size: 0.875rem;
    --form-element-text-line-height: 1.25rem;
    --form-element-description-color: #6B7280;
  }

  /*
   * Global styles
   *
   * Global base styles. 
   */
  form * {
    box-sizing: border-box;
  }

  /*
   * General styles
   *
   * Reusable general style definitions.
   */
  .form-row {
    display: flex;
    flex-wrap: wrap;
  }

  .form-group {
    margin-bottom: var(--form-gutter);
  }

  // General input
  .form-input-group {
    width: 100%;
    display: flex;
  }

  .form-input {
    appearance: none;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    font-family: inherit;
    margin: 0;
    width: 100%;
    padding: var(--form-input-py) var(--form-input-px);
    border: var(--form-border-width) solid var(--form-border-color);
    outline: none;
    border-radius: var(--form-border-radius);

    &:focus {
      box-shadow: 0px 0px 0px var(--form-ring-width) var(--form-ring-color);
      border-color: var(--form-primary);
    }

    &[disabled] {
      background-color: var(--form-bg-disabled);
      color: var(--form-color-disabled);
    }
  }

  // Checkbox
  .form-checkbox {
    appearance: none;
    transition: all .2s ease-in-out;
    cursor: pointer;
    width: var(--form-checkbox-size);
    height: var(--form-checkbox-size);
    border-radius: var(--form-border-radius);
    border: 1px solid var(--form-border-color);
    outline: none;
    margin: 0 0.375rem 0 0;
    position: relative;

    &:focus {
      box-shadow: inset 0 0 0 0 var(--form-primary), 0px 0px 0px var(--form-ring-width) var(--form-ring-color);
    }

    &:disabled {
      background: var(--form-bg-disabled);
    }

    &:checked {
      box-shadow: inset 0 0 0 9px var(--form-primary), 0px 0px 0px 0px var(--form-ring-color);
      border: 0;

      &:focus {
        box-shadow: inset 0 0 0 9px var(--form-primary), 0px 0px 0px var(--form-ring-width) var(--form-ring-color);
      }

      &:after {
        content: " ";
        width: calc(var(--form-checkbox-size) - 6px);
        height: calc(var(--form-checkbox-size) - 6px);
        display: inline-block;
        background: url('data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="white" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>');
        background-size: calc(var(--form-checkbox-size) - 6px) calc(var(--form-checkbox-size) - 6px);
        background-position: 50%;
        background-repeat: no-repeat;
        position: absolute;
        top: 3px;
        left: 3px;
        box-sizing: border-box;
      }

      &:disabled {
        box-shadow: inset 0 0 0 9px var(--form-bg-disabled);
        border: 1px solid var(--form-border-color);

        &:after {
          left: 2px;
          top: 2px;
        }
      }
    }
  }

  .form-checkbox-container {
    display: flex;
    align-items: center;
    width: 100%;
    padding-top: calc(var(--form-input-py) + var(--form-border-width));
  }

  .form-checkbox-label {
    cursor: pointer;
  }

  // Radio
  .form-radio {
    position: relative;
    appearance: none;
    transition: all .2s ease-in-out;
    cursor: pointer;
    width: var(--form-checkbox-size);
    height: var(--form-checkbox-size);
    border-radius: var(--form-border-radius);
    border: 1px solid var(--form-border-color);
    outline: none;
    border-radius: 50%;
    margin: 0 0.375rem 0 0;

    &:focus {
      box-shadow: inset 0 0 0 0 var(--form-primary), 0px 0px 0px var(--form-ring-width) var(--form-ring-color);
    }

    &[disabled] ~ .form-check-label,
    &:disabled ~ .form-check-label {
      color: var(--form-color-disabled);
    }

    &:disabled {
      background: var(--form-bg-disabled);
    }

    &:checked {
      box-shadow: inset 0 0 0 9px var(--form-primary), 0px 0px 0px 0px var(--form-ring-color);
      border: 0;

      &:focus {
        box-shadow: inset 0 0 0 9px var(--form-primary), 0px 0px 0px var(--form-ring-width) var(--form-ring-color);
      }

      &:after {
        content: " ";
        position: absolute;
        background: #fff;
        width: calc(var(--form-checkbox-size) - 10px);
        height: calc(var(--form-checkbox-size) - 10px);
        left: 5px;
        top: 5px;
        border-radius: 50%;
        opacity: 0;
        transition: all .2s ease-in-out .1s;
        transform: scale(.2);
        display: inline-block;
        opacity: 1;
        transform: scale(1);
      }

      &:disabled {
        box-shadow: inset 0 0 0 9px var(--form-bg-disabled);
        border: 1px solid var(--form-border-color);
      }
    }

    &:disabled:checked:after {
      left: 4px;
      top: 4px; 
    }
  }

  .form-radio-container {
    display: flex;
    align-items: center;
    width: 100%;
    padding-top: calc(var(--form-input-py) + var(--form-border-width));
  }

  .form-radio-label {
    cursor: pointer;
  }

  // Button
  .form-btn {
    padding: var(--form-button-py) var(--form-button-px);
    border-radius: var(--form-border-radius);
    transition: .3s;
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
      box-shadow: 0px 0px 0px var(--form-ring-width) var(--form-ring-color);
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
        background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'%3e%3c/path%3e%3c/svg%3e");
      }
    }
  }

  .form-btn-primary {
    background: var(--form-primary);
    color: #ffffff;

    &:not([disabled]):hover {
      background: var(--form-primary-darker);
    }
  }

  .form-btn-secondary {
    background: #E5E7EB;
    color: #374151;

    &:not([disabled]):hover {
      background: #D1D5DB;
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
   * Creating the form-col-* grid system.
   */
  $grid-breakpoints: (
    xs: 0,
    sm: 576px,
    md: 768px,
    lg: 992px,
    xl: 1200px
  ) !default;
  $grid-columns:                12 !default;
  $grid-gutter-width:           30px !default;
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
    }

    @each $breakpoint in map-keys($breakpoints) {
      $infix: breakpoint-infix($breakpoint, $breakpoints);

      @if $columns > 0 {
        @for $i from 1 through $columns {
          .form-col#{$infix}-#{$i} {
            @extend %grid-column;
          }
        }
      }

      .form-col#{$infix} {
        @extend %grid-column;
      }

      @include media-breakpoint-up($breakpoint, $breakpoints) {
        .form-col#{$infix} {
          flex-basis: 0;
          flex-grow: 1;
          max-width: 100%;
        }

        @if $columns > 0 {
          @for $i from 1 through $columns {
            .form-col#{$infix}-#{$i} {
              @include make-col($i, $columns);
            }
          }
        }
      }
    }
  }

  @include make-grid-columns();
</style>