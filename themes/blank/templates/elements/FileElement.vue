<template>
  <component :is="elementLayout" ref="container">
    <template #element>
      <!-- Drag n drop -->
      <DragAndDrop
        v-if="drop && canDrop && canSelect"
        :title="form$.translations.vueform.elements[type].dndTitle"
        :description="form$.translations.vueform.elements[type].dndDescription"
        :disabled="isDisabled"
        @click="handleClick"
        @drop="handleDrop"
     />
      
      <!-- Upload button -->
      <div
        v-else-if="canSelect"
        v-bind="aria"
        :class="classes.button"
        :aria-labelledby="labelId"
        :aria-placeholder="form$.translations.vueform.elements[type].select"
        @click.prevent="handleClick"
        @keypress.enter.space="handleClick"
        role="button"
        tabindex="0"
      >{{ form$.translations.vueform.elements[type].select }}</div>
      
      <!-- Hidden file input -->
      <input
        v-if="canSelect && !isDisabled && !preparing"
        v-show="false"
        :id="fieldId"
        type="file"
        :accept="accept"
        @change="handleChange"
        ref="input"
     />

      <!-- Preview -->
      <slot name="preview">
        <FilePreview :key="view" :attrs="aria" />
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