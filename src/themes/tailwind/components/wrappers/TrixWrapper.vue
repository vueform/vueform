<script>
  import TrixWrapper from './../../../blank/components/wrappers/TrixWrapper'

  export default {
    name: 'TrixWrapper',
    render: TrixWrapper.render,
    data: TrixWrapper.data,
  }
</script>

<style lang="scss">
  trix-toolbar {
    @apply py-2 px-1.5 rounded flex-wrap md:flex-nowrap;

    .trix-button-row {
      @apply block md:flex -mb-1 md:mb-0 flex-nowrap justify-between overflow-x-auto;
    }

    .trix-button-group {
      @apply inline md:flex;
    }

    .trix-button-group-spacer {
      @apply hidden md:block flex-grow;
    }

    .trix-button {
      @apply relative mb-1 md:mb-0 text-gray-700 px-2 outline-none rounded whitespace-nowrap float-left;


      &.trix-active {
        @apply bg-gray-200;
      }

      &:not(.trix-active):hover {
        @apply bg-gray-100;
      }

      &:not(:disabled) {
        @apply cursor-pointer;
      }
    }

    .trix-button--icon {
      @apply w-10 h-6 text-xs indent-out;

      &::before {
        @apply absolute inset-0 inline-block opacity-60 bg-center bg-no-repeat bg-contain content-empty;
      }

      &.trix-active::before {
        @apply opacity-100;
      }

      &:disabled::before {
        @apply opacity-10;
      }
    }

    .trix-button--icon-attach::before {
      @apply bg-form-trix-attach top-0.5 bottom-0.5 my-0.5;
    }

    .trix-button--icon-bold::before {
      @apply bg-form-trix-bold top-0.5 bottom-0.5 my-0.5;
    }

    .trix-button--icon-italic::before {
      @apply bg-form-trix-italic top-0.5 bottom-0.5 my-0.5;
    }

    .trix-button--icon-link::before {
      @apply bg-form-trix-link top-0.5 bottom-0.5 my-0.5;
    }

    .trix-button--icon-strike::before {
      @apply bg-form-trix-strike top-0.5 bottom-0.5 my-0.5;
    }

    .trix-button--icon-quote::before {
      @apply bg-form-trix-quote top-1 bottom-1 my-px;
    }

    .trix-button--icon-heading-1::before {
      @apply bg-form-trix-heading top-0.5 bottom-0.5 my-0.5;
    }

    .trix-button--icon-code::before {
      @apply bg-form-trix-code top-1.5 bottom-1.5 my-px;
    }

    .trix-button--icon-bullet-list::before {
      @apply bg-form-trix-ul top-0.5 bottom-0.5 my-px;
    }

    .trix-button--icon-number-list::before {
      @apply bg-form-trix-ol top-0.5 bottom-0.5 my-px;
    }

    .trix-button--icon-undo::before {
      @apply bg-form-trix-undo top-1 bottom-1;
    }

    .trix-button--icon-redo::before {
      @apply bg-form-trix-redo top-1 bottom-1;
    }

    .trix-button--icon-decrease-nesting-level::before {
      @apply bg-form-trix-decrease-indent top-0.5 bottom-0.5 mt-0.5;
    }

    .trix-button--icon-increase-nesting-level::before {
      @apply bg-form-trix-increase-indent top-0.5 bottom-0.5 my-px;
    }

    .trix-dialogs {
      @apply relative;
    }

    .trix-dialog {
      @apply absolute top-0 left-0 right-0 text-xs py-4 px-2.5 bg-white shadow-lg border-t-2 border-gray-300 rounded z-10;
    }

    .trix-input--dialog {
      @apply py-1.5 px-3 border-gray-300 rounded focus:form-ring mr-2;

      &.validate:invalid {
        @apply border-red-500;
      }
    }

    .trix-button--dialog {
      @apply p-2 border-l border-gray-300 bg-transparent rounded-none;

      &:not(.trix-active):hover {
        @apply bg-transparent;
      }

      &:first-of-type {
        @apply border-0;
      }
    }

    .trix-dialog--link {
      @apply max-w-xl;
    }

    .trix-dialog__link-fields {
      @apply flex items-center w-full;

      .trix-input {
        @apply flex-1;
      }

      .trix-button-group {
        @apply flex-grow-0 flex-shrink-0;
      }
    }
  }

  trix-editor {
    @apply px-3 pb-1.5 rounded outline-none min-h-24;

    [data-trix-mutable]:not(.attachment__caption-editor) {
      @apply user-select-none;
    }

    [data-trix-mutable]::-moz-selection,
    [data-trix-cursor-target]::-moz-selection,
    [data-trix-mutable] ::-moz-selection {
      @apply bg-none;
    }

    [data-trix-mutable]::selection,
    [data-trix-cursor-target]::selection,
    [data-trix-mutable] ::selection {
      @apply bg-none;
    }

    [data-trix-mutable].attachment__caption-editor:focus::-moz-selection {
      @apply bg-highlight;
    }

    [data-trix-mutable].attachment__caption-editor:focus::selection {
      @apply bg-highlight;
    }

    [data-trix-mutable].attachment.attachment--file {
      @apply bg-gray-100;
    }

    [data-trix-mutable].attachment img {
      @apply shadow;
    }

    .attachment {
      @apply relative;
    }

    .attachment:hover {
      @apply cursor-default;
    }

    .attachment--preview .attachment__caption:hover {
      @apply cursor-text;
    }

    .attachment__progress {
      @apply absolute z-10 h-5 top-1/2 left-0 transform -translate-y-2.5 w-full px-4 opacity-90 transition-opacity;
    }

    .attachment__progress[value="100"] {
      @apply opacity-0;
    }

    .attachment__caption-editor {
      @apply inline-block w-full m-0 p-0 text-center align-top border-0 outline-none appearance-none text-sm focus:border-gray-200 focus:shadow-none;
    }

    .attachment__toolbar {
      @apply absolute z-10 top-0 transform -translate-y-1/2 left-0 w-full text-center;
    }

    .trix-button-group {
      @apply inline-flex;
    }

    .trix-button {
      @apply relative text-gray-500 whitespace-nowrap text-sm py-0 px-3 m-0 outline-none border-0 rounded-none bg-transparent;

      &.trix-active {
        @apply text-black bg-gray-200;
      }

      &:not(.trix-active):hover {
        @apply bg-gray-100;
      }

      &:not(:disabled) {
        @apply cursor-pointer;
      }
    }


    .trix-button--remove {
      @apply inline-block p-0 outline-none w-7 h-7 leading-7 rounded-full bg-white border border-solid border-gray-400 overflow-x-hidden indent-out;

      &:not(.trix-active):hover {
       @apply bg-gray-100; 
      }
    }

    .trix-button--remove::before {
      @apply inline-block absolute top-1 bottom-1 left-1 right-1 bg-opacity-70 bg-center bg-no-repeat content-empty bg-form-remove-light;

      &:hover {
        @apply border-gray-700;

        &::before {
          @apply opacity-100;
        }
      }
    }

    .attachment__metadata-container {
      @apply relative;
    }

    .attachment__metadata {
      @apply absolute left-1/2 top-4 transform -translate-x-1/2 py-0.5 px-2 text-sm text-white bg-black bg-opacity-70 rounded;

      .attachment__name {
        @apply inline-block max-w-full align-bottom overflow-hidden overflow-ellipsis whitespace-nowrap;
      }

      .attachment__size {
        @apply ml-1 whitespace-nowrap;
      }
    }
  }

  .trix-content,
  trix-editor {
    h1 {
      @apply text-3xl font-bold leading-tight;
    }

    a {
      @apply form-text-primary;
    }

    ul {
      @apply list-disc pl-10;
    }

    [dir=rtl] ul {
      @apply list-disc pr-10;
    }

    ol {
      @apply list-decimal pl-10;
    }

    [dir=rtl] ol {
      @apply list-decimal pr-10;
    }

    blockquote {
      @apply border-l-4 border-gray-300 pl-2.5;
    }

    [dir=rtl] blockquote,
    blockquote[dir=rtl] {
      @apply border-r-4 border-gray-300 pr-2.5;
    }

    pre {
      @apply inline-block w-full align-top font-mono text-sm p-2 whitespace-pre bg-gray-50 overscroll-x-auto;
    }

    img {
      @apply max-w-full h-auto;
    }

    .attachment__caption {
      @apply text-center text-sm;

      .attachment__name+.attachment__size::before {
        @apply content-spaced-dot;
      }
    }
  }

  .trix-content {
    * {
      @apply box-border m-0 p-0;
    }

    .attachment {
      @apply inline-block relative max-w-full;

      a {
        @apply no-underline;
      }
    }

    .attachment--preview {
      @apply w-full text-center;
      
      .attachment__caption {
        @apply text-gray-500 text-sm;
      }
    }

    .attachment--file {
      @apply text-gray-700 leading-none m-0.5 mt-0 py-1.5 px-4 border border-gray-300 rounded;
    }

    .attachment-gallery {
      @apply flex flex-wrap relative;

      .attachment {
        @apply w-1/3 py-0 px-2 flex-grow flex-shrink-0;
      }

      &.attachment-gallery--2 .attachment,
      &.attachment-gallery--4 .attachment {
        @apply w-1/2;
      }
    }

    .attachment__progress {
      @apply hidden;
    }
  }
</style>