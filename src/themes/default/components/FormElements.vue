<template>
  <div class="form-elements">
    <div v-sortable="sortable">
      <template v-for="(element, name) in schema">
        <component
          :is="`${element.type}-element`"
          :schema="element"
          :name="name"
          :key="name"
          @remove="remove"
          v-ref:elements$
        />
      </template>
    </div>
    <button @click.prevent="add">Add</button>
  </div>
</template>

<script>
  import FormElements from './../../../components/FormElements'

  export default {
    mixins: [FormElements],
  }
</script>