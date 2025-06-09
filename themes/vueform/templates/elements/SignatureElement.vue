<script>
  import SignatureElement from './../../../blank/templates/elements/SignatureElement.vue'

  export default {
    name: 'SignatureElement',
    render: SignatureElement.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: 'vf-signature',
          wrapper_sm: 'vf-signature-sm',
          wrapper_md: '',
          wrapper_lg: 'vf-signature-lg',
          wrapper_disabled: 'vf-signature-disabled',
          wrapper_enabled: '',
          wrapper_readonly: 'vf-signature-readonly',
          line: 'vf-signature-line',
          loadedWrapper: 'vf-signature-loaded-wrapper',
          loadedWrapper_disabled: 'vf-signature-loaded-wrapper-disabled',
          loadedWrapper_enabled: '',
          loadedImg: 'vf-signature-loaded-img',
          innerWrapper: 'vf-signature-inner-wrapper',
          innerWrapper_disabled: 'vf-signature-inner-wrapper-disabled',
          innerWrapper_enabled: '',
          input: 'vf-signature-input',
          input_invert: 'vf-signature-input-invert',
          placeholder: 'vf-signature-placeholder',
          uploadContainer: 'vf-signature-upload-container',
          uploadContainer_dragging: 'vf-signature-upload-container-dragging',
          uploadContainer_not_dragging: '',
          uploadWrapper: 'vf-signature-upload-wrapper',
          uploadWrapper_processing: 'vf-signature-upload-wrapper-processing',
          dndText: 'vf-signature-dnd-text',
          uploadButton: 'vf-btn vf-btn-secondary',
          uploadPreview: 'vf-signature-upload-preview',
          pad: 'vf-signature-pad',
          pad_invert: 'vf-signature-pad-invert',
          colors: 'vf-signature-colors',
          color: 'vf-signature-color',
          color_invert: 'vf-signature-color-invert',
          color_active: 'vf-signature-color-active',
          color_inactive: '',
          actions: 'vf-signature-actions',
          undosWrapper: 'vf-signature-undos-wrapper',
          undo: 'vf-signature-undo',
          undo_enabled: '',
          undo_disabled: 'vf-signature-undo-disabled',
          redo: 'vf-signature-redo',
          redo_enabled: '',
          redo_disabled: 'vf-signature-redo-disabled',
          clearWrapper: 'vf-signature-clear-wrapper',
          clear: 'vf-signature-clear',
          $wrapper: (classes, { isDisabled, readonly, Size }) => ([
            classes.wrapper,
            classes[`wrapper_${Size}`],
            isDisabled ? classes.wrapper_disabled : classes.wrapper_enabled,
            readonly ? classes.wrapper_readonly : null,
          ]),
          $loadedWrapper: (classes, { isDisabled }) => ([
            classes.loadedWrapper,
            isDisabled ? classes.loadedWrapper_disabled : classes.loadedWrapper_enabled,
          ]),
          $innerWrapper: (classes, { isDisabled }) => ([
            classes.innerWrapper,
            isDisabled ? classes.innerWrapper_disabled : classes.innerWrapper_enabled,
          ]),
          $input: (classes, { invertColors, color }) => ([
            classes.input,
            invertColors.indexOf(color) !== -1 ? classes.input_invert : null,
          ]),
          $uploadContainer: (classes, { dragging }) => ([
            classes.uploadContainer,
            dragging ? classes.uploadContainer_dragging : classes.uploadContainer_not_dragging,
          ]),
          $uploadWrapper: (classes, { processing }) => ([
            classes.uploadWrapper,
            processing ? classes.uploadWrapper_processing : null,
          ]),
          $pad: (classes, { invertColors, color }) => ([
            classes.pad,
            invertColors.indexOf(color) !== -1 ? classes.pad_invert : null,
          ]),
          $color: (classes, { color, invertColors, mode }) => (c) => ([
            classes.color,
            c === color ? classes.color_active : classes.color_inactive,
            invertColors.indexOf(c) !== -1 && mode !== 'upload' ? classes.color_invert : null,
          ]),
          $undo: (classes, { undosLeft }) => ([
            classes.undo,
            undosLeft ? classes.undo_enabled : classes.undo_disabled,
          ]),
          $redo: (classes, { redos }) => ([
            classes.redo,
            redos.length ? classes.redo_enabled : classes.redo_disabled,
          ]),
        }
      }
    },
  }
