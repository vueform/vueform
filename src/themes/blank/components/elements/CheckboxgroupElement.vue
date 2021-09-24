<template>
  <component :is="elementLayout">
    <template #field>
      <div :class="classes.wrapper">
        <CheckboxgroupCheckbox
          v-for="(item, value, key) in items"
          :item="item"
          :value="value"
          :key="key"
        >
          <template #default="scope">
            <slot name="checkbox" v-bind="scope" :el$="el$">
              <component :is="fieldSlots.checkbox" v-bind="scope" :el$="el$"/>
            </slot>
          </template>
        </CheckboxgroupCheckbox>
      </div>
    </template>

    <!-- Default element slots -->
    <template v-for="(component, slot) in elementSlots" #[slot]><slot :name="slot" :el$="el$"><component :is="component" :el$="el$"/></slot></template>
  </component>
</template>

<script>
  export default {
    name: 'CheckboxgroupElement',
    data() {
      return {
        defaultClasses: {
          container: '',
          wrapper: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>