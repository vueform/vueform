<template>
  <component :is="elementLayout">
    <template v-slot:field>

      <slot name="prefix"></slot>

      <div :class="classes.childrenContainer">
        <div :class="classes.element" v-sortable="sortable">

          <div v-for="(element, i) in instances" :key="element.key">
            <slot :index="element.key">
              <component
                :is="component(element)"
                v-if="element.type"
                v-bind="element"
                :name="i"
              />
            </slot>
            <a
              href=""
              :class="classes.remove"
              @click.prevent="handleRemove(i)"
              v-html="__('laraform.elements.list.remove')"
            ></a>
          </div>
          
        </div>
      </div>

      <a
        href=""
        :class="classes.add"
        @click.prevent="handleAdd"
        v-html="__('laraform.elements.list.add')"
      ></a>

      <slot name="suffix"></slot>
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
          container: 'lf-list',
          childrenContainer: 'element-group',
          element: 'list-element-container',
          sortable: 'list-element-container-sortable',
          remove: 'list-remove',
          add: 'list-add',
          disabled: 'disabled',
        },
        containers: {
          sortable: 'element',
          add: 'add',
          remove: 'remove',
        }
      }
    },
  }
</script>