</script>

<style lang="scss">
  .vf-signature {
    position: relative;
    font-family: inherit;
    transition-property: box-shadow, color, background-color, border-color;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 200ms;
    border-style: solid;
    border-width: var(--vf-border-width-input-t) var(--vf-border-width-input-r) var(--vf-border-width-input-b) var(--vf-border-width-input-l);
    
    background-color: var(--vf-bg-input);
    color: var(--vf-color-input);
    border-color: var(--vf-border-color-input);

    font-size: var(--vf-font-size);
    line-height: var(--vf-line-height);
    letter-spacing: var(--vf-letter-spacing);
    border-radius: var(--vf-radius-large);

    &:focus {
      outline: var(--vf-ring-width) solid var(--vf-ring-color);
      border-color: var(--vf-border-color-input-focus);
    }

    &.vf-signature-sm {
      font-size: var(--vf-font-size-sm);
      line-height: var(--vf-line-height-sm);
      letter-spacing: var(--vf-letter-spacing-sm);
      border-radius: var(--vf-radius-large-sm);
    }

    &.vf-signature-lg {
      font-size: var(--vf-font-size-lg);
      line-height: var(--vf-line-height-lg);
      letter-spacing: var(--vf-letter-spacing-lg);
      border-radius: var(--vf-radius-large-lg);
    } 

    &.vf-signature-disabled {
      background-color: var(--vf-bg-disabled);
      color: var(--vf-color-disabled);
      cursor: not-allowed;
      pointer-events: none;
    }

    &.vf-signature-readonly {
      pointer-events: none;
    }
  }

  .vf-signature-line {
    position: absolute;
    top: 50%;
    left: 1.5rem;
    right: 1.5rem;
    border-color: var(--vf-border-color-signature-hr);
  }

  .vf-signature-loaded-wrapper {
    position: absolute;
    left: 2.25rem;
    right: 2.25rem;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &.vf-signature-loaded-wrapper-disabled {
      opacity: 0.5;
    }
  }

  .vf-signature-loaded-img {
    
  }

  .vf-signature-inner-wrapper {
    &.vf-signature-inner-wrapper-disabled {
      opacity: 0.5;
    }
  }

  .vf-signature-input {
    background: transparent;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    padding: 0 2.25rem 0 0;
    text-align: center;
    text-indent: 2.25rem;
    transition-property: box-shadow, color, background-color, border-color;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 200ms;
    height: 8.5rem;
  }

  .vf-signature-placeholder {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 50%;
    transform: translateY(50%);
    pointer-events: none;
    user-select: none;
    color: var(--vf-color-placeholder);
    text-align: center;
  }

  .vf-signature-upload-container {
    position: absolute;
    left: 2.25rem;
    right: 2.25rem;
    bottom: 50%;
    transform: translateY(50%);
    transition-property: opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 200ms;

    &.vf-signature-upload-container-dragging {
      opacity: 0.5;
    }
  }

  .vf-signature-upload-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    &.vf-signature-upload-wrapper-processing {
      opacity: 0.6;
      pointer-events: none;
    }
  }

  .vf-signature-dnd-text {
    color: var(--vf-text-700);
  }

  .vf-signature-upload-preview {
    width: 100%;
    margin: 0 auto;
  }

  .vf-signature-pad {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
  }

  .vf-signature-colors {
    position: absolute;
    bottom: 1.25rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }

  .vf-signature-color {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 200ms;
    cursor: pointer;
    outline: none;
    border-radius: 50%;

    &:hover,
    &.vf-signature-color-active {
      transform: scale(1.4);
    }

    &:focus-visible {
      outline: var(--vf-ring-width) solid var(--vf-ring-color);
    }
  }

  .vf-signature-actions {
    position: absolute;
    top: 0.5rem;
    left: 0.75rem;
    right: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
    opacity: 0.5;
    transition-property: opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 200ms;
    z-index: 1;

    &:hover {
      opacity: 1;
    }
  }

  .vf-signature-undos-wrapper {
    position: absolute;
    right: 0.75rem;
    top: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
  }

  .vf-signature-undo,
  .vf-signature-redo {
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    mask-position: center center;
    -webkit-mask-position: center center;
    mask-size: contain;
    -webkit-mask-size: contain;
    background-color: var(--vf-bg-icon);
    cursor: pointer;
    width: 0.75rem;
    height: 0.75rem;

    &:focus-visible {
      opacity: 0.8;
    }
  }

  .vf-signature-undo {
    mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M255.545 8c-66.269.119-126.438 26.233-170.86 68.685L48.971 40.971C33.851 25.851 8 36.559 8 57.941V192c0 13.255 10.745 24 24 24h134.059c21.382 0 32.09-25.851 16.971-40.971l-41.75-41.75c30.864-28.899 70.801-44.907 113.23-45.273 92.398-.798 170.283 73.977 169.484 169.442C423.236 348.009 349.816 424 256 424c-41.127 0-79.997-14.678-110.63-41.556-4.743-4.161-11.906-3.908-16.368.553L89.34 422.659c-4.872 4.872-4.631 12.815.482 17.433C133.798 479.813 192.074 504 256 504c136.966 0 247.999-111.033 248-247.998C504.001 119.193 392.354 7.755 255.545 8z'%3e%3c/path%3e%3c/svg%3e");
    -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M255.545 8c-66.269.119-126.438 26.233-170.86 68.685L48.971 40.971C33.851 25.851 8 36.559 8 57.941V192c0 13.255 10.745 24 24 24h134.059c21.382 0 32.09-25.851 16.971-40.971l-41.75-41.75c30.864-28.899 70.801-44.907 113.23-45.273 92.398-.798 170.283 73.977 169.484 169.442C423.236 348.009 349.816 424 256 424c-41.127 0-79.997-14.678-110.63-41.556-4.743-4.161-11.906-3.908-16.368.553L89.34 422.659c-4.872 4.872-4.631 12.815.482 17.433C133.798 479.813 192.074 504 256 504c136.966 0 247.999-111.033 248-247.998C504.001 119.193 392.354 7.755 255.545 8z'%3e%3c/path%3e%3c/svg%3e");

    &.vf-signature-undo-disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  .vf-signature-redo {
    mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z'%3e%3c/path%3e%3c/svg%3e");
    -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z'%3e%3c/path%3e%3c/svg%3e");

    &.vf-signature-redo-disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  .vf-signature-clear-wrapper {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 1rem;
    font-size: 14px;
  }

  .vf-signature-clear {
    mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
    mask-position: center;
    -webkit-mask-position: center;
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    mask-size: contain;
    -webkit-mask-size: contain;
    background-color: var(--vf-color-input);
    width: 0.75rem;
    height: 1rem;
    padding: 1px 0;
    box-sizing: content-box !important;
    display: inline-block;
    cursor: pointer;

    &:focus-visible {
      opacity: 0.8;
    }
  }

  .dark {
    .vf-signature-input-invert,
    .vf-signature-pad-invert,
    .vf-signature-color-invert {
      filter: invert(1);
    }
    
    .vf-signature-dnd-text {
      color: var(--vf-dark-200);
    }
    
    .vf-signature-undo,
    .vf-signature-redo {
      background: var(--vf-dark-300);
    }
  }

  [dir="rtl"] {
    .vf-signature-input {
      padding: 0 0 0 2.25rem;
    }

    .vf-signature-undos-wrapper {
      right: auto;
      left: 0.75rem;
    }
  }
</style>