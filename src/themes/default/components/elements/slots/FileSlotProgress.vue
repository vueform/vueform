<template>
  <span
    v-if="progress"
    :class="classes.progress"
  >{{ progress }}%</span>
</template>

<script>
  import FileSlotProgress from './../../../../../components/elements/slots/FileSlotProgress'

  export default {
    mixins: [FileSlotProgress],
    data() {
      return {
        defaultClasses: {
          progress: 'lf-progress'
        }
      }
    }
  }
</script>