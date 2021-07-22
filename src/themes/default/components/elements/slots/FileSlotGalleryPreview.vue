<script>
  import FileSlotGalleryPreview from './../../../../blank/components/elements/slots/FileSlotGalleryPreview'

  export default {
    name: 'FileSlotGalleryPreview',
    render: FileSlotGalleryPreview.render,
    data() {
      return {
        defaultClasses: { 
          container: 'form-file-preview-gallery',
          image: 'form-file-preview-gallery-image',
          image_link: '',
          image_static: '',
          img: 'form-file-preview-gallery-img',
          overlay: 'form-file-preview-gallery-overlay',
          upload: 'form-file-preview-gallery-upload',
          remove: 'form-file-preview-gallery-remove',
          progressBar: 'form-file-preview-gallery-progress-bar',
          progress: 'form-file-preview-gallery-progress',
          iconWarning: 'form-file-preview-gallery-icon-warning',
          iconUploaded: 'form-file-preview-gallery-icon-uploaded',
          iconRemove: 'form-file-preview-gallery-icon-remove',
        }
      }
    }
  }
</script>

<style lang="scss">
  .form-file-preview-gallery {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    transition: .2s background;
    width: var(--form-gallery-size);
    height: var(--form-gallery-size);
    position: relative;

    &:hover {
      .form-file-preview-gallery-overlay {
        opacity: 1;
        visibility: visible;
      }

      .form-file-preview-gallery-remove {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  .form-file-preview-gallery-overlay {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(255,255,255,0.5);
    transition: .3s;
    opacity: 0;
    visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 12px;
    border-radius: var(--form-border-radius);
  }

  .form-file-preview-gallery-upload {
    font-size: 12px;
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

  .form-file-preview-gallery-image {
    width: 100%;
    height: 100%;
    font-size: 0;
    background: #F3F4F6;
    border-radius: var(--form-border-radius);
    outline: none;
  }

  .form-file-preview-gallery-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--form-border-radius);

    &[src=""], &[src="data:"], &:not([src]) {
      opacity: 0;
    }
  }

  .form-file-preview-gallery-progress-bar {
    border-radius: 0;
    height: 3px;
    position: absolute;
    left: 3px;
    bottom: 3px;
    z-index: 1;
    background: #fff;
    right: 3px;
  }

  .form-file-preview-gallery-progress {
    border-radius: 0;
    height: 100%;
    background: var(--form-primary);
    transition: .6s ease;
  }

  [class^="form-file-preview-gallery-icon-"] {
    display: flex;
    width: 16px;
    height: 16px;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .form-file-preview-gallery-remove {
    position: absolute;
    right: 3px;
    top: 3px;
    opacity: 0;
    visibility: hidden;
    background-color: #E5E7EB;
    border-radius: 999px;
    transition: .15s;

    &:hover {
      background-color: #D1D5DB;
    }
  }

  .form-file-preview-gallery-icon-remove {
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='%236B7280' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
    background-size: 0.75rem 0.75rem;
  }

  .form-file-preview-gallery-icon-uploaded {
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='%2310B981' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E");
    background-color: #A7F3D0;
    background-size: 0.625rem 0.625rem;
    position: absolute;
    right: 3px;
    bottom: 3px;
    border-radius: 999px;
  }

  .form-file-preview-gallery-icon-warning {
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 192 512' fill='%23EF4444' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z'%3E%3C/path%3E%3C/svg%3E");
    background-color: #FECACA;
    background-size: 0.625rem 0.625rem;
    position: absolute;
    right: 3px;
    bottom: 3px;
    border-radius: 999px;
  }

  .is-removing {
    .form-file-preview-gallery {
      opacity: 0.6;
    }
  }

  .is-sorting, .form-gallery.is-disabled {
    .form-file-preview-gallery {
      &:hover {
        .form-file-preview-gallery-overlay {
          opacity: 0;
          visibility: hidden;
        }

        .form-file-preview-gallery-remove {
          opacity: 0;
          visibility: hidden;
        }
      }
    }
  }
</style>