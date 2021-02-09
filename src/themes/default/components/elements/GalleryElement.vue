<script>
  import MultifileElement from './MultifileElement'

  export default {
    name: 'GalleryElement',
    render: MultifileElement.render,
    data() {
      return {
        defaultClasses: {
          container: 'lf-multifile',
          element: 'list-element-container',
          sortable: 'list-element-container-sortable',
          disabled: 'disabled',
          selectButton: 'btn btn-light btn-select-file',
        },
        containers: {
          sortable: 'element',
          add: 'add',
          remove: 'remove',
        }
      }
    }
  }
</script>