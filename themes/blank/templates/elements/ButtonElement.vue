<template>
  <component :is="elementLayout">
    <template #element>
      <!-- Use `button` tag -->
      <template v-if="buttonType === 'button'">
        <!-- Use it as a component -->
        <button
          v-if="buttonLabel && isButtonLabelComponent"
          v-bind="button"
          :disabled="isDisabled"
          :class="classes.button"
          @click.prevent="handleClick"
        >
          <component :is="buttonLabel"/>
        </button>

        <!-- Use it as HTML -->
        <button
          v-else-if="buttonLabel"
          v-bind="button"
          v-html="buttonLabel"
          :class="classes.button"
          :disabled="isDisabled"
          @click.prevent="handleClick" 
        ></button>

        <!-- Use it as slot -->
        <button
          v-else
          v-bind="button"
          :class="classes.button"
          :disabled="isDisabled"
          @click.prevent="handleClick" 
        ><slot :el$="el$"><component :is="fieldSlots.default" :el$="el$"/></slot></button>
      </template>

      <!-- Use `anchor` tag -->
      <template v-else>
        <!-- Use it as a component -->
        <a
          v-if="buttonLabel && isButtonLabelComponent"
          v-bind="button"
          :tabindex="isDisabled || isLoading ? -1 : undefined"
          :class="classes.button"
          @click="handleClick"
        >
          <component :is="buttonLabel"/>
        </a>

        <!-- Use it as HTML -->
        <a
          v-else-if="buttonLabel"
          v-bind="button"
          v-html="buttonLabel"
          :tabindex="isDisabled || isLoading ? -1 : undefined"
          :class="classes.button"
          @click="handleClick"
       />

        <!-- Use it as slot -->
        <a
          v-else
          v-bind="button"
          :tabindex="isDisabled || isLoading ? -1 : undefined"
          :class="classes.button"
          @click="handleClick"
        ><slot :el$="el$"><component :is="fieldSlots.default" :el$="el$"/></slot></a>
      </template>
    </template>

    <!-- Default element slots -->
    <template v-for="(component, slot) in elementSlots" #[slot]><slot :name="slot" :el$="el$"><component :is="component" :el$="el$"/></slot></template>
  </component>
</template>

<script>
  export default {
    name: 'ButtonElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          button: '',
          button_enabled: '',
          button_disabled: '',
          button_loading: '',
          button_sm: '',
          button_md: '',
          button_lg: '',
          $button: (classes, { isDisabled, isLoading, buttonClass, Size }) => ([
            classes.button,
            classes[`button_${Size}`],
            isDisabled ? classes.input_disabled : null,
            !isDisabled && !isLoading ? classes.button_enabled : null,
            isLoading ? classes.button_loading : null,
            buttonClass,
          ]),
        },
      }
    }
  }
</script>

<style lang="scss">
</style>