<template>
  <component :is="elementLayout">
    <template #element>
      <!-- Drag n drop -->
      <DragAndDrop
        v-if="drop && canDrop && canSelect"
        :title="__(`vueform.elements.${type}.dndTitle`)"
        :description="__(`vueform.elements.${type}.dndDescription`)"
        :disabled="isDisabled"
        @click="handleClick"
        @drop="handleDrop"
     />
      
      <!-- Upload button -->
      <a
        v-else-if="canSelect"
        href=""
        :class="classes.button"
        @click.prevent="handleClick"
      >{{ __(`vueform.elements.${type}.select`) }}</a>
      
      <!-- Hidden file input -->
      <input
        v-if="canSelect && !isDisabled && !preparing"
        v-show="false"
        type="file"
        :id="fieldId"
        :accept="accept"
        @change="handleChange"
        ref="input"
     />

      <!-- Preview -->
      <slot name="preview">
        <FilePreview/>
      </slot>
    </template>

    <!-- Default element slots -->
    <template v-for="(component, slot) in elementSlots" #[slot]><slot :name="slot" :el$="el$"><component :is="component" :el$="el$"/></slot></template>
  </component>
</template>

<script>
  export default {
    name: 'FileElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          container_removing: '',
          button: '',
          button_enabled: '',
          button_disabled: '',
          button_sm: '',
          button_md: '',
          button_lg: '',
          $container: (classes, { removing }) => ([
            classes.container,
            removing ? classes.container_removing : null,
          ]),
          $button: (classes, { isDisabled, preparing, Size }) => ([
            classes.button,
            classes[`button_${Size}`],
            !isDisabled && !preparing ? classes.button_enabled : null,
            isDisabled || preparing ? classes.button_disabled : null,
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
</style>