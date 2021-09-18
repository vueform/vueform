<template>
  <component :is="elementLayout">
    <template v-slot:field>

      <template v-if="buttonType === 'button'">

        <button
          v-if="buttonLabel && isButtonLabelComponent"
          v-bind="button"
          :disabled="isDisabled"
          :class="classes.button"
          @click.prevent="handleClick"
        >
          <component :is="buttonLabel" />
        </button>

        <button
          v-else-if="buttonLabel"
          v-bind="button"
          v-html="buttonLabel"
          :class="classes.button"
          :disabled="isDisabled"
          @click.prevent="handleClick" 
        ></button>

        <button
          v-else
          v-bind="button"
          :class="classes.button"
          :disabled="isDisabled"
          @click.prevent="handleClick" 
        ><slot><component :is="fieldSlots.default" /></slot></button>

      </template>

      <template v-else>
        <a
          v-if="buttonLabel && isButtonLabelComponent"
          v-bind="button"
          :tabindex="isDisabled || isLoading ? -1 : undefined"
          :class="classes.button"
          @click="handleClick"
        >
          <component :is="buttonLabel" />
        </a>

        <a
          v-else-if="buttonLabel"
          v-bind="button"
          v-html="buttonLabel"
          :tabindex="isDisabled || isLoading ? -1 : undefined"
          :class="classes.button"
          @click="handleClick"
        />

        <a
          v-else
          v-bind="button"
          :tabindex="isDisabled || isLoading ? -1 : undefined"
          :class="classes.button"
          @click="handleClick"
        ><slot><component :is="fieldSlots.default" /></slot></a>
      </template>

    </template>

    <template v-for="(slot) in elementSlots" v-slot:[slot]><slot :name="slot"></slot></template>
  </component>
</template>

<script>
  export default {
    name: 'ButtonElement',
    data() {
      return {
        defaultClasses: {
          container: '',
          button: '',
          button_enabled: '',
          button_disabled: '',
          button_loading: '',
        },
      }
    }
  }
</script>

<style lang="scss">
</style>