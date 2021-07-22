<script>
  import FileSlotImagePreview from './../../../../blank/components/elements/slots/FileSlotImagePreview'

  export default {
    name: 'FileSlotImagePreview',
    render: FileSlotImagePreview.render,
    data() {
      return {
        defaultClasses: {
          container: 'form-file-preview-image',
          wrapper: 'form-file-preview-image-wrapper',
          image: 'form-file-preview-image-image',
          image_link: '',
          image_static: '',
          img: 'form-file-preview-image-img',
          file: 'form-file-preview-image-file',
          filenameLink: 'form-file-preview-image-filename-link',
          filenameStatic: 'form-file-preview-image-filename',
          actions: 'form-file-preview-image-actions',
          percent: 'form-file-preview-image-percent',
          upload: 'form-file-preview-image-upload',
          remove: 'form-file-preview-image-remove',
          progressBar: 'form-file-preview-image-progress-bar',
          progress: 'form-file-preview-image-progress',
          iconWarning: 'form-file-preview-image-icon-warning',
          iconUploaded: 'form-file-preview-image-icon-uploaded',
          iconFile: 'form-file-preview-image-icon-file',
          iconRemove: 'form-file-preview-image-icon-remove',
        }
      }
    }
  }
</script>

<style lang="scss">
  .form-file-preview-image {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    min-height: var(--form-input-min-height);
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    position: relative;

    &:hover {
      .form-file-preview-image-icon-uploaded,
      .form-file-preview-image-icon-warning,
      .form-file-preview-image-percent {
        display: none;
      }

      .form-file-preview-image-remove {
        display: inline-block;
      }
    }
  }

  .form-file-preview-image-image {
    flex: 0 0 auto;
    font-size: 0;
    background: #F3F4F6;
    border-radius: var(--form-border-radius);
    outline: none;

    &:focus {
      box-shadow: 0px 0px 0px var(--form-ring-width) var(--form-ring-color);
    }
  }

  .form-file-preview-image-img {
    object-fit: cover;
    width: var(--form-input-min-height);
    height: var(--form-input-min-height);
    border-radius: var(--form-border-radius);
    border: 0;

    &[src=""], &[src="data:"], &:not([src]) {
      opacity: 0;
    }
  }

  .form-file-preview-image-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .form-file-preview-image-file {
    display: flex;
    align-items: center;
    margin-left: 0.625rem;
    flex: 1 1 auto;
  }

  .form-file-preview-image-filename-link {
    text-decoration: none;
    color: inherit;

    &:hover, &:focus, &:active {
      color: inherit;
    }

    &:hover {
      text-decoration: underline;
    }
  }

  .form-file-preview-image-actions {
    display: flex;
    align-items: center;
  }

  .form-file-preview-image-upload {
    font-size: 12px;
    margin-left: 0.5rem;
    white-space: nowrap;
    background: #ffffff;
    padding: 1px 7px;
    background: var(--form-primary);
    color: #ffffff;
    border-radius: calc(var(--form-border-radius) * 0.75);
    text-decoration: none;
    transition: .15s;
    outline: none;

    &:hover {
      background: var(--form-primary-darker);
    }

    &:focus {
      box-shadow: 0px 0px 0px var(--form-ring-width) var(--form-ring-color);
    }
  }

  .form-file-preview-image-percent {
    font-size: 14px;
    color: #6B7280;
    margin-left: 0.375rem;
  }

  .form-file-preview-image-progress-bar {
    margin-top: 10px;
    border-radius: 0;
    height: 3px;
    background: #E5E7EB;
    position: absolute;
    bottom: 0;
    left: calc(var(--form-input-min-height) + 0.625rem);
    right: 0;
  }

  .form-file-preview-image-progress {
    border-radius: 0;
    display: block;
    height: 100%;
    background: var(--form-primary);
    transition: .6s ease;
  }

  [class^="form-file-preview-image-icon-"] {
    display: flex;
    width: 16px;
    height: 16px;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
    background-position: center center;
    border-radius: 999px;
  }

  .form-file-preview-image-remove {
    display: none;
    margin-left: 0.375rem;
    background-color: #E5E7EB;
    border-radius: 999px;
    transition: .15s;

    &:hover {
      background-color: #D1D5DB;
    }
  }

  .form-file-preview-image-icon-remove {
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='%236B7280' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
    background-size: 12px 12px;
  }

  .form-file-preview-image-icon-uploaded {
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='%2310B981' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E");
    background-color: #D2F2E7;
    background-size: 10px 10px;
  }

  .form-file-preview-image-icon-warning {
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 192 512' fill='%23EF4444' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z'%3E%3C/path%3E%3C/svg%3E");
    background-color: #FCDCDC;
    background-size: 10px 10px;
  }x

  .is-removing {
    .form-file-preview-image {
      opacity: 0.6;
    }
  }
</style>