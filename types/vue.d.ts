import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $laraform: string
  }
}