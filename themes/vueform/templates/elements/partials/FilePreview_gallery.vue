<script>
  import GalleryPreview from './../../../../blank/templates/elements/partials/FilePreview_gallery.vue'

  export default {
    name: 'GalleryPreview',
    render: GalleryPreview.render,
    data() {
      return {
        merge: true,
        defaultClasses: { 
          container: 'vf-file-preview-gallery',
          container_sm: 'vf-file-preview-gallery-sm',
          container_md: '',
          container_lg: 'vf-file-preview-gallery-lg',
          image: 'vf-file-preview-gallery-image',
          image_sm: 'vf-file-preview-gallery-image-sm',
          image_md: '',
          image_lg: 'vf-file-preview-gallery-image-lg',
          image_link: '',
          image_static: '',
          img: 'vf-file-preview-gallery-img',
          img_sm: 'vf-file-preview-gallery-img-sm',
          img_md: '',
          img_lg: 'vf-file-preview-gallery-img-lg',
          overlay: 'vf-file-preview-gallery-overlay',
          overlay_sm: 'vf-file-preview-gallery-overlay-sm',
          overlay_md: '',
          overlay_lg: 'vf-file-preview-gallery-overlay-lg',
          upload: 'vf-file-preview-gallery-upload',
          progressBar: 'vf-file-preview-gallery-progress-bar',
          progress: 'vf-file-preview-gallery-progress',
          warning: 'vf-file-preview-gallery-warning',
          warningIcon: 'vf-file-preview-gallery-warning-icon',
          uploaded: 'vf-file-preview-gallery-uploaded',
          uploadedIcon: 'vf-file-preview-gallery-uploaded-icon',
          remove: 'vf-file-preview-gallery-remove',
          removeIcon: 'vf-file-preview-gallery-remove-icon',
          assistiveText: 'vf-assistive-text',
          $container: (classes, { Size }) => ([
            classes.container,
            classes[`container_${Size}`],
          ]),
          $image: (classes, { Size }) => ([
            classes.image,
            classes[`image_${Size}`],
          ]),
          $img: (classes, { Size }) => ([
            classes.img,
            classes[`img_${Size}`],
          ]),
          $overlay: (classes, { Size }) => ([
            classes.overlay,
            classes[`overlay_${Size}`],
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-file-preview-gallery {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    transition: .2s background;
    width: var(--vf-gallery-size);
    height: var(--vf-gallery-size);
    position: relative;

    &:hover {
      .vf-file-preview-gallery-overlay {
        opacity: 1;
        visibility: visible;
      }

      .vf-file-preview-gallery-remove {
        opacity: 1;
        visibility: visible;
      }
    }

    &.vf-file-preview-gallery-sm {
      width: var(--vf-gallery-size-sm);
      height: var(--vf-gallery-size-sm);
    }

    &.vf-file-preview-gallery-lg {
      width: var(--vf-gallery-size-lg);
      height: var(--vf-gallery-size-lg);
    }
  }

  .vf-file-preview-gallery-overlay {
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
    padding: 0.75rem;
    border-radius: var(--vf-radius-gallery);

    &.vf-file-preview-gallery-overlay-sm {
      border-radius: var(--vf-radius-gallery-sm);
    }

    &.vf-file-preview-gallery-overlay-lg {
      border-radius: var(--vf-radius-gallery-lg);
    }
  }

  .vf-file-preview-gallery-upload {
    font-size: 0.75rem;
    white-space: nowrap;
    background: #FFFFFF;
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

  .vf-file-preview-gallery-image {
    width: 100%;
    height: 100%;
    font-size: 0;
    background: var(--vf-bg-passive);
    border-radius: var(--vf-radius-gallery);
    outline: none;

    &.vf-file-preview-gallery-image-sm {
      border-radius: var(--vf-radius-gallery-sm);
    }

    &.vf-file-preview-gallery-image-lg {
      border-radius: var(--vf-radius-gallery-lg);
    }
  }

  .vf-file-preview-gallery-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--vf-radius-gallery);

    &[src=""], &[src="data:"], &:not([src]) {
      opacity: 0;
    }

    &.vf-file-preview-gallery-img-sm {
      border-radius: var(--vf-radius-gallery-sm);
    }

    &.vf-file-preview-gallery-img-lg {
      border-radius: var(--vf-radius-gallery-lg);
    }
  }

  .vf-file-preview-gallery-progress-bar {
    border-radius: 0;
    height: 0.1875rem;
    position: absolute;
    left: 0.1875rem;
    bottom: 0.1875rem;
    z-index: 1;
    background: #FFFFFF;
    right: 0.1875rem;
  }

  .vf-file-preview-gallery-progress {
    border-radius: 0;
    height: 100%;
    background: var(--vf-primary);
    transition: .6s ease;
  }

  .vf-file-preview-gallery-remove,
  .vf-file-preview-gallery-uploaded,
  .vf-file-preview-gallery-warning {
    display: flex;
    width: 1rem;
    height: 1rem;
    align-items: center;
    justify-content: center;
  }

  .vf-file-preview-gallery-remove-icon,
  .vf-file-preview-gallery-uploaded-icon,
  .vf-file-preview-gallery-warning-icon {
    width: 100%;
    height: 100%;
    display: block;
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    mask-position: center center;
    -webkit-mask-position: center center;
  }

  .vf-file-preview-gallery-remove {
    position: absolute;
    right: 0.1875rem;
    top: 0.1875rem;
    opacity: 0;
    visibility: hidden;
    background-color: var(--vf-bg-passive);
    border-radius: 999px;
    transition: .15s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  .vf-file-preview-gallery-remove-icon {
    mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
    mask-size: 0.75rem 0.75rem;
    -webkit-mask-size: 0.75rem 0.75rem;
    background-color: var(--vf-color-passive);
  }

  .vf-file-preview-gallery-uploaded {
    position: absolute;
    right: 0.1875rem;
    bottom: 0.1875rem;
    border-radius: 999px;
    background-color: var(--vf-bg-success);
  }

  .vf-file-preview-gallery-uploaded-icon {
    mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E");
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E");
    mask-size: 0.625rem 0.625rem;
    -webkit-mask-size: 0.625rem 0.625rem;
    background-color: var(--vf-color-success);
  }

  .vf-file-preview-gallery-warning {
    position: absolute;
    right: 0.1875rem;
    bottom: 0.1875rem;
    border-radius: 999px;
    background-color: var(--vf-bg-danger);
  }

  .vf-file-preview-gallery-warning-icon {
    mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 192 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z'%3E%3C/path%3E%3C/svg%3E");
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 192 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z'%3E%3C/path%3E%3C/svg%3E");
    mask-size: 0.625rem 0.625rem;
    -webkit-mask-size: 0.625rem 0.625rem;
    background-color: var(--vf-color-danger);
  }

  .vf-file-removing {
    .vf-file-preview-gallery {
      opacity: 0.6;
    }
  }

  .is-sorting, .vf-gallery.is-disabled {
    .vf-file-preview-gallery {
      &:hover {
        .vf-file-preview-gallery-overlay {
          opacity: 0;
          visibility: hidden;
        }

        .vf-file-preview-gallery-remove {
          opacity: 0;
          visibility: hidden;
        }
      }
    }
  }
</style>