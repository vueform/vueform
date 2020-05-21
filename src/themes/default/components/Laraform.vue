<template>
  <form class="laraform-bs4">
    <component :is="extendedTheme.components.FormElements"
      :schema="schema"
      @updateSchema="updateSchema"
      ref="elements$"
    />
  </form>
</template>
