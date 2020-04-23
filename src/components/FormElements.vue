<template>
  <div class="form-elements" v-sortable="sortable">
    <template v-for="(element, name) in schema">
      <component
        :is="`${element.type}-element`"
        :schema="element"
        :name="name"
        :key="name"
      />
    </template>

    <button @click.prevent="add">Add</button>
  </div>
</template>

<script>
  import TextElement from './TextElement'
  import TextareaElement from './TextareaElement'
  import ManagesElements from './../mixins/ManagesElements'

  export default {
    name: 'FormElements',
    mixins: [ManagesElements],
    components: {
      TextElement,
      TextareaElement,
    },
    inject: ['form$'],
    props: {
      schema: {
        type: Object,
        required: true
      }
    },
  }
</script>