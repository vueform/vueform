<script>
  import FileSlotFilePreview from './../../../../blank/components/elements/slots/FileSlotFilePreview'

  export default {
    name: 'FileSlotFilePreview',
    render: FileSlotFilePreview.render,
    data() {
      return {
        defaultClasses: {
          container: 'vf-file-preview-file',
          wrapper: 'vf-file-preview-file-wrapper',
          file: 'vf-file-preview-file-file',
          filenameLink: 'vf-file-preview-file-filename-link',
          filenameStatic: 'vf-file-preview-file-filename',
          actions: 'vf-file-preview-file-actions',
          percent: 'vf-file-preview-file-percent',
          upload: 'vf-file-preview-file-upload',
          progressBar: 'vf-file-preview-file-progress-bar',
          progress: 'vf-file-preview-file-progress',
          warning: 'vf-file-preview-file-warning',
          warningIcon: 'vf-file-preview-file-warning-icon',
          uploaded: 'vf-file-preview-file-uploaded',
          uploadedIcon: 'vf-file-preview-file-uploaded-icon',
          remove: 'vf-file-preview-file-remove',
          removeIcon: 'vf-file-preview-file-remove-icon',
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-file-preview-file {
    padding-top: calc(var(--vf-input-py) + var(--vf-border-width));
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    min-height: var(--vf-input-min-height);
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    position: relative;

    &:hover {
      .vf-file-preview-file-uploaded,
      .vf-file-preview-file-warning,
      .vf-file-preview-file-percent {
        display: none;
      }

      .vf-file-preview-file-remove {
        display: inline-block;
      }
    }
  }

  .vf-file-preview-file-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .vf-file-preview-file-file {
    display: flex;
    align-items: center;
  }

  .vf-file-preview-file-filename-link {
    text-decoration: none;
    color: inherit;

    &:hover, &:focus, &:active {
      color: inherit;
    }

    &:hover {
      text-decoration: underline;
    }
  }

  .vf-file-preview-file-actions {
    display: flex;
    align-items: center;
  }

  .vf-file-preview-file-upload {
    font-size: 0.75rem;
    margin-left: 0.5rem;
    white-space: nowrap;
    background: #FFFFFF;
    padding: 0.0625rem 0.4375rem;
    background: var(--vf-primary);
    color: #FFFFFF;
    border-radius: calc(var(--vf-border-radius) * 0.75);
    text-decoration: none;
    transition: .15s;
    outline: none;

    &:hover {
      opacity: 0.9;
    }

    &:focus {
      box-shadow: 0px 0px 0px var(--vf-ring-width) var(--vf-ring-color);
    }
  }

  .vf-file-preview-file-percent {
    font-size: 0.875rem;
    color: var(--vf-gray-500);
    margin-left: 0.375rem;
  }

  .vf-file-preview-file-progress-bar {
    margin-top: 0.625rem;
    border-radius: 0;
    height: 0.1875rem;
    background: var(--vf-gray-200);
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  .vf-file-preview-file-progress {
    border-radius: 0;
    height: 100%;
    background: var(--vf-primary);
    transition: .6s ease;
  }

  .vf-file-preview-file-warning, 
  .vf-file-preview-file-uploaded, 
  .vf-file-preview-file-remove {
    display: flex;
    width: 1rem;
    height: 1rem;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
  }

  .vf-file-preview-file-warning-icon, 
  .vf-file-preview-file-uploaded-icon, 
  .vf-file-preview-file-remove-icon {
    width: 100%;
    height: 100%;
    display: block;
    mask-repeat: no-repeat;
    mask-position: center center;
  }

  .vf-file-preview-file-remove {
    display: none;
    margin-left: 0.375rem;
    background-color: var(--vf-gray-200);
    transition: .15s;

    &:hover {
      background-color: var(--vf-gray-300);
    }
  }

  .vf-file-preview-file-remove-icon {
    mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
    mask-size: 0.75rem 0.75rem;
    background-color: var(--vf-gray-500);
  }

  .vf-file-preview-file-uploaded {
    background-color: var(--vf-success-bg);
  }

  .vf-file-preview-file-uploaded-icon {
    mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E");
    mask-size: 0.625rem 0.625rem;
    background-color: var(--vf-success-color);
  }

  .vf-file-preview-file-warning {
    background-color: var(--vf-error-bg);
  }

  .vf-file-preview-file-warning-icon {
    mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 192 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z'%3E%3C/path%3E%3C/svg%3E");
    mask-size: 0.625rem 0.625rem;
    background-color: var(--vf-error-color);
  }

  .is-removing {
    .vf-file-preview-file {
      opacity: 0.6;
    }
  }
</style>