<template>
  <component :is="elementLayout" ref="container">
    <template #element>
      <!-- Sorting container -->
      <div :class="classes.list" role="list" :aria-labelledby="labelId" ref="list">
        <div v-for="(val, i) in value" :key="i" :class="classes.listItem" role="listitem" :data-id="`${path}-${i}`">
          <slot :index="i">
            <component
              :is="component(prototype)"
              v-if="prototype.type"
              v-bind="prototype"
              :name="i"
              :key="i"
           />
          </slot>

          <!-- Sort handle -->
          <span
            v-if="hasSort"
            :class="classes.handle"
            data-handle
          >
            <span :class="classes.handleIcon"></span>
          </span>

          <!-- Remove button -->
          <div
            v-if="hasRemove"
            :aria-roledescription="form$.translations.vueform.a11y.list.remove"
            :class="classes.remove"
            :id="`${path}-${i}-remove-button`"
            @click.prevent="handleRemove(i)"
            @keypress.space.enter="handleRemove(i)"
            role="button"
            tabindex="0"
          >
            <span :class="classes.removeIcon"></span>
          </div>
        </div>
      </div>

      <!-- Add button -->
      <div
        v-if="hasAdd"
        :class="classes.add"
        :id="`${fieldId}-add-button`"
        @click.prevent="handleAdd"
        @keypress.enter.space="handleAdd"
        v-html="addLabel"
        role="button"
        tabindex="0"
      />
    </template>

    <!-- Default element slots -->
    <template v-for="(component, slot) in elementSlots" #[slot]><slot :name="slot" :el$="el$"><component :is="component" :el$="el$"/></slot></template>
  </component>
</template>

<script>
  export default {
    name: 'ListElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          list: '',
          listItem: '',
          handle: '',
          handleIcon: '',
          remove: '',
          removeIcon: '',
          add: '',
        },
      }
    },
  }
</script>

<style lang="scss">
</style>