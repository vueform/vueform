<template>
  <div :class="theme.classes.formElements.container">
    <div v-sortable="sortable">
      <template v-for="(element, name) in schema">
        <component
          :is="component(element.type)"
          :schema="element"
          :name="name"
          :key="name"
          @remove="remove"
        />
      </template>
    </div>

    <a href="" @click.prevent="add">Add</a>
  </div>
</template>

<script>
  import FormElements from './../../../components/FormElements'

  export default {
    mixins: [FormElements],
  }
</script>