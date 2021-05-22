<template>
  <component :is="elementLayout">
    <template v-slot:field>

      <TrixWrapper
        :value="model"
        :placeholder="placeholder"
        :id="fieldId"
        :accept="accept"
        :accept-mimes="acceptMimes"
        :endpoint="trixEndpoint"
        :disabled="isDisabled"
        :class="classes.trix"
        @input="handleInput"
        @alert="handleError"
        ref="input"
      />

    </template>

    <template v-for="(component, slot) in elementSlots" v-slot:[slot]>
      <slot :name="slot" :el$="el$">
        <component :is="component" v-bind="elementSlotProps[slot]" />
      </slot>
    </template>
  </component>
</template>

<script>
  export default {
    name: 'TrixElement',
    data() {
      return {
        defaultClasses: {
          container: '',
          trix: '',
          disabled: '',
        }
      }
    }
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
      @apply w-10 h-6 text-xs text-transparent;

      &::before {
        content: "";
        @apply absolute inset-0 inline-block opacity-60 bg-center bg-no-repeat bg-contain;
      }

      &.trix-active::before {
        @apply opacity-100;
      }

      &:disabled::before {
        @apply opacity-10;
      }
    }

    .trix-button--icon-attach::before {
      background-image: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M16.5%206v11.5a4%204%200%201%201-8%200V5a2.5%202.5%200%200%201%205%200v10.5a1%201%200%201%201-2%200V6H10v9.5a2.5%202.5%200%200%200%205%200V5a4%204%200%201%200-8%200v12.5a5.5%205.5%200%200%200%2011%200V6h-1.5z%22%2F%3E%3C%2Fsvg%3E);

      @apply top-0.5 bottom-px;
    }

    .trix-button--icon-bold::before {
      background-image: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M15.6%2011.8c1-.7%201.6-1.8%201.6-2.8a4%204%200%200%200-4-4H7v14h7c2.1%200%203.7-1.7%203.7-3.8%200-1.5-.8-2.8-2.1-3.4zM10%207.5h3a1.5%201.5%200%201%201%200%203h-3v-3zm3.5%209H10v-3h3.5a1.5%201.5%200%201%201%200%203z%22%2F%3E%3C%2Fsvg%3E);
    }

    .trix-button--icon-italic::before {
      background-image: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M10%205v3h2.2l-3.4%208H6v3h8v-3h-2.2l3.4-8H18V5h-8z%22%2F%3E%3C%2Fsvg%3E);
    }

    .trix-button--icon-link::before {
      background-image: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M9.88%2013.7a4.3%204.3%200%200%201%200-6.07l3.37-3.37a4.26%204.26%200%200%201%206.07%200%204.3%204.3%200%200%201%200%206.06l-1.96%201.72a.91.91%200%201%201-1.3-1.3l1.97-1.71a2.46%202.46%200%200%200-3.48-3.48l-3.38%203.37a2.46%202.46%200%200%200%200%203.48.91.91%200%201%201-1.3%201.3z%22%2F%3E%3Cpath%20d%3D%22M4.25%2019.46a4.3%204.3%200%200%201%200-6.07l1.93-1.9a.91.91%200%201%201%201.3%201.3l-1.93%201.9a2.46%202.46%200%200%200%203.48%203.48l3.37-3.38c.96-.96.96-2.52%200-3.48a.91.91%200%201%201%201.3-1.3%204.3%204.3%200%200%201%200%206.07l-3.38%203.38a4.26%204.26%200%200%201-6.07%200z%22%2F%3E%3C%2Fsvg%3E);
    }

    .trix-button--icon-strike::before {
      background-image: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M12.73%2014l.28.14c.26.15.45.3.57.44.12.14.18.3.18.5%200%20.3-.15.56-.44.75-.3.2-.76.3-1.39.3A13.52%2013.52%200%200%201%207%2014.95v3.37a10.64%2010.64%200%200%200%204.84.88c1.26%200%202.35-.19%203.28-.56.93-.37%201.64-.9%202.14-1.57s.74-1.45.74-2.32c0-.26-.02-.51-.06-.75h-5.21zm-5.5-4c-.08-.34-.12-.7-.12-1.1%200-1.29.52-2.3%201.58-3.02%201.05-.72%202.5-1.08%204.34-1.08%201.62%200%203.28.34%204.97%201l-1.3%202.93c-1.47-.6-2.73-.9-3.8-.9-.55%200-.96.08-1.2.26-.26.17-.38.38-.38.64%200%20.27.16.52.48.74.17.12.53.3%201.05.53H7.23zM3%2013h18v-2H3v2z%22%2F%3E%3C%2Fsvg%3E);
    }

    .trix-button--icon-quote::before {
      background-image: url(data:image/svg+xml,%3Csvg%20version%3D%221%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M6%2017h3l2-4V7H5v6h3zm8%200h3l2-4V7h-6v6h3z%22%2F%3E%3C%2Fsvg%3E);
    }

    .trix-button--icon-heading-1::before {
      background-image: url(data:image/svg+xml,%3Csvg%20version%3D%221%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M12%209v3H9v7H6v-7H3V9h9zM8%204h14v3h-6v12h-3V7H8V4z%22%2F%3E%3C%2Fsvg%3E);
    }

    .trix-button--icon-code::before {
      background-image: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M18.2%2012L15%2015.2l1.4%201.4L21%2012l-4.6-4.6L15%208.8l3.2%203.2zM5.8%2012L9%208.8%207.6%207.4%203%2012l4.6%204.6L9%2015.2%205.8%2012z%22%2F%3E%3C%2Fsvg%3E);
    }

    .trix-button--icon-bullet-list::before {
      background-image: url(data:image/svg+xml,%3Csvg%20version%3D%221%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M4%204a2%202%200%201%200%200%204%202%202%200%200%200%200-4zm0%206a2%202%200%201%200%200%204%202%202%200%200%200%200-4zm0%206a2%202%200%201%200%200%204%202%202%200%200%200%200-4zm4%203h14v-2H8v2zm0-6h14v-2H8v2zm0-8v2h14V5H8z%22%2F%3E%3C%2Fsvg%3E);
    }

    .trix-button--icon-number-list::before {
      background-image: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M2%2017h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1%203h1.8L2%2013.1v.9h3v-1H3.2L5%2010.9V10H2v1zm5-6v2h14V5H7zm0%2014h14v-2H7v2zm0-6h14v-2H7v2z%22%2F%3E%3C%2Fsvg%3E);
    }

    .trix-button--icon-undo::before {
      background-image: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M12.5%208c-2.6%200-5%201-6.9%202.6L2%207v9h9l-3.6-3.6A8%208%200%200%201%2020%2016l2.4-.8a10.5%2010.5%200%200%200-10-7.2z%22%2F%3E%3C%2Fsvg%3E);
    }

    .trix-button--icon-redo::before {
      background-image: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M18.4%2010.6a10.5%2010.5%200%200%200-16.9%204.6L4%2016a8%208%200%200%201%2012.7-3.6L13%2016h9V7l-3.6%203.6z%22%2F%3E%3C%2Fsvg%3E);
    }

    .trix-button--icon-decrease-nesting-level::before {
      background-image: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M3%2019h19v-2H3v2zm7-6h12v-2H10v2zm-8.3-.3l2.8%202.9L6%2014.2%204%2012l2-2-1.4-1.5L1%2012l.7.7zM3%205v2h19V5H3z%22%2F%3E%3C%2Fsvg%3E);
    }

    .trix-button--icon-increase-nesting-level::before {
      background-image: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M3%2019h19v-2H3v2zm7-6h12v-2H10v2zm-6.9-1L1%2014.2l1.4%201.4L6%2012l-.7-.7-2.8-2.8L1%209.9%203.1%2012zM3%205v2h19V5H3z%22%2F%3E%3C%2Fsvg%3E);
    }

    .trix-dialogs {
      @apply relative;
    }

    .trix-dialog {
      @apply absolute top-0 left-0 right-0 text-xs py-4 px-2.5 bg-white shadow-lg border-t-2 border-gray-300 rounded z-10;
    }

    .trix-input--dialog {
      @apply py-1.5 px-3 border-gray-300 rounded focus:ring-4 focus:ring-vueform-primary focus:ring-opacity-20 focus:border-vueform-primary mr-2;

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
    min-height: 6rem;
    @apply px-3 pb-1.5 rounded outline-none;

    [data-trix-mutable]:not(.attachment__caption-editor) {
      user-select: none;
    }

    [data-trix-mutable]::-moz-selection,
    [data-trix-cursor-target]::-moz-selection,
    [data-trix-mutable] ::-moz-selection {
      background: none;
    }

    [data-trix-mutable]::selection,
    [data-trix-cursor-target]::selection,
    [data-trix-mutable] ::selection {
      background: none;
    }

    [data-trix-mutable].attachment__caption-editor:focus::-moz-selection {
      background: highlight;
    }

    [data-trix-mutable].attachment__caption-editor:focus::selection {
      background: highlight;
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
      @apply inline-block p-0 outline-none w-7 h-7 leading-7 rounded-full bg-white border-2 border-gray-200 overflow-x-hidden text-transparent;

      &:not(.trix-active):hover {
       @apply bg-gray-100; 
      }
    }

    .trix-button--remove::before {
      content: "";
      background-image: url(data:image/svg+xml,%3Csvg%20height%3D%2224%22%20width%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M19%206.4L17.6%205%2012%2010.6%206.4%205%205%206.4l5.6%205.6L5%2017.6%206.4%2019l5.6-5.6%205.6%205.6%201.4-1.4-5.6-5.6z%22%2F%3E%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%3C%2Fsvg%3E);

      @apply inline-block absolute inset-0 bg-opacity-70 bg-center bg-no-repeat;

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
      @apply text-vueform-primary;
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
      @apply inline-block w-full align-top font-mono text-sm p-2 whitespace-pre bg-gray-200 overscroll-x-auto;
    }

    img {
      @apply max-w-full h-auto;
    }

    .attachment__caption {
      @apply text-center text-sm;

      .attachment__name+.attachment__size::before {
        content: ' · ';
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