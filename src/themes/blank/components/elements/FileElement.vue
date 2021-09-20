<template>
  <component :is="elementLayout">

    <template v-slot:field>

      <!-- Drag n drop -->
      <DragAndDrop
        v-if="drop && canDrop && canSelect"
        :title="__(`laraform.elements.${type}.dndTitle`)"
        :description="__(`laraform.elements.${type}.dndDescription`)"
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
      >{{ __(`laraform.elements.${type}.select`) }}</a>
      
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
        <GalleryPreview v-if="image && view === 'gallery'" />
        <ImagePreview v-else-if="image" />
        <FilePreview v-else />
      </slot>
        
    </template>

    <template v-for="(component, slot) in elementSlots" v-slot:[slot]><slot :name="slot" :el$="el$"><component :is="component" :el$="el$" /></slot></template>
  </component>
</template>

<script>
  export default {
    name: 'FileElement',
    data() {
      return {
        defaultClasses: {
          container: '',
          container_removing: '',
          button: '',
          button_enabled: '',
          button_disabled: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>