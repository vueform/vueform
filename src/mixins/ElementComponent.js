import MergesElementClasses from './MergesElementClasses'
import BaseComponent from './BaseComponent'

export default {
  inject: ['el$', 'form$'],
  mixins: [BaseComponent, MergesElementClasses],
}