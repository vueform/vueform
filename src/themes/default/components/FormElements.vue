<template>
  <div :class="classes.container">
    <div :class="classes.wrapper">
      <component
        v-for="(element, name) in schema"
        :is="component(element)"
        :schema="element"
        :name="name"
        :ref="el => { if(el) elements$[name] = el }"
        :key="name"
      />
    </div>
  </div>
</template>

<script>
  import FormElements from './../../../components/FormElements'
  import { ref, reactive, onBeforeUpdate } from 'vue'
  import useFormElements from './../../../composables/useFormElements'

  export default {
    mixins: [FormElements],
    setup() {
      const formElements = useFormElements()

      return {
        ...formElements,
      }
    },
    data() {
      return {
        defaultClasses: {
          container: 'row',
          wrapper: 'form-elements',
        }
      }
    },
  }
</script>

<style lang="scss">
  // required because of SliderElement
  .form-elements {
    width: 100%;
  }
</style>