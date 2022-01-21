<template>
  <component :is="elementLayout" :multiple="true">
    <template #element>
      <!-- Drag n drop -->
      <DragAndDrop
        v-if="drop && canDrop && hasAdd"
        :title="__(`vueform.elements.${type}.dndTitle`)"
        :description="__(`vueform.elements.${type}.dndDescription`)"
        :disabled="isDisabled"
        :class="classes.dnd"
        @click="handleClick"
        @drop="handleDrop"
     />

      <!-- Upload button -->
      <a
        v-else-if="hasAdd"
        href=""
        :class="classes.button"
        @click.prevent="handleClick"
      >{{ __('vueform.elements.multifile.uploadButton') }}</a>
      
      <!-- Actual input field -->
      <input
        v-show="false"
        multiple
        type="file"
        @change="handleChange"
        :accept="accept"
        :disabled="isDisabled"
        ref="input" 
     />

      <div v-show="!empty" :class="classes.list" ref="list">
        <div v-for="(val, i) in value" :key="i" :class="classes.listItem">
          <component
            :is="component(prototype)"
            v-if="prototype.type"
            v-bind="prototype"
            :disabled="!hasRemove"
            :embed="true"
            :name="i"
            @remove="remove(i)"
         />
          <!-- Sort handle -->
          <span v-if="hasSort" :class="classes.handle" data-handle>
            <span :class="classes.handleIcon"></span>
          </span>
        </div>
      </div>
      <div :class="classes.spacer"></div>
    </template>

    <!-- Default element slots -->
    <template v-for="(component, slot) in elementSlots" #[slot]><slot :name="slot" :el$="el$"><component :is="component" :el$="el$"/></slot></template>
  </component>
</template>

<script>
  export default {
    name: 'MultifileElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          list: '',
          list_file: '',
          list_image: '',
          list_gallery: '',
          list_disabled: '',
          list_sorting: '',
          spacer: '',
          listItem: '',
          listItem_file: '',
          listItem_image: '',
          listItem_gallery: '',
          handle: '',
          handle_file: '',
          handle_image: '',
          handle_gallery: '',
          handleIcon: '',
          handleIcon_file: '',
          handleIcon_image: '',
          handleIcon_gallery: '',
          dnd: '',
          button: '',
          button_enabled: '',
          button_disabled: '',
        },
      }
    }
  }
</script>

<style lang="scss">
</style>