<script>
  import FilePreview from './../../../../blank/templates/elements/partials/FilePreview.vue'

  export default {
    name: 'FilePreview',
    render: FilePreview.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-file-preview',
          container_sm: 'vf-file-preview-sm',
          container_md: '',
          container_lg: 'vf-file-preview-lg',
          wrapper: 'vf-file-preview-wrapper',
          file: 'vf-file-preview-file',
          filenameLink: 'vf-file-preview-filename-link',
          filenameStatic: 'vf-file-preview-filename',
          actions: 'vf-file-preview-actions',
          percent: 'vf-file-preview-percent',
          upload: 'vf-file-preview-upload',
          progressBar: 'vf-file-preview-progress-bar',
          progress: 'vf-file-preview-progress',
          warning: 'vf-file-preview-warning',
          warningIcon: 'vf-file-preview-warning-icon',
          uploaded: 'vf-file-preview-uploaded',
          uploadedIcon: 'vf-file-preview-uploaded-icon',
          remove: 'vf-file-preview-remove',
          removeIcon: 'vf-file-preview-remove-icon',
          assistiveText: 'vf-assistive-text',
          $container: (classes, { Size }) => ([
            classes.container,
            classes[`container_${Size}`],
          ])
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-file-preview {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    min-height: var(--vf-min-height-input);
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;

    &:hover {
      .vf-file-preview-uploaded,
      .vf-file-preview-warning,
      .vf-file-preview-percent {
        display: none;
      }

      .vf-file-preview-remove {
        display: inline-block;
      }
    }

    &.vf-file-preview-sm {
      padding-top: calc(var(--vf-py-input-sm) + var(--vf-border-width-input-t));
      min-height: var(--vf-min-height-input-sm);
    }

    &.vf-file-preview-lg {
      padding-top: calc(var(--vf-py-input-lg) + var(--vf-border-width-input-t));
      min-height: var(--vf-min-height-input-lg);
    }
  }

  .vf-file-preview-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .vf-file-preview-file {
    display: flex;
    align-items: center;
  }

  .vf-file-preview-filename-link {
    text-decoration: none;
    color: inherit;

    &:hover, &:focus, &:active {
      color: inherit;
    }

    &:hover {
      text-decoration: underline;
    }
  }

  .vf-file-preview-actions {
    display: flex;
    align-items: center;
  }

  .vf-file-preview-upload {
    font-size: 0.75rem;
    margin-left: 0.5rem;
    white-space: nowrap;
    padding: 0.0625rem 0.4375rem;
    background: var(--vf-primary);
    color: var(--vf-color-on-primary);
    border-radius: var(--vf-radius-small);
    text-decoration: none;
    transition: .15s;
    outline: 0px solid var(--vf-ring-color);
    outline-offset: 0;

    &:hover {
      transform: scale(1.05);
    }

    &:focus {
      outline: var(--vf-ring-width) solid var(--vf-ring-color);
    }
  }

  .vf-file-preview-percent {
    font-size: 0.875rem;
    color: var(--vf-color-muted);
    margin-left: 0.375rem;
  }

  .vf-file-preview-progress-bar {
    margin-top: 0.625rem;
    border-radius: 0;
    height: 0.1875rem;
    background: var(--vf-bg-passive);
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  .vf-file-preview-progress {
    border-radius: 0;
    height: 100%;
    background: var(--vf-primary);
    transition: .6s ease;
  }

  .vf-file-preview-warning, 
  .vf-file-preview-uploaded, 
  .vf-file-preview-remove {
    display: flex;
    width: 1rem;
    height: 1rem;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
  }

  .vf-file-preview-warning-icon, 
  .vf-file-preview-uploaded-icon, 
  .vf-file-preview-remove-icon {
    width: 100%;
    height: 100%;
    display: block;
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    mask-position: center center;
    -webkit-mask-position: center center;
  }

  .vf-file-preview-remove {
    display: none;
    margin-left: 0.375rem;
    background-color: var(--vf-bg-passive);
    transition: .15s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  .vf-file-preview-remove-icon {
    mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
    mask-size: 0.75rem 0.75rem;
    -webkit-mask-size: 0.75rem 0.75rem;
    background-color: var(--vf-color-passive);
  }

  .vf-file-preview-uploaded {
    background-color: var(--vf-bg-success);
  }

  .vf-file-preview-uploaded-icon {
    mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E");
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E");
    mask-size: 0.625rem 0.625rem;
    -webkit-mask-size: 0.625rem 0.625rem;
    background-color: var(--vf-color-success);
  }

  .vf-file-preview-warning {
    background-color: var(--vf-bg-danger);
  }

  .vf-file-preview-warning-icon {
    mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 192 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z'%3E%3C/path%3E%3C/svg%3E");
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 192 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z'%3E%3C/path%3E%3C/svg%3E");
    mask-size: 0.625rem 0.625rem;
    -webkit-mask-size: 0.625rem 0.625rem;
    background-color: var(--vf-color-danger);
  }

  .vf-file-removing {
    .vf-file-preview {
      opacity: 0.6;
    }
  }
</style>