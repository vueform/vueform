import { ref } from 'vue'

const base = function(props, context, dependencies)
{
  // ================ DATA ================
  
  /**
   * The main input field of the element.
   *
   * @type {HTMLElement}
   */
  const input = ref(null)
  
  return {
    input,
  }
}

const select = function(props, context, dependencies)
{
  // ================ DATA ================
  
  /**
   * The main input field of the element, which can be a [`Multiselect`](https://github.com/vueform/multiselect) component.
   *
   * @type {HTMLElement}
   */
  const input = ref(null)
  
  return {
    input,
  }
}

const multiselect = select
const tags = select

export {
  select,
  multiselect,
  tags,
}

export default base