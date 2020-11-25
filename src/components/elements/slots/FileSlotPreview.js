import useElementComponent from './../../../composables/useElementComponent'

export default {
  name: 'FileSloPreview',
  props: {
    clickable: {
      type: Boolean,
      required: true,
    },
    filename: {
      required: true,
    },
    link: {
      type: String,
      required: false,
    },
  },
  init(props, context) {
    return {
      ...useElementComponent(props, context),
    }
  },
}