import ListElement from './ListElement'
import HasFileDrop from './../../mixins/HasFileDrop'

export default {
  mixins: [ListElement, HasFileDrop],
  name: 'MultifileElement',
  props: {
    /**
     * The element schema containing it's options.
     * 
     * @default {
     *  "storeFile": { "type": "string", "description": "The name of child element which should contain the size of the file. Storing size, original name, extension, mime and defining fields is only possible if this one is set and the element's value will be a list of objects instead of a list of filenames." },
     *  "fileRules": { "type": "str|arr", "description": "Validation [rules](basics/validation#defining-validation-rules) to be applied for the file element when using `storeFile`." },
     *  "storeSize": { "type": "string", "description": "The name of child element which should contain the size of the file." },
     *  "storeOriginalName": { "type": "string", "description": "The name of child element which should contain the original name of the file." },
     *  "storeExtension": { "type": "string", "description": "The name of child element which should contain the extension of the file." },
     *  "storeMime": { "type": "string", "description": "The name of child element which should contain the mime type of the file." },
     *  "fields": { "type": "object", "description": "Additional elements for each file. General schema rules apply." },
     *  "drop": { "type": "boolean", "description": "Whether the uploader should be a drag n drop area instead of a button." },
     *  "sort": { "type": "boolean", "description": "Whether the files can be sorted by drag n drop." },
     *  "storeOrder": { "type": "string", "description": "The name of the field which should contain the order of the files." },
     *  "order": { "type": "string", "description": "The default order direction of file list when data is loaded. Possible values: `null`, `'ASC'`, `'DESC'`." },
     *  "orderBy": { "type": "string", "description": "The file list will be ordered by this element's values." },
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

      defaultInitial: 0,

      /**
       * Element slots.
       * 
       * @type {object}
       * @default {
       *  "preview": {
       *    "description": "Custom preview for file.",
       *    "attributes": {
       *      "el$": {"type": "object", "description": "The file's element component."},
       *      "remove": {"type": "function", "description": "Removes the file."}
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
     * The schema of a child.
     * 
     * @type {object}
     */
    prototype() {
      return {
        type: 'file',
        url: '/uploads/'
      }
    },
  },
  methods: {

    /**
     * Triggered when a file is selected by the user.
     *
     * @private
     * @returns {void}
     */
    handleFileSelected(e) {
      if (!e.target || !e.target.files || e.target.files.length == 0 || this.disabled) {
        return
      }

      _.each(e.target.files, (file) => {
        this.add(file)
      })

      this.$refs.input.value = ''
    },

    /**
     * Triggered when an uploader is clicked.
     *
     * @private
     * @returns {void}
     */
    handleClick() {
      if (this.disabled) {
        return
      }

      this.$refs.input.click()
    },
  },
}