<template>
  <component v-if="wrap" :is="elementLayout" ref="container">
    <template #element>
      <!-- If content is HTML -->
      <template v-if="isHtml && (resolvedContent || ['img', 'hr'].indexOf(tag) !== -1)">
        
        <div v-if="!tag && allowHtml" :class="classes.content" v-html="resolvedContent" v-bind="attrs"></div>
        <div v-if="!tag && !allowHtml" :class="classes.content" v-bind="attrs">{{ content }}</div>


        <div v-if="tag === 'a'" :class="classes.tag">
          <a v-if="allowHtml" :href="href" :target="target" v-bind="attrs" v-html="resolvedContent"></a>
          <a v-else :href="href" :target="target" v-bind="attrs">{{ resolvedContent }}</a>
        </div>
        
        <div v-else-if="tag === 'hr'" :class="classes.tag">
          <hr v-bind="attrs" />
        </div>
        
        <div v-else-if="tag === 'img'" :class="classes.tag">
          <a v-if="href" :href="href" :target="target">
            <img :src="src" :alt="alt" :title="title" :width="width" :height="height" v-bind="attrs" />
          </a>
          <img v-else :src="src" :alt="alt" :title="title" :width="width" :height="height" v-bind="attrs" />
        </div>
        
        <div v-else-if="tag" :class="classes.tag">
          <component :is="tag" v-if="allowHtml" v-html="resolvedContent" v-bind="attrs"></component>
          <component :is="tag" v-else v-bind="attrs">{{ resolvedContent }}</component>
        </div>
        
      </template>

      <!-- If content is component -->
      <component v-else-if="resolvedContent" :is="componentContent" :el$="el$" />

      <!-- If content is a slot -->
      <slot v-else :el$="el$"><component :is="slotContent" :el$="el$"/></slot>
    </template>

    <!-- Default element slots -->
    <template v-for="(component, slot) in elementSlots" #[slot]><slot :name="slot" :el$="el$"><component :is="component" :el$="el$"/></slot></template>
  </component>

  <div v-else-if="content && isHtml" :class="classes.content" v-html="resolvedContent"></div>

  <component v-else-if="content" :is="componentContent" ref="container" />

  <div v-else :class="classes.container" ref="container">
    <slot :el$="el$"><component :is="slotContent" :el$="el$"/></slot>
  </div>
</template>

<script>
  export default {
    name: 'StaticElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          content: '',
          tag: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>