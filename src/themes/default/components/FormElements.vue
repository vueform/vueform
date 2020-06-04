<template>
  <div :class="classes.container">
    <div :class="classes.wrapper">
      <template v-for="(element, name) in elements">
        <component
          :is="component(element)"
          :schema="element"
          :name="name"
          :key="name"
          ref="elements$"
        />
      </template>
    </div>
  </div>
</template>

<script>
  import FormElements from './../../../components/FormElements'

  export default {
    mixins: [FormElements],
    data() {
      return {
        defaultClasses: {
          container: 'row',
          wrapper: 'form-elements',
        }
      }
    }
  }
</script>