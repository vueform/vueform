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
          <a
            href=""
            v-if="hasRemove"
            :class="classes.remove"
            @click.prevent="handleRemove(i)"
          ><span></span></a>
          <span v-if="hasSort" :class="classes.handle"><span></span></span>
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
          list: 'form-list',
          listItem: 'row',
          handle: 'list-handle',
          remove: 'list-remove',
          add: 'btn btn-primary btn-sm',
          disabled: 'is-disabled',
          sorting: 'is-sorting',
        },
      }
    },
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';

  .form-list {
    & > .row {
      position: relative;

      &:hover {
        .list-remove, .list-handle {
          visibility: visible;
          opacity: 1;
        }
      }
    }

    &.is-sorting {
      & > div:hover {
        .list-handle, .list-remove {
          visibility: hidden;
          opacity: 0;
        }
      }
    }

    .sortable-ghost {
      opacity: 0.6;
    }
  }

  .list-remove, .list-handle {
    visibility: hidden;
    opacity: 0;
    transition: .3s;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      background-repeat: no-repeat;
      background-position: center center;
    }
  }

  .list-remove {
    background: rgba(0,0,0,0.6);
    border-radius: 3px;
    position: absolute;
    left: calc(#{$grid-gutter-width} / 4);
    top: -9px;
    z-index: 3;

    span {
      width: 18px;
      height: 18px;
      background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='10px' height='9px' viewBox='0 0 10 9' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M5.86069609,4.50745002 L9.24338227,7.8901362 C9.32867106,7.9754517 9.32867106,8.11409272 9.24338227,8.19938152 L8.62457118,8.81819261 C8.53928238,8.90348141 8.40064135,8.90348141 8.31532585,8.81819261 L4.93263967,5.43550643 L1.54968647,8.81819261 C1.46437097,8.90348141 1.32572994,8.90348141 1.24041444,8.81819261 L0.621630055,8.19938152 C0.536314554,8.11409272 0.536314554,7.9754517 0.621630055,7.8901362 L4.00458326,4.50745002 L0.621630055,1.12449681 C0.536314554,1.03918131 0.536314554,0.900540282 0.621630055,0.815224781 L1.24070817,0.196440398 C1.32599697,0.111124897 1.46463799,0.111124897 1.5499535,0.196440398 L4.93263967,3.57939361 L8.31532585,0.196707426 C8.40064135,0.111418628 8.53928238,0.111418628 8.62457118,0.196707426 L9.24338227,0.815518512 C9.32867106,0.90080731 9.32867106,1.03944834 9.24338227,1.12476384 L5.86069609,4.50745002 Z' id='times-copy-6' fill='%23ffffff'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
    }
  }

  .list-handle {
    border-radius: 3px;
    position: absolute;
    left: calc(#{$input-height} * -1 + (#{$grid-gutter-width} / 2));
    top: 0;
    cursor: grab;

    &:active {
      cursor: grabbing;
    }

    span {
      width: $input-height;
      height: $input-height;
      background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='11px' height='9px' viewBox='0 0 11 9' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3Ebars%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M10.0418527,0.894571939 L0.309709821,0.894571939 C0.235791888,0.894571939 0.17578125,0.834156736 0.17578125,0.759740479 L0.17578125,0.220414636 C0.17578125,0.145998379 0.235791888,0.0855831754 0.309709821,0.0855831754 L10.0418527,0.0855831754 C10.1157706,0.0855831754 10.1757812,0.145998379 10.1757812,0.220414636 L10.1757812,0.759740479 C10.1757812,0.834156736 10.1157706,0.894571939 10.0418527,0.894571939 Z M10.0418527,4.8049452 L0.309709821,4.8049452 C0.235791888,4.8049452 0.17578125,4.74453 0.17578125,4.67011374 L0.17578125,4.1307879 C0.17578125,4.05637164 0.235791888,3.99595644 0.309709821,3.99595644 L10.0418527,3.99595644 C10.1157706,3.99595644 10.1757812,4.05637164 10.1757812,4.1307879 L10.1757812,4.67011374 C10.1757812,4.74453 10.1157706,4.8049452 10.0418527,4.8049452 Z M10.0418527,8.80953919 L0.309709821,8.80953919 C0.235791888,8.80953919 0.17578125,8.74912399 0.17578125,8.67470773 L0.17578125,8.13538189 C0.17578125,8.06096563 0.235791888,8.00055043 0.309709821,8.00055043 L10.0418527,8.00055043 C10.1157706,8.00055043 10.1757812,8.06096563 10.1757812,8.13538189 L10.1757812,8.67470773 C10.1757812,8.74912399 10.1157706,8.80953919 10.0418527,8.80953919 Z' id='bars' fill='#{str-replace(#{$body-color}, '#', '%23')}'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
    }
  }
</style>