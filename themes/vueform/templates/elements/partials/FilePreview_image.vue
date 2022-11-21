<script>
  import ImagePreview from './../../../../blank/templates/elements/partials/FilePreview_image.vue'

  export default {
    name: 'ImagePreview',
    render: ImagePreview.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-file-preview-image',
          wrapper: 'vf-file-preview-image-wrapper',
          image: 'vf-file-preview-image-image',
          image_link: '',
          image_static: '',
          image_sm: 'vf-file-preview-image-image-sm',
          image_md: '',
          image_lg: 'vf-file-preview-image-image-lg',
          img: 'vf-file-preview-image-img',
          img_sm: 'vf-file-preview-image-img-sm',
          img_md: '',
          img_lg: 'vf-file-preview-image-img-lg',
          file: 'vf-file-preview-image-file',
          filenameLink: 'vf-file-preview-image-filename-link',
          filenameStatic: 'vf-file-preview-image-filename',
          actions: 'vf-file-preview-image-actions',
          percent: 'vf-file-preview-image-percent',
          upload: 'vf-file-preview-image-upload',
          progressBar: 'vf-file-preview-image-progress-bar',
          progressBar_sm: 'vf-file-preview-image-progress-bar-sm',
          progressBar_md: '',
          progressBar_lg: 'vf-file-preview-image-progress-bar-lg',
          progress: 'vf-file-preview-image-progress',
          warning: 'vf-file-preview-image-warning',
          warningIcon: 'vf-file-preview-image-warning-icon',
          uploaded: 'vf-file-preview-image-uploaded',
          uploadedIcon: 'vf-file-preview-image-uploaded-icon',
          remove: 'vf-file-preview-image-remove',
          removeIcon: 'vf-file-preview-image-remove-icon',
          assistiveText: 'vf-assistive-text',
          $image: (classes, { hasLink, Size }) => ([
            classes.image,
            classes[`image_${Size}`],
            hasLink ? classes.image_link : classes.image_static
          ]),
          $img: (classes, { Size }) => ([
            classes.img,
            classes[`img_${Size}`],
          ]),
          $progressBar: (classes, { Size }) => ([
            classes.progressBar,
            classes[`progressBar_${Size}`],
          ])
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-file-preview-image {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    position: relative;

    &:hover {
      .vf-file-preview-image-uploaded,
      .vf-file-preview-image-warning,
      .vf-file-preview-image-percent {
        display: none;
      }

      .vf-file-preview-image-remove {
        display: inline-block;
      }
    }
  }

  .vf-file-preview-image-image {
    display: flex;
    align-items: center;
    flex: 0 0 auto;
    background: var(--vf-bg-passive);
    border-radius: var(--vf-radius-image);
    outline: 0px solid var(--vf-ring-color);
    outline-offset: 0;
    box-shadow: var(--vf-shadow-input);

    &:focus {
      outline: var(--vf-ring-width) solid var(--vf-ring-color);
    }

    &.vf-file-preview-image-image-sm {
      border-radius: var(--vf-radius-image-sm);
    }

    &.vf-file-preview-image-image-lg {
      border-radius: var(--vf-radius-image-lg);
    }
  }

  .vf-file-preview-image-img {
    object-fit: cover;
    width: var(--vf-min-height-input);
    height: var(--vf-min-height-input);
    border-radius: var(--vf-radius-image);
    border: 0;

    &[src=""], &[src="data:"], &:not([src]) {
      opacity: 0;
    }

    &.vf-file-preview-image-img-sm {
      width: var(--vf-min-height-input-sm);
      height: var(--vf-min-height-input-sm);
      border-radius: var(--vf-radius-image-sm);
    }

    &.vf-file-preview-image-img-lg {
      width: var(--vf-min-height-input-lg);
      height: var(--vf-min-height-input-lg);
      border-radius: var(--vf-radius-image-lg);
    }
  }

  .vf-file-preview-image-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .vf-file-preview-image-file {
    display: flex;
    align-items: center;
    margin-left: 0.625rem;
    flex: 1 1 auto;
  }

  .vf-file-preview-image-filename-link {
    text-decoration: none;
    color: inherit;

    &:hover, &:focus, &:active {
      color: inherit;
    }

    &:hover {
      text-decoration: underline;
    }
  }

  .vf-file-preview-image-actions {
    display: flex;
    align-items: center;
  }

  .vf-file-preview-image-upload {
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

  .vf-file-preview-image-percent {
    font-size: 0.875rem;
    color: var(--vf-color-muted);
    margin-left: 0.375rem;
  }

  .vf-file-preview-image-progress-bar {
    margin-top: 0.625rem;
    border-radius: 0;
    height: 0.1875rem;
    background: var(--vf-bg-passive);
    position: absolute;
    bottom: 0;
    left: calc(var(--vf-min-height-input) + 0.625rem);
    right: 0;

    &.vf-file-preview-image-progress-bar-sm {
      left: calc(var(--vf-min-height-input-sm) + 0.625rem);
    }

    &.vf-file-preview-image-progress-bar-lg {
      left: calc(var(--vf-min-height-input-lg) + 0.625rem);
    }
  }

  .vf-file-preview-image-progress {
    border-radius: 0;
    display: block;
    height: 100%;
    background: var(--vf-primary);
    transition: .6s ease;
  }

  .vf-file-preview-image-warning, 
  .vf-file-preview-image-uploaded, 
  .vf-file-preview-image-remove {
    display: flex;
    width: 1rem;
    height: 1rem;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
  }

  .vf-file-preview-image-warning-icon, 
  .vf-file-preview-image-uploaded-icon, 
  .vf-file-preview-image-remove-icon {
    width: 100%;
    height: 100%;
    display: block;
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    mask-position: center center;
    -webkit-mask-position: center center;
  }

  .vf-file-preview-image-remove {
    display: none;
    margin-left: 0.375rem;
    background-color: var(--vf-bg-passive);
    transition: .15s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  .vf-file-preview-image-remove-icon {
    mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
    mask-size: 0.75rem 0.75rem;
    -webkit-mask-size: 0.75rem 0.75rem;
    background-color: var(--vf-color-passive);
  }

  .vf-file-preview-image-uploaded {
    background-color: var(--vf-bg-success);
  }

  .vf-file-preview-image-uploaded-icon {
    mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E");
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E");
    mask-size: 0.625rem 0.625rem;
    -webkit-mask-size: 0.625rem 0.625rem;
    background-color: var(--vf-color-success);
  }

  .vf-file-preview-image-warning {
    background-color: var(--vf-bg-danger);
  }

  .vf-file-preview-image-warning-icon {
    mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 192 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z'%3E%3C/path%3E%3C/svg%3E");
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 192 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z'%3E%3C/path%3E%3C/svg%3E");
    mask-size: 0.625rem 0.625rem;
    -webkit-mask-size: 0.625rem 0.625rem;
    background-color: var(--vf-color-danger);
  }

  .vf-file-removing {
    .vf-file-preview-image {
      opacity: 0.6;
    }
  }
</style>