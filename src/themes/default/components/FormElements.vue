<template>
  <div :class="theme.classes.elementsContainer">
    <template v-for="(schema, name) in elements">
      <element
        :is="schema.component || schema.type + '-element'"
        :schema="schema"
        :name="name"
        :key="name"
        v-ref:elements$
      />

    </template>
  </div>
</template>

<script>
  import FormElements from './../../../components/FormElements'

  export default {
    mixins: [FormElements],
  }
</script>