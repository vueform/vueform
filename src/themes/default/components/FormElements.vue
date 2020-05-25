<template>
  <div class="row">
    <div v-sortable="sortable">
      <template v-for="(element, name) in schema">
        <component
          :is="component(element.type)"
          :schema="element"
          :name="name"
          :key="name"
          @remove="remove"
          v-ref:elements$
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