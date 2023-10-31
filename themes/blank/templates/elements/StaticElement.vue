<template>
  <component v-if="wrap" :is="elementLayout" ref="container">
    <template #element>
      <!-- If content is HTML -->
      <template v-if="isHtml && (content || ['img', 'hr'].indexOf(tag) !== -1)">
        
        <div v-if="!tag && allowHtml" :class="classes.content" v-html="content" v-bind="attrs"></div>
        <div v-if="!tag && !allowHtml" :class="classes.content" v-bind="attrs">{{ content }}</div>
        
        <div v-if="tag === 'p'" :class="classes.tag">
          <p v-if="allowHtml" v-html="content" v-bind="attrs"></p>
          <p v-else v-bind="attrs">{{ content }}</p>
        </div>
        
        <div v-if="tag === 'h1'" :class="classes.tag">
          <h1 v-if="allowHtml" v-html="content" v-bind="attrs"></h1>
          <h1 v-else v-bind="attrs">{{ content }}</h1>
        </div>
        
        <div v-if="tag === 'h2'" :class="classes.tag">
          <h2 v-if="allowHtml" v-html="content" v-bind="attrs"></h2>
          <h2 v-else v-bind="attrs">{{ content }}</h2>
        </div>
      
        
        <div v-if="tag === 'h3'" :class="classes.tag">
          <h3 v-if="allowHtml" v-html="content" v-bind="attrs"></h3>
          <h3 v-else v-bind="attrs">{{ content }}</h3>
        </div>
        
        <div v-if="tag === 'h4'" :class="classes.tag">
          <h4 v-if="allowHtml" v-html="content" v-bind="attrs"></h4>
          <h4 v-else v-bind="attrs">{{ content }}</h4>
        </div>
        
        <div v-if="tag === 'blockquote'" :class="classes.tag">
          <blockquote v-if="allowHtml" v-html="content" v-bind="attrs"></blockquote>
          <blockquote v-else v-bind="attrs">{{ content }}</blockquote>
        </div>
        
        <div v-if="tag === 'a'" :class="classes.tag">
          <a v-if="allowHtml" :href="href" :target="target" v-bind="attrs" v-html="content"></a>
          <a v-else :href="href" :target="target" v-bind="attrs">{{ content }}</a>
        </div>
        
        <div v-if="tag === 'hr'" :class="classes.tag">
          <hr v-bind="attrs" />
        </div>
        
        <div v-if="tag === 'img'" :class="classes.tag">
          <a v-if="href" :href="href" :target="target">
            <img :src="src" :alt="alt" :title="title" :width="width" :height="height" v-bind="attrs" />
          </a>
          <img v-else :src="src" :alt="alt" :title="title" :width="width" :height="height" v-bind="attrs" />
        </div>
      </template>

      <!-- If content is component -->
      <component v-else-if="content" :is="componentContent" :el$="el$" />

      <!-- If content is a slot -->
      <slot v-else :el$="el$"><component :is="slotContent" :el$="el$"/></slot>
    </template>

    <!-- Default element slots -->
    <template v-for="(component, slot) in elementSlots" #[slot]><slot :name="slot" :el$="el$"><component :is="component" :el$="el$"/></slot></template>
  </component>

  <div v-else-if="content && isHtml" :class="classes.content" v-html="content"></div>

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