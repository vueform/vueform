<template>
  <div :class="classes.container">
    <div :class="classes.wrapper">
      <component
        :is="theme.elements.TextElement"
        v-for="(element, name) in schema"
        :schema="element"
        :name="name"
        :key="name"
        v-ref:elements$
      />
    </div>
  </div>
</template>

<script>
  import FormElements from './../../../components/FormElements'
  import init from './../../../init'

  export default {
    mixins: [FormElements],
    setup: (props, context) => init(props, context, FormElements, {
      container: 'row',
      wrapper: 'form-elements',
    }),
  }
</script>

<style lang="scss">
  // required because of SliderElement
  .form-elements {
    width: 100%;
  }
</style>