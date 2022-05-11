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
        <FilePreview :key="view" />
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
          button: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>