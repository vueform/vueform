<template>
  <component :is="elementLayout">
    <template #field>
      <RadiogroupRadio
        v-for="(item, value, key) in items"
        :item="item"
        :value="value"
        :key="key"
      >
        <template #default="scope">
          <slot name="radio" :item="item" :value="value" v-bind="scope">
            <component :is="fieldSlots.radio" :item="item" :value="value" v-bind="scope"/>
          </slot>
        </template>
      </RadiogroupRadio>
    </template>

    <!-- Default element slots -->
    <template v-for="(component, slot) in elementSlots" #[slot]><slot :name="slot" :el$="el$"><component :is="component" :el$="el$"/></slot></template>
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