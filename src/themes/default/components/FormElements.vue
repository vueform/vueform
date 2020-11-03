<template>
  <div :class="classes.container">
    <div :class="classes.wrapper">
      <component
        v-for="(element, name, i) in schema"
        :is="component(element)"
        :schema="element"
        :name="name"
        :key="name"
        :ref="setRef(elements$, i)"
        v-ref:elements$
      />
    </div>
  </div>
</template>

<script>
  import FormElements from './../../../components/FormElements'

  export default {
    name: 'FormElements',
    mixins: [FormElements],
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