<script>
import EditorWrapper from './../../../blank/templates/wrappers/EditorWrapper.vue'

  export default {
    name: 'EditorWrapper',
    render: EditorWrapper.render,
    data: EditorWrapper.data,
  }
</script>

<style lang="scss">
  trix-toolbar {
    padding: 0.5rem 0.375rem;
    border-radius: 0.25rem;
    flex-wrap: wrap;

    @media (min-width: 768px) {
      flex-wrap: nowrap;
    }

    .trix-button-row {
      display: block;
      margin-bottom: -0.25rem;
      flex-wrap: nowrap;
      justify-content: space-between;
      overflow-x: auto;

      @media (min-width: 768px) {
        display: flex;
        margin-bottom: 0;
      }
    }

    .trix-button-group {
      display: inline;

      @media (min-width: 768px) {
        display: flex;
      }
    }

    .trix-button-group-spacer {
      display: hidden;
      flex-grow: 1;

      @media (min-width: 768px) {
        display: block;
      }
    }

    .trix-button {
      position: relative;
      margin-bottom: 0.25rem;
      color: var(--vf-gray-700);
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      outline: none;
      border-radius: 0.25rem;
      white-space: nowrap;
      float: left;

      @media (min-width: 768px) {
        margin-bottom: 0;
      }

      &.trix-active {
        background-color: var(--vf-gray-200);
      }

      &:not(.trix-active):hover {
        background-color: var(--vf-gray-100);

        .is-disabled & {
          background: transparent;
          cursor: default;
        }
      }

      &:not(:disabled) {
        cursor: pointer;
      }

      .is-disabled & {
        cursor: default;
        pointer-events: none;
      }
    }

    .trix-button--icon {
      width: 2.5rem;
      height: 1.5rem;
      font-size: 0.75rem;
      line-height: 1rem;
      text-indent: -9999px;

      &::before {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        display: inline-block;
        opacity: 0.6;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        content: "";
        mask-repeat: no-repeat;
        mask-position: center center;
        mask-size: contain;
        background-color: var(--vf-gray-900);
        top: 0.125rem;
        bottom: 0.125rem;
        margin-top: 0.125rem;
        margin-bottom: 0.125rem;
      }

      &.trix-active::before {
        opacity: 1;
      }

      &:disabled::before {
        opacity: 0.1;
      }
    }

    .trix-button--icon-attach::before {
      mask-image: theme('maskImage.form-trix-attach');
    }

    .trix-button--icon-bold::before {
      mask-image: theme('maskImage.form-trix-bold');
    }

    .trix-button--icon-italic::before {
      mask-image: theme('maskImage.form-trix-italic');
    }

    .trix-button--icon-link::before {
      mask-image: theme('maskImage.form-trix-link');
    }

    .trix-button--icon-strike::before {
      mask-image: theme('maskImage.form-trix-strike');
    }

    .trix-button--icon-quote::before {
      mask-image: theme('maskImage.form-trix-quote');
      top: 0.25rem;
      bottom: 0.25rem;
      margin-top: 1px;
      margin-bottom: 1px;
    }

    .trix-button--icon-heading-1::before {
      mask-image: theme('maskImage.form-trix-heading');
    }

    .trix-button--icon-code::before {
      mask-image: theme('maskImage.form-trix-code');
      top: 0.375rem;
      bottom: 0.375rem;
      margin-top: 1px;
      margin-bottom: 1px;
    }

    .trix-button--icon-bullet-list::before {
      mask-image: theme('maskImage.form-trix-ul');
      margin-top: 1px;
      margin-bottom: 1px;
    }

    .trix-button--icon-number-list::before {
      mask-image: theme('maskImage.form-trix-ol');
      margin-top: 1px;
      margin-bottom: 1px;
    }

    .trix-button--icon-undo::before {
      mask-image: theme('maskImage.form-trix-undo');
      top: 0.25rem;
      bottom: 0.25rem;
    }

    .trix-button--icon-redo::before {
      mask-image: theme('maskImage.form-trix-redo');
      top: 0.25rem;
      bottom: 0.25rem;
    }

    .trix-button--icon-decrease-nesting-level::before {
      mask-image: theme('maskImage.form-trix-decrease-indent');
      margin-bottom: 0;
    }

    .trix-button--icon-increase-nesting-level::before {
      mask-image: theme('maskImage.form-trix-increase-indent');
      margin-top: 1px;
      margin-bottom: 1px;
    }

    .trix-dialogs {
      position: relative;
    }

    .trix-dialog {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      font-size: 0.75rem;
      line-height: 1rem;
      padding: 1rem 0.625rem;
      background-color: white;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      border-top-width: 2px;
      border-color: var(--vf-gray-300);
      border-radius: 0.25rem;
      z-index: 10;
    }

    .trix-input--dialog {
      padding: 0.375rem 0.75rem;
      border: 1px solid var(--vf-gray-300);
      border-radius: 0.25rem;
      margin-right: 0.5rem;
      font-size: 0.75rem;
      line-height: 1rem;

      &:focus {
        box-shadow: var(--vf-ring-shadow);
        border-color: var(--vf-ring-border-color);
      }

      &.validate:invalid {
        border-color: var(--vf-color-danger);
      }
    }

    .trix-button--dialog {
      padding: 0.5rem;
      border-left-width: 1px;
      border-color: var(--vf-gray-300);
      background-color: transparent;
      border-radius: 0;

      &:not(.trix-active):hover {
        background-color: transparent;
      }

      &:first-of-type {
        border: 0;
      }
    }

    .trix-dialog--link {
      max-width: 36rem;
    }

    .trix-dialog__link-fields {
      display: flex;
      align-items: center;
      width: 100%;

      .trix-input {
        flex: 1 1 0%;
      }

      .trix-button-group {
        flex-grow: 0;
        flex-shrink: 0;
      }
    }
  }

  trix-editor {
    padding-left: var(--vf-input-px);
    padding-right: var(--vf-input-px);
    padding-bottom: var(--vf-input-py);
    border-radius: var(--vf-large-radius);
    outline: none;
    min-height: 6rem;

    [data-trix-mutable]:not(.attachment__caption-editor) {
      user-select: none;
    }

    [data-trix-mutable]::-moz-selection,
    [data-trix-cursor-target]::-moz-selection,
    [data-trix-mutable] ::-moz-selection {
      background-image: none;
    }

    [data-trix-mutable]::selection,
    [data-trix-cursor-target]::selection,
    [data-trix-mutable] ::selection {
      background-image: none;
    }

    [data-trix-mutable].attachment__caption-editor:focus::-moz-selection {
      background: highlight;
    }

    [data-trix-mutable].attachment__caption-editor:focus::selection {
      background: highlight;
    }

    [data-trix-mutable].attachment.attachment--file {
      background-color: var(--vf-gray-100);
    }

    [data-trix-mutable].attachment img {
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    }

    .attachment {
      position: relative;
    }

    .attachment:hover {
      cursor: default;
    }

    .attachment--preview .attachment__caption:hover {
      cursor: text;
    }

    .attachment__progress {
      position: absolute;
      z-index: 10;
      height: 1.25rem;
      top: 50%;
      left: 0;
      transform: translateY(-0.625rem);
      width: 100%;
      padding-left: 1rem;
      padding-right: 1rem;
      opacity: 0.9;
      transition-property: opacity;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }

    .attachment__progress[value="100"] {
      opacity: 0;
    }

    .attachment__caption-editor {
      display: inline-block;
      padding: 0;
      margin: 0;
      font-size: 0.875rem;
      line-height: 1.25rem;
      text-align: center;
      vertical-align: top;
      width: 100%;
      border-width: 0;
      appearance: none;
      outline: 0;

      &:focus {
        border-color: var(--vf-gray-200);
        box-shadow: none;
      }
    }

    .attachment__toolbar {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 10;
      transform: translateY(-50%);
      text-align: center;
      width: 100%;
    }

    .trix-button-group {
      display: inline-flex;
    }

    .trix-button {
      position: relative;
      padding-top: 0;
      padding-bottom: 0;
      padding-left: 0.75rem;
      padding-right: 0.75rem;
      margin: 0;
      background-color: transparent;
      color: var(--vf-gray-500);
      font-size: 0.875rem;
      line-height: 1.25rem;
      white-space: nowrap;
      border-radius: 0;
      border-width: 0;
      outline: 0;

      &.trix-active {
        color: #000000;
        background-color: var(--vf-gray-200);
      }

      &:not(.trix-active):hover {
        background-color: var(--vf-gray-100);
      }

      &:not(:disabled) {
        cursor: pointer;
      }
    }

    .trix-button--remove {
      display: inline-block;
      overflow-x: hidden;
      padding: 0;
      background-color: #ffffff;
      line-height: 1.75rem;
      border-radius: 9999px;
      border-width: 1px;
      border-color: var(--vf-gray-400);
      border-style: solid;
      outline: 0;
      text-indent: -9999px;

      &:not(.trix-active):hover {
        background-color: var(--vf-gray-100);
      }

      &::before {
        content: "";
        display: inline-block;
        position: absolute;
        top: 0.25rem;
        right: 0.25rem;
        bottom: 0.25rem;
        left: 0.25rem;
        background-color: var(--vf-gray-900);
        opacity: 0.7;
        background-position: center;
        background-repeat: no-repeat;
        mask-repeat: no-repeat;
        mask-position: center center;
        mask-size: contain;
        mask-image: theme('maskImage.form-remove-light');

        &:hover {
          border-color: var(--vf-gray-700);

          &::before {
            opacity: 1;
          }
        }
      }
    }

    .attachment__metadata-container {
      position: relative;
    }

    .attachment__metadata {
      position: absolute;
      top: 1rem;
      left: 50%;
      padding-top: 0.125rem;
      padding-bottom: 0.125rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      background-color: #000000;
      opacity: 0.7;
      transform: translateX(-50%);
      color: #ffffff;
      font-size: 0.875rem;
      line-height: 1.25rem;
      border-radius: 0.25rem;

      .attachment__name {
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        vertical-align: bottom;
        white-space: nowrap;
        max-width: 100%;
      }

      .attachment__size {
        margin-left: 0.25rem;
        white-space: nowrap;
      }
    }
  }

  .trix-content,
  trix-editor {
    h1 {
      font-size: 1.875rem;
      line-height: 2.25rem;
      font-weight: 700;
      line-height: 1.25;
    }

    a {
      color: var(--vf-primary);
    }

    ul {
      padding-left: 2.5rem;
      list-style-type: disc;
    }

    [dir=rtl] ul {
      padding-right: 2.5rem;
      list-style-type: disc;
    }

    ol {
      padding-left: 2.5rem;
      list-style-type: decimal;
    }

    [dir=rtl] ol {
      padding-right: 2.5rem;
      list-style-type: decimal;
    }

    blockquote {
      padding-left: 0.625rem;
      border-left-width: 4px;
      border-color: var(--vf-gray-300);
    }

    [dir=rtl] blockquote,
    blockquote[dir=rtl] {
      padding-left: 0.625rem;
      border-left-width: 4px;
      border-color: var(--vf-gray-300);
    }

    pre {
      display: inline-block;
      overscroll-behavior-x: auto;
      padding: 0.5rem;
      background-color: var(--vf-gray-50);
      font-family: theme('fontFamily.mono');
      font-size: 0.875rem;
      line-height: 1.25rem;
      vertical-align: top;
      white-space: pre;
      width: 100%;
    }

    img {
      max-width: 100%;
      height: auto;
    }

    .attachment__caption {
      font-size: 0.875rem;
      line-height: 1.25rem;
      text-align: center;

      .attachment__name+.attachment__size::before {
        content: " · ";
      }
    }
  }

  .trix-content {
    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }

    .attachment {
      display: inline-block;
      position: relative;
      max-width: 100%;

      a {
        text-decoration: none;
      }
    }

    .attachment--preview {
      text-align: center;
      width: 100%;
      
      .attachment__caption {
        color: var(--vf-gray-500);
        font-size: 0.875rem;
        line-height: 1.25rem;
      }
    }

    .attachment--file {
      padding-top: 0.375rem;
      padding-bottom: 0.375rem;
      padding-left: 1rem;
      padding-right: 1rem;
      margin: 0.125rem;
      margin-top: 0;
      color: var(--vf-gray-700);
      line-height: 1;
      border-radius: 0.25rem;
      border-width: 1px;
      border-color: var(--vf-gray-300);
    }

    .attachment-gallery {
      display: flex;
      position: relative;
      display: flex;
      flex-wrap: wrap;

      .attachment {
        padding-top: 0;
        padding-bottom: 0;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        flex-grow: 1;
        flex-shrink: 0;
        width: 33.333333%;
      }

      &.attachment-gallery--2 .attachment,
      &.attachment-gallery--4 .attachment {
        width: 50%;
      }
    }

    .attachment__progress {
      display: none;
    }
  }

  .form-editor-sm {
    trix-editor {
      padding-left: var(--vf-input-px-sm);
      padding-right: var(--vf-input-px-sm);
      padding-bottom: var(--vf-input-py-sm);
      border-radius: var(--vf-large-radius-sm);
      min-height: 5rem;
    }

    .trix-content,
    trix-editor {
      h1 {
        font-size: 1.625rem;
        font-weight: 700;
        line-height: 1.25;
      }
    }
    
    trix-toolbar {
      padding: var(--vf-input-py-sm) var(--vf-input-py-sm);

      .trix-button--icon {
        width: 2.25rem;
      }
    }
  }

  .form-editor-lg {
    trix-editor {
      padding-left: var(--vf-input-px-lg);
      padding-right: var(--vf-input-px-lg);
      padding-bottom: var(--vf-input-py-lg);
      border-radius: var(--vf-large-radius-lg);
    }
  }
</style>