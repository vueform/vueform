import DateElement from './DateElement'

export default {
  name: 'DatetimeElement',
  mixins: [DateElement],
  computed: {
    dataFormat: {
      get() {
        if (this.schema.dataFormat) {
          return this.schema.dataFormat
        }
        
        if (this.seconds) {
          return this.__('laraform.elements.time.secondsDataFormat')
        }

        this.__('laraform.elements.time.dataFormat')
      },
      set(value) {
        this.$set(this.schema, 'dataFormat', value)
      }
    },
    seconds: {
      get() {
        return this.schema.seconds !== undefined ? this.schema.seconds : false
      },
      set(value) {
        this.$set(this.schema, 'seconds', value)
      }
    },
    hasDate() {
      return true
    },
    hasTime() {
      return true
    },
  },
}