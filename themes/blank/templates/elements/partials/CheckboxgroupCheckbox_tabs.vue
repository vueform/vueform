<template>
  <label :class="classes.container">
    <slot
      v-bind="{ name }"
      :classes="classes"
      :is-disabled="isDisabled"
      :id="id"
      :item="item"
      :value="value"
      :items="items"
      :index="index"
    >
      <div :class="classes.wrapper">
        <input
          type="checkbox"
          v-model="el$.model"
          :value="value"
          :class="classes.input"
          :name="name"
          :id="id"
          :disabled="isDisabled"
        />
        <span 
          :class="classes.text"
          v-html="`${item.label}`"
        />
      </div>
    </slot>
  </label>
</template>

<script>
  export default {
    name: 'CheckboxgroupCheckbox_tabs',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
          input: '',
          text: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>