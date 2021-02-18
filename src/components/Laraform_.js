import { computed } from 'composition-api'

export default {
  name: 'Laraform',
  watch: {
    // 'form.schema': {
    //   handler(schema) {
    //     if (_.isEmpty(schema)) {
    //       return
    //     }

    //     this.schema = schema
    //   },
    //   deep: true,
    //   immediate: false
    // },
    // steps: {
    //   handler() {
    //     this.$_resortSchema()
    //   },
    //   deep: true,
    //   immediate: false,
    // },
    // tabs: {
    //   handler() {
    //     this.$_resortSchema()
    //   },
    //   deep: true,
    //   immediate: false,
    // },
    // store: {
    //   handler(value) {
    //     if (_.isEqual(value, this.filtered)) {
    //       return
    //     }
        
    //     this.update(this.store)
    //   }, 
    //   deep: true
    // },
    // data: {
      // @todo
    //   handler(value) {
    //     this.$emit('change', this.filtered)
    //     this.handleChange(this.filtered)

    //     if (this.storePath === null) {
    //       return
    //     }
        
    //     if (_.isEqual(value, this.store)) {
    //       return
    //     }
        
    //     this.store = this.filtered
    //   },
    //   deep: true
    // }
  },
}