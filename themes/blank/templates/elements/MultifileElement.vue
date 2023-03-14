<template>
  <component :is="elementLayout" :multiple="true" ref="container">
    <template #element>
      <!-- Drag n drop -->
      <DragAndDrop
        v-if="drop && canDrop && hasAdd"
        :title="form$.translations.vueform.elements[type].dndTitle"
        :description="form$.translations.vueform.elements[type].dndDescription"
        :disabled="isDisabled"
        :class="classes.dnd"
        @click="handleClick"
        @drop="handleDrop"
     />

      <!-- Upload button -->
      <div
        v-else-if="hasAdd"
        v-bind="aria"
        :class="classes.button"
        :aria-labelledby="labelId"
        :aria-placeholder="form$.translations.vueform.elements.multifile.uploadButton"
        @click.prevent="handleClick"
        @keypress.enter.space="handleClick"
        role="button"
        tabindex="0"
      >{{ form$.translations.vueform.elements.multifile.uploadButton }}</div>
      
      <!-- Actual input field -->
      <input
        v-show="false"
        multiple
        :id="fieldId"
        type="file"
        @change="handleChange"
        :accept="accept"
        :disabled="isDisabled"
        ref="input" 
     />

      <div v-show="!empty" :class="classes.list" :key="`${fieldId}-${length}`" ref="list">
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
          listItem: '',
          handle: '',
          handleIcon: '',
          dnd: '',
          button: '',
        },
      }
    }
  }
</script>

<style lang="scss">
</style>