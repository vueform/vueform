<template>
  <label
    v-bind="attrs"
    :class="classes.container"
    tabindex="0"
    role="radio"
    :aria-checked="checked"
    @keypress.space.prevent="el$.update(value)"
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
          type="radio"
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
    name: 'RadiogroupRadio_tabs',
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