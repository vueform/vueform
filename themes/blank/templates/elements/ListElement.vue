<template>
  <component :is="elementLayout">
    <template #element>
      <!-- Sorting container -->
      <div :class="classes.list" ref="list">
        <div v-for="(val, i) in value" :key="i" :class="classes.listItem">
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
          <a
            href=""
            v-if="hasRemove"
            :class="classes.remove"
            @click.prevent="handleRemove(i)"
          >
            <span :class="classes.removeIcon"></span>
          </a>
        </div>
      </div>

      <!-- Add button -->
      <a
        href=""
        v-if="hasAdd"
        :class="classes.add"
        @click.prevent="handleAdd"
        v-html="addLabel"
      ></a>
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
        defaultClasses: {
          container: '',
          list: '',
          list_disabled: '',
          list_sorting: '',
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