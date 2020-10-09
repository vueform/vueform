export default {
  vue: 3,

  extensions: [],
  
  themes: {},

  theme: 'default',

  languages: {
    en: {
      label: 'English',
      code: 'en'
    },
    fr: {
      label: 'French',
      code: 'fr',
    }
  },

  language: 'en',

  elements: {},
  
  components: {},

  rules: {},

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
    },
    elements: {
      trix: {
        attachment: '/trix/attachment'
      }
    }
  },

  services: {
    algolia: {
      app_id: 'plD1GPOB1JIC',
      api_key: '1f70532b07910d801387a12ea998f035',
    }
  },

  i18n: null,
}