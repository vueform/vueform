<template>
  <component :is="elementLayout" ref="container">
    <template #element>
      <div v-if="shouldVerify" :class="classes.wrapper">
        <div :id="fieldId" :class="classes.captcha" ref="input"></div>
      </div>
    </template>
    <!-- Default element slots -->
    <template v-for="(component, slot) in elementSlots" #[slot]><slot :name="slot" :el$="el$"><component :is="component" :el$="el$"/></slot></template>
  </component>
</template>

<script>
  export default {
    name: 'CaptchaElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
          captcha: '',
        },
      }
    },
  }
</script>

<style lang="scss">
</style>