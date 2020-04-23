<script>
  import MultifileElement from './MultifileElement.vue'

  export default {
    mixins: [MultifileElement],
    name: 'GalleryElement',
    props: {
      /**
       * The element schema containing it's options.
       * 
       * @default {
       *  "storeFile": { "type": "string", "description": "The name of child element which should contain the size of the image. Storing size, original name, extension, mime and defining fields is only possible if this one is set." },
       *  "fileRules": { "type": "str|arr", "description": "Validation [rules](validation#rule-definition) to be applied for the image element when using `storeFile`." },
       *  "storeSize": { "type": "string", "description": "The name of child element which should contain the size of the image." },
       *  "storeOriginalName": { "type": "string", "description": "The name of child element which should contain the original name of the image." },
       *  "storeExtension": { "type": "string", "description": "The name of child element which should contain the extension of the image." },
       *  "storeMime": { "type": "string", "description": "The name of child element which should contain the mime type of the image." },
       *  "fields": { "type": "object", "description": "Additional elements for each image. General schema rules apply." },
       *  "drop": { "type": "boolean", "description": "Whether the uploader should be a drag n drop area instead of a button." },
       *  "sort": { "type": "boolean", "description": "Whether the files can be sorted by drag n drop." },
       *  "storeOrder": { "type": "string", "description": "The name of the field which should contain the order of the files." },
       *  "order": { "type": "string", "description": "The default order direction of image list when data is loaded. Possible values: `null`, `'ASC'`, `'DESC'`." },
       *  "orderBy": { "type": "string", "description": "The image list will be ordered by this element's values." },
       *  "disabled": { "type": "boolean", "description": "Whether the field is *disabled*." }
       * }
       */
      schema: {
        type: Object,
        required: true
      },
    },
    data() {
      return {
        /**
        * Lightbox component which appears when an image is clicked.
        * 
        * @type {object}
        * @default null
        */
        lightbox$: null,

        /**
        * Type of file. Possible values: `file` or `image`
        * 
        * @type {string}
        * @default 'file'
        * @ignore
        */
        fileType: 'image',

        /**
         * Element slots.
         * 
         * @type {object}
         * @default {
         *  "preview": {
         *    "description": "Custom preview for file.",
         *    "attributes": {
         *      "el$": {"type": "object", "description": "The file's element component."},
         *      "remove": {"type": "function", "description": "Removes the image."},
         *      "preview": {"type": "function", "description": "Opens image preview."}
         *    }
         *  },
         *  "children": {
         *    "description": "Contains the children of the element.",
         *    "attributes": {
         *      "el$": {"type": "object", "description": "The element component."}
         *    }
         *  }
         * }
         */
        slots: {
          info: null,
          label: null,
          before: null,
          between: null,
          after: null,
          description: null,
          error: null,
          preview: null,
          children: null,
        },
      }
    },
    computed: {
      /**
       * List of images for lightbox containing their name (url) and alt (name).
       * 
       * @returns {array}
       * @ignore
       */
      images() {
        var images = []

        var children$ = []

        if (this.isObject()) {
          _.each(this.children$, (object$) => {
            children$.push(object$.children$[this.schema.storeFile])
          })
        }
        else {
          children$ = this.children$
        }

        _.each(children$, (element$) => {
          if (element$.file && element$.file.preview) {
            images.push({
              name: element$.file.preview,
              alt: element$.file.displayName,
            })
          }
        })

        return images
      },
      
      /**
       * Preview type.
       * 
       * @type {string}
       * @ignore
       */
      view() {
        return this.schema.view || 'gallery'
      },

      /**
       * Returns the list of elements which should be required by the component.
       * 
       * @returns {array}
       * @ignore
       */
      elements_() {
        return this.isObject() ? ['fileobject'] : ['image']
      },
    },
    methods: {
      /**
       * Triggered when an image is clicked.
       *
       * @private
       * @prevents 
       * @event imageClick
       */
      handleImageClick(index) {
        this.lightbox$.show()
        this.lightbox$.images = this.images

        this.lightbox$.index = index
      },

      /**
       * Returns the schema of an object child.
       *
       * @private
       * @returns {object}
       */
      $_objectSchema() {
        return {
          type: 'file-object',
          schema: Object.assign({},
            this.$_fileSchema(),
            this.$_metasSchema(),
            this.fields,
          )
        }
      },
    },
    mounted() {
      this.lightbox$ = this.$refs.lightbox$
    }
  }
</script>