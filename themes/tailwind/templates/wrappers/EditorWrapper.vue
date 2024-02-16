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

    .trix-button-row {
      display: block;
      margin-bottom: -0.25rem;
      flex-wrap: nowrap;
      justify-content: space-between;
      overflow-x: auto;
    }

    .trix-button-group {
      display: inline;
    }

    .trix-button-group-spacer {
      display: hidden;
      flex-grow: 1;
    }

    .trix-button {
      position: relative;
      margin-bottom: 0.25rem;
      color: var(--vf-bg-icon);
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      outline: none;
      border-radius: 0.25rem;
      white-space: nowrap;
      float: left;
      border: 0;
      background: none;

      &.trix-active {
        background-color: var(--vf-bg-selected);
        filter: brightness(0.9);
      }

      &:not(.trix-active):hover {
        background-color: var(--vf-bg-selected);

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
        content: "";
        mask-repeat: no-repeat;
        -webkit-mask-repeat: no-repeat;
        mask-position: center center;
        -webkit-mask-position: center center;
        mask-size: contain;
        -webkit-mask-size: contain;
        background-color: var(--vf-bg-icon);
        top: 0.125rem;
        bottom: 0.125rem;
        margin-top: 0.125rem;
        margin-bottom: 0.125rem;
      }

      &.trix-active::before {
        opacity: 1;
      }

      &:disabled::before {
        opacity: 0.4;
      }
    }

    .trix-button--icon-attach::before {
      mask-image: theme('maskImage.form-trix-attach');
      -webkit-mask-image: theme('maskImage.form-trix-attach');
    }

    .trix-button--icon-bold::before {
      mask-image: theme('maskImage.form-trix-bold');
      -webkit-mask-image: theme('maskImage.form-trix-bold');
    }

    .trix-button--icon-italic::before {
      mask-image: theme('maskImage.form-trix-italic');
      -webkit-mask-image: theme('maskImage.form-trix-italic');
    }

    .trix-button--icon-link::before {
      mask-image: theme('maskImage.form-trix-link');
      -webkit-mask-image: theme('maskImage.form-trix-link');
    }

    .trix-button--icon-strike::before {
      mask-image: theme('maskImage.form-trix-strike');
      -webkit-mask-image: theme('maskImage.form-trix-strike');
    }

    .trix-button--icon-quote::before {
      mask-image: theme('maskImage.form-trix-quote');
      -webkit-mask-image: theme('maskImage.form-trix-quote');
      top: 0.25rem;
      bottom: 0.25rem;
      margin-top: 1px;
      margin-bottom: 1px;
    }

    .trix-button--icon-heading-1::before {
      mask-image: theme('maskImage.form-trix-heading');
      -webkit-mask-image: theme('maskImage.form-trix-heading');
    }

    .trix-button--icon-code::before {
      mask-image: theme('maskImage.form-trix-code');
      -webkit-mask-image: theme('maskImage.form-trix-code');
      top: 0.375rem;
      bottom: 0.375rem;
      margin-top: 1px;
      margin-bottom: 1px;
    }

    .trix-button--icon-bullet-list::before {
      mask-image: theme('maskImage.form-trix-ul');
      -webkit-mask-image: theme('maskImage.form-trix-ul');
      margin-top: 1px;
      margin-bottom: 1px;
    }

    .trix-button--icon-number-list::before {
      mask-image: theme('maskImage.form-trix-ol');
      -webkit-mask-image: theme('maskImage.form-trix-ol');
      margin-top: 1px;
      margin-bottom: 1px;
    }

    .trix-button--icon-undo::before {
      mask-image: theme('maskImage.form-trix-undo');
      -webkit-mask-image: theme('maskImage.form-trix-undo');
      top: 0.25rem;
      bottom: 0.25rem;
    }

    .trix-button--icon-redo::before {
      mask-image: theme('maskImage.form-trix-redo');
      -webkit-mask-image: theme('maskImage.form-trix-redo');
      top: 0.25rem;
      bottom: 0.25rem;
    }

    .trix-button--icon-decrease-nesting-level::before {
      mask-image: theme('maskImage.form-trix-decrease-indent');
      -webkit-mask-image: theme('maskImage.form-trix-decrease-indent');
      margin-bottom: 0;
    }

    .trix-button--icon-increase-nesting-level::before {
      mask-image: theme('maskImage.form-trix-increase-indent');
      -webkit-mask-image: theme('maskImage.form-trix-increase-indent');
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
      background-color: var(--vf-bg-input);
      box-shadow: 0 0px 15px 0px rgba(0, 0, 0, 0.3);
      margin-top: 0.375rem;
      border-radius: 0.25rem;
      z-index: 2;
    }

    .trix-input--dialog {
      padding: 0.375rem 0.75rem;
      border: 1px solid var(--vf-border-color-input);
      border-radius: 0.25rem;
      margin-right: 0.5rem;
      font-size: 0.75rem;
      line-height: 1rem;
      background: var(--vf-bg-input);
      color: var(--vf-color-input);

      &:focus {

        outline: var(--vf-ring-width) solid var(--vf-ring-color) !important;
      }

      &.validate:invalid {
        border-color: var(--vf-color-danger);
      }
    }

    .trix-button--dialog {
      padding: 0.5rem;
      border-left-width: 1px;
      border-color: var(--vf-border-color-input);
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
    padding-left: var(--vf-px-input);
    padding-right: var(--vf-px-input);
    padding-bottom: var(--vf-py-input);
    border-radius: var(--vf-radius-large);
    outline: none;
    min-height: 6rem;

    &:empty:not(:focus)::before {
      color: var(--vf-color-placeholder);
    }

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
      background-color: var(--vf-bg-selected);
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
      z-index: 1;
      height: 1.25rem;
      top: 50%;
      left: 0;
      transform: translateY(-0.625rem);
      width: 100%;
      padding-left: 1rem;
      padding-right: 1rem;
      opacity: 0.2;
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
      background: var(--vf-bg-input);
      color: var(--vf-color-input);
      font-family: inherit;
    }

    .attachment__toolbar {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
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
      color: var(--vf-bg-icon);
      font-size: 0.875rem;
      line-height: 1.25rem;
      white-space: nowrap;
      border-radius: 0;
      border-width: 0;
      outline: 0;

      &:not(:disabled) {
        cursor: pointer;
      }
    }

    .trix-button--remove {
      display: inline-block;
      overflow-x: hidden;
      padding: 0;
      background-color: var(--vf-bg-input);
      line-height: 1.75rem;
      border-color: var(--vf-color-selected);
      border-radius: 9999px;
      border-width: 1px;
      border-style: solid;
      outline: 0;
      text-indent: -9999px;
      width: 24px;
      height: 24px;

      &:hover {
        background-color: var(--vf-bg-selected);
      }

      &::before {
        content: "";
        display: inline-block;
        position: absolute;
        top: 0.125rem;
        right: 0.125rem;
        bottom: 0.125rem;
        left: 0.125rem;
        background-color: var(--vf-color-input);
        opacity: 0.7;
        background-position: center;
        background-repeat: no-repeat;
        mask-repeat: no-repeat;
        -webkit-mask-repeat: no-repeat;
        mask-position: center center;
        -webkit-mask-position: center center;
        mask-size: contain;
        -webkit-mask-size: contain;
        mask-image: theme('maskImage.form-remove-light');
        -webkit-mask-image: theme('maskImage.form-remove-light');
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
      border-left-style: solid;
      margin: 0;
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

  [class*="form-editor-sm"] {
    trix-editor {
      padding-left: var(--vf-px-input-sm);
      padding-right: var(--vf-px-input-sm);
      padding-bottom: var(--vf-py-input-sm);
      border-radius: var(--vf-radius-large-sm);
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
      padding: var(--vf-py-input-sm) var(--vf-py-input-sm);

      .trix-button--icon {
        width: 2.25rem;
      }
    }
  }

  [class*="form-editor-lg"] {
    trix-editor {
      padding-left: var(--vf-px-input-lg);
      padding-right: var(--vf-px-input-lg);
      padding-bottom: var(--vf-py-input-lg);
      border-radius: var(--vf-radius-large-lg);
    }
  }

  [class*="form-editor-disabled"] {
    trix-toolbar {
      pointer-events: none;
    }
  }

  [class*="form-editor-hide-bold"] {
    .trix-button--icon-bold {
      display: none;
    }
  }

  [class*="form-editor-hide-italic"] {
    .trix-button--icon-italic {
      display: none;
    }
  }

  [class*="form-editor-hide-strike"] {
    .trix-button--icon-strike {
      display: none;
    }
  }

  [class*="form-editor-hide-link"] {
    .trix-button--icon-link {
      display: none;
    }
  }

  [class*="form-editor-hide-heading"] {
    .trix-button--icon-heading-1 {
      display: none;
    }
  }

  [class*="form-editor-hide-quote"] {
    .trix-button--icon-quote {
      display: none;
    }
  }

  [class*="form-editor-hide-code"] {
    .trix-button--icon-code {
      display: none;
    }
  }

  [class*="form-editor-hide-bullet-list"] {
    .trix-button--icon-bullet-list {
      display: none;
    }
  }

  [class*="form-editor-hide-number-list"] {
    .trix-button--icon-number-list {
      display: none;
    }
  }

  [class*="form-editor-hide-decrease-nesting"] {
    .trix-button--icon-decrease-nesting-level {
      display: none;
    }
  }

  [class*="form-editor-hide-increase-nesting"] {
    .trix-button--icon-increase-nesting-level {
      display: none;
    }
  }

  [class*="form-editor-hide-attach"] {
    .trix-button--icon-attach {
      display: none;
    }
  }

  [class*="form-editor-hide-undo"] {
    .trix-button--icon-undo {
      display: none;
    }
  }

  [class*="form-editor-hide-redo"] {
    .trix-button--icon-redo {
      display: none;
    }
  }

  .dark .trix-content,
  .dark trix-editor {
    blockquote {
      border-color: var(--vf-dark-700);
    }

    pre {
      background-color: var(--vf-dark-900);
    }
  }
</style>