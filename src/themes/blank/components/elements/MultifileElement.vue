<template>
  <component :is="elementLayout" :multiple="true">
    
    <template v-slot:field>

      <!-- Drag n drop -->
      <DragAndDrop
        v-if="drop && canDrop"
        :title="__(`laraform.elements.${type}.dndTitle`)"
        :description="__(`laraform.elements.${type}.dndDescription`)"
        :disabled="isDisabled"
        :class="classes.dnd"
        @click="handleClick"
        @drop="handleDrop"
      />

      <!-- Upload button -->
      <a
        v-else
        href=""
        :class="classes.button"
        @click.prevent="handleClick"
      >{{ __('laraform.elements.multifile.uploadButton') }}</a>
      
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
            :embed="true"
            :name="i"
            @remove="remove(i)"
          />
          <span v-if="!isDisabled && sort" :class="classes.handle" data-handle>
            <span :class="classes.handleIcon"></span>
          </span>
        </div>
      </div>
      <div :class="classes.spacer"></div>

    </template>

    <template v-for="(component, slot) in elementSlots" v-slot:[slot]>
      <slot :name="slot" :el$="el$">
        <component :is="component" v-bind="elementSlotProps[slot]" />
      </slot>
    </template>

  </component>
</template>

<script>
  export default {
    name: 'MultifileElement',
    data() {
      return {
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