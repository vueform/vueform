<template>
  <div v-if="buttons.length > 0" :class="theme.classes.buttonsContainer">
    <template v-for="(button, index) in buttons">
      <component :is="theme.components.FormButton"
        :button="button"
        :key="index"
      />
    </template>
  </div>
</template>

<script>
  import FormButtons from './../../../components/FormButtons'

  export default {
    mixins: [FormButtons],
  }
</script>