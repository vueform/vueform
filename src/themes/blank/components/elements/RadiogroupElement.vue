<template>
  <component :is="elementLayout">

    <template v-slot:field>

      <div :class="classes.radioGroup">
        <slot v-for="(item, value, key) in items" name="radio" :el$="el$" :item="item" :value="value">
          <component
            :is="fieldSlots.radio"
            :item="item"
            :value="value"
            :key="key"
          />
        </slot>
      </div>

    </template>

    <template v-for="(slot) in elementSlots" v-slot:[slot]><slot :name="slot"></slot></template>
  </component>
</template>

<script>
  export default {
    name: 'RadiogroupElement',
    data() {
      return {
        defaultClasses: {
          container: '',
          radioGroup: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>