import condition from './../plugins/condition'

export default {
  plugins: [
    condition,
  ],
  
  themes: {},

  theme: 'default',

  locale: 'en',

  languages: {
    en: {
      label: 'English',
      code: 'en'
    }
  },

  language: 'en',

  elements: {},
  
  components: {},

  labels: false,

  columns: {
    element: 12,
    label: 12,
    field: 12,
  },

  validateOn: 'change|submit|step',

  method: 'post',

  endpoints: {
    process: '/laraform/process',
    validators: {
      active_url: '/active_url',
      unique: '/',
      exists: '/',
    }
  },
}