<template>
  <component :is="elementLayout">
    <template v-slot:field>

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
          <span v-if="hasSort" :class="classes.handle" data-handle><span></span></span>
          <a
            href=""
            v-if="hasRemove"
            :class="classes.remove"
            @click.prevent="handleRemove(i)"
          ><span></span></a>
        </div>
        
      </div>

      <a
        href=""
        v-if="hasAdd"
        :class="classes.add"
        @click.prevent="handleAdd"
        v-html="__('laraform.elements.list.add')"
      ></a>

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
    name: 'ListElement',
    data() {
      return {
        defaultClasses: {
          container: '',
          list: '',
          listItem: '',
          handle: '',
          remove: '',
          add: '',
          disabled: '',
          sorting: '',
        },
      }
    },
  }
</script>

<style lang="scss">
  .sortable-ghost {
    @apply opacity-60;
  }
</style>