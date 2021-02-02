<template>
  <component :is="layout">

    <template v-slot:field>

      <slot name="prefix"></slot>

      <div :class="classes.childrenContainer">
        <div :class="classes.element" v-sortable="sortable">

          <template v-for="(element, i) in instances">
            <div :key="element.key">
              <slot :index="element.key">
                <component
                  v-if="element.type"
                  :is="component(element)"
                  :schema="element"
                  :name="i"
                  :parent="el$"
                />
              </slot>
              <a
                href=""
                :class="classes.remove"
                @click.prevent="handleRemove(i)"
                v-html="__('laraform.elements.list.remove')"
              ></a>
            </div>
          </template>
          
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

    <template v-slot:info><slot name="info" :el$="el$"><component :is="slots.info" /></slot></template>
    <template v-slot:before><slot name="before" :el$="el$"><component :is="slots.before" type="before" /></slot></template>
    <template v-slot:label><slot name="label" :el$="el$"><component :is="slots.label" /></slot></template>
    <template v-slot:between><slot name="between" :el$="el$"><component :is="slots.between" type="between" /></slot></template>
    <template v-slot:description><slot name="description" :el$="el$"><component :is="slots.description" /></slot></template>
    <template v-slot:error><slot name="error" :el$="el$"><component :is="slots.error" /></slot></template>
    <template v-slot:message><slot name="message" :el$="el$"><component :is="slots.message" /></slot></template>
    <template v-slot:after><slot name="after" :el$="el$"><component :is="slots.after" type="after" /></slot></template>
  </component>
</template>

<script>
  import ListElement from './../../../../components/elements/ListElement'

  export default {
    name: 'ListElement',
    mixins: [ListElement],
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