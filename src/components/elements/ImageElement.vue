<script>
  import FileElement from './FileElement.vue'

  export default {
    name: 'ImageElement',
    mixins: [FileElement],
    props: {
      /**
       * The element schema containing it's options.
       * 
       * @default {
       *  "view": { "type": "string", "description": "View type of the image's preview. Possible values: `gallery` or `list`. " },
       *  "clickable": { "type": "boolean", "description": "Whether the image's name in the list view should be linked to the actual file." },
       *  "url": { "type": "string", "description": "The url to be prepended to the file's URI." },
       *  "drop": { "type": "boolean", "description": "Whether the uploader should be a drag n drop area instead of a button." },
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
         * View type of the image's preview. Possible values: `gallery` or `list` 
         * 
         * @type {string}
         * @default 'gallery'
         * @ignore
         */
        view: 'gallery',

        /**
        * Lightbox component which appears when the image is clicked.
        * 
        * @type {object}
        * @default null
        */
        lightbox$: null,

        /**
         * Element slots.
         * 
         * @type {object}
         * @default {
         *  "preview": {
         *    "description": "Custom preview.",
         *    "attributes": {
         *      "el$": {"type": "object", "description": "The element component."},
         *      "remove": {"type": "function", "description": "Removes the image."},
         *      "preview": {"type": "function", "description": "Opens image preview."}
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
        return !this.file ? [] : [{
          name: this.file.preview,
          alt: this.file.name,
        }]
      },

      /**
       * Helper property used to determine a generic name for the element.
       * 
       * @type {object}
       * @ignore
       */
      attribute() {
        if (this.label) {
          return this.label
        } else if (this.placeholder) {
          return this.placeholder
        } else {
          return /^\d+$/.test(this.name)
            ? this.__('elements.image.defaultName')
            : this.name
        }
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
      handleImageClick() {
        this.lightbox$.show()
      },

      /**
       * Forwards image click event for parent element.
       *
       * @private
       * @returns {void}
       */
      forwardImageClick() {
        this.$emit('click')
      }
    },
    created() {
      this.$_copy([
        'view'
      ])
    },
    mounted() {
      this.lightbox$ = this.$refs.lightbox$
    }
  }
</script>