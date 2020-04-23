<script>
  import Localized from './../mixins/Localized'

  export default {
    name: 'FormButton',
    mixins: [Localized],
    inject: ['form$', 'theme', 'layout'],
    props: {
      /**
       * Button options.
       * 
       * @default {
       *  "label": { "type": "string", "description": "Button label;" },
       *  "class": { "type": "string", "description": "Button class." },
       *  "disabled": { "type": "function", "description": "A method to determine when the button should be disabled." },
       *  "onClick": { "type": "function", "description": "Handling button click Receives button component with `this`." },
       *  "beforeCreate": { "type": "function", "description": "Triggered in the button's `beforeCreate` lifecycle hook." },
       *  "created": { "type": "function", "description": "Triggered in the button's `created` lifecycle hook." },
       *  "beforeMount": { "type": "function", "description": "Triggered in the button's `beforeMount` lifecycle hook." },
       *  "mounted": { "type": "function", "description": "Triggered in the button's `mounted` lifecycle hook." },
       *  "beforeUpdate": { "type": "function", "description": "Triggered in the button's `beforeUpdate` lifecycle hook." },
       *  "updated": { "type": "function", "description": "Triggered in the button's `updated` lifecycle hook." },
       *  "beforeDestroy": { "type": "function", "description": "Triggered in the button's `beforeDestroy` lifecycle hook." },
       *  "destroyed": { "type": "function", "description": "Triggered in the button's `destroyed` lifecycle hook." }
       * }
       */
      button: {
        type: Object,
        required: true
      },
    },
    computed: {
      /**
       * Button label.
       * 
       * @type {string}
       */
      label() {
        return this.button.label
      },
      /**
       * Button class.
       * 
       * @type {string|object}
       */
      class() {
        return [
          this.theme.classes.button,
          this.button.class || ''
        ]
      },
      /**
       * Determines if the button is disabled.
       * 
       * @type {boolean}
       */
      disabled() {
        if (this.button.disabled === undefined) {
          return
        }

        return this.button.disabled.call(this)
      }
    },
    methods: {
      /**
       * Handles button click
       *
       * @private 
       * @returns {void}
       */
      handleClick(event) {
        if (this.button.prevent === true) {
          event.preventDefault()
        }

        if (this.button.onClick !== undefined) {
          this.button.onClick.call(this)
        }
      }
    },
    created() {
      if (this.button.created) {
        this.button.created.call(this)
      }
    },
    beforeMount() {
      if (this.button.beforeMount) {
        this.button.beforeMount.call(this)
      }
    },
    mounted() {
      if (this.button.mounted) {
        this.button.mounted.call(this)
      }
    },
    beforeUpdate() {
      if (this.button.beforeUpdate) {
        this.button.beforeUpdate.call(this)
      }
    },
    updated() {
      if (this.button.updated) {
        this.button.updated.call(this)
      }
    },
    beforeDestroy() {
      if (this.button.beforeDestroy) {
        this.button.beforeDestroy.call(this)
      }
    },
    destroyed() {
      if (this.button.destroyed) {
        this.button.destroyed.call(this)
      }
    },
  }
</script>