## Styles for Bootstrap 4

``` css
:root {
  --vf-primary: #{$primary};

  --vf-error-bg: #{lighten($danger, 38.5%)};
  --vf-error-color: #{$danger};
  --vf-success-bg: #{lighten($success, 45%)};
  --vf-success-color: #{$success};

  --vf-gray-100: #{$gray-100};
  --vf-gray-200: #{$gray-200};
  --vf-gray-300: #{$gray-300};
  --vf-gray-400: #{$gray-400};
  --vf-gray-500: #{$gray-500};
  --vf-gray-600: #{$gray-600};
  --vf-gray-700: #{$gray-700};
  --vf-gray-800: #{$gray-800};
  --vf-gray-900: #{$gray-900};

  --vf-gutter: #{($grid-gutter-width / 2)};
  --vf-input-min-height: #{$input-height};

  --vf-bg-disabled: #{$input-disabled-bg};

  --vf-placeholder-color: #{$input-placeholder-color};

  --vf-border-width: #{$input-border-width};
  --vf-border-color: #{$input-border-color};
  --vf-border-radius: #{$input-border-radius};

  --vf-ring-width: #{$input-focus-width};
  --vf-ring-color: #{rgba(red($primary), green($primary), blue($primary), 0.4)};

  --vf-input-py: #{$input-padding-y};
  --vf-input-px: #{$input-padding-x};
  --vf-button-py: #{$input-btn-padding-y};
  --vf-button-px: #{$input-btn-padding-x};
  
  --vf-addon-bg: #{$input-group-addon-bg};
  --vf-addon-color: #{$input-group-addon-color};
  
  --vf-element-text-font-size: #{$form-feedback-font-size};
  --vf-element-text-line-height: #{$line-height-base};
}
```