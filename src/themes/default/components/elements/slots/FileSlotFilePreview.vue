<script>
  import FileSlotFilePreview from './../../../../blank/components/elements/slots/FileSlotFilePreview'

  export default {
    name: 'FileSlotFilePreview',
    render: FileSlotFilePreview.render,
    data() {
      return {
        defaultClasses: {
          container: 'form-file-preview-file',
          wrapper: 'form-file-preview-file-wrapper',
          file: 'form-file-preview-file-file',
          filenameLink: 'form-file-preview-file-filename-link',
          filenameStatic: 'form-file-preview-file-filename',
          actions: 'form-file-preview-file-actions',
          percent: 'form-file-preview-file-percent',
          upload: 'form-file-preview-file-upload',
          remove: 'form-file-preview-file-remove',
          progressBar: 'form-file-preview-file-progress-bar',
          progress: 'form-file-preview-file-progress',
          iconWarning: 'form-file-preview-file-icon-warning',
          iconUploaded: 'form-file-preview-file-icon-uploaded',
          iconRemove: 'form-file-preview-file-icon-remove',
        }
      }
    }
  }
</script>

<style lang="scss">
  .form-file-preview-file {
    padding-top: calc(var(--form-input-py) + var(--form-border-width));
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    min-height: var(--form-input-min-height);
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    position: relative;

    &:hover {
      .form-file-preview-file-icon-uploaded,
      .form-file-preview-file-icon-warning,
      .form-file-preview-file-percent {
        display: none;
      }

      .form-file-preview-file-remove {
        display: inline-block;
      }
    }
  }

  .form-file-preview-file-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .form-file-preview-file-file {
    display: flex;
    align-items: center;
  }

  .form-file-preview-file-filename-link {
    text-decoration: none;
    color: inherit;

    &:hover, &:focus, &:active {
      color: inherit;
    }

    &:hover {
      text-decoration: underline;
    }
  }

  .form-file-preview-file-actions {
    display: flex;
    align-items: center;
  }

  .form-file-preview-file-upload {
    font-size: 0.75rem;
    margin-left: 0.5rem;
    white-space: nowrap;
    background: #FFFFFF;
    padding: 0.0625rem 0.4375rem;
    background: var(--form-primary);
    color: #FFFFFF;
    border-radius: calc(var(--form-border-radius) * 0.75);
    text-decoration: none;
    transition: .15s;
    outline: none;

    &:hover {
      opacity: 0.9;
    }

    &:focus {
      box-shadow: 0px 0px 0px var(--form-ring-width) var(--form-ring-color);
    }
  }

  .form-file-preview-file-percent {
    font-size: 0.875rem;
    color: var(--form-gray-500);
    margin-left: 0.375rem;
  }

  .form-file-preview-file-progress-bar {
    margin-top: 0.625rem;
    border-radius: 0;
    height: 0.1875rem;
    background: var(--form-gray-200);
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  .form-file-preview-file-progress {
    border-radius: 0;
    height: 100%;
    background: var(--form-primary);
    transition: .6s ease;
  }

  [class^="form-file-preview-file-icon-"] {
    display: flex;
    width: 1rem;
    height: 1rem;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
  }

  .form-file-preview-file-remove {
    display: none;
    margin-left: 0.375rem;
    background-color: var(--form-gray-200);
    border-radius: 999px;
    transition: .15s;

    &:hover {
      background-color: var(--form-gray-300);
    }
  }

  .form-file-preview-file-icon-remove {
    mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
    mask-size: 0.75rem 0.75rem;
    mask-repeat: no-repeat;
    mask-position: center center;
    background-color: var(--form-gray-500);
  }

  .form-file-preview-file-icon-uploaded {
    background-color: var(--form-success-bg);

    &:after {
      content: "";
      width: 100%;
      height: 100%;
      display: block;
      mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E");
      mask-size: 0.625rem 0.625rem;
      mask-repeat: no-repeat;
      mask-position: center center;
      background-color: var(--form-success-color);
    }
  }

  .form-file-preview-file-icon-warning {
    background-color: var(--form-error-bg);

    &:after {
      content: "";
      width: 100%;
      height: 100%;
      display: block;
      mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 192 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z'%3E%3C/path%3E%3C/svg%3E");
      mask-size: 0.625rem 0.625rem;
      mask-repeat: no-repeat;
      mask-position: center center;
      background-color: var(--form-error-color);
    }
  }

  .is-removing {
    .form-file-preview-file {
      opacity: 0.6;
    }
  }
</style>