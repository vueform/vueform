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
          container_inactive: '',
          container_active: '',
          container_enabled: '',
          container_disabled: '',
          icon: '',
          title: '',
          description: '',
          $container: (classes, { dragging, disabled }) => ([
            classes.container,
            dragging ? classes.container_active : classes.container_inactive,
            disabled ? classes.container_disabled : classes.container_enabled,
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
</style>