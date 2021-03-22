import useElementComponent from './../../../composables/useElementComponent'

describe('FileSlotProgress', () => {
  useElementComponent('file', 'FileSlotProgress', { auto: false }, {
    execute(el) {
      el.progress = 50
    }
  })
})