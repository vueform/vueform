<template>
  <span
    v-if="progress"
    :class="classes.progress"
  >{{ progress }}%</span>
</template>

<script>
  export default {
    name: 'FileSlotProgress',
    data() {
      return {
        defaultClasses: {
          progress: 'lf-progress'
        }
      }
    }
  }
</script>