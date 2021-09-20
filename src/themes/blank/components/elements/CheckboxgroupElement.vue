<template>
  <component :is="elementLayout">

    <template v-slot:field>
      <div :class="classes.checkboxGroup">
        
        <CheckboxgroupCheckbox
          v-for="(item, value, key) in items"
          :item="item"
          :value="value"
          :key="key"
        >
          <template #default="scope">
            <slot name="checkbox" v-bind="scope">
              <component :is="fieldSlots.checkbox" v-bind="scope" />
            </slot>
          </template>
        </CheckboxgroupCheckbox>

      </div>
    </template>

    <template v-for="(component, slot) in elementSlots" v-slot:[slot]><slot :name="slot" :el$="el$"><component :is="component" :el$="el$" /></slot></template>
  </component>
</template>

<script>
  export default {
    name: 'CheckboxgroupElement',
    data() {
      return {
        defaultClasses: {
          container: '',
          checkboxGroup: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>