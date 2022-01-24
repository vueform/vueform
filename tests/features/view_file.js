export { 
  hidden,
  active,
  visible,
  Size,
  Views,
  hide,
  show,
  activate,
  deactivate,
  rendering
} from './view'

export const View = function(elementType, elementName, options) {
  it('should be equal to value from views', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      },
      views: {
        [elementName]: 'dark'
      }
    })

    let el = form.vm.el$('el')

    expect(el.View).toBe('file')
  })

  it('should be equal to props value', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          view: 'light'
        }
      },
      views: {
        [elementName]: 'dark'
      }
    })

    let el = form.vm.el$('el')

    expect(el.View).toBe('light')
  })
}