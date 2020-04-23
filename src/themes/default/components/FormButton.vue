<template>
  <button
    :class="this.class"
    :disabled="disabled"
    @click="handleClick"
  >{{ label }}</button>  
</template>

<script>
  import FormButton from './../../../components/FormButton'

  export default {
    mixins: [FormButton],
  }
</script>