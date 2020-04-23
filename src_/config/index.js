import rules from './../utils/validation/rules'
import themes from './../themes'

var config = {
  theme: 'bs4',
  themes: themes,
  layout: 'horizontal',
  labels: false,
  formErrors: true,

  columns: {
    element: 12,
    label: 12,
    field: 12,
  },

  languages: {
    en: {
      label: 'English'
    },
  },
  language: 'en',
  locales: {},
  locale: 'en_US',
  timezone: null,
  userTimezone: null,

  validateOn: 'change|submit',
  rules: rules,

  headers: [],
  endpoints: {
    process: null,
    elements: {
      trix: {
        attachment: null
      }
    },
    validators: {
      active_url: null,
      exists: null,
      unique: null,
    },
  },
  method: 'POST',

  placesjs: {
    appId: null,
    apiKey: null,
  }
}

export default config