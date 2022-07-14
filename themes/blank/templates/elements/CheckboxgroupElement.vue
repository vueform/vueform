<template>
  <component :is="elementLayout">
    <template #element>
      <div :class="classes.wrapper">
        <CheckboxgroupCheckbox
          v-for="(item, index, key) in resolvedOptions"
          :items="resolvedOptions"
          :index="index"
          :item="item"
          :value="item.value"
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
        merge: true,
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