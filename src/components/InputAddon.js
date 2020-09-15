import ElementComponent from './../mixins/ElementComponent'

export default {
  name: 'InputAddon',
  mixins: [ElementComponent],
  props: {
    type: {
      required: true,
      type: String
    },
    addon: {
      required: true,
      type: String
    },
  },
}