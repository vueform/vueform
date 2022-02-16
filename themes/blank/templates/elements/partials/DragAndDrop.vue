<template>
  <div
    :class="classes.container"
    @click.prevent="handleClick"
    ref="area"
  >
    <span :class="classes.icon"></span>
    <span v-if="title" :class="classes.title">{{ title }}</span>
    <span v-if="description" :class="classes.description">{{ description }}</span>
  </div>
</template>

<script>
  export default {
    name: 'DragAndDrop',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          icon: '',
          title: '',
          description: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>