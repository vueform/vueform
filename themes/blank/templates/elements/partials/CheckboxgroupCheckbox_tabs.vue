<template>
  <label
    v-bind="attrs"
    :class="classes.container"
    tabindex="0"
    role="checkbox"
    :aria-checked="checked"
    @keypress.space.prevent="el$.toggle(value)"
    @keydown="handleKeydown"
  >
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
          :id="id"
          :class="classes.input"
          :name="name"
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