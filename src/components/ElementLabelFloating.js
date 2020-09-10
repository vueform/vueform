import ElementComponent from './../mixins/ElementComponent'

  export default {
    name: 'ElementLabelFloating',
    mixins: [ElementComponent],
    props: {
      visible: {
        type: Boolean,
        default: false,
      }
    }
  }