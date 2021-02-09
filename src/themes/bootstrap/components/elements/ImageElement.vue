<script>
  import FileElement from './FileElement'

  export default {
    name: 'ImageElement',
    render: FileElement.render,
    data() {
      return {
        defaultClasses: {
          container: 'lf-file',
          selectButton: 'btn btn-light btn-select-file',
          uploadButton: 'btn btn-primary btn-upload-temp',
          removeButton: 'btn btn-light btn-remove-file',
          abortButton: 'btn btn-danger btn-abort-upload',
          removing: 'removing',
        }
      }
    }
  }
</script>