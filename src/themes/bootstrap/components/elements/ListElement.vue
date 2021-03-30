<template>
  <component :is="elementLayout">
    <template v-slot:field>

      <div :class="classes.childrenContainer">
        <div :class="classes.element" ref="list">
          <div v-for="(val, i) in value" :key="i">
            <slot :index="i">
              <component
                :is="component(prototype)"
                v-if="prototype.type"
                v-bind="prototype"
                :name="i"
              />
            </slot>
            <a
              href=""
              v-if="!isDisabled"
              :class="classes.remove"
              @click.prevent="handleRemove(i)"
              v-html="__('laraform.elements.list.remove')"
            ></a>
            <span :class="classes.handle">[-{{ name }}]</span>
          </div>
          
        </div>
      </div>

      <a
        href=""
        v-if="!isDisabled"
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
          container: 'lf-list',
          childrenContainer: 'element-group',
          element: 'list-element-container',
          sortable: 'list-element-container-sortable',
          remove: 'list-remove',
          add: 'list-add',
          disabled: 'disabled',
          handle: 'handle',
        },
        classKeys: {
          sortable: 'element',
          add: 'add',
          remove: 'remove',
          handle: 'handle',
        }
      }
    },
  }
</script>

<style>
  .gu-mirror {
    position: fixed !important;
    margin: 0 !important;
    z-index: 9999 !important;
    opacity: 0.8;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";
    filter: alpha(opacity=80);
  }
  .gu-hide {
    display: none !important;
  }
  .gu-unselectable {
    -webkit-user-select: none !important;
    -moz-user-select: none !important;
    -ms-user-select: none !important;
    user-select: none !important;
  }
  .gu-transit {
    opacity: 0.2;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=20)";
    filter: alpha(opacity=20);
  }
</style>