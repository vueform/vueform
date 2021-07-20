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

    --form-bg-disabled: #E5E7EB;
    --form-color-disabled: #9CA3AF;

    --form-error-color: #EF4444;
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

  .form-btn {
    padding: var(--form-button-py) var(--form-button-px);
    border-radius: var(--form-border-radius);
    transition: .3s;
    cursor: pointer;
    border: 0;
    appearance: none;
    font-size: inherit;
    line-height: inherit;

    &:focus {
      box-shadow: 0px 0px 0px var(--form-ring-width) var(--form-ring-color);
    }

    &[disabled] {
      opacity: 0.6;
      cursor: not-allowed;
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