// Organizer for props

module.exports = {
  specific: {
    label: 'Element specific',
    props: [
      'inputType', 'addons', 'autocomplete',
    ],
  },
  attributes: {
    label: 'Attributes',
    props: [
      'name', 'id', 'readonly', 'disabled'
    ],
  },
  texts: {
    label: 'Texts',
    props: [
      'label', 'placeholder', 'floating', 'info', 'description', 'before', 'between', 'after',
    ],
  },
  data: {
    label: 'Data',
    props: [
      'default', 'formatData', 'formatLoad', 'submit'
    ],
  },
  validation: {
    label: 'Validation',
    props: [
      'rules', 'debounce', 'messages', 
    ],
  },
  conditions: {
    label: 'Conditions',
    props: [
      'conditions',
    ],
  },
  layout: {
    label: 'Layout',
    props: [
      'columns', 'inline', 'layout', 'overrideComponents', 'slots',
    ],
  },
  styling: {
    label: 'Styling',
    props: [
      'addClass', 'addClasses', 'overrideClasses',
    ],
  },
}