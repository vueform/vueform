<template>
  <component :is="elementLayout">
    <template #element>
      <!-- Sorting container -->
      <div :class="classes.list" role="list" :aria-labelledby="labelId" ref="list">
        <div v-for="(val, i) in value" :key="i" :class="classes.listItem" role="listitem">
          <slot :index="i">
            <component
              :is="component(prototype)"
              v-if="prototype.type"
              v-bind="prototype"
              :name="i"
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
          <button
            v-if="hasRemove"
            aria-roledescription="❎"
            :class="classes.remove"
            :id="`${path}-${i}-remove-button`"
            @click.prevent="handleRemove(i)"
          >
            <span :class="classes.removeIcon"></span>
          </button>
        </div>
      </div>

      <!-- Add button -->
      <button
        v-if="hasAdd"
        :class="classes.add"
        :id="`${path}-add-button`"
        @click.prevent="handleAdd"
        v-html="addLabel"
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