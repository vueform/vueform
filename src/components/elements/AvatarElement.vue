<script>
  import ImageElement from './ImageElement.vue'

  export default {
    name: 'AvatarElement',
    mixins: [ImageElement],
    props: {
      /**
       * The element schema containing it's options.
       * 
       * @default {
       *  "url": { "type": "string", "description": "The url to be prepended to the file's URI." },
       *  "disabled": { "type": "boolean", "description": "Whether the field is *disabled*." }
       * }
       */
      schema: {
        type: Object,
        required: true
      },
    },
    data(){
      return {
        /**
        * Whether the file's name in the default preview should be linked to the actual file.
        * 
        * @type {boolean} 
        * @default false
        * @ignore
        */
        clickable: true,

        /**
        * Determines if the element has drag n drop area instead of upload button.
        * 
        * @type {boolean} 
        * @default false
        * @ignore
        */
        drop: false,

        /**
         * Element slots.
         * 
         * @type {object}
         * @default {
         *  "preview": {
         *    "description": "Contains the avatar preview.",
         *    "attributes": {
         *      "el$": {"type": "object", "description": "The element component."},
         *      "add": {"type": "function", "description": "Adds a new image."},
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
          description: null,
          error: null,
          after: null,

          preview: null,
        },
      }
    }
  }
</script